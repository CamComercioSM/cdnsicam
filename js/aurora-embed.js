/* Aurora Embed - template para generar un unico archivo instalable.
 * Los marcadores @AURORA_*@ son sustituidos por scripts/build-embed.cjs.
 */
(function auroraEmbedFactory(window, document) {
  'use strict';
  if (!window || !document || window.AuroraEmbed) return;
  if (window.SystemLoader) {
    if (window.console && window.console.warn) window.console.warn('Aurora Embed: SystemLoader ya existe; se omite la instalacion duplicada.');
    return;
  }

  var installScript = document.currentScript;
  var bundledCSS = "/* Aurora System Loader v1.0.5\r\n * Movimiento desacoplado: entrada + aleteo + orbita continua.\r\n */\r\n:root {\r\n  --sil-primary:#24b8f2;\r\n  --sil-primary-rgb:36,184,242;\r\n  --sil-accent:#ffc52f;\r\n  --sil-accent-rgb:255,197,47;\r\n  --sil-background:#02070e;\r\n  --sil-background-rgb:2,7,14;\r\n  --sil-text:#f8fbff;\r\n  --sil-muted:#aab8c7;\r\n  --sil-z-index:2147483000;\r\n  --sil-font:Inter,ui-sans-serif,-apple-system,BlinkMacSystemFont,\"Segoe UI\",Roboto,Helvetica,Arial,sans-serif;\r\n}\r\nhtml.sil-lock-scroll,html.sil-lock-scroll body{overflow:hidden!important}\r\n.sil-loader,.sil-loader *,.sil-loader *::before,.sil-loader *::after{box-sizing:border-box}\r\n.sil-loader{\r\n  position:fixed;inset:0;z-index:var(--sil-z-index);display:grid;place-items:center;\r\n  min-width:100%;min-height:100%;overflow:hidden;isolation:isolate;font-family:var(--sil-font);\r\n  color:var(--sil-text);background:\r\n  radial-gradient(circle at 50% 42%,rgba(var(--sil-primary-rgb),.13),transparent 31rem),\r\n  radial-gradient(circle at 16% 18%,rgba(var(--sil-accent-rgb),.08),transparent 24rem),\r\n  linear-gradient(150deg,rgba(var(--sil-background-rgb),.98),rgba(0,3,8,.995));\r\n  opacity:0;visibility:hidden;pointer-events:none;transition:opacity .28s ease,visibility .28s ease;\r\n  -webkit-font-smoothing:antialiased;text-rendering:optimizeLegibility\r\n}\r\n.sil-loader[data-theme=\"light\"]{--sil-text:#102033;--sil-muted:#5e6f80;--sil-background-rgb:246,250,254;background:radial-gradient(circle at 50% 42%,rgba(var(--sil-primary-rgb),.14),transparent 31rem),radial-gradient(circle at 16% 18%,rgba(var(--sil-accent-rgb),.12),transparent 24rem),linear-gradient(150deg,rgba(249,252,255,.98),rgba(235,244,251,.995))}\r\n.sil-loader[data-mode=\"inline\"]{position:absolute;min-width:0;min-height:0;border-radius:inherit}\r\n.sil-loader.sil-visible{opacity:1;visibility:visible;pointer-events:auto}\r\n.sil-loader.sil-closing{opacity:0;pointer-events:none}\r\n.sil-loader__ambient,.sil-loader__canvas,.sil-loader__noise{position:absolute;inset:0;width:100%;height:100%;pointer-events:none}\r\n.sil-loader__ambient{z-index:-3;overflow:hidden}\r\n.sil-loader__ambient::before,.sil-loader__ambient::after{position:absolute;width:min(58vw,48rem);aspect-ratio:1;content:\"\";border-radius:50%;filter:blur(70px);opacity:.22}\r\n.sil-loader__ambient::before{top:-30%;left:-16%;background:rgba(var(--sil-primary-rgb),.28)}\r\n.sil-loader__ambient::after{right:-20%;bottom:-36%;background:rgba(var(--sil-accent-rgb),.20)}\r\n.sil-running .sil-loader__ambient::before,.sil-running .sil-loader__ambient::after{animation:sil-aurora 9s ease-in-out infinite alternate}\r\n.sil-running .sil-loader__ambient::after{animation-delay:-4s}\r\n.sil-loader__noise{z-index:-2;opacity:.16;background-image:radial-gradient(circle at 12% 20%,rgba(255,255,255,.7) 0 .6px,transparent .9px),radial-gradient(circle at 82% 32%,rgba(255,255,255,.55) 0 .65px,transparent 1px),radial-gradient(circle at 44% 78%,rgba(255,255,255,.5) 0 .55px,transparent .95px);background-size:79px 83px,103px 107px,137px 131px}\r\n.sil-running .sil-loader__noise{animation:sil-stars-drift 28s linear infinite}\r\n.sil-loader__canvas{z-index:-1}\r\n.sil-loader__content{display:flex;flex-direction:column;align-items:center;width:min(92vw,42rem);padding:clamp(1.25rem,4vw,2.5rem);text-align:center;transform:translateY(.5rem) scale(.985);opacity:0;transition:transform .42s cubic-bezier(.2,.8,.2,1),opacity .32s ease}\r\n.sil-visible .sil-loader__content{transform:translateY(0) scale(1);opacity:1}\r\n.sil-stage{position:relative;width:clamp(14.25rem,36vw,18.5rem);aspect-ratio:1;flex:none;margin-bottom:clamp(.9rem,3vw,1.4rem);filter:drop-shadow(0 1.2rem 2.8rem rgba(0,0,0,.32))}\r\n.sil-stage::before,.sil-stage::after{position:absolute;inset:15%;z-index:-1;content:\"\";border-radius:50%;background:radial-gradient(circle,rgba(var(--sil-primary-rgb),.11),transparent 67%);opacity:0;transform:scale(.7)}\r\n.sil-stage::after{inset:26%;background:radial-gradient(circle,rgba(var(--sil-accent-rgb),.13),transparent 70%)}\r\n.sil-running .sil-stage::before,.sil-running .sil-stage::after{animation:sil-halo-breathe 3.2s ease-in-out 1.25s infinite}\r\n.sil-running .sil-stage::after{animation-delay:2s}\r\n.sil-orbit-svg{position:absolute;inset:4%;width:92%;height:92%;overflow:visible;opacity:0;transform:scale(.72) rotate(-36deg);transition:opacity .5s ease 1.1s,transform .85s cubic-bezier(.16,.84,.28,1) 1.05s}\r\n.sil-running .sil-orbit-svg{opacity:1;transform:scale(1) rotate(0)}\r\n.sil-orbit-svg .sil-stream{fill:none;stroke-linecap:round;transform-box:view-box;transform-origin:center}\r\n.sil-orbit-svg .sil-stream--a{stroke-width:2.8;stroke-dasharray:36 18 9 23}\r\n.sil-orbit-svg .sil-stream--b{stroke-width:1.75;stroke-dasharray:58 24 12 31}\r\n.sil-orbit-svg .sil-stream--c{stroke:rgba(255,255,255,.64);stroke-width:1.1;stroke-dasharray:7 18 29 12}\r\n.sil-orbit-svg .sil-stream--d{stroke:rgba(var(--sil-primary-rgb),.42);stroke-width:.9;stroke-dasharray:2 11}\r\n.sil-running .sil-stream--a{animation:sil-stream-spin 4.8s linear infinite}\r\n.sil-running .sil-stream--b{animation:sil-stream-spin-reverse 6.3s linear infinite}\r\n.sil-running .sil-stream--c{animation:sil-stream-spin 7.9s linear infinite}\r\n.sil-running .sil-stream--d{animation:sil-stream-spin-reverse 10s linear infinite}\r\n.sil-pearl-ring{position:absolute;inset:0;transform-origin:50% 50%}\r\n.sil-running .sil-pearl-ring{animation:sil-ring-spin 5.8s linear 2.35s infinite}\r\n.sil-pearl{position:absolute;top:50%;left:50%;width:clamp(.7rem,2vw,.94rem);aspect-ratio:1;border:1px solid rgba(255,255,255,.78);border-radius:50%;background:radial-gradient(circle at 35% 28%,#fff 0 15%,#f7fbff 18%,#dce8f0 43%,#aebdcc 68%,#f9fdff 100%);box-shadow:0 0 .38rem .1rem rgba(255,255,255,.76),0 0 .9rem .22rem rgba(var(--sil-primary-rgb),.23),inset -.12rem -.16rem .22rem rgba(55,78,98,.23);opacity:0;transform:translate(var(--sil-start-x),var(--sil-start-y)) translate(-50%,-50%) scale(.12)}\r\n.sil-running .sil-pearl{animation:sil-pearl-arrive .92s cubic-bezier(.18,.78,.22,1) var(--sil-delay) forwards}\r\n.sil-pearl::after{position:absolute;top:18%;left:22%;width:28%;aspect-ratio:1;content:\"\";border-radius:50%;background:rgba(255,255,255,.95);filter:blur(.3px)}\r\n\r\n/* El contenedor gira. La mariposa no necesita compartir ese transform. */\r\n.sil-butterfly-flight{position:absolute;inset:0;z-index:5;pointer-events:none;transform-origin:50% 50%;will-change:transform}\r\n.sil-running .sil-butterfly-flight{animation:sil-butterfly-orbit 5.6s linear 2.42s infinite}\r\n.sil-butterfly{position:absolute;top:50%;left:50%;width:clamp(4rem,10vw,5.15rem);height:auto;overflow:visible;opacity:0;filter:drop-shadow(0 .2rem .32rem rgba(0,0,0,.45)) drop-shadow(0 0 .7rem rgba(var(--sil-accent-rgb),.18));transform-origin:50% 55%;will-change:transform}\r\n.sil-running .sil-butterfly{animation:sil-butterfly-enter 2.28s cubic-bezier(.22,.72,.19,1) .08s forwards}\r\n.sil-butterfly .sil-wing-left,.sil-butterfly .sil-wing-right{transform-box:view-box}\r\n.sil-butterfly .sil-wing-left{transform-origin:52% 87%}\r\n.sil-butterfly .sil-wing-right{transform-origin:58% 87%}\r\n.sil-running .sil-butterfly .sil-wing-left{animation:sil-wing-flap-left .32s ease-in-out infinite alternate}\r\n.sil-running .sil-butterfly .sil-wing-right{animation:sil-wing-flap-right .32s ease-in-out infinite alternate}\r\n\r\n.sil-core{position:absolute;top:50%;left:50%;z-index:3;display:grid;place-items:center;width:4.4rem;aspect-ratio:1;border-radius:50%;opacity:0;transform:translate(-50%,-50%) scale(.35)}\r\n.sil-running .sil-core{animation:sil-core-arrive .7s cubic-bezier(.2,.9,.2,1) 1.66s forwards}\r\n.sil-core::before,.sil-core::after{position:absolute;inset:0;content:\"\";border:1px solid rgba(255,255,255,.15);border-radius:50%;background:radial-gradient(circle,rgba(255,255,255,.18),rgba(var(--sil-primary-rgb),.08) 42%,transparent 72%);box-shadow:0 0 1.3rem rgba(var(--sil-primary-rgb),.14)}\r\n.sil-core::after{inset:18%;border-color:rgba(var(--sil-accent-rgb),.16)}\r\n.sil-running .sil-core::before,.sil-running .sil-core::after{animation:sil-core-pulse 2.3s ease-out infinite}\r\n.sil-running .sil-core::after{animation-delay:-1.15s}\r\n.sil-core__spark{position:relative;width:.66rem;aspect-ratio:1;border-radius:50%;background:#fff;box-shadow:0 0 .38rem .12rem #fff,0 0 1.2rem .34rem rgba(var(--sil-primary-rgb),.55),0 0 1.8rem .46rem rgba(var(--sil-accent-rgb),.25)}\r\n.sil-running .sil-core__spark{animation:sil-spark-breathe 1.2s ease-in-out infinite alternate}\r\n.sil-core__percent{position:relative;display:none;font-size:.82rem;font-weight:700;font-variant-numeric:tabular-nums;letter-spacing:-.03em;color:var(--sil-text);text-shadow:0 0 .7rem rgba(var(--sil-primary-rgb),.5)}\r\n.sil-loader.sil-determinate .sil-core__spark{display:none}\r\n.sil-loader.sil-determinate .sil-core__percent{display:block}\r\n.sil-core__check{position:relative;display:none;width:2rem;height:2rem;fill:none;stroke:#fff;stroke-width:2.6;stroke-linecap:round;stroke-linejoin:round;filter:drop-shadow(0 0 .5rem rgba(255,255,255,.55))}\r\n.sil-core__check path{stroke-dasharray:28;stroke-dashoffset:28}\r\n.sil-copy{position:relative;z-index:2;display:flex;flex-direction:column;align-items:center;width:min(100%,35rem)}\r\n.sil-copy__eyebrow{min-height:1.05rem;margin:0 0 .52rem;font-size:clamp(.68rem,2vw,.76rem);font-weight:700;line-height:1.2;letter-spacing:.15em;text-transform:uppercase;color:var(--sil-accent);opacity:.92}\r\n.sil-copy__message{max-width:100%;min-height:2rem;margin:0;font-size:clamp(1.28rem,4.5vw,1.86rem);font-weight:660;line-height:1.18;letter-spacing:-.035em;color:var(--sil-text);text-wrap:balance}\r\n.sil-copy__dots{display:inline-flex;width:1.08em;justify-content:flex-start;overflow:hidden;vertical-align:baseline}\r\n.sil-copy__dots::after{content:\"...\"}\r\n.sil-running .sil-copy__dots::after{animation:sil-ellipsis 1.35s steps(4,end) infinite}\r\n.sil-copy__detail{max-width:32rem;min-height:1.35rem;margin:.58rem 0 0;font-size:clamp(.83rem,2.5vw,.96rem);font-weight:400;line-height:1.55;color:var(--sil-muted);text-wrap:balance}\r\n.sil-progress{position:relative;width:min(17rem,72vw);height:.24rem;margin-top:1.18rem;overflow:hidden;border-radius:999px;background:rgba(255,255,255,.1);box-shadow:inset 0 1px 1px rgba(0,0,0,.35)}\r\n.sil-loader[data-theme=\"light\"] .sil-progress{background:rgba(26,63,89,.13)}\r\n.sil-progress__bar{position:absolute;inset:0 auto 0 0;width:var(--sil-progress,0%);border-radius:inherit;background:linear-gradient(90deg,var(--sil-primary),#eafaff 52%,var(--sil-accent));box-shadow:0 0 .75rem rgba(var(--sil-primary-rgb),.58);transition:width .42s cubic-bezier(.2,.8,.2,1)}\r\n.sil-loader:not(.sil-determinate) .sil-progress__bar{width:42%}\r\n.sil-running:not(.sil-determinate) .sil-progress__bar{animation:sil-progress-indeterminate 1.45s cubic-bezier(.65,0,.35,1) infinite}\r\n.sil-copy__hint{min-height:1rem;margin:.72rem 0 0;font-size:.7rem;line-height:1.4;letter-spacing:.025em;color:rgba(170,184,199,.66)}\r\n\r\n.sil-loader.sil-success .sil-butterfly-flight{animation:none}\r\n.sil-loader.sil-success .sil-pearl-ring{animation:sil-ring-success .9s cubic-bezier(.12,.82,.18,1) forwards}\r\n.sil-loader.sil-success .sil-orbit-svg{opacity:0;transform:scale(1.4) rotate(110deg);transition:opacity .5s ease,transform .85s cubic-bezier(.16,.84,.28,1)}\r\n.sil-loader.sil-success .sil-butterfly{animation:sil-butterfly-exit .73s cubic-bezier(.3,.7,.25,1) forwards}\r\n.sil-loader.sil-success .sil-core{animation:sil-core-success .6s cubic-bezier(.17,.88,.28,1) forwards}\r\n.sil-loader.sil-success .sil-core::before,.sil-loader.sil-success .sil-core::after,.sil-loader.sil-success .sil-core__spark,.sil-loader.sil-success .sil-core__percent{display:none}\r\n.sil-loader.sil-success .sil-core__check{display:block}\r\n.sil-loader.sil-success .sil-core__check path{animation:sil-check-draw .42s ease .16s forwards}\r\n.sil-loader.sil-success .sil-copy__eyebrow{color:var(--sil-primary)}\r\n.sil-loader.sil-success .sil-copy__dots,.sil-loader.sil-success .sil-progress,.sil-loader.sil-success .sil-copy__hint{display:none}\r\n.sil-loader.sil-error{--sil-primary:#ff6b6b;--sil-primary-rgb:255,107,107;--sil-accent:#ffb45c;--sil-accent-rgb:255,180,92}\r\n.sil-loader.sil-error .sil-copy__dots,.sil-loader.sil-error .sil-progress{display:none}\r\n.sil-loader.sil-error .sil-butterfly-flight,.sil-loader.sil-error .sil-butterfly{animation-play-state:paused}\r\n\r\n@keyframes sil-aurora{0%{transform:translate3d(-3%,-2%,0) scale(.92)}100%{transform:translate3d(7%,8%,0) scale(1.12)}}\r\n@keyframes sil-stars-drift{to{background-position:79px 83px,-103px 107px,137px -131px}}\r\n@keyframes sil-halo-breathe{0%,100%{opacity:.18;transform:scale(.78)}50%{opacity:.52;transform:scale(1.12)}}\r\n@keyframes sil-stream-spin{from{transform:rotate(var(--sil-stream-rotation,0deg))}to{transform:rotate(calc(var(--sil-stream-rotation,0deg) + 360deg));stroke-dashoffset:-145}}\r\n@keyframes sil-stream-spin-reverse{from{transform:rotate(var(--sil-stream-rotation,0deg))}to{transform:rotate(calc(var(--sil-stream-rotation,0deg) - 360deg));stroke-dashoffset:126}}\r\n@keyframes sil-ring-spin{to{transform:rotate(360deg)}}\r\n@keyframes sil-pearl-arrive{0%{opacity:0;transform:translate(var(--sil-start-x),var(--sil-start-y)) translate(-50%,-50%) scale(.12)}18%{opacity:1}58%{transform:translate(var(--sil-mid-x),var(--sil-mid-y)) translate(-50%,-50%) scale(1.13)}100%{opacity:1;transform:translate(var(--sil-end-x),var(--sil-end-y)) translate(-50%,-50%) scale(1)}}\r\n@keyframes sil-butterfly-enter{0%{opacity:0;transform:translate(-10.5rem,-6.8rem) rotate(-14deg) scale(.5)}10%{opacity:1}28%{transform:translate(-7.1rem,-4.4rem) rotate(7deg) scale(.72)}52%{transform:translate(-2.7rem,-5.8rem) rotate(-9deg) scale(.86)}73%{transform:translate(3.9rem,-4.2rem) rotate(8deg) scale(.8)}88%{transform:translate(2rem,-6.1rem) rotate(-8deg) scale(.74)}100%{opacity:1;transform:translate(-.1rem,-6.95rem) rotate(4deg) scale(.72)}}\r\n@keyframes sil-butterfly-orbit{from{transform:rotate(0deg)}to{transform:rotate(360deg)}}\r\n@keyframes sil-wing-flap-left{0%{transform:scaleX(1) rotate(-1deg)}100%{transform:scaleX(.70) rotate(3deg)}}\r\n@keyframes sil-wing-flap-right{0%{transform:scaleX(1) rotate(1deg)}100%{transform:scaleX(.70) rotate(-3deg)}}\r\n@keyframes sil-core-arrive{to{opacity:1;transform:translate(-50%,-50%) scale(1)}}\r\n@keyframes sil-core-pulse{0%{opacity:.54;transform:scale(.56)}70%,100%{opacity:0;transform:scale(1.32)}}\r\n@keyframes sil-spark-breathe{to{transform:scale(1.35);opacity:.84}}\r\n@keyframes sil-ellipsis{0%{clip-path:inset(0 100% 0 0)}100%{clip-path:inset(0 0 0 0)}}\r\n@keyframes sil-progress-indeterminate{0%{transform:translateX(-125%) scaleX(.55)}50%{transform:translateX(85%) scaleX(1)}100%{transform:translateX(255%) scaleX(.55)}}\r\n@keyframes sil-ring-success{0%{transform:rotate(0) scale(1);opacity:1}48%{transform:rotate(125deg) scale(.62);opacity:1}100%{transform:rotate(240deg) scale(1.78);opacity:0}}\r\n@keyframes sil-butterfly-exit{0%{opacity:1;transform:translate(-.1rem,-6.95rem) rotate(4deg) scale(.72)}100%{opacity:0;transform:translate(8.5rem,-10.5rem) rotate(17deg) scale(.45)}}\r\n@keyframes sil-core-success{0%{opacity:1;transform:translate(-50%,-50%) scale(.55);background:rgba(var(--sil-primary-rgb),.08)}56%{transform:translate(-50%,-50%) scale(1.22)}100%{opacity:1;transform:translate(-50%,-50%) scale(1);background:linear-gradient(145deg,rgba(var(--sil-primary-rgb),.98),rgba(var(--sil-accent-rgb),.92));box-shadow:0 0 2.1rem rgba(var(--sil-primary-rgb),.42),0 0 3.5rem rgba(var(--sil-accent-rgb),.16)}}\r\n@keyframes sil-check-draw{to{stroke-dashoffset:0}}\r\n@media(max-width:420px){.sil-loader__content{width:100%;padding-inline:1.15rem}.sil-stage{width:min(71vw,15.5rem)}.sil-copy__detail{max-width:21rem}}\r\n@media(prefers-reduced-motion:reduce){.sil-loader,.sil-loader *,.sil-loader *::before,.sil-loader *::after{animation-duration:1ms!important;animation-delay:0ms!important;animation-iteration-count:1!important;transition-duration:1ms!important}.sil-butterfly-flight{animation:none!important;transform:none!important}.sil-running .sil-pearl{opacity:1;transform:translate(var(--sil-end-x),var(--sil-end-y)) translate(-50%,-50%) scale(1)}.sil-running .sil-butterfly{opacity:1;transform:translate(-.1rem,-6.95rem) rotate(4deg) scale(.72)}.sil-running .sil-orbit-svg{opacity:1;transform:scale(1)}.sil-running .sil-core{opacity:1;transform:translate(-50%,-50%) scale(1)}}\r\n\n/* Aurora System Loader - Camara 4.0 identity layer\r\n * Capa estrictamente aditiva: no reemplaza ni elimina animaciones, progreso o estados existentes.\r\n */\r\n.sil-loader.sil-camera4 .sil-core__camera4{\r\n  position:absolute;\r\n  top:50%;\r\n  left:50%;\r\n  z-index:2;\r\n  display:block;\r\n  transform:translate(-50%,-50%);\r\n  font-size:1.05rem;\r\n  font-weight:820;\r\n  line-height:1;\r\n  letter-spacing:-.055em;\r\n  color:var(--sil-text);\r\n  text-shadow:\r\n    0 0 .48rem rgba(255,255,255,.46),\r\n    0 0 .95rem rgba(var(--sil-primary-rgb),.42),\r\n    0 0 1.28rem rgba(var(--sil-accent-rgb),.2);\r\n  pointer-events:none;\r\n  user-select:none;\r\n}\r\n\r\n/* En progreso determinado conservamos el porcentaje y lo ubicamos debajo de 4.0. */\r\n.sil-loader.sil-camera4.sil-determinate .sil-core__percent{\r\n  position:absolute;\r\n  top:calc(50% + 1.02rem);\r\n  left:50%;\r\n  z-index:3;\r\n  display:block;\r\n  transform:translateX(-50%);\r\n  font-size:.58rem;\r\n  line-height:1;\r\n  letter-spacing:-.02em;\r\n  white-space:nowrap;\r\n}\r\n\r\n/* El estado de exito conserva exactamente su check final: la marca se retira solo durante ese estado. */\r\n.sil-loader.sil-camera4.sil-success .sil-core__camera4,\r\n.sil-loader.sil-camera4.sil-error .sil-core__camera4{\r\n  display:none;\r\n}\r\n\r\n@media (max-width:480px){\r\n  .sil-loader.sil-camera4 .sil-core__camera4{font-size:.96rem}\r\n  .sil-loader.sil-camera4.sil-determinate .sil-core__percent{top:calc(50% + .94rem);font-size:.54rem}\r\n}\r\n";
  var motionCSS = "/*\r\n * Aurora System Loader - essential motion override\r\n * Keeps the loader's core visual feedback active even when the host OS/browser\r\n * reports prefers-reduced-motion: reduce. Decorative motion may remain reduced,\r\n * but the butterfly, ring, streams, pearls, core and progress must keep moving.\r\n */\r\n\r\n@media (prefers-reduced-motion: reduce) {\r\n  .sil-loader.sil-running .sil-butterfly-flight {\r\n    animation: sil-butterfly-orbit 5.6s linear 2.42s infinite !important;\r\n  }\r\n\r\n  .sil-loader.sil-running .sil-butterfly {\r\n    animation: sil-butterfly-enter 2.28s cubic-bezier(.22,.72,.19,1) .08s forwards !important;\r\n  }\r\n\r\n    .sil-loader.sil-running .sil-butterfly .sil-wing-left {\r\n    animation: sil-wing-flap-left .32s ease-in-out infinite alternate !important;\r\n  }\r\n\r\n  .sil-loader.sil-running .sil-butterfly .sil-wing-right {\r\n    animation: sil-wing-flap-right .32s ease-in-out infinite alternate !important;\r\n  }\r\n\r\n  .sil-loader.sil-running .sil-pearl {\r\n    animation: sil-pearl-arrive .92s cubic-bezier(.18,.78,.22,1) var(--sil-delay) forwards !important;\r\n  }\r\n\r\n  .sil-loader.sil-running .sil-pearl-ring {\r\n    animation: sil-ring-spin 5.8s linear 2.35s infinite !important;\r\n  }\r\n\r\n  .sil-loader.sil-running .sil-stream--a {\r\n    animation: sil-stream-spin 4.8s linear infinite !important;\r\n  }\r\n\r\n  .sil-loader.sil-running .sil-stream--b {\r\n    animation: sil-stream-spin-reverse 6.3s linear infinite !important;\r\n  }\r\n\r\n  .sil-loader.sil-running .sil-stream--c {\r\n    animation: sil-stream-spin 7.9s linear infinite !important;\r\n  }\r\n\r\n  .sil-loader.sil-running .sil-stream--d {\r\n    animation: sil-stream-spin-reverse 10s linear infinite !important;\r\n  }\r\n\r\n  .sil-loader.sil-running .sil-core {\r\n    animation: sil-core-arrive .7s cubic-bezier(.2,.9,.2,1) 1.66s forwards !important;\r\n  }\r\n\r\n  .sil-loader.sil-running .sil-core::before,\r\n  .sil-loader.sil-running .sil-core::after {\r\n    animation: sil-core-pulse 2.3s ease-out infinite !important;\r\n  }\r\n\r\n  .sil-loader.sil-running .sil-core::after {\r\n    animation-delay: -1.15s !important;\r\n  }\r\n\r\n  .sil-loader.sil-running .sil-core__spark {\r\n    animation: sil-spark-breathe 1.2s ease-in-out infinite alternate !important;\r\n  }\r\n\r\n  .sil-loader.sil-running:not(.sil-determinate) .sil-progress__bar {\r\n    animation: sil-progress-indeterminate 1.45s cubic-bezier(.65,0,.35,1) infinite !important;\r\n  }\r\n\r\n  .sil-loader.sil-running .sil-copy__dots::after {\r\n    animation: sil-ellipsis 1.35s steps(4,end) infinite !important;\r\n  }\r\n}\r\n";
  var dataset = installScript && installScript.dataset ? installScript.dataset : {};

  function flag(value, defaultValue) {
    if (value === undefined || value === null || value === '') return defaultValue;
    return !/^(false|off|no|0)$/i.test(String(value));
  }

  function positiveNumber(value, fallback) {
    var parsed = Number(value);
    return Number.isFinite(parsed) && parsed >= 0 ? parsed : fallback;
  }

  function opacityValue(value) {
    var number = Number(value);
    return Number.isFinite(number) ? Math.min(1, Math.max(0, number)) : 0.78;
  }

  var config = {
    auto: String(dataset.auto || 'none').toLowerCase().replace(/\s+/g, ''),
    theme: /^(dark|light|auto)$/.test(dataset.theme || '') ? dataset.theme : 'light',
    eyebrow: dataset.eyebrow || 'Camara de Comercio de Santa Marta',
    message: dataset.message || 'Cargando informacion',
    detail: dataset.detail || 'Preparando la siguiente pagina.',
    timeout: positiveNumber(dataset.timeout, 12000),
    // El tiempo lo determina la carga real, no una animacion que empieza al terminar.
    loadTimeout: positiveNumber(dataset.loadTimeout || dataset.timeout, 15000),
    minDuration: positiveNumber(dataset.minDuration, 850),
    opacity: opacityValue(dataset.opacity),
    blur: Math.min(24, positiveNumber(dataset.blur, 4)),
    camera4: flag(dataset.camera4, true),
    sound: flag(dataset.sound, false),
    essentialMotion: dataset.motion === 'essential'
  };

  var style = document.createElement('style');
  style.setAttribute('data-aurora-embed-style', '1');
  if (installScript && installScript.nonce) style.nonce = installScript.nonce;
  var overlayCSS = [
    '.sil-loader.sil-embed-frosted[data-theme="light"]{background:rgba(255,255,255,var(--sil-embed-opacity,.78))!important;backdrop-filter:blur(var(--sil-embed-blur,4px));-webkit-backdrop-filter:blur(var(--sil-embed-blur,4px))}',
    '.sil-loader.sil-embed-frosted[data-theme="light"] .sil-copy__eyebrow{color:#536e83}',
    '.sil-loader.sil-embed-frosted[data-theme="light"] .sil-copy__hint{color:#6b7d8a}',
    '.sil-loader.sil-embed-frosted.sil-running .sil-butterfly{animation:sil-butterfly-enter 1.1s cubic-bezier(.22,.72,.19,1) 0s forwards}',
    '.sil-loader.sil-embed-frosted.sil-running .sil-butterfly-flight{animation:sil-butterfly-orbit 5.6s linear 1.2s infinite}',
    '.sil-loader.sil-embed-frosted.sil-running .sil-core{animation:sil-core-arrive .45s cubic-bezier(.2,.9,.2,1) .78s forwards}'
  ].join('\n');
  style.textContent = bundledCSS + '\n' + overlayCSS + (config.essentialMotion ? '\n' + motionCSS : '');
  (document.head || document.documentElement).appendChild(style);

  // BIBLIOTECA ORIGINAL: SystemLoader (SVG, CSS y Canvas sin dependencias).
  /*
 * System Loader v1.0.5
 * Loader web reutilizable inspirado en una mariposa que forma un circulo de luz.
 * Sin dependencias. Compatible con aplicaciones tradicionales y SPA modernas.
 */
(function systemLoaderFactory(window, document) {
  'use strict';

  if (!window || !document || window.SystemLoader) return;

  var VERSION = '1.0.5';
  var instanceCounter = 0;
  var prefersReducedMotion = window.matchMedia
    ? window.matchMedia('(prefers-reduced-motion: reduce)')
    : { matches: false };

  var DEFAULTS = {
    mode: 'fullscreen',
    theme: 'dark',
    eyebrow: 'Sistema de informaci\u00f3n',
    message: 'Cargando informaci\u00f3n',
    detail: 'Estamos preparando los datos para continuar.',
    hint: 'Este proceso puede tardar unos segundos.',
    progress: null,
    minDuration: 1300,
    finishDuration: 1250,
    lockScroll: true
  };

  function merge(base, patch) {
    var result = {};
    Object.keys(base || {}).forEach(function copyBase(key) { result[key] = base[key]; });
    Object.keys(patch || {}).forEach(function copyPatch(key) {
      if (patch[key] !== undefined) result[key] = patch[key];
    });
    return result;
  }

  function clamp(value, min, max) {
    return Math.min(max, Math.max(min, value));
  }

  function toElement(target) {
    if (!target) return document.body || document.documentElement;
    if (typeof target === 'string') {
      var element = document.querySelector(target);
      if (!element) throw new Error('SystemLoader: no se encontro el contenedor "' + target + '".');
      return element;
    }
    if (target && target.nodeType === 1) return target;
    throw new TypeError('SystemLoader: el contenedor debe ser un selector CSS o un elemento HTML.');
  }

  function resolveTheme(theme) {
    if (theme === 'auto') {
      return window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches
        ? 'light'
        : 'dark';
    }
    return theme === 'light' ? 'light' : 'dark';
  }

  // El logotipo SVG se incrusta para funcionar sin solicitudes externas.
  // Los gradientes reciben ID por instancia, evitando colisiones entre loaders.
  function createButterflySvg(uid) {
    return [
      "<svg class=\"sil-butterfly\" viewBox=\"0 0 1041.64 1012.85\" aria-hidden=\"true\" focusable=\"false\" xmlns=\"http://www.w3.org/2000/svg\">",
      "<defs>",
      "<linearGradient id=\"sil-logo-red-__SIL_UID__\" x1=\"892.22\" y1=\"972.7\" x2=\"723.97\" y2=\"842.7\" gradientUnits=\"userSpaceOnUse\">\n      <stop offset=\"0\" stop-color=\"#942c1e\"/>\n      <stop offset=\"1\" stop-color=\"#6a281b\"/>\n    </linearGradient>",
      "<linearGradient id=\"sil-logo-yellow-__SIL_UID__\" x1=\"712.06\" y1=\"572.41\" x2=\"995.2\" y2=\"328.59\" gradientUnits=\"userSpaceOnUse\">\n      <stop offset=\"0\" stop-color=\"#dc9a2b\"/>\n      <stop offset=\".72\" stop-color=\"#ebc22f\"/>\n    </linearGradient>",
      "<linearGradient id=\"sil-logo-blue-__SIL_UID__\" x1=\"68.64\" y1=\"888.62\" x2=\"202.47\" y2=\"808.32\" gradientUnits=\"userSpaceOnUse\">\n      <stop offset=\"0\" stop-color=\"#30579c\"/>\n      <stop offset=\"1\" stop-color=\"#1c3f85\"/>\n    </linearGradient>",
      "<linearGradient id=\"sil-logo-green-__SIL_UID__\" x1=\"219.56\" y1=\"44.15\" x2=\"498.77\" y2=\"864.09\" gradientUnits=\"userSpaceOnUse\">\n      <stop offset=\".36\" stop-color=\"#a5be32\"/>\n      <stop offset=\".84\" stop-color=\"#84a434\"/>\n    </linearGradient>",
      "</defs>",
      "<g class=\"sil-wing-right\">",
      "<path fill=\"url(#sil-logo-red-__SIL_UID__)\" d=\"M862.71,983.98c-53.22,53.71-166.17,30.08-264.16-50.97v-.04c-6.59-10.71-36.23-76.27,151.39-174.13,19.95-10.4,40.13-22.96,59.95-37.29,81.4,96.89,105.78,208.91,52.82,262.44Z\"/>",
      "<path fill=\"url(#sil-logo-yellow-__SIL_UID__)\" d=\"M809.89,721.54c-19.82,14.33-39.99,26.9-59.95,37.29-187.63,97.86-157.99,163.43-151.39,174.13v.04c.49.75.84,1.24.97,1.46-1.86-1.46-32.12-25.44-64.77-63.35.44-.31.8-.62,1.19-.97,49.11-39.15,93.44-90.47,112.77-155.38,10.09-33.89,14.6-70.21,14.51-107.9-.13-71.18-16.77-147.1-43.27-219.83,135.07-123.88,314.42-195.72,392.64-102.6,91.14,108.57-47.65,325.44-202.71,437.1Z\"/>",
      "</g>",
      "<g class=\"sil-wing-left\">",
      "<path fill=\"url(#sil-logo-blue-__SIL_UID__)\" d=\"M335.27,941.77s-.04.05-.04.05c-148.38,49.81-288.58,27.07-325.92-58.18-37.21-84.9,40.35-202.71,176.52-278.1,16.55,25.26,34.11,48.62,52.43,69.41,172.05,195.02,109.41,257.31,97.02,266.82Z\"/>",
      "<path fill=\"url(#sil-logo-green-__SIL_UID__)\" d=\"M632.44,601.73s-.04-.13,0-.22c-.04-2.26-.09-4.56-.18-6.9v-.53c-.09-1.77-.13-3.5-.22-5.26,0-.27,0-.53-.04-.8-.27-5.53-.62-11.06-1.02-16.59-.27-3.36-.57-6.72-.93-10.13-.31-3.14-.62-6.28-1.02-9.47-.13-1.37-.31-2.7-.49-4.07v-.04c-.27-2.21-.58-4.42-.84-6.64-.04-.05-.04-.13-.04-.18-.88-6.68-1.9-13.32-3.05-19.95v-.04c-1.15-6.42-2.34-12.83-3.63-19.25-.04-.04,0-.09,0-.09-1.73-8.32-3.58-16.59-5.62-24.86-.18-.75-.35-1.5-.58-2.26-1.37-5.57-2.83-11.1-4.34-16.72-.13-.53-.27-1.02-.4-1.55-3.63-13.14-7.65-26.19-11.94-39.15-.75-2.26-1.5-4.56-2.3-6.81-.75-2.17-1.5-4.29-2.26-6.46-.84-2.34-1.68-4.69-2.52-7.04-.09-.35-.22-.66-.35-1.02-2.96-8.14-6.06-16.19-9.25-24.2-9.51-23.8-20.04-47.2-31.59-70.08-2.08-4.2-4.25-8.32-6.42-12.43-49.15-89.28-109.59-180.46-192.45-239.34-.13-.09-.31-.22-.44-.31-26.63-18.85-55.61-34.38-87.24-45.44C-33.66-45.38,36.16,384.16,185.82,605.54c16.55,25.26,34.11,48.62,52.43,69.41,172.05,195.02,109.41,257.31,97.02,266.82,0,.05-.04.05-.04.05-.97.71-1.64,1.15-1.81,1.24,3.23-.97,100.21-31.1,182.05-95.83.62-.44,1.24-.93,1.86-1.46,76.01-55.48,121-148.69,115.12-244.03ZM363.63,59.34c6.02,4.74,11.94,9.73,17.87,15-5.93-5.22-11.86-10.22-17.87-15Z\"/>",
      "</g>",
      "</svg>",
    ].join('').replace(/__SIL_UID__/g, uid);
  }

  function createOrbitSvg(uid) {
    return [
      '<svg class="sil-orbit-svg" viewBox="0 0 240 240" aria-hidden="true" focusable="false">',
      '  <defs>',
      '    <linearGradient id="sil-stream-gradient-a-' + uid + '" x1="0" y1="0" x2="1" y2="1">',
      '      <stop offset="0" stop-color="rgba(255,255,255,0)"/>',
      '      <stop offset=".28" stop-color="#fff"/>',
      '      <stop offset=".65" stop-color="var(--sil-primary)"/>',
      '      <stop offset="1" stop-color="rgba(255,255,255,0)"/>',
      '    </linearGradient>',
      '    <linearGradient id="sil-stream-gradient-b-' + uid + '" x1="1" y1="0" x2="0" y2="1">',
      '      <stop offset="0" stop-color="rgba(255,255,255,0)"/>',
      '      <stop offset=".42" stop-color="var(--sil-accent)"/>',
      '      <stop offset=".7" stop-color="#fff"/>',
      '      <stop offset="1" stop-color="rgba(255,255,255,0)"/>',
      '    </linearGradient>',
      '    <filter id="sil-glow-' + uid + '" x="-50%" y="-50%" width="200%" height="200%">',
      '      <feGaussianBlur stdDeviation="2.4" result="blur"/>',
      '      <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>',
      '    </filter>',
      '  </defs>',
      '  <g filter="url(#sil-glow-' + uid + ')">',
      '    <ellipse class="sil-stream sil-stream--a" cx="120" cy="120" rx="86" ry="49" style="--sil-stream-rotation:22deg" stroke="url(#sil-stream-gradient-a-' + uid + ')"/>',
      '    <ellipse class="sil-stream sil-stream--b" cx="120" cy="120" rx="83" ry="43" style="--sil-stream-rotation:82deg" stroke="url(#sil-stream-gradient-b-' + uid + ')"/>',
      '    <ellipse class="sil-stream sil-stream--c" cx="120" cy="120" rx="92" ry="57" style="--sil-stream-rotation:143deg"/>',
      '    <circle class="sil-stream sil-stream--d" cx="120" cy="120" r="72" style="--sil-stream-rotation:0deg"/>',
      '  </g>',
      '</svg>'
    ].join('');
  }

  function createPearls(count) {
    var pearls = [];
    for (var index = 0; index < count; index += 1) {
      pearls.push('<span class="sil-pearl" data-sil-pearl="' + index + '" aria-hidden="true"></span>');
    }
    return pearls.join('');
  }

  function buildMarkup(uid, options) {
    return [
      '<div class="sil-loader__ambient" aria-hidden="true"></div>',
      '<div class="sil-loader__noise" aria-hidden="true"></div>',
      '<canvas class="sil-loader__canvas" aria-hidden="true"></canvas>',
      '<div class="sil-loader__content">',
      '  <div class="sil-stage" aria-hidden="true">',
      createOrbitSvg(uid),
      '    <div class="sil-pearl-ring">' + createPearls(10) + '</div>',
      '    <div class="sil-butterfly-flight">' + createButterflySvg(uid) + '</div>',
      '    <div class="sil-core">',
      '      <span class="sil-core__spark"></span>',
      '      <span class="sil-core__percent">0%</span>',
      '      <svg class="sil-core__check" viewBox="0 0 28 28"><path d="M6 14.5l5 5L22 8.5"/></svg>',
      '    </div>',
      '  </div>',
      '  <div class="sil-copy">',
      '    <p class="sil-copy__eyebrow"></p>',
      '    <h2 class="sil-copy__message"><span data-sil-message></span><span class="sil-copy__dots" aria-hidden="true"></span></h2>',
      '    <p class="sil-copy__detail"></p>',
      '    <div class="sil-progress" role="progressbar" aria-label="Progreso de carga">',
      '      <span class="sil-progress__bar"></span>',
      '    </div>',
      '    <p class="sil-copy__hint"></p>',
      '  </div>',
      '</div>'
    ].join('');
  }

  function ParticleField(canvas, root, stage) {
    this.canvas = canvas;
    this.root = root;
    this.stage = stage;
    this.context = canvas.getContext ? canvas.getContext('2d') : null;
    this.ambient = [];
    this.burstParticles = [];
    this.frameId = null;
    this.running = false;
    this.width = 0;
    this.height = 0;
    this.dpr = 1;
    this.lastTime = 0;
    this.resize = this.resize.bind(this);
    this.draw = this.draw.bind(this);
  }

  ParticleField.prototype.resize = function resize() {
    if (!this.context) return;
    var rect = this.root.getBoundingClientRect();
    this.width = Math.max(1, rect.width);
    this.height = Math.max(1, rect.height);
    this.dpr = Math.min(window.devicePixelRatio || 1, 1.75);
    this.canvas.width = Math.round(this.width * this.dpr);
    this.canvas.height = Math.round(this.height * this.dpr);
    this.canvas.style.width = this.width + 'px';
    this.canvas.style.height = this.height + 'px';
    this.context.setTransform(this.dpr, 0, 0, this.dpr, 0, 0);
    this.seedAmbient();
  };

  ParticleField.prototype.seedAmbient = function seedAmbient() {
    if (!this.context || prefersReducedMotion.matches) {
      this.ambient = [];
      return;
    }
    var count = clamp(Math.round((this.width * this.height) / 34000), 18, 48);
    var particles = [];
    for (var index = 0; index < count; index += 1) {
      particles.push({
        x: Math.random() * this.width,
        y: Math.random() * this.height,
        radius: 0.45 + Math.random() * 1.25,
        phase: Math.random() * Math.PI * 2,
        speed: 0.00045 + Math.random() * 0.0012,
        drift: (Math.random() - 0.5) * 0.018,
        alpha: 0.14 + Math.random() * 0.42
      });
    }
    this.ambient = particles;
  };

  ParticleField.prototype.getColors = function getColors() {
    var style = window.getComputedStyle(this.root);
    var primary = style.getPropertyValue('--sil-primary').trim() || '#24b8f2';
    var accent = style.getPropertyValue('--sil-accent').trim() || '#ffc52f';
    return [primary, accent, '#ffffff', '#dff8ff'];
  };

  ParticleField.prototype.burst = function burst() {
    if (!this.context || prefersReducedMotion.matches) return;
    var rootRect = this.root.getBoundingClientRect();
    var stageRect = this.stage.getBoundingClientRect();
    var originX = stageRect.left - rootRect.left + stageRect.width / 2;
    var originY = stageRect.top - rootRect.top + stageRect.height / 2;
    var colors = this.getColors();
    var amount = this.root.dataset.mode === 'inline' ? 68 : 108;

    for (var index = 0; index < amount; index += 1) {
      var angle = Math.random() * Math.PI * 2;
      var speed = 1.45 + Math.random() * 5.1;
      this.burstParticles.push({
        x: originX,
        y: originY,
        previousX: originX,
        previousY: originY,
        velocityX: Math.cos(angle) * speed,
        velocityY: Math.sin(angle) * speed,
        gravity: 0.012 + Math.random() * 0.024,
        drag: 0.976 + Math.random() * 0.014,
        life: 1,
        decay: 0.012 + Math.random() * 0.016,
        width: 0.7 + Math.random() * 1.9,
        color: colors[index % colors.length]
      });
    }
  };

  ParticleField.prototype.start = function start() {
    if (!this.context || this.running || prefersReducedMotion.matches) return;
    this.running = true;
    this.resize();
    window.addEventListener('resize', this.resize, { passive: true });
    this.lastTime = performance.now();
    this.frameId = window.requestAnimationFrame(this.draw);
  };

  ParticleField.prototype.stop = function stop() {
    this.running = false;
    if (this.frameId !== null) window.cancelAnimationFrame(this.frameId);
    this.frameId = null;
    window.removeEventListener('resize', this.resize);
    if (this.context) this.context.clearRect(0, 0, this.width, this.height);
    this.burstParticles = [];
  };

  ParticleField.prototype.draw = function draw(time) {
    if (!this.running || !this.context) return;
    var context = this.context;
    var delta = Math.min(32, time - this.lastTime || 16.67);
    this.lastTime = time;
    context.clearRect(0, 0, this.width, this.height);

    for (var index = 0; index < this.ambient.length; index += 1) {
      var star = this.ambient[index];
      star.phase += delta * star.speed;
      star.y -= delta * 0.0025;
      star.x += delta * star.drift;
      if (star.y < -3) star.y = this.height + 3;
      if (star.x < -3) star.x = this.width + 3;
      if (star.x > this.width + 3) star.x = -3;
      var alpha = star.alpha * (0.45 + 0.55 * Math.abs(Math.sin(star.phase)));
      context.globalAlpha = alpha;
      context.fillStyle = '#ffffff';
      context.beginPath();
      context.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
      context.fill();
    }

    context.globalAlpha = 1;
    context.lineCap = 'round';
    for (var particleIndex = this.burstParticles.length - 1; particleIndex >= 0; particleIndex -= 1) {
      var particle = this.burstParticles[particleIndex];
      particle.previousX = particle.x;
      particle.previousY = particle.y;
      particle.velocityX *= particle.drag;
      particle.velocityY = particle.velocityY * particle.drag + particle.gravity * delta;
      particle.x += particle.velocityX * (delta / 16.67);
      particle.y += particle.velocityY * (delta / 16.67);
      particle.life -= particle.decay * (delta / 16.67);

      if (particle.life <= 0) {
        this.burstParticles.splice(particleIndex, 1);
        continue;
      }

      context.globalAlpha = Math.max(0, particle.life);
      context.strokeStyle = particle.color;
      context.lineWidth = particle.width;
      context.beginPath();
      context.moveTo(particle.previousX, particle.previousY);
      context.lineTo(particle.x, particle.y);
      context.stroke();
    }

    context.globalAlpha = 1;
    this.frameId = window.requestAnimationFrame(this.draw);
  };

  function LoaderController(target, options) {
    this.target = toElement(target);
    this.baseOptions = merge(DEFAULTS, options || {});
    this.options = merge({}, this.baseOptions);
    this.uid = 'sil-' + (++instanceCounter);
    this.root = document.createElement('div');
    this.root.id = this.options.id || this.uid;
    this.root.className = 'sil-loader';
    this.root.dataset.mode = this.options.mode === 'inline' ? 'inline' : 'fullscreen';
    this.root.dataset.theme = resolveTheme(this.options.theme);
    this.root.setAttribute('role', 'status');
    this.root.setAttribute('aria-live', 'polite');
    this.root.setAttribute('aria-atomic', 'true');
    this.root.setAttribute('aria-busy', 'false');
    this.root.innerHTML = buildMarkup(this.uid, this.options);

    this.stage = this.root.querySelector('.sil-stage');
    this.messageElement = this.root.querySelector('[data-sil-message]');
    this.detailElement = this.root.querySelector('.sil-copy__detail');
    this.eyebrowElement = this.root.querySelector('.sil-copy__eyebrow');
    this.hintElement = this.root.querySelector('.sil-copy__hint');
    this.progressElement = this.root.querySelector('.sil-progress');
    this.percentElement = this.root.querySelector('.sil-core__percent');
    this.pearls = Array.prototype.slice.call(this.root.querySelectorAll('[data-sil-pearl]'));
    this.canvas = this.root.querySelector('.sil-loader__canvas');
    this.particles = new ParticleField(this.canvas, this.root, this.stage);
    this.isVisible = false;
    this.shownAt = 0;
    this.closeTimer = null;
    this.completeTimer = null;
    this.resizeObserver = null;
    this.originalTargetPosition = null;

    if (this.root.dataset.mode === 'inline') {
      var position = window.getComputedStyle(this.target).position;
      if (position === 'static') {
        this.originalTargetPosition = this.target.style.position;
        this.target.style.position = 'relative';
      }
    }

    this.target.appendChild(this.root);
    this.update(this.options);
    this.observeStage();
  }

  LoaderController.prototype.observeStage = function observeStage() {
    var self = this;
    if ('ResizeObserver' in window) {
      this.resizeObserver = new window.ResizeObserver(function handleResize() {
        self.layoutPearls();
      });
      this.resizeObserver.observe(this.stage);
    } else {
      this.boundPearlLayout = function boundPearlLayout() { self.layoutPearls(); };
      window.addEventListener('resize', this.boundPearlLayout, { passive: true });
    }
  };

  LoaderController.prototype.layoutPearls = function layoutPearls() {
    var rect = this.stage.getBoundingClientRect();
    var size = rect.width || 260;
    var radius = size * 0.315;
    var startBaseX = -size * 0.43;
    var startY = -size * 0.22;
    var count = this.pearls.length;

    this.pearls.forEach(function positionPearl(pearl, index) {
      var angle = (-90 + index * (360 / count)) * Math.PI / 180;
      var endX = Math.cos(angle) * radius;
      var endY = Math.sin(angle) * radius;
      var midX = Math.cos(angle) * radius * 1.08;
      var midY = Math.sin(angle) * radius * 1.08;
      var startX = startBaseX + index * size * 0.085;
      var startOffsetY = startY + Math.sin(index * 0.8) * size * 0.025;
      pearl.style.setProperty('--sil-start-x', startX.toFixed(2) + 'px');
      pearl.style.setProperty('--sil-start-y', startOffsetY.toFixed(2) + 'px');
      pearl.style.setProperty('--sil-mid-x', midX.toFixed(2) + 'px');
      pearl.style.setProperty('--sil-mid-y', midY.toFixed(2) + 'px');
      pearl.style.setProperty('--sil-end-x', endX.toFixed(2) + 'px');
      pearl.style.setProperty('--sil-end-y', endY.toFixed(2) + 'px');
      pearl.style.setProperty('--sil-delay', (0.58 + index * 0.075).toFixed(3) + 's');
    });
  };

  LoaderController.prototype.clearTimers = function clearTimers() {
    if (this.closeTimer !== null) window.clearTimeout(this.closeTimer);
    if (this.completeTimer !== null) window.clearTimeout(this.completeTimer);
    this.closeTimer = null;
    this.completeTimer = null;
  };

  LoaderController.prototype.update = function update(patch) {
    var options = patch || {};
    this.options = merge(this.options, options);

    if (Object.prototype.hasOwnProperty.call(options, 'theme')) {
      this.root.dataset.theme = resolveTheme(options.theme);
    }
    if (Object.prototype.hasOwnProperty.call(options, 'mode')) {
      this.root.dataset.mode = options.mode === 'inline' ? 'inline' : 'fullscreen';
    }
    if (Object.prototype.hasOwnProperty.call(options, 'eyebrow') || !this.eyebrowElement.textContent) {
      this.eyebrowElement.textContent = this.options.eyebrow || '';
    }
    if (Object.prototype.hasOwnProperty.call(options, 'message') || !this.messageElement.textContent) {
      this.messageElement.textContent = this.options.message || '';
    }
    if (Object.prototype.hasOwnProperty.call(options, 'detail') || !this.detailElement.textContent) {
      this.detailElement.textContent = this.options.detail || '';
    }
    if (Object.prototype.hasOwnProperty.call(options, 'hint') || !this.hintElement.textContent) {
      this.hintElement.textContent = this.options.hint || '';
    }
    if (Object.prototype.hasOwnProperty.call(options, 'progress') || this.options.progress !== undefined) {
      this.setProgress(this.options.progress);
    }

    this.root.setAttribute(
      'aria-label',
      [this.options.message, this.options.detail].filter(Boolean).join('. ')
    );
    return this;
  };

  LoaderController.prototype.setProgress = function setProgress(progress) {
    var numeric = progress === null || progress === undefined || progress === ''
      ? null
      : Number(progress);

    if (numeric === null || Number.isNaN(numeric)) {
      this.root.classList.remove('sil-determinate');
      this.root.style.removeProperty('--sil-progress');
      this.progressElement.removeAttribute('aria-valuenow');
      this.progressElement.removeAttribute('aria-valuemin');
      this.progressElement.removeAttribute('aria-valuemax');
      this.percentElement.textContent = '';
      this.options.progress = null;
      return this;
    }

    numeric = clamp(numeric, 0, 100);
    this.options.progress = numeric;
    this.root.classList.add('sil-determinate');
    this.root.style.setProperty('--sil-progress', numeric.toFixed(1) + '%');
    this.progressElement.setAttribute('aria-valuemin', '0');
    this.progressElement.setAttribute('aria-valuemax', '100');
    this.progressElement.setAttribute('aria-valuenow', String(Math.round(numeric)));
    this.percentElement.textContent = Math.round(numeric) + '%';
    return this;
  };

  LoaderController.prototype.show = function show(patch) {
    this.clearTimers();
    this.options = merge(this.baseOptions, patch || {});
    this.update(this.options);
    this.root.classList.remove('sil-closing', 'sil-success', 'sil-error', 'sil-running');
    this.root.setAttribute('aria-busy', 'true');
    this.layoutPearls();

    // Reinicia las animaciones CSS incluso cuando el mismo loader se reutiliza.
    void this.root.offsetWidth;
    this.root.classList.add('sil-visible');
    var self = this;
    window.requestAnimationFrame(function startAnimation() {
      self.root.classList.add('sil-running');
    });

    this.isVisible = true;
    this.shownAt = performance.now();
    this.particles.start();

    if (this.root.dataset.mode === 'fullscreen' && this.options.lockScroll) {
      document.documentElement.classList.add('sil-lock-scroll');
    }

    document.dispatchEvent(new window.CustomEvent('system-loader:show', {
      detail: { controller: this }
    }));
    return this;
  };

  LoaderController.prototype.finish = function finish(patch) {
    var self = this;
    var options = merge({
      eyebrow: 'Proceso completado',
      message: 'Informaci\u00f3n lista',
      detail: 'Puedes continuar.',
      hint: ''
    }, patch || {});

    if (!this.isVisible) return Promise.resolve(this);
    this.clearTimers();

    var elapsed = performance.now() - this.shownAt;
    var remaining = Math.max(0, Number(this.options.minDuration || 0) - elapsed);

    return new Promise(function completePromise(resolve) {
      self.completeTimer = window.setTimeout(function beginComplete() {
        self.update(options);
        self.setProgress(100);
        self.root.classList.remove('sil-error');
        self.root.classList.add('sil-success');
        self.particles.burst();

        var duration = Number(options.finishDuration || self.options.finishDuration || 1250);
        self.closeTimer = window.setTimeout(function closeAfterSuccess() {
          self.hide({ immediate: false }).then(function afterHide() {
            document.dispatchEvent(new window.CustomEvent('system-loader:finish', {
              detail: { controller: self }
            }));
            resolve(self);
          });
        }, Math.max(650, duration));
      }, remaining);
    });
  };

  LoaderController.prototype.fail = function fail(patch) {
    var self = this;
    var options = merge({
      eyebrow: 'No fue posible continuar',
      message: 'Ocurri\u00f3 un inconveniente',
      detail: 'Revisa la informaci\u00f3n e intenta nuevamente.',
      hint: ''
    }, patch || {});

    if (!this.isVisible) this.show(options);
    this.clearTimers();
    this.update(options);
    this.root.classList.remove('sil-success');
    this.root.classList.add('sil-error');

    var hold = Number(options.holdDuration || 2400);
    return new Promise(function failPromise(resolve) {
      self.closeTimer = window.setTimeout(function closeError() {
        self.hide({ immediate: false }).then(function afterErrorHide() {
          document.dispatchEvent(new window.CustomEvent('system-loader:error', {
            detail: { controller: self }
          }));
          resolve(self);
        });
      }, Math.max(900, hold));
    });
  };

  LoaderController.prototype.hide = function hide(options) {
    var self = this;
    var immediate = options && options.immediate;
    this.clearTimers();

    if (!this.isVisible) {
      this.root.classList.remove('sil-visible', 'sil-running', 'sil-success', 'sil-error', 'sil-closing');
      this.root.setAttribute('aria-busy', 'false');
      return Promise.resolve(this);
    }

    return new Promise(function hidePromise(resolve) {
      function finalizeHide() {
        self.root.classList.remove('sil-visible', 'sil-running', 'sil-success', 'sil-error', 'sil-closing', 'sil-determinate');
        self.root.style.removeProperty('--sil-progress');
        self.options.progress = null;
        self.root.setAttribute('aria-busy', 'false');
        self.isVisible = false;
        self.particles.stop();
        if (self.root.dataset.mode === 'fullscreen' && self.options.lockScroll) {
          document.documentElement.classList.remove('sil-lock-scroll');
        }
        resolve(self);
      }

      if (immediate || prefersReducedMotion.matches) {
        finalizeHide();
        return;
      }

      self.root.classList.add('sil-closing');
      self.closeTimer = window.setTimeout(finalizeHide, 300);
    });
  };

  LoaderController.prototype.destroy = function destroy() {
    this.clearTimers();
    this.particles.stop();
    if (this.resizeObserver) this.resizeObserver.disconnect();
    if (this.boundPearlLayout) window.removeEventListener('resize', this.boundPearlLayout);
    if (this.root.parentNode) this.root.parentNode.removeChild(this.root);
    if (this.originalTargetPosition !== null) this.target.style.position = this.originalTargetPosition;
    document.documentElement.classList.remove('sil-lock-scroll');
    this.isVisible = false;
  };

  var globalController = null;

  function ensureGlobalController() {
    if (!globalController || !document.documentElement.contains(globalController.root)) {
      globalController = new LoaderController(document.body || document.documentElement, {
        mode: 'fullscreen',
        lockScroll: true
      });
    }
    return globalController;
  }

  var facade = {
    version: VERSION,

    configure: function configure(options) {
      var controller = ensureGlobalController();
      controller.baseOptions = merge(controller.baseOptions, options || {});
      controller.options = merge(controller.options, options || {});
      controller.update(options || {});
      return controller;
    },

    show: function show(options) {
      return ensureGlobalController().show(options || {});
    },

    update: function update(options) {
      return ensureGlobalController().update(options || {});
    },

    progress: function progress(value, options) {
      var controller = ensureGlobalController();
      if (options) controller.update(options);
      return controller.setProgress(value);
    },

    finish: function finish(options) {
      return ensureGlobalController().finish(options || {});
    },

    fail: function fail(options) {
      return ensureGlobalController().fail(options || {});
    },

    hide: function hide(options) {
      return ensureGlobalController().hide(options || {});
    },

    create: function create(target, options) {
      return new LoaderController(target, merge({ mode: 'inline', lockScroll: false }, options || {}));
    },

    wrap: async function wrap(task, options) {
      var settings = merge({
        delay: 180,
        success: {},
        error: {}
      }, options || {});
      var shown = false;
      var timer = window.setTimeout(function delayedShow() {
        shown = true;
        facade.show(settings);
      }, Math.max(0, Number(settings.delay || 0)));

      try {
        var value = typeof task === 'function' ? task() : task;
        var result = await Promise.resolve(value);
        window.clearTimeout(timer);
        if (shown) await facade.finish(settings.success || {});
        return result;
      } catch (error) {
        window.clearTimeout(timer);
        if (shown) await facade.fail(settings.error || {});
        throw error;
      }
    },

    get controller() {
      return globalController;
    }
  };

  window.SystemLoader = facade;
  document.dispatchEvent(new window.CustomEvent('system-loader:ready', {
    detail: { version: VERSION }
  }));
})(window, document);


  if (!window.SystemLoader) return;

  if (config.camera4) {
    /* Aurora System Loader - Camara 4.0 identity layer
 * Capa aditiva: inserta la marca 4.0 en el nucleo sin modificar la API del loader.
 */
(function auroraCamera4Factory(window, document) {
  'use strict';

  if (!window || !document || window.AuroraCamera4) return;

  function decorate(root) {
    if (!root || root.nodeType !== 1) return;

    var core = root.querySelector('.sil-core');
    if (!core) return;

    root.classList.add('sil-camera4');

    if (core.querySelector('.sil-core__camera4')) return;

    var mark = document.createElement('span');
    mark.className = 'sil-core__camera4';
    mark.textContent = '4.0';
    mark.setAttribute('aria-label', 'Camara 4.0');

    var percent = core.querySelector('.sil-core__percent');
    if (percent) core.insertBefore(mark, percent);
    else core.appendChild(mark);
  }

  function decorateAll() {
    var loaders = document.querySelectorAll('.sil-loader');
    for (var index = 0; index < loaders.length; index += 1) {
      decorate(loaders[index]);
    }
  }

  document.addEventListener('system-loader:show', decorateAll);
  document.addEventListener('system-loader:ready', decorateAll);

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', decorateAll, { once: true });
  } else {
    decorateAll();
  }

  window.AuroraCamera4 = {
    version: '1.0.0',
    decorate: decorateAll
  };
})(window, document);

  }
  if (config.sound) {
    /*
 * Aurora System Loader - Butterfly Sound
 * Optional Web Audio companion. No external audio files required.
 */
(function auroraSoundFactory(window, document) {
  'use strict';

  if (!window || !document || window.SystemLoaderSound) return;

  var AudioContextCtor = window.AudioContext || window.webkitAudioContext;
  var context = null;
  var master = null;
  var noiseBuffer = null;
  var flutterTimer = null;
  var enabled = false;
  var unlocked = false;
  var active = false;
  var volume = 0.075;
  var interval = 245;

  function ensureContext() {
    if (!AudioContextCtor) return null;
    if (!context) {
      context = new AudioContextCtor();
      master = context.createGain();
      master.gain.value = volume;
      master.connect(context.destination);

      var length = Math.max(1, Math.floor(context.sampleRate * 0.12));
      noiseBuffer = context.createBuffer(1, length, context.sampleRate);
      var data = noiseBuffer.getChannelData(0);
      for (var i = 0; i < length; i += 1) {
        var fade = 1 - (i / length);
        data[i] = (Math.random() * 2 - 1) * fade;
      }
    }
    return context;
  }

  function unlock() {
    var ctx = ensureContext();
    if (!ctx) return Promise.resolve(false);
    var resume = ctx.state === 'suspended' ? ctx.resume() : Promise.resolve();
    return Promise.resolve(resume).then(function () {
      unlocked = ctx.state === 'running';
      if (unlocked && enabled && active) startFlutter();
      return unlocked;
    }).catch(function () {
      return false;
    });
  }

  function flap(strength) {
    if (!enabled || !active || !unlocked || !context || context.state !== 'running') return;

    var now = context.currentTime;
    var source = context.createBufferSource();
    source.buffer = noiseBuffer;

    var high = context.createBiquadFilter();
    high.type = 'highpass';
    high.frequency.setValueAtTime(900, now);

    var band = context.createBiquadFilter();
    band.type = 'bandpass';
    band.frequency.setValueAtTime(1500 + Math.random() * 550, now);
    band.Q.setValueAtTime(0.8, now);

    var gain = context.createGain();
    var peak = Math.max(0.003, Math.min(0.12, strength || 0.055));
    gain.gain.setValueAtTime(0.0001, now);
    gain.gain.exponentialRampToValueAtTime(peak, now + 0.008);
    gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.075);

    var pan = typeof context.createStereoPanner === 'function' ? context.createStereoPanner() : null;
    if (pan) {
      pan.pan.setValueAtTime((Math.random() - 0.5) * 0.22, now);
      source.connect(high);
      high.connect(band);
      band.connect(gain);
      gain.connect(pan);
      pan.connect(master);
    } else {
      source.connect(high);
      high.connect(band);
      band.connect(gain);
      gain.connect(master);
    }

    source.start(now);
    source.stop(now + 0.09);
  }

  function startFlutter() {
    if (!enabled || !active || !unlocked || flutterTimer !== null) return;
    flap(0.052);
    flutterTimer = window.setInterval(function () {
      flap(0.045 + Math.random() * 0.022);
    }, interval);
  }

  function stopFlutter() {
    if (flutterTimer !== null) window.clearInterval(flutterTimer);
    flutterTimer = null;
  }

  function syncFromLoader() {
    var root = document.querySelector('.sil-loader.sil-visible.sil-running');
    active = !!root && !root.classList.contains('sil-success') && !root.classList.contains('sil-error');
    if (active) startFlutter();
    else stopFlutter();
  }

  document.addEventListener('system-loader:show', function () {
    active = true;
    startFlutter();
  });

  document.addEventListener('system-loader:finish', function () {
    active = false;
    stopFlutter();
  });

  document.addEventListener('system-loader:error', function () {
    active = false;
    stopFlutter();
  });

  document.addEventListener('pointerdown', function firstPointer() {
    unlock();
  }, { capture: true, passive: true });

  document.addEventListener('keydown', function firstKey() {
    unlock();
  }, { capture: true });

  window.SystemLoaderSound = {
    version: '1.0.0',

    configure: function configure(options) {
      options = options || {};
      if (Object.prototype.hasOwnProperty.call(options, 'enabled')) enabled = !!options.enabled;
      if (Object.prototype.hasOwnProperty.call(options, 'volume')) {
        volume = Math.max(0, Math.min(1, Number(options.volume) || 0));
        if (master) master.gain.value = volume;
      }
      if (Object.prototype.hasOwnProperty.call(options, 'interval')) {
        interval = Math.max(120, Number(options.interval) || 245);
        if (flutterTimer !== null) {
          stopFlutter();
          startFlutter();
        }
      }
      syncFromLoader();
      return this;
    },

    enable: function enable() {
      enabled = true;
      syncFromLoader();
      return unlock();
    },

    disable: function disable() {
      enabled = false;
      stopFlutter();
      return this;
    },

    unlock: unlock,

    flap: function manualFlap() {
      flap(0.06);
    },

    get state() {
      return {
        enabled: enabled,
        unlocked: unlocked,
        active: active,
        contextState: context ? context.state : 'not-created',
        volume: volume,
        interval: interval
      };
    }
  };
})(window, document);

  }

  var navigationTimer = null;
  var initialTimer = null;
  var pageSafetyTimer = null;
  var pageStartedAt = null;
  var initialActive = false;
  var mounted = false;
  var autoModes = config.auto === 'all' ? ['page', 'links', 'forms'] :
    config.auto === 'navigation' ? ['links', 'forms'] : config.auto.split(',');
  function autoHas(name) { return autoModes.indexOf(name) !== -1; }

  function onReady(callback) {
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', callback, { once: true });
    } else {
      callback();
    }
  }

  function clearNavigationTimer() {
    if (navigationTimer !== null) window.clearTimeout(navigationTimer);
    navigationTimer = null;
  }

  function clearPageTimers() {
    if (initialTimer !== null) window.clearTimeout(initialTimer);
    if (pageSafetyTimer !== null) window.clearTimeout(pageSafetyTimer);
    initialTimer = null;
    pageSafetyTimer = null;
  }

  function dismissEarlySplash() {
    var boot = window.__AuroraHeadBoot;
    if (boot && typeof boot.hide === 'function') boot.hide();
  }

  function finishInitialLoad() {
    if (!initialActive) return;
    if (pageSafetyTimer !== null) window.clearTimeout(pageSafetyTimer);
    pageSafetyTimer = null;
    var elapsed = window.performance.now() - pageStartedAt;
    initialTimer = window.setTimeout(function closeWhenReady() {
      initialTimer = null;
      if (!initialActive) return;
      initialActive = false;
      if (navigationTimer === null && window.SystemLoader.controller &&
          window.SystemLoader.controller.isVisible) {
        window.SystemLoader.hide({ immediate: false });
      }
    }, Math.max(0, config.minDuration - elapsed));
  }

  function showForNavigation() {
    if (!mounted) return;
    initialActive = false;
    clearPageTimers();
    clearNavigationTimer();
    window.SystemLoader.show({
      eyebrow: config.eyebrow,
      message: config.message,
      detail: config.detail,
      theme: config.theme,
      minDuration: config.minDuration
    });
    // Si una aplicacion SPA cancela la navegacion, nunca dejar una pantalla bloqueada.
    navigationTimer = window.setTimeout(function navigationSafetyTimeout() {
      window.SystemLoader.hide({ immediate: true });
      navigationTimer = null;
    }, Math.max(2000, config.timeout));
  }

  function ignored(element) {
    return !!(element && element.closest && element.closest('[data-aurora-ignore], [data-no-loader], [data-sil-ignore]'));
  }

  function sameOriginDestination(value) {
    if (!value) return null;
    try {
      var url = new window.URL(value, document.baseURI);
      return /^https?:$/.test(url.protocol) && url.origin === window.location.origin ? url : null;
    } catch (error) {
      return null;
    }
  }

  function handleLinkClick(event) {
    if (event.defaultPrevented || event.button !== 0 || event.metaKey || event.ctrlKey || event.altKey || event.shiftKey) return;
    var start = event.target;
    if (!start || !start.closest) return;
    var link = start.closest('a[href], area[href]');
    if (!link || ignored(link) || link.hasAttribute('download')) return;
    var target = (link.getAttribute('target') || '').toLowerCase();
    if (target && target !== '_self') return;
    if (/\bexternal\b/i.test(link.getAttribute('rel') || '')) return;
    var url = sameOriginDestination(link.getAttribute('href'));
    if (!url) return;
    if (url.pathname === window.location.pathname && url.search === window.location.search &&
        (url.hash || window.location.hash)) return;
    showForNavigation();
  }

  function handleFormSubmit(event) {
    if (event.defaultPrevented) return;
    var form = event.target;
    if (!form || form.tagName !== 'FORM' || ignored(form)) return;
    var method = (form.getAttribute('method') || 'get').toLowerCase();
    if (method === 'dialog') return;
    var target = (form.getAttribute('target') || '').toLowerCase();
    if (target && target !== '_self') return;
    if (!sameOriginDestination(form.getAttribute('action') || window.location.href)) return;
    showForNavigation();
  }

  function hideOnPageRestore() {
    clearNavigationTimer();
    initialActive = false;
    clearPageTimers();
    dismissEarlySplash();
    if (window.SystemLoader.controller && window.SystemLoader.controller.isVisible) {
      window.SystemLoader.hide({ immediate: true });
    }
  }

  function install() {
    if (mounted) return;
    mounted = true;
    var controller = window.SystemLoader.configure({
      eyebrow: config.eyebrow,
      theme: config.theme,
      minDuration: config.minDuration
    });
    controller.root.classList.add('sil-embed-frosted');
    controller.root.style.setProperty('--sil-embed-opacity', String(config.opacity));
    controller.root.style.setProperty('--sil-embed-blur', String(config.blur) + 'px');

    if (autoHas('links')) document.addEventListener('click', handleLinkClick, false);
    if (autoHas('forms')) document.addEventListener('submit', handleFormSubmit, false);

    // Solo se muestra durante la carga real de la pagina. Una inyeccion tardia
    // (por ejemplo desde FOOTER o un gestor de etiquetas) no crea un loader extemporaneo.
    if (autoHas('page') && document.readyState !== 'complete') {
      initialActive = true;
      pageStartedAt = window.performance.now();
      window.SystemLoader.show({
        eyebrow: config.eyebrow,
        theme: config.theme,
        message: config.message,
        detail: 'Preparando el portal.',
        minDuration: config.minDuration
      });
      window.addEventListener('load', finishInitialLoad, { once: true });
      pageSafetyTimer = window.setTimeout(finishInitialLoad, Math.max(2000, config.loadTimeout));
    }
    // La precarga ligera se retira solo despues de montar la animacion real,
    // o si el sitio ya habia terminado de cargar al instalar el script.
    dismissEarlySplash();
    window.addEventListener('pageshow', function onPageShow(event) {
      if (event.persisted) hideOnPageRestore();
    });
    window.addEventListener('pagehide', clearNavigationTimer);
  }

  window.AuroraEmbed = {
    version: '1.0.7',
    options: config,
    show: function show(options) {
      if (mounted) return window.SystemLoader.show(options || {});
      onReady(function () { window.SystemLoader.show(options || {}); });
      return null;
    },
    update: function update(options) { return window.SystemLoader.update(options || {}); },
    progress: function progress(value, options) { return window.SystemLoader.progress(value, options || {}); },
    finish: function finish(options) { clearNavigationTimer(); return window.SystemLoader.finish(options || {}); },
    fail: function fail(options) { clearNavigationTimer(); return window.SystemLoader.fail(options || {}); },
    hide: function hide(options) { clearNavigationTimer(); initialActive = false; clearPageTimers(); dismissEarlySplash(); return window.SystemLoader.hide(options || {}); },
    wrap: function wrap(task, options) { return window.SystemLoader.wrap(task, options || {}); },
    configure: function configure(options) { return window.SystemLoader.configure(options || {}); }
  };

  // Si el BODY ya existe, iniciar antes de DOMContentLoaded evita esperar a
  // que PageGear cargue widgets y terceros innecesariamente.
  if (document.body) install();
  else onReady(install);
})(window, document);
