/* 
 * Copyright 2017-09-08  Cámara de Comercio de Santa Marta para el Magdalena.
 * Autor: Juan Pablo Llinás Ramírez <jpllinas@ccsm.org.co at www.ccsm.org.co>.
 * Autor: Luis Montoya <lmontoya@ccsm.org.co at www.ccsm.org.co>.
 * Archivo: function.
 *
 * Licenciado bajo la Licencia Apache, VersiÃ³n 2.0;
 * Usted no puede usar este archivo excepto en conformidad con la Licencia.
 * Usted puede obtener una copia de la Licencia en
 *
 *   	http://www.apache.org/licenses/LICENSE-2.0
 *
 * A menos que sea requerido por la ley aplicable o acordado por escrito, el software
 * Distribuido bajo la licencia se distribuye en una "AS IS" o  "COMO ESTA" BASE,
 * Consulte la Licencia para los permisos y Limitaciones bajo la Licencia.
 */
if (typeof PERSONA_NATURAL === 'undefined' || PERSONA_NATURAL === null) {
    var PERSONA_NATURAL = 1;
}

if (typeof PERSONA_JURIDICA === 'undefined' || PERSONA_JURIDICA === null) {
    var PERSONA_JURIDICA = 2;
}

var modo_pruebas = SICAM_MODO_PRUEBAS = false;
function funcionJS(nombreFuncionJavacript) {
    if (typeof nombreFuncionJavacript === "function") {
        nombreFuncionJavacript();
    } else {
        console.log('[' + nombreFuncionJavacript + '] No aparece registrada como una función JAVASCRIPT.');
        console.log('Está definido como ' + typeof nombreFuncionJavacript);
        console.log('Verifique el código e intente nuevamente.');
    }
}

function activarPlugins() {
    $("form").attr('onsubmit', 'return false;');
    $('.minuscula').keyup(function () {
        this.value = this.value.toLowerCase();
    });
    $('.mayuscula').keyup(function () {
        this.value = this.value.toUpperCase();
    });
    $('.sin_espacios').keyup(function () {
        this.value = quitarEspacioEnBlanco(this.value);
    }).keydown(function () {
        this.value = quitarEspacioEnBlanco(this.value);
    }).change(function () {
        this.value = quitarEspacioEnBlanco(this.value);
    });
    $('.codigo').keyup(function () {
        this.value = quitarEspacioEnBlanco(this.value);
        this.value = this.value.toUpperCase();
    }).change(function () {
        this.value = quitarEspacioEnBlanco(this.value);
        this.value = this.value.toUpperCase();
    });
    $(".carga-archivos").fileinput({
        browseOnZoneClick: true,
        uploadAsync: false,
        showUpload: false,
        maxFileCount: 1,
        previewFileType: 'any',
    });
    $("a.operacion").click(function () {
        var operacion = $(this).attr('data-operacion');
    });
    //$('[data-toggle="tooltip"]').tooltip();
    $('.tabla-controles').dataTable();
    $('.titulo-flotante').tooltipster({
        interactive: true
    });
    //$('[data-toggle="tooltip"]').tooltipster();
    $('a[data-toggle="tab"]').on('shown.bs.tab', function (e) {
        $.fn.dataTable.tables({
            visible: true,
            api: true
        }).columns.adjust();
    });
    $.idleTimer(30000 * 60);
    $(document).on("idle.idleTimer", function (event, elem, obj) {
        if (localStorage.getItem("BLOQUEO_INACTIVIDAD") === null) {
            activarInactividad();
            bloquearPantallaLockScreen();
        }
    });
    $('a[href="javascript:void(0)"]').attr('target', '_self');
    //$('a[href="javascript:void(0)"]').attr('onclick', $('a[href="javascript:void(0)"]').attr('onclick') + "; return false;");
    $('a[href*="javascript:"]').attr('target', '_self');
    //$('a[href*="javascript:"]').attr('onclick', $('a[href="javascript:void(0)"]').attr('onclick') + "; return false;");
}

function cargarVista(componente, controlador, operacion, datos = '', funcionEjecutable = null, nombreTabMenu = '', idTabMenu = '') {
    activarLoader(true);
    var datosOperacion = "componente=" + componente + "&controlador=" + controlador + "&operacion=" + operacion + "&" + datos;
    ajaxApi(datosOperacion, function (dataVISTA) {
        if (isJson(dataVISTA)) {
            activarLoader();
            controlRespuesta(dataVISTA);
            desactivarLoader();
            if (funcionEjecutable) {
                funcionEjecutable(dataVISTA);
            }
        } else {
            cargaHTMLVistaAreaPlantillaConDatos(componente, controlador, operacion, dataVISTA, datos);
            irArriba();
        }
    });
}

function cargarModal(componente, controlador, operacion, datos = '', funcionEjecutable = null) {
    activarLoader(true);
    var datosOperacion = "componente=" + componente + "&controlador=" + controlador + "&operacion=" + operacion + "&" + datos;
    ajaxApi(datosOperacion, function (data) {
        activarLoader();
        $("#area-modales").html(data);
        if (funcionEjecutable) {
            funcionEjecutable(data);
        }
        activarPlugins();
        desactivarLoader(true);
    });
}

function cargaHTMLVistaAreaPlantillaConDatos(componente, controlador, operacion, htmlVISTA, datos) {
    return cargaHTMLVistaAreaPlantilla(componente, controlador, operacion, htmlVISTA, '', '', datos);
}

function cargaHTMLVistaAreaPlantilla(componente, controlador, operacion, htmlVISTA, nombreTabMenu = '', idTabMenu = '', datosOperacion = null) {
    activarLoader();
    ejecutarOperacion("sistema", "OperacionesSistema", "datosParaTab",
      "operacionComponente=" + componente + "&operacionControlador=" + controlador + "&operacionOperacion=" + operacion,
      function (datos) {
          activarLoader();
          var datoInicial = 'ver';
          if (datosOperacion) {
//                var ObjDatos = invertirSerializado(datosOperacion);
//                for (var item in ObjDatos) {
//                    datoInicial = ObjDatos[item];
//                    break;
//                }
              cambiarTITULO('' + datos.Operacion.operacionNOMBRETAB + ' :: ' + datos.Operacion.controladorTITULO + ' / ' + datos.Operacion.componenteTITULO);
          } else {
              cambiarURL(
                '' + datos.Operacion.operacionNOMBRETAB + ' :: ' + datos.Operacion.controladorTITULO + ' / ' + datos.Operacion.componenteTITULO,
                componente + '/' + controlador + '/' + operacion + '/' + datoInicial
                );
          }
          crearTabs('<i class="' + datos.Operacion.operacionMENUICONO + ' fa-xs" aria-hidden="true"></i> ' + datos.Operacion.operacionNOMBRETAB + '' + nombreTabMenu, (datos.Operacion.operacionCODIGO + "" + idTabMenu).toLowerCase(), htmlVISTA);
          activarPlugins();
          desactivarLoader();
      });
}

function cargandoDivision(idDivision) {
    $('<div id="' + idDivision + '-load" class="cargando-division" style="z-index: ' + (zIndex() - 1) + ';" ><i class="fa fa-refresh fa-spin"></i></div>').insertAfter("#" + idDivision);
}

function quitarCargandoDivision(idDivision) {
    $('#' + idDivision + '-load').remove();
}

function cargarDivisionSicam(idDivision, componente, controlador, operacion, datos, functionEjecutable = null) {
    cargandoDivision(idDivision);
    var datosOperacion = "componente=" + componente + "&controlador=" + controlador + "&operacion=" + operacion + "&" + datos;
    ajaxApi(datosOperacion, function (data) {
        $("#" + idDivision).html(data);
        if (functionEjecutable !== null) {
            functionEjecutable(data);
        }
        activarPlugins();
        quitarCargandoDivision(idDivision);
    });
}

function cargarDivision(idDivision, componente, controlador, operacion, datos, functionEjecutable = null) {
    cargandoDivision(idDivision);
    var datosOperacion = "componente=" + componente + "&controlador=" + controlador + "&operacion=" + operacion + "&" + datos;
    ajaxApi(datosOperacion, function (data) {
        $("#" + idDivision).html(data);
        if (functionEjecutable !== null) {
            functionEjecutable(data);
        }
        activarPlugins();
        quitarCargandoDivision(idDivision);
    });
}

function ejecutarOperacion(componente, controlador, operacion, datos, funcionEjecutable = null, bloquear = true) {
    activarLoader(bloquear);
    var datosOperacion = "componente=" + componente + "&controlador=" + controlador + "&operacion=" + operacion + "&" + datos;
    ajaxApi(datosOperacion, function (data) {
        activarLoader(bloquear);
        controlRespuesta(data, funcionEjecutable);
        desactivarLoader(bloquear);
    });
}

function ejecutarOperacionOculta(componente, controlador, operacion, datos, funcionEjecutable = null) {
    var datosOperacion = "componente=" + componente + "&controlador=" + controlador + "&operacion=" + operacion + "&" + datos;
    ajaxApi(datosOperacion, function (data) {
        controlRespuesta(data, funcionEjecutable);
    });
}

function ejecutarOperacionPersonalizada(componente, controlador, operacion, datos, funcionEjecutable = null) {
    var datosOperacion = "componente=" + componente + "&controlador=" + controlador + "&operacion=" + operacion + "&" + datos;
    ajaxApi(datosOperacion, function (data) {
        funcionEjecutable(data);
    });
}

function ejecutarOperacionArchivo(componente, controlador, operacion, formData, funcionEjecutable) {
    activarLoader(true);
    formData.append("componente", componente);
    formData.append("controlador", controlador);
    formData.append("operacion", operacion);
    ajaxApi(formData, function (data) {
        controlRespuesta(data, funcionEjecutable);
        desactivarLoader(true);
    }, false, false);
}

function crearFormData(idElementoForm) {
    var formElement = document.getElementById(idElementoForm);
    var formdata = new FormData(formElement);
    for (var key of formdata.entries()) {
//        console.log(key[0] + ', ' + key[1]);
    }
    return formdata;
}

function debugSICAM(mensaje) {
    if (SICAM_MODO_PRUEBAS) {
        console.log(mensaje);
    }
}

function ajaxApi(datosOperacion, funcionEjecutable, procesarDatos = true, tipoContenidoEnviado = 'application/x-www-form-urlencoded; charset=UTF-8') {
    debugSICAM('%c Datos Enviados____', 'color: #bada55;  font-size:120%;');
    debugSICAM(datosOperacion);
    $.ajax({
        type: 'POST',
        url: '/api.php',
        cache: false,
        contentType: tipoContenidoEnviado,
        processData: procesarDatos,
        data: datosOperacion,
        success: function (response) {
            funcionEjecutable(response);
        },
        error: function (error) {
            alertaConexion("Ocurrio un error en la comunicacion con el sistema.\r\n Contacte con el Centro TICS.");
            console.log(error);
            desactivarLoader();
            //quitarCargandoDivision(idDivision);
        }
    });
}


function isJson(data) {
    try {
        JSON.parse(data);
    } catch (e) {
        return false;
    }
    return true;
}

function activarInactividad() {
    ejecutarOperacion('usuarios', 'Sesion', 'activarInactividad', null, function (data) {
        //actualizarNavagador();
        localStorage.setItem("BLOQUEO_INACTIVIDAD", true);
        //console.log("No se puede recargar porque se pierde el trabajo en memoria.\r\nPor ahora solo bloquer la pantalla como cuando se carga una vista.");
    });
}

function controlVista(componente, controlador, operacion, datos, idDivision = null, functionEjecutable = null) {
    if (idDivision == null) {
        cargarVista(componente, controlador, operacion, datos);
    } else {
        cargarDivisionSicam(idDivision, componente, controlador, operacion, datos, functionEjecutable);
}
}

function ejecutarOperacionHTML(componente, controlador, operacion, datos, funcionEjecutable = null, bloquear = true) {
    activarLoader(bloquear);
    var datosOperacion = "componente=" + componente + "&controlador=" + controlador + "&operacion=" + operacion + "&" + datos;
    ajaxApi(datosOperacion, function (data) {
        funcionEjecutable(data);
        desactivarLoader(bloquear);
    });
}

function ejecutarOperacionOcultaJSON(controlador, operacion, datos, functionEjecutable) {
    var datosOperacion = "controlador=" + controlador + "&operacion=" + operacion + "&" + datos;
    $.post("/api.php", datosOperacion, function (data) {
        //console.log(data);
        if (esJson(data)) {
            datos = JSON.parse(data);
            functionEjecutable(datos);
        } else {
            console.log('Hubo un problema con la operación. Por favor, contacte con el Centro de Servicios TICS.');
            console.log(datos);
        }
    });
}

function ejecutarOperacionJSON(controlador, operacion, datos = null, functionEjecutable = null) {
    var datosOperacion = "controlador=" + controlador + "&operacion=" + operacion + "&" + datos;
    bloquearPantalla();
    $.post("/api.php", datosOperacion, function (data) {
        //alert(data);
        //console.log(data);
        if (esJson(data)) {
            datos = JSON.parse(data);
            functionEjecutable(datos);
            desbloquearPantalla();
        } else {
            console.log('Hubo un problema con la operación. Por favor, contacte con el Centro de Servicios TICS.');
            console.log(data);
            desbloquearPantalla();
        }
    });
}

function ejecutarOperacionFormData(formData, functionEjecutable) {
    $.ajax({
        url: '/api.php',
        type: 'post',
        dataType: "html",
        data: formData,
        cache: false,
        contentType: false,
        processData: false
    }).done(function (response) {
        //console.log(response);
        functionEjecutable(response);
    });
}
//*********
//**************
function cargarVistaApps(controlador, operacion, datos) {
    activarLoader(true);
    var datosOperacion = "componente=tienda-apps" + "&controlador=" + controlador + "&operacion=" + operacion + "&" + datos;
    ajaxApi(datosOperacion, function (data) {
        $("area_apps").html(data);
        desactivarLoader(true);
        activarPlugins();
    });
}

function seleccinarSelect(id, valor) {
    if (valor != null) {
        $("#" + id + " option[value='" + valor + "']").prop("selected", "selected");
        //$("#" + id ).select2("val", valor);
    }
}

function seleccionarValorSelec2(id, valor) {
    if (valor != null) {
        $("#" + id).val(valor).trigger('change.select2');
    }
}

function seleccionarValorSelecMultiple(id, valorArray, key) {
    if (valorArray != null) {
        var valores = [];
        $.each(valorArray, function (index, valor) {
            valores.push(valor[key]);
        });
        if (valores.length > 0) {
            console.log(valores);
            $('#' + id).val(valores).trigger('change');
        }
    }
}

function seleccionarValorSelec2multiple(id, valores, datos, control) {
    var myObjs = JSON.parse(valores);
    var myObjsControl = JSON.parse(control);
    var ventaInfoFiltroID = datos;
    var todos = 'todos';
    if ($.isEmptyObject(myObjsControl) != true) {
        if ($.isEmptyObject(myObjs) != true) {
            myObjs.forEach(function (myObj) {
                $("#" + id + " option[value='" + myObj[ventaInfoFiltroID] + "']").prop("selected", "selected");
            });
        } else {
            $("#" + id + " option[value='" + todos + "']").prop("selected", "selected");
        }
    }
}

function seleccionarValorSelec2multipleCheck(id, valores, datos) {
    var myObjs = JSON.parse(valores);
    var ventaInfoFiltroID = datos;
    console.log(datos);
    if (myObjs != null) {
        myObjs.forEach(function (myObj) {
            $("#" + id + " option[value='" + myObj[ventaInfoFiltroID] + "']").prop("checked", "checked");
        });
    }
}

function cargarMenuSICAM(menuDivID) {
    cargarDivision(menuDivID, 'usuarios', 'Menu', 'mostrarMenu', null, function () {
        desactivarLoader();
        sonidoIntro();
    });
}

function bloquearPantallaLockScreen() {
    $("body").removeClass("skin-blue sidebar-mini");
    $("body").addClass("hold-transition lockscreen");
    $("#loaderInactividad").removeClass("hidden");
}

function desbloquearPantallaLockScreen() {
    $("body").removeClass("hold-transition lockscreen");
    $("body").addClass("skin-blue sidebar-mini");
    $("#loaderInactividad").addClass("hidden");
}

function popUp(mypage, myname, w, h, scroll, pos) {
    if (pos == "random") {
        LeftPosition = (screen.width) ? Math.floor(Math.random() * (screen.width - w)) : 100;
        TopPosition = (screen.height) ? Math.floor(Math.random() * ((screen.height - h) - 75)) : 100;
    }
    if (pos == "center") {
        LeftPosition = (screen.width) ? (screen.width - w) / 2 : 100;
        TopPosition = (screen.height) ? (screen.height - h) / 2 : 100;
    } else if ((pos != "center" && pos != "random") || pos == null) {
        LeftPosition = 0;
        TopPosition = 20
    }
    settings = 'width=' + w + ',height=' + h + ',top=' + TopPosition + ',left=' + LeftPosition + ',scrollbars=' + scroll + ',location=no,directories=no,status=no,menubar=no,toolbar=no,resizable=no';
    win = window.open(mypage, myname, settings);
}
//////
function iniciarSesion(credenciales) {
    ejecutarOperacion('usuarios', 'Sesion', 'iniciarSesion', credenciales, function (data) {
        desbloquearSalidaSistema();
        actualizarNavagador();
    });
}

function iniciarSesionInactividad(credenciales) {
    ejecutarOperacion('usuarios', 'Sesion', 'iniciarSesion', credenciales, function (data) {
        desbloquearSalidaSistema();
        desbloquearPantallaLockScreen();
        localStorage.removeItem("BLOQUEO_INACTIVIDAD");
    });
}

function cerrarSesion() {
    ejecutarOperacion('usuarios', 'Sesion', 'cerrarSesion', null, function (data) {
        desbloquearSalidaSistema()
        actualizarNavagador();
    });
}

function ejecutarOperacionEnDivision(idDivision, componente, controlador, operacion, datos, funcionEjecutable = null, bloquear = true) {
    cargandoDivision(idDivision);
    var datosOperacion = "componente=" + componente + "&controlador=" + controlador + "&operacion=" + operacion + "&" + datos;
    ajaxApi(datosOperacion, function (data) {
        controlRespuesta(data, funcionEjecutable);
        quitarCargandoDivision(idDivision);
    });
}

function renombrarname(id, name) {
    $('#' + id).attr('name', name);
}

function controlRespuesta(data, funcionEjecutable = null) {
    if (isJson(data)) {
        var response = JSON.parse(data);

        switch (response.RESPUESTA) {
            case 'EXITO':
                if (response.MENSAJE != null && response.MENSAJE != "") {
                    alertaExito(response.MENSAJE);
                }
                if (funcionEjecutable != null) {
                    funcionEjecutable(response.DATOS);
                }
                break;
            case 'ERROR':
                alertaError(response.MENSAJE);
                break;
            case 'FALLO':
                alertaPrevencion(response.MENSAJE);
                break;
            case 'ALERTA':
                alertaPrevencion(response.MENSAJE);
                if (funcionEjecutable != null) {
                    funcionEjecutable(response.DATOS);
                }
                break;
            case 'INFO':
                alertaInformacion(response.MENSAJE);
                if (funcionEjecutable != null) {
                    funcionEjecutable(response.DATOS);
                }
                break;
        }
    } else {
        var txtMsn = "La respuesta de la operacion, no cumple con el formato esperado.<br />Contacta con el Centro TICS. <em>SOLO PARA EL CENTRO TICS: [Verfica en la consola los datos del error]</em>.";
        alertaError(txtMsn);
}
}

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
