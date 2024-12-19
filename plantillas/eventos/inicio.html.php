{% extends "base.html.php" %}

{% block menu %}
<nav class="navbar navbar-expand-md navbar-dark bg-dark fixed-top" aria-label="Fifth navbar example" >
    <div class="container-fluid">
        <a class="navbar-brand" href="#!">
            <img src="https://img.tiendasicam32.net/ccsm/logo.png" width="30" height="30" alt=""> Eventos y Capacitaciónes
        </a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsExample05" aria-controls="navbarsExample05" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarsExample05">
        </div>
    </div>
</nav>
{% endblock %}                    

{% block contenido %}
<main role="main" style="margin-top: 60px;" >espacio del contenido</main>
{% endblock %}

{% block piecera %}
<footer class="footer mt-auto py-3 bg-body-tertiary">
    <ul class="nav justify-content-center border-bottom pb-3 mb-3">
        <li class="nav-item"><a href="https://www.ccsm.org.co" class="nav-link px-2 text-body-secondary">CamComercioSM</a></li>
        <li class="nav-item"><a href="#" class="nav-link px-2 text-body-secondary">Terminos y Condiciones</a></li>
<!--        <li class="nav-item"><a href="#" class="nav-link px-2 text-body-secondary">Pricing</a></li>
        <li class="nav-item"><a href="#" class="nav-link px-2 text-body-secondary">FAQs</a></li>-->
        <li class="nav-item"><a href="https://pqrs.ccsm.org.co" class="nav-link px-2 text-body-secondary">Contactanos</a></li>
    </ul>
    <p class="text-center text-body-secondary">© 2023 Cámara de Comercio de Santa Marta para el Magdalena</p>
</footer>
{% endblock %}

{% block js%}
<script type="text/javascript">
    $(document).ready(function () {
    });
</script>
{% endblock %}