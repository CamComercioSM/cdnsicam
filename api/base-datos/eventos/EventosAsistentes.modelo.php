<?php

class EventosAsistentes {

    static function datosAsistentePorHASH($codigoASISTENTE) {
        Global $Api;
//    $Api::$MOSTRAR_RESPUESTA_API = true;
//    $Api::$MODO_PRUEBAS = true;
        $Respuesta = $Api->ejecutar(
          'tienda-apps', 'AppEventosCapacitaciones', 'consultarDatosCompletoHASHAsistente',
          ['eventoAsistenteCODIGO' => $codigoASISTENTE]
        );
        if(empty($Respuesta->DATOS)){
            return null;
        }
        return $Respuesta->DATOS;
    }    

    static function datosAsistentePorCodigo($codigoASISTENTE) {
        Global $Api;
//    $Api::$MOSTRAR_RESPUESTA_API = true;
        $Respuesta = $Api->ejecutar(
          'tienda-apps', 'AppEventosCapacitaciones', 'consultarDatosCodigoAsistente',
          ['eventoAsistenteCODIGO' => $codigoASISTENTE]
        );
        return $Respuesta->DATOS;
    }
    
    static function consultarEscarapelaCodigoAsistente($codigoASISTENTE) {
        Global $Api;
//    $Api::$MOSTRAR_RESPUESTA_API = true;
        $Respuesta = $Api->ejecutar(
          'tienda-apps', 'AppEventosCapacitaciones', 'consultarEscarapelaCodigoAsistente',
          ['eventoAsistenteCODIGO' => $codigoASISTENTE]
        );
        return $Respuesta->DATOS;
    }

    static function consultaSESION() {
        return $GLOBALS;
    }

    static function consultaAPI() {
        Global $Api;    
        $Respuesta = $Api->ejecutar('tienda-apps', 'tienda', 'probarRecibirDatos', ["dato_prueba"=> "gdfgsdfgsdfgdsg"]);
        return $Respuesta->DATOS;
    }
}