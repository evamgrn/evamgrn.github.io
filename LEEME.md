# Web de VAXOR (teamvaxor.es)

Sitio estático hecho con Astro. Plan: `planes/2026-10-28-rediseno-web-teamvaxor.md`. Textos aprobados: `../textos-web.md`.

## Dónde está cada cosa

- `src/config.ts`: WhatsApp, Calendly, correo, webhook del formulario y datos legales. Si cambia algo de esto, se cambia solo aquí.
- `src/pages/`: una página por archivo (`index`, `consultoria`, `privacidad`, `aviso-legal`, `cookies`, `404`).
- `src/layouts/Base.astro`: cabecera, menú, botón «Consultoría», WhatsApp flotante, pie y metadatos.
- `src/styles/global.css`: colores, tipografías y piezas del estilo VAXOR (`salidas/2026-10-26-contenido/estilo-vaxor.md`).
- `public/`: logos, favicon e imagen para compartir (`compartir.png`, se genera desde `../fuentes-imagenes/compartir.html` con Chrome sin cabeceras).

## Ver, compilar y publicar

```sh
npx astro dev               # vista en local, se recarga al guardar (http://localhost:4321)
npx astro build             # compila en dist/
npx netlify-cli deploy --dir=dist           # vista previa con URL temporal
npx netlify-cli deploy --dir=dist --prod    # publica en teamvaxor.es
```

Node 22.23 en el Mac: Astro va fijado en la 6.4.8 (la 7 pide Node 22.23.4 o superior).

## Formulario de consultoría

Envía los datos (formulario codificado, sin preflight) al webhook del flujo de n8n «VAXOR · Consultoría web» (`scripts/prospeccion/wf_consultoria.py`). Ese flujo guarda o actualiza el contacto en el CRM, anota en Actividad, avisa a Eva por Telegram con el texto literal y un botón de WhatsApp, y envía al interesado un correo con Calendly y WhatsApp. Si se redespliega el flujo, usar `--mismo-webhook` para no cambiar la URL.

## Reglas

Sin «IA», «automatización», «automático», «leads» ni «auditoría». Nada inventado: las imágenes de ejemplo llevan la etiqueta «Ejemplo». Sin precios. Sin cookies de analítica (si se añaden, hay que poner banner y actualizar `cookies.astro`).
