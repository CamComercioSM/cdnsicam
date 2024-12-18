<!-- EVENTOS BASE  --><!doctype html><!-- comment -->
<html lang="es" data-bs-theme="auto">
    <head>
        {% include "header.metatags.html.php" %}        
        {% block opengraph %}{% endblock %}
        {% include "header.iconos.html.php" %}
        {% include "header.css.html.php" %}
        {% block css %}{% endblock %}
        <script src="https://code.jquery.com/jquery-3.7.0.min.js" integrity="sha256-2Pmvv0kuTBOenSvLm6bvfBSSHrUJ+3A7x6P5Ebd07/g=" crossorigin="anonymous"></script>
<script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.7/dist/umd/popper.min.js" integrity="sha384-zYPOMqeu1DAVkHiLqWBUTcbYfZ8osu1Nd6Z89ify25QV9guujx43ITvfi12/QExE" crossorigin="anonymous"></script>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/js/bootstrap.min.js" integrity="sha384-Y4oOpwW3duJdCWv5ly8SCFYWqFDsfob/3GkgExXKV4idmbt98QcxXYs9UoXAB7BZ" crossorigin="anonymous"></script>        

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