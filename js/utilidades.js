/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
///
/////
///////
function compararCadenasCaracteres(string_1, string_2) {
    let texto1 = string_1.toUpperCase().toLowerCase();
    let texto2 = string_2.toUpperCase().toLowerCase();
    if (texto1.localeCompare(texto2, 'es', {sensitivity: 'base'}) == 0) {
        return true;
    }
    return false;
}
function quitarEspacioEnBlanco(texto) {
    var texto = texto.replace(/ /g, "");
    texto = texto.replace(/^\s+|\s+$/g, "");
    texto = texto.replace(/\s+/, "");
    texto = texto.trim();
    return texto;
}
function primeraMayuscula(texto) {
    texto = texto.toLowerCase();
    return texto.charAt(0).toUpperCase() + texto.substr(1)
}
function activarInputIdentificacion(inputtxt) {
    inputtxt.addEventListener("keypress", activarValidacionIdentificacion, false);
    function activarValidacionIdentificacion(event) {
        if (event.charCode != 0) {
            var regex = new RegExp("^[a-zA-Z0-9]+$");
            var key = String.fromCharCode(!event.charCode ? event.which : event.charCode);
            if (!regex.test(key)) {
                event.preventDefault();
                return false;
            }
        }
    }
}
//Guarda una COOKIE en el navegador del usuario
function cocinarGalleta(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    var expires = "expires=" + d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}
//Lee la COOKIE del navegador del usuario
function comerGalleta(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}
//Guarda en el LocalStorage del NAvegador
function guardarEnNavegador(nombreVariable, valorVariable) {
    if (window.localStorage) {
        return localStorage.setItem(nombreVariable, valorVariable);
    } else {
        alert("no se pudo guardar en el navegador")
    }
}
//Saca el Valor guardado en el LocalStorage del NAvegador
function valorEnNavegador(nombreVariable) {
    if (window.localStorage) {
        return localStorage.getItem(nombreVariable);
    } else {
        alert("no se pudo guardar en el navegador")
    }
}
//borrar una valiablre del LocalStorage del NAvegador
function borrarValorEnNavegador(nombreVariable) {
    if (window.localStorage) {
        return localStorage.removeItem(nombreVariable);
    } else {
        alert("no se pudo guardar en el navegador")
    }
}
//Borra todo en el LocalStorage del Nvegador
function limpiarDatosEnNavegador() {
    if (window.localStorage) {
        return localStorage.clear();
    } else {
        alert("no se pudo guardar en el navegador")
    }
}
//Devuelve el ZIndex mas alto entre todos los objecto que este en el DOM
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
function esJson(str) {
    try {
        JSON.parse(str);
    } catch (e) {
        return false;
    }
    return true;
}
//SCROLL - Mover el scroll a un punto en la interface
function irArriba() {
    if (window.jQuery) {
        $('html, body').animate({
            scrollTop: 0
        }, 179);
    } else {
        window.scrollTo(0, 0);
    }
}
function scrollAlObjeto(ObjetoID) {
    if (window.jQuery) {
        $('#' + ObjetoID).animate({
            scrollTop: $(this).offset().top + 'px'
        }, 179);
    } else {
        var e = document.getElementById(ObjetoID);
        if (!!e && e.scrollIntoView) {
            e.scrollIntoView();
        }
    }
}
function popUp(mypage, myname, w, h, scroll, pos) {
    if (w == null) {
        w = (screen.width) ? (screen.width - w) / 2 : 320;
    }
    if (h == null) {
        h = (screen.height) ? (screen.height - h) / 2 : 100;
    }
    if (scroll == null) {
        scroll = true;
    }
    if (pos == "random") {
        LeftPosition = (screen.width) ? Math.floor(Math.random() * (screen.width - w)) : 100;
        TopPosition = (screen.height) ? Math.floor(Math.random() * ((screen.height - h) - 75)) : 100;
    }
    if (pos == "center") {
        LeftPosition = (screen.width) ? (screen.width - w) / 2 : 100;
        TopPosition = (screen.height) ? (screen.height - h) / 2 : 100;
    } else if ((pos != "center" && pos != "random") || pos == null) {
        LeftPosition = 0;
        TopPosition = 0
    }
    settings = 'width=' + w + ',height=' + h + ',top=' + TopPosition + ',left=' + LeftPosition + ',scrollbars=' + scroll + ',location=no,directories=no,status=no,menubar=no,toolbar=no,resizable=no';
    win = window.open(mypage, myname, settings);
}
function descargarURL(uri, name) {
    var link = document.createElement("a");
    link.download = name;
    link.href = uri;
    link.click();
}
//Ventanas de Alerta - Personalizadas     
function avisoError(texto) {
    beepError();
    return Swal.fire({
        icon: 'error',
        title: 'Oops... ¡Error!',
        html: texto
    });
}
function avisoInformacion(texto) {
    return Swal.fire({
        title: '¡Atento!',
        icon: 'info',
        html: texto,
        showCloseButton: true
    });
}
function avisoPrevencion(texto) {
    beepNotificacion(100);
    return Swal.fire({
        position: 'top-end',
        icon: 'warning',
        title: 'Cuidado!',
        html: texto,
        showConfirmButton: true,
        timer: 43210
    });
}
function avisoExito(texto) {
    return Swal.fire({
        title: 'Bien hecho!',
        icon: 'success',
        html: texto,
        showConfirmButton: false,
        timer: 30456
    });
}
///////////////////////////////////////////////////////
function alertaConexion(texto) {
    beepFallaInternet();
    return  avisoError(texto);
}
function alertaError(texto) {
    beepError();
    return  avisoError(texto);
}
function alertaInformacion(texto) {
    return avisoInformacion(texto);
}
function alertaPrevencion(texto) {
    beepNotificacion(100);
    return avisoPrevencion(texto);
}
function alertaExito(texto) {
    return avisoExito(texto);
}
////////////////////////////////////////////
///////////////////////////////////////////////
//VEnta de confirmación
function confirmacionEjecutarOperacion(titulo, funcionEjecutableAceptar = null, funcionEjecutableCancelar = null) {
    Swal.fire({
        title: titulo,
        showDenyButton: true,
//        showCancelButton: true,
        confirmButtonText: 'Aceptar',
        denyButtonText: 'Cancelar',
    }).then((result) => {
        /* Read more about isConfirmed, isDenied below */
        if (result.isConfirmed) {
            if (typeof funcionEjecutableAceptar === "function") {
                funcionEjecutableAceptar(result);
            }
        } else if (result.isDenied) {
            if (typeof funcionEjecutableCancelar === "function") {
                funcionEjecutableCancelar(result);
            }
        }
    });
}
function confirmacionOperacion(titulo, texto, funcion) {
    return Swal.fire({
        title: titulo,
        html: texto,
        icon: 'question',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'SI',
        cancelButtonText: 'NO'
    }).then(function (respuesta) {
        if (respuesta.value) {
            funcion(respuesta);
        }
    });
}
function __confirmacionOperacion(titulo, texto, funcion) {
    return swal({
        title: titulo,
        html: texto,
        type: 'question',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'SI',
        cancelButtonText: 'NO'
    }).then(function (respuesta) {
        if (respuesta.value) {
            funcion(respuesta);
        }
    });
}
function imprimirElemento(elem) {
    var mywindow = window.open('', 'PRINT', 'height=400,width=600');
    mywindow.document.write('<html><head><title>' + document.title + '</title>');
    mywindow.document.write('</head><body >');
    mywindow.document.write(document.getElementById(elem).innerHTML);
    mywindow.document.write('</body></html>');
    mywindow.document.close(); // necessary for IE >= 10
    mywindow.focus(); // necessary for IE >= 10*/
    mywindow.print();
    mywindow.close();
    return true;
}
function formatoMoneda(numero, c, d, t) {
    var n = numero;
    c = isNaN(c = Math.abs(c)) ? 0 : c,
            d = d == undefined ? "," : d,
            t = t == undefined ? "." : t,
            s = n < 0 ? "-" : "",
            i = String(parseInt(n = Math.abs(Number(n) || 0).toFixed(c))),
            j = (j = i.length) > 3 ? j % 3 : 0;
    return s + (j ? i.substr(0, j) + t : "") + i.substr(j).replace(/(\d{3})(?=\d)/g, "$1" + t) + (c ? d + Math.abs(n - i).toFixed(c).slice(2) : "");
}
function aleatorio(inferior, superior) {
    var numPosibilidades = superior - inferior
    var aleat = Math.random() * numPosibilidades
    var aleat = Math.floor(aleat)
    return parseInt(inferior) + aleat
}
function colorAleatorioHEX() {
    var hexadecimal = new Array("0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F")
    var color_aleatorio = "#";
    for (i = 0; i < 6; i++) {
        posarray = aleatorio(0, hexadecimal.length)
        color_aleatorio += hexadecimal[posarray]
    }
    return color_aleatorio
}
function colorAleatorioRGBA() {
    var o = Math.round,
            r = Math.random,
            s = 255;
    return 'rgba(' + o(r() * s) + ',' + o(r() * s) + ',' + o(r() * s) + ',' + r().toFixed(1) + ')';
}
function generarPasswordHash(largo = 15) {
    var caracteres = "abcdefghijkmnpqrtuvwxyzABCDEFGHIJKLMNPQRTUVWXYZ2346789@#$&()+-/*";
    var contrasena = "";
    for (i = 0; i < largo; i++)
        contrasena += caracteres.charAt(Math.floor(Math.random() * caracteres.length));
    return contrasena;
}
//BROWSER - Bloqueo control de Navegación 
var tituloSistema = " " + document.title + " ";
function cambiarTITULO(newTitle, reemplazar = false) {
    if (document.title != newTitle) {
        if (reemplazar) {
            document.title = newTitle;
        } else {
            if (newTitle == tituloSistema) {
                document.title = newTitle;
            } else {
                document.title = newTitle + "::" + tituloSistema;
            }
        }
}
}
function cambiarURL(newTitle, urlPath) {
    if (document.title != newTitle) {
        if (newTitle == tituloSistema) {
            document.title = newTitle;
        } else {
            document.title = newTitle + "::" + tituloSistema;
        }
    }
    window.history.pushState("page", newTitle, urlPath);
}
function bloquearBotonATRAS() {
    window.location.hash = "no-back-button";
    window.location.hash = "Again-No-back-button" //chrome
    window.onhashchange = function () {
        window.location.hash = "";
    }
}
var BLOQUEO_RECARGAR_SALIR = true;
function bloquearSalidaSistema() {
    window.onbeforeunload = function () {
        if (BLOQUEO_RECARGAR_SALIR) {
            return 'Esta Saliendo de SICAM32';
        }
    };
}
function desbloquearSalidaSistema() {
    BLOQUEO_RECARGAR_SALIR = false;
}
function checkBoxSICAM(selector) {
    $(selector).iCheck({
        checkboxClass: 'icheckbox_flat-blue',
        radioClass: 'iradio_flat-blue'
    });
}
function radioButtonSICAM(selector) {
    $(selector).iCheck({
        checkboxClass: 'icheckbox_flat-blue',
        radioClass: 'iradio_flat-blue'
    });
}
function codificarUTF8(s) {
    return unescape(encodeURIComponent(s));
}
function decodificarUTF8(s) {
    return decodeURIComponent(escape(s));
}
function configurarAlertasConexionInternet() {
    window.addEventListener('offline', function () {
        alertaError("Parece que no hay conexión a internet. Verifique la conexión e intente nuevamente.")
    });
    window.addEventListener('online', console.log('Conexión a internet activa.'));
}
function probarConexionInternet() {
    // Ver https://developer.mozilla.org/es/docs/Web/API/NavigatorOnLine/onLine
    if (navigator.onLine) {
        // el navegador está conectado a la red
        return true;
    }
    // el navegador NO está conectado a la red
    return false;
}
function probarConexionURL(URL, funcionFalla) {
    fetch(URL)
            .then(function (response) {
                if (!response.ok) {
                    // Parece que hay acceso a Internet,
                    // pero la respuesta no ha sido ok
                    // También se puede comprobar el código de estado con response.status
                    // Y hacer algo específico según el estado exacto recibido
                    if (typeof funcionFalla === 'function') {
                        funcionFalla();
                    }
                    throw Error(response.statusText);
                }
                return response;
            }).then(function (response) {
        // response.ok fue true
        console.log('ok');
        resolve(response);
    }).catch(function (error) {
        console.log('Problema al realizar la solicitud: ' + error.message);
        reject(error);
    });
}
function hideURLbar() {
    window.scrollTo(0, 1);
}
function invertirSerializado(serializedString) {
    var arrayCampos = [];
    serializedString = serializedString.replace(/\+/g, '%20'); // (B)
    var formFieldArray = serializedString.split("&");
    // Loop over all name-value pairs
    $.each(formFieldArray, function (i, pair) {
        var nameValue = pair.split("=");
        var name = decodeURIComponent(nameValue[0]); // (C)
        var value = decodeURIComponent(nameValue[1]);
        if (name !== "") {
            arrayCampos[name] = value;
        }
    });
    return arrayCampos;
}
function invertirDatosSerializados(formulario, serializedString)
{
    var $form = $("#" + formulario);
    $form[0].reset();    // (A) optional
    serializedString = serializedString.replace(/\+/g, '%20'); // (B)
    var formFieldArray = serializedString.split("&");
    // Loop over all name-value pairs
    $.each(formFieldArray, function (i, pair) {
        var nameValue = pair.split("=");
        var name = decodeURIComponent(nameValue[0]); // (C)
        var value = decodeURIComponent(nameValue[1]);
        // Find one or more fields
        var $field = $form.find('[name=' + name + ']');
        // Checkboxes and Radio types need to be handled differently
        if ($field[0].type == "radio" || $field[0].type == "checkbox")
        {
            var $fieldWithValue = $field.filter('[value="' + value + '"]');
            var isFound = ($fieldWithValue.length > 0);
            // Special case if the value is not defined; value will be "on"
            if (!isFound && value == "on") {
                $field.first().prop("checked", true);
            } else {
                $fieldWithValue.prop("checked", isFound);
            }
        } else { // input, textarea
            $field.val(value);
        }
    });
    return this;
}
function Unidades(num) {
    switch (num)
    {
        case 1:
            return "UN";
        case 2:
            return "DOS";
        case 3:
            return "TRES";
        case 4:
            return "CUATRO";
        case 5:
            return "CINCO";
        case 6:
            return "SEIS";
        case 7:
            return "SIETE";
        case 8:
            return "OCHO";
        case 9:
            return "NUEVE";
    }
    return "";
}//Unidades()
function Decenas(num) {
    decena = Math.floor(num / 10);
    unidad = num - (decena * 10);
    switch (decena)
    {
        case 1:
        switch (unidad)
        {
            case 0:
                return "DIEZ";
            case 1:
                return "ONCE";
            case 2:
                return "DOCE";
            case 3:
                return "TRECE";
            case 4:
                return "CATORCE";
            case 5:
                return "QUINCE";
            default:
                return "DIECI" + Unidades(unidad);
        }
        case 2:
        switch (unidad)
        {
            case 0:
                return "VEINTE";
            default:
                return "VEINTI" + Unidades(unidad);
        }
        case 3:
            return DecenasY("TREINTA", unidad);
        case 4:
            return DecenasY("CUARENTA", unidad);
        case 5:
            return DecenasY("CINCUENTA", unidad);
        case 6:
            return DecenasY("SESENTA", unidad);
        case 7:
            return DecenasY("SETENTA", unidad);
        case 8:
            return DecenasY("OCHENTA", unidad);
        case 9:
            return DecenasY("NOVENTA", unidad);
        case 0:
            return Unidades(unidad);
    }
}//Unidades()
function DecenasY(strSin, numUnidades) {
    if (numUnidades > 0)
        return strSin + " Y " + Unidades(numUnidades)
    return strSin;
}//DecenasY()
function Centenas(num) {
    centenas = Math.floor(num / 100);
    decenas = num - (centenas * 100);
    switch (centenas)
    {
        case 1:
            if (decenas > 0)
                return "CIENTO " + Decenas(decenas);
            return "CIEN";
        case 2:
            return "DOSCIENTOS " + Decenas(decenas);
        case 3:
            return "TRESCIENTOS " + Decenas(decenas);
        case 4:
            return "CUATROCIENTOS " + Decenas(decenas);
        case 5:
            return "QUINIENTOS " + Decenas(decenas);
        case 6:
            return "SEISCIENTOS " + Decenas(decenas);
        case 7:
            return "SETECIENTOS " + Decenas(decenas);
        case 8:
            return "OCHOCIENTOS " + Decenas(decenas);
        case 9:
            return "NOVECIENTOS " + Decenas(decenas);
    }
    return Decenas(decenas);
}//Centenas()
function Seccion(num, divisor, strSingular, strPlural) {
    cientos = Math.floor(num / divisor)
    resto = num - (cientos * divisor)
    letras = "";
    if (cientos > 0)
        if (cientos > 1)
            letras = Centenas(cientos) + " " + strPlural;
        else
            letras = strSingular;
    if (resto > 0)
        letras += "";
    return letras;
}//Seccion()
function Miles(num) {
    divisor = 1000;
    cientos = Math.floor(num / divisor)
    resto = num - (cientos * divisor)
    strMiles = Seccion(num, divisor, "UN MIL", "MIL");
    strCentenas = Centenas(resto);
    if (strMiles == "")
        return strCentenas;
    return strMiles + " " + strCentenas;
}//Miles()
function Millones(num) {
    divisor = 1000000;
    cientos = Math.floor(num / divisor)
    resto = num - (cientos * divisor)
    strMillones = Seccion(num, divisor, "UN MILLON DE", "MILLONES DE");
    strMiles = Miles(resto);
    if (strMillones == "")
        return strMiles;
    return strMillones + " " + strMiles;
}//Millones()
function NumeroALetras(num) {
    var data = {
        numero: num,
        enteros: Math.floor(num),
        centavos: (((Math.round(num * 100)) - (Math.floor(num) * 100))),
        letrasCentavos: "",
        letrasMonedaPlural: 'Córdobas', //"PESOS", 'Dólares', 'Bolívares', 'etcs'
        letrasMonedaSingular: 'Córdoba', //"PESO", 'Dólar', 'Bolivar', 'etc'
        letrasMonedaCentavoPlural: "CENTAVOS",
        letrasMonedaCentavoSingular: "CENTAVO"
    };
    if (data.centavos > 0) {
        data.letrasCentavos = "CON " + (function () {
            if (data.centavos == 1)
                return Millones(data.centavos) + " " + data.letrasMonedaCentavoSingular;
            else
                return Millones(data.centavos) + " " + data.letrasMonedaCentavoPlural;
        })();
    }
    ;
    if (data.enteros == 0)
        return "CERO " + data.letrasMonedaPlural + " " + data.letrasCentavos;
    if (data.enteros == 1)
        return Millones(data.enteros) + " " + data.letrasMonedaSingular + " " + data.letrasCentavos;
    else
        return Millones(data.enteros) + " " + data.letrasMonedaPlural + " " + data.letrasCentavos;
}//NumeroALetras()
function copiarAlPortapapelesTEXTO(texto) {
    try {
        navigator.clipboard.writeText(texto);
        console.log('Texto copiado al portapapeles');
    } catch (err) {
        console.error('Error al copiar al portapapeles:', err);
    }
}
function copiarAlPortapapelesELEMENTO(elemento) {
//        var aux = document.createElement("input");
//        aux.setAttribute("value", document.getElementById(id_elemento).innerHTML);
//        document.body.appendChild(aux);
//        aux.select();
//        document.execCommand("copy");
//        document.body.removeChild(aux);
    var codigoACopiar = document.getElementById(elemento);
    var seleccion = document.createRange();
    seleccion.selectNodeContents(codigoACopiar);
    window.getSelection().removeAllRanges();
    window.getSelection().addRange(seleccion);
    var res = document.execCommand('copy');
    window.getSelection().removeRange(seleccion);
}
function copiarAlPortapapeles(elemento) {
//        var aux = document.createElement("input");
//        aux.setAttribute("value", document.getElementById(id_elemento).innerHTML);
//        document.body.appendChild(aux);
//        aux.select();
//        document.execCommand("copy");
//        document.body.removeChild(aux);
    var codigoACopiar = document.getElementById(elemento);
    var seleccion = document.createRange();
    seleccion.selectNodeContents(codigoACopiar);
    window.getSelection().removeAllRanges();
    window.getSelection().addRange(seleccion);
    var res = document.execCommand('copy');
    window.getSelection().removeRange(seleccion);
}
