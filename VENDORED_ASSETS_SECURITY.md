# Política de artefactos vendorizados del CDN

Este repositorio distribuye versiones precompiladas de librerías CSS/JS para consumo estático. Los directorios versionados de terceros no son proyectos Node mantenidos ni construidos en producción desde este repositorio.

## Regla de seguridad

- Los artefactos compilados (`.css`, `.min.css`, `.js`, `.min.js`, fuentes y mapas que correspondan) se conservan para no alterar las URLs públicas del CDN.
- No se conservan `package.json` ni `package-lock.json` de copias vendorizadas cuando esos manifests representan toolchains históricas con dependencias vulnerables y no son necesarios para servir el artefacto.
- No se debe ejecutar `npm install`, `npm ci` ni procesos de build dentro de esos directorios vendorizados.
- Para actualizar una librería, se debe obtener una versión publicada y verificable desde su upstream oficial, revisar integridad/licencia y crear un nuevo directorio versionado. No se reconstruye una versión histórica con dependencias obsoletas.

## Remediación CE-591 / CE-593 — 2026-08-25

Se retiran los manifests de build heredados que originaron alertas de PostCSS y node-tar en estas copias estáticas:

- `plantillas/bootstrap-4.0.0/`
- `plugins/bootstrap/5.1.0/`
- `js/typed.js/2.1.0/`
- `css/magic/1.4.6/`
- `css/animate/4.1.1/`

La remediación no modifica los CSS/JS servidos por el CDN; elimina únicamente metadatos de build no soportados para impedir instalaciones accidentales de cadenas vulnerables y evitar que GitHub trate esas copias estáticas como aplicaciones Node activas.
