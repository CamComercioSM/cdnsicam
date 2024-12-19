
<script type="text/javascript" src="https://libs.tiendasicam32.net/plugins/sweetalert2/11.1.2/dist/sweetalert2.min.js" ></script>
<script src="https://libs.tiendasicam32.net/js/sonidos.js" async defer></script>          
<script src="https://libs.tiendasicam32.net/js/fechas.js"></script>       
<script src="https://libs.tiendasicam32.net/js/utilidades.js"></script>       
<script src="https://libs.tiendasicam32.net/js/core.js"></script>                   
<script src="https://libs.tiendasicam32.net/js/plugins.js"></script>
<script src="https://libs.tiendasicam32.net/js/scripts.js"></script>
<script type="text/javascript">
    mostrarMensajesConsola = true;
    mostrarCargando();
</script>

<script src="/plantilla/js/wow.min.js"></script> 
<script type="text/javascript">
    $(document).ready(function () {
//      cargarContenido('landingpage', 'eventos', 'eventoCODIGO={{Config.eventoCODIGO}}', function () {
            new WOW().init();
//      });
    });
</script>


{% if Config.GoogleAnalitycsTag %}
<script async src="https://www.googletagmanager.com/gtag/js?id={{Config.GoogleAnalitycsTag}}"></script>
<script type="text/javascript" >
    window.dataLayer = window.dataLayer || [];
    function gtag() {
            dataLayer.push(arguments);
    }
    gtag('js', new Date());
    gtag('config', '{{Config.GoogleAnalitycsTag}}');
</script>
{% endif %}

{% if Config.GA4Tag %}
<script async src="https://www.googletagmanager.com/gtag/js?id={{Config.GA4Tag}}"></script>
<script type="text/javascript" >
    window.dataLayer = window.dataLayer || [];
    function gtag() {
            dataLayer.push(arguments);
    }
    gtag('js', new Date());
    gtag('config', '{{Config.GA4Tag}}');
</script>
{% endif %}