// Los Sonidos / Beeps
var volumen = 90;
var sonidos = {};
sonidos.audioCampana = document.createElement('audio');
sonidos.audioCampana.setAttribute('src', 'https://libs.tiendasicam32.net/sonidos/campana-alerta.mp3');
sonidos.audioTada = document.createElement('audio');
sonidos.audioTada.setAttribute('src', 'https://libs.tiendasicam32.net/sonidos/tada.mp3');
sonidos.audiobeepDoble = document.createElement('audio');
sonidos.audiobeepDoble.setAttribute('src', 'https://libs.tiendasicam32.net/sonidos/doble-beep.mp3');
sonidos.audioIntro = document.createElement('audio');
sonidos.audioIntro.setAttribute('src', 'https://libs.tiendasicam32.net/sonidos/intro.mp3');
sonidos.audioBeep = document.createElement('audio');
sonidos.audioBeep.setAttribute('src', 'https://libs.tiendasicam32.net/sonidos/beep.mp3');
sonidos.audioTarea = document.createElement('audio');
sonidos.audioTarea.setAttribute('src', 'https://libs.tiendasicam32.net/sonidos/tarea-asignada.mp3');
sonidos.audioNotificacion = document.createElement('audio');
sonidos.audioNotificacion.setAttribute('src', 'https://libs.tiendasicam32.net/sonidos/notificacion.mp3');
sonidos.audioToast = document.createElement('audio');
sonidos.audioToast.setAttribute('src', 'https://libs.tiendasicam32.net/sonidos/sos-morse.mp3');
sonidos.audioError = document.createElement('audio');
sonidos.audioError.setAttribute('src', 'https://libs.tiendasicam32.net/sonidos/error-cliente.mp3');
sonidos.audioEnvio = document.createElement('audio');
sonidos.audioEnvio.setAttribute('src', 'https://libs.tiendasicam32.net/sonidos/cohete.mp3');
sonidos.botonClic = document.createElement('audio');
sonidos.botonClic.setAttribute('src', 'https://libs.tiendasicam32.net/sonidos/boton_click.mp3');
sonidos.fallaInternet = document.createElement('audio');
sonidos.fallaInternet.setAttribute('src', 'https://libs.tiendasicam32.net/sonidos/falla_internet.mp3');

function reproducirSonidoSistema(sonido, volumen) {
    // console.log(sonido);
    // console.log(volumen);
    if (volumen == 0) {
        sonido.volume = 0;
        sonido.pause();
        sonido.currentTime = 0;
    } else {
        sonido.volume = volumen / 100;
        sonido.play();
    }
}

function beepCampanaAlerta(volumen) {
    volumen = (volumen) ? volumen : 75;
    reproducirSonidoSistema(sonidos.audioCampana, volumen);
}

function beepTada(volumen) {
    volumen = (volumen) ? volumen : 75;
    reproducirSonidoSistema(sonidos.audioTada, volumen);
}

function beepDoble(volumen) {
    volumen = (volumen) ? volumen : 75;
    reproducirSonidoSistema(sonidos.audiobeepDoble, volumen);
}

function beep(volumen) {
    volumen = (volumen) ? volumen : 75;
    reproducirSonidoSistema(sonidos.audioBeep, volumen);
}

function beepTarea(volumen) {
    volumen = (volumen) ? volumen : 75;
    reproducirSonidoSistema(sonidos.audioTarea, volumen);
}

function beepNotificacion(volumen) {
    volumen = (volumen) ? volumen : 75;
    reproducirSonidoSistema(sonidos.audioNotificacion, volumen);
}

function beepToast(volumen) {
    volumen = (volumen) ? volumen : 100;
    reproducirSonidoSistema(sonidos.audioToast, volumen);
}

function beepError(volumen) {
    volumen = (volumen) ? volumen : 75;
    reproducirSonidoSistema(sonidos.audioError, volumen);
}

function beepFallaInternet(volumen) {
    volumen = (volumen) ? volumen : 75;
    reproducirSonidoSistema(sonidos.fallaInternet, volumen);
}

function beepLanzamiento(volumen) {
    volumen = (volumen) ? volumen : 75;
    reproducirSonidoSistema(sonidos.audioEnvio, volumen);
}

function clicBoton(volumen) {
    volumen = (volumen) ? volumen : 75;
    reproducirSonidoSistema(sonidos.botonClic, volumen);
}

function sonidoIntro(volumen) {
    var x = comerGalleta('sonidointro');
    if (!x || x != 'REPRODUCIDO') {
        volumen = (volumen) ? volumen : 75;
        sonidos.audioIntro.volume = volumen / 100;
        sonidos.audioIntro.play();
        cocinarGalleta("sonidointro", "REPRODUCIDO", 1);
    }
}
