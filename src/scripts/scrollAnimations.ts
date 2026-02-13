/**
 * Premium Scroll Animations System
 * - Intersection Observer for scroll-triggered animations
 * - Parallax effects for background elements
 * - Animated counters
 * - 3D tilt card effect
 */

export function initScrollAnimations() {
    // ── Scroll-triggered animations ──────────────────
    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate-in');
                    observer.unobserve(entry.target);
                }
            });
        },
        {
            threshold: 0.08,
            rootMargin: '0px 0px -40px 0px'
        }
    );

    const animatedElements = document.querySelectorAll(
        '.animate-fade-in-up, .animate-fade-in, .animate-slide-in-left, .animate-slide-in-right, .animate-scale-in, .animate-reveal-up, .number-highlight'
    );

    animatedElements.forEach((el) => {
        observer.observe(el);
    });

    // ── Parallax effect ──────────────────────────────
    const parallaxElements = document.querySelectorAll('[data-parallax]');
    if (parallaxElements.length > 0) {
        let ticking = false;
        const handleParallax = () => {
            if (!ticking) {
                requestAnimationFrame(() => {
                    const scrollY = window.scrollY;
                    parallaxElements.forEach((el) => {
                        const speed = parseFloat((el as HTMLElement).dataset.parallax || '0.3');
                        const offset = scrollY * speed;
                        (el as HTMLElement).style.transform = `translateY(${offset}px)`;
                    });
                    ticking = false;
                });
                ticking = true;
            }
        };
        window.addEventListener('scroll', handleParallax, { passive: true });
    }

    // ── Animated counters ────────────────────────────
    const counterElements = document.querySelectorAll('[data-count-to]');
    if (counterElements.length > 0) {
        const counterObserver = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        const el = entry.target as HTMLElement;
                        const target = parseInt(el.dataset.countTo || '0');
                        const prefix = el.dataset.countPrefix || '';
                        const suffix = el.dataset.countSuffix || '';
                        const duration = parseInt(el.dataset.countDuration || '2000');

                        animateCounter(el, target, prefix, suffix, duration);
                        counterObserver.unobserve(el);
                    }
                });
            },
            { threshold: 0.5 }
        );

        counterElements.forEach((el) => counterObserver.observe(el));
    }

    // ── 3D Tilt effect ───────────────────────────────
    const tiltCards = document.querySelectorAll('.tilt-card');
    tiltCards.forEach((card) => {
        const el = card as HTMLElement;

        el.addEventListener('mousemove', (e: MouseEvent) => {
            const rect = el.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;

            const rotateX = ((y - centerY) / centerY) * -5;
            const rotateY = ((x - centerX) / centerX) * 5;

            el.style.transform = `perspective(800px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
        });

        el.addEventListener('mouseleave', () => {
            el.style.transform = 'perspective(800px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)';
        });
    });

    // ── Magnetic hover effect ─────────────────────────
    const magneticElements = document.querySelectorAll('.magnetic-hover');
    magneticElements.forEach((el) => {
        const htmlEl = el as HTMLElement;

        htmlEl.addEventListener('mousemove', (e: MouseEvent) => {
            const rect = htmlEl.getBoundingClientRect();
            const x = e.clientX - rect.left - rect.width / 2;
            const y = e.clientY - rect.top - rect.height / 2;
            htmlEl.style.transform = `translate(${x * 0.15}px, ${y * 0.15}px)`;
        });

        htmlEl.addEventListener('mouseleave', () => {
            htmlEl.style.transform = 'translate(0, 0)';
        });
    });

    return observer;
}

function animateCounter(
    el: HTMLElement,
    target: number,
    prefix: string,
    suffix: string,
    duration: number
) {
    const start = 0;
    const startTime = performance.now();

    function update(currentTime: number) {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);

        // Ease out quad
        const eased = 1 - (1 - progress) * (1 - progress);
        const current = Math.floor(eased * (target - start) + start);

        el.textContent = `${prefix}${current}${suffix}`;

        if (progress < 1) {
            requestAnimationFrame(update);
        } else {
            el.textContent = `${prefix}${target}${suffix}`;
        }
    }

    requestAnimationFrame(update);
}

// Inicializar automáticamente cuando el DOM está listo
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initScrollAnimations);
} else {
    initScrollAnimations();
}
