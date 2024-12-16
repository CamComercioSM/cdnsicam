<?php
$dir = './assets'; // Directorio donde se encuentran los archivos
$files = new RecursiveIteratorIterator(new RecursiveDirectoryIterator($dir));

echo '<h1>Listado de Recursos</h1>';
echo '<ul>';
foreach ($files as $file) {
    if ($file->isFile()) {
        $path = str_replace($dir, '', $file->getRealPath());
        echo '<li><a href="assets' . $path . '">' . $path . '</a></li>';
    }
}
echo '</ul>';
?>



├── recursos/                # Archivos estáticos
│   ├── css/                 # Estilos CSS
│   ├── js/                  # Scripts JavaScript
│   ├── fuentes/             # Fuentes (tipografías)
│   ├── img/                 # Imágenes
│   ├── videos/              # Videos
│   ├── audios/              # Archivos de audio
├── plantillas/              # Plantillas y temas
│   ├── errores/             # Plantillas para errores
│   ├── hasta2023/           # Plantillas antiguas
│   ├── sb-admin-2/          # Plantilla administrativa (SB Admin 2)
│   ├── bootstrap-4.0.0/     # Plantilla Bootstrap 4
│   ├── bootstrap-5.2.3/     # Plantilla Bootstrap 5.2.3
│   ├── en-construccion/     # Plantilla de "en construcción"
│   ├── tienda-apps/         # Plantilla para tienda de aplicaciones
│   ├── eventos/             # Plantilla para eventos
├── api/                     # Archivos relacionados con la API
├── utilidades/              # Herramientas y utilidades
├── plugins/                 # Plugins de terceros
│   ├── font-awesome/        # Font Awesome
│   ├── bootstrap/           # Bootstrap
│   ├── sweetalert2/         # SweetAlert2
│   ├── datatables/          # DataTables
├── soporte/                 # Archivos para soporte (chat, ayuda, etc.)
├── logs/                    # Archivos de logs
├── config/                  # Configuraciones del servidor (NGINX, Caddy, etc.)
├── scripts/                 # Scripts para automatización (bash, Python, etc.)
├── cache/                   # Archivos o configuraciones de cache (si aplica)
├── docker/                  # Configuración para Docker (si se usa)
├── tests/                   # Pruebas de rendimiento, ancho de banda, etc.
├── docs/                    # Documentación del proyecto
└── README.md                # Descripción del proyecto


<?php
echo "<hr />";
?>