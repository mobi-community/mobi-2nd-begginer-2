import { defineConfig } from "@pandacss/dev";

export default defineConfig({
  // css reset을 사용 여부
  preflight: true,

  // panda.css 정의를 사용할 대상 파일들
  include: ["./src/**/*.{js,jsx}", "./pages/**/*.{js,jsx}"],

  theme: {
    /* design-token */
    tokens: {
      colors: {
        purple: { 300: "#6565F4", 500: "#5252f7", 700: "#2F2FC5" },
        gray: { 100: "#EBECF0", 300: "#BABEBC" },
      },
      fonts: {
        body: { value: "Noto Sans, sans-serif" },
        size: { small: "24px", medium: "28px", large: "50px" },
      },
      boxShadow: {
        container: "-5px -5px 10px #fff, 5px 5px 10px #babebc",
        drop: "-5px -5px 10px #fff, 5px 5px 8px #babebc",
        inner: "inset 5px 5px 10px #babebc, inset -5px -5px 10px #fff",
        dropPurple: "-5px -5px 10px #6565F4, 5px 5px 8px #2F2FC5",
        innerPurple: "inset 5px 5px 10px #2F2FC5, inset -5px -5px 10px #6565F4",
      },
    },
  },

  // css system이 생성되는 장소
  outdir: "styled-system",
});
