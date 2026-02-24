/**
 * Archivo: whatsapp-widget.js
 *
 * QUÉ:
 *   - Widget genérico para botón flotante de WhatsApp + mini–formulario.
 *
 * CÓMO:
 *   - Se incluye este archivo una sola vez en el sitio.
 *   - Cada página puede personalizarlo usando window.WHATSAPP_WIDGET_CONFIG.
 *
 * DÓNDE:
 *   - Guárdalo como: /js/whatsapp-widget.js (o súbelo a tu CDN).
 *
 * CUÁNDO:
 *   - Se carga al final del <body> o en el layout/base de la plantilla.
 *
 * POR QUÉ:
 *   - Evitas pegar un bloque gigante de código en cada página.
 *   - Centralizas mantenimiento en un solo archivo.
 *
 * PARA QUÉ:
 *   - Reusar el mismo widget en todo el sitio con configuraciones distintas.
 */

(function () {
    "use strict";

    // Configuración por defecto del widget
    var defaultConfig = {
        phone: "573218150243",              // Número por defecto con indicativo de país, sin '+'
        defaultMessage: "Hola, me gustaría saber más de ......... [www.ccsm.org.co]",
        position: "left",                   // "left" o "right"
        buttonText: "Escríbenos 24/7",
        buttonBackground: "#00e785",
        buttonTextColor: "#ffffff",
        borderRadius: "25px",
        bottomSpacing: "20px",
        sideSpacing: "20px",
        brandName: "RutaC CamComercoSM",
        brandSubtitle: "",
        brandImage: "https://cdnsicam.net/img/rutac/rutac-whatsapp-cuadrado.png",
        welcomeText: "Bienvenid@s, ¿Cómo podemos ayudarte?",
        autoOpen: false,                    // true = abre el mini–formulario al cargar
        zIndex: 99999                       // prioridad de apilamiento
    };

    /**
     * Mezcla la config por defecto con la que definas en cada página:
     * window.WHATSAPP_WIDGET_CONFIG = { ... }.
     */
    function getConfig() {
        var pageConfig = window.WHATSAPP_WIDGET_CONFIG || {};
        var config = {};

        // Object.assign para mezclar (evitamos romper navegadores viejos)
        for (var key in defaultConfig) {
            if (Object.prototype.hasOwnProperty.call(defaultConfig, key)) {
                config[key] = defaultConfig[key];
            }
        }
        for (var key2 in pageConfig) {
            if (Object.prototype.hasOwnProperty.call(pageConfig, key2)) {
                config[key2] = pageConfig[key2]; // 👉 overrides desde la página
            }
        }

        return config;
    }

    function injectStyles(config) {
        var css =
            "#whatsapp-widget-container{position:fixed;bottom:" + config.bottomSpacing + ";" +
                (config.position === "left" ? "left" : "right") + ":" + config.sideSpacing + ";" +
                "z-index:" + config.zIndex + ";font-family:system-ui,-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;}" +
            "#whatsapp-widget-button{display:flex;align-items:center;gap:8px;padding:10px 14px;" +
                "background:" + config.buttonBackground + ";color:" + config.buttonTextColor + ";" +
                "border-radius:" + config.borderRadius + ";border:none;cursor:pointer;box-shadow:0 4px 10px rgba(0,0,0,.25);" +
                "font-size:14px;font-weight:600;transition:transform .15s ease,box-shadow .15s ease;}" +
            "#whatsapp-widget-button:hover{transform:translateY(-1px);box-shadow:0 6px 16px rgba(0,0,0,.3);}" +
            "#whatsapp-widget-button-icon{width:20px;height:20px;display:inline-block;}" +
            "#whatsapp-widget-popup{margin-top:8px;width:280px;max-width:80vw;background:#ffffff;border-radius:16px;" +
                "box-shadow:0 10px 25px rgba(0,0,0,.2);overflow:hidden;opacity:0;transform:translateY(10px);pointer-events:none;" +
                "transition:opacity .18s ease,transform .18s ease;}" +
            "#whatsapp-widget-popup.open{opacity:1;transform:translateY(0);pointer-events:auto;}" +
            "#whatsapp-widget-header{display:flex;align-items:center;gap:10px;padding:10px 12px;background:" + config.buttonBackground + ";" +
                "color:#ffffff;}" +
            "#whatsapp-widget-header img{width:32px;height:32px;border-radius:50%;object-fit:cover;background:#ffffff;}" +
            "#whatsapp-widget-header-text{flex:1;}" +
            "#whatsapp-widget-header-title{font-size:14px;font-weight:700;margin:0;}" +
            "#whatsapp-widget-header-sub{font-size:11px;margin:2px 0 0;opacity:.9;}" +
            "#whatsapp-widget-close{background:transparent;border:none;color:#ffffff;font-size:18px;line-height:1;cursor:pointer;padding:0 4px;}" +
            "#whatsapp-widget-body{padding:10px 12px 12px;font-size:12px;color:#333333;}" +
            "#whatsapp-widget-welcome{margin-bottom:6px;white-space:pre-wrap;}" +
            "#whatsapp-widget-textarea{width:100%;min-height:60px;max-height:140px;resize:vertical;padding:8px 10px;border-radius:10px;" +
                "border:1px solid #d0d0d0;font-size:12px;font-family:inherit;box-sizing:border-box;}" +
            "#whatsapp-widget-footer{display:flex;justify-content:flex-end;gap:8px;margin-top:8px;}" +
            ".whatsapp-widget-btn{border-radius:999px;border:none;font-size:12px;padding:6px 12px;cursor:pointer;}" +
            "#whatsapp-widget-cancel{background:#f1f1f1;color:#555555;}" +
            "#whatsapp-widget-send{background:#25d366;color:#ffffff;font-weight:600;}" +
            "#whatsapp-widget-send:disabled{opacity:.6;cursor:not-allowed;}" +
            "@media (max-width:480px){#whatsapp-widget-popup{width:90vw;}#whatsapp-widget-button{padding:8px 12px;font-size:13px;}}";

        var styleTag = document.createElement("style");
        styleTag.type = "text/css";
        styleTag.appendChild(document.createTextNode(css));
        document.head.appendChild(styleTag);
    }

    function buildWhatsAppUrl(config, message) {
        var base = "https://wa.me/";
        var phone = String(config.phone || "").replace(/[^\d]/g, "");

        if (!phone) {
            console.error("[WhatsApp Widget] No se ha configurado un número de teléfono válido.");
            return null; // ⚠️ Evita abrir URL rota
        }

        var text = message && message.trim() ? message.trim() : config.defaultMessage;
        return base + phone + "?text=" + encodeURIComponent(text); // encodeURIComponent crítico
    }

    function createWidget(config) {
        var root = document.getElementById("whatsapp-mini-widget-root");
        if (!root) {
            root = document.createElement("div");
            root.id = "whatsapp-mini-widget-root";
            document.body.appendChild(root);
        }

        var container = document.createElement("div");
        container.id = "whatsapp-widget-container";

        var btn = document.createElement("button");
        btn.id = "whatsapp-widget-button";
        btn.type = "button";

        var icon = document.createElement("span");
        icon.id = "whatsapp-widget-button-icon";
        icon.innerHTML =
            '<svg viewBox="0 0 32 32" width="20" height="20" aria-hidden="true">' +
                '<path fill="#ffffff" d="M16.04 3C9.42 3 4 8.21 4 14.64c0 2.48.81 4.78 2.19 6.66L4 29l7.89-2.06c1.81.99 3.88 1.56 6.15 1.56 6.62 0 12.04-5.21 12.04-11.64C30.08 8.21 22.66 3 16.04 3zm.01 20.74h-.01c-1.91 0-3.78-.51-5.41-1.47l-.39-.23-3.58.94.96-3.49-.25-.36a9.44 9.44 0 0 1-1.48-5.09c0-5.17 4.32-9.38 9.6-9.38 2.56 0 4.97.98 6.79 2.76a9.02 9.02 0 0 1 2.81 6.62c-.01 5.17-4.32 9.38-9.64 9.38zm5.27-6.98c-.29-.15-1.7-.84-1.96-.94-.26-.1-.45-.15-.64.15-.19.29-.74.94-.91 1.13-.17.19-.34.22-.63.07-.29-.15-1.23-.48-2.34-1.52-.86-.8-1.44-1.79-1.61-2.09-.17-.29-.02-.45.13-.6.13-.13.29-.34.43-.51.15-.17.19-.29.29-.48.1-.19.05-.36-.02-.51-.07-.15-.64-1.54-.88-2.11-.23-.55-.47-.48-.64-.49l-.55-.01c-.19 0-.51.07-.77.36-.26.29-1 1-1 2.44 0 1.44 1.03 2.84 1.17 3.04.15.19 2.03 3.17 4.92 4.33.69.3 1.22.48 1.64.61.69.22 1.32.19 1.82.12.55-.08 1.7-.69 1.94-1.36.24-.67.24-1.25.17-1.36-.07-.11-.26-.18-.55-.33z"></path>' +
            "</svg>";

        var btnText = document.createElement("span");
        btnText.textContent = config.buttonText;

        btn.appendChild(icon);
        btn.appendChild(btnText);

        var popup = document.createElement("div");
        popup.id = "whatsapp-widget-popup";

        var header = document.createElement("div");
        header.id = "whatsapp-widget-header";

        if (config.brandImage) {
            var avatar = document.createElement("img");
            avatar.src = config.brandImage;
            avatar.alt = config.brandName || "WhatsApp";
            header.appendChild(avatar);
        }

        var headerText = document.createElement("div");
        headerText.id = "whatsapp-widget-header-text";

        var headerTitle = document.createElement("p");
        headerTitle.id = "whatsapp-widget-header-title";
        headerTitle.textContent = config.brandName || "WhatsApp";

        var headerSub = document.createElement("p");
        headerSub.id = "whatsapp-widget-header-sub";
        headerSub.textContent = config.brandSubtitle || "Atención por WhatsApp";

        headerText.appendChild(headerTitle);
        headerText.appendChild(headerSub);
        header.appendChild(headerText);

        var closeBtn = document.createElement("button");
        closeBtn.id = "whatsapp-widget-close";
        closeBtn.type = "button";
        closeBtn.innerHTML = "&times;";
        header.appendChild(closeBtn);

        var body = document.createElement("div");
        body.id = "whatsapp-widget-body";

        var welcome = document.createElement("div");
        welcome.id = "whatsapp-widget-welcome";
        welcome.textContent = config.welcomeText || "";

        var textarea = document.createElement("textarea");
        textarea.id = "whatsapp-widget-textarea";
        textarea.placeholder = "Escribe tu mensaje aquí...";
        textarea.value = config.defaultMessage || "";

        body.appendChild(welcome);
        body.appendChild(textarea);

        var footer = document.createElement("div");
        footer.id = "whatsapp-widget-footer";

        var cancelBtn = document.createElement("button");
        cancelBtn.id = "whatsapp-widget-cancel";
        cancelBtn.type = "button";
        cancelBtn.className = "whatsapp-widget-btn";
        cancelBtn.textContent = "Cancelar";

        var sendBtn = document.createElement("button");
        sendBtn.id = "whatsapp-widget-send";
        sendBtn.type = "button";
        sendBtn.className = "whatsapp-widget-btn";
        sendBtn.textContent = "Enviar";

        footer.appendChild(cancelBtn);
        footer.appendChild(sendBtn);

        popup.appendChild(header);
        popup.appendChild(body);
        popup.appendChild(footer);

        container.appendChild(btn);
        container.appendChild(popup);

        root.appendChild(container);

        btn.addEventListener("click", function () {
            var isOpen = popup.classList.contains("open");
            popup.classList.toggle("open", !isOpen);
        });

        closeBtn.addEventListener("click", function () {
            popup.classList.remove("open");
        });

        cancelBtn.addEventListener("click", function () {
            popup.classList.remove("open");
        });

        sendBtn.addEventListener("click", function () {
            var message = textarea.value;
            var url = buildWhatsAppUrl(config, message);
            if (!url) {
                return;
            }
            window.open(url, "_blank"); // en móvil abre la app
            popup.classList.remove("open");
        });

        if (config.autoOpen) {
            popup.classList.add("open");
        }
    }

    function init() {
        var config = getConfig();          // ← mezcla defaults + overrides de la página
        injectStyles(config);
        createWidget(config);
    }

    if (typeof window !== "undefined") {
        if (document.readyState === "loading") {
            document.addEventListener("DOMContentLoaded", init);
        } else {
            init();
        }
    }
})();