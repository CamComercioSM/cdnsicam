/*
 * Aurora Web 1.0.8 (edicion exclusiva para paginas web)
 * Solo presenta la mariposa SVG original animada y el mensaje.
 * Reutiliza el motor existente sin modificarlo.
 * Debe cargarse en HEAD, sin defer ni async.
 */
(function auroraWebFactory(window, document) {
  'use strict';

  if (!window || !document || window.AuroraEmbed || window.__AuroraHeadBoot) return;

  var source = document.currentScript;
  if (!source || !source.src) return;
  var data = source.dataset || {};
  var active = document.readyState !== 'complete' && data.auto !== 'none';
  var splash = null;
  var style = null;

  // La variante web tiene estilos propios y no modifica ningun otro archivo.
  // El motor sigue gestionando el progreso, la entrada, el aleteo, la orbita y el cierre.
  document.documentElement.setAttribute('data-aurora-web-only', '1');
  var webStyle = document.createElement('style');
  webStyle.setAttribute('data-aurora-web-only-style', '1');
  if (source.nonce) webStyle.nonce = source.nonce;
  webStyle.textContent = [
    'html[data-aurora-web-only="1"] .sil-loader .sil-loader__ambient,',
    'html[data-aurora-web-only="1"] .sil-loader .sil-loader__noise,',
    'html[data-aurora-web-only="1"] .sil-loader .sil-loader__canvas,',
    'html[data-aurora-web-only="1"] .sil-loader .sil-orbit-svg,',
    'html[data-aurora-web-only="1"] .sil-loader .sil-pearl-ring,',
    'html[data-aurora-web-only="1"] .sil-loader .sil-core,',
    'html[data-aurora-web-only="1"] .sil-loader .sil-progress,',
    'html[data-aurora-web-only="1"] .sil-loader .sil-copy__eyebrow,',
    'html[data-aurora-web-only="1"] .sil-loader .sil-copy__detail,',
    'html[data-aurora-web-only="1"] .sil-loader .sil-copy__hint',
    '{display:none!important}',
    'html[data-aurora-web-only="1"] .sil-loader .sil-stage::before,',
    'html[data-aurora-web-only="1"] .sil-loader .sil-stage::after',
    '{display:none!important;content:none!important}',
    'html[data-aurora-web-only="1"] .sil-loader .sil-copy__message',
    '{font-weight:650;letter-spacing:-.025em}',
    'html[data-aurora-web-only="1"] .sil-loader .sil-loader__content',
    '{gap:0!important}'
  ].join('');
  (document.head || document.documentElement).appendChild(webStyle);


  function range(value, fallback, min, max) {
    var numeric = Number(value);
    return Number.isFinite(numeric) ? Math.max(min, Math.min(max, numeric)) : fallback;
  }

  function removeSplash() {
    if (splash && splash.parentNode) splash.parentNode.removeChild(splash);
    if (style && style.parentNode) style.parentNode.removeChild(style);
    splash = null;
    style = null;
  }

  if (active) {
    var opacity = range(data.opacity, 0.78, 0, 1);
    var blur = range(data.blur, 4, 0, 24);
    style = document.createElement('style');
    style.setAttribute('data-aurora-head-style', '1');
    if (source.nonce) style.nonce = source.nonce;
    style.textContent = [
      '#aurora-head-splash{position:fixed!important;inset:0!important;z-index:2147483001!important;',
      'display:flex!important;align-items:center!important;justify-content:center!important;',
      'flex-direction:column!important;gap:14px!important;padding:24px!important;',
      'font-family:Arial,sans-serif!important;color:#163047!important;text-align:center!important;',
      'background:rgba(255,255,255,var(--aurora-head-opacity,.78))!important;',
      '-webkit-backdrop-filter:blur(var(--aurora-head-blur,4px));backdrop-filter:blur(var(--aurora-head-blur,4px));}',
      '#aurora-head-splash .aurora-head-butterfly{display:block;width:108px;height:106px;overflow:visible;',
      'filter:drop-shadow(0 8px 13px rgba(0,0,0,.12));',
      'animation:aurora-head-hover 2s ease-in-out infinite alternate}',
      '#aurora-head-splash .aurora-head-wing-left,#aurora-head-splash .aurora-head-wing-right{transform-box:view-box}',
      '#aurora-head-splash .aurora-head-wing-left{transform-origin:52% 87%;',
      'animation:aurora-head-flap-left .26s ease-in-out infinite alternate}',
      '#aurora-head-splash .aurora-head-wing-right{transform-origin:58% 87%;',
      'animation:aurora-head-flap-right .26s ease-in-out infinite alternate}',
      '#aurora-head-splash .aurora-head-message{font-size:16px;font-weight:650;letter-spacing:.025em}',
      '@keyframes aurora-head-hover{from{transform:translateY(4px)}to{transform:translateY(-5px)}}',
      '@keyframes aurora-head-flap-left{from{transform:scaleX(1) rotate(-1deg)}to{transform:scaleX(.46) rotate(4deg)}}',
      '@keyframes aurora-head-flap-right{from{transform:scaleX(1) rotate(1deg)}to{transform:scaleX(.46) rotate(-4deg)}}',
      '@media(prefers-reduced-motion:reduce){#aurora-head-splash:not([data-motion="essential"]) .aurora-head-butterfly,',
      '#aurora-head-splash:not([data-motion="essential"]) .aurora-head-wing-left,#aurora-head-splash:not([data-motion="essential"]) .aurora-head-wing-right{animation:none}}'
    ].join('');
    (document.head || document.documentElement).appendChild(style);

    splash = document.createElement('div');
    splash.id = 'aurora-head-splash';
    splash.setAttribute('role', 'status');
    splash.setAttribute('aria-label', data.message || 'Cargando informacion');
    if (data.motion === 'essential') splash.setAttribute('data-motion', 'essential');
    splash.style.setProperty('--aurora-head-opacity', String(opacity));
    splash.style.setProperty('--aurora-head-blur', String(blur) + 'px');

    var butterfly = document.createElement('div');
    butterfly.className = 'aurora-head-butterfly-container';
    butterfly.innerHTML = "<svg class=\"aurora-head-butterfly\" viewBox=\"0 0 1041.64 1012.85\" aria-hidden=\"true\" xmlns=\"http://www.w3.org/2000/svg\"><defs><linearGradient id=\"aurora-head-gradient-16\" x1=\"892.22\" y1=\"972.7\" x2=\"723.97\" y2=\"842.7\" gradientUnits=\"userSpaceOnUse\">\r\n      <stop offset=\"0\" stop-color=\"#942c1e\"/>\r\n      <stop offset=\"1\" stop-color=\"#6a281b\"/>\r\n    </linearGradient><linearGradient id=\"aurora-head-gradient-18\" x1=\"712.06\" y1=\"572.41\" x2=\"995.2\" y2=\"328.59\" gradientUnits=\"userSpaceOnUse\">\r\n      <stop offset=\"0\" stop-color=\"#dc9a2b\"/>\r\n      <stop offset=\".72\" stop-color=\"#ebc22f\"/>\r\n    </linearGradient><linearGradient id=\"aurora-head-gradient-8\" x1=\"68.64\" y1=\"888.62\" x2=\"202.47\" y2=\"808.32\" gradientUnits=\"userSpaceOnUse\">\r\n      <stop offset=\"0\" stop-color=\"#30579c\"/>\r\n      <stop offset=\"1\" stop-color=\"#1c3f85\"/>\r\n    </linearGradient><linearGradient id=\"aurora-head-gradient-17\" x1=\"219.56\" y1=\"44.15\" x2=\"498.77\" y2=\"864.09\" gradientUnits=\"userSpaceOnUse\">\r\n      <stop offset=\".36\" stop-color=\"#a5be32\"/>\r\n      <stop offset=\".84\" stop-color=\"#84a434\"/>\r\n    </linearGradient></defs><g class=\"aurora-head-wing-right\"><path fill=\"url(#aurora-head-gradient-16)\" d=\"M862.71,983.98c-53.22,53.71-166.17,30.08-264.16-50.97v-.04c-6.59-10.71-36.23-76.27,151.39-174.13,19.95-10.4,40.13-22.96,59.95-37.29,81.4,96.89,105.78,208.91,52.82,262.44Z\"/><path fill=\"url(#aurora-head-gradient-18)\" d=\"M809.89,721.54c-19.82,14.33-39.99,26.9-59.95,37.29-187.63,97.86-157.99,163.43-151.39,174.13v.04c.49.75.84,1.24.97,1.46-1.86-1.46-32.12-25.44-64.77-63.35.44-.31.8-.62,1.19-.97,49.11-39.15,93.44-90.47,112.77-155.38,10.09-33.89,14.6-70.21,14.51-107.9-.13-71.18-16.77-147.1-43.27-219.83,135.07-123.88,314.42-195.72,392.64-102.6,91.14,108.57-47.65,325.44-202.71,437.1Z\"/></g><g class=\"aurora-head-wing-left\"><path fill=\"url(#aurora-head-gradient-8)\" d=\"M335.27,941.77s-.04.05-.04.05c-148.38,49.81-288.58,27.07-325.92-58.18-37.21-84.9,40.35-202.71,176.52-278.1,16.55,25.26,34.11,48.62,52.43,69.41,172.05,195.02,109.41,257.31,97.02,266.82Z\"/><path fill=\"url(#aurora-head-gradient-17)\" d=\"M632.44,601.73s-.04-.13,0-.22c-.04-2.26-.09-4.56-.18-6.9v-.53c-.09-1.77-.13-3.5-.22-5.26,0-.27,0-.53-.04-.8-.27-5.53-.62-11.06-1.02-16.59-.27-3.36-.57-6.72-.93-10.13-.31-3.14-.62-6.28-1.02-9.47-.13-1.37-.31-2.7-.49-4.07v-.04c-.27-2.21-.58-4.42-.84-6.64-.04-.05-.04-.13-.04-.18-.88-6.68-1.9-13.32-3.05-19.95v-.04c-1.15-6.42-2.34-12.83-3.63-19.25-.04-.04,0-.09,0-.09-1.73-8.32-3.58-16.59-5.62-24.86-.18-.75-.35-1.5-.58-2.26-1.37-5.57-2.83-11.1-4.34-16.72-.13-.53-.27-1.02-.4-1.55-3.63-13.14-7.65-26.19-11.94-39.15-.75-2.26-1.5-4.56-2.3-6.81-.75-2.17-1.5-4.29-2.26-6.46-.84-2.34-1.68-4.69-2.52-7.04-.09-.35-.22-.66-.35-1.02-2.96-8.14-6.06-16.19-9.25-24.2-9.51-23.8-20.04-47.2-31.59-70.08-2.08-4.2-4.25-8.32-6.42-12.43-49.15-89.28-109.59-180.46-192.45-239.34-.13-.09-.31-.22-.44-.31-26.63-18.85-55.61-34.38-87.24-45.44C-33.66-45.38,36.16,384.16,185.82,605.54c16.55,25.26,34.11,48.62,52.43,69.41,172.05,195.02,109.41,257.31,97.02,266.82,0,.05-.04.05-.04.05-.97.71-1.64,1.15-1.81,1.24,3.23-.97,100.21-31.1,182.05-95.83.62-.44,1.24-.93,1.86-1.46,76.01-55.48,121-148.69,115.12-244.03ZM363.63,59.34c6.02,4.74,11.94,9.73,17.87,15-5.93-5.22-11.86-10.22-17.87-15Z\"/></g></svg>";
    var message = document.createElement('span');
    message.className = 'aurora-head-message';
    message.textContent = data.message || 'Cargando informacion';
    splash.appendChild(butterfly);
    splash.appendChild(message);
    document.documentElement.appendChild(splash);
  }

  window.__AuroraHeadBoot = {
    version: '1.0.8-web',
    hide: removeSplash,
    startedAt: window.performance ? window.performance.now() : Date.now()
  };

  var embed = document.createElement('script');
  var originalURL = new window.URL(source.src, document.baseURI);
  var url = new window.URL(originalURL.href);
  url.pathname = url.pathname.replace(/aurora-web\.js$/, 'aurora-embed.js');
  if (url.pathname === originalURL.pathname) {
    removeSplash();
    return;
  }
  embed.src = url.href;
  embed.async = true;
  Array.prototype.forEach.call(source.attributes, function (attribute) {
    if (attribute.name.slice(0, 5) === 'data-') embed.setAttribute(attribute.name, attribute.value);
  });
  if (!embed.hasAttribute('data-auto')) embed.setAttribute('data-auto', 'all');
  if (!embed.hasAttribute('data-theme')) embed.setAttribute('data-theme', 'light');
  if (source.nonce) embed.nonce = source.nonce;

  embed.onerror = function () {
    removeSplash();
    if (window.console && window.console.error) window.console.error('Aurora Web: no se pudo descargar la animacion.');
  };
  embed.onload = function () {
    if (!window.AuroraEmbed) removeSplash();
  };
  (document.head || document.documentElement).appendChild(embed);

  window.setTimeout(function () {
    if (!window.AuroraEmbed) removeSplash();
  }, 15000);
  window.addEventListener('pagehide', removeSplash, { once: true });
})(window, document);
