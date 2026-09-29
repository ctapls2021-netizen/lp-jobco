# JOBCO Paving — Bay Area Paving Contractors (Astro Landing Page)

Landing page de alta conversión desarrollada en **Astro** para **JOBCO Paving**, adaptando la estructura moderna de **Remoda** y aplicando la identidad de marca, el protocolo mobile estricto, webhooks seguros y página de agradecimiento.

## 📁 Estructura del Proyecto

- `public/api/submit-lead.php`: Proxy backend para servidores PHP (Cloudways / Apache / Nginx) con ofuscación anti-GitGuardian.
- `functions/api/submit-lead.js`: Función serverless para despliegues en Cloudflare Pages.
- `public/assets/`: Logotipos oficiales de JOBCO, insignias de reseñas (Google, Yelp, DIR, Trusted), imágenes de servicios y galería.
- `src/components/`:
  - `Header.astro`: Cabecera sticky con logo, llamada y CTA.
  - `Hero.astro`: Hero con jerarquía mobile estricta y formulario con selector interactivo (`Home` vs `Commercial Property`).
  - `TrustBar.astro`: Insignias de confianza y acreditaciones oficiales.
  - `ServicesSection.astro`: Pestañas para servicios residenciales y comerciales.
  - `ReviewsSection.astro`: Reseñas verificadas de propietarios (Marie L., Josh W., Michael P.).
  - `HowItWorks.astro`: Proceso en 3 pasos.
  - `WorkGallery.astro`: Galería con regla simétrica de 2 columnas en mobile.
  - `ServiceArea.astro`: Cobertura del Área de la Bahía y confirmación de ZIP.
  - `FaqSection.astro`: Acordeón semántico de 5 preguntas frecuentes.
  - `FinalCta.astro`: Banner de cierre y llamada directa al (510) 566-5484.
  - `Footer.astro`: Footer corporativo con datos de licencia y CSLB.
- `src/pages/index.astro`: Página principal.
- `src/pages/thank-you.astro`: Página de agradecimiento estándar de 100vh.

## 🚀 Comandos

```bash
# Instalar dependencias
npm install

# Modo desarrollo
npm run dev

# Compilar para producción (carpeta dist/)
npm run build

# Previsualizar build local
npm run preview
```
