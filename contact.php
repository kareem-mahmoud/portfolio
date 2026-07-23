<?php

declare(strict_types=1);

$recipient = 'kareem.mahmoud.abd.elhannan@gmail.com';
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

function redirect_with_message(string $status, string $message = ''): never
{
    global $redirectBase;

    $query = ['status' => $status];
    if ($message !== '') {
        $query['message'] = $message;
    }

    header('Location: ' . $redirectBase . '?' . http_build_query($query));
    exit;
}

$name = clean_input($_POST['Your Name'] ?? '');
$phone = clean_input($_POST['Phone Number'] ?? '');
$email = clean_input($_POST['E-mail'] ?? '');
$message = trim($_POST['Your Inquire'] ?? '');
$website = trim($_POST['website'] ?? '');

// Honeypot field: bots fill it, people never see it.
if ($website !== '') {
    redirect_with_message('success');
}

if ($name === '' || $email === '' || $message === '') {
    redirect_with_message('error', 'Please fill in your name, email, and message.');
}

if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    redirect_with_message('error', 'Please enter a valid email address.');
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

$host = strtolower((string) ($_SERVER['HTTP_HOST'] ?? ''));
$host = preg_replace('/:\\d+$/', '', $host) ?? '';
$host = preg_replace('/[^a-z0-9.-]/', '', $host) ?? '';
$fromAddress = $host !== '' ? 'noreply@' . $host : 'noreply@localhost';

$headers = [
    'MIME-Version: 1.0',
    'Content-Type: text/plain; charset=UTF-8',
    "From: Portfolio website <{$fromAddress}>",
    "Reply-To: {$email}",
    'X-Mailer: PHP/' . phpversion(),
];

$sent = mail($recipient, $subject, $body, implode("\r\n", $headers));

if (!$sent) {
    error_log('Portfolio contact form: mail() failed.');
    redirect_with_message('error', 'Unable to send your message right now. Please email me directly.');
}

redirect_with_message('success');
