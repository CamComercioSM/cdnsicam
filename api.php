<?php
include 'ConfigBASE.php';
if (isset($_POST['controlador'])) {
    $controlador = ucfirst($_POST['controlador']);
//    $rutaAPP = 'php/controladores/' . $controlador . '.control.php';
    $nombreClase = $controlador . 'Controlador';
    if (class_exists($nombreClase)) {
        $classCtrl = new $nombreClase();
        if ($classCtrl instanceof $nombreClase) {
            $nombreFuncion = lcfirst($_POST['operacion']);
            echo $classCtrl->$nombreFuncion();
        } else {
            die('No cargó la clase.');
        }
    } else {
        die('No existe la clase.');
    }
}