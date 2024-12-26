cargarArchivoJs('https://cdnsicam.net/js/sonidos.js');
cargarArchivoJs('https://cdnsicam.net/js/utilidades.js');
function cargarArchivoJs(rutaArchivo) {
        window.addEventListener("load", function (event) {
                var list = document.getElementsByTagName('script');
                var i = list.length, flag = false;
                while (i--) {
                        if (list[i].src === rutaArchivo) {
                                flag = true;
                                break;
                        }
                }
                if (!flag) {
                        var tag = document.createElement('script');
                        tag.src = rutaArchivo;
                        tag.defer = true;
                        document.getElementsByTagName('body')[0].appendChild(tag);
                }
                //console.log("'cargado");
        });
}
function funcionJS(nombreFuncionJavacript) {
        if (typeof nombreFuncionJavacript === "function") {
                nombreFuncionJavacript();
        } else {
                console.log('[' + nombreFuncionJavacript + '] No aparece registrada como una función JAVASCRIPT.');
                console.log('Está definido como ' + typeof nombreFuncionJavacript);
                console.log('Verifique el código e intente nuevamente.');
        }
}
var fnMostrarCargando = 0;
function ocultarCargando() {
        mostrarMensajesConsola = true;
        fnMostrarCargando--;
        if (fnMostrarCargando <= 0) {
                $(".loaderSicamCamComercioSM").fadeOut();
                fnMostrarCargando = 0;
        } else {
                setTimeout(ocultarCargando, 1234);
        }
        datosEjecucionJS(ocultarCargando);
        consola(fnMostrarCargando + "......ocultando bloqueo pantalla. -> ");
}
function mostrarCargando() {
        mostrarMensajesConsola = true;
        if (fnMostrarCargando >= 0) {
                $(".loaderSicamCamComercioSM").fadeIn();
        }
        fnMostrarCargando++;
        consola("mostrando bloqueo pantalla..." + fnMostrarCargando);
        datosEjecucionJS(mostrarCargando);
}
function inyectarCargando() {
//    window.addEventListener("load", function (event) {
        let html = ' <div class = "loaderSicamCamComercioSM no-print" style = "position: fixed; top: 0; left: 0; width: 100%; height: 100%; z-index: 99999; background-color: rgba(0,0,0,0.7); display: none;" > '
                + '<table align = "center" style = "width: 100%; height: 100%;">'
                + ' <td align = "center" valign = "middle" class = "animate pulse infinite pulsoCargando animate__animated  animate__pulse animate__infinite " >'
                + ' <img src = "https://cdnsicam.net/img/ccsm/logo.png" alt = "" style = "max-width: 210px;"/>'
                + ' </td>'
                + ' </table>'
                + ' </div> ';
        //document.body.innerHTML += html;
        document.write(html);
//    });
}

//debug consola mostar datos 
var mostrarMensajesConsola = false;
function consola(obj) {
        if (mostrarMensajesConsola) {
                console.log(obj);
        }
}
function datosEjecucionJS(objectoInspeccion) {
        if (objectoInspeccion) {
                if (objectoInspeccion.caller) {
                        let nombreFuncion = objectoInspeccion.caller.name;
                        let argumentosFuncion = " [";
                        if (Object.hasOwn(objectoInspeccion.caller, "arguments")) {
                                if (objectoInspeccion.caller.arguments) {
                                        for (var item in objectoInspeccion.caller.arguments) {
                                                if (typeof objectoInspeccion.caller.arguments[item] === 'object') {
//                    console.log(objectoInspeccion.caller.arguments[item]);
                                                        argumentosFuncion += " ES UN OBJETO; ";
                                                } else {
                                                        argumentosFuncion += " {" + objectoInspeccion.caller.arguments[item].toString().slice(0, 123).replace(/(?:\r\n|\r|\n)/g, '') + "}; ";
                                                }
                                        }
                                }
                        }
                        argumentosFuncion += "] ";
                        consola("Llamada desde ->" + nombreFuncion + argumentosFuncion);
                        if (Object.hasOwn(objectoInspeccion.caller, "caller")) {
                                if (objectoInspeccion.caller.caller) {
                                        datosEjecucionJS(objectoInspeccion.caller);
                                }
                        }
                }
        }
}

///ajustes para el navegador y la app
function ajustarPluginsParaAPP() {
        $("form").attr('onsubmit', 'return false;');
        $("form").attr('enctype', 'application/x-www-form-urlencoded');
}

//Ventanas de Alerta - Personalizadas     
function avisoFalloInternet(texto) {
        beepFalloInternet();
        return Swal.fire({
                icon: 'error',
                title: 'Oops... ¡Error!',
                html: texto
        });
}
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




var PilaEjecuciones = [];
PilaEjecuciones.abortAll = function () {
        $(this).each(function (idx, jqXHR) {
                jqXHR.abort();
        });
        PilaEjecuciones = [];
};



//cargando contenido principal
function cargarContenido(Operacion, Controlador, datosParaOperacion = null, funcionEjecutable = null, procesarDatos = true, tipoContenidoEnviado = 'application/x-www-form-urlencoded; charset=UTF-8') {
        mostrarCargando();
        var datosOperacion = "controlador=" + Controlador + "&operacion=" + Operacion + "&" + datosParaOperacion;
        JQ_AJAX = $.ajax({
                type: 'POST',
                url: '/api.php',
                cache: false,
                contentType: tipoContenidoEnviado,
                processData: procesarDatos,
                data: datosOperacion,
                success: function (respuestaHTML) {
                        //consola(respuestaHTML);
                        $("main[role='main']").html(respuestaHTML);
                        if (typeof funcionEjecutable === "function") {
                                funcionEjecutable(respuestaHTML);
                        }
                        ajustarPluginsParaAPP();
                        ocultarCargando();
                },
                error: function (error) {
                        avisoError("Ocurrio un error en la comunicacion con el sistema.\r\n Contacte con el Centro TICS.");
                        consola(error);
                        ocultarCargando();
                        //quitarCargandoDivision(idDivision);
                }
        });
}

//Para la API Local
function cargarVista(idDiv, Vista, Controlador) {
        mostrarCargando();
        var datosOperacion = "controlador=" + Controlador + "&operacion=" + Vista;
        JQ_AJAX = $.ajax({
                type: 'POST',
                url: '/api.php',
                cache: false,
                contentType: (tipoContenidoEnviado = 'application/x-www-form-urlencoded; charset=UTF-8'),
                processData: (procesarDatos = true),
                data: datosOperacion,
                success: function (response) {
                        $("#" + idDiv).html(response);
                        ajustarPluginsParaAPP();
                        ocultarCargando();
                },
                error: function (error) {
                        avisoError("Ocurrio un error en la comunicacion con el sistema.\r\n Contacte con el Centro TICS.");
                        consola(error);
                        ocultarCargando();
                        //quitarCargandoDivision(idDivision);
                }
        });
}
function cargarVistaAPP(idDiv, Vista, Controlador, funcionEjecutable = null, procesarDatos = true, tipoContenidoEnviado = 'application/x-www-form-urlencoded; charset=UTF-8') {
        mostrarCargando();
        var datosOperacion = "controlador=" + Controlador + "&operacion=" + Vista;
        JQ_AJAX = $.ajax({
                type: 'POST',
                url: '/api.php',
                cache: false,
                contentType: tipoContenidoEnviado,
                processData: procesarDatos,
                data: datosOperacion,
                success: function (response) {
                        $("#" + idDiv).html(response);
                        if (typeof funcionEjecutable === "function") {
                                funcionEjecutable(response);
                        }
                        ajustarPluginsParaAPP();
                        ocultarCargando();
                },
                error: function (error) {
                        avisoError("Ocurrio un error en la comunicacion con el sistema.\r\n Contacte con el Centro TICS.");
                        consola(error);
                        ocultarCargando();
                        //quitarCargandoDivision(idDivision);
                }
        });
}
function cargarVistaDatos(idDiv, Vista, Controlador, datosParaOperacion = null, funcionEjecutable = null, procesarDatos = true, tipoContenidoEnviado = 'application/x-www-form-urlencoded; charset=UTF-8') {
        mostrarCargando();
        var datosOperacion = "controlador=" + Controlador + "&operacion=" + Vista + "&" + datosParaOperacion;
        JQ_AJAX = $.ajax({
                type: 'POST',
                url: '/api.php',
                cache: false,
                contentType: tipoContenidoEnviado,
                processData: procesarDatos,
                data: datosOperacion,
                success: function (response) {
                        $("#" + idDiv).html(response);
                        if (typeof funcionEjecutable === "function") {
                                funcionEjecutable(response);
                        }
                        ajustarPluginsParaAPP();
                        ocultarCargando();
                },
                error: function (error) {
                        avisoError("Ocurrio un error en la comunicacion con el sistema.\r\n Contacte con el Centro TICS.");
                        consola(error);
                        ocultarCargando();
                        //quitarCargandoDivision(idDivision);
                }
        });
}
function cargarVistaLocal(idDiv, Vista, Controlador, funcionEjecutable = null, procesarDatos = true, tipoContenidoEnviado = 'application/x-www-form-urlencoded; charset=UTF-8') {
        mostrarCargando();
        var datosOperacion = "controlador=" + Controlador + "&operacion=" + Vista;
        JQ_AJAX = $.ajax({
                type: 'POST',
                url: '/api.php',
                cache: false,
                contentType: tipoContenidoEnviado,
                processData: procesarDatos,
                data: datosOperacion,
                success: function (response) {
                        $("#" + idDiv).html(response);
                        if (typeof funcionEjecutable === "function") {
                                funcionEjecutable(response);
                        }
                        ajustarPluginsParaAPP();
                        ocultarCargando();
                },
                error: function (error) {
                        avisoError("Ocurrio un error en la comunicacion con el sistema.\r\n Contacte con el Centro TICS.");
                        consola(error);
                        ocultarCargando();
                        //quitarCargandoDivision(idDivision);
                }
        });
//    var xhttp = new XMLHttpRequest();
//    xhttp.onreadystatechange = function () {
//        consola(this);
//        if (this.readyState == 4 && this.status == 200) {
//            document.getElementById(idDiv).innerHTML = this.responseText;
//            if (typeof funcionEjecutable === "function") {
//                funcionEjecutable();
//            }
//            ocultarCargando();
//        }
//    };
//    xhttp.open("POST", "api.php", true);
//    xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
//    xhttp.send("controlador=" + Controlador + "&operacion=" + Vista);
}
function cargarVistaControlador(idDiv, Controlador, Vista, funcionEjecutable = null, procesarDatos = true, tipoContenidoEnviado = 'application/x-www-form-urlencoded; charset=UTF-8', datosParaOperacion = null) {
        mostrarCargando();
        var datosOperacion = "controlador=" + Controlador + "&operacion=" + Vista + "&" + datosParaOperacion;
        JQ_AJAX = $.ajax({
                type: 'POST',
                url: '/api.php',
                cache: false,
                contentType: tipoContenidoEnviado,
                processData: procesarDatos,
                data: datosOperacion,
                success: function (response) {
                        $("#" + idDiv).html(response);
                        if (typeof funcionEjecutable === "function") {
                                funcionEjecutable(response);
                        }
                        ajustarPluginsParaAPP();
                        ocultarCargando();
                },
                error: function (error) {
                        avisoError("Ocurrio un error en la comunicacion con el sistema.\r\n Contacte con el Centro TICS.");
                        consola(error);
                        ocultarCargando();
                        //quitarCargandoDivision(idDivision);
                }
        });
//    var xhttp = new XMLHttpRequest();
//    xhttp.onreadystatechange = function () {
//        consola(this);
//        if (this.readyState == 4 && this.status == 200) {
//            document.getElementById(idDiv).innerHTML = this.responseText;
//            if (typeof funcionEjecutable === "function") {
//                funcionEjecutable();
//            }
//            ocultarCargando();
//        }
//    };
//    xhttp.open("POST", "api.php", true);
//    xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
//    xhttp.send("controlador=" + Controlador + "&operacion=" + Vista);
}
function ejecutarOperacionCargarVista(idDiv, Controlador, Vista, datosParaOperacion = null, funcionEjecutable = null, procesarDatos = true, tipoContenidoEnviado = 'application/x-www-form-urlencoded; charset=UTF-8') {
        cargarVistaControlador(idDiv, Controlador, Vista, funcionEjecutable, procesarDatos, tipoContenidoEnviado, datosParaOperacion);
}
function ejecutarOperacionCargarVistaAPP(idDiv, Operacion, Controlador, datosParaOperacion = null, funcionEjecutable = null, procesarDatos = true, tipoContenidoEnviado = 'application/x-www-form-urlencoded; charset=UTF-8') {
        mostrarCargando();
        var datosOperacion = "controlador=" + Controlador + "&operacion=" + Operacion + "&" + datosParaOperacion;
        JQ_AJAX = $.ajax({
                type: 'POST',
                url: '/api.php',
                cache: false,
                contentType: tipoContenidoEnviado,
                processData: procesarDatos,
                data: datosOperacion,
                success: function (respuestaHTML) {
                        //consola(respuestaHTML);
                        $("#" + idDiv).html(respuestaHTML);
                        if (typeof funcionEjecutable === "function") {
                                funcionEjecutable(respuestaHTML);
                        }
                        ajustarPluginsParaAPP();
                        ocultarCargando();
                },
                error: function (error) {
                        avisoError("Ocurrio un error en la comunicacion con el sistema.\r\n Contacte con el Centro TICS.");
                        consola(error);
                        ocultarCargando();
                        //quitarCargandoDivision(idDivision);
                }
        });
}
function ejecutarOperacionAPP(Operacion, Controlador, datosParaOperacion = null, funcionEjecutable = null, procesarDatos = true, tipoContenidoEnviado = 'application/x-www-form-urlencoded; charset=UTF-8') {

        mostrarCargando();
        var datosOperacion = "controlador=" + Controlador + "&operacion=" + Operacion + "&" + datosParaOperacion;
        console.log(datosOperacion);
//        
        JQ_AJAX = $.ajax({
                type: 'POST',
                url: '/api.php',
                cache: false,
                contentType: tipoContenidoEnviado,
                processData: procesarDatos,
                data: datosOperacion,
//                beforeSend: function (data) {
//                        console.log( data );
//                },
                success: function (respuestaJSON) {
//            consola(respuestaJSON);
//            consola(respuestaJSON.MENSAJE);
                        validarRespuesta(respuestaJSON, function (respuestaJSON) {
                                if (typeof funcionEjecutable === "function") {
                                        funcionEjecutable(respuestaJSON);
                                }
                        });
                        ajustarPluginsParaAPP();
                        ocultarCargando();
                },
                error: function (error) {
                        avisoError("Ocurrio un error en la comunicacion con el sistema.\r\n Contacte con el Centro TICS.");
                        consola(error);
                        ocultarCargando();
                        //quitarCargandoDivision(idDivision);
                }
        });
//        
}
function ejecutarOperacionAPPOculta(Operacion, Controlador, datosParaOperacion = null, funcionEjecutable = null, procesarDatos = true, tipoContenidoEnviado = 'application/x-www-form-urlencoded; charset=UTF-8') {
//    mostrarCargando();
        var datosOperacion = "controlador=" + Controlador + "&operacion=" + Operacion + "&" + datosParaOperacion;
        JQ_AJAX = $.ajax({
                type: 'POST',
                url: '/api.php',
                cache: false,
                contentType: tipoContenidoEnviado,
                processData: procesarDatos,
                data: datosOperacion,
                beforeSend: function (jqXHR) {
                        PilaEjecuciones.push(jqXHR);
                },
                complete: function (jqXHR) {
                        var index = PilaEjecuciones.indexOf(jqXHR);
                        if (index > -1) {
                                PilaEjecuciones.splice(index, 1);
                        }
                },
                success: function (respuestaJSON) {
//            consola(respuestaJSON);
//            consola(respuestaJSON.MENSAJE);
                        validarRespuesta(respuestaJSON, function (respuestaJSON) {
                                if (typeof funcionEjecutable === "function") {
                                        funcionEjecutable(respuestaJSON);
                                }
                        });
                        ajustarPluginsParaAPP();
//            ocultarCargando();
                },
                error: function (error) {
                        console.log("Ocurrio un error en la comunicacion con el sistema.\r\n Contacte con el Centro TICS.");
                        consola(error);
                        ocultarCargando();
                        //quitarCargandoDivision(idDivision);
                }
        });
}


function ejecutarOperacionAPPArchivo(operacion, controlador, formData, funcionEjecutable) {
        formData.append("controlador", controlador);
        formData.append("operacion", operacion);
        ajaxApi(formData, function (data) {
                controlRespuesta(data, funcionEjecutable);
        }, false, false);
}



//
//
//Para la API de SICAM
//
//
var JQ_AJAX = null;
function ajaxApi(datosOperacion, funcionEjecutable, procesarDatos = true, tipoContenidoEnviado = 'application/x-www-form-urlencoded; charset=UTF-8') {
        mostrarCargando();
        JQ_AJAX = $.ajax({
                type: 'POST',
                url: '/api.php',
                cache: false,
                contentType: tipoContenidoEnviado,
                processData: procesarDatos,
                data: datosOperacion,
                success: function (response) {
                        funcionEjecutable(response);
                        ocultarCargando();
                },
                error: function (error) {
                        alertaConexion("Ocurrio un error en la comunicacion con el sistema.\r\n Contacte con el Centro TICS.");
                        console.log(error);
                        ocultarCargando();
                }
        });
}
//
function crearObjetoDatos(idElementoForm) {
        var formElement = document.getElementById(idElementoForm);
        consola(formElement);
        var formdata = new FormData(formElement);
        consola(formdata);
        for (var key of formdata.entries()) {
                consola(key[0] + ', ' + key[1]);
        }
        return formdata;
}
//Vzlidar respuestas
function validarRespuesta(data, funcionEjecutable = null) {
        if (isJson(data)) {
                var response = JSON.parse(data);
                switch (response.RESPUESTA) {
                        case 'EXITO':
                                if (response.MENSAJE != null && response.MENSAJE != "") {
                                        avisoExito(response.MENSAJE);
                                }
                                if (funcionEjecutable != null) {
                                        funcionEjecutable(response.DATOS);
                                }
                                break;
                        case 'ERROR':
                                avisoError(response.MENSAJE);
                                break;
                        case 'FALLO':
                                avisoPrevencion(response.MENSAJE);
                                break;
                        case 'ALERTA':
                                avisoPrevencion(response.MENSAJE);
                                if (funcionEjecutable != null) {
                                        funcionEjecutable(response.DATOS);
                                }
                                break;
                        case 'INFO':
                                avisoInformacion(response.MENSAJE);
                                if (funcionEjecutable != null) {
                                        funcionEjecutable(response.DATOS);
                                }
                                break;
                }
        } else {
                var txtMsn = "La respuesta de la operacion, no cumple con el formato esperado.<br />Contacta con el Centro TICS. <em>SOLO PARA EL CENTRO TICS: [Verfica en la consola los datos del error]</em>.";
                avisoError(txtMsn);
}
}
function isJson(text) {
        if (typeof text !== "string") {
                return false;
        }
        try {
                JSON.parse(text);
                return true;
        } catch (error) {
                return false;
        }
}
