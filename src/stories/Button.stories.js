import { Button } from './Button';
// import facebook from './assets/facebook.png';
// import instagram from './assets/instagram.png';
// import twitter from './assets/twitter.png';


// args: 인수(값, 변수, 참조 등 전달되는 값)를 정의
// stories 화면 렌더해주는 부분 공용화된 것들을!
export default {
  component: Button,
};


/* size */
export const SubmitButton = {
  args: {
    primary: false,
    size: "Square",
    label: 'Sign Up',
  },
};
export const SNSLogin = {
  args: {
    primary: true,
    size: "largeCircle",
  },
};
export const Gender = {
  args: {
    primary: false,
    size: "smallCircle",
  },
};