import { defineConfig } from "@pandacss/dev";

export default defineConfig({
  // css reset을 사용할 건지에 대해 묻기
  preflight: true,

  // panda.css 정의를 사용할 대상 파일들
  include: ["./src/**/*.{js,jsx,ts,tsx}", "./pages/**/*.{js,jsx,ts,tsx}"],

  // include에서 제외할 파일들
  exclude: [],

  // 커스텀 theme 사용을 위한 설정 장소
  theme: {
    extend: {},
  },

  // css system이 생성되는 장소 
  outdir: "styled-system",
});
