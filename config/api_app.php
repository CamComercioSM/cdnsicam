<?php
if (isset($_POST['controlador'])) {
    $controlador = ucfirst($_POST['controlador']);
//    $rutaAPP = 'php/controladores/' . $controlador . '.control.php';
    $nombreClase = $controlador . 'Controlador';
    if (class_exists($nombreClase)) {
        $classCtrl = new $nombreClase();
        if ($classCtrl instanceof $nombreClase) {
            $nombreFuncion = lcfirst($_POST['operacion']);
            if (method_exists($classCtrl, $nombreFuncion)) {
                echo $classCtrl->$nombreFuncion();
            } else {
                die('No existe el metodo u operacion [' . $nombreFuncion . '] para la clase [' . $nombreClase . ']');
            }
        } else {
            die('No cargó la clase [' . $nombreClase . '].');
        }
    } else {
        die('No existe la clase [' . $nombreClase . '].');
    }
}