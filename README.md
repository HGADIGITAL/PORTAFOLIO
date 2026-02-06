# Portafolio Personal - Desarrollador Web

Portafolio personal minimalista y moderno para mostrar proyectos y habilidades como desarrollador web full stack.

## Características

- Diseño minimalista y elegante
- Totalmente responsive (móvil, tablet, desktop)
- Navegación suave entre secciones
- Modal interactivo para detalles de proyectos
- Animaciones sutiles al hacer scroll
- Rendimiento optimizado
- Accesible y semántico

## Tecnologías Utilizadas

- **HTML5** - Estructura semántica
- **CSS3** - Estilos y animaciones
- **JavaScript (Vanilla)** - Interactividad
- **Google Fonts** - Tipografía (Inter & Playfair Display)

## Estructura de Archivos

```
portafolio/
│
├── index.html          # Estructura principal del sitio
├── styles.css          # Estilos y diseño
├── script.js           # Funcionalidad e interactividad
└── README.md           # Este archivo
```

## Instalación y Uso

### Opción 1: Abrir directamente
1. Descarga todos los archivos en una carpeta
2. Abre `index.html` en tu navegador web

### Opción 2: Servidor local (recomendado)
```bash
# Si tienes Python instalado
python -m http.server 8000

# Si tienes Node.js instalado
npx http-server

# Si tienes PHP instalado
php -S localhost:8000
```

Luego abre `http://localhost:8000` en tu navegador.

## Personalización

### 1. Información Personal

En `index.html`, actualiza:

```html
<!-- Línea 19: Tu nombre -->
<a href="#" class="logo">TU NOMBRE</a>

<!-- Línea 29: Título -->
<h1 class="hero-title">Desarrollador Web Full Stack</h1>

<!-- Línea 30-33: Descripción -->
<p class="hero-description">
    Tu descripción personal aquí...
</p>

<!-- Línea 129-131: Enlaces de contacto -->
<a href="mailto:tu-email@ejemplo.com" class="btn btn-primary">Enviar email</a>
<a href="https://github.com/tu-usuario" target="_blank" class="btn btn-secondary">GitHub</a>
<a href="https://linkedin.com/in/tu-usuario" target="_blank" class="btn btn-secondary">LinkedIn</a>
```

### 2. Proyectos

En `script.js`, edita el array `projects` (líneas 3-69):

```javascript
const projects = [
    {
        id: 1,
        title: "Nombre de tu proyecto",
        description: "Descripción corta (1-2 líneas)",
        fullDescription: "Descripción detallada con características principales",
        icon: "🚀", // Emoji que represente tu proyecto
        technologies: ["HTML", "CSS", "JavaScript"], // Tecnologías usadas
        demoUrl: "https://link-demo.com", // URL de la demo
        codeUrl: "https://github.com/tu-usuario/repo" // URL del código
    },
    // Agrega más proyectos aquí...
];
```

### 3. Colores y Estilos

En `styles.css`, modifica las variables CSS (líneas 2-17):

```css
:root {
    --color-primary: #2563eb;        /* Color principal (azul) */
    --color-primary-dark: #1e40af;   /* Color hover */
    --color-text: #1a1a1a;           /* Color del texto */
    --color-text-light: #666666;     /* Texto secundario */
    /* ... más variables ... */
}
```

### 4. Tipografía

Para cambiar las fuentes, actualiza en `index.html` (línea 7):

```html
<link href="https://fonts.googleapis.com/css2?family=TU-FUENTE:wght@400;700&display=swap" rel="stylesheet">
```

Y en `styles.css`:

```css
--font-sans: 'TU-FUENTE', sans-serif;
```

## Secciones del Portafolio

### 1. **Hero Section**
- Presentación principal
- Descripción breve
- Botones de acción (Ver proyectos / Contactar)

### 2. **Proyectos**
- Grid responsive de tarjetas de proyecto
- Modal con información detallada
- Etiquetas de tecnologías usadas
- Enlaces a demo y código fuente

### 3. **Habilidades**
- Grid de habilidades técnicas
- Iconos SVG personalizados
- Descripciones breves

### 4. **Contacto**
- Enlaces a email
- Redes sociales (GitHub, LinkedIn)
- Call-to-action destacado

## Responsive Design

El portafolio es totalmente responsive con breakpoints en:
- **Desktop**: > 768px
- **Tablet**: 481px - 768px
- **Mobile**: < 480px

## Navegadores Compatibles

- Chrome (últimas 2 versiones)
- Firefox (últimas 2 versiones)
- Safari (últimas 2 versiones)
- Edge (últimas 2 versiones)

## Despliegue

### GitHub Pages
1. Crea un repositorio en GitHub
2. Sube todos los archivos
3. Ve a Settings > Pages
4. Selecciona la rama `main` y carpeta `/root`
5. Tu sitio estará en `https://tu-usuario.github.io/nombre-repo`

### Vercel
```bash
npm i -g vercel
vercel
```

## Lista de Tareas para Personalizar

- [ ] Cambiar nombre y título en el navbar
- [ ] Actualizar descripción del hero
- [ ] Agregar tus proyectos reales en `script.js`
- [ ] Actualizar enlaces de GitHub y LinkedIn
- [ ] Cambiar email de contacto
- [ ] Personalizar colores (opcional)
- [ ] Agregar tu favicon (opcional)
- [ ] Optimizar imágenes de proyectos (si añades)

## Licencia

Este proyecto es de código abierto y está disponible bajo la licencia MIT.

## Autor

**Tu Nombre**
- GitHub: [@HGADIGITAL](https://github.com/HGADIGITAL)
- Email: hecgarciapers@gmail.com
