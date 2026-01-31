import React from 'react';
import logoImg from '../../../EvolveLashes/src/assets/logo-evolve.svg';

export default function Footer() {
    return (
        <footer className="bg-[#1a1a1a] text-white py-16 border-t border-gray-800">
            <div className="max-w-7xl mx-auto px-6 flex flex-col items-center text-center">

                {/* --- LOGO DE LA MARCA (BLANCO) --- */}
                <img
                    src={logoImg}
                    alt="Evolve Lash Logo"
                    // Clases explicadas:
                    // h-12 md:h-14: Tamaño moderado, ni muy grande ni muy chico.
                    // mb-6: Separación con el texto de abajo.
                    // filter brightness-0 invert: Convierte el logo (si es negro) a BLANCO puro.
                    // opacity-90: Le da un toque sutil para no ser blanco agresivo.
                    className="h-30 md:h-40 mb-5 filter brightness-0 invert opacity-90"
                />

                <p className="text-gray-400 text-sm mb-6 font-light tracking-wide">
                    Servicio exclusivo a domicilio • Lima, Perú
                </p>

                {/* Línea decorativa dorada */}
                <div className="w-50 h-1 bg-evolve-accent mx-auto mb-8 opacity-60"></div>

                <div className="flex flex-col gap-2 text-xs text-gray-600">
                    <p>© 2025 EvolveLashes. Todos los derechos reservados.</p>
                    <p>Diseñado para resaltar tu mirada.</p>
                </div>
            </div>
        </footer>
    );
}