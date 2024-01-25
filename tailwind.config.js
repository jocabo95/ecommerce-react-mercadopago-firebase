
// tailwind.config.js
const {nextui} = require("@nextui-org/react");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  darkMode: "class",
  plugins: [
    nextui({
      themes: {
        mytheme: {
          colors: {
            background: "#FFFFFF",
            // background: "#5F7D7D", BAKCGROUND SUSY
            foreground: "#616376",

            primary: {
              DEFAULT: "#F7F7F9",
              foreground: "#616376",
              background: "#000000",
            },

            secondary: {
              DEFAULT: "#5A5FE0",
              foreground: "#F7F7F9",
              background: "#000000",
            },
            
            focus: "#BEF264",
          },
        },
      },
    }),
  ],
};
