/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
    daisyui: {
      themes: [
        {
          mytheme: {
            primary: "#5D00DC",
            secondary: "#262626",
            accent: "#848484",
            neutral: "#848484",
            "base-100": "#ffffff",
          },
        },
        "light",
        "cupcake",
      ],
      
    },
  },
  plugins: [require("daisyui")],
}
