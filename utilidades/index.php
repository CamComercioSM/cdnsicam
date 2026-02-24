<!-- Google tag (gtag.js) -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-X4Y4H38YYW"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-X4Y4H38YYW');
</script>
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