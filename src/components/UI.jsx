import React from 'react';

export function ServiceCard({ title, description, tag, isPremium, onClick }) {
    return (
        <div
            onClick={onClick}
            className={`relative p-8 rounded-[2rem] border transition-all duration-300 hover:shadow-xl cursor-pointer hover:-translate-y-2 flex flex-col h-full bg-white group
            ${isPremium
                ? 'border-evolve-accent/50 shadow-lg'
                : 'border-gray-100 shadow-sm'}`}
        >
            {tag && (
                <div className="absolute top-6 right-6 bg-evolve-dark text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-widest">
                    {tag}
                </div>
            )}
            <h3 className="text-2xl font-bold text-evolve-dark mb-4 group-hover:text-evolve-accent transition-colors">{title}</h3>
            <p className="text-gray-600 leading-relaxed mb-6 font-light">{description}</p>
            <div className="mt-auto">
                <span className="text-evolve-accent font-semibold text-sm hover:underline flex items-center gap-1">
                    Ver detalle <span>&rarr;</span>
                </span>
            </div>
        </div>
    );
}

export function ServiceItemRow({ title, desc }) {
    return (
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <div>
                <h4 className="text-lg font-bold text-gray-800">{title}</h4>
                <p className="text-gray-500 text-sm mt-1">{desc}</p>
            </div>
            <button className="text-evolve-accent text-sm font-bold border border-evolve-accent px-6 py-2 rounded-full hover:bg-evolve-accent hover:text-white transition">
                Cotizar
            </button>
        </div>
    )
}