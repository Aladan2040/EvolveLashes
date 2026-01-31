import React, { useState, useEffect } from 'react';
// En Astro, para importar imágenes en React a veces es mejor usar rutas absolutas si están en public
// o importarlas directo. Asumiremos que el logo está en src/assets y lo pasas como prop o ruta.
// Para facilitar, en Astro se suele usar la ruta directa si está en public o importación.
// Usaremos la importación estándar:
import logoImg from '../assets/logo-evolve.svg';

export default function Navbar() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    // Detectar si estamos en el Home para la transparencia
    // En Astro (MPA), verificamos la ruta actual del navegador
    const [isHome, setIsHome] = useState(false);

    useEffect(() => {
        setIsHome(window.location.pathname === '/' || window.location.pathname === '');

        const handleScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navbarStyle = !isHome || scrolled
        ? 'bg-white/95 backdrop-blur-md shadow-md py-2 translate-y-0'
        : 'bg-transparent py-6 -translate-y-full md:translate-y-0';

    const isDarkText = !isHome || scrolled;

    const handleWhatsApp = () => {
        window.open(`https://wa.me/51999999999?text=${encodeURIComponent("Hola EvolveLashes, quiero una cita.")}`, '_blank');
    };

    return (
        <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 transform ${navbarStyle}`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-20">

                    {/* LOGO CON ENLACE REAL */}
                    <a href="/" className="flex-shrink-0 cursor-pointer flex items-center">
                        <img
                            className={`transition-all duration-300 h-auto object-contain ${isDarkText ? 'w-32 md:w-48' : 'w-40 md:w-64 filter brightness-0 invert'}`}
                            src={logoImg.src} // Nota: En Astro + React, a veces se requiere .src si importas imagen
                            alt="Evolve Lash Logo"
                        />
                    </a>

                    {/* MENÚ DESKTOP CON ENLACES (href) */}
                    <div className="hidden md:flex space-x-8 items-center">
                        <a href="/" className={`font-medium transition hover:text-evolve-accent text-lg ${isDarkText ? 'text-gray-600' : 'text-white'}`}>Inicio</a>
                        <a href="/services" className={`font-medium transition hover:text-evolve-accent text-lg ${isDarkText ? 'text-gray-600' : 'text-white'}`}>Servicios</a>
                        <button onClick={handleWhatsApp} className={`px-6 py-2.5 rounded-full font-medium transition shadow-lg ${isDarkText ? 'bg-evolve-dark text-white hover:bg-evolve-accent' : 'bg-white text-evolve-dark hover:bg-evolve-nude'}`}>
                            Agendar Cita
                        </button>
                    </div>

                    {/* MENÚ MÓVIL */}
                    <div className="md:hidden flex items-center">
                        <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className={`p-2 focus:outline-none ${isDarkText ? 'text-evolve-dark' : 'text-white'}`}>
                            <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>

            {/* DESPLEGABLE MÓVIL */}
            <div className={`md:hidden absolute top-full left-0 w-full bg-white border-t border-gray-100 shadow-2xl h-screen flex flex-col items-center transition-all duration-500 ease-in-out origin-top ${isMobileMenuOpen ? 'opacity-100 translate-y-0 visible' : 'opacity-0 -translate-y-5 invisible'}`}>
                <div className="w-full px-6 py-8 space-y-6 flex flex-col items-center">
                    <a href="/" className="text-xl font-medium text-gray-800">Inicio</a>
                    <a href="/services" className="text-xl font-medium text-gray-800">Ver Carta de Servicios</a>
                    <button onClick={handleWhatsApp} className="w-full mt-4 bg-evolve-accent text-white py-4 rounded-xl font-bold shadow-md text-lg">Agendar por WhatsApp</button>
                </div>
            </div>
        </nav>
    );
}