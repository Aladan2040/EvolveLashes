/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                'evolve-dark': '#222222',
                'evolve-nude': '#E8D5C4',
                'evolve-accent': '#C5A065',
                'evolve-gray': '#F9F9F9',
            },
            fontFamily: {
                'sans': ['Montserrat', 'system-ui', 'sans-serif'],
            }
        },
    },
    plugins: [],
}