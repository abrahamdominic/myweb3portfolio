/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // 'mountain-meadow': { DEFAULT: '#10B981', '50': '#8CF5D2', '100': '#79F3CB', '200': '#53F0BC', '300': '#2EEDAE', '400': '#13DF9B', '500': '#10B981', '600': '#0C855D', '700': '#075239', '800': '#031E15', '900': '#000000' },
        neon: '#171717',
        text: '#C7D3FF',
        textDark: '#A1ABBF',
        bgblue: '#030B2E',
        darkerBlue: '#0A192F',
      },
      fontFamily: {
        sans: ["Gilroy", "sans-serif"],
        "clash-display": ["clash-display"],
        "Recoleta-black": ["Recoleta-black"],
        "Recoleta-Bold": ["Recoleta-Bold"],
        "Recoleta-Light": ["Recoleta-Light"],
        "Recoleta-Medium": ["Recoleta-Medium"],
        "Recoleta-Regular": ["Recoleta-Regular"],
        "Recoleta-SemiBold": ["Recoleta-SemiBold"],
        "Recoleta-Thin": ["Recoleta-Thin"],
        Tanker: ['Tanker'],
      },
      backgroundImage: {
        background: "url('/src/assets/bg.jpeg')",
      },
      animation: {
        "spin-slow": "spin 6s linear infinite",
        "bounce-slow": "bounce 6s linear infinite",
      },
    },
  },
  plugins: [],
}