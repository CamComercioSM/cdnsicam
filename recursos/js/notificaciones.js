function cargarNotificacionesColaborador() {
    cargarDivision("menu-notificaciones", "usuarios", "notificaciones", "menuNotificaciones", "", function (notificaciones) {});
}

function consultarNotificacionesColaborador() {
    ejecutarOperacionOculta("usuarios", "notificaciones", "consultarPendientes", "", function (notificaciones) {});
}

function mostrarNotificacionesColaborador() {
    ejecutarOperacionOculta("usuarios", "notificaciones", "pendientesLectura", "", function (notificaciones) {
        console.log(notificaciones);
        jQuery.each(notificaciones, function (i, Notificacion) {
            var idDiv = 'notificacion-' + Notificacion.notificacionID;
            if ($('#' + idDiv + '').length <= 0) {
                html = '<div id="' + idDiv + '"  >';
                html += crearNotificacion(Notificacion);
                html += '</div>';
                $('#div-notificaciones').append(html);
                htmlToast = crearNotificacionSweetlertToast(Notificacion);
                $('#div-notificaciones-toast').append(htmlToast);
                beepNotificacion();
                $('#' + idDiv + '').hide();
                $('#' + idDiv + '').slideDown();
            } else {
                $('#' + idDiv + '').html(crearNotificacion(Notificacion));
            }
        });
    });
}

function crearNotificacion(Notificacion) {
    $html = '<div>';
    switch (Notificacion.notificacionTIPO) {
        case 'INFORMACION':
            $html = '<div class="alert alert-info alert-dismissible">' + '<button type="button" class="close" data-dismiss="alert" aria-hidden="true">×</button> ' + '<h4><i class="icon fa fa-info"></i> ' + Notificacion.notificacionTITULO + '</h4>' + '<p>' + Notificacion.notificacionMENSAJE + '</p>' + '</div>';
            break;
        case 'OPERACION':
            $html = '<div class="alert alert-success alert-dismissible">' + '<button type="button" class="close" data-dismiss="alert" aria-hidden="true">×</button> ' + '<h4><i class="icon fa fa-cogs"></i> ' + Notificacion.notificacionTITULO + '</h4>' + '<p>' + Notificacion.notificacionMENSAJE + '</p>' + '</div>';
            break;
        case 'ALERTA':
            $html = '<div class="alert alert-warning alert-dismissible">' + '<button type="button" class="close" data-dismiss="alert" aria-hidden="true">×</button> ' + '<h4><i class="icon fa fa-warning"></i> ' + Notificacion.notificacionTITULO + '</h4>' + '<p>' + Notificacion.notificacionMENSAJE + '</p>' + '</div>';
            break;
        case 'AVISO':
            $html = '<div class="alert alert-warning bg-teal-active color-palette alert-dismissible">' + '<button type="button" class="close" data-dismiss="alert" aria-hidden="true">×</button> ' + '<h4><i class="icon fa fa-exclamation"></i> ' + Notificacion.notificacionTITULO + '</h4>' + '<p>' + Notificacion.notificacionMENSAJE + '</p>' + '</div>';
            break;
        case 'ERROR':
            $html = '<div class="alert alert-danger alert-dismissible">' + '<button type="button" class="close" data-dismiss="alert" aria-hidden="true">×</button> ' + '<h4><i class="icon fa fa-ban"></i> ' + Notificacion.notificacionTITULO + '</h4>' + '<p>' + Notificacion.notificacionMENSAJE + '</p>' + '</div>';
            break;
    }
    $html += '<script>';
    $html += '$("#notificacion-' + Notificacion.notificacionID + ' .close").click(function(){registrarLecturaNotificacion(' + Notificacion.notificacionID + ')});';
    $html += ' cerradoAutomaticoNotificacion( ' + Notificacion.notificacionID + '  ) ';
    $html += '</script>';
    $html += '</div>';
    return $html;
}

function crearNotificacionToast(Notificacion) {
    $html = '<div>';
    $html += '<div id="notificacionToast-' + Notificacion.notificacionID + '" class="toast alert alert-dismissible" role="alert" aria-live="assertive" aria-atomic="true" data-autohide="false" > ';
    $html += '<div class="toast-header"> ';
    $html += '<img src="media/iconos/CamComercioSM/favicon-16x16.png" class="rounded mr-2" /> ';
    switch (Notificacion.notificacionTIPO) {
        case 'INFORMACION':
            $html += '<strong class="mr-auto">Información</strong> <i class="icon fa fa-info"></i> ';
            break;
        case 'OPERACION':
            $html += '<strong class="mr-auto">Operación</strong> <i class="icon fa fa-cogs"></i> ';
            break;
        case 'ALERTA':
            $html += '<strong class="mr-auto">Alerta</strong> <i class="icon fa fa-warning"></i> ';
            break;
        case 'AVISO':
            $html += '<strong class="mr-auto">Aviso </strong> <i class="icon fa fa-alert"></i> ';
            break;
        case 'ERROR':
            $html += '<strong class="mr-auto">Error</strong> <i class="icon fa fa-ban"></i> ';
            break;
    }
    $html += '  <small class="text-muted">' + Notificacion.notificacionFCHCREACION + '</small> ';
    $html += '<button type="button" class="ml-2 mb-1 close" data-dismiss="toast" aria-label="close" data-dismiss="alert" aria-hidden="true" > <span aria-hidden="true">&times;</span> </button> ';
    $html += '</div> ';
    $html += '<div class="toast-body">';
    $html += '<h4>' + Notificacion.notificacionTITULO + '</h4>';
    $html += '<p>' + Notificacion.notificacionMENSAJE + '</p>';
    $html += '</div> ';
    $html += '</div>';
    $html += '<script>';
    $html += '$(document).ready(function(){ $("#notificacionToast-' + Notificacion.notificacionID + '").toast("show"); });';
    $html += '</script>';
    $html += '</div>';
    //console.log($htmlToast);
    return $html;
}

function crearNotificacionSweetlertToast(Notificacion) {
    const Toast = Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 30000,
        timerProgressBar: true,
        onOpen: (toast) => {
            toast.addEventListener('mouseenter', Swal.stopTimer)
            toast.addEventListener('mouseleave', Swal.resumeTimer)
        }
    })
    var icono = 'success';
    switch (Notificacion.notificacionTIPO) {
        case 'INFORMACION':
            icono = 'info';
            break;
        case 'OPERACION':
            icono = 'info';
            break;
        case 'ALERTA':
            icono = 'warning';
            break;
        case 'AVISO':
            icono = 'warning';
            break;
        case 'ERROR':
            icono = 'erro';
            break;
    }
    Toast.fire({
        icon: icono,
        title: Notificacion.notificacionTITULO + ' <br />' + Notificacion.notificacionID + ' - ' + Notificacion.notificacionFCHCREACION ,
    });
    beepToast();
}

function cerradoAutomaticoNotificacion(contenedorID) {
    var min = 0.5;
    var tiempo = min * 60;
    setInterval(function () {
        if (tiempo == 0) {
            $("#notificacion-" + contenedorID + " .close").click();
        } else {
            tiempo--;
        }
    }, 1000);
}

function registrarLecturaNotificacion(notificacionID) {
    ejecutarOperacionOculta("usuarios", "notificaciones", "registrarLecturaNotificacion", "notificacionID=" + notificacionID, function (notificacion) {
        verificarNotificacionesColaborador();
    });
    $('#notificacion-' + notificacionID + '').remove();
}

function ejecutarOperacionNotificacion(notificacionID) {
    ejecutarOperacion("usuarios", "notificaciones", "ejecutarOperacionNotificacion", "notificacionID=" + notificacionID, function (notificacion) {
        if (notificacion != null) {
            cargarVista(notificacion.componenteCODIGO, notificacion.controladorCLASE, notificacion.operacionFUNCION);
        }
        verificarNotificacionesColaborador();
    });
    $('#notificacion-' + notificacionID + '').remove();
}

function cerrarTodasLasNotificaciones() {
    // Get all elements with class="closebtn"
    var close = document.getElementsByClassName("closebtn");
    var i;
    // Loop through all close buttons
    for (i = 0; i < close.length; i++) {
        // When someone clicks on a close button
        close[i].onclick = function () {
            // Get the parent of <span class="closebtn"> (<div class="alert">)
            var div = this.parentElement;
            // Set the opacity of div to 0 (transparent)
            div.style.opacity = "0";
            // Hide the div after 600ms (the same amount of milliseconds it takes to fade out)
            setTimeout(function () {
                div.style.display = "none";
            }, 60000);
        }
    }
}

function cargarListaNotificaciones() {
    ejecutarOperacionOculta("usuarios", "notificaciones", "pendientesOperacion", "", function (notificaciones) {
        var notif = new Array();
        jQuery.each(notificaciones, function (i, Notificacion) {
            var idDiv = 'lst-notificacion-' + Notificacion.notificacionID;
            if ($('#' + idDiv + '').length <= 0) {
                $html = '<li id="' + idDiv + '"  >';
                $html += crearItemListaNotificacion(Notificacion);
                $html += '</li>';
                $('#listaNotificaciones').append($html);
                $('#' + idDiv + '').hide();
                $('#' + idDiv + '').slideDown();
            } else {
                if ($('#' + idDiv + '').length > 0) {
                    $('#' + idDiv + '').html(crearItemListaNotificacion(Notificacion));
                } else {
                }
            }
            notif.push(idDiv);
        });
        var items = $('#listaNotificaciones li');
        jQuery.each(items, function (i, ItemLista) {
            var seEncontro = false;
            jQuery.each(notif, function (i, ItemSICAM) {
                if ($(ItemLista).attr('id') == ItemSICAM) {
                    seEncontro = true;
                }
            });
            if (!seEncontro) {
                $(ItemLista).slideUp(1000, function () {
                    $(ItemLista).remove();
                });
            }
        });
    });
}

function cantidadNotificacionesColaborador() {
    ejecutarOperacionOculta("usuarios", "notificaciones", "totalPendientes", "", function (notificaciones) {
        $(".numNotificaciones").html(notificaciones);
    });
}

function verificarNotificacionesColaborador() {
    mostrarNotificacionesColaborador();
    cargarListaNotificaciones();
    cantidadNotificacionesColaborador();
}

function crearItemListaNotificacion(Notificacion) {
    $html = '<a id="#item-notificacion-' + Notificacion.notificacionID + '" href="javascript:void(0)" ' + ' onclick=" registrarLecturaNotificacion(' + Notificacion.notificacionID + '); ejecutarOperacionNotificacion(' + Notificacion.notificacionID + ');" >';
    switch (Notificacion.notificacionTIPO) {
        case 'INFORMACION':
            $html += '' + '<i class="icon fa fa-info text-aqua"></i> ' + Notificacion.notificacionTITULO + '' + '';
            break;
        case 'OPERACION':
            $html += '' + '<i class="icon fa fa-cogs text-green"></i> ' + Notificacion.notificacionTITULO + '' + '';
            break;
        case 'ALERTA':
            $html += '' + '<i class="fa fa-warning text-yellow"></i>' + Notificacion.notificacionTITULO + '' + '';
            break;
        case 'AVISO':
            $html += '' + '<i class="icon fa fa-exclamation text-light-blue"></i> ' + Notificacion.notificacionTITULO + '' + '';
            break;
        case 'ERROR':
            $html += '' + '<i class="icon fa fa-ban text-red"></i> ' + Notificacion.notificacionTITULO + '' + '';
            break;
    }
    $html += '<span class="pull-right"><i class="fa fa-thumbs-o-up" aria-hidden="true"></i></span>';
    $html += '</a>';
    return $html;
}

function mostrarNotificacionesDelColaborador() {
    cargarVista('usuarios', 'notificaciones', 'mostrarTodasDelColaborador');
}
$(document).ready(function () {
    cargarNotificacionesColaborador();
});




