<?php

declare(strict_types=1);

$recipient = 'kimostarstarstar@gmail.com';
$subject = 'New portfolio contact form message';
$redirectBase = '/contact';

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    header('Location: ' . $redirectBase . '?status=error&message=' . urlencode('Method not allowed.'));
    exit;
}

function clean_input(string $value): string
{
    return trim(str_replace(["\r", "\n"], ' ', $value));
}

$name = clean_input($_POST['Your Name'] ?? '');
$phone = clean_input($_POST['Phone Number'] ?? '');
$email = filter_var(trim($_POST['E-mail'] ?? ''), FILTER_SANITIZE_EMAIL);
$message = trim($_POST['Your Inquire'] ?? '');

if ($name === '' || $email === '' || $message === '') {
    http_response_code(400);
    header('Location: ' . $redirectBase . '?status=error&message=' . urlencode('Please fill in your name, email, and message.'));
    exit;
}

if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    http_response_code(400);
    header('Location: ' . $redirectBase . '?status=error&message=' . urlencode('Please enter a valid email address.'));
    exit;
}

$bodyLines = [
    "Name: {$name}",
    "Phone: {$phone}",
    "Email: {$email}",
    '',
    'Message:',
    $message,
];

$body = implode(PHP_EOL, $bodyLines);

$headers = [
    'MIME-Version: 1.0',
    'Content-Type: text/plain; charset=UTF-8',
    "From: {$name} <{$email}>",
    "Reply-To: {$email}",
];

$sent = mail($recipient, $subject, $body, implode("\r\n", $headers));

if (!$sent) {
    http_response_code(500);
    header('Location: ' . $redirectBase . '?status=error&message=' . urlencode('Unable to send your message right now.'));
    exit;
}

header('Location: ' . $redirectBase . '?status=success');
exit;
