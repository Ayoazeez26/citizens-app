module.exports = {
  purge: ["./public/**/*.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: "#2F3F4C",
        "yellow-1": "#E0A03D",
        "yellow-2": "#FFF9F1",
        "green-1": "#099339",
        "purple-2": "#AAAACD",
        "grey-1": "#9C9C9D",
        "grey-2": "#C8C8C8",
        "grey-3": "#808080",
        "gold-1": "#C2BB05",
        red: "#FF442B",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
