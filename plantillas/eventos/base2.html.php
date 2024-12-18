<!-- EVENTOS BASE2  --><!doctype html><!-- comment -->
<html lang="es" data-bs-theme="auto">
    <head>
        {% include "header.metatags.html.php" %}        
        {% block opengraph %}{% endblock %}
        {% include "header.iconos.html.php" %}
        {% include "header.css.html.php" %}
        {% block css %}{% endblock %}
        <!-- ... -->
        <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>

        <link href="https://unpkg.com/survey-jquery/defaultV2.min.css" type="text/css" rel="stylesheet">
        <script type="text/javascript" src="https://unpkg.com/survey-jquery/survey.jquery.min.js"></script>
        <!-- ... -->


        <script type="text/javascript" src="https://libs.tiendasicam32.net/soporte/?empyY1Q5QU9ZMWtQVkl6RXZHYUhqV0k4WWM1K1hKRTZPK0p5ZTBIcFluSjZrbU5ZclZsYlorKzczT3g5K1hzbzo6YldVV1VIT2tQRS9vUDA3WVB2WlVFRC9reHFuaUMrcnR1am1tWW1CUU9zcm4xRlJDR21sclc0bVkrMDVKWkwwdw==&whatsapp=NO&pqrs=NO" defer=""></script>
    </head>  
    <body  id="home" data-bs-spy="scroll" data-bs-offset="70" > 
        {% block menu %}{% endblock %}
        {% block contenido %}{% endblock %}
        {% block piecera %}{% endblock %}
        {% include "footer.js.html.php" %}
        <!--Script Personalizados-->
        {% block js %}{% endblock %}
        <div style="height: 40px!important;"></div>
    </body> 
</html>