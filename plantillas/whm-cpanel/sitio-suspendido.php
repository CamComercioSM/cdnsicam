<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <title>Cuenta Suspendida - NOMBRE DE LA CUENTA</title>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" />
    <link rel="stylesheet" href="https://cdnsicam.net/plantillas/whm-cpanel/css/base.css" />
    <link rel="stylesheet" href="https://cdnsicam.net/plantillas/whm-cpanel/css/particulas.css" />
    <script src="https://cdnsicam.net/plantillas/whm-cpanel/js/base.js"></script>
    <script src="https://cdnsicam.net/plantillas/whm-cpanel/js/fondo-particulas.js"></script>
</head>
<body class="background-animation">
    <div class="content">
        <div class="card">
            <img src="https://cdnsicam.net/img/ccsm/Logo-horizontal-letra-blanca-420.png" alt="NOMBRE DE LA CUENTA - Cámara de Comercio de Santa Marta">
            <h1>Sitio Temporalmente <strong>FUERA DE SERVICIO</strong></h1>
            <p>Estamos trabajando para mejorar tu experiencia. Por favor, vuelve más tarde.</p>
            <p id="status-msg" style="color: #aaa; font-size: 14px;">Verificando disponibilidad...</p>
            <p>Esto puede deberse a:</p>
            <ul style="text-align: left; margin: 20px auto; max-width: 400px; color: #ccc;">
                <li>Mantenimiento del sistema.</li>
            </ul>
            <p>Si eres el encargado del sitio, por favor comunícate con soporte:</p>
            <p><a href="https://centrotics.ccsm.org.co" target="_blank">centrotics.ccsm.org.co</a></p>
            <p class="small-text">Este es un sitio gestionado por la <a href="https://www.ccsm.org.co" target="_blank">Cámara de Comercio de Santa Marta para el Magdalena</a>.</p>
        </div>
    </div>

    <script type="text/javascript">
        var url_cuenta = "RUTA_WEN_DE_LA_CUENTA"; // Reemplazar con la URL de la cuenta
        var tiempo_verificacion_sitio = 30; //segundos
        var tiempo_recarga_disponible = 5; //segundos

        setInterval(checkWebsiteStatus, tiempo_verificacion_sitio * 1000);
    </script>

</body>
</html>