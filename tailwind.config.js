/** @type {import('tailwindcss').Config} */

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  corePlugins: {
    preflight: true, // Ensure preflight is enabled
  },
  theme: {
    extend: {
      maskImage: {
        chevMask: "url('https://assets.codepen.io/605876/chev-mask_1.png')",
      },
      animation: {
        "scale-loop": "scaleUpDown 1s infinite",
      },
      keyframes: {
        scaleUpDown: {
          "0%, 100%": { transform: "scale(1)" },
          "50%": { transform: "scale(1.05)" },
        },
      },
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
