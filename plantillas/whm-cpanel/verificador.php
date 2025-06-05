<?php
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');

$dominio = $_GET['dominio'] ?? '';
$url = filter_var("https://$dominio", FILTER_VALIDATE_URL) ? "https://$dominio" : null;

if (!$url) {
    echo json_encode(['status' => 400, 'error' => 'Dominio inválido']);
    exit;
}

$ch = curl_init($url);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
curl_setopt($ch, CURLOPT_HEADER, true);
curl_setopt($ch, CURLOPT_NOBODY, false);
curl_setopt($ch, CURLOPT_TIMEOUT, 5);
$response = curl_exec($ch);
$httpcode = curl_getinfo($ch, CURLINFO_HTTP_CODE);
curl_close($ch);

// Extraer el <title>
preg_match("/<title>(.*?)<\/title>/i", $response, $matches);
$title = $matches[1] ?? '';

echo json_encode([
    'status' => $httpcode,
    'title' => $title,
]);
