/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                'evolve-dark': '#222222',   // Gris casi negro del logo
                'evolve-nude': '#E8D5C4',   // Color piel suave para fondos/detalles
                'evolve-accent': '#C5A065', // Dorado mate para botones/acciones
                'evolve-gray': '#F9F9F9',   // Blanco humo para secciones alternas
            },
            fontFamily: {
                'sans': ['Montserrat', 'system-ui', 'sans-serif'],
            }
        },
    },
    plugins: [],
}