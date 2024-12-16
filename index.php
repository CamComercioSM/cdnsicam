<?php
$dir = '.'; // Directorio actual
$files = scandir($dir);

echo '<h1>Recursos Disponibles</h1>';
echo '<ul>';
foreach ($files as $file) {
    if ($file != '.' && $file != '..') {
        echo '<li><a href="'.$file.'">'.$file.'</a></li>';
    }
}
echo '</ul>';