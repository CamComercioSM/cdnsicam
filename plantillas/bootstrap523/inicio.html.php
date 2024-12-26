{% extends "base.html.php" %}

{% block css %}
<style type="text/css" >
    @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300&display=swap');
    *{
        font-family: 'Roboto', sans-serif;
    }
</style>
<link rel="stylesheet" href="https://libs.tiendasicam32.net/plugins/datatables/1.13.4/jquery.dataTables.min.css"/>
<link rel="stylesheet" href="https://libs.tiendasicam32.net/plugins/bootstrap/5.3/carousel.css"/>
{% endblock %}
{% block logo %}
<img src="https://libs.tiendasicam32.net/img/ccsm/logo.png" width="30" height="30" alt="" class="logo">
Plantilla BASE
{% endblock %}

{% block menu %}
<ul class="navbar-nav me-auto mb-2 mb-lg-0">
    <li class="nav-item">
        <a class="nav-link active" aria-current="page" href="#">Inicio</a>
    </li>
    <li class="nav-item">
        <a class="nav-link" href="#">Link</a>
    </li>
    <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown
        </a>
        <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#">Action</a></li>
            <li><a class="dropdown-item" href="#">Another action</a></li>
            <li><hr class="dropdown-divider"></li>
            <li><a class="dropdown-item" href="#">Something else here</a></li>
        </ul>
    </li>
    <li class="nav-item">
        <a class="nav-link disabled">Disabled</a>
    </li>
    {% if Usuario %}
    <li><a class="nav-link" href="javascript:cerrarSesionColaborador();" >Cerrar Sesión [{{Usuario.personaRAZONSOCIAL}}]</a></li>
    {% endif %}
</ul>
<form class="d-flex" role="search">
    <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
    <button class="btn btn-outline-success" type="submit">Search</button>
</form>
{% endblock %}      

{% block contenido %}
<div class="divider"></div>

<div class="col-lg-6 col-xxl-4 my-5 mx-auto">
    <div class="d-grid gap-2">
        <button class="btn btn-outline-secondary" type="button" onclick="datosSesionColaborador();">Secondary action</button>
        <button class="btn btn-primary" type="button" onclick="cargarFormularioAplicacion();" >Primary action</button>
    </div>
</div>

<div id="divDatosUsuario"></div>

<div class="divider"></div>

<div class="text-center  wow slideInLeft" data-wow-duration="2s" data-wow-delay="1s">

    <div id="carouselExampleCaptions"  class="carousel slide carousel-fade">
        <div class="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div class="carousel-inner">
            <div class="carousel-item active">
                <img  src="data:image/gif;base64,R0lGODlhAQABAIAAAHd3dwAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==" class="d-block w-100" alt="...">
                <div class="carousel-caption d-none d-md-block">
                    <h5>First slide label</h5>
                    <p>Some representative placeholder content for the first slide.</p>
                </div>
            </div>
            <div class="carousel-item">
                <img  src="data:image/gif;base64,R0lGODlhAQABAIAAAHd3dwAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==" class="d-block w-100" alt="...">
                <div class="carousel-caption d-none d-md-block">
                    <h5>Second slide label</h5>
                    <p>Some representative placeholder content for the second slide.</p>
                </div>
            </div>
            <div class="carousel-item">
                <img  src="data:image/gif;base64,R0lGODlhAQABAIAAAHd3dwAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==" class="d-block w-100" alt="...">
                <div class="carousel-caption d-none d-md-block">
                    <h5>Third slide label</h5>
                    <p>Some representative placeholder content for the third slide.</p>
                </div>
            </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
        </button>
    </div>

</div>

<div class="text-center  wow slideInLeft" data-wow-duration="2s" data-wow-delay="1s">
    <h2 class="text-center text-uppercase "> <strong>Bienvenidos</strong></h2>
    <hr>
    <div>
        <table id="myTable" class="display">
            <thead>
                <tr>
                    <th>Column 1</th>
                    <th>Column 2</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Row 1 Data 1</td>
                    <td>Row 1 Data 2</td>
                </tr>
                <tr>
                    <td>Row 2 Data 1</td>
                    <td>Row 2 Data 2</td>
                </tr>
            </tbody>
        </table>
    </div>
</div>

<div class="jumbotron wow slideInLeft" data-wow-duration="2s" data-wow-delay="1s">
    <div class="container">
        <h1 class="display-3">Hello, world!</h1>
        <p>This is a template for a simple marketing or informational website. It includes a large callout called a jumbotron and three supporting pieces of content. Use it as a starting point to create something more unique.</p>
        <p><a class="btn btn-primary btn-lg" href="#" role="button">Learn more &raquo;</a></p>
    </div>
</div>

<div class="text-center">
    <div class="cover-container d-flex h-100 p-3 mx-auto flex-column wow slideInLeft" data-wow-duration="2s" data-wow-delay="2s">
        <header class="masthead mb-auto">
            <div class="inner">
                <h3 class="masthead-brand">Cover</h3>
                <nav class="nav nav-masthead justify-content-center">
                    <a class="nav-link active" href="#">Home</a>
                    <a class="nav-link" href="#">Features</a>
                    <a class="nav-link" href="#">Contact</a>
                </nav>
            </div>
        </header>
        <main role="main" class="inner cover">
            <h1 class="cover-heading">Cover your page.</h1>
            <p class="lead">Cover is a one-page template for building simple and beautiful home pages. Download, edit the text, and add your own fullscreen background photo to make it your own.</p>
            <p class="lead">
                <a href="#" class="btn btn-lg btn-secondary">Learn more</a>
            </p>
        </main>
        <footer class="mastfoot mt-auto">
            <div class="inner">
                <p>Cover template for <a href="https://getbootstrap.com/">Bootstrap</a>, by <a href="https://twitter.com/mdo">@mdo</a>.</p>
            </div>
        </footer>
    </div>
</div>
{% endblock %}

{% block piecera %}
<ul class = "list-inline">
    <li class = "list-inline-item"><a href = "https://www.ccsm.org.co">CamComercioSM</a></li>
    <li class = "list-inline-item"><a href = "#">Terminos y Condiciones</a></li>
    <li class = "list-inline-item"><a href = "https://pqrs.ccsm.org.co">Contactanos</a></li>
</ul>
{% endblock %}

{% block cargando %}
<!--Cargando-->
<!--<div class = "loader no-print" style = "position: fixed; top: 0; left: 0; width: 100%; height: 100%; z-index: 99999; background-color: rgba(0,0,0,0.7);" >
    <table align = "center" style = "width: 100%; height: 100%;">
        <td align = "center" valign = "middle" class = "animated infinite flash pulse" >
            <img src = "https://si.sicam32.net/plantillas/default/images/Logo-Blanco.png" alt = "" style = "max-width: 210px;"/>
        </td>
    </table>
</div>     -->
{% endblock %}

{% block js %}
<!--//Acceso a las Librerias del SICAM-->
<!--<script Access-Control-Allow-Origin="tiendasicam32.net" src="https://clientes.sicam32.net/javascript/?bnlwSXpwZm5KM3V5MXR6NGlkb1FOMkZxZndVLy94YjhleVBJRDRaV3lFMD06OjJ1ZTRQS1VnR1NyQXRVazZGV3ZpRjRJQk1KTHNDT1EwL1J1cnh3VDZHSG89&modo=PRUEBAS"></script>-->
<!--<script src="https://libs.tiendasicam32.net/js/plugins.js"></script>
<script src="https://libs.tiendasicam32.net/js/main.js"></script>-->
<script type="text/javascript">
          $(document).ready(function () {
              $('#myTable').DataTable();
          });
</script>
<script type="text/javascript">
    $(document).ready(function () {
    });
</script>
{% endblock %}

{% block login %}
{% if Config.LoginColaboradores %}
{% if Usuario %}
<a class="nav-link" href="javascript:cerrarSesionColaborador();" >Cerrar Sesión [{{Usuario.personaRAZONSOCIAL}}]</a>
{% else %}
{% include 'login.html.php' %} 
{% endif %}
{% endif %}
{% endblock %} 