<?php
$correoAdmin = isset($_GET['admin']) ? $_GET['admin'] : '';
$dominio = '';
if (filter_var($correoAdmin, FILTER_VALIDATE_EMAIL)) {
    $dominio = explode('@', $correoAdmin)[1];
}
?>
<!DOCTYPE html>
<html lang="es">

<head>
    <meta charset="UTF-8">
    <title>Cuenta Suspendida - <?= htmlspecialchars($correoAdmin) ?></title>
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no">
    <meta name="theme-color" content="#b00020">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" />
    <link rel="stylesheet" href="https://cdnsicam.net/plantillas/whm-cpanel/css/base.css" />
    <link rel="stylesheet" href="https://cdnsicam.net/plantillas/whm-cpanel/css/particulas.css" />
    <script src="https://cdnsicam.net/plantillas/whm-cpanel/js/base.js"></script>
    <script src="https://cdnsicam.net/plantillas/whm-cpanel/js/particulas.js"></script>
    <style>
        .card,
        .card-maintenance {
            width: 100%;
            max-width: 500px;
            margin: 0 auto;
            padding: 20px;
        }

        .card img {
            max-width: 100%;
            height: auto;
        }

        @media screen and (max-width: 600px) {
            .card h1 {
                font-size: 1.8rem;
            }

            .card p {
                font-size: 0.95rem;
            }

            .card ul {
                font-size: 0.9rem;
                padding-left: 20px;
            }
        }
    </style>
</head>

<body class="background-animation">
    <div class="content">
        <div class="card">
            <img src="https://cdnsicam.net/img/ccsm/Logo-horizontal-letra-blanca-420.png" alt="[% data.domain FILTER html %] - Cámara de Comercio de Santa Marta">
            <h1>Sitio Temporalmente <strong>FUERA DE SERVICIO</strong></h1>
            <p>Estamos trabajando para mejorar tu experiencia. Por favor, vuelve más tarde.</p>
            <div id="status-msg" style="color: #aaa; font-size: 14px;">Verificando disponibilidad...</div>

            <p>Esto puede deberse a:</p>
            <ul style="text-align: left; margin: 20px auto; max-width: 400px; color: #ccc;">
                <li>Mantenimiento del sistema.</li>
                <li>Suspensión temporal por el proveedor.</li>
            </ul>

            <hr style="border-color: #555;">

            <p><strong>Detalles de la cuenta:</strong></p>
            <ul style="text-align: left; color: #ccc; font-size: 0.95rem;">
                <li><strong>Dominio:</strong> <?= htmlspecialchars($dominio) ?: 'Desconocido' ?></li>
                <li><strong>Correo registrado:</strong> <a href="mailto:<?= htmlspecialchars($correoAdmin) ?>"><?= htmlspecialchars($correoAdmin) ?></a></li>

            </ul>

            <p>Para asistencia, por favor visita:</p>
            <p><a href="https://centrotics.ccsm.org.co" target="_blank">centrotics.ccsm.org.co</a></p>
            <div><strong>IP visitante:</strong> <span id="ip-visitante">Detectando...</span></div>

            <p class="small-text">Sitio administrado por la <a href="https://www.ccsm.org.co" target="_blank">Cámara de Comercio de Santa Marta para el Magdalena</a>.</p>
            <div class="copyright">Copyright © [% data.currentyear %]</div>
        </div>
    </div>

    <script type="text/javascript">
        const emailWHM = "<?= htmlspecialchars($correoAdmin) ?>";

        function obtenerDominioDesdeCorreo(correo) {
            const match = correo.match(/@([\w.-]+)/);
            return match ? match[1] : null;
        }

        const dominio = "<?= $dominio ?>";
        const url_cuenta = "https://" + dominio;
        const tiempo_verificacion_sitio = 7;
        const tiempo_recarga_disponible = 5;

        document.addEventListener('DOMContentLoaded', function() {
            // Obtener IP del visitante
            fetch('https://api.ipify.org?format=json')
                .then(res => res.json())
                .then(data => {
                    const spanIP = document.getElementById("ip-visitante");
                    if (spanIP) spanIP.textContent = data.ip;
                })
                .catch(() => {
                    const spanIP = document.getElementById("ip-visitante");
                    if (spanIP) spanIP.textContent = "No disponible";
                });
        });

        function verficarEstado() {
            checkWebsiteStatus(dominio, tiempo_recarga_disponible);
        }

        setInterval(verficarEstado, tiempo_verificacion_sitio * 1000);
    </script>
</body>

</html>