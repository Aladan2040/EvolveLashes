/**
 * Script para manejar animaciones al scrollear usando Intersection Observer
 * Se ejecuta automáticamente cuando se importa este archivo
 */

export function initScrollAnimations() {
    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    // Agregar clase animada cuando el elemento entra en el viewport
                    entry.target.classList.add('animate-in');
                    // Dejar de observar después de que aparezca
                    observer.unobserve(entry.target);
                }
            });
        },
        {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        }
    );

    // Buscar todos los elementos con clases de animación
    const animatedElements = document.querySelectorAll(
        '.animate-fade-in-up, .animate-fade-in, .animate-slide-in-left, .animate-slide-in-right, .animate-scale-in'
    );

    animatedElements.forEach((el) => {
        observer.observe(el);
    });

    return observer;
}

// Inicializar automáticamente cuando el DOM está listo
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initScrollAnimations);
} else {
    initScrollAnimations();
}
