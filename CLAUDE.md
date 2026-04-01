# CLAUDE.md — Portfolio Guillermo Ariel del Fresno

> Leé esto completo antes de tocar cualquier archivo.

---

## Rol

**Developer frontend senior, UX/UI y responsive design.** Toda decisión de UI requiere justificación UX. Diseño: Desktop first → Mobile (320px+) → Tablet. Señalá problemas estructurales antes de resolver la tarea puntual.

---

## Stack

Next.js 15.2.4 (App Router) · TypeScript 5.x · Tailwind CSS 3.4 · Framer Motion 11 · EmailJS · react-icons · Vercel · React 18

---

## Arquitectura

```
src/
├── app/           layout.tsx · page.tsx · globals.css
├── components/
│   ├── navbar/    NavBar.tsx
│   ├── hero/      Hero.tsx
│   ├── work/      Work.tsx · ProjectCard.tsx · AcademicProjectCard.tsx
│   ├── resume/    Resume.tsx
│   ├── skills/    Skills.tsx
│   ├── contact/   Contact.tsx
│   └── footer/    Footer.tsx
└── data/          index.ts  ← ÚNICA fuente de verdad

public/
├── projects/      tbs-guild.png · mitico.png
└── certifications/  CertiProf.png · DIploma CTD - Guillermo Ariel del Fresno.png · Desarrollo con IA.png
```

**Orden de secciones** (page.tsx): NavBar → Hero(`#inicio`) → Work(`#proyectos`) → Resume(`#educacion`) → Skills(`#skills`) → Contact(`#contacto`) → Footer

---

## Fuente de verdad: `src/data/index.ts`

**Nunca hardcodees texto en un componente.** Exports: `navLinks · skills · projects · academicProjects · education · certifications · social`

Shapes clave:
- `projects`: `{ id, number, title, subtitle, problem, solution, result, tech[], demo, github, image }` — imagen en `/projects/nombre.png`
- `academicProjects`: `{ id, number, title, description, tech[], demo, github }`
- `certifications`: `{ title, issuer, id, color, image? }` — si `image` presente, la card abre modal con el certificado

---

## Sistema de diseño

**Paleta:** `--bg #09090b` · `--surface #18181b` · `--accent #8b5cf6` (violeta, identidad de marca — no cambiar sin consultar). Tailwind: `zinc-*` + `violet-*`.

**Breakpoints** (min-width, en `tailwind.config.ts`): `xs:480px` · `sm:640px` · `md:768px` · `lg:1024px` · `xl:1280px`. Nunca usar `{ max: "..." }`.

**Utilidades globals.css:** `.glass` · `.glass-hover` · `.accent-glow` · `.text-gradient` · `.section-padding`

**Contenedores:** `max-w-6xl mx-auto px-6` (estándar) · `max-w-4xl` (Contact).

**Cards:** siempre `.glass + .glass-hover + rounded-2xl`.

---

## Reglas de desarrollo

- **Contenido:** solo editar `src/data/index.ts`. Proyectos en home: solo TBS Guild y Mítico. Académicos: solo vía acordeón en Work.
- **Componentes:** `.tsx` en `src/components/`. Props tipadas explícitamente. `"use client"` solo si hay hooks/eventos browser.
- **Estilos:** Tailwind first. Inline solo para valores dinámicos. No introducir colores nuevos sin justificación.
- **Animaciones:** Framer Motion para complejas, CSS transitions para micro. Siempre `viewport={{ once: true }}` en scroll-triggered.
- **Imágenes:** proyectos → `public/projects/`. Certificados → `public/certifications/`. Usar `<img>` con `onError` fallback.
- **Navegación interna:** `document.querySelector(href)?.scrollIntoView({ behavior: "smooth" })`. No usar `<Link>` de Next.js para anclas.
- **Responsive:** verificar en 320px · 480px · 768px · 1024px · 1280px. Sin scroll horizontal ni solapamientos.

---

## NO hacer

- Cambiar paleta de colores sin consultar.
- Agregar librerías de UI externas (shadcn, MUI, etc.).
- Crear archivos `.jsx` — el proyecto es 100% TypeScript.
- Agregar assets en `src/` — todo lo público va en `public/`.
- Mostrar proyectos académicos en el primer pantallazo.
- Romper el patrón storytelling Problema → Solución → Resultado.
- Usar `router.push()` para navegación entre secciones.
