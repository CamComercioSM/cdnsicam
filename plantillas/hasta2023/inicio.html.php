{% extends "base.html.php" %}

{% block logo %}
<img src="img/logo.png" width="30" height="30" alt="">                 
Aplicación CCSM
{% endblock %}

{% block menu %}
<li class="nav-item active">
    <a class="nav-link" href="#">Inicio <span class="sr-only">(current)</span></a>
</li>
<li class="nav-item">
    <a class="nav-link" href="#">Link</a>
</li>
<li class="nav-item">
    <a class="nav-link disabled" href="#">Disabled</a>
</li>
<li class="nav-item dropdown">
    <a class="nav-link dropdown-toggle" href="http://example.com" id="dropdown01" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Dropdown</a>
    <div class="dropdown-menu" aria-labelledby="dropdown01">
        <a class="dropdown-item" href="#">Action</a>
        <a class="dropdown-item" href="#">Another action</a>
        <a class="dropdown-item" href="#">Something else here</a>
    </div>
</li>
{% endblock %}                    

{% block contenido %}

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

<div id="formulario-muestra" class="container" ></div>

<div  id="autentificacionModal"  class="modal fade " tabindex="-1" aria-labelledby="autentificacionModalLabel" aria-hidden="true" data-backdrop="static" data-keyboard="false">
    <div class="modal-dialog">
        <form id="formulario-muestra" >
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="autentificacionModalLabel">Sellado de Documentos</h5>
                </div>
                <div class="modal-body">
                    <div>
                        <div class="form-group">
                            <label for="colaboradorUSUARIO">Usuario</label>
                            <input type="text" class="form-control" name="usuario" id="colaboradorUSUARIO" value="">
                        </div>
                        <div class="form-group">
                            <label for="colaboradorPASSWORD">Contraseña</label>
                            <input type="password" class="form-control" name="password" id="colaboradorPASSWORD" value="">
                        </div>
                    </div>
                </div>
                <div class="modal-footer formulario " >
                    <button type="button" id="btnEntrar" class="btn btn-primary login w-100">Entrar</button>
                </div>
            </div>
        </form>
    </div>
</div>


{% endblock %}

{% block piecera %}}
<ul class = "list-inline">
    <li class = "list-inline-item"><a href = "https://www.ccsm.org.co">CamComercioSM</a></li>
    <li class = "list-inline-item"><a href = "#">Terminos y Condiciones</a></li>
    <li class = "list-inline-item"><a href = "https://pqrs.ccsm.org.co">Contactanos</a></li>
</ul>
{% endblock %}

{% block js%}
<script type="text/javascript">
    $(document).ready(function () {
        setTimeout(ocultarCargando, 1234);
        cargarVista("formulario-muestra", "formulario", "nuevo");
    });
</script>

<script type="text/javascript">
    $(document).ready(function () {
        setTimeout(ocultarCargando, 1234);
        $('#autentificacionModal').modal('show');
        $("#btnEntrar").click(function () {
            if ($("#colaboradorUSUARIO").val() && $("#colaboradorPASSWORD").val()) {
                ejecutarOperacionSICAM('tienda-apps/AppGestionDocumentoPDF/validarColaborador', $("#colaboradorUSUARIO").serialize() + "&" + $("#colaboradorPASSWORD").serialize(), function (respuesta) {
                    if (respuesta) {
                        avisoExito("Bienvenido " + respuesta[0]);
                        cargarVistaActual("contenido", "formulario", "nuevo");
                        
                        $('#autentificacionModal').modal('hide');
                    }
                });
            } else {
                avisoInformacion("Por favor ingrese los datos.");
            }

        });

    });

</script>
{% endblock %}