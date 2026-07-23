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

function email_layout(string $heading, string $bodyHtml): string
{
    return <<<HTML
    <div style="font-family: Arial, Helvetica, sans-serif; max-width: 600px; margin: 0 auto; color: #1f1f1f;">
        <div style="background: #21252b; padding: 24px; border-radius: 8px 8px 0 0;">
            <h2 style="color: #ffffff; margin: 0; font-size: 20px;">{$heading}</h2>
        </div>
        <div style="border: 1px solid #e2e2e2; border-top: none; padding: 24px; border-radius: 0 0 8px 8px;">
            {$bodyHtml}
        </div>
    </div>
    HTML;
}

function build_owner_email_html(string $name, string $phone, string $email, string $message): string
{
    $safeName = htmlspecialchars($name, ENT_QUOTES, 'UTF-8');
    $safePhone = htmlspecialchars($phone !== '' ? $phone : 'Not provided', ENT_QUOTES, 'UTF-8');
    $safeEmail = htmlspecialchars($email, ENT_QUOTES, 'UTF-8');
    $safeMessage = nl2br(htmlspecialchars($message, ENT_QUOTES, 'UTF-8'));

    return email_layout('New portfolio contact message', <<<HTML
        <table style="width: 100%; border-collapse: collapse; margin-bottom: 20px;">
            <tr>
                <td style="padding: 6px 0; color: #666; width: 90px;">Name</td>
                <td style="padding: 6px 0; font-weight: bold;">{$safeName}</td>
            </tr>
            <tr>
                <td style="padding: 6px 0; color: #666;">Phone</td>
                <td style="padding: 6px 0;">{$safePhone}</td>
            </tr>
            <tr>
                <td style="padding: 6px 0; color: #666;">Email</td>
                <td style="padding: 6px 0;"><a href="mailto:{$safeEmail}" style="color: #528bff;">{$safeEmail}</a></td>
            </tr>
        </table>
        <p style="color: #666; margin-bottom: 6px;">Message</p>
        <p style="white-space: pre-wrap; line-height: 1.5;">{$safeMessage}</p>
        HTML);
}

function build_visitor_email_html(string $name, string $message): string
{
    $safeName = htmlspecialchars($name, ENT_QUOTES, 'UTF-8');
    $safeMessage = nl2br(htmlspecialchars($message, ENT_QUOTES, 'UTF-8'));

    return email_layout("Thanks for reaching out, {$safeName}!", <<<HTML
        <p style="line-height: 1.5;">I've received your message and will get back to you as soon as I can.</p>
        <p style="color: #666; margin: 20px 0 6px;">Your message</p>
        <p style="white-space: pre-wrap; line-height: 1.5; background: #f7f7f7; padding: 12px; border-radius: 6px;">{$safeMessage}</p>
        <p style="line-height: 1.5; margin-top: 20px;">— Kareem</p>
        HTML);
}

$ownerPlainBody = implode(PHP_EOL, [
    'Name: ' . $name,
    'Phone: ' . ($phone !== '' ? $phone : 'Not provided'),
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
    $mailer->isHTML(true);

    $mailer->setFrom(SMTP_USERNAME, 'Portfolio website');
    $mailer->addAddress($recipient);
    $mailer->addReplyTo($email, $name);

    $mailer->Subject = 'New portfolio contact form message';
    $mailer->Body = build_owner_email_html($name, $phone, $email, $message);
    $mailer->AltBody = $ownerPlainBody;

    $mailer->send();
} catch (PHPMailerException $exception) {
    error_log('Portfolio contact form: PHPMailer failed: ' . $mailer->ErrorInfo);
    redirect_to_contact('error', 'Unable to send your message. Please try again later.');
}

// Best-effort confirmation email back to the visitor; the form has already
// succeeded from their perspective once the owner notification above sends.
try {
    $mailer->clearAddresses();
    $mailer->clearReplyTos();
    $mailer->addAddress($email, $name);

    $mailer->Subject = 'Thanks for reaching out';
    $mailer->Body = build_visitor_email_html($name, $message);
    $mailer->AltBody = "Hi {$name},\n\nThanks for reaching out! I've received your message and will get back to you soon.\n\nYour message:\n{$message}\n\n— Kareem";

    $mailer->send();
} catch (PHPMailerException $exception) {
    error_log('Portfolio contact form: confirmation email failed: ' . $mailer->ErrorInfo);
}

redirect_to_contact('success');
