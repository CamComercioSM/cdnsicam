<?php
// --- INPUTS --- //
$tipo = $_GET['tipo'] ?? 'default';
$dominio = strtolower(trim($_GET['domain'] ?? ''));
$dominio_base = preg_replace('/^www\./', '', $dominio); // Quita 'www.'

// --- CONFIGURACIÓN POR TIPO DE PLANTILLA (GENÉRICO) --- //
$plantillas = [
    'mantenimiento' => [
        'titulo' => 'Estamos en mantenimiento',
        'mensaje' => 'El sitio se encuentra temporalmente fuera de servicio por tareas de mantenimiento.',
        'imagen' => 'img/mantenimiento.png',
        'http_code' => 503,
        'retry_after' => 3600
    ],
    'suspendido' => [
        'titulo' => 'Cuenta suspendida',
        'mensaje' => 'Este dominio ha sido suspendido temporalmente.',
        'imagen' => 'img/suspendido.png',
        'http_code' => 503,
        'retry_after' => 3600
    ],
    'migracion' => [
        'titulo' => 'Estamos migrando',
        'mensaje' => 'Estamos trasladando tu cuenta a un nuevo servidor.',
        'imagen' => 'img/migracion.png',
        'http_code' => 503,
        'retry_after' => 1800
    ],
    'default' => [
        'titulo' => 'Sitio sin contenido',
        'mensaje' => 'Este dominio aún no tiene contenido disponible.',
        'imagen' => 'img/default.png',
        'http_code' => 200,
        'retry_after' => null
    ],
];

// --- PERSONALIZACIÓN POR DOMINIO (opcional, sobrescribe lo anterior) --- //
$porDominio = [
    'rutac.com' => [
        'mantenimiento' => [
            'titulo' => 'RutaC está en mantenimiento',
            'mensaje' => 'Estamos actualizando nuestra plataforma para brindarte un mejor servicio.',
            'imagen' => 'https://cdnsicam.net/img/rutac/rutac_blanco.png',
        ],
    ],
    'cdnsicam.net' => [
        'migracion' => [
            'titulo' => 'CDN SICAM está migrando',
            'mensaje' => 'Estamos optimizando la red de distribución de contenido.',
            'imagen' => 'img/cdnsicam_migrando.png',
        ]
    ]
];

// --- COMBINAR CONFIGURACIÓN --- //
$config = $plantillas[$tipo] ?? $plantillas['default'];

// Si hay personalización por dominio y tipo
if (isset($porDominio[$dominio_base][$tipo])) {
    $config = array_merge($config, $porDominio[$dominio_base][$tipo]);
}

// --- ENCABEZADOS HTTP --- //
http_response_code($config['http_code']);
if ($config['http_code'] === 503 && isset($config['retry_after'])) {
    header("Retry-After: {$config['retry_after']}");
}
header("Content-Type: text/html; charset=UTF-8");
?>
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <title><?= htmlspecialchars($config['titulo']) ?></title>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="robots" content="noindex, nofollow">
    <style>
        body {
            margin: 0;
            font-family: sans-serif;
            background: #0f111a;
            color: white;
            display: flex;
            align-items: center;
            justify-content: center;
            height: 100vh;
            background: linear-gradient(145deg, #000428, #004e92);
        }

        .card {
            background: rgba(0, 0, 0, 0.8);
            border-radius: 15px;
            padding: 40px;
            max-width: 600px;
            text-align: center;
            box-shadow: 0 0 20px rgba(255,255,255,0.1);
        }

        .card img {
            max-width: 250px;
            margin-bottom: 30px;
        }

        .card h1 {
            font-size: 2rem;
            margin-bottom: 15px;
        }

        .card p {
            font-size: 1rem;
            color: #ccc;
        }

        .card .domain {
            margin-top: 10px;
            font-weight: bold;
            color: #fff;
        }
    </style>
</head>
<body>
    <div class="card">
        <img src="<?= htmlspecialchars($config['imagen']) ?>" alt="Logo">
        <h1><?= htmlspecialchars($config['titulo']) ?></h1>
        <p><?= htmlspecialchars($config['mensaje']) ?></p>
        <?php if ($dominio): ?>
            <p class="domain">Dominio: <?= htmlspecialchars($dominio) ?></p>
        <?php endif; ?>
        <p style="margin-top: 20px;"><small>Ruta de Crecimiento – Cámara de Comercio de Santa Marta</small></p>
    </div>

    <?php if ($config['http_code'] === 503 && $dominio): ?>
    <script>
        // Verifica si el sitio ya está disponible
        function checkWebsiteStatus() {
            fetch("https://<?= $dominio ?>", { mode: "no-cors" })
                .then(() => {
                    document.body.innerHTML += '<p style="text-align:center; color:lightgreen;">Sitio activo. Redirigiendo...</p>';
                    setTimeout(() => window.location.href = "https://<?= $dominio ?>", 3000);
                })
                .catch(() => {});
        }
        setInterval(checkWebsiteStatus, 10000);
    </script>
    <?php endif; ?>
</body>
</html>
