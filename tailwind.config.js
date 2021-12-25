module.exports = {
  purge: ["./public/**/*.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: "#000068",
        "yellow-1": "#FFF613",
        "yellow-2": "#FFFEF1",
        "green-1": "#099339",
        "purple-2": "#AAAACD",
        "grey-1": "#9C9C9D",
        "gold-1": "#C2BB05",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
