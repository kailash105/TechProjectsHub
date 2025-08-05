module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#FACC15",
        secondary: "#FDE68A",
        accent: "#4B5563",
        dark: "#111827",
        light: "#F9FAFB",
        "alpha-bg": "#e3e188",  // 👈 added your background color
      },
      animation: {
        "loop-scroll": "scroll 30s linear infinite",
      },
      keyframes: {
        scroll: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
    },
  },
  plugins: [],
};
