function cargarDependenciasJS(url) {
    var script = document.createElement("script");
    script.src = url;
    script.defer = true;
    document.head.appendChild(script);
}
cargarDependenciasJS('https://libs.tiendasicam32.net/plugins/sweetalert2/11.1.2/dist/sweetalert2.min.js');
cargarDependenciasJS('https://libs.tiendasicam32.net/js/core.js');
cargarDependenciasJS('https://libs.tiendasicam32.net/js/plugins.js');
cargarDependenciasJS('https://libs.tiendasicam32.net/js/scripts.js');