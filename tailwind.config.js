module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      gridTemplateColumns: {
        "auto-fit": "repeat(auto-fit, minmax(300px, 370px))",
        "auto-fit-2": "repeat(auto-fit, minmax(370px, 450px))",
        "auto-fit-3": "repeat(auto-fit, minmax(450px, 500px))",
        "auto-fill": "repeat(auto-fill, 290px)",
      },
      gridTemplateRows: {
        "auto-fit": "repeat(auto-fit, minmax(0, 1fr))",
        "auto-fill": "repeat(auto-fill, minmax(0, 1fr))",
      },
      colors: {
        TextPrimary: "#F8F9FA",
        TextSecondary: "black",
        Primary: "#212529",
      },
    },
  },
  plugins: [],
};
