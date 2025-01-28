<?php
$errorDrive = null;
include_once "google_drive_api/vendor/autoload.php";

/* * *
 * Funciones para la Clase GESTORA de Google Drive
 */

// Función para cargar las credenciales y crear el cliente de Google
function obtenerCliente($rutaCredenciales) {
    $cliente = new Google_Client();
    $cliente->setAuthConfig($rutaCredenciales);
    $cliente->addScope(Google_Service_Drive::DRIVE_FILE);
    return $cliente;
}

// Función para verificar el error de espacio y manejar el cambio de clave
function verificarYGestionarErrorDeEspacio($e, $rutaClaveActual) {

    $mensajeDeError = $e->getMessage();

    if ($e instanceof Google_Service_Exception) {

        echo "Error con la API de Google Drive <br />";
        echo $mensajeDeError . "<br />";

        // Verificar si el error es de espacio insuficiente
        if (strpos($mensajeDeError, 'insufficient space') == true OR strpos($mensajeDeError, 'quota has been exceeded') == true) {
            // Cambiar el nombre del archivo de credenciales para marcarlo como sin espacio
            $nuevaRutaClave = 'SIN_ESPACIO_' . basename($rutaClaveActual);
            rename($rutaClaveActual, $GLOBALS['claveDirectory'] . DIRECTORY_SEPARATOR . $nuevaRutaClave);

            echo "Clave agotada por falta de espacio. Renombrada a: $nuevaRutaClave<br />";

            return true; // Indica que debemos intentar con la siguiente clave
        }
    }
    return false;
}

// Función para obtener los archivos de claves desde una carpeta local
function obtenerArchivosDeCredenciales($directorio) {
    $archivos = [];
    $todosLosArchivos = scandir($directorio);

    // Filtrar solo los archivos JSON que no tengan el prefijo 'SIN_ESPACIO'
    foreach ($todosLosArchivos as $archivo) {
        if (strpos($archivo, '.json') !== false && strpos($archivo, 'SIN_ESPACIO') === false) {
            $archivos[] = $archivo;
        }
    }
    return $archivos;
}

// Función para crear una carpeta en Google Drive
function crearCarpeta($servicio, $idCarpeta) {
    $metadatosCarpeta = new Google_Service_Drive_DriveFile([
        'name' => 'CARPETA ' . uniqid(), // Nombre de la carpeta
        'mimeType' => 'application/vnd.google-apps.folder', // Tipo MIME para carpetas
        'parents' => [$idCarpeta],
    ]);

    try {
        // Crear la carpeta en Google Drive
        $carpeta = $servicio->files->create($metadatosCarpeta, [
            'fields' => 'id'  // Solo recuperamos el ID de la carpeta creada
        ]);

        printf("Carpeta creada con ID: %s<br />", $carpeta->id);
        printf("Puedes ver la carpeta aquí: https://drive.google.com/drive/folders/%s<br />", $carpeta->id);
        return $carpeta->id;  // Retornar el ID de la carpeta creada
    } catch (Google_Service_Exception $e) {
        $GLOBALS['errorDrive'] = $e;
        echo "Error al crear la carpeta: " . $e->getMessage();
        return false;
    }
}

// Función para cargar un archivo en una carpeta de Google Drive
function cargarArchivo($servicio, $idCarpeta, $rutaImagen) {
    $metadatosArchivo = new Google_Service_Drive_DriveFile([
        'name' => uniqid() . 'prueba.jpg',
        'mimeType' => 'image/jpeg',
        'parents' => [$idCarpeta]  // Especificar la carpeta como destino
    ]);
    $contenido = file_get_contents($rutaImagen);

    try {
        // Intentar cargar el archivo
        $archivo = $servicio->files->create($metadatosArchivo, [
            'data' => $contenido,
            'mimeType' => 'image/jpeg',
            'uploadType' => 'multipart'
        ]);

        printf("Archivo cargado con ID: %s<br />", $archivo->id);
        printf("Puedes ver el archivo aquí: https://drive.google.com/file/d/%s/view<br />", $archivo->id);
        return $archivo->id;  // Retornar el ID del archivo cargado
    } catch (Google_Service_Exception $e) {
        $GLOBALS['errorDrive'] = $e;
        echo "Error al subir el archivo: " . $e->getMessage();
        return false;
    }
}

// Función para asignar permisos de propietario a un archivo
function asignarPropietarioArchivo($servicio, $idArchivo, $email) {
    $permiso = new Google_Service_Drive_Permission();
    $permiso->setType('user');
    $permiso->setRole('owner');
    $permiso->setEmailAddress($email);

    try {
        // Establecer la nueva propiedad
        $servicio->permissions->create($idArchivo, $permiso, ['transferOwnership' => true]);
        printf("La propiedad del archivo ha sido transferida a %s<br />", $email);
        return true;  // Indicar que la operación fue exitosa
    } catch (Google_Service_Exception $e) {
        $GLOBALS['errorDrive'] = $e;
        echo "Error al transferir la propiedad del archivo: " . $e->getMessage();
        return false;
    }
}

// Función para realizar todo el proceso de carga del archivo y asignación de permisos
function cargarArchivoYAsignarPermisos($archivosCredenciales, $idCarpeta, $rutaImagen, $email) {
    // Crear el servicio de Google Drive
    foreach ($archivosCredenciales as $archivoCredencial) {
        echo "<hr />";
        echo "Usando clave: $archivoCredencial<br />";
        $cliente = obtenerCliente($GLOBALS['claveDirectory'] . $archivoCredencial);
        $servicio = new Google_Service_Drive($cliente);

        // Cargar el archivo
        $idArchivo = cargarArchivo($servicio, $idCarpeta, $rutaImagen);

        // Asignar permisos de propietario al archivo
        //$esPropietarioAsignado = asignarPropietarioArchivo($servicio, $idArchivo, $email);
        //if (!$esPropietarioAsignado) {
        //    return false;  // Si no se pudo asignar los permisos, retornar false
        //}

        // Si el proceso fue exitoso, salimos del bucle
        if (!$idArchivo) {
            echo "Hubo un error al cargar el archivo con la clave: $archivoCredencial<br />";
            // Si el error fue por falta de espacio, se renombrará la clave y se intenta con la siguiente
            if (verificarYGestionarErrorDeEspacio($GLOBALS['errorDrive'], $GLOBALS['claveDirectory'] . $archivoCredencial)) {
                continue;  // Intentar con la siguiente clave
            }
        } else {
            echo "El archivo {$rutaImagen} se cargó correctamente.<br />";
            return true;  // Si todo salió bien, retornar true
        }
    }

    return false;
}

/* * *
 * Desde aquí arranca la ejecución
 */
// Ruta de archivo a cargar
$rutaImagen = 'imagen_prueba_drive.jpg';
// ID de la carpeta en la que quieres guardar el archivo (puedes obtenerlo desde la URL de la carpeta en Drive)
$idCarpeta = '1qobeu1x1ZiYQ5M5h0TuAi70q9qmqKMki';  // Reemplaza con el ID de la carpeta en la que quieres guardar el archivo
// Definir el directorio de claves local
$claveDirectory = 'google_keys/';  // Reemplaza con la ruta a la carpeta de claves 
// Obtener las claves disponibles
$archivosCredenciales = obtenerArchivosDeCredenciales($claveDirectory);
// Comprobar si hay claves disponibles
if (empty($archivosCredenciales)) {
    die("No hay claves disponibles para usar.<br />");
}

echo "<hr />";
$cliente = obtenerCliente($claveDirectory . $archivosCredenciales[0]);
$servicio = new Google_Service_Drive($cliente);
// Crear la carpeta
$idCarpetaCreada = crearCarpeta($servicio, $idCarpeta);
if (!$idCarpetaCreada) {
    echo "Error creando la carpeta donde se van a cargar los archivos";
    die();
}

echo "<hr />";
// Llamar a la función de carga y verificar si fue exitosa
$esExitoso = cargarArchivoYAsignarPermisos($archivosCredenciales, $idCarpetaCreada, $rutaImagen, 'gerencia@financis.co');

// Si el proceso fue exitoso, salimos del bucle
if ($esExitoso) {
    echo "El archivo se cargó.<br />";
} else {
    echo "Hubo un error al cargar el archivo.<br />";
}
echo "<hr />";
