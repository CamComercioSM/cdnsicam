<!-- AUSENTISMOS BASE  --><!doctype html><!-- comment -->
<html lang="es" data-bs-theme="auto">
    <head>
        <base href="{{Config.APP_URL}}" />
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">  
        <title>{{Config.APP_TITULO}}</title>
        <link href="https://fonts.googleapis.com/css?family=Karla:400,700&display=swap" rel="stylesheet">
        <link rel="stylesheet" href="https://cdn.materialdesignicons.com/4.8.95/css/materialdesignicons.min.css">
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css">
        <link rel="stylesheet" href="plantilla/css/bd-wizard.css">
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css">
        <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/jquery-datetimepicker/2.3.7/jquery.datetimepicker.min.css"/>
        <link rel="stylesheet" href="plantilla/css/sweetalert2.css">
        {% block css %}{% endblock %}
    </head>  
    <body> 
        {% block contenido %}{% endblock %}
        <script src="https://code.jquery.com/jquery-3.4.1.min.js"></script>
        <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js"></script>
        <script src="plantilla/js/bootstrap.min.js"></script>
        <script src="plantilla/js/jquery.steps.min.js"></script>
        <script src="https://libs.tiendasicam32.net/plugins/sweetalert2/11.1.2/dist/sweetalert2.min.js" ></script>     
        <script src="https://libs.tiendasicam32.net/js/core.js"></script>
        <script src="https://libs.tiendasicam32.net/js/scripts.js"></script>   
<!--        <script src="https://libs.tiendasicam32.net/js/sonidos.js"></script>          
        <script src="https://libs.tiendasicam32.net/js/fechas.js"></script>       
        <script src="https://libs.tiendasicam32.net/js/utilidades.js"></script>  
        <script src="https://libs.tiendasicam32.net/js/plugins.js"></script>
        <script src="https://libs.tiendasicam32.net/js/funciones.js"></script>-->
        <script src="plantilla/js/bd-wizard.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery-datetimepicker/2.5.20/jquery.datetimepicker.full.min.js" integrity="sha512-AIOTidJAcHBH2G/oZv9viEGXRqDNmfdPVPYOYKGy3fti0xIplnlgMHUGfuNRzC6FkzIo0iIxgFnr9RikFxK+sw==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
        <script src="plantilla/js/main.js"></script>
        <!--Script Personalizados-->
        {% block js %}{% endblock %}
    </body> 
</html>