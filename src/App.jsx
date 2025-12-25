import React, { useState } from 'react';

// --- IMPORTACIÓN DE IMÁGENES ---
// Asegúrate de que los nombres coincidan con tus archivos en src/assets/
import logoImg from './assets/logo-evolve.jpg';
import heroImg from './assets/hero-bg.jpg';
import serviceImg from './assets/service1.jpg';

function App() {

    // Función para redirigir a WhatsApp
    const handleWhatsApp = (mensajePersonalizado = "") => {
        // Reemplaza con el número real de tu hermana (código país + número)
        const numeroTelefono = "51999999999";

        const mensajeDefault = "Hola EvolveLashes, quisiera más información para agendar una cita 👁️✨";
        const mensajeFinal = mensajePersonalizado || mensajeDefault;

        const url = `https://wa.me/${numeroTelefono}?text=${encodeURIComponent(mensajeFinal)}`;

        // Abrir en nueva pestaña
        window.open(url, '_blank');
    };

    return (
        <div className="font-sans">

            {/* --- NAVBAR --- */}
            <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm shadow-sm">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center h-20">
                        {/* Logo */}
                        <div className="flex-shrink-0 cursor-pointer" onClick={() => window.scrollTo(0,0)}>
                            <img className="h-12 w-auto object-contain" src={logoImg} alt="Evolve Lash" />
                        </div>

                        {/* Menú Desktop */}
                        <div className="hidden md:flex space-x-8 items-center">
                            <a href="#servicios" className="text-gray-600 hover:text-evolve-accent font-medium transition">Servicios</a>
                            <a href="#nosotros" className="text-gray-600 hover:text-evolve-accent font-medium transition">Nosotros</a>
                            <a href="#faq" className="text-gray-600 hover:text-evolve-accent font-medium transition">FAQ</a>
                            <button
                                onClick={() => handleWhatsApp()}
                                className="bg-evolve-dark text-white px-5 py-2 rounded-full font-medium hover:bg-gray-800 transition transform hover:scale-105"
                            >
                                Agendar Cita
                            </button>
                        </div>
                    </div>
                </div>
            </nav>

            {/* --- HERO SECTION --- */}
            <div className="relative bg-gray-900 h-[600px] flex items-center">
                <div className="absolute inset-0 overflow-hidden">
                    <img src={heroImg} alt="Pestañas background" className="w-full h-full object-cover opacity-60" />
                </div>
                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center">
                    <h1 className="text-4xl md:text-6xl font-bold text-white tracking-tight mb-4">
                        EVOLVE LASH
                    </h1>
                    <p className="mt-4 text-xl text-evolve-nude max-w-2xl font-light">
                        Realza tu mirada con técnicas profesionales diseñadas para ti.
                    </p>
                    <div className="mt-8">
                        <button
                            onClick={() => handleWhatsApp("Hola, estoy interesada en un servicio de pestañas.")}
                            className="px-8 py-4 bg-evolve-accent text-white font-bold rounded-full shadow-lg hover:bg-[#b08d55] transition text-lg"
                        >
                            Reserva tu cita hoy
                        </button>
                    </div>
                </div>
            </div>

            {/* --- SERVICIOS --- */}
            <section id="servicios" className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold text-evolve-dark uppercase tracking-wide">Nuestros Servicios</h2>
                        <div className="w-20 h-1 bg-evolve-accent mx-auto mt-4"></div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                        {/* Servicio 1 */}
                        <ServiceCard
                            title="Lifting de Pestañas"
                            price="S/ 60"
                            description="Eleva tu pestaña natural desde la raíz. Ideal para un look natural y despierto."
                        />
                        {/* Servicio 2 */}
                        <ServiceCard
                            title="Volumen Ruso"
                            price="S/ 120"
                            description="Extensiones múltiples para un efecto denso, oscuro y glamuroso."
                        />
                        {/* Servicio 3 */}
                        <ServiceCard
                            title="Efecto Rimel"
                            price="S/ 90"
                            description="La combinación perfecta entre naturalidad y volumen intermedio."
                        />
                    </div>
                </div>
            </section>

            {/* --- NOSOTROS --- */}
            <section id="nosotros" className="py-20 bg-evolve-nude/20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center gap-12">
                    <div className="flex-1">
                        <img src={serviceImg} alt="Especialista" className="rounded-lg shadow-xl w-full max-w-md mx-auto" />
                    </div>
                    <div className="flex-1 text-left">
                        <h2 className="text-3xl font-bold text-evolve-dark mb-6">Expertas en tu Mirada</h2>
                        <p className="text-gray-600 mb-4 leading-relaxed">
                            En EvolveLashes nos dedicamos a cuidar la salud de tus pestañas mientras potenciamos tu belleza.
                            Utilizamos productos hipoalergénicos de la más alta calidad.
                        </p>
                        <p className="text-gray-600 mb-6 leading-relaxed">
                            Cada diseño es personalizado según la forma de tu ojo y tus preferencias.
                        </p>
                        <button onClick={() => handleWhatsApp()} className="text-evolve-accent font-bold border-b-2 border-evolve-accent hover:text-evolve-dark transition">
                            Conoce más sobre nosotros
                        </button>
                    </div>
                </div>
            </section>

            {/* --- FAQ --- */}
            <section id="faq" className="py-20 bg-white">
                <div className="max-w-3xl mx-auto px-4">
                    <h2 className="text-3xl font-bold text-center text-evolve-dark mb-12">Preguntas Frecuentes</h2>
                    <div className="space-y-4">
                        <FaqItem question="¿Cuánto tiempo duran las extensiones?" answer="Aproximadamente de 3 a 4 semanas, dependiendo del cuidado y el ciclo natural de tus pestañas." />
                        <FaqItem question="¿El procedimiento duele?" answer="No, es totalmente indoloro y relajante." />
                        <FaqItem question="¿Puedo usar maquillaje?" answer="Sí, pero debes evitar productos a base de aceite en la zona de los ojos." />
                    </div>
                </div>
            </section>

            {/* --- FOOTER --- */}
            <footer className="bg-evolve-dark text-white py-12">
                <div className="max-w-7xl mx-auto px-4 text-center">
                    <img src={logoImg} alt="Logo Footer" className="h-16 mx-auto mb-6 filter brightness-0 invert" />
                    <p className="text-gray-400 mb-8">San Miguel, Lima - Perú</p>
                    <div className="flex justify-center gap-6 mb-8">
                        <span className="cursor-pointer hover:text-evolve-accent">Instagram</span>
                        <span className="cursor-pointer hover:text-evolve-accent">TikTok</span>
                        <span className="cursor-pointer hover:text-evolve-accent">Facebook</span>
                    </div>
                    <p className="text-xs text-gray-500">© 2025 EvolveLashes. Todos los derechos reservados.</p>
                </div>
            </footer>

        </div>
    );
}

// --- SUBCOMPONENTES ---

function ServiceCard({ title, price, description }) {
    return (
        <div className="bg-white border border-gray-100 p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 group text-center">
            <h3 className="text-xl font-bold text-gray-800 mb-2">{title}</h3>
            <div className="text-evolve-accent font-bold text-2xl mb-4">{price}</div>
            <p className="text-gray-500 text-sm leading-relaxed">{description}</p>
            <button className="mt-6 text-sm font-semibold text-evolve-dark group-hover:text-evolve-accent transition">
                Ver detalles &rarr;
            </button>
        </div>
    )
}

function FaqItem({ question, answer }) {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className="border border-gray-200 rounded-lg overflow-hidden">
            <button
                className="w-full flex justify-between items-center p-4 bg-gray-50 hover:bg-gray-100 transition text-left"
                onClick={() => setIsOpen(!isOpen)}
            >
                <span className="font-semibold text-gray-700">{question}</span>
                <span className={`transform transition-transform ${isOpen ? 'rotate-180' : ''}`}>▼</span>
            </button>
            {isOpen && (
                <div className="p-4 bg-white text-gray-600 text-sm border-t border-gray-200">
                    {answer}
                </div>
            )}
        </div>
    )
}

export default App;