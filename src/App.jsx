import React, { useState } from 'react';

// --- IMPORTACIÓN DE IMÁGENES ---
import logoImg from './assets/logo-evolve.jpg';
import heroImg from './assets/hero-bg.jpg';
import serviceImg from './assets/service1.jpg';

function App() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    // Función para redirigir a WhatsApp
    const handleWhatsApp = (mensajePersonalizado = "") => {
        const numeroTelefono = "51999999999"; // TU NÚMERO AQUÍ
        const mensajeDefault = "Hola EvolveLashes, quisiera más información para agendar una cita 👁️✨";
        const mensajeFinal = mensajePersonalizado || mensajeDefault;
        const url = `https://wa.me/${numeroTelefono}?text=${encodeURIComponent(mensajeFinal)}`;
        window.open(url, '_blank');
    };

    // Función para ir al inicio (recarga o scroll)
    const goHome = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        setIsMobileMenuOpen(false); // Cerrar menú móvil si está abierto
    };

    return (
        <div className="font-sans text-evolve-dark w-full overflow-x-hidden">

            {/* --- NAVBAR --- */}
            <nav className="fixed top-0 left-0 w-full z-50 bg-white/95 backdrop-blur-md shadow-sm transition-all duration-300">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center h-24"> {/* Altura aumentada a h-24 */}

                        {/* Logo - Ajustado tamaño y link */}
                        <div className="flex-shrink-0 cursor-pointer transition-transform hover:scale-105" onClick={goHome}>
                            <img
                                className="h-20 w-auto object-contain"
                                src={logoImg}
                                alt="Evolve Lash Logo"
                            />
                        </div>

                        {/* Menú Desktop (Pantallas grandes) */}
                        <div className="hidden md:flex space-x-8 items-center">
                            <NavLink href="#servicios">Servicios</NavLink>
                            <NavLink href="#nosotros">Nosotros</NavLink>
                            <NavLink href="#faq">FAQ</NavLink>
                            <button
                                onClick={() => handleWhatsApp()}
                                className="bg-evolve-dark text-white px-6 py-3 rounded-full font-medium hover:bg-evolve-accent hover:text-white transition-all duration-300 shadow-lg transform hover:-translate-y-1"
                            >
                                Agendar Cita
                            </button>
                        </div>

                        {/* Botón Menú Móvil (Hamburguesa) */}
                        <div className="md:hidden flex items-center">
                            <button
                                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                                className="text-evolve-dark hover:text-evolve-accent focus:outline-none p-2"
                            >
                                <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    {isMobileMenuOpen ? (
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                    ) : (
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                                    )}
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>

                {/* Menú Móvil Desplegable */}
                {isMobileMenuOpen && (
                    <div className="md:hidden bg-white border-t border-gray-100 absolute w-full shadow-xl">
                        <div className="px-4 pt-2 pb-6 space-y-2 flex flex-col items-center">
                            <MobileNavLink href="#servicios" onClick={() => setIsMobileMenuOpen(false)}>Servicios</MobileNavLink>
                            <MobileNavLink href="#nosotros" onClick={() => setIsMobileMenuOpen(false)}>Nosotros</MobileNavLink>
                            <MobileNavLink href="#faq" onClick={() => setIsMobileMenuOpen(false)}>FAQ</MobileNavLink>
                            <button
                                onClick={() => { handleWhatsApp(); setIsMobileMenuOpen(false); }}
                                className="w-full mt-4 bg-evolve-accent text-white py-3 rounded-xl font-bold shadow-md"
                            >
                                Agendar por WhatsApp
                            </button>
                        </div>
                    </div>
                )}
            </nav>

            {/* --- HERO SECTION (Portada) --- */}
            <div className="relative h-screen w-full flex items-center justify-center bg-evolve-dark">
                {/* Imagen de fondo con overlay mejorado */}
                <div className="absolute inset-0 overflow-hidden">
                    <img src={heroImg} alt="Mirada impactante" className="w-full h-full object-cover opacity-50" />
                    {/* Gradiente para mejorar lectura del texto */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/30"></div>
                </div>

                <div className="relative z-10 max-w-5xl mx-auto px-6 text-center fade-in-up">
                    <span className="text-evolve-accent uppercase tracking-[0.2em] font-bold text-sm md:text-base mb-4 block">
                        Estudio Especializado
                    </span>
                    <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white tracking-tight mb-6 leading-tight">
                        EVOLVE <span className="text-transparent bg-clip-text bg-gradient-to-r from-evolve-nude to-white">LASH</span>
                    </h1>
                    <p className="mt-4 text-xl md:text-2xl text-evolve-nude font-light max-w-2xl mx-auto leading-relaxed">
                        Diseñamos miradas que cautivan. Experiencia, calidad y arte en cada pestaña.
                    </p>
                    <div className="mt-10 flex flex-col md:flex-row gap-4 justify-center">
                        <button
                            onClick={() => handleWhatsApp("Hola, quiero renovar mi mirada.")}
                            className="px-8 py-4 bg-evolve-accent text-white font-bold rounded-full shadow-[0_0_20px_rgba(197,160,101,0.5)] hover:bg-[#b08d55] transition transform hover:scale-105"
                        >
                            Reservar Cita
                        </button>
                        <a
                            href="#servicios"
                            className="px-8 py-4 bg-transparent border border-white text-white font-bold rounded-full hover:bg-white hover:text-evolve-dark transition"
                        >
                            Ver Servicios
                        </a>
                    </div>
                </div>
            </div>

            {/* --- SERVICIOS --- */}
            <section id="servicios" className="py-24 bg-white w-full">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center mb-20">
                        <span className="text-evolve-accent font-bold uppercase tracking-widest text-sm">Lo que hacemos</span>
                        <h2 className="text-4xl md:text-5xl font-bold text-evolve-dark mt-2 mb-4">Nuestros Servicios</h2>
                        <div className="w-24 h-1.5 bg-evolve-accent mx-auto rounded-full"></div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
                        <ServiceCard
                            title="Lifting de Pestañas"
                            price="S/ 60"
                            time="1h 15m"
                            description="Tratamiento natural que eleva y estira tus pestañas desde la raíz, creando un efecto de mayor longitud y espesor."
                            tag="Más Popular"
                        />
                        <ServiceCard
                            title="Volumen Ruso"
                            price="S/ 120"
                            time="2h 30m"
                            description="Técnica avanzada donde se aplican abanicos de pestañas ultra finas para lograr densidad y dramatismo."
                            isPremium={true}
                        />
                        <ServiceCard
                            title="Efecto Rímel"
                            price="S/ 90"
                            time="1h 45m"
                            description="La combinación perfecta entre naturalidad y volumen intermedio. Ideal para el día a día sin maquillaje."
                        />
                    </div>
                </div>
            </section>

            {/* --- NOSOTROS (Diseño mejorado) --- */}
            <section id="nosotros" className="py-24 bg-evolve-nude-light w-full relative overflow-hidden">
                {/* Elemento decorativo de fondo */}
                <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-evolve-nude rounded-full opacity-20 blur-3xl"></div>

                <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center gap-16 relative z-10">
                    <div className="flex-1 w-full">
                        <div className="relative">
                            <div className="absolute inset-0 bg-evolve-accent transform translate-x-4 translate-y-4 rounded-2xl"></div>
                            <img
                                src={serviceImg}
                                alt="Especialista EvolveLashes"
                                className="relative rounded-2xl shadow-2xl w-full object-cover aspect-[4/5]"
                            />
                        </div>
                    </div>

                    <div className="flex-1 text-left">
                        <h2 className="text-4xl font-bold text-evolve-dark mb-6 leading-tight">
                            Pasión por la <br/>
                            <span className="text-evolve-accent">Belleza de tu Mirada</span>
                        </h2>
                        <div className="space-y-6 text-gray-700 text-lg leading-relaxed">
                            <p>
                                ¡Hola! Soy la fundadora de <strong>EvolveLashes</strong>. Mi misión va más allá de aplicar pestañas; se trata de diseñar una mirada que refleje tu personalidad y estilo único.
                            </p>
                            <p>
                                Con años de experiencia y capacitación constante, utilizo productos de grado médico e hipoalergénicos para garantizar no solo belleza, sino la salud integral de tus pestañas naturales.
                            </p>
                        </div>

                        <div className="mt-10 grid grid-cols-2 gap-6">
                            <div className="border-l-4 border-evolve-accent pl-4">
                                <p className="text-3xl font-bold text-evolve-dark">+500</p>
                                <p className="text-sm text-gray-600">Clientas Felices</p>
                            </div>
                            <div className="border-l-4 border-evolve-accent pl-4">
                                <p className="text-3xl font-bold text-evolve-dark">100%</p>
                                <p className="text-sm text-gray-600">Seguro e Higiénico</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* --- FAQ --- */}
            <section id="faq" className="py-24 bg-white w-full">
                <div className="max-w-3xl mx-auto px-6">
                    <h2 className="text-3xl md:text-4xl font-bold text-center text-evolve-dark mb-12">Preguntas Frecuentes</h2>
                    <div className="space-y-4">
                        <FaqItem
                            question="¿Cuánto tiempo duran las extensiones?"
                            answer="Tienen una duración aproximada de 3 a 4 semanas, dependiendo del ciclo natural de caída de tus pestañas y de los cuidados posteriores que realices en casa."
                        />
                        <FaqItem
                            question="¿El procedimiento duele o es incómodo?"
                            answer="¡Para nada! Es un procedimiento totalmente indoloro y relajante. Mantenemos tus ojos cerrados durante todo el proceso y muchas clientas aprovechan para tomar una siesta."
                        />
                        <FaqItem
                            question="¿Cómo debo asistir a mi cita?"
                            answer="Es fundamental que vengas con los ojos completamente limpios, sin rímel, delineador ni cremas en el contorno de ojos para asegurar la máxima adherencia del adhesivo."
                        />
                        <FaqItem
                            question="¿Puedo mojarme las pestañas después?"
                            answer="Recomendamos no mojarlas durante las primeras 24 horas. Después de ese tiempo, la higiene diaria con un limpiador específico (lash shampoo) es esencial para mantenerlas sanas."
                        />
                    </div>
                </div>
            </section>

            {/* --- FOOTER --- */}
            <footer className="bg-evolve-dark text-white py-16 w-full">
                <div className="max-w-7xl mx-auto px-6 flex flex-col items-center text-center">
                    <img src={logoImg} alt="Logo Footer" className="h-20 mb-8 filter brightness-0 invert opacity-90" />

                    <p className="max-w-md text-gray-400 mb-10 text-lg">
                        Realzando tu belleza natural con técnicas seguras y diseños personalizados en San Miguel, Lima.
                    </p>

                    <div className="flex gap-8 mb-12">
                        <SocialLink href="#" name="Instagram" />
                        <SocialLink href="#" name="TikTok" />
                        <SocialLink href="#" name="Facebook" />
                    </div>

                    <div className="w-full border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
                        <p>© 2025 EvolveLashes. Todos los derechos reservados.</p>
                        <p className="mt-2 md:mt-0">Diseñado con ✨ para ti</p>
                    </div>
                </div>
            </footer>

        </div>
    );
}

// --- COMPONENTES MODERNOS ---

function NavLink({ href, children }) {
    return (
        <a
            href={href}
            className="text-gray-600 font-medium hover:text-evolve-accent relative group py-2"
        >
            {children}
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-evolve-accent transition-all duration-300 group-hover:w-full"></span>
        </a>
    );
}

function MobileNavLink({ href, onClick, children }) {
    return (
        <a
            href={href}
            onClick={onClick}
            className="block w-full text-center text-lg py-3 text-gray-700 hover:text-evolve-accent hover:bg-gray-50 rounded-lg transition"
        >
            {children}
        </a>
    );
}

function ServiceCard({ title, price, time, description, tag, isPremium }) {
    return (
        <div className={`service-card bg-white p-8 rounded-3xl border ${isPremium ? 'border-evolve-accent/30 shadow-2xl relative overflow-hidden' : 'border-gray-100 shadow-lg'} flex flex-col h-full`}>
            {tag && (
                <div className="absolute top-4 right-4 bg-evolve-dark text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                    {tag}
                </div>
            )}

            <div className="mb-6">
                <h3 className="text-2xl font-bold text-evolve-dark mb-2">{title}</h3>
                <div className="flex items-baseline gap-2">
                    <span className="text-3xl font-bold text-evolve-accent">{price}</span>
                    <span className="text-sm text-gray-400 font-medium">/ sesión</span>
                </div>
                <div className="mt-2 flex items-center gap-2 text-sm text-gray-500">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                    {time}
                </div>
            </div>

            <p className="text-gray-600 leading-relaxed mb-8 flex-grow">
                {description}
            </p>

            <button className={`w-full py-3 rounded-xl font-bold transition-colors ${isPremium ? 'bg-evolve-dark text-white hover:bg-evolve-accent' : 'bg-gray-100 text-gray-700 hover:bg-evolve-dark hover:text-white'}`}>
                Más Detalles
            </button>
        </div>
    );
}

function FaqItem({ question, answer }) {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className="bg-gray-50 rounded-2xl overflow-hidden transition-all duration-300 hover:bg-white hover:shadow-md border border-transparent hover:border-gray-100">
            <button
                className="w-full flex justify-between items-center p-6 text-left"
                onClick={() => setIsOpen(!isOpen)}
            >
                <span className="font-bold text-lg text-evolve-dark">{question}</span>
                <span className={`flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-full bg-evolve-nude/30 text-evolve-dark transition-transform duration-300 ${isOpen ? 'rotate-180 bg-evolve-accent text-white' : ''}`}>
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                </span>
            </button>
            <div className={`px-6 overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-40 pb-6 opacity-100' : 'max-h-0 opacity-0'}`}>
                <p className="text-gray-600 leading-relaxed border-t border-gray-200 pt-4">
                    {answer}
                </p>
            </div>
        </div>
    );
}

function SocialLink({ href, name }) {
    return (
        <a href={href} className="text-gray-400 hover:text-evolve-accent font-medium transition-colors">
            {name}
        </a>
    )
}

export default App;