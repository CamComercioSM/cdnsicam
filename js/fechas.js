var tiempoArranque = new Date();

var FechaSistema = new Date();

function fechaDelSistema() {
    ejecutarOperacionOculta("sistema", "sicam", "fechaSistema", "",
            function (respuesta) {
                FechaSistema = new Date(
                        respuesta.tiempo.year, respuesta.tiempo.mon, respuesta.tiempo.mday,
                        respuesta.tiempo.hours, respuesta.tiempo.minutes, respuesta.tiempo.seconds);
                return FechaSistema;
            }
    );
}

function definirRelojAsistencia(divMuestra) {
    ejecutarOperacionOculta("sistema", "sicam", "fechaSistema", "",
            function (respuesta) {
                alert(JSON.stringify(respuesta));
                var momentoActual = new Date();
                tiempoArranque = new Date(
                        momentoActual.getFullYear(), momentoActual.getMonth(), momentoActual.getDate(),
                        respuesta.DATOS.tiempo.hours, respuesta.DATOS.tiempo.minutes, respuesta.DATOS.tiempo.seconds);
                arrancarReloj(divMuestra, tiempoArranque);
            }
    );
}

function arrancarReloj(divMuestra, tiempoArranque) {
    setInterval(function () {
        var tiempoMarcadoMsec = tiempoArranque.getTime();
        tiempoArranque.setTime((tiempoMarcadoMsec + 1000));
        $("#" + divMuestra).html(
                tiempoArranque.getHours() + ":" + tiempoArranque.getMinutes() + ":" + tiempoArranque.getSeconds()
                );
    }, 1000);
}



function convertirTiempoASegundos(hms) {
    console.log(hms);
    var a = hms.split(':'); // split it at the colons
    // minutes are worth 60 seconds. Hours are worth 60 minutes.
    var seconds = (+a[0]) * 60 * 60 + (+a[1]) * 60 + (+a[2]);
    return seconds;
}



function obtenerFechaTextoYYYYMMDDHHIISS(otraFecha) {
    var fecha = new Date();
    if (otraFecha) {
        fecha = otraFecha;
    }
    return ""
            + (fecha.getFullYear()) + "-" //año
            + ("0" + (fecha.getMonth() + 1)).slice(-2) + "-"  //mes
            + ("0" + (fecha.getDate())).slice(-2) + " "   //dia
            + ("0" + (fecha.getHours())).slice(-2) + ":"   //hora
            + ("0" + (fecha.getMinutes())).slice(-2) + ":"  //minuto
            + ("0" + (fecha.getSeconds())).slice(-2) + ""; //segundo
}

function obtenerFechaTextoYYYYMMDDHHII(otraFecha) {
    var fecha = new Date();
    if (otraFecha) {
        fecha = otraFecha;
    }
    return ""
            + (fecha.getFullYear()) + "-" //año
            + ("0" + (fecha.getMonth() + 1)).slice(-2) + "-"  //mes
            + ("0" + (fecha.getDate())).slice(-2) + " "   //dia
            + ("0" + (fecha.getHours())).slice(-2) + ":"   //hora
            + ("0" + (fecha.getMinutes())).slice(-2) + "";  //minuto

}