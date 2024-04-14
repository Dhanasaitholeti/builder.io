/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  safelist: [
    {
      pattern: /text-\w+/,
    },
    {
      pattern: /(p|pb|pt|pl|pr|px|py|m|mx|my|mt|mb|ml|mr)-\d+/,
    },
    {
      pattern: /bg-\w+-\d+/,
    },
    {
      pattern: /(min|max)-(h|w)-\w+/,
    },
    {
      pattern: /(h|w)-\w+/,
    },
    {
      pattern: /(border|rounded)-\w+/,
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
