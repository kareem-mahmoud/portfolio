<?php

declare(strict_types=1);

use PHPMailer\PHPMailer\Exception as PHPMailerException;
use PHPMailer\PHPMailer\PHPMailer;

require __DIR__ . '/mailer/Exception.php';
require __DIR__ . '/mailer/PHPMailer.php';
require __DIR__ . '/mailer/SMTP.php';

$recipient = 'kareem.mahmoud.abd.elhannan@gmail.com';
$redirectPath = '/contact';

function redirect_to_contact(string $status, string $message = ''): void
{
    global $redirectPath;

    $parameters = ['status' => $status];
    if ($message !== '') {
        $parameters['message'] = $message;
    }

    header('Location: ' . $redirectPath . '?' . http_build_query($parameters));
    exit;
}

function clean_single_line(string $value): string
{
    return trim(str_replace(["\r", "\n"], ' ', $value));
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    redirect_to_contact('error', 'Invalid request.');
}

// This invisible field catches automated submissions without affecting visitors.
if (trim($_POST['website'] ?? '') !== '') {
    redirect_to_contact('success');
}

$name = clean_single_line($_POST['Your Name'] ?? '');
$phone = clean_single_line($_POST['Phone Number'] ?? '');
$email = clean_single_line($_POST['E-mail'] ?? '');
$message = trim($_POST['Your Inquire'] ?? '');

if ($name === '' || $email === '' || $message === '') {
    redirect_to_contact('error', 'Please fill in your name, email, and message.');
}

if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    redirect_to_contact('error', 'Please enter a valid email address.');
}

$configPath = __DIR__ . '/contact-config.php';
if (!is_file($configPath)) {
    error_log('Portfolio contact form: missing contact-config.php.');
    redirect_to_contact('error', 'Unable to send your message. Please try again later.');
}
require $configPath;

$body = implode(PHP_EOL, [
    'Name: ' . $name,
    'Phone: ' . $phone,
    'Email: ' . $email,
    '',
    'Message:',
    $message,
]);

$mailer = new PHPMailer(true);

try {
    $mailer->isSMTP();
    $mailer->Host = 'smtp.gmail.com';
    $mailer->SMTPAuth = true;
    $mailer->Username = SMTP_USERNAME;
    $mailer->Password = SMTP_PASSWORD;
    $mailer->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
    $mailer->Port = 587;
    $mailer->CharSet = PHPMailer::CHARSET_UTF8;

    $mailer->setFrom(SMTP_USERNAME, 'Portfolio website');
    $mailer->addAddress($recipient);
    $mailer->addReplyTo($email, $name);

    $mailer->Subject = 'New portfolio contact form message';
    $mailer->Body = $body;
    $mailer->isHTML(false);

    $mailer->send();
} catch (PHPMailerException $exception) {
    error_log('Portfolio contact form: PHPMailer failed: ' . $mailer->ErrorInfo);
    redirect_to_contact('error', 'Unable to send your message. Please try again later.');
}

redirect_to_contact('success');
