{% extends "base.html.php" %}

{% block title%}Estamos en mantenimiento.... {% endblock %}

{% block css %}
<link rel="stylesheet" type="text/css" href="plantilla/css/mantenimiento.css" />
{% endblock %}

{% block body %}
<div class="container-fluid">
    <div class="row">
        <div class="col-md-12">
            <div class="section clearfix separate">
                <img src="plantillas/img/logo.png" class="img-rounded" alt="Logo CCSM" width="250" height="250"/>
            </div>
            <div class="section clearfix animated fadeIn" id="countdown">
                <div class="countdown_group">
                    <span class="countdown_value">{dnn}</span> 
                    <span class="countdown_help">Dias</span>
                </div>
                <div class="countdown_group">
                    <span class="countdown_value">{hnn}</span> 
                    <span class="countdown_help">Horas</span>
                </div> 
                <div class="countdown_group">
                    <span class="countdown_value">{mnn}</span> 
                    <span class="countdown_help">Minutos</span> 
                </div>
                <div class="countdown_group">
                    <span class="countdown_value">{snn}</span> 
                    <span class="countdown_help">Segundos</span>
                </div>
            </div>
            <div class="section clearfix animated fadeIn" id="contact">
                <h3>En este momento nos encontramos en mantenimiento <br> Gracias por su comprension.</h3>
                <a href="#"><i class="fa fa-envelope-o"></i> soporte.tics@ccsm.org.co</a>
                <a href="#"><i class="fa fa-phone"></i>(+57) 420 99 09 ext 2602</a>
            </div>
            <div class="section clearfix">
                <a href="#" class="btn btn-transparent btn-facebook"><i class="fa fa-facebook fa-fw"></i></a>
                <a href="#" class="btn btn-transparent btn-twitter"><i class="fa fa-twitter fa-fw"></i></a>
                <a href="#" class="btn btn-transparent btn-instagram"><i class="fa fa-instagram fa-fw"></i></a>
            </div>
        </div>
    </div>
</div>
{% endblock %}


{% block js%}
<script src="plantillas/default/js/jquery.plugin.js"></script>
<script src="plantillas/default/js/jquery.countdown.min.js"></script>
<script src="plantillas/default/js/mantenimiento.js"></script>
<script type="text/javascript">
$(window).load(function() {
    desactivarLoader();
});
</script>
{% endblock %}