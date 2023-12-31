/** @type {import('tailwindcss').Config} */
export default {
    darkMode: "class",
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            height: {
                120: "30rem",
                130: "32.5rem",
                140: "35rem",
                160: "40rem",
                180: "45rem",
            },
            fontFamily: {
                roboto: ["Roboto", "sans-serif"],
                lemon: ["Lemon", "sans-serif"],
            },
            zIndex: {
                "-1": "-1",
            },
        },
    },
    plugins: [],
};
