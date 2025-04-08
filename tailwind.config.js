/** @type {import('tailwindcss').Config} */

module.exports = {
    content: [
        './pages/**/*.{js,ts,jsx,tsx}',
        './components/**/*.{js,ts,jsx,tsx}',
        './app/**/*.{js,ts,jsx,tsx}',
    ],
    theme: {
        extend: {
            fontFamily: {
                nunito: ["var(--font-nunito)"],
                poppins: ["var(--font-poppins)"],
                inter: ["var(--font-inter)"],
                montserrat: ["var(--font-montserrat)"],
                montserrat2: ["var(--font-montserrat)"],
                alexandria: ["var(--font-alex)"]
            }
        },
    },
    plugins: [],
}
