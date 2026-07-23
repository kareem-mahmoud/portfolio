<?php

declare(strict_types=1);

use PHPMailer\PHPMailer\Exception;
use PHPMailer\PHPMailer\PHPMailer;

require __DIR__ . '/mailer/Exception.php';
require __DIR__ . '/mailer/PHPMailer.php';
require __DIR__ . '/mailer/SMTP.php';

const CONTACT_RECIPIENT = 'kareem.mahmoud.abd.elhannan@gmail.com';

header('Content-Type: application/json; charset=utf-8');

function contact_response(int $status, array $payload): never
{
    http_response_code($status);
    echo json_encode($payload, JSON_UNESCAPED_UNICODE);
    exit;
}

function contact_error_code(Throwable $exception, string $mailerError = ''): string
{
    $details = strtolower($exception->getMessage() . ' ' . $mailerError);

    if (str_contains($details, 'authenticate') || str_contains($details, 'username') || str_contains($details, 'password')) {
        return 'SMTP_AUTH';
    }

    if (str_contains($details, 'connect') || str_contains($details, 'timed out')) {
        return 'SMTP_CONNECT';
    }

    return 'SMTP_SEND';
}

function contact_string(array $data, string $key): string
{
    return trim((string) ($data[$key] ?? ''));
}

function contact_escape(string $value): string
{
    return htmlspecialchars($value, ENT_QUOTES | ENT_SUBSTITUTE, 'UTF-8');
}

if (($_SERVER['REQUEST_METHOD'] ?? '') !== 'POST') {
    contact_response(405, ['message' => 'Only POST requests are allowed.']);
}

if (!str_contains($_SERVER['CONTENT_TYPE'] ?? '', 'application/json')) {
    contact_response(415, ['message' => 'The contact form must send JSON data.']);
}

try {
    $data = json_decode(file_get_contents('php://input'), true, 512, JSON_THROW_ON_ERROR);
} catch (JsonException) {
    contact_response(400, ['message' => 'Invalid JSON data.']);
}

if (!is_array($data)) {
    contact_response(400, ['message' => 'Invalid request data.']);
}

if (contact_string($data, 'website') !== '') {
    contact_response(200, ['message' => 'Your message has been sent successfully.']);
}

$name = str_replace(["\r", "\n"], ' ', contact_string($data, 'name'));
$phone = str_replace(["\r", "\n"], ' ', contact_string($data, 'phone'));
$email = str_replace(["\r", "\n"], '', contact_string($data, 'email'));
$message = contact_string($data, 'message');

if ($name === '' || $email === '' || $message === '') {
    contact_response(422, ['message' => 'Please fill in your name, email, and message.']);
}

if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    contact_response(422, ['message' => 'Please enter a valid email address.']);
}

if (strlen($name) > 120 || strlen($phone) > 60 || strlen($email) > 254 || strlen($message) > 5000) {
    contact_response(422, ['message' => 'One or more fields are too long.']);
}

$configPath = __DIR__ . '/contact-config.php';
if (!is_file($configPath)) {
    error_log('Portfolio contact form: missing contact-config.php.');
    contact_response(500, ['message' => 'Unable to send your message. Please try again later.']);
}

require $configPath;

// Google displays App Passwords in groups of four characters. Remove those
// visual spaces so either the grouped or ungrouped value works.
$smtpPassword = preg_replace('/\s+/', '', SMTP_PASSWORD);

$safeName = contact_escape($name);
$safePhone = contact_escape($phone !== '' ? $phone : 'Not provided');
$safeEmail = contact_escape($email);
$safeMessage = nl2br(contact_escape($message));

try {
    $mail = new PHPMailer(true);
    $mail->isSMTP();
    $mail->Host = 'smtp.gmail.com';
    $mail->SMTPAuth = true;
    $mail->Username = SMTP_USERNAME;
    $mail->Password = $smtpPassword;
    $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
    $mail->Port = 587;
    $mail->CharSet = PHPMailer::CHARSET_UTF8;
    $mail->isHTML(true);
    $mail->setFrom(SMTP_USERNAME, 'Portfolio website');
    $mail->addAddress(CONTACT_RECIPIENT, 'Kareem Mahmoud');
    $mail->addReplyTo($email, $name);
    $mail->Subject = 'New portfolio contact form message';
    $mail->Body = "<h2>New portfolio contact message</h2><p><strong>Name:</strong> {$safeName}</p><p><strong>Phone:</strong> {$safePhone}</p><p><strong>Email:</strong> <a href=\"mailto:{$safeEmail}\">{$safeEmail}</a></p><p><strong>Message:</strong></p><p>{$safeMessage}</p>";
    $mail->AltBody = "Name: {$name}\nPhone: " . ($phone ?: 'Not provided') . "\nEmail: {$email}\n\nMessage:\n{$message}";
    $mail->send();
} catch (Throwable $exception) {
    error_log('Portfolio contact form failed: ' . $exception->getMessage());
    contact_response(500, [
        'message' => 'Unable to send your message. Please try again later.',
        'code' => contact_error_code($exception, isset($mail) ? $mail->ErrorInfo : '')
    ]);
}

contact_response(200, ['message' => 'Your message has been sent successfully.']);
