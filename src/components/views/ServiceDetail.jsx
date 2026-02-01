import React, { useState, useEffect } from 'react';
import serviceImg from '../../assets/service1.jpg';

const servicesData = {
    lifting: {
        title: "Lifting de Pestañas",
        duration: "1h 15m",
        desc: "El tratamiento ideal para quienes buscan naturalidad. Elevamos tu pestaña desde la raíz creando una curvatura perfecta que abre tu mirada.",
        benefits: ["Efecto inmediato de mayor longitud", "Incluye tinte negro intenso", "Cero mantenimiento", "Duración de 6 a 8 semanas"],
        care: "No mojar las primeras 24 horas. Después vida normal."
    },
    volumen: {
        title: "Volumen Ruso",
        duration: "2h 30m",
        desc: "Para las amantes del glamour. Aplicamos abanicos hechos a mano de pestañas ultra finas para lograr una densidad espectacular.",
        benefits: ["Mirada impactante y densa", "Cubre huecos naturales", "Efecto delineado oscuro", "Personalizable"],
        care: "Lavar diariamente con Lash Shampoo y cepillar."
    },
    rimel: {
        title: "Efecto Rímel",
        duration: "1h 45m",
        desc: "La dosis justa de volumen. Simula pestañas maquilladas.",
        benefits: ["Look 'Wet' en tendencia", "Más notorio que las clásicas", "Ahorras tiempo en maquillaje"],
        care: "Evitar productos a base de aceite."
    }
};

export default function ServiceDetail() {
    // 1. Estado para guardar el ID
    const [serviceId, setServiceId] = useState('lifting');

    // 2. Función para WhatsApp interna
    const handleWhatsApp = (msg) => {
        window.open(`https://wa.me/56975598631?text=${encodeURIComponent(msg)}`, '_blank');
    };

    // 3. Efecto para leer la URL al cargar (ej: ?id=volumen)
    useEffect(() => {
        const params = new URLSearchParams(window.location.search);
        const id = params.get('id');
        if (id && servicesData[id]) {
            setServiceId(id);
        }
    }, []);

    const service = servicesData[serviceId] || servicesData.lifting;

    return (
        <div className="pt-32 pb-20 bg-white min-h-screen">
            <div className="max-w-6xl mx-auto px-6">

                {/* Botón Volver usando etiqueta <a> para navegación real */}
                <a href="/" className="mb-8 inline-flex items-center gap-2 text-gray-500 hover:text-evolve-accent font-medium transition">
                    &larr; Volver al Inicio
                </a>

                <div className="grid md:grid-cols-2 gap-12 items-start animate-fade-in-up">
                    <div className="rounded-[2.5rem] overflow-hidden shadow-2xl h-[500px] bg-gray-100">
                        <img src={serviceImg} className="w-full h-full object-cover" alt={service.title} />
                    </div>

                    <div>
                        <span className="text-evolve-accent font-bold uppercase tracking-widest text-sm">Detalle del Servicio</span>
                        <h1 className="text-5xl font-bold text-evolve-dark mt-2 mb-6">{service.title}</h1>
                        <p className="text-xl text-gray-600 leading-relaxed mb-8 font-light">{service.desc}</p>

                        <div className="border-y border-gray-100 py-6 mb-8 flex items-center gap-4">
                            <div className="p-3 bg-evolve-gray rounded-full text-evolve-accent">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </div>
                            <div>
                                <p className="text-xs uppercase text-gray-400 font-bold">Tiempo Estimado</p>
                                <p className="text-2xl font-bold text-evolve-dark">{service.duration}</p>
                            </div>
                        </div>

                        <div className="mb-8">
                            <h3 className="font-bold text-evolve-dark text-lg mb-4">Beneficios Clave</h3>
                            <ul className="space-y-3">
                                {service.benefits.map((b, i) => (
                                    <li key={i} className="flex items-start gap-3 text-gray-600">
                                        <span className="text-evolve-accent">✦</span> {b}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="bg-evolve-gray p-6 rounded-2xl mb-8">
                            <h4 className="font-bold text-evolve-dark mb-2 text-sm uppercase">Cuidados</h4>
                            <p className="text-sm text-gray-600">{service.care}</p>
                        </div>

                        <button
                            onClick={() => handleWhatsApp(`Hola, quisiera cotizar y agendar el servicio de *${service.title}* a domicilio.`)}
                            className="w-full bg-evolve-accent text-white py-4 rounded-full font-bold shadow-lg hover:bg-[#b08d55] transition text-lg"
                        >
                            Cotizar este Servicio
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}