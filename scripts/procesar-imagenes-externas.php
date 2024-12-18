<?php
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);
//print_r($_GET);
if (!isset($_GET['url']))
  die('debes enviar una URL para procesar la imagen.');
$URLencriptada = $_GET['url'];
$imageURL = desencriptarURL($URLencriptada);
//echo $imageURL ;
//die();
if (filter_var($imageURL, FILTER_VALIDATE_URL) === FALSE)
  die('URL Externa NO ES VALIDA. [' . $URLencriptada . '] ');

if (!curl_init($imageURL))
  die('URL Externa NO EXISTE. [' . $URLencriptada . '] ');

//print_r([$ancho, $alto, $tipo, $attr]);
//die();
$extension = pathinfo($imageURL, PATHINFO_EXTENSION);
list($ancho, $alto, $tipo, $attr) = getimagesize($imageURL);
$im = leerImagenExterna($extension, $imageURL);
$im = procesarImagen($im, $ancho, $alto);
generarNuevaImagenControlada($extension, $im);
die();

function desencriptarURL($UrlEncrypt) {
//  $ciphering_value = "AES-128-CBC";
//  $options = 0;
//  $iv = "ba19507fba19507f";
//  $key = "dcAw9fZdLbD34YZYXY5swxiRU";
//// Encryption process
//  $decryption = openssl_decrypt($UrlEncrypt, $ciphering_value, $key, $options, $iv);
//// Display the decrypted string
////    echo "Decrypted String: " . $decryption;

  $ciphering_value = "AES-128-CTR";
  $options = 0;
  $iv = "ba19507fba19507f";
  $key = "dcAw9fZdLbD34YZYXY5swxiRU";
// Encryption process

  $decryption64 = base64_decode($UrlEncrypt);
  $decryption = openssl_decrypt($decryption64, $ciphering_value, $key, $options, $iv);

  return $decryption;
}

function leerImagenExterna($extension, $imageURL) {
  switch ($extension) {
    case 'png':
    case 'PNG':
      $im = @imagecreatefrompng($imageURL);
      imagealphablending($im, false);
      imagesavealpha($im, true);
      break;
    case 'jpg':
    case 'JPG':
    case 'jpeg':
    case 'JPEG':
      $im = @imagecreatefromjpeg($imageURL);
      break;
    default:
      $im = @imagecreatefromgd($imageURL);
      break;
  }
  /* See if it failed */
  if (!$im) {
    /* Create a black image */
    $im = imagecreatetruecolor(150, 30);
    $tc = imagecolorallocate($im, 0, 0, 0);
    $bgc = imagecolorallocate($im, 255, 255, 255);
    imagefilledrectangle($im, 0, 0, 150, 30, $bgc);
    /* Output an error message */
    imagestring($im, 1, 5, 5, 'ERROR AL GENERAR [' . $extension . '] EN ' . $imageURL, $tc);
  }
  return $im;
}

function procesarImagen($im, $ancho, $alto) {

  if ($ancho >= 320) {
    $im = imagescale($im, 320);
    if ($im) {
      $ancho = 320;
    }
  }
  $blanco = imagecolorallocate($im, 255, 255, 255);
  $negro = imagecolorallocate($im, 0, 0, 0);
//  imagecolortransparent($im, imagecolorallocatealpha($im, 0, 0, 0, 127));
//  $transparent = imagefill($im, 0, 0, imagecolorallocatealpha($im, 0, 0, 0, 127));
//  imagefill($im, 0, 0, imagecolorallocatealpha($im, 255, 255, 255, 127));
  imagealphablending($im, false);
  imagesavealpha($im, true);

  $msgOculto = mb_convert_encoding('CamComercioSM [' . date('y-m-d h:i:s') . ']', 'UTF-8');
  $posMsgX = intval(($ancho - strlen($msgOculto)) / 4);
  $posMsgY = intval($alto / 24);
  imagestring($im, 1, $posMsgX, 5, $msgOculto, $negro);
  $msgOculto = mb_convert_encoding("https://$_SERVER[HTTP_HOST]$_SERVER[REQUEST_URI]", 'UTF-8');
  $posMsgX = intval(($ancho - strlen($msgOculto)) / 4);
  $posMsgY = intval($alto / 12);
  imagestring($im, 1, $posMsgX, 10, $msgOculto, $negro);

  // Load the stamp and the photo to apply the watermark to
  $logo = 'logo.png';
  $size = getimagesize($logo);
  $marca = imagecreatefrompng($logo);
  imagefill($marca, 0, 0, imagecolorallocatealpha($marca, 0, 0, 0, 127));
  imagecolortransparent($marca, imagecolorallocatealpha($marca, 0, 0, 0, 127));
  imagefill($marca, 0, 0, imagecolorallocatealpha($marca, 255, 255, 255, 127));
  imagecolortransparent($marca, imagecolorallocatealpha($marca, 255, 255, 255, 127));
  imagealphablending($marca, false);
  imagesavealpha($marca, true);

////  echo "<br />"; 
  $w = intval($ancho * 0.30); 
////  echo "<br />";
  $h = intval($w * $size[1] / $size[0]);
////  echo "<br />";
  $marcaPeq = imagecreatetruecolor($w, $h);
  imagecolortransparent($marcaPeq, imagecolorallocatealpha($marcaPeq, 0, 0, 0, 127));
  imagealphablending($marcaPeq, false);
  imagesavealpha($marcaPeq, false);
//  //print_r($marca);
  imagecopyresampled($marcaPeq, $marca, 0, 0, 0, 0, $w, $h, $size[0], $size[1]);
//  //print_r($stamp);
//  //print_r($im);
//  //die();
////// Set the margins for the stamp and get the height/width of the stamp image
  $marge_right = 10;
  $marge_bottom = 20;
  $sx = imagesx($marcaPeq);
  $sy = imagesy($marcaPeq);
////// Copy the stamp image onto our photo using the margin offsets and the photo 
////// width to calculate positioning of the stamp. 
  imagecopy(
    $im, $marcaPeq,
    $marge_right, $marge_bottom,
    0, 0, imagesx($marcaPeq), imagesy($marcaPeq)
  );

  imagecopy(
    $im, $marcaPeq,
    intval(imagesx($im) / 3), intval(imagesy($im) / 2),
    0, 0, imagesx($marcaPeq), imagesy($marcaPeq)
  );

  imagecopy(
    $im, $marcaPeq,
    imagesx($im) - $sx - $marge_right, imagesy($im) - $sy - $marge_bottom,
    0, 0, imagesx($marcaPeq), imagesy($marcaPeq)
  );

  /* Crear una imagen en blanco */
//        $imFondo  = imagecreatetruecolor($ancho, $alto);
//        $fondo = imagecolorallocate($imFondo, 255, 255, 255);
//        $ct  = imagecolorallocate($imFondo, 0, 0, 0);
//
//        imagefilledrectangle($imFondo, 0, 0, $ancho, $alto, $fondo);
//
//  
//  imagecopy(
//    $imFondo, $im,
//    0, 0,
//    0, 0, imagesx($im), imagesy($im)
//  );
//  

  return $im;
}

function generarNuevaImagenControlada($extension, $imagenBUFFER) {

  switch ($extension) {
    case 'png':
    case 'PNG':
      header('Content-type: image/png');
      imagepng($imagenBUFFER);
      imagedestroy($imagenBUFFER);
      break;

    case 'jpg':
    case 'JPG':
    case 'jpeg':
    case 'JPEG':
      header('Content-Type: image/jpeg');
      imagejpeg($imagenBUFFER);
      imagedestroy($imagenBUFFER);
      break;

    default:
      header('Content-Type: image/jpeg');
      imagejpeg($imagenBUFFER);
      imagedestroy($imagenBUFFER);
      break;
  }
}

// recursive search by pattern
function rsearch($folder, $pattern) {
  $dir = new RecursiveDirectoryIterator($folder);
  $ite = new RecursiveIteratorIterator($dir);
  $files = new RegexIterator($ite, $pattern, RegexIterator::GET_MATCH);
  $fileList = array();
  foreach ($files as $file) {
    $fileList = array_merge($fileList, $file);
  }
  return $fileList;
}
