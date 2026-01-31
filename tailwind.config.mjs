/** @type {import('tailwindcss').Config} */
export default {
    content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
    theme: {
        extend: {
            colors: {
                'evolve-dark': '#222222',  // Negro suave
                'evolve-nude': '#E8D5C4',  // Beige/Nude
                'evolve-accent': '#C5A065', // Dorado
                'evolve-gray': '#F9F9F9',   // Gris muy claro
            },
            fontFamily: {
                'sans': ['Montserrat', 'sans-serif'],
            }
        },
    },
    plugins: [],
}