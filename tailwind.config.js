/** @type {import('tailwindcss').Config} */
export default {
    content: ["./src/**/*.{html,js,svelte,ts}"],
    optimizeDeps: {
        include: ['lodash.get', 'lodash.isequal', 'lodash.clonedeep']
    },
    theme: {
        extend: {
            backgroundColor: {
                'black-30': 'rgba(0, 0, 0, 0.3)',
            },
        },
    },
    plugins: [],
}