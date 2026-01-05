import React from 'react';
// IMPORTANTE: Asegúrate de tener este archivo en src/assets/
import heroVideo from '../assets/hero-video.mp4';
import serviceImg from '../assets/service1.jpg';
import { ServiceCard } from '../components/UI';

export default function Home({ handleWhatsApp, navigateTo }) {
    return (
        <div className="w-full">
            {/* --- HERO SECTION CON VIDEO DE FONDO --- */}
            <section className="relative h-screen flex items-center justify-center bg-black overflow-hidden">

                {/* Video de Fondo */}
                <video
                    className="absolute inset-0 w-full h-full object-cover opacity-60"
                    src={heroVideo}
                    autoPlay
                    loop
                    muted
                    playsInline
                />

                {/* Capa oscura (Overlay) para que el texto se lea bien */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/20 to-black/60"></div>

                {/* Contenido Principal */}
                <div className="relative z-10 text-center px-6 max-w-4xl animate-fade-in-up">
                    <span className="inline-block py-1 px-4 rounded-full bg-white/10 backdrop-blur border border-white/20 text-white text-xs tracking-[0.2em] font-bold mb-6 uppercase">
                        Servicio Exclusivo a Domicilio
                    </span>

                    <h1 className="text-5xl md:text-8xl font-bold text-white mb-6 tracking-tight drop-shadow-lg">
                        EVOLVE <span className="text-evolve-accent">LASH</span>
                    </h1>

                    <p className="text-xl text-gray-200 mb-10 font-light max-w-2xl mx-auto drop-shadow-md">
                        Olvídate del tráfico. Llevamos el estudio de pestañas profesional a la comodidad y seguridad de tu hogar.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <button
                            onClick={() => handleWhatsApp()}
                            className="bg-evolve-accent text-white px-10 py-4 rounded-full font-bold shadow-[0_0_20px_rgba(197,160,101,0.4)] hover:bg-[#b08d55] transition transform hover:scale-105"
                        >
                            Reservar Cita
                        </button>
                        <button
                            onClick={() => navigateTo('services')}
                            className="bg-transparent border border-white text-white px-10 py-4 rounded-full font-bold hover:bg-white hover:text-evolve-dark transition backdrop-blur-sm"
                        >
                            Ver Carta Completa
                        </button>
                    </div>
                </div>
            </section>

            {/* --- SECCIÓN DE FAVORITOS (TOP 3) --- */}
            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-evolve-dark mb-4">Nuestros Favoritos</h2>
                        <div className="w-24 h-1 bg-evolve-accent mx-auto"></div>
                        <p className="text-gray-500 mt-4">Los estilos más pedidos por nuestras clientas.</p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        <ServiceCard
                            title="Lifting de Pestañas"
                            description="Realce natural desde la raíz. Ideal para un look fresco diario sin necesidad de extensiones ni mantenimiento complejo."
                            tag="Tendencia"
                            onClick={() => navigateTo('service-detail', 'lifting')}
                        />
                        <ServiceCard
                            title="Volumen Ruso"
                            isPremium={true}
                            description="Máxima densidad y glamour. Abanicos artesanales para una mirada impactante y profunda."
                            onClick={() => navigateTo('service-detail', 'volumen')}
                        />
                        <ServiceCard
                            title="Efecto Rímel"
                            description="El equilibrio perfecto. Simula el efecto de tener las pestañas maquilladas las 24 horas del día."
                            onClick={() => navigateTo('service-detail', 'rimel')}
                        />
                    </div>
                </div>
            </section>

            {/* --- SECCIÓN NOSOTROS / DOMICILIO --- */}
            <section className="py-20 bg-evolve-gray">
                <div className="max-w-5xl mx-auto px-6 flex flex-col md:flex-row items-center gap-12">
                    {/* Imagen lateral */}
                    <div className="flex-1 w-full">
                        <img
                            src={serviceImg}
                            alt="Atención Domiciliaria EvolveLashes"
                            className="rounded-[2rem] shadow-2xl w-full h-[450px] object-cover transform hover:scale-[1.02] transition duration-500"
                        />
                    </div>

                    {/* Texto informativo */}
                    <div className="flex-1">
                        <span className="text-evolve-accent font-bold tracking-widest uppercase text-sm mb-2 block">Experiencia VIP</span>
                        <h3 className="text-3xl md:text-4xl font-bold text-evolve-dark mb-6">Llevamos el salón a tu casa 🏡</h3>
                        <p className="text-gray-600 mb-6 leading-relaxed text-lg font-light">
                            Sabemos que tu tiempo vale oro. Por eso, <strong>EvolveLashes es 100% a domicilio</strong>. Nos encargamos de todo para que tú solo te relajes.
                        </p>
                        <ul className="space-y-4">
                            <li className="flex items-center gap-4 text-gray-700">
                                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-green-100 text-green-600 font-bold">✓</span>
                                <span>Llevamos camilla profesional e iluminación LED.</span>
                            </li>
                            <li className="flex items-center gap-4 text-gray-700">
                                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-green-100 text-green-600 font-bold">✓</span>
                                <span>Protocolos de higiene y bioseguridad estrictos.</span>
                            </li>
                            <li className="flex items-center gap-4 text-gray-700">
                                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-green-100 text-green-600 font-bold">✓</span>
                                <span>La comodidad de no moverte de casa.</span>
                            </li>
                        </ul>

                        <div className="mt-8">
                            <button
                                onClick={() => navigateTo('services')}
                                className="text-evolve-dark font-bold border-b-2 border-evolve-accent pb-1 hover:text-evolve-accent transition"
                            >
                                Leer más sobre cómo funciona &rarr;
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}