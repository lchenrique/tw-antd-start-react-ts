module.exports = {
    content: ["./src/**/*.{js,ts,jsx,tsx}", "./public/index.html"],
    darkMode: "class",
    mode: "jit",
    important: true, // important in prod is must be
    theme: {
        extend: {
            colors: {
                "dark-purple": " #242038ff",
                "slate-blue": " #725ac1ff",
                "middle-blue-purple": " #8d86c9ff",
                "lavender-gray": "#cac4ceff",
                "linen": " #f7ece1ff",
            },
        },
    },
    plugins: [],
};
