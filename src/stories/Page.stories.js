import { PopUpCircle } from "./Button";
import { SignUpPage } from "./Page";

// 하루종일 에러 구경ㅇ중 개빡침
// name 쓰지도 않았는데 어디에??????
// 쓰바 버전오류 그만 업데이트하라고 🤬🤯🥶😱
// 화면에 렌더해 이 빡대가리야...
// displayName은 또 뭔데 ㅋ
// 리액트는 선녀였다.........
export default {
  title: "MyStory",
  component: SignUpPage,
  parameters: {
    layout: "fullscreen",
  },
};

export const myStory = () => <SignUpPage />;

myStory.parameters = {
  design: {
    type: "figma",
    url: "https://www.figma.com/file/awaS3bvQDRPb8b5njurGJs/story-book?type=design&node-id=1%3A4&mode=design&t=8usisL7PuNaLBMSG-1",
  },
};
