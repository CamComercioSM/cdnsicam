
{% extends "base.html.php" %}
{% block head %}
<script src="https://clientes.sicam32.net/javascript/?dS9VMVRVOURDTnhOaWhwL0FEQXE3QjA3czdBSnZFaEtoU3gvclkxb0ZDeEhsY2FpN1htUDE0N3BWdU04U3ozMDo6NndhOVdTbDZ0bVRDOWdncDF2TmJOZElMalA4WXR3UHVZbHAvZm1FM3JCQT0=" ></script>
{% endblock %}
{% block logo %}
<img src="img/logo.png" width="30" height="30" alt="">                 
{{Config.APP_TITULO}}
{% endblock %}
{% block menu %}
<li class="nav-item active">
    <a class="nav-link" href="#">Inicio <span class="sr-only">(current)</span></a>
</li>
<!--<li class="nav-item">
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
</li>-->
{% endblock %}                    
{% block contenido %}
<div class="jumbotron wow slideInLeft" data-wow-duration="2s" data-wow-delay="1s" style="padding-bottom: 10px;margin-bottom:10px;">
    <div class="container" id="Titulo">
        <h2 class="text-center">Seguimiento a la ejecución del contrato!</h2>
        <p>Suscrito el contrato o el acta de inicio respectivo, el supervisor comenzará su gestión de seguimiento de lo establecido en el objeto contractual, en las obligaciones de las partes y, en general, sobre lo dispuesto en el contrato para la correcta ejecución en la prestación del servicio o adquisición del bien por parte del contratista.</p>        
    </div>
</div> 
<div id="dashboard" class="container-fluid "  ></div>
<div id="formularios" class="container-fluid formularios"></div>
<!--MOVER ESTE MODAL A UNA CLASE DE SEGURIDAD-->
<!--<div  id="autentificacionModal"  class="modal fade " tabindex="-1" aria-labelledby="autentificacionModalLabel" aria-hidden="true" data-backdrop="static" data-keyboard="false">
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
</div>-->
{% endblock %}
{% block piecera %}
<ul class = "list-inline">
    <li class = "list-inline-item"><a href = "https://www.ccsm.org.co">CamComercioSM</a></li>
    <li class = "list-inline-item"><a href = "#">Terminos y Condiciones</a></li>
    <li class = "list-inline-item"><a href = "https://pqrs.ccsm.org.co">Contactanos</a></li>
</ul>
{% endblock %}
{% block css%}
<link rel="stylesheet" type="text/css" href="https://libs.tiendasicam32.net/plugins/datatables/1.12.1/jquery.dataTables.min.css"/>
<link rel="stylesheet" type="text/css" href="https://libs.tiendasicam32.net/plugins/datatables/1.12.1/datatables.min.css"/>
<link href="https://libs.tiendasicam32.net/plugins/bootstrap-fileinput/5.5.0/css/fileinput.min.css" media="all" rel="stylesheet" type="text/css" />

<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.4.0/css/font-awesome.min.css">
<link href="https://libs.tiendasicam32.net/plugins/line-control/1.1.0/editor.css" media="all" rel="stylesheet" type="text/css" />
<link href="https://libs.tiendasicam32.net/plugins/signature-pad/2.5.2/assets/jquery.signaturepad.css" media="all" rel="stylesheet" type="text/css" />

<!--//Locales-->
<link rel="stylesheet" href="css/main.css"  media="screen" >
<link rel="stylesheet" href="css/print.css"  media="print" >
<link rel="stylesheet" href="plantilla/css/estilos.css"   >
{% endblock %}
{% block js%} 
<script type="text/javascript" src="https://libs.tiendasicam32.net/plugins/datatables/1.12.1/datatables.min.js"></script>
<script src="https://libs.tiendasicam32.net/plugins/bootstrap-fileinput/5.5.0/js/plugins/buffer.min.js" type="text/javascript"></script>
<script src="https://libs.tiendasicam32.net/plugins/bootstrap-fileinput/5.5.0/js/plugins/filetype.min.js" type="text/javascript"></script>
<script src="https://libs.tiendasicam32.net/plugins/bootstrap-fileinput/5.5.0/js/plugins/piexif.min.js" type="text/javascript"></script>
<script src="https://libs.tiendasicam32.net/plugins/bootstrap-fileinput/5.5.0/js/plugins/sortable.min.js" type="text/javascript"></script>
<script src="https://libs.tiendasicam32.net/plugins/bootstrap/5.1.3/js/bootstrap.bundle.min.js" crossorigin="anonymous"></script>
<script src="https://libs.tiendasicam32.net/plugins/bootstrap-fileinput/5.5.0/js/fileinput.min.js"></script>
<script src="https://libs.tiendasicam32.net/plugins/bootstrap-fileinput/5.5.0/js/locales/LANG.js"></script> 

<script src="https://libs.tiendasicam32.net/plugins/line-control/1.1.0/editor.js"></script>
<script src="https://libs.tiendasicam32.net/plugins/signature-pad/2.5.2/jquery.signaturepad.js"></script>
<script src="https://libs.tiendasicam32.net/plugins/signature-pad/2.5.2/assets/json2.min.js"></script>

<!--//Locales-->
<script src="js/plugins.js"></script>
<script src="js/main.js"></script> 
<script type="text/javascript">
$(document).ready(function () {
    cargarListadoContratosEnEjecucion();
    //cargarModal('seguridad', 'login');
//       
//
//        setTimeout(ocultarCargando, 1234);
//        $('#autentificacionModal').modal('show');
//        $("#btnEntrar").click(function () {
//            if ($("#colaboradorUSUARIO").val() && $("#colaboradorPASSWORD").val()) {
//                ejecutarOperacionSICAM('tienda-apps/AppGestionDocumentoPDF/validarColaborador', $("#colaboradorUSUARIO").serialize() + "&" + $("#colaboradorPASSWORD").serialize(), function (respuesta) {
//                    if (respuesta) {
//                        avisoExito("Bienvenido " + respuesta[0]);
//                        cargarVistaActual("contenido", "formulario", "nuevo");
//
//                        $('#autentificacionModal').modal('hide');
//                    }
//                });
//            } else {
//                avisoInformacion("Por favor ingrese los datos.");
//            }
//
//        });
    setTimeout(ocultarCargando, 1234);
});

function cargarListadoContratosEnEjecucion() {
    cargarVista("dashboard", "mostrarTabla", "contratos");
}
</script>
{% endblock %}