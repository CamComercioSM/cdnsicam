<!-- MASC BASE  --><!doctype html><!-- comment -->
<html lang="es" data-bs-theme="auto">
    <head>
        {% include "header.metatags.html.php" %}        
        {% block opengraph %}{% endblock %}
        {% include "header.iconos.html.php" %}
        {% include "header.css.html.php" %}
        {% block css %}{% endblock %}
    </head>  
    <body  id="home" data-bs-spy="scroll" data-bs-offset="70" > 


        {% block menu %}{% endblock %}
        {% block contenido %}{% endblock %}
        {% block piecera %}{% endblock %}
        {% include "footer.js.html.php" %}
        <!--Script Personalizados-->
        {% block js %}{% endblock %}


        <script type="text/javascript">
            mostrarMensajesConsola = true;
            mostrarCargando();
        </script>

        <script src="https://libs.tiendasicam32.net/js/wowjs/1.2.2/dist/wow.min.js"></script> 
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


    </body> 
</html>