import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      animation: {
        gradientRotate: "gradientRotate 30s linear infinite",
        gridMove: "gridMove 20s linear infinite",
        matrixFall: "matrixFall linear infinite",
        cyanPulse: "cyanPulse 3s ease-in-out infinite",
        purplePulse: "purplePulse 3s ease-in-out infinite",
      },
      keyframes: {
        gradientRotate: {
          "0%": { transform: "rotate(0deg) scale(1)" },
          "50%": { transform: "rotate(180deg) scale(1.2)" },
          "100%": { transform: "rotate(360deg) scale(1)" },
        },
        gridMove: {
          "0%": { transform: "translate(0, 0)" },
          "100%": { transform: "translate(50px, 50px)" },
        },
        matrixFall: {
          "0%": { transform: "translateY(0)" },
          "100%": { transform: "translateY(200vh)" },
        },
        cyanPulse: {
          "0%": { filter: "brightness(1) drop-shadow(0 0 15px rgba(0, 255, 255, 0.6))", transform: "translateY(0) scale(1)" },
          "50%": { filter: "brightness(1.1) drop-shadow(0 0 25px rgba(0, 255, 255, 0.8))", transform: "translateY(-2px) scale(1.01)" },
          "100%": { filter: "brightness(1) drop-shadow(0 0 15px rgba(0, 255, 255, 0.6))", transform: "translateY(0) scale(1)" },
        },
        purplePulse: {
          "0%": { filter: "brightness(1) drop-shadow(0 0 15px rgba(255, 0, 255, 0.6))", transform: "translateY(0) scale(1)" },
          "50%": { filter: "brightness(1.1) drop-shadow(0 0 25px rgba(255, 0, 255, 0.8))", transform: "translateY(-2px) scale(1.01)" },
          "100%": { filter: "brightness(1) drop-shadow(0 0 15px rgba(255, 0, 255, 0.6))", transform: "translateY(0) scale(1)" },
        },
      },
      transitionDuration: {
        400: "400ms",
        800: "800ms",
      },
    },
  },
  plugins: [],
};

export default config;
