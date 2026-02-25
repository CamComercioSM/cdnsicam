/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


var pasoPQRSD = 0;
var duracionPQRSD = 7;
var tamInicialPQRSD = 350;
var tamFinalPQRSD = 100;
var restarPixelesPQRSD = 250;

let scriptPQRS = document.createElement("script");
scriptPQRS.id = 'script_pqrs';
scriptPQRS.src = 'https://widget.freshworks.com/widgets/30000000081.js';
scriptPQRS.defer = true;
// script.load = alert('cargo');
document.head.appendChild(scriptPQRS);
window.fwSettings = {
    'widget_id': 30000000081,
    'locale': 'es',
};
!function () {
    if ("function" != typeof window.FreshworksWidget) {
        var n = function () {
            n.q.push(arguments)
        };
        n.q = [], window.FreshworksWidget = n, FreshworksWidget('hide');
    }
}();



let imgPQRSD = document.createElement("img");
imgPQRSD.src = "https://si.sicam32.net/media/pqrsd/escribenos-pqrsd.png";
imgPQRSD.style.right = "10px";
imgPQRSD.style.bottom = "40px";
imgPQRSD.style.border = "none";
imgPQRSD.style.position = "fixed";
imgPQRSD.style.width = "30%";
imgPQRSD.style.minWidth = "120px";
imgPQRSD.style.maxWidth = "320px";
imgPQRSD.style.visibility = "visible";
imgPQRSD.style.cursor = "pointer";
imgPQRSD.classList.add('no-print');


var styleMODAL = '.modalPQRSD { position: fixed; top: 0; left: 0; right: 0; bottom: 0; display: flex; align-items: center; justify-content: center; padding: 1rem; background: rgba(10,10,10,0.5); cursor: pointer; visibility: hidden; opacity: 0; transition: all 0.35s ease-in; }    ';
var styleMODALVISIBLE = '.modalPQRSD.is-visible {  visibility: visible;  opacity: 1; }   ';
var styleMODALDIALOGO = '.modalPQRSD-dialog { position: relative; max-width: 800px; max-height: 80vh; border-radius: 5px; background: rgba(255,255,255,0.9); overflow: auto; cursor: default; }    ';
var styleMODALSECCIONES = '.modalPQRSD-dialog > * { padding: 1rem; } .modalPQRSD-header, .modalPQRSD-footer { background: var(--lightgray); } .modalPQRSD-header { display: flex; align-items: center; justify-content: space-between; } .modalPQRSD-header .modalPQRSD-close { font-size: 1.5rem; } .modalPQRSD p + p { margin-top: 1rem; }    ';
var styleSheet = document.createElement("style")
styleSheet.innerText = styleMODAL + styleMODALVISIBLE + styleMODALDIALOGO + styleMODALSECCIONES;

let htmlMODAL = document.createElement('div');
htmlMODAL.id = "modalPQRSD-datosPQRSD";
htmlMODAL.innerHTML = '<div class="modalPQRSD" id="modalPQRSD1"> <div class="modalPQRSD-dialog"> <header class="modalPQRSD-header"><h2>Política de Privacidad y Tratamiento de Datos Personales</h2><button id="btn-modalPQRSD" class="close-modalPQRSD" aria-label="close modalPQRSD" data-close >X</button> </header> <section class="modalPQRSD-content"><p>Algunos datos suministrados a continuaci&oacute;n son considerados por la Ley 1581 de 2012 como informaci&oacute;n de car&aacute;cter privado; por tal motivo, ser&aacute;n utilizados por la C&aacute;mara de Comercio de Santa Marta para el Magdalena con la finalidad de realizar el proceso administrativo correspondiente al tr&aacute;mite solicitado. Dichos datos ser&aacute;n tratados confidencialmente y con las medidas de seguridad correspondientes.<br /><br />Continuar con el proceso hace constar que el titular de la informaci&oacute;n fue informado acerca de las finalidades para las cuales sus datos ser&aacute;n tratados. <br /><br />Usted como titular de los datos cuenta con los siguientes derechos: acceso, actualizaci&oacute;n, rectificaci&oacute;n, y supresi&oacute;n, &eacute;ste &uacute;ltimo cuando no medie un deber legal o contractual que lo impida. Para ello, la C&aacute;mara de Comercio de Santa Marta para el Magdalena ha establecido los siguientes canales de atenci&oacute;n: (i) correo electr&oacute;nico: <a href="mailto:proteccion.datospersonales@ccsm.org.co">proteccion.datospersonales@ccsm.org.co</a>; (ii) direcci&oacute;n f&iacute;sica: calle 24 # 2 &ndash; 66, Santa Marta D.T.C.H. (iv) Tel&eacute;fono (5)4209909. </p> <button id="btn-ABRIRPQRSD" style="width:100%;background-color: #2ea44f; border: 1px solid rgba(27, 31, 35, .15); border-radius: 6px; box-shadow: rgb(27 31 35 / 10%) 0 1px 0; box-sizing: border-box; color: #fff; cursor: pointer; display: inline-block;" >Acepto la política de privacidad y tratamiento de datos personales.</button> </section> <footer class="modalPQRSD-footer">Para m&aacute;s informaci&oacute;n sobre la Pol&iacute;tica de Tratamiento de Informaci&oacute;n de la Entidad, puede consultar en el sitio web: <a href="https://www.google.com/url?q=https://www.ccsm.org.co/proteccion-de-datos-personales.html&amp;sa=D&amp;source=editors&amp;ust=1646271640937774&amp;usg=AOvVaw1lqqsuF1gpjlemLdnnly0w">https://www.ccsm.org.co/proteccion-de-datos-personales.html</a></footer> </div> </div>';




function arrancarPQRSD() {

    document.body.appendChild(imgPQRSD);

    imgPQRSD.onclick = function () {
        document.getElementById("modalPQRSD1").classList.add("is-visible");
        let botonCERRARMODAL = document.getElementById("btn-modalPQRSD");
        botonCERRARMODAL.onclick = function () {
            document.getElementById("modalPQRSD1").classList.remove("is-visible");
        }

        let botonFORMULARIO = document.getElementById("btn-ABRIRPQRSD");
        botonFORMULARIO.onclick = function () {
            document.getElementById("modalPQRSD1").classList.remove("is-visible");
//            FreshworksWidget('open');
            window.open('https://pqrsd.tiendasicam32.net', '_blank');
        }

    };
    document.body.style.paddingBottom = (document.body.style.paddingBottom + 80) + "px";
    imgPQRSD.style.zIndex = zIndex();


    document.head.appendChild(styleSheet)
    document.body.appendChild(htmlMODAL);
    document.addEventListener("click", e => {
        if (e.target == document.querySelector(".modalPQRSD.is-visible")) {
            document.getElementById("modalPQRSD1").classList.remove("is-visible");
        }
    });
    htmlMODAL.style.zIndex = zIndex();
    document.getElementById("modalPQRSD1").style.zIndex = zIndex();
}
window.addEventListener ? window.addEventListener("load", arrancarPQRSD, !1) : window.attachEvent("load", arrancarPQRSD, !1);

function aumentarTamanoPQRSD() {
    var controldetiempo = setInterval(function () {
        if (parseInt(imgPQRSD.style.width) <= tamInicialPQRSD) {
            if (pasoPQRSD === restarPixelesPQRSD) {
                clearInterval(controldetiempo);
                pasoPQRSD = 0;
            } else {
                imgPQRSD.style.width = (parseInt(imgPQRSD.style.width) + 1) + "px";
                pasoPQRSD++;
            }
        }
    }, 1);
}
function reducirTamanoPQRSD() {
    var controldetiempo = setInterval(function () {
        if (parseInt(imgPQRSD.style.width) >= tamFinalPQRSD) {
            if (pasoPQRSD === restarPixelesPQRSD) {
                clearInterval(controldetiempo);
                pasoPQRSD = 0;
            } else {
                imgPQRSD.style.width = (parseInt(imgPQRSD.style.width) - 1) + "px";
                pasoPQRSD++;
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