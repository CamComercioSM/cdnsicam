/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
var paso = 0;
var duracion = 5;
var tamInicial = 350;
var tamFinal = 150;
var restarPixeles = 250;
var url = "https://api.whatsapp.com/send?phone=573114147779&text=Hola,%20Tengo%20una%20pregunta%20o%20consulta......";
var imgWSP = document.createElement('img');
imgWSP.src = 'https://si.sicam32.net/media/whatsapp/whatsapp_escribenos-num.png';
imgWSP.style.position = "fixed";
imgWSP.style.width = "350px";
imgWSP.style.maxHeight = "230px";
imgWSP.style.bottom = "5px";
imgWSP.style.right = "10px";
imgWSP.style.overflow = "hidden";
imgWSP.style.cursor = "pointer";
imgWSP.classList.add('no-print');
function mostrarIconoWhatsapp() {
    console.log("cargando whatsapp....");
    imgWSP.onclick = function () {
        window.open(url, '_blank');
    };
    // attach mouseover and mouseout events for each image
    imgWSP.onmouseover = function () {
        aumentarTamanoWhatsapp();
    };
    imgWSP.onmouseout = function () {
        reducirTamanoWhatsapp();
    };
    setTimeout(function () {
        reducirTamanoWhatsapp();
    }, duracion * 1000);
    imgWSP.style.zIndex = zIndex() - 100;
    document.body.appendChild(imgWSP);
}
window.addEventListener ? window.addEventListener("load", mostrarIconoWhatsapp, !1) : window.attachEvent("load", mostrarIconoWhatsapp, !1);

function aumentarTamanoWhatsapp() {
    var controldetiempo = setInterval(function () {
        if (parseInt(imgWSP.style.width) <= tamInicial) {
            if (paso === restarPixeles) {
                clearInterval(controldetiempo);
                paso = 0;
            } else {
                imgWSP.style.width = (parseInt(imgWSP.style.width) + 1) + "px";
                paso++;
            }
        }
    }, 1);
}
function reducirTamanoWhatsapp() {
    var controldetiempo = setInterval(function () {

        if (parseInt(imgWSP.style.width) >= tamFinal) {
            if (paso === restarPixeles) {
                clearInterval(controldetiempo);
                paso = 0;
            } else {
                imgWSP.style.width = (parseInt(imgWSP.style.width) - 1) + "px";
                paso++;
            }
        }

    }, 1);
}
if (typeof zIndex === 'undefined') {
    function zIndex() {
        var allElems = document.getElementsByTagName ? document.getElementsByTagName("*") : document.all; // or test for that too
        var maxZIndex = 0;
        for (var i = 0; i < allElems.length; i++) {
            var elem = allElems[i];
            var cStyle = null;
            if (elem.currentStyle) {
                cStyle = elem.currentStyle;
            } else if (document.defaultView && document.defaultView.getComputedStyle) {
                cStyle = document.defaultView.getComputedStyle(elem, "");
            }
            var sNum;
            if (cStyle) {
                sNum = Number(cStyle.zIndex);
            } else {
                sNum = Number(elem.style.zIndex);
            }
            if (!isNaN(sNum)) {
                maxZIndex = Math.max(maxZIndex, sNum);
            }
        }
        return maxZIndex + 1;
    }
}


//
//
//const queryString = window.location.search;
//console.log('datos de la URL');
//console.log(queryString);
//
//var url_string = document.URL;
//console.log(url_string);
//var url = new URL(url_string);
//console.log(url);
//var c = url.searchParams.get("c");
//console.log(c);
