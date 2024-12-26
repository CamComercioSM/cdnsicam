<?php
$autorizado = true;
if ($autorizado) {
    if (isset($_GET['js'])) {
        header("Content-type: application/x-javascript; charset=UTF-8");
        include_once './utilidades.js';
    }
    if (isset($_GET['css'])) {
        header("Content-type: text/css; charset=UTF-8");
        include_once './utilidades.css';
    }
} else {
    header('HTTP/1.1 401 Unauthorized');
    header('WWW-Authenticate: Digest realm="' . URL_API . '",qop="auth",nonce="' . uniqid() . '",opaque="' . md5(URL_API) . '"');
    die('No compadre, así no se vale!!!!');
    exit;
}