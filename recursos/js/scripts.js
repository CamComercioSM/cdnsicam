var tiempoInactivo = 0;
var tiempoInactividad = 150;
var controlRecargaInactividad = null;
function activarControlDeInactividad() {
    controlRecargaInactividad = setInterval(function () {
        tiempoInactivo++;
        if (tiempoInactivo === tiempoInactividad) {
            cerrarConexionUsuario();
        }
    }, 1000);
    document.addEventListener("mousemove", (e) => {
//        console.log(e);
        tiempoInactivo = 0;
    });
}

function validarDatosLoginColaborador(usuario, clave, funcionEXITO) {
    ejecutarOperacionAPP('iniciarSesionColaborador', 'Seguridad',
            "colaboradorUSUARIO=" + usuario + "&colaboradorPASSWORD=" + clave,
            function (respuesta) {
                consola(respuesta);
                if (respuesta) {
                    if (typeof funcionEXITO === "function") {
                        funcionEXITO(respuesta);
                    } else {
                        $('#autentificacionModal').modal('hide');
                        avisoExito("Bienvenid@ " + respuesta.personaRAZONSOCIAL + " [" + respuesta.colaboradorEMAIL + "] - " + respuesta.cargoTITULO + ".");
                        setTimeout(function () {
                            window.location.reload();
                        }, 1234);
                    }
                }
            }
    );
}
function cerrarSesionColaborador(funcionEXITO) {
    confirmacionEjecutarOperacion("¿Segur@ que desea cerrar la sesión activa?", function () {
        cerrarConexionUsuario();
        ;
    });
}
function cerrarConexionUsuario() {
    ejecutarOperacionAPP('cerrarSesionColaborador', 'Seguridad', '',
            function (respuesta) {
                //console.log(respuesta);
                if (respuesta) {
                    avisoExito("Se ha cerrado correctamente la sesión del colaborador. " + respuesta);
                    if (typeof funcionEXITO === "function") {
                        funcionEXITO(respuesta);
                    }
                    setTimeout(function () {
                        window.location.reload();
                    }, 1234);
                }
            }
    );
}
function datosSesionColaborador(funcionEXITO) {
    ejecutarOperacionCargarVistaAPP('divDatosUsuario', 'datosSesionColaborador', 'Seguridad', '',
            function (respuesta) {
                //console.log(respuesta);
                if (respuesta) {
                    avisoExito("Respuesta desde TIENDASICAM. => " + respuesta);
                    if (typeof funcionEXITO === "function") {
                        funcionEXITO(respuesta);
                    }
                }
            }
    );
}

inyectarCargando();
//mostrarCargando();
//ocultarCargando();
window.onload = function () {
    ocultarCargando();
    console.log('...........cargados los scripts.');
};