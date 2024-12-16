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
