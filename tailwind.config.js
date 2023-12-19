/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      // 교수님... drop...하고싶어요........ㅋ
      boxShadow: {
        container: "-5px -5px 10px #fff, 5px 5px 10px #babebc",
        drop: "-5px -5px 10px #fff, 5px 5px 8px #babebc",
        inner: "inset 5px 5px 10px #babebc, inset -5px -5px 10px #fff",
        dropPurple: "-5px -5px 10px #6565F4, 5px 5px 8px #2F2FC5",
        innerPurple: "inset 5px 5px 10px #2F2FC5, inset -5px -5px 10px #6565F4",
      },
    },
    // styled-components에서 styles/theme.js && storybook에서 preview
    colors: {
      "purple-300": "#6565F4",
      "purple-500": "#5252f7",
      "purple-700": "#2F2FC5",
      "grey-100": "#EBECF0",
      "grey-300": "#BABEBC",
      white: "#FFFFFF",
      black: "#000000",
    },
    screens: {},
    plugins: [],
  },
};
