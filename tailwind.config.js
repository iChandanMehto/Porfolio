import tailwindScrollbar from 'tailwind-scrollbar';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        rotate: "rotate 10s linear infinite",
        'infinite-scroll': 'infinite-scroll 25s linear infinite',
      },
      keyframes: {
        rotate: {
          "0%": { transform: "rotate(0deg) scale(1)" },
          "100%": { transform: "rotate(-360deg) scale(1)" },
        },
        "infinite-scroll": {
          "0%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(-100%)" },
        },
      },
      fontFamily: {
        spaceMono: ['"Space Mono"', 'monospace'], 
      },
    },
  },
  plugins: [
    tailwindScrollbar,
  ],
};
