import scrollbarHide from "tailwind-scrollbar-hide";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      white: "#FFFFFF",
      black: "#000000",
      softSilver: "#E8E8E8",
      mildSilver: "#BEBEBE",
      cloudGray: "#C7C7C7",
      neutralGray: "#9C9C9C",
      urbanGray: "#838383",
      carbonGray: "#666363",
      shadowGray: "#626262",
      slateGray: "#585858",
      stoneGraphite: "#4F4F4F",
      goldenPulse: "#F8B726",
    },
  },
  plugins: [scrollbarHide],
};
