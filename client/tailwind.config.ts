/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  safelist: [
    {
      pattern: /(p|pb|pt|pl|pr|px|py|m|mx|my|mt|mb|ml|mr)-\d+/,
    },
    {
      pattern: /(bg|text)-\w+(-\d+)?/,
    },
    {
      pattern: /(min|max-)?(h|w)(-\w+|\d+)?/,
    },
    {
      pattern: /(border|rounded)(-b|t|l|r)?(-\w+)?/,
    },
  ],
  theme: {
    extend: {
      gridTemplateColumns: {
        "20": "repeat(20, minmax(0, 1fr))",
      },
      colors: {
        textPrimary: "#121417",
        CTAPrimary: "#0D7DF2",
        backgroundNavbar: "#E5E8EB",
        backgroundPrimary: "F0F2F5",
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
};
