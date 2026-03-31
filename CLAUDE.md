# CLAUDE.md — Portfolio de Guillermo Ariel del Fresno

> Documento de referencia para agentes de IA que trabajen en este proyecto.
> Leé esto **completo** antes de tocar cualquier archivo.

---

## Rol del agente

Actuás como **desarrollador frontend senior especializado en UX/UI y responsive design**.

Tus responsabilidades concretas:

- Mantener y evolucionar este portfolio personal garantizando calidad, estética y rendimiento.
- Toda decisión de UI debe estar justificada por criterios de UX, no solo por conveniencia técnica.
- Prioridad de diseño: **Desktop first → Mobile (320px+) → Tablet**.
- Nunca rompas lo que ya funciona. Mejora progresiva siempre.
- Si detectás un problema estructural, señalalo antes de resolver la tarea puntual.
- Código limpio, modular y tipado. Sin over-engineering.

---

## Stack tecnológico

| Capa | Tecnología |
|---|---|
| Framework | Next.js 15.2.4 (App Router) |
| Lenguaje | TypeScript 5.x |
| Estilos | Tailwind CSS 3.4 + CSS custom properties |
| Animaciones | Framer Motion 11 |
| Email | EmailJS (`@emailjs/browser`) |
| Iconos | `react-icons` (Fi, Hi, Bs, Si, Fa) |
| Deploy | Vercel |
| Node | React 18 |

---

## Arquitectura del proyecto

```
src/
├── app/
│   ├── layout.tsx          # Root layout, metadata SEO, fuente Inter
│   ├── page.tsx            # Home — orquesta todos los componentes
│   └── globals.css         # Variables CSS, utilidades globales, scrollbar
│
├── components/
│   ├── navbar/
│   │   └── NavBar.tsx      # Header fijo, scroll detection, mobile menu
│   ├── hero/
│   │   └── Hero.tsx        # Landing section, roles rotativos, CTAs
│   ├── work/
│   │   ├── Work.tsx        # Sección proyectos — featured + académicos
│   │   ├── ProjectCard.tsx # Card storytelling (Problema/Solución/Resultado)
│   │   └── AcademicProjectCard.tsx  # Card compacta para proyectos académicos
│   ├── resume/
│   │   └── Resume.tsx      # Educación + certificaciones con modal de imagen
│   ├── skills/
│   │   └── Skills.tsx      # Bento grid de tecnologías (featured + rest)
│   ├── contact/
│   │   └── Contact.tsx     # Banner disponibilidad + formulario EmailJS + social links
│   └── footer/
│       └── Footer.tsx      # Copyright + social icons
│
└── data/
    └── index.ts            # ÚNICA fuente de verdad de contenido
```

```
public/
├── projects/
│   ├── tbs-guild.png       # Imagen del proyecto TBS
│   └── mitico.png          # Imagen del proyecto Mítico
└── certifications/
    ├── CertiProf.png
    ├── DIploma CTD - Guillermo Ariel del Fresno.png
    └── Desarrollo con IA.png
```

> Las imágenes de proyectos van en `public/projects/`.
> Las imágenes de certificados van en `public/certifications/`.
> No hay assets en `src/` — el directorio `src/assets/` fue eliminado.

---

## Fuente de verdad: `src/data/index.ts`

**Todo el contenido del sitio vive aquí.** Nunca hardcodees texto o datos dentro de un componente.

### Exports disponibles

```ts
navLinks          // Links de navegación
skills            // Stack tecnológico (featured: true = card grande)
projects          // Proyectos principales (TBS, Mítico) — formato storytelling
academicProjects  // Proyectos académicos CTD — formato compacto
education         // Educación formal
certifications    // Certificaciones profesionales (con campo image opcional)
social            // URLs de GitHub, LinkedIn, WhatsApp
```

### Estructura de `projects`

```ts
{
  id: number
  number: string        // "01", "02" — decorativo
  title: string
  subtitle: string
  problem: string       // Historia: qué necesitaba el cliente
  solution: string      // Historia: qué construiste
  result: string        // Historia: qué impacto tuvo
  tech: string[]
  demo: string          // URL de producción
  github: string
  image: string         // Ruta desde /public → "/projects/nombre.png"
}
```

### Estructura de `academicProjects`

```ts
{
  id: number
  number: string        // "A1", "A2" — decorativo
  title: string
  description: string
  tech: string[]
  demo: string          // Puede ser "" si no hay deploy
  github: string
}
```

### Estructura de `certifications`

```ts
{
  title: string
  issuer: string
  id: string            // Puede ser "" si no aplica
  color: string         // Hex del color del badge
  image?: string        // Ruta desde /public → "/certifications/nombre.png" (opcional)
}
```

> Si `image` está presente, la card de certificación se vuelve clickeable y muestra el certificado en un modal con animación.

---

## Sistema de diseño

### Paleta de colores

```css
--bg:           #09090b   /* Fondo principal */
--surface:      #18181b   /* Superficie de cards */
--surface-hover:#27272a
--border:       rgba(255,255,255,0.08)
--text:         #fafafa
--text-muted:   #a1a1aa
--accent:       #8b5cf6   /* Violeta — color primario de marca */
--accent-hover: #7c3aed
--accent-glow:  rgba(139,92,246,0.2)
```

Paleta Tailwind en uso: `zinc-*` (fondos/textos neutros), `violet-*` (acento).

### Breakpoints (Tailwind — min-width, definidos en `tailwind.config.ts`)

```
xs:  480px   (custom — definido en tailwind.config.ts)
sm:  640px
md:  768px   ← punto principal de cambio desktop/mobile
lg:  1024px
xl:  1280px
2xl: 1536px
```

> **IMPORTANTE:** Los breakpoints son **min-width** (mobile-first estándar).
> `md:grid-cols-2` = 2 columnas en pantallas ≥ 768px.
> Nunca usar breakpoints con `{ max: "..." }`.

### Clases utilitarias (globals.css)

```css
.glass          /* bg translúcido + blur + border */
.glass-hover    /* transición hover para glass */
.accent-glow    /* box-shadow violeta suave */
.text-gradient  /* gradiente blanco → violeta en texto */
.section-padding /* 4rem mobile / 6rem md+ */
```

### Contenedores

- Ancho máximo estándar: `max-w-6xl mx-auto` (1152px)
- Contact section: `max-w-4xl mx-auto` (más estrecho, centrado)
- Padding horizontal: `px-6` en todas las secciones

---

## Patrones de componentes

### Animaciones con Framer Motion

Patrón de entrada estándar (scroll-triggered):
```tsx
<motion.div
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.5 }}
>
```

Stagger para grids (delay por índice):
```tsx
<motion.div
  custom={index}
  variants={fadeUp}
  initial="hidden"
  whileInView="show"
  viewport={{ once: true }}
>
```

Expansión animada (acordeón):
```tsx
<motion.div
  initial={{ opacity: 0, height: 0 }}
  animate={{ opacity: 1, height: "auto" }}
  exit={{ opacity: 0, height: 0 }}
  transition={{ duration: 0.4, ease: "easeInOut" }}
  className="overflow-hidden"
>
```

### Cards

Usar siempre `.glass` + `.glass-hover` + `rounded-2xl` para consistencia visual.

### Links externos

Siempre: `target="_blank" rel="noopener noreferrer"`.

### Navegación interna

Siempre via `document.querySelector(href)?.scrollIntoView({ behavior: "smooth" })`.
No usar `<Link>` de Next.js para anclas de la misma página.

---

## Secciones del sitio (orden en page.tsx)

| # | Componente | ID | Descripción |
|---|---|---|---|
| 1 | `NavBar` | — | Header fijo, sticky |
| 2 | `Hero` | `#inicio` | Landing, nombre, rol rotativo, CTAs |
| 3 | `Work` | `#proyectos` | Proyectos featured + acordeón académicos |
| 4 | `Resume` | `#educacion` | Educación + certificaciones |
| 5 | `Skills` | `#skills` | Bento grid de tecnologías |
| 6 | `Contact` | `#contacto` | Banner disponibilidad + formulario EmailJS + social |
| 7 | `Footer` | — | Copyright + social icons |

---

## Reglas de desarrollo

### Contenido
- Todo cambio de texto/datos → editar **solo** `src/data/index.ts`.
- Proyectos principales (home): solo `TBS Guild` y `Mítico`.
- Proyectos académicos: accesibles vía acordeón en la sección `Work`, nunca en el primer pantallazo.

### Responsive
- Probar siempre en: 320px, 480px, 768px, 1024px, 1280px.
- Sin scroll horizontal en ningún breakpoint.
- Sin solapamientos de elementos.
- Texto: no usar tamaños fijos grandes en mobile. Escalar con breakpoints.

### Código
- Todos los componentes nuevos: `.tsx` en `src/components/`.
- Tipado explícito en interfaces de props.
- `"use client"` solo en componentes con hooks o eventos del browser.
- No crear helpers para operaciones de una sola vez.
- No agregar error handling para casos que no pueden ocurrir.

### Estilos
- Tailwind first. CSS personalizado solo cuando Tailwind no alcanza.
- No usar estilos inline salvo para valores dinámicos (colores de brand, gradientes variables).
- Mantener consistencia con la paleta existente. No introducir nuevos colores sin justificación.

### Animaciones
- Framer Motion para animaciones complejas. CSS transitions para microinteracciones simples.
- `viewport={{ once: true }}` en todas las animaciones scroll-triggered.
- No animar más de lo necesario. Menos es más.

### Imágenes
- Imágenes de proyectos: `public/projects/nombre.png`.
- Imágenes de certificados: `public/certifications/nombre.png`.
- Usar `<img>` con fallback `onError` (ver patrón en `ProjectCard.tsx`).
- Aspect ratio: `aspect-video` para previews de proyectos.

---

## Lo que NO hacer

- No cambiar el esquema de colores sin consultar — el violeta oscuro es parte de la identidad.
- No agregar librerías de UI externas (shadcn, MUI, etc.) — el diseño es custom intencional.
- No usar `router.push()` para navegación entre secciones — usar scroll suave.
- No poner contenido de proyectos académicos en el primer pantallazo.
- No romper el patrón storytelling (Problema → Solución → Resultado) de los proyectos principales.
- No crear archivos `.jsx` — el proyecto es 100% TypeScript (`.tsx`/`.ts`).
- No agregar assets en `src/` — todas las imágenes públicas van en `public/`.
