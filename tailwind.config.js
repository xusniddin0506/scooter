/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        yellow: "#fcb72b",
        navy: "#495567",
        dimGrey: "#939caa",
        grey: "#e5ecf4",
        snow: "#f2f5f9",
        lightYellow: "#fff4df",
      },
      fontFamily: {
        spacemono: ["Space Mono", "monospace"],
        lexenddeca: ["Lexend Deca", "sans-serif"],
      },
      fontSize: {
        h1: "56px",
        h2: "48px",
        h3: "40px",
        h4: "24px",
        h5: "15px",
      },
      lineHeight: {
        lh: "56px",
      },
      backgroundImage: {
        image: "url(/mock-img/bg.png)",
      },
      backgroundSize: {
        size: "100%",
      },
      backgroundPosition: {
        center: "center",
      },
      backgroundColor: {
        heroBg: "#2F3B59",
      },
      fontWeight: {
        fw: 700,
      },
    },
  },
  plugins: [],
};
