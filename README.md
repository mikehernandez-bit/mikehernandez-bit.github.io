# Portafolio — Jhoan Hernández

Portafolio personal (UNS) enfocado a **Ingeniería de Sistemas / Software Development**.

## Características
- HTML + CSS + JavaScript (sin dependencias de build).
- Dark/Light mode (persistencia en `localStorage`).
- Español / Inglés.
- **Command palette** (Ctrl/Cmd + K) para navegación rápida.
- Animaciones suaves con `IntersectionObserver` + soporte `prefers-reduced-motion`.
- SEO básico: Open Graph, JSON-LD, `robots.txt`, `sitemap.xml`.

## Ejecutar localmente
> Recomendado: levantar un server simple para evitar problemas de CORS con algunos navegadores.

### Opción 1: VS Code
- Instala la extensión **Live Server**
- Click derecho en `index.html` → **Open with Live Server**

### Opción 2: Python
```bash
python -m http.server 5173
```
Luego abre `http://localhost:5173`

## Estructura
- `index.html` — página principal
- `css/styles.css` — estilos
- `js/main.js` — interacciones + i18n
- `assets/` — imágenes, CV y certificados

---
© Jhoan Hernández
