import React from 'react';
// Asegúrate de que las rutas a tus assets sean correctas según tu estructura de carpetas en Astro
import heroVideo from '../../assets/hero-video.mp4';
import specialistImg from '../../assets/service1.jpg';
import { ServiceCard } from '../UI';

export default function Home() {

    // Función interna para WhatsApp
    const handleWhatsApp = (msg) => {
        const message = msg || "Hola, quisiera reservar una cita a domicilio.";
        window.open(`https://wa.me/56975598631?text=${encodeURIComponent(message)}`, '_blank');
    };

    return (
        <div className="w-full">

            {/* --- HERO SECTION --- */}
            <section className="relative h-screen flex items-center justify-center bg-black overflow-hidden">
                <video
                    className="absolute inset-0 w-full h-full object-cover opacity-50"
                    src={heroVideo}
                    autoPlay loop muted playsInline
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/20 to-black/80"></div>

                <div className="relative z-10 text-center px-6 max-w-4xl animate-fade-in-up">
                    <div className="inline-flex items-center gap-2 py-1 px-4 rounded-full bg-white/10 backdrop-blur border border-white/20 text-white text-xs tracking-[0.2em] font-bold mb-6 uppercase">
                        <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>
                        Servicio VIP a Domicilio
                    </div>

                    <h1 className="text-5xl md:text-8xl font-bold text-white mb-6 tracking-tight drop-shadow-2xl">
                        EVOLVE <span className="text-transparent bg-clip-text bg-gradient-to-r from-evolve-nude to-white">LASH</span>
                    </h1>

                    <p className="text-xl text-gray-100 mb-10 font-light max-w-2xl mx-auto drop-shadow-md leading-relaxed">
                        Expertos en diseñar miradas que cautivan. Llevamos la experiencia de un estudio de lujo a la comodidad y privacidad de tu hogar.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-5 justify-center">
                        <button
                            onClick={() => handleWhatsApp()}
                            className="bg-evolve-accent text-white px-10 py-4 rounded-full font-bold shadow-[0_0_25px_rgba(197,160,101,0.5)] hover:bg-[#b08d55] transition transform hover:scale-105 active:scale-95"
                        >
                            Reservar Cita Ahora
                        </button>

                        {/* Enlace estilo botón para ir a Servicios */}
                        <a
                            href="/services"
                            className="flex items-center justify-center bg-white/10 border border-white/40 backdrop-blur-md text-white px-10 py-4 rounded-full font-bold hover:bg-white hover:text-evolve-dark transition"
                        >
                            Ver Carta de Servicios
                        </a>
                    </div>
                </div>
            </section>

            {/* --- FAVORITOS --- */}
            <section className="py-24 bg-white relative">
                <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none opacity-30">
                    <div className="absolute -top-24 -right-24 w-96 h-96 bg-evolve-nude rounded-full blur-3xl"></div>
                </div>

                <div className="max-w-7xl mx-auto px-6 relative z-10">
                    <div className="text-center mb-16">
                        <span className="text-evolve-accent font-bold tracking-widest uppercase text-xs">Transforma tu mirada</span>
                        <h2 className="text-4xl font-bold text-evolve-dark mt-2 mb-4">Los Más Solicitados</h2>
                        <div className="w-20 h-1 bg-evolve-accent mx-auto rounded-full"></div>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {/* NOTA: En Astro, la navegación se hace con window.location.href o etiquetas <a>.
                           Como ServiceCard usa onClick, le pasamos la redirección.
                        */}
                        <ServiceCard
                            title="Lifting de Pestañas"
                            description="La opción perfecta si amas lo natural. Elevamos tus pestañas desde la raíz creando una curvatura elegante."
                            tag="Más Vendido"
                            onClick={() => window.location.href = '/detail?id=lifting'}
                        />
                        <ServiceCard
                            title="Volumen Ruso"
                            isPremium={true}
                            description="Para quienes buscan impacto total. Abanicos artesanales para una densidad espectacular."
                            onClick={() => window.location.href = '/detail?id=volumen'}
                        />
                        <ServiceCard
                            title="Efecto Rímel (Wet Look)"
                            description="La tendencia del momento. Logra ese look de 'pestañas mojadas' y definidas."
                            onClick={() => window.location.href = '/detail?id=rimel'}
                        />
                    </div>
                </div>
            </section>

            {/* --- CONOCE A LA ESPECIALISTA --- */}
            <section className="py-24 bg-gray-50">
                <div className="max-w-6xl mx-auto px-6">
                    <div className="flex flex-col md:flex-row items-center gap-16">

                        <div className="w-full md:w-1/2 relative group">
                            <div className="absolute inset-0 bg-evolve-accent rounded-[3rem] rotate-3 opacity-20 transition-transform group-hover:rotate-6"></div>
                            {/* src={specialistImg.src} si usas la optimización de imágenes de Astro, sino specialistImg directo */}
                            <img
                                src={specialistImg}
                                alt="Especialista EvolveLashes"
                                className="relative rounded-[3rem] shadow-2xl w-full h-[500px] object-cover grayscale hover:grayscale-0 transition duration-700"
                            />
                            <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-2xl shadow-xl animate-bounce-slow border border-gray-100">
                                <p className="text-3xl font-bold text-evolve-accent">+5</p>
                                <p className="text-sm text-gray-500 font-medium">Años de<br/>Experiencia</p>
                            </div>
                        </div>

                        <div className="w-full md:w-1/2">
                            <h3 className="text-evolve-accent font-bold uppercase tracking-widest text-sm mb-2">Tu Lash Artist de Confianza</h3>
                            <h2 className="text-4xl md:text-5xl font-bold text-evolve-dark mb-6 leading-tight">
                                Pasión por el arte de la <br/>
                                <span className="relative inline-block">
                                    mirada perfecta.
                                    <span className="absolute bottom-1 left-0 w-full h-3 bg-evolve-nude/40 -z-10"></span>
                                </span>
                            </h2>

                            <div className="space-y-6 text-gray-600 text-lg leading-relaxed mb-8">
                                <p>
                                    ¡Hola! Soy la fundadora de <strong>EvolveLashes</strong>. Mi misión no es solo poner pestañas, sino diseñar una mirada que potencie tu seguridad.
                                </p>
                                <p>
                                    Entiendo que invitar a alguien a tu hogar requiere confianza. Por eso, mi servicio se basa en: <strong>Higiene clínica</strong>, <strong>productos hipoalergénicos</strong> y un trato cálido.
                                </p>
                            </div>

                            <a
                                href="/services"
                                className="inline-block text-evolve-dark font-bold border-b-2 border-evolve-dark pb-1 hover:text-evolve-accent hover:border-evolve-accent transition"
                            >
                                Conoce más sobre mi trabajo &rarr;
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* --- TESTIMONIOS --- */}
            <section className="py-24 bg-white relative">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-evolve-dark">Clientas Felices</h2>
                        <p className="text-gray-500 mt-4 max-w-2xl mx-auto">
                            La mayor garantía es la satisfacción de quienes ya confiaron en EvolveLashes.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        <TestimonialCard
                            name="Camila R."
                            service="Volumen Ruso"
                            review="¡Increíble experiencia! Tenía miedo de hacérmelas a domicilio por la higiene, pero trajo todo impecable. Mis pestañas duraron más de 3 semanas."
                        />
                        <TestimonialCard
                            name="Andrea M."
                            service="Lifting + Cejas"
                            review="Me ahorra muchísimo tiempo. El diseño de cejas cambió mi cara por completo. ¡Súper recomendada!"
                        />
                        <TestimonialCard
                            name="Lucía V."
                            service="Efecto Rímel"
                            review="Buscaba algo natural y acertó totalmente. No sentí ninguna molestia ni ardor, tiene una mano súper suave."
                        />
                    </div>
                </div>
            </section>

            {/* --- INFO DOMICILIO --- */}
            <section className="py-20 bg-evolve-dark text-white">
                <div className="max-w-4xl mx-auto px-6 text-center">
                    <span className="text-4xl mb-6 block">🚗💨</span>
                    <h2 className="text-3xl md:text-4xl font-bold mb-6">¿Lista para vivir la experiencia en casa?</h2>
                    <p className="text-gray-300 mb-8 text-lg">
                        Cubrimos gran parte de Lima. Escríbenos para consultar la cobertura en tu distrito.
                    </p>
                    <button
                        onClick={() => handleWhatsApp("Hola, quiero consultar cobertura para mi distrito.")}
                        className="bg-white text-evolve-dark px-10 py-4 rounded-full font-bold hover:bg-evolve-accent hover:text-white transition shadow-lg"
                    >
                        Consultar Cobertura por WhatsApp
                    </button>
                </div>
            </section>
        </div>
    );
}

function TestimonialCard({ name, service, review }) {
    return (
        <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100 hover:shadow-lg transition duration-300">
            <div className="flex gap-1 text-yellow-400 mb-4 text-sm">
                {'★'.repeat(5)}
            </div>
            <p className="text-gray-600 mb-6 italic leading-relaxed">"{review}"</p>
            <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-evolve-nude flex items-center justify-center text-evolve-dark font-bold">
                    {name.charAt(0)}
                </div>
                <div>
                    <p className="font-bold text-evolve-dark text-sm">{name}</p>
                    <p className="text-xs text-gray-400 uppercase tracking-wide">{service}</p>
                </div>
            </div>
        </div>
    );
}