<?php

/**
 * Muestra la estructura de archivos y carpetas como un árbol, excluyendo archivos ocultos
 * y limitando la profundidad del árbol.
 *
 * @param string $dir Directorio a escanear.
 * @param int $level Nivel actual de profundidad.
 * @param int $maxLevel Nivel máximo de profundidad permitido.
 */
function mostrarEstructuraArbol($dir, $maxLevel = PHP_INT_MAX, $level = 0) {
    // Asegurarse de que el directorio existe
    if (!is_dir($dir)) {
        echo "El directorio especificado no existe.";
        return;
    }

    // Si se ha alcanzado el nivel máximo, detener
    if ($level > $maxLevel) {
        return;
    }

    // Abrir el directorio
    $files = scandir($dir);

    foreach ($files as $file) {
        // Ignorar "." y ".." y archivos/carpetas ocultos (comienzan con ".")
        if ($file === '.' || $file === '..' || str_starts_with($file, '.')) {
            continue;
        }

        // Mostrar con indentación según el nivel
        echo str_repeat('&nbsp;&nbsp;&nbsp;&nbsp;', $level) . '- ' . $file . '<br>';

        // Construir la ruta completa
        $path = $dir . DIRECTORY_SEPARATOR . $file;

        // Si es un directorio y no se ha alcanzado el nivel máximo, llamar recursivamente
        if (is_dir($path)) {
            mostrarEstructuraArbol($path, $maxLevel, $level + 1);
        }
    }
}

function mostrarEstructuraArbolSinRaiz($dir, $maxLevel = PHP_INT_MAX, $level = 0) {
    // Asegurarse de que el directorio existe
    if (!is_dir($dir)) {
        echo "El directorio especificado no existe.";
        return;
    }

    // Si se ha alcanzado el nivel máximo, detener
    if ($level > $maxLevel) {
        return;
    }

    // Abrir el directorio
    $files = scandir($dir);

    // Se comienza mostrando solo subcarpetas, no archivos en la raíz
    if ($level == 0) {
        $files = array_diff($files, ['.', '..']); // Eliminar "." y ".." de la raíz
    }

    foreach ($files as $file) {
        // Ignorar archivos/carpetas ocultos (comienzan con ".")
        if (str_starts_with($file, '.')) {
            continue;
        }

        // Mostrar con indentación según el nivel
        echo str_repeat('&nbsp;&nbsp;&nbsp;&nbsp;', $level) . '- ' . $file . '<br>';

        // Construir la ruta completa
        $path = $dir . DIRECTORY_SEPARATOR . $file;

        // Si es un directorio y no se ha alcanzado el nivel máximo, llamar recursivamente
        if (is_dir($path)) {
            mostrarEstructuraArbol($path, $maxLevel, $level + 1);
        }
    }
}

function generarJsonEstructuraArbol($dir, $maxLevel = PHP_INT_MAX, $level = 0) {
    // Asegurarse de que el directorio existe
    if (!is_dir($dir)) {
        echo "El directorio especificado no existe.";
        return;
    }

    // Si se ha alcanzado el nivel máximo, detener
    if ($level > $maxLevel) {
        return [];
    }

    // Abrir el directorio
    $files = scandir($dir);
    if ($level == 0) {
        $files = array_diff($files, ['.', '..']); // Eliminar "." y ".." de la raíz
    }

    $structure = [];
    foreach ($files as $file) {
        // Ignorar archivos/carpetas ocultos
        if (str_starts_with($file, '.')) {
            continue;
        }

        // Construir la ruta completa
        $path = $dir . DIRECTORY_SEPARATOR . $file;

        // Si es un directorio, agregar a la estructura
        if (is_dir($path)) {
            $structure[] = [
                'text' => $file,
                'children' => generarJsonEstructuraArbol($path, $maxLevel, $level + 1)
            ];
        } else {
            // Si es un archivo, solo mostrar el nombre
            $structure[] = ['text' => $file];
        }
    }

    return $structure;
}

function generarJsonEstructuraArbolConIconos($dir, $maxLevel = PHP_INT_MAX, $level = 0) {
    // Asegurarse de que el directorio existe
    if (!is_dir($dir)) {
        echo "El directorio especificado no existe.";
        return;
    }

    // Si se ha alcanzado el nivel máximo, detener
    if ($level > $maxLevel) {
        return [];
    }

    // Abrir el directorio
    $files = scandir($dir);
    // Filtrar "." y ".."
    $files = array_diff($files, ['.', '..']);

    // Filtrar archivos/carpetas ocultos
    $files = array_filter($files, function ($file) {
        return !str_starts_with($file, '.');
    });

    // Estructura final del árbol
    $structure = [];

    foreach ($files as $file) {
        $icon = '';
        $path = $dir . DIRECTORY_SEPARATOR . $file;
        $relativePath = str_replace( ('../cdnsicam//'), '', $path); // Obtener la ruta relativa al directorio base        
        $webPath = ("https://cdnsicam.net/") . str_replace(DIRECTORY_SEPARATOR, '/', ltrim(str_replace(realpath($_SERVER['DOCUMENT_ROOT']), '', $relativePath), DIRECTORY_SEPARATOR));

        // Determinar el ícono según el tipo de archivo
        if (is_dir($path)) {
            $icon = 'jstree-icon jstree-folder'; // Ícono para carpeta
            $structure[] = [
                'text' => $file,
                'icon' => $icon,
                'path' => $webPath, // Ruta web completa para copiar
                'children' => generarJsonEstructuraArbolConIconos($path, $maxLevel, $level + 1)
            ];
        } else {
            if ($level > 0) {
                // Asignar ícon según extensión de archivo
                $ext = pathinfo($file, PATHINFO_EXTENSION);
//                switch (strtolower($ext)) {
//                    case 'mp3':
//                        $icon = 'fas fa-music';
//                        break;
//                    case 'txt':
//                        $icon = 'fa fa-file-text';
//                        break;
//                    case 'jpg':
//                    case 'jpeg':
//                    case 'png':
//                    case 'gif':
//                        $icon = 'fa fa-file-image';
//                        break;
//                    case 'pdf':
//                        $icon = 'fa fa-file-pdf';
//                        break;
//                    default:
//                        $icon = 'fa fa-file'; // Ícono por defecto
//                        break;
//                }

                $icon = match ($ext) {
                    'mp3' => 'fas fa-music',
                    'txt' => 'fa fa-file-text',
                    'jpg', 'jpeg', 'png', 'gif' => 'fa fa-file-image',
                    'pdf' => 'fa fa-file-pdf',
                    default => 'fa fa-file', // Ícono predeterminado para archivos
                };

                $structure[] = [
                    'text' => $file,
                    'icon' => $icon,
                    'path' => $webPath // Ruta web completa para copiar
                ];
            }
        }
    }

    return $structure;
}
