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
            accent: "#8E8E8E",
            neutral: "#3d4451",
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
