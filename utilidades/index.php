<?php
include '../../encabezados-seguros.php';
require_once '../../configBASE.php';
//if (MANTENIMIENTO) {
//header("Content-type: application/x-javascript");
//    echo 'window.addEventListener ? window.addEventListener("load", alert("Esta funcionalidad puede fallar. Estamos en mantenimiento............."), !1) : window.attachEvent("load", alert("Esta funcionalidad puede fallar. Estamos en mantenimiento............."), !1);';
//}
require_once DIR_LIBRERIA . 'vendor/autoload.php';
$datos = array();
$autorizado = false;
$Autenticador = new stdClass();
$activarSCRIPT = true;
$activarCHAT = true;
$activarWHATSAPP = true;
$activarPQRS = true;
$activarACCESIBILIDAD = true;
$activarPUSH = false;
$modoPRUEBAS = false;
if (isset($_GET) and !empty($_GET) and count($_GET) >= 1) {
    $autorizado = Autenticador::sicam32($_GET);
    if (count($_GET) > 1) {
        if (isset($_GET['modo']) and $_GET['modo'] == 'PRUEBAS') {
            $modoPRUEBAS = true;
            $activarCHAT = false;
            $activarWHATSAPP = false;
            $activarPQRS = false;
            $activarACCESIBILIDAD = false;
        } else {
            if (isset($_GET['scripts']) and $_GET['scripts'] == 'NO') {
                $activarSCRIPT = false;
            }
            if (isset($_GET['chat']) and $_GET['chat'] == 'NO') {
                $activarCHAT = false;
            }
            if (isset($_GET['whatsapp']) and $_GET['whatsapp'] == 'NO') {
                $activarWHATSAPP = false;
            }
            if (isset($_GET['pqrs']) and $_GET['pqrs'] == 'NO') {
                $activarPQRS = false;
            }
            if (isset($_GET['accesibilidad']) and $_GET['accesibilidad'] == 'NO') {
                $activarACCESIBILIDAD = false;
            }
            if (isset($_GET['push']) and $_GET['push'] == 'SI') {
                $activarPUSH = true;
            }
        }
    }
}
//print_r($Autenticador);
if (is_object($autorizado) and !is_null($autorizado->aplicacionID)) {
    header("Content-type: application/x-javascript; charset=UTF-8");
    ?>
    /* * *
    ///<?= $autorizado->aplicacionTITULO ?>
    ///<?= $autorizado->aplicacionDESCRIPCION ?>
    * * */
    <?php
    if ($activarCHAT):
    $archivoJS = "chat.js";
    echo fread(fopen($archivoJS, "r"), filesize($archivoJS));
    endif;
    if ($activarWHATSAPP):
    $archivoJS = "whatsapp.js";
    echo fread(fopen($archivoJS, "r"), filesize($archivoJS));
    endif;
    if ($activarPQRS):
    $archivoJS = "pqrs.js";
    echo fread(fopen($archivoJS, "r"), filesize($archivoJS));
    endif;
    if ($activarACCESIBILIDAD):
    $archivoJS = "accesibilidad.js";
    echo fread(fopen($archivoJS, "r"), filesize($archivoJS));
    endif;
    if ($activarPUSH):
    $archivoJS = "push.js";
    echo fread(fopen($archivoJS, "r"), filesize($archivoJS));
    endif;
    ?>



    <?php if ($modoPRUEBAS): ?>
        var interval = null;
        var footerModoPruebas = null;
        var posicionAbajoMaxima = 0;
        var posicionActual = 0;
        var porcentajeCalculadoNuevaPosicion = 10;
        window.onload = (event) => {
        document.body.innerHTML += '<div id="footer_modopruebas"style="position: fixed;top: 0px;width: 100%;height: auto;background: #111;background: rgba(0,0,0,.50);border-top: 2px solid #f00;z-index:2000;text-align: center;color: white;" ><div class=""><table align="center" style="width: 100%;margin: auto;" width="100%"><tr><td width="10%" style="width: 10%;"><img src="data:image/svg+xml;utf8;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMCAwIDY0IDY0IiB2aWV3Qm94PSIwIDAgNjQgNjQiPjxwYXRoIGZpbGw9IiNFRDFDMjQiIHN0cm9rZT0iIzAwMCIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIiBzdHJva2Utd2lkdGg9IjIiIGQ9Ik04LjcsNjAuMWg0Ni42YzQuOSwwLDcuOC03LjMsNC45LTEyLjQNCgkJCUwzNi45LDcuMWMtMi40LTQuMi03LjMtNC4yLTkuNywwTDMuOSw0Ny43QzAuOSw1Mi44LDMuOCw2MC4xLDguNyw2MC4xeiIvPjxwYXRoIGZpbGw9IiMwMEQzQUEiIHN0cm9rZT0iIzAwMCIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIiBzdHJva2Utd2lkdGg9IjIiIGQ9Ik0zNC44LDE1LjJoLTUuN2MtMSwwLTEuOCwyLjUtMS40LDQuOGwyLjgsMjENCgkJCWMwLjUsMy40LDIuNCwzLjQsMi45LDBsMi44LTIxQzM2LjYsMTcuNywzNS45LDE1LjIsMzQuOCwxNS4yeiIvPjxlbGxpcHNlIGN4PSIzMiIgY3k9IjUxLjYiIGZpbGw9IiMwMEQzQUEiIHN0cm9rZT0iIzAwMCIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIiBzdHJva2Utd2lkdGg9IjIiIHJ4PSIzIiByeT0iMy4zIi8+PC9zdmc+" alt="alerta" style="width: 60%;"/></td><td width="80%" style="width: 80%;"><div style="font-size-adjust: 100%; font-size: 3vw;">Está entrando al modo PRUEBAS para esta aplicación.</div></td><td width="10%" style="width: 10%;"><img src="data:image/svg+xml;utf8;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMCAwIDY0IDY0IiB2aWV3Qm94PSIwIDAgNjQgNjQiPjxwYXRoIGZpbGw9IiNFRDFDMjQiIHN0cm9rZT0iIzAwMCIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIiBzdHJva2Utd2lkdGg9IjIiIGQ9Ik04LjcsNjAuMWg0Ni42YzQuOSwwLDcuOC03LjMsNC45LTEyLjQNCgkJCUwzNi45LDcuMWMtMi40LTQuMi03LjMtNC4yLTkuNywwTDMuOSw0Ny43QzAuOSw1Mi44LDMuOCw2MC4xLDguNyw2MC4xeiIvPjxwYXRoIGZpbGw9IiMwMEQzQUEiIHN0cm9rZT0iIzAwMCIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIiBzdHJva2Utd2lkdGg9IjIiIGQ9Ik0zNC44LDE1LjJoLTUuN2MtMSwwLTEuOCwyLjUtMS40LDQuOGwyLjgsMjENCgkJCWMwLjUsMy40LDIuNCwzLjQsMi45LDBsMi44LTIxQzM2LjYsMTcuNywzNS45LDE1LjIsMzQuOCwxNS4yeiIvPjxlbGxpcHNlIGN4PSIzMiIgY3k9IjUxLjYiIGZpbGw9IiMwMEQzQUEiIHN0cm9rZT0iIzAwMCIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIiBzdHJva2Utd2lkdGg9IjIiIHJ4PSIzIiByeT0iMy4zIi8+PC9zdmc+" alt="alerta" style="width: 60%;"/></td></tr></table></div></div>';
        setTimeout( function(){
        footerModoPruebas = document.getElementById("footer_modopruebas");
        posicionAbajoMaxima = document.documentElement.scrollHeight - footerModoPruebas.offsetHeight;
        posicionActual = footerModoPruebas.offsetTop;
        porcentajeCalculadoNuevaPosicion = 100 * (posicionActual) / posicionAbajoMaxima;
        interval = setInterval(function () {
        if (posicionActual < posicionAbajoMaxima && porcentajeCalculadoNuevaPosicion < 98) {
        footerModoPruebas.style.top = porcentajeCalculadoNuevaPosicion + "%";
        porcentajeCalculadoNuevaPosicion += 0.1;
        } else {
        clearInterval(interval);
        }
        posicionActual = footerModoPruebas.offsetTop;
        }, 10);

        }, 123 );

        };            
        alert("Estas entrando en el modo de PRUEBAS para la API del SICAM32.");
    <?php endif; ?>            

    <?php
} else {
    header('HTTP/1.1 401 Unauthorized');
    header('WWW-Authenticate: Digest realm="' . ApiSICAM::$URL . '",qop="auth",nonce="' . uniqid() . '",opaque="' . md5(ApiSICAM::$URL) . '"');
    print_r($autorizado);
    die('No compadre, así no se vale!!!!');
    exit;
}