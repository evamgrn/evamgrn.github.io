# Web de VAXOR (teamvaxor.es)

Sitio estático hecho con Astro. Plan: `planes/2026-10-28-rediseno-web-teamvaxor.md`. Textos aprobados: `../textos-web.md`.

## Dónde está cada cosa

- `src/config.ts`: WhatsApp, Calendly, correo, webhook del formulario y datos legales. Si cambia algo de esto, se cambia solo aquí.
- `src/pages/`: una página por archivo (`index`, `consultoria`, `privacidad`, `aviso-legal`, `cookies`, `404`).
- `src/layouts/Base.astro`: cabecera, menú, botón «Consultoría», WhatsApp flotante, pie y metadatos.
- `src/styles/global.css`: colores y tipografías de la web (negro cálido, dorado #c69d63, EB Garamond en titulares, Inter en el texto). No es el estilo azul de Instagram.
- `public/`: logos, favicon, foto del edificio (`img/`), `.nojekyll` (imprescindible para que GitHub publique `_astro/`) e imagen para compartir (`compartir.png`, se genera desde `../fuentes-imagenes/compartir.html` con Chrome sin cabeceras).

## Ver, compilar y publicar

```sh
npx astro dev               # vista en local, se recarga al guardar (http://localhost:4321)
npx astro build             # compila en dist/
./publicar.sh               # compila y publica en GitHub Pages (tarda 1-2 min en verse)
```

Alojamiento: **GitHub Pages**, cuenta `evamgrn`, repositorio público `evamgrn/evamgrn.github.io`. La rama `main` guarda el código y la rama `gh-pages`, la web compilada (la sobrescribe `publicar.sh`). Después de cambiar algo, sube también el código: `git add -A && git commit -m "…" && git push`. Netlify (proyecto «teamvaxor») se dejó de usar el 29/10 porque el plan gratuito pone «Powered by Netlify» y no se puede quitar.

Node 22.23 en el Mac: Astro va fijado en la 6.4.8 (la 7 pide Node 22.23.4 o superior).

## Formulario de consultoría

Envía los datos (formulario codificado, sin preflight) al webhook del flujo de n8n «VAXOR · Consultoría web» (`scripts/prospeccion/wf_consultoria.py`). Ese flujo guarda o actualiza el contacto en el CRM, anota en Actividad, avisa a Eva por Telegram con el texto literal y un botón de WhatsApp, y envía al interesado un correo con Calendly y WhatsApp. Si se redespliega el flujo, usar `--mismo-webhook` para no cambiar la URL.

## Reglas

Sin «IA», «automatización», «automático», «leads» ni «auditoría». Nada inventado: las imágenes de ejemplo llevan la etiqueta «Ejemplo». Sin precios. Sin cookies de analítica (si se añaden, hay que poner banner y actualizar `cookies.astro`).
