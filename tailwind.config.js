module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      gridTemplateColumns: {
        "auto-fit": "repeat(auto-fit, minmax(0, 370px))",
        "auto-fit-2": "repeat(auto-fit, minmax(0, 450px))",
        "auto-fit-3": "repeat(auto-fit, minmax(0, 500px))",
        "auto-fill": "repeat(auto-fill, 290px)",
        // 4: "repeat(4, minmax(0, 550px))",
        // 3: "repeat(3, minmax(0, 500px))",
        // 2: "repeat(2, minmax(0, 500px))",
        // 1: "repeat(1, minmax(0, 630px))",
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
      aspetRatio: {
        "0.5/0.5": "0.5/0.5",
      },
    },
  },
  plugins: [],
};
