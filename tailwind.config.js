module.exports = {
  darkMode: false, // or 'media' or 'class'
  corePlugins: {
    ringWidth: false,
    outline: false,
  },
  theme: {
    extend: {
      colors: {
        mw: {
          bg: {
            primary: "#E3E2Df",
            darker: "#c9c8c5",
            darkest: "#E3AFBC",
          },
          accent: {
            primary: "#E40044",
            darker: "#bd0038",
          },
          dark: {
            brighter: "#750026",
            primary: "#5D001E",
          },
        },
      },
    },
  },
  plugins: [require("@tailwindcss/forms"), require("@tailwindcss/typography")],
};
