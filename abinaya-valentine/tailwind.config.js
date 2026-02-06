/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      animation: {
        gradient: "gradient 8s ease infinite",
        float: "float 6s linear infinite",
        pulseSlow: "pulse 2s infinite"
      },
      keyframes: {
        gradient: {
          "0%,100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
        float: {
          "0%": { transform: "translateY(0)", opacity: 1 },
          "100%": { transform: "translateY(-100vh)", opacity: 0 },
        },
      },
      backgroundSize: {
        200: "200% 200%"
      }
    },
  },
  plugins: [],
}
