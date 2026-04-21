<?php

declare(strict_types=1);

/**
 * Servicio WATI
 *
 * Cámara de Comercio de Santa Marta
 * Ingeniero Juan Pablo Llinás Ramírez
 */

namespace servicios\Wati;

use Throwable;

class Wati {
    protected WatiCliente $cliente;

    protected string $canalLog = 'wati.servicio';

    public function __construct() {
        $baseUrl  = rtrim(config('wati.baseUrl'), '/');
        $tenantId = config('wati.tenantId');
        $token    = config('wati.token');

        $this->canalLog = config('wati.logChannel', 'wati.servicio');

        $this->cliente = new WatiCliente(
            "{$baseUrl}/{$tenantId}",
            $token
        );
    }


    /* =========================================================
     * MENSAJES
     * ========================================================= */

    public function enviarMensajeSesion(string $whatsappNumber, string $mensaje): array {
        registraLOG($this->canalLog, [
            'accion' => 'enviarMensajeSesion',
            'whatsappNumber' => $whatsappNumber
        ]);

        try {
            $respuesta = $this->cliente->postForm(
                "/api/v1/sendSessionMessage/{$whatsappNumber}",
                [],
                ['messageText' => $mensaje]
            );

            if ($respuesta['ok']) {
                registraLOG($this->canalLog, [
                    'accion' => 'enviarMensajeSesion',
                    'estado' => 'OK',
                    'httpCode' => $respuesta['httpCode']
                ]);

                return exito('Mensaje enviado', $respuesta['respuesta']);
            }

            registraLOG($this->canalLog, [
                'accion' => 'enviarMensajeSesion',
                'estado' => 'ERROR',
                'httpCode' => $respuesta['httpCode'],
                'detalle' => $respuesta['respuesta'] ?? $respuesta['error']
            ], 'error');

            return error('Error enviando mensaje por WATI', 500, $respuesta);
        } catch (Throwable $e) {
            registraLOG($this->canalLog, [
                'accion' => 'enviarMensajeSesion',
                'exception' => $e->getMessage()
            ], 'error');

            return error('Excepción enviando mensaje por WATI');
        }
    }

    public function enviarPlantilla(
        string $whatsappNumber,
        string $template,
        string $broadcast,
        array $parametros
    ): array {
        registraLOG($this->canalLog, [
            'accion' => 'enviarPlantilla',
            'whatsappNumber' => $whatsappNumber,
            'template' => $template
        ]);

        try {
            $payload = [
                'template_name'  => $template,
                'broadcast_name' => $broadcast,
                'parameters'     => $parametros
            ];

            $respuesta = $this->cliente->postJson(
                '/api/v1/sendTemplateMessage',
                ['whatsappNumber' => $whatsappNumber],
                $payload
            );

            if ($respuesta['ok']) {
                registraLOG($this->canalLog, [
                    'accion' => 'enviarPlantilla',
                    'estado' => 'OK'
                ]);

                return exito('Plantilla enviada', $respuesta['respuesta']);
            }

            registraLOG($this->canalLog, [
                'accion' => 'enviarPlantilla',
                'estado' => 'ERROR',
                'detalle' => $respuesta['respuesta']
            ], 'error');

            return error('Error enviando plantilla por WATI', 500, $respuesta);
        } catch (Throwable $e) {
            registraLOG($this->canalLog, [
                'accion' => 'enviarPlantilla',
                'exception' => $e->getMessage()
            ], 'error');

            return error('Excepción enviando plantilla por WATI');
        }
    }

    public function obtenerMensajes(string $whatsappNumber, int $pagina = 1): array {
        registraLOG($this->canalLog, [
            'accion' => 'obtenerMensajes',
            'whatsappNumber' => $whatsappNumber,
            'pagina' => $pagina
        ]);

        try {
            $respuesta = $this->cliente->get(
                "/api/v1/getMessages/{$whatsappNumber}",
                [
                    'pageNumber' => $pagina,
                    'pageSize' => 10
                ]
            );

            if ($respuesta['ok']) {
                return exito('Mensajes obtenidos', $respuesta['respuesta']);
            }

            registraLOG($this->canalLog, [
                'accion' => 'obtenerMensajes',
                'estado' => 'ERROR',
                'detalle' => $respuesta['respuesta']
            ], 'error');

            return error('Error consultando mensajes en WATI');
        } catch (Throwable $e) {
            registraLOG($this->canalLog, [
                'accion' => 'obtenerMensajes',
                'exception' => $e->getMessage()
            ], 'error');

            return error('Excepción consultando mensajes en WATI');
        }
    }

    public function crearContacto(
        string $whatsappNumber,
        string $nombre,
        array $atributos = []
    ): array {
        registraLOG($this->canalLog, [
            'accion' => 'crearContacto',
            'whatsappNumber' => $whatsappNumber
        ]);

        try {
            $respuesta = $this->cliente->postJson(
                "/api/v1/addContact/{$whatsappNumber}",
                [],
                [
                    'name' => $nombre,
                    'customParams' => $atributos
                ]
            );

            if ($respuesta['ok']) {
                return exito('Contacto creado', $respuesta['respuesta']);
            }

            registraLOG($this->canalLog, [
                'accion' => 'crearContacto',
                'estado' => 'ERROR',
                'detalle' => $respuesta['respuesta']
            ], 'error');

            return error('Error creando contacto en WATI');
        } catch (Throwable $e) {
            registraLOG($this->canalLog, [
                'accion' => 'crearContacto',
                'exception' => $e->getMessage()
            ], 'error');

            return error('Excepción creando contacto en WATI');
        }
    }

    public function asignarOperador(string $whatsappNumber, string $email): array {
        registraLOG($this->canalLog, [
            'accion' => 'asignarOperador',
            'whatsappNumber' => $whatsappNumber,
            'email' => $email
        ]);

        try {
            $respuesta = $this->cliente->postForm(
                '/api/v1/assignOperator',
                [
                    'whatsappNumber' => $whatsappNumber,
                    'email' => $email
                ]
            );

            if ($respuesta['ok']) {
                return exito('Operador asignado', $respuesta['respuesta']);
            }

            registraLOG($this->canalLog, [
                'accion' => 'asignarOperador',
                'estado' => 'ERROR',
                'detalle' => $respuesta['respuesta']
            ], 'error');

            return error('Error asignando operador en WATI');
        } catch (Throwable $e) {
            registraLOG($this->canalLog, [
                'accion' => 'asignarOperador',
                'exception' => $e->getMessage()
            ], 'error');

            return error('Excepción asignando operador en WATI');
        }
    }
}
