/** @type {import('tailwindcss').Config} */

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  corePlugins: {
    preflight: true, // Ensure preflight is enabled
  },
  theme: {
    extend: {
      backgroundImage: {
        whyus: "url('./src/assets/SVG/bg-whyus.svg')",
      },
      fontFamily: {
        manrope: ["'Manrope'", "sans-serif"],
      },
    },
  },
  plugins: [],
};
