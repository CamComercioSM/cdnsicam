<!--BASE GENERICA PARA TODAS LAS APP-->
<!doctype html>
<html lang="es">
    <head>
        <meta charset="utf-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1"/>
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
        <link rel="stylesheet" href="https://libs.tiendasicam32.net/plugins/jquery/3.6.0//jquery-ui.min.css"/>        
        <!--        <link rel="stylesheet" href="https://libs.tiendasicam32.net/plugins/bootstrap/5.2.2/css/bootstrap.min.css"/>-->
        <!--<link rel="stylesheet" href="https://libs.tiendasicam32.net/plugins/bootstrap/5.2.2/css/bootstrap-theme2.min.css"/>-->  
        <link href="https://libs.tiendasicam32.net/plugins/bootstrap/5.2.3/css/bootstrap.css" rel="stylesheet" >
        <!--<link rel="stylesheet" href="https://libs.tiendasicam32.net/fonts/bootstrap-icons/1.9.1/bootstrap-icons.css">-->
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.5/font/bootstrap-icons.css">
        <link rel="stylesheet" href="https://libs.tiendasicam32.net/plugins/font-awesome/5.15.4/css/all.css"/>
        <link rel="stylesheet" href="https://libs.tiendasicam32.net/css/animate/4.1.1/animate.min.css"/>
        <link rel="stylesheet" href="https://libs.tiendasicam32.net/plugins/sweetalert2/11.1.2/dist/sweetalert2.min.css"/>
        <link rel="stylesheet" href="https://libs.tiendasicam32.net/css/magic/1.4.6/dist/magic.min.css"/>        
        <link rel="stylesheet" href="https://libs.tiendasicam32.net/fonts/fuente-ccsm.css"/>
        <link rel="stylesheet" href="https://libs.tiendasicam32.net/css/main.css"  media="screen" />
        <link rel="stylesheet" href="https://libs.tiendasicam32.net/css/print.css"  media="print" />

        <link rel="stylesheet" href="{{Config.BASE_PANTILLA_URL}}css/tema.css"  media="screen" />
        <link rel="stylesheet" href="{{Config.BASE_PANTILLA_URL}}css/main.css"  media="print" />
        <link rel="stylesheet" href="{{Config.BASE_PANTILLA_URL}}css/print.css"  media="print" />

        <!--//Librerias JS enlinea-->        
        <script src="https://libs.tiendasicam32.net/plugins/jquery/3.6.0/jquery-3.6.0.min.js"></script>        
        <script src="https://libs.tiendasicam32.net/plugins/jquery/3.6.0//jquery-ui.min.js"></script>
        <script src="https://libs.tiendasicam32.net/js/popper/2.10.2/dist/umd/popper.min.js"></script> 
        <!--<script src="https://libs.tiendasicam32.net/plugins/bootstrap/5.1.3/js/bootstrap.min.js" ></script>-->        
        <script src="https://libs.tiendasicam32.net/plugins/bootstrap/5.2.3/js/bootstrap.bundle.min.js" integrity="sha384-kenU1KFdBIe4zVF0s0G1M5b4hcpxyD9F7jL+jjXkk+Q2h455rYXK/7HAuoJl+0I4" crossorigin="anonymous"></script>
        <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.6/dist/umd/popper.min.js" integrity="sha384-oBqDVmMz9ATKxIep9tiCxS/Z9fNfEXiDAYTujMAeBAsjFuCZSmKbSSUnQlmh/jp3" crossorigin="anonymous"></script>
        <script src="https://libs.tiendasicam32.net/plugins/bootstrap/5.2.3/js/bootstrap.min.js" integrity="sha384-cuYeSxntonz0PPNlHhBs68uyIAVpIIOZZ5JqeqvYYIcEL727kskC66kF92t6Xl2V" crossorigin="anonymous"></script>        
        <script src="https://libs.tiendasicam32.net/plugins/sweetalert2/11.1.2/dist/sweetalert2.min.js" ></script>
        <script src="https://libs.tiendasicam32.net/js/wowjs/1.2.2/dist/wow.min.js"></script>        
        <script src="https://libs.tiendasicam32.net/plugins/datatables/1.13.4/jquery.dataTables.min.js" ></script> 
        {% block css %}{% endblock %}
        {% block head %}{% endblock %}

    </head>
    <body  class="bg-light" >
        
        <nav class="navbar navbar-expand-lg bg-light">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Navbar</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavDropdown">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Features</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Pricing</a>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown link
          </a>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#">Action</a></li>
            <li><a class="dropdown-item" href="#">Another action</a></li>
            <li><a class="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</nav>
        

        <main role="main" >
            <div id="formulario" class="container wow slideInLeft" data-wow-duration="2s" data-wow-delay="1s" >
                {% block contenido %}{% endblock %}
            </div>
        </main>
        <!--Piecera-->
        <footer class="text-muted text-center text-small footer ">
            {% block piecera %}
            <ul class = "list-inline">
                <li class = "list-inline-item"><a href = "https://www.ccsm.org.co">CamComercioSM</a></li>
                <li class = "list-inline-item"><a href = "#">Terminos y Condiciones</a></li>
                <li class = "list-inline-item"><a href = "https://pqrs.ccsm.org.co">Contactanos</a></li>
            </ul>
            {% endblock %}
            <small class="mb-1">Cámara de Comercio de Santa Marta para el Magdalena &copy; {{ "now"|date("Y")}} - {% if Usuario %}<a class="nav-link" href="javascript:cerrarSesionColaborador();">Cerrar Sesión [{{Usuario.usuarioNOMBRE}}]</a>{% endif %}</small>
        </footer>   
        {% block login %}{% endblock %}   
        {% block cargando %}
        <!--Cargando-->
        <div class = "loader no-print" style = "position: fixed; top: 0; left: 0; width: 100%; height: 100%; z-index: 99999; background-color: rgba(0,0,0,0.7);" >
            <table align = "center" style = "width: 100%; height: 100%;">
                <td align = "center" valign = "middle" class = "animated infinite flash pulse" >
                    <img src = "https://si.sicam32.net/plantillas/default/images/Logo-Blanco.png" alt = "" style = "max-width: 210px;"/>
                </td>
            </table>
        </div>     
        {% endblock %}      

        <script src="https://libs.tiendasicam32.net/js/sonidos.js"></script>                          
        <script src="https://libs.tiendasicam32.net/js/plugins.js"></script>
        <script src="https://libs.tiendasicam32.net/js/core.js"></script>
        <script src="https://libs.tiendasicam32.net/js/scripts.js"></script>

        {% block js%}{% endblock %}
        <script type="text/javascript" >
        </script>
        <script type="text/javascript">
        </script>
        <script type="text/javascript">
            $(document).ready(function () {
                setTimeout(ocultarCargando, 1234);
            });
        </script>
        <script type="text/javascript">
            new WOW().init();
        </script>

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
        <script data-ad-client="ca-pub-5163385221124664" async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
        <!--//Solo Soporte-->        
        <!--<script Access-Control-Allow-Origin="tiendasicam32.net" src="https://libs.tiendasicam32.net/soporte/?bnlwSXpwZm5KM3V5MXR6NGlkb1FOMkZxZndVLy94YjhleVBJRDRaV3lFMD06OjJ1ZTRQS1VnR1NyQXRVazZGV3ZpRjRJQk1KTHNDT1EwL1J1cnh3VDZHSG89"></script>-->
    </body>
</html>
