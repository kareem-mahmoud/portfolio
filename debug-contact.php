<?php

declare(strict_types=1);

header('Content-Type: text/plain');

echo "METHOD: " . ($_SERVER['REQUEST_METHOD'] ?? 'n/a') . "\n";
echo "CONTENT_TYPE: " . ($_SERVER['CONTENT_TYPE'] ?? 'n/a') . "\n";
echo "CONTENT_LENGTH: " . ($_SERVER['CONTENT_LENGTH'] ?? 'n/a') . "\n";
echo "RAW BODY: " . file_get_contents('php://input') . "\n";
echo "POST ARRAY:\n";
print_r($_POST);
