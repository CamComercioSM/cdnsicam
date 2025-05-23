<!-- BOOTSTRAP 5.3 BASE GENERICA PARA TODAS LAS APP  -->
<!doctype html>
<html lang="es">
    <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
        <!-- Browser Color - Chrome, Firefox OS, Opera -->
        <meta name="theme-color" content="#ff00ff"> 
        <!-- Browser Color - Windows Phone -->
        <meta name="msapplication-navbutton-color" content="#ff00ff"> 
        <!-- Browser Color - iOS Safari -->
        <meta name="apple-mobile-web-app-status-bar-style" content="#ff00ff">
        <!-- Primary Meta Tags -->
        <title>{% block title %}{% endblock %}{{Config.APP_TITULO}} - {{Config.APP_URL}}</title>
        <meta name="title" content="{{Config.APP_TITULO}}">
        <meta name="description" content="{{Config.APP_DESCRIPCION}}">
        <meta name="application-name" content="{{nombreAplicacion}}">
        <meta name="robots" content="index,follow"><!-- All Search Engines -->
        <meta name="googlebot" content="index,follow"><!-- Google Specific -->
        <!-- Open Graph / Facebook -->
        <meta property="og:type" content="website">
        <meta property="og:url" content="{{Config.APP_URL}}">
        <meta property="og:title" content="{{Config.APP_TITULO}}">
        <meta property="og:description" content="{{Config.APP_DESCRIPCION}}">
        <meta property="og:image" content="{{Config.APP_URL}}/favicon.png">
        <!-- Twitter -->
        <meta property="twitter:card" content="summary_large_image">
        <meta property="twitter:url" content="{{Config.APP_URL}}">
        <meta property="twitter:title" content="{{Config.APP_TITULO}}">
        <meta property="twitter:description" content="{{Config.APP_DESCRIPCION}}">
        <meta property="twitter:image" content="{{Config.APP_URL}}/favicon.png">
        <!-- Iconos -->
        <link rel="apple-touch-icon" href="https://libs.tiendasicam32.net/img/ccsm/apple-touch-icon.png">
        <link rel="apple-touch-icon" sizes="57x57" href="https://libs.tiendasicam32.net/img/ccsm/apple-icon-57x57.png">
        <link rel="apple-touch-icon" sizes="60x60" href="https://libs.tiendasicam32.net/img/ccsm/apple-icon-60x60.png">
        <link rel="apple-touch-icon" sizes="72x72" href="https://libs.tiendasicam32.net/img/ccsm/apple-icon-72x72.png">
        <link rel="apple-touch-icon" sizes="76x76" href="https://libs.tiendasicam32.net/img/ccsm/apple-icon-76x76.png">
        <link rel="apple-touch-icon" sizes="114x114" href="https://libs.tiendasicam32.net/img/ccsm/apple-icon-114x114.png">
        <link rel="apple-touch-icon" sizes="120x120" href="https://libs.tiendasicam32.net/img/ccsm/apple-icon-120x120.png">
        <link rel="apple-touch-icon" sizes="144x144" href="https://libs.tiendasicam32.net/img/ccsm/apple-icon-144x144.png">
        <link rel="apple-touch-icon" sizes="152x152" href="https://libs.tiendasicam32.net/img/ccsm/apple-icon-152x152.png">
        <link rel="apple-touch-icon" sizes="180x180" href="https://libs.tiendasicam32.net/img/ccsm/apple-icon-180x180.png">
        <link rel="icon" type="image/png" sizes="16x16" href="https://libs.tiendasicam32.net/img/ccsm/favicon-16x16.png">
        <link rel="icon" type="image/png" sizes="32x32" href="https://libs.tiendasicam32.net/img/ccsm/favicon-32x32.png">
        <link rel="icon" type="image/png" sizes="96x96" href="https://libs.tiendasicam32.net/img/ccsm/favicon-96x96.png">        
        <link rel="icon" type="image/png" sizes="192x192"  href="https://libs.tiendasicam32.net/img/ccsm/android-icon-192x192.png">
        <link rel="manifest" href="https://libs.tiendasicam32.net/img/ccsm/manifest.json">
        <meta name="msapplication-TileColor" content="#da532c">
        <meta name="msapplication-TileImage" content="https://libs.tiendasicam32.net/img/ccsm/favicon.png">
        <meta name="theme-color" content="#ffffff">
        <link rel="mask-icon" color="#5bbad5" href="https://libs.tiendasicam32.net/img/ccsm/favicon.svg" />
        <link rel="shortcut icon" type="image/x-icon" href="https://libs.tiendasicam32.net/img/ccsm/favicon.ico" />
        <link rel="icon" href="https://libs.tiendasicam32.net/img/ccsm/favicon.ico" type="image/x-icon">
        
        
        <link rel="stylesheet" href="https://libs.tiendasicam32.net/utilidades/?css" />        
        {% block css %}{% endblock %}
    </head>
    <body>
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top" aria-label="Fifth navbar example" >
            <div class="container-fluid">
                <a class="navbar-brand" href="#">{% block logo %}{% endblock %}</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsExample05" aria-controls="navbarsExample05" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarsExample05">
                        {% block menu %}{% endblock %}
                </div>
            </div>
        </nav>
        <main role="main" style="margin-top: 60px;" >{% block contenido %}{% endblock %}</main>
        <div class="b-example-divider"></div>
        <div class="">
            <footer class="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
                <div class="col-md-4 d-flex align-items-center">
                    <a href="/" class="mb-3 me-2 mb-md-0 text-muted text-decoration-none lh-1">
                        <svg class="bi" width="30" height="24"><use xlink:href="#bootstrap"/></svg>
                    </a>
                    <span class="mb-3 mb-md-0 text-muted">Cámara de Comercio de Santa Marta para el Magdalena &copy; {{ "now"|date("Y") }}</span>
                </div>
                {% block piecera %}{% endblock %}
            </footer>
        </div>
        <script src="https://code.jquery.com/jquery-3.6.4.js" integrity="sha256-a9jBBRygX1Bh5lt8GZjXDzyOB+bWve9EiO7tROUtj/E=" crossorigin="anonymous"></script>
        <script src="https://libs.tiendasicam32.net/plugins/bootstrap/5.2.3/js/bootstrap.bundle.min.js" integrity="sha384-kenU1KFdBIe4zVF0s0G1M5b4hcpxyD9F7jL+jjXkk+Q2h455rYXK/7HAuoJl+0I4" crossorigin="anonymous"></script>
        <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.6/dist/umd/popper.min.js" integrity="sha384-oBqDVmMz9ATKxIep9tiCxS/Z9fNfEXiDAYTujMAeBAsjFuCZSmKbSSUnQlmh/jp3" crossorigin="anonymous"></script>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.min.js" integrity="sha384-cuYeSxntonz0PPNlHhBs68uyIAVpIIOZZ5JqeqvYYIcEL727kskC66kF92t6Xl2V" crossorigin="anonymous"></script>
        <!--BAsicas para el estilo del sicam32-->
        <script src="https://libs.tiendasicam32.net/plugins/sweetalert2/11.1.2/dist/sweetalert2.min.js" ></script>
        <!--<script src="https://libs.tiendasicam32.net/js/wowjs/1.2.2/dist/wow.min.js"></script>-->     
        <script src="https://libs.tiendasicam32.net/js/sonidos.js"></script>                          
        <script src="https://libs.tiendasicam32.net/js/plugins.js"></script>
        <script src="https://libs.tiendasicam32.net/js/core.js"></script>
        <script src="https://libs.tiendasicam32.net/js/scripts.js"></script>
        
        <script src="https://libs.tiendasicam32.net/soporte/?Y2tKeTdFRnY3cWNpNWFrSDZIS3A3SGNmMlM3eTRkVDQwWW96QURHemZTRk1UaDRwRldNRGJwbkd0Q3NZekE1Sjo6cCtEbTNZYTl2R3JwejF6QWtMWnBCcHpVVDdabmxhdHprQ0FMcE8rZ2k0TT0="></script>
        {% block js %}{% endblock %}
        {% block login %}{% endblock %}
        {% block cargando %}{% endblock %}      
        <!--Heramientas de Google-->
        <script async src="https://www.googletagmanager.com/gtag/js?id={{Config.GoogleAnalitycsTag}}"></script>
        <script type="text/javascript" >
window.dataLayer = window.dataLayer || [];
function gtag() {
    dataLayer.push(arguments);
}
gtag('js', new Date());
gtag('config', '{{Config.GoogleAnalitycsTag}}');
        </script>        
    </body>
</html>