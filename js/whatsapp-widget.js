/**
 * Archivo: widget-whatsapp.js
 *
 * QUÉ:
 *   - Widget genérico para botón flotante de WhatsApp + mini–formulario.
 *
 * CÓMO:
 *   - Se incluye este archivo una sola vez en el sitio (layout/base).
 *   - Cada página puede personalizarlo usando window.CONFIGURACION_WIDGET_WHATSAPP.
 *
 * POSICIONES DISPONIBLES (configuracion.posicion):
 *   - "izquierda-abajo"
 *   - "izquierda-centro"
 *   - "izquierda-arriba"
 *   - "derecha-abajo"
 *   - "derecha-centro"
 *   - "derecha-arriba"
 *
 * COMPATIBILIDAD (si algún día lo llamaste en inglés):
 *   - "left"        → "izquierda-abajo"
 *   - "right"       → "derecha-abajo"
 *   - "left-bottom" → "izquierda-abajo"
 *   - "right-bottom"→ "derecha-abajo"
 *
 * DÓNDE:
 *   - Guárdalo por ejemplo en: /js/widget-whatsapp.js o en tu CDN.
 *
 * CUÁNDO:
 *   - Se ejecuta automáticamente al terminar de cargar el DOM.
 *
 * POR QUÉ:
 *   - Evitas depender de widgets de terceros.
 *   - Controlas estilos, textos, número y comportamiento desde tu propio código.
 *
 * PARA QUÉ:
 *   - Centralizar el canal de contacto por WhatsApp desde cualquier página.
 */

(function () {
    "use strict";

    // Configuración por defecto del widget (se puede sobrescribir desde cada página)
    var configuracionPorDefecto = {
        telefono: "573218150243", // Número con indicativo de país, sin "+"
        mensajePredeterminado: "Hola, me gustaría saber más de ......... [www.ccsm.org.co]",
        posicion: "izquierda-abajo", // Posición por defecto
        textoBoton: "Escríbenos 24/7",
        fondoBoton: "#00e785",
        colorTextoBoton: "#ffffff",
        radioBorde: "25px",
        margenInferior: "6px",
        margenLateral: "6px",
        nombreMarca: "CamComercoSM", 
        subtituloMarca: "",
        imagenMarca: "https://cdnsicam.net/img/ccsm/mariposa-BLANCA.png",
        textoBienvenida: "Bienvenid@s, ¿Cómo podemos ayudarte?",
        abrirAutomaticamente: false, // true = abre el mini–formulario al cargar
        zIndice: 99999               // Prioridad de apilamiento
    };

    /**
     * Mezcla la configuración por defecto con la definida desde la página:
     * window.CONFIGURACION_WIDGET_WHATSAPP = { ... }.
     */
    function obtenerConfiguracion() {
        var configuracionPagina = window.CONFIGURACION_WIDGET_WHATSAPP || {};
        var configuracion = {};

        // Copiamos configuración por defecto
        for (var campo in configuracionPorDefecto) {
            if (Object.prototype.hasOwnProperty.call(configuracionPorDefecto, campo)) {
                configuracion[campo] = configuracionPorDefecto[campo];
            }
        }

        // Sobrescribimos con lo que venga desde la página
        for (var campo2 in configuracionPagina) {
            if (Object.prototype.hasOwnProperty.call(configuracionPagina, campo2)) {
                configuracion[campo2] = configuracionPagina[campo2];
            }
        }

        // Compatibilidad con posiciones antiguas en inglés (por si acaso)
        switch ((configuracion.posicion || "").toLowerCase()) {
            case "left":
            case "left-bottom":
                configuracion.posicion = "izquierda-abajo";
                break;
            case "right":
            case "right-bottom":
                configuracion.posicion = "derecha-abajo";
                break;
        }

        return configuracion;
    }

    /**
     * Inyecta los estilos CSS necesarios al <head>
     */
    function inyectarEstilos(configuracion) {
        var css =
            "#widget-whatsapp-contenedor{" +
                "position:fixed;" +
                "z-index:" + configuracion.zIndice + ";" +
                "font-family:system-ui,-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;" +
            "}" +
            "#widget-whatsapp-boton{display:flex;align-items:center;gap:8px;padding:10px 14px;" +
                "background:" + configuracion.fondoBoton + ";color:" + configuracion.colorTextoBoton + ";" +
                "border-radius:" + configuracion.radioBorde + ";border:none;cursor:pointer;box-shadow:0 4px 10px rgba(0,0,0,.25);" +
                "font-size:14px;font-weight:600;transition:transform .15s ease,box-shadow .15s ease;}" +
            "#widget-whatsapp-boton:hover{transform:translateY(-1px);box-shadow:0 6px 16px rgba(0,0,0,.3);}" +
            "#widget-whatsapp-boton-icono{width:20px;height:20px;display:inline-block;}" +
            "#widget-whatsapp-popup{margin-top:8px;width:280px;max-width:80vw;background:#ffffff;border-radius:16px;" +
                "box-shadow:0 10px 25px rgba(0,0,0,.2);overflow:hidden;opacity:0;transform:translateY(10px);pointer-events:none;" +
                "transition:opacity .18s ease,transform .18s ease;}" +
            "#widget-whatsapp-popup.abierto{opacity:1;transform:translateY(0);pointer-events:auto;}" +
            "#widget-whatsapp-encabezado{display:flex;align-items:center;gap:10px;padding:10px 12px;background:" + configuracion.fondoBoton + ";" +
                "color:#ffffff;}" +
            "#widget-whatsapp-encabezado img{width:32px;height:32px;border-radius:50%;object-fit:cover;background:#ffffff;}" +
            "#widget-whatsapp-encabezado-texto{flex:1;}" +
            "#widget-whatsapp-encabezado-titulo{font-size:14px;font-weight:700;margin:0;}" +
            "#widget-whatsapp-encabezado-subtitulo{font-size:11px;margin:2px 0 0;opacity:.9;}" +
            "#widget-whatsapp-cerrar{background:transparent;border:none;color:#ffffff;font-size:18px;line-height:1;cursor:pointer;padding:0 4px;}" +
            "#widget-whatsapp-cuerpo{padding:10px 12px 12px;font-size:12px;color:#333333;}" +
            "#widget-whatsapp-bienvenida{margin-bottom:6px;white-space:pre-wrap;}" +
            "#widget-whatsapp-texto{width:100%;min-height:60px;max-height:140px;resize:vertical;padding:8px 10px;border-radius:10px;" +
                "border:1px solid #d0d0d0;font-size:12px;font-family:inherit;box-sizing:border-box;}" +
            "#widget-whatsapp-pie{display:flex;justify-content:flex-end;gap:8px;margin-top:8px;}" +
            ".widget-whatsapp-boton-accion{border-radius:999px;border:none;font-size:12px;padding:6px 12px;cursor:pointer;}" +
            "#widget-whatsapp-boton-cancelar{background:#f1f1f1;color:#555555;}" +
            "#widget-whatsapp-boton-enviar{background:#25d366;color:#ffffff;font-weight:600;}" +
            "#widget-whatsapp-boton-enviar:disabled{opacity:.6;cursor:not-allowed;}" +
            "@media (max-width:480px){#widget-whatsapp-popup{width:90vw;}#widget-whatsapp-boton{padding:8px 12px;font-size:13px;}}";

        var etiquetaEstilo = document.createElement("style");
        etiquetaEstilo.type = "text/css";
        etiquetaEstilo.appendChild(document.createTextNode(css));
        document.head.appendChild(etiquetaEstilo);
    }

    /**
     * Aplica la posición del contenedor según la opción elegida
     */
    function aplicarPosicion(contenedor, configuracion) {
        var posicion = (configuracion.posicion || "izquierda-abajo").toLowerCase();

        // Limpiar posiciones previas
        contenedor.style.top = "";
        contenedor.style.bottom = "";
        contenedor.style.left = "";
        contenedor.style.right = "";
        contenedor.style.transform = "";

        var margenLateral = configuracion.margenLateral || "0px";
        var margenInferior = configuracion.margenInferior || "0px";

        switch (posicion) {
            case "izquierda-arriba":
                contenedor.style.top = margenInferior;
                contenedor.style.left = margenLateral;
                break;
            case "izquierda-centro":
                contenedor.style.top = "50%";
                contenedor.style.left = margenLateral;
                contenedor.style.transform = "translateY(-50%)";
                break;
            case "izquierda-abajo":
                contenedor.style.bottom = margenInferior;
                contenedor.style.left = margenLateral;
                break;
            case "derecha-arriba":
                contenedor.style.top = margenInferior;
                contenedor.style.right = margenLateral;
                break;
            case "derecha-centro":
                contenedor.style.top = "50%";
                contenedor.style.right = margenLateral;
                contenedor.style.transform = "translateY(-50%)";
                break;
            case "derecha-abajo":
            default:
                contenedor.style.bottom = margenInferior;
                contenedor.style.right = margenLateral;
                break;
        }
    }

    /**
     * Construye la URL oficial de WhatsApp (https://wa.me)
     */
    function construirUrlWhatsApp(configuracion, mensaje) {
        var base = "https://wa.me/";
        var telefono = String(configuracion.telefono || "").replace(/[^\d]/g, ""); // solo dígitos

        if (!telefono) {
            console.error("[Widget WhatsApp] No se ha configurado un número de teléfono válido.");
            return null; // Línea crítica: evitamos abrir una URL rota
        }

        var texto = mensaje && mensaje.trim() ? mensaje.trim() : configuracion.mensajePredeterminado;
        return base + telefono + "?text=" + encodeURIComponent(texto); // Línea crítica: encodeURIComponent para no romper la URL
    }

    /**
     * Crea la estructura HTML del widget y asigna eventos
     */
    function crearWidget(configuracion) {
        var raiz = document.getElementById("widget-whatsapp-raiz");
        if (!raiz) {
            raiz = document.createElement("div");
            raiz.id = "widget-whatsapp-raiz";
            document.body.appendChild(raiz);
        }

        var contenedor = document.createElement("div");
        contenedor.id = "widget-whatsapp-contenedor";

        // Botón flotante
        var boton = document.createElement("button");
        boton.id = "widget-whatsapp-boton";
        boton.type = "button";

        var icono = document.createElement("span");
        icono.id = "widget-whatsapp-boton-icono";
        icono.innerHTML =
            '<svg viewBox="0 0 32 32" width="20" height="20" aria-hidden="true">' +
                '<path fill="#ffffff" d="M16.04 3C9.42 3 4 8.21 4 14.64c0 2.48.81 4.78 2.19 6.66L4 29l7.89-2.06c1.81.99 3.88 1.56 6.15 1.56 6.62 0 12.04-5.21 12.04-11.64C30.08 8.21 22.66 3 16.04 3zm.01 20.74h-.01c-1.91 0-3.78-.51-5.41-1.47l-.39-.23-3.58.94.96-3.49-.25-.36a9.44 9.44 0 0 1-1.48-5.09c0-5.17 4.32-9.38 9.6-9.38 2.56 0 4.97.98 6.79 2.76a9.02 9.02 0 0 1 2.81 6.62c-.01 5.17-4.32 9.38-9.64 9.38zm5.27-6.98c-.29-.15-1.7-.84-1.96-.94-.26-.1-.45-.15-.64.15-.19.29-.74.94-.91 1.13-.17.19-.34.22-.63.07-.29-.15-1.23-.48-2.34-1.52-.86-.8-1.44-1.79-1.61-2.09-.17-.29-.02-.45.13-.6.13-.13.29-.34.43-.51.15-.17.19-.29.29-.48.1-.19.05-.36-.02-.51-.07-.15-.64-1.54-.88-2.11-.23-.55-.47-.48-.64-.49l-.55-.01c-.19 0-.51.07-.77.36-.26.29-1 1-1 2.44 0 1.44 1.03 2.84 1.17 3.04.15.19 2.03 3.17 4.92 4.33.69.3 1.22.48 1.64.61.69.22 1.32.19 1.82.12.55-.08 1.7-.69 1.94-1.36.24-.67.24-1.25.17-1.36-.07-.11-.26-.18-.55-.33z"></path>' +
            "</svg>";

        var textoBoton = document.createElement("span");
        textoBoton.textContent = configuracion.textoBoton;

        boton.appendChild(icono);
        boton.appendChild(textoBoton);

        // Popup / mini–formulario
        var popup = document.createElement("div");
        popup.id = "widget-whatsapp-popup";

        // Encabezado del popup
        var encabezado = document.createElement("div");
        encabezado.id = "widget-whatsapp-encabezado";

        if (configuracion.imagenMarca) {
            var avatar = document.createElement("img");
            avatar.src = configuracion.imagenMarca;
            avatar.alt = configuracion.nombreMarca || "WhatsApp";
            encabezado.appendChild(avatar);
        }

        var encabezadoTexto = document.createElement("div");
        encabezadoTexto.id = "widget-whatsapp-encabezado-texto";

        var encabezadoTitulo = document.createElement("p");
        encabezadoTitulo.id = "widget-whatsapp-encabezado-titulo";
        encabezadoTitulo.textContent = configuracion.nombreMarca || "WhatsApp";

        var encabezadoSubtitulo = document.createElement("p");
        encabezadoSubtitulo.id = "widget-whatsapp-encabezado-subtitulo";
        encabezadoSubtitulo.textContent = configuracion.subtituloMarca || "Atención por WhatsApp";

        encabezadoTexto.appendChild(encabezadoTitulo);
        encabezadoTexto.appendChild(encabezadoSubtitulo);
        encabezado.appendChild(encabezadoTexto);

        var botonCerrar = document.createElement("button");
        botonCerrar.id = "widget-whatsapp-cerrar";
        botonCerrar.type = "button";
        botonCerrar.innerHTML = "&times;";
        encabezado.appendChild(botonCerrar);

        // Cuerpo del popup
        var cuerpo = document.createElement("div");
        cuerpo.id = "widget-whatsapp-cuerpo";

        var bienvenida = document.createElement("div");
        bienvenida.id = "widget-whatsapp-bienvenida";
        bienvenida.textContent = configuracion.textoBienvenida || "";

        var campoTexto = document.createElement("textarea");
        campoTexto.id = "widget-whatsapp-texto";
        campoTexto.placeholder = "Escribe tu mensaje aquí...";
        campoTexto.value = configuracion.mensajePredeterminado || "";

        cuerpo.appendChild(bienvenida);
        cuerpo.appendChild(campoTexto);

        // Pie con botones
        var pie = document.createElement("div");
        pie.id = "widget-whatsapp-pie";

        var botonCancelar = document.createElement("button");
        botonCancelar.id = "widget-whatsapp-boton-cancelar";
        botonCancelar.type = "button";
        botonCancelar.className = "widget-whatsapp-boton-accion";
        botonCancelar.textContent = "Cancelar";

        var botonEnviar = document.createElement("button");
        botonEnviar.id = "widget-whatsapp-boton-enviar";
        botonEnviar.type = "button";
        botonEnviar.className = "widget-whatsapp-boton-accion";
        botonEnviar.textContent = "Enviar";

        pie.appendChild(botonCancelar);
        pie.appendChild(botonEnviar);

        // Ensamblar popup
        popup.appendChild(encabezado);
        popup.appendChild(cuerpo);
        popup.appendChild(pie);

        // Ensamblar contenedor
        contenedor.appendChild(boton);
        contenedor.appendChild(popup);

        // Agregar al root
        raiz.appendChild(contenedor);

        // Aplicar posición definida
        aplicarPosicion(contenedor, configuracion);

        // Eventos
        boton.addEventListener("click", function () {
            var estaAbierto = popup.classList.contains("abierto");
            popup.classList.toggle("abierto", !estaAbierto);
        });

        botonCerrar.addEventListener("click", function () {
            popup.classList.remove("abierto");
        });

        botonCancelar.addEventListener("click", function () {
            popup.classList.remove("abierto");
        });

        botonEnviar.addEventListener("click", function () {
            var mensaje = campoTexto.value;
            var url = construirUrlWhatsApp(configuracion, mensaje);
            if (!url) {
                return;
            }
            window.open(url, "_blank"); // En móvil abre la app de WhatsApp si está instalada
            popup.classList.remove("abierto");
        });

        if (configuracion.abrirAutomaticamente) {
            popup.classList.add("abierto");
        }
    }

    /**
     * Punto de entrada del widget
     */
    function iniciarWidgetWhatsApp() {
        var configuracion = obtenerConfiguracion();
        inyectarEstilos(configuracion);
        crearWidget(configuracion);
    }

    if (typeof window !== "undefined") {
        if (document.readyState === "loading") {
            document.addEventListener("DOMContentLoaded", iniciarWidgetWhatsApp);
        } else {
            iniciarWidgetWhatsApp();
        }
    }
})();