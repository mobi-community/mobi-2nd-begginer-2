import { defineConfig } from "@pandacss/dev";

export default defineConfig({
  // css reset을 사용 여부
  preflight: true,
  jsxFramework: "react",
  // panda.css 정의를 사용할 대상 파일들
  include: ["./src/**/*.{js,jsx}", "./pages/**/*.{js,jsx}"],

  theme: {
    extend: {
      /* design-token */
      tokens: {
        colors: {
          "purple-300": { value: "#6565F4" },
          "purple-500": { value: "#5252f7" },
          "purple-700": { value: "#2F2FC5" },
          "gray-100": { value: "#EBECF0" },
          "gray-300": { value: "#BABEBC" },
        },
        fonts: {
          body: { value: "Noto Sans, sans-serif" },
          size: {
            small: { value: "24px" },
            medium: { value: "28px" },
            large: { value: "50px" },
          },
        },
        boxShadow: {
          container: { value: "-5px -5px 10px #fff, 5px 5px 10px #babebc" },
          drop: { value: "-5px -5px 10px #fff, 5px 5px 8px #babebc" },
          inner: {
            value: "inset 5px 5px 10px #babebc, inset -5px -5px 10px #fff",
          },
          dropPurple: { value: "-5px -5px 10px #6565F4, 5px 5px 8px #2F2FC5" },
          innerPurple: {
            value: "inset 5px 5px 10px #2F2FC5, inset -5px -5px 10px #6565F4",
          },
        },
      },
    },
  },

  // css system이 생성되는 장소
  outdir: "styled-system",
});
