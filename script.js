// ===== DATOS DE PROYECTOS =====
// PERSONALIZA ESTOS PROYECTOS CON TUS PROPIOS TRABAJOS
const projects = [
    {
        id: 1,
        title: "Plataforma E-Commerce",
        description: "Tienda online completa con carrito de compras y panel administrativo.",
        fullDescription: "Desarrollé una plataforma completa de comercio electrónico que incluye gestión de inventario en tiempo real, sistema de pagos integrado con múltiples métodos, panel de administración para vendedores, y sistema de reseñas de productos. La aplicación maneja más de 1000 productos y procesa transacciones de forma segura con encriptación.",
        icon: "🛍️",
        technologies: ["HTML", "CSS", "JavaScript", "Python", "SQL"],
        demoUrl: "#",
        codeUrl: "#"
    },
    {
        id: 2,
        title: "Dashboard Analítico",
        description: "Panel de visualización de datos con gráficos interactivos en tiempo real.",
        fullDescription: "Sistema de visualización de datos empresariales que procesa información en tiempo real usando websockets. Incluye gráficos dinámicos con D3.js, filtros avanzados, exportación de reportes en PDF, y alertas personalizadas. Optimizado para manejar grandes volúmenes de datos con un rendimiento excelente gracias a técnicas de virtualización.",
        icon: "📊",
        technologies: ["JavaScript", "HTML", "CSS", "Python", "SQL"],
        demoUrl: "#",
        codeUrl: "#"
    },
    {
        id: 3,
        title: "Gestor de Tareas",
        description: "Aplicación de productividad con colaboración en equipo.",
        fullDescription: "Herramienta de productividad que permite crear, organizar y trackear tareas individuales y de equipo. Incluye sistema de etiquetas personalizables, niveles de prioridad, fechas límite con recordatorios, asignación de miembros, comentarios en tiempo real y notificaciones push. Backend robusto con autenticación JWT y sincronización en tiempo real.",
        icon: "✓",
        technologies: ["HTML", "CSS", "JavaScript", "Python", "SQL"],
        demoUrl: "#",
        codeUrl: "#"
    },
    {
        id: 4,
        title: "App Meteorológica",
        description: "Pronóstico del clima con geolocalización y alertas.",
        fullDescription: "Aplicación que consume múltiples APIs meteorológicas para mostrar pronósticos precisos de 7 días. Incluye geolocalización automática usando la API del navegador, búsqueda de ciudades con autocompletado, gráficos de tendencias de temperatura y precipitación, alertas de clima severo, y visualización de mapas interactivos con capas de radar.",
        icon: "🌤️",
        technologies: ["JavaScript", "HTML", "CSS"],
        demoUrl: "#",
        codeUrl: "#"
    },
    {
        id: 5,
        title: "Visualizador de Algoritmos",
        description: "Herramienta educativa para visualizar algoritmos paso a paso.",
        fullDescription: "Herramienta educativa interactiva que visualiza algoritmos de ordenamiento (bubble sort, quick sort, merge sort, heap sort) y búsqueda (binary search, DFS, BFS) con animaciones paso a paso. Implementado con C++ para el motor de algoritmos y JavaScript para la visualización. Permite ajustar velocidad de animación y tamaño del dataset.",
        icon: "🔍",
        technologies: ["C++", "JavaScript", "HTML", "CSS"],
        demoUrl: "#",
        codeUrl: "#"
    },
    {
        id: 6,
        title: "CMS para Portafolios",
        description: "Sistema de gestión de contenidos con editor visual.",
        fullDescription: "CMS personalizado que permite a diseñadores y desarrolladores gestionar su portafolio sin necesidad de código. Incluye editor drag-and-drop para layouts, galería de imágenes con optimización automática, blog integrado con markdown, formulario de contacto con protección anti-spam, y panel administrativo completo. SEO optimizado con meta tags dinámicos.",
        icon: "💼",
        technologies: ["HTML", "CSS", "JavaScript", "Python", "SQL"],
        demoUrl: "#",
        codeUrl: "#"
    }
];

// ===== FUNCIONES DE RENDERIZADO =====
function renderProjects() {
    const grid = document.getElementById('projectsGrid');
    
    grid.innerHTML = projects.map(project => `
        <div class="project-card fade-in" onclick="openModal(${project.id})">
            <div class="project-image">${project.icon}</div>
            <div class="project-content">
                <h3 class="project-title">${project.title}</h3>
                <p class="project-description">${project.description}</p>
                <div class="project-tech">
                    ${project.technologies.map(tech => 
                        `<span class="tech-tag ${tech.toLowerCase()}">${tech}</span>`
                    ).join('')}
                </div>
            </div>
        </div>
    `).join('');
    
    // Activar animaciones de fade-in
    observeElements();
}

// ===== MODAL =====
function openModal(projectId) {
    const project = projects.find(p => p.id === projectId);
    if (!project) return;
    
    document.getElementById('modalTitle').textContent = project.title;
    document.getElementById('modalDescription').textContent = project.fullDescription;
    
    // Renderizar tecnologías en el modal
    const techContainer = document.getElementById('modalTech');
    techContainer.innerHTML = project.technologies.map(tech => 
        `<span class="tech-tag ${tech.toLowerCase()}">${tech}</span>`
    ).join('');
    
    // Mostrar modal
    document.getElementById('projectModal').classList.add('active');
    document.body.style.overflow = 'hidden'; // Prevenir scroll en el fondo
}

function closeModal() {
    document.getElementById('projectModal').classList.remove('active');
    document.body.style.overflow = ''; // Restaurar scroll
}

// Cerrar modal al presionar ESC
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        closeModal();
    }
});

// ===== SMOOTH SCROLL =====
document.addEventListener('DOMContentLoaded', function() {
    // Scroll suave para enlaces de navegación
    const navLinks = document.querySelectorAll('.nav-links a, .hero-buttons a[href^="#"]');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            
            // Solo aplicar smooth scroll a enlaces internos
            if (href.startsWith('#')) {
                e.preventDefault();
                const targetId = href.substring(1);
                const targetElement = document.getElementById(targetId);
                
                if (targetElement) {
                    const offsetTop = targetElement.offsetTop - 80; // Compensar navbar
                    window.scrollTo({
                        top: offsetTop,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });
});

// ===== INTERSECTION OBSERVER PARA ANIMACIONES =====
function observeElements() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });
    
    // Observar todas las tarjetas de proyecto
    document.querySelectorAll('.fade-in').forEach(el => {
        observer.observe(el);
    });
}

// ===== NAVBAR SCROLL =====
let lastScroll = 0;
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    // Añadir sombra al navbar cuando se hace scroll
    if (currentScroll > 50) {
        navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
    } else {
        navbar.style.boxShadow = 'none';
    }
    
    lastScroll = currentScroll;
});

// ===== INICIALIZACIÓN =====
document.addEventListener('DOMContentLoaded', function() {
    // Renderizar proyectos
    renderProjects();
    
    // Observar elementos para animaciones
    setTimeout(() => {
        document.querySelectorAll('.skill-item').forEach(el => {
            el.classList.add('fade-in');
        });
        observeElements();
    }, 100);
});

// ===== UTILIDADES =====
// Función para copiar email al portapapeles (opcional)
function copyEmail(email) {
    if (navigator.clipboard) {
        navigator.clipboard.writeText(email).then(() => {
            alert('¡Email copiado al portapapeles!');
        });
    }
}

// Prevenir el cierre accidental al hacer clic dentro del modal
document.addEventListener('DOMContentLoaded', function() {
    const modalContent = document.querySelector('.modal-content');
    if (modalContent) {
        modalContent.addEventListener('click', function(e) {
            e.stopPropagation();
        });
    }
});