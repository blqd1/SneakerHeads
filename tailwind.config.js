/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            height: {
                140: "35rem",
            },
            fontFamily: {
                dosis: ["Dosis", "sans-serif"],
                roboto: ["Roboto", "sans-serif"],
                fjalla: ["Fjalla One", "sans-serif"],
            },
        },
    },
    plugins: [],
};
