module.exports = {
  darkMode: "class",
  content: [
    "./themes/**/layouts/**/*.html",
    "./content/**/layouts/**/*.html",
    "./layouts/**/*.html",
    "./content/**/*.html",
  ],
  theme: {
    fontFamily: {
      sans: ["Fira Sans", "Inter", "sans-serif"],
      mono: ["Fira Mono", "Fira Code", "monospace"],
    },
    extend: {},
  },
  plugins: [
    require("@tailwindcss/aspect-ratio"),
    require("@tailwindcss/forms"),
  ],
};
