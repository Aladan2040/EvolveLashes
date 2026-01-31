import React from 'react';
import { ServiceItemRow } from '../UI';

export default function Services() {

    // Función interna para WhatsApp
    const handleWhatsApp = (msg) => {
        const message = msg || "Hola, me interesa cotizar varios servicios.";
        window.open(`https://wa.me/51999999999?text=${encodeURIComponent(message)}`, '_blank');
    };

    return (
        <div className="pt-32 pb-20 bg-white min-h-screen">
            <div className="max-w-4xl mx-auto px-6">

                {/* --- ENCABEZADO --- */}
                <div className="text-center mb-16 animate-fade-in-up">
                    <span className="text-evolve-accent font-bold tracking-widest uppercase text-sm">Menú Exclusivo</span>
                    <h1 className="text-4xl md:text-5xl font-bold text-evolve-dark mt-2 mb-6">Carta de Servicios</h1>
                    <p className="text-gray-500 max-w-2xl mx-auto text-lg font-light">
                        Diseñados para realzar tu belleza natural. Todos los servicios incluyen preparación de la piel y productos de alta gama.
                    </p>
                </div>

                <div className="space-y-20 animate-fade-in-up">
                    {/* (Secciones de servicios... son idénticas a tu versión anterior) */}

                    {/* Categoria 1 */}
                    <section>
                        <div className="flex items-center gap-3 mb-8 border-b-2 border-evolve-nude pb-3">
                            <span className="text-2xl">👁️</span>
                            <h2 className="text-2xl font-bold text-evolve-dark">Extensiones de Pestañas</h2>
                        </div>
                        <div className="grid gap-4">
                            <ServiceItemRow title="Clásicas (1x1)" desc="Elegancia pura. Una extensión sobre cada pestaña natural." />
                            <ServiceItemRow title="Efecto Rímel (Wet Look)" desc="Tendencia total. Aspecto de pestañas húmedas y definidas." />
                            <ServiceItemRow title="Híbridas" desc="El equilibrio perfecto. Mezcla de técnica clásica y volumen." />
                            <ServiceItemRow title="Volumen Ruso" desc="Glamour y densidad. Abanicos armados artesanalmente." />
                        </div>
                    </section>

                    {/* Categoria 2 */}
                    <section>
                        <div className="flex items-center gap-3 mb-8 border-b-2 border-evolve-nude pb-3">
                            <span className="text-2xl">✨</span>
                            <h2 className="text-2xl font-bold text-evolve-dark">Lifting & Realce</h2>
                        </div>
                        <div className="grid gap-4">
                            <ServiceItemRow title="Lifting de Pestañas" desc="Elevación natural desde la raíz. Ideal para descansar de extensiones." />
                            <ServiceItemRow title="Lifting + Tinturado" desc="Eleva y oscurece tus pestañas, efecto rímel permanente." />
                        </div>
                    </section>

                    {/* Categoria 3 */}
                    <section>
                        <div className="flex items-center gap-3 mb-8 border-b-2 border-evolve-nude pb-3">
                            <span className="text-2xl">📐</span>
                            <h2 className="text-2xl font-bold text-evolve-dark">Arquitectura de Cejas</h2>
                        </div>
                        <div className="grid gap-4">
                            <ServiceItemRow title="Diseño y Depilación" desc="Visagismo personalizado según la morfología de tu rostro." />
                            <ServiceItemRow title="Laminado de Cejas" desc="Alisa y fija el vello rebelde para cejas más gruesas." />
                            <ServiceItemRow title="Pigmentación con Henna" desc="Maquillaje semipermanente natural para mayor definición." />
                        </div>
                    </section>

                    {/* Categoria 4 */}
                    <section>
                        <div className="flex items-center gap-3 mb-8 border-b-2 border-evolve-nude pb-3">
                            <span className="text-2xl">🌸</span>
                            <h2 className="text-2xl font-bold text-evolve-dark">Depilación Facial</h2>
                        </div>
                        <p className="text-sm text-gray-500 mb-6 italic">* Realizada con cera para piel sensible o hilo hindú según tu preferencia.</p>
                        <div className="grid gap-4 md:grid-cols-2">
                            <ServiceItemRow title="Rostro Completo" desc="Perfilado total para una piel radiante." />
                            <ServiceItemRow title="Depilación de Ceja" desc="Mantenimiento y limpieza." />
                            <ServiceItemRow title="Depilación de Bozo" desc="Zona del labio superior." />
                            <ServiceItemRow title="Depilación de Frente" desc="Limpieza línea del cabello." />
                            <ServiceItemRow title="Depilación de Patillas" desc="Perfilado lateral." />
                        </div>
                    </section>

                    {/* Categoria 5 */}
                    <section>
                        <div className="flex items-center gap-3 mb-8 border-b-2 border-evolve-nude pb-3">
                            <span className="text-2xl">🧖‍♀️</span>
                            <h2 className="text-2xl font-bold text-evolve-dark">Depilación Corporal</h2>
                        </div>
                        <div className="grid gap-4 md:grid-cols-2">
                            <ServiceItemRow title="Axilas" desc="Piel suave y libre de irritaciones." />
                            <ServiceItemRow title="Brazos" desc="Depilación completa o media." />
                            <ServiceItemRow title="Piernas" desc="Pierna completa o media pierna." />
                            <ServiceItemRow title="Bikini" desc="Zona del bikini (consulta por bikini completo)." />
                        </div>
                    </section>

                    {/* Categoria 6 */}
                    <section>
                        <div className="flex items-center gap-3 mb-8 border-b-2 border-evolve-nude pb-3">
                            <span className="text-2xl">💆‍♀️</span>
                            <h2 className="text-2xl font-bold text-evolve-dark">Cuidado de la Piel</h2>
                        </div>
                        <div className="grid gap-4">
                            <ServiceItemRow title="Limpieza Facial Profunda" desc="Diagnóstico personalizado, exfoliación y mascarilla." />
                        </div>
                    </section>
                </div>

                {/* --- CALL TO ACTION --- */}
                <div className="mt-20 bg-evolve-dark text-white rounded-[2rem] p-10 text-center shadow-xl relative overflow-hidden group">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-5 rounded-full -mr-16 -mt-16 transition transform group-hover:scale-110"></div>

                    <h3 className="text-2xl font-bold mb-4 relative z-10">¿Lista para resaltar tu belleza?</h3>
                    <p className="mb-8 text-gray-300 relative z-10">
                        Escríbenos para consultar precios de paquetes y disponibilidad en tu distrito.
                    </p>
                    <button
                        onClick={() => handleWhatsApp("Hola, me interesa cotizar varios servicios de la lista.")}
                        className="relative z-10 bg-evolve-accent text-white px-8 py-4 rounded-full font-bold hover:bg-white hover:text-evolve-dark transition transform hover:-translate-y-1 shadow-lg"
                    >
                        Consultar Precios por WhatsApp
                    </button>
                </div>
            </div>
        </div>
    );
}