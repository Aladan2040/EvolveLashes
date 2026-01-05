import React, { useState, useEffect } from 'react';
import logoImg from '../assets/logo-evolve.svg';

export default function Navbar({ currentPage, navigateTo, handleWhatsApp }) {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    // Detectar scroll solo para efectos visuales
    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // LÓGICA DE ESTILO SEGÚN LA PÁGINA
    const isHome = currentPage === 'home';

    // Navbar Sólido (Blanco) o Transparente
    const navbarStyle = !isHome || scrolled
        ? 'bg-white/95 backdrop-blur-md shadow-md py-2 translate-y-0'
        : 'bg-transparent py-6 -translate-y-full md:translate-y-0';

    // Color del texto y logo
    const isDarkText = !isHome || scrolled;

    return (
        <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 transform ${navbarStyle}`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-20">

                    {/* --- LOGO --- */}
                    <div className="flex-shrink-0 cursor-pointer flex items-center" onClick={() => navigateTo('home')}>
                        <img
                            className={`transition-all duration-300 h-auto object-contain ${isDarkText ? 'w-32 md:w-48' : 'w-40 md:w-64 filter brightness-0 invert'}`}
                            src={logoImg}
                            alt="Evolve Lash Logo"
                        />
                    </div>

                    {/* --- MENÚ DESKTOP --- */}
                    <div className="hidden md:flex space-x-8 items-center">
                        <NavButton label="Inicio" page="home" currentPage={currentPage} navigateTo={navigateTo} isDarkText={isDarkText} />
                        <NavButton label="Todos los Servicios" page="services" currentPage={currentPage} navigateTo={navigateTo} isDarkText={isDarkText} />

                        <button
                            onClick={() => handleWhatsApp()}
                            className={`px-6 py-2.5 rounded-full font-medium transition-all duration-300 shadow-lg transform hover:-translate-y-0.5 ${
                                isDarkText
                                    ? 'bg-evolve-dark text-white hover:bg-evolve-accent'
                                    : 'bg-white text-evolve-dark hover:bg-evolve-nude'
                            }`}
                        >
                            Agendar Cita
                        </button>
                    </div>

                    {/* --- BOTÓN MENÚ MÓVIL (HAMBURGUESA) --- */}
                    <div className="md:hidden flex items-center">
                        <button
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            className={`p-2 focus:outline-none transition-colors duration-300 ${isDarkText ? 'text-evolve-dark' : 'text-white'}`}
                        >
                            {/* Cambiamos el icono según si está abierto o cerrado */}
                            {isMobileMenuOpen ? (
                                <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            ) : (
                                <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                                </svg>
                            )}
                        </button>
                    </div>
                </div>
            </div>

            {/* --- MENÚ MÓVIL CON ANIMACIÓN --- */}
            {/* NOTA: Ya no usamos {isMobileMenuOpen && ...}.
               El div siempre existe, pero jugamos con las clases para mostrarlo/ocultarlo suavemente.
            */}
            <div
                className={`md:hidden absolute top-full left-0 w-full bg-white border-t border-gray-100 shadow-2xl h-screen flex flex-col items-center transition-all duration-500 ease-in-out origin-top ${
                    isMobileMenuOpen
                        ? 'opacity-100 translate-y-0 visible'  // ESTADO ABIERTO
                        : 'opacity-0 -translate-y-5 invisible'  // ESTADO CERRADO (Sube un poco y desaparece)
                }`}
            >
                <div className="w-full px-6 py-8 space-y-6 flex flex-col items-center">
                    <button
                        onClick={() => {navigateTo('home'); setIsMobileMenuOpen(false)}}
                        className="text-xl font-medium text-gray-800 hover:text-evolve-accent transition"
                    >
                        Inicio
                    </button>
                    <button
                        onClick={() => {navigateTo('services'); setIsMobileMenuOpen(false)}}
                        className="text-xl font-medium text-gray-800 hover:text-evolve-accent transition"
                    >
                        Ver Carta de Servicios
                    </button>

                    <div className="w-16 h-1 bg-evolve-accent rounded-full opacity-50"></div>

                    <button
                        onClick={() => { handleWhatsApp(); setIsMobileMenuOpen(false); }}
                        className="w-full mt-4 bg-evolve-accent text-white py-4 rounded-xl font-bold shadow-md text-lg active:scale-95 transition-transform"
                    >
                        Agendar por WhatsApp
                    </button>
                </div>
            </div>
        </nav>
    );
}

// Subcomponente
function NavButton({ label, page, currentPage, navigateTo, isDarkText }) {
    const isActive = currentPage === page;
    return (
        <button
            onClick={() => navigateTo(page)}
            className={`font-medium transition hover:text-evolve-accent relative group ${isDarkText ? 'text-gray-600' : 'text-white'}`}
        >
            {label}
            {isActive && <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-evolve-accent"></span>}
        </button>
    );
}