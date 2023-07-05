module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        'ir-grey': '#181A1D',
      },
    },
  },
  plugins: [require("daisyui"), require("prettier-plugin-tailwindcss")],
};
