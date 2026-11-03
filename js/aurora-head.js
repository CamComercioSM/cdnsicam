/*
 * Aurora Head 1.0.7
 * Instalador temprano: muestra inmediatamente una capa ligera mientras
 * el navegador descarga el bundle SVG/CSS desde el mismo CDN.
 * Usar en HEAD (sin defer ni async) para mostrar durante la carga real.
 */
(function auroraHeadFactory(window, document) {
  'use strict';

  if (!window || !document || window.AuroraEmbed || window.__AuroraHeadBoot) return;

  var source = document.currentScript;
  if (!source || !source.src) return;

  var data = source.dataset || {};
  var active = document.readyState !== 'complete' && data.auto !== 'none';
  var splash = null;
  var style = null;

  function numberInRange(value, fallback, min, max) {
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
    var opacity = numberInRange(data.opacity, 0.78, 0, 1);
    var blur = numberInRange(data.blur, 4, 0, 24);
    style = document.createElement('style');
    style.setAttribute('data-aurora-head-style', '1');
    if (source.nonce) style.nonce = source.nonce;
    style.textContent = [
      '#aurora-head-splash{position:fixed!important;inset:0!important;z-index:2147483001!important;',
      'display:flex!important;align-items:center!important;justify-content:center!important;',
      'flex-direction:column!important;gap:16px!important;padding:24px!important;',
      'font-family:Arial,sans-serif!important;color:#163047!important;text-align:center!important;',
      'background:rgba(255,255,255,var(--aurora-head-opacity,.78))!important;',
      '-webkit-backdrop-filter:blur(var(--aurora-head-blur,4px));backdrop-filter:blur(var(--aurora-head-blur,4px));}',
      '#aurora-head-splash .aurora-head-wheel{width:60px;height:60px;border-radius:50%;',
      'border:5px solid rgba(36,184,242,.15);border-top-color:#e2b82b;border-right-color:#2f5497;',
      'border-bottom-color:#8cad33;border-left-color:#a33d2b;',
      'animation:aurora-head-spin .85s linear infinite}',
      '#aurora-head-splash .aurora-head-message{font-size:16px;font-weight:650;letter-spacing:.025em}',
      '@keyframes aurora-head-spin{to{transform:rotate(360deg)}}',
      '@media(prefers-reduced-motion:reduce){#aurora-head-splash .aurora-head-wheel{animation:none}}'
    ].join('');
    (document.head || document.documentElement).appendChild(style);

    splash = document.createElement('div');
    splash.id = 'aurora-head-splash';
    splash.setAttribute('role', 'status');
    splash.setAttribute('aria-label', data.message || 'Cargando informacion');
    splash.style.setProperty('--aurora-head-opacity', String(opacity));
    splash.style.setProperty('--aurora-head-blur', String(blur) + 'px');

    var wheel = document.createElement('div');
    wheel.className = 'aurora-head-wheel';
    wheel.setAttribute('aria-hidden', 'true');
    var message = document.createElement('span');
    message.className = 'aurora-head-message';
    message.textContent = data.message || 'Cargando informacion';
    splash.appendChild(wheel);
    splash.appendChild(message);
    document.documentElement.appendChild(splash);
  }

  window.__AuroraHeadBoot = {
    version: '1.0.7',
    hide: removeSplash,
    startedAt: window.performance ? window.performance.now() : Date.now()
  };

  var embed = document.createElement('script');
  var url = new window.URL(source.src, document.baseURI);
  url.pathname = url.pathname.replace(/aurora-head\.js$/, 'aurora-embed.js');
  if (url.pathname === new window.URL(source.src, document.baseURI).pathname) {
    removeSplash();
    return;
  }
  embed.src = url.href;
  embed.async = true;
  Array.prototype.forEach.call(source.attributes, function copyDataAttribute(attribute) {
    if (attribute.name.slice(0, 5) === 'data-') embed.setAttribute(attribute.name, attribute.value);
  });
  if (!embed.hasAttribute('data-auto')) embed.setAttribute('data-auto', 'all');
  if (!embed.hasAttribute('data-theme')) embed.setAttribute('data-theme', 'light');
  if (source.nonce) embed.nonce = source.nonce;

  embed.onerror = function onLoadError() {
    removeSplash();
    if (window.console && window.console.error) window.console.error('Aurora Head: no se pudo descargar el bundle desde el CDN.');
  };
  embed.onload = function onLoad() {
    if (!window.AuroraEmbed) removeSplash();
  };

  (document.head || document.documentElement).appendChild(embed);

  // Nunca mantener la capa ligera si se interrumpe la descarga del CDN.
  window.setTimeout(function cleanupOrphanSplash() {
    if (!window.AuroraEmbed) removeSplash();
  }, 15000);
  window.addEventListener('pagehide', removeSplash, { once: true });
})(window, document);
