// ===== DATOS DE PROYECTOS =====
// PERSONALIZA ESTOS PROYECTOS CON TUS PROPIOS TRABAJOS
const projects = [
    {
        id: 1,
        title: "Plataforma E-Commerce",
        description: "Tienda online beta con carrito de compras.",
        fullDescription: "desarrole una pagina E-Commerce la cual cuenta con la mayoria de las funciones de una tienda online(no se termino)cuenta con el registro de productos de prendas,diferentes apartados y mas funciones.",
        imageUrl: "https://www.adfactory.mx/wp-content/uploads/ecom.png",
        technologies: ["HTML", "CSS", "JavaScript","SQL"],
        demoUrl: "https://hgadigital.github.io/NOVA-STYLE/",
        codeUrl: "https://github.com/HGADIGITAL/NOVA-STYLE.git#"
    },
    {
        id: 2,
        title: "pagina de registro autolavado",
        description: "sitio web para el registro de carros y gastos en insumos asi como tambien el pago de empleados y calculo de mas cosas.",
        fullDescription: "Sistema de visualización de datos empresariales que procesa información en tiempo real. Incluye filtros avanzados, exportación de reportes en PDF. Optimizado para manejar grandes volúmenes de datos con un rendimiento excelente.",
        imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREbsoSFInpqVBSEX7hdVNno-L-o8e3rglLjQ&s",
        technologies: ["JavaScript", "HTML", "CSS"],
        demoUrl: "https://hgadigital.github.io/autolavado/",
        codeUrl: "https://github.com/HGADIGITAL/autolavado.git"
    },
    {
        id: 3,
        title: "brilla bar",
        description: "pagina web enfocada a las ventas de jabones .",
        fullDescription: "pagina dedicada a la visualizacion de productos higienicos los cuales pueden ser solicitados bajo pedido mediente correos.",
        imageUrl: "https://images.unsplash.com/photo-1556228578-8c89e6adf883?w=500&h=300&fit=crop",
        technologies: ["HTML", "CSS", "JavaScript","sql"],
        demoUrl: "https://hgadigital.github.io/brillabar/",
        codeUrl: "https://github.com/HGADIGITAL/brillabar.git"
    },
     {
        id: 4,
        title: "salon de bellezar",
        description: "salon de belleza con registro de citas y productos .",
        fullDescription: "pagina dedicada a la visualizacion de servicios de belleza como cortes de cabello,manicura,etc.",
        imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHrtsNMcAlJL2C_CLwo7vcHQZ36KrU9VXgxQ&s",
        technologies: ["HTML", "CSS", "JavaScript" ],
        demoUrl: " https://hgadigital.github.io/SALON-DE-BELLEZA/",
        codeUrl: "https://github.com/HGADIGITAL/SALON-DE-BELLEZA.git"
    }
];

// ===== FUNCIONES DE RENDERIZADO =====
function renderProjects() {
    const grid = document.getElementById('projectsGrid');
    
    grid.innerHTML = projects.map(project => `
        <div class="project-card fade-in" onclick="openModal(${project.id})">
            <div class="project-image" style="background-image: url('${project.imageUrl}'); background-size: cover; background-position: center; width: 100%; height: 300px;"></div>
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
    
    // Asignar enlaces del modal (demo y código) — buscar dentro del modal
    const modalEl = document.getElementById('projectModal');
    const demoLink = modalEl ? modalEl.querySelector('.modal-links .btn.btn-primary') : document.querySelector('.modal-links .btn.btn-primary');
    const codeLink = modalEl ? modalEl.querySelector('.modal-links .btn.btn-secondary') : document.querySelector('.modal-links .btn.btn-secondary');
    if (demoLink) {
        demoLink.href = project.demoUrl || '#';
        if (project.demoUrl && project.demoUrl !== '#') {
            demoLink.setAttribute('target', '_blank');
            demoLink.setAttribute('rel', 'noopener');
        } else {
            demoLink.removeAttribute('target');
            demoLink.removeAttribute('rel');
        }
    }
    if (codeLink) {
        codeLink.href = project.codeUrl || '#';
        if (project.codeUrl && project.codeUrl !== '#') {
            codeLink.setAttribute('target', '_blank');
            codeLink.setAttribute('rel', 'noopener');
        } else {
            codeLink.removeAttribute('target');
            codeLink.removeAttribute('rel');
        }
    }
    
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