import React from 'react';
import heroImg from '../assets/hero-bg.jpg';
import serviceImg from '../assets/service1.jpg';
import { ServiceCard } from '../components/UI';

export default function Home({ handleWhatsApp, navigateTo }) {
    return (
        <div className="w-full">
            {/* HERO SECTION */}
            <section className="relative h-screen flex items-center justify-center bg-black overflow-hidden">
                <img src={heroImg} className="absolute inset-0 w-full h-full object-cover opacity-60 animate-slow-zoom" alt="Hero Background" />
                <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black/20"></div>

                <div className="relative z-10 text-center px-6 max-w-4xl">
                    <span className="inline-block py-1 px-4 rounded-full bg-white/10 backdrop-blur border border-white/20 text-white text-xs tracking-[0.2em] font-bold mb-6 uppercase">
                        Servicio a Domicilio
                    </span>
                    <h1 className="text-5xl md:text-8xl font-bold text-white mb-6 tracking-tight">
                        EVOLVE <span className="text-evolve-accent">LASH</span>
                    </h1>
                    <p className="text-xl text-gray-200 mb-10 font-light max-w-2xl mx-auto">
                        Olvídate del tráfico. Llevamos el estudio de pestañas profesional a la comodidad de tu hogar.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <button onClick={() => handleWhatsApp()} className="bg-evolve-accent text-white px-10 py-4 rounded-full font-bold shadow-[0_0_20px_rgba(197,160,101,0.4)] hover:bg-[#b08d55] transition transform hover:scale-105">
                            Reservar Cita
                        </button>
                        <button onClick={() => navigateTo('services')} className="bg-transparent border border-white text-white px-10 py-4 rounded-full font-bold hover:bg-white hover:text-evolve-dark transition">
                            Ver Carta Completa
                        </button>
                    </div>
                </div>
            </section>

            {/* SECCIÓN SERVICIOS DESTACADOS (Top 3) */}
            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-evolve-dark mb-4">Nuestros Favoritos</h2>
                        <div className="w-24 h-1 bg-evolve-accent mx-auto"></div>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        <ServiceCard
                            title="Lifting de Pestañas"
                            description="Realce natural desde la raíz. Ideal para un look fresco diario sin extensiones."
                            tag="Tendencia"
                            onClick={() => navigateTo('service-detail', 'lifting')}
                        />
                        <ServiceCard
                            title="Volumen Ruso"
                            isPremium={true}
                            description="Máxima densidad y glamour. Abanicos artesanales para una mirada impactante."
                            onClick={() => navigateTo('service-detail', 'volumen')}
                        />
                        <ServiceCard
                            title="Efecto Rímel"
                            description="El equilibrio perfecto. Simula pestañas maquilladas las 24 horas del día."
                            onClick={() => navigateTo('service-detail', 'rimel')}
                        />
                    </div>
                </div>
            </section>

            {/* SECCIÓN NOSOTROS */}
            <section className="py-20 bg-evolve-gray">
                <div className="max-w-5xl mx-auto px-6 flex flex-col md:flex-row items-center gap-12">
                    <div className="flex-1 w-full">
                        <img src={serviceImg} alt="Atención Domiciliaria" className="rounded-3xl shadow-2xl w-full h-[400px] object-cover" />
                    </div>
                    <div className="flex-1">
                        <h3 className="text-3xl font-bold text-evolve-dark mb-6">Llevamos el salón a tu casa 🏡</h3>
                        <p className="text-gray-600 mb-6 leading-relaxed text-lg">
                            Sabemos que tu tiempo vale oro. Por eso, <strong>EvolveLashes es 100% a domicilio</strong>.
                        </p>
                        <ul className="space-y-4">
                            <li className="flex items-center gap-3 text-gray-700">✓ Llevamos camilla profesional e iluminación.</li>
                            <li className="flex items-center gap-3 text-gray-700">✓ Protocolos de higiene estrictos.</li>
                            <li className="flex items-center gap-3 text-gray-700">✓ La comodidad de no moverte de casa.</li>
                        </ul>
                    </div>
                </div>
            </section>
        </div>
    );
}