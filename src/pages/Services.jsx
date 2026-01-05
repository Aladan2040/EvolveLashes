import React from 'react';
import { ServiceItemRow } from '../components/UI';

export default function Services({ handleWhatsApp }) {
    return (
        <div className="pt-32 pb-20 bg-white min-h-screen">
            <div className="max-w-4xl mx-auto px-6">
                <div className="text-center mb-16 animate-fade-in-up">
                    <h1 className="text-4xl md:text-5xl font-bold text-evolve-dark mb-4">Carta de Servicios</h1>
                    <p className="text-gray-500">Todos nuestros servicios son realizados a domicilio con los más altos estándares.</p>
                </div>

                <div className="space-y-16 animate-fade-in-up">
                    <section>
                        <h2 className="text-2xl font-bold text-evolve-dark border-b-2 border-evolve-nude pb-2 mb-8">Pestañas & Mirada</h2>
                        <div className="grid gap-4">
                            <ServiceItemRow title="Lifting + Tinte" desc="Eleva y oscurece tus pestañas naturales." />
                            <ServiceItemRow title="Extensiones Clásicas (1x1)" desc="Naturalidad y elegancia pura." />
                            <ServiceItemRow title="Volumen Híbrido" desc="Mezcla de clásicas y volumen suave." />
                            <ServiceItemRow title="Volumen Ruso" desc="Densidad alta para una mirada impactante." />
                            <ServiceItemRow title="Mega Volumen" desc="Máxima oscuridad." />
                            <ServiceItemRow title="Retiro de Extensiones" desc="Remoción segura." />
                        </div>
                    </section>
                </div>

                <div className="mt-12 text-center">
                    <button onClick={() => handleWhatsApp("Hola, quiero cotizar un servicio.")} className="bg-evolve-accent text-white px-8 py-3 rounded-full font-bold">Consultar por WhatsApp</button>
                </div>
            </div>
        </div>
    );
}