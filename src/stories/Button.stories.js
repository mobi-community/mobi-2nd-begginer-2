import { Button, imgName } from './Button';


// args: 인수(값, 변수, 참조 등 전달되는 값)를 정의
export default {
  component: Button,
};

export const widthIcon = {
  image: {
    // 선택지에 추가할 객체 지정
    options: Object.keys(imgName),
    // 이미지 선택하는 방식
    control: { type: 'select' }
  }
}

export const SubmitButton = {
  args: {
    label: 'Sign Up',
  },
};

export const SNSLogin = {
  argTypes: {
    ...widthIcon,
  },
  args: {
    primary: true,
    size: "largeCircle",
    hasImg: true,
    image: 'DefaultImg', 
  },
};

export const Gender = {
  argTypes: {
    ...widthIcon
  },
  args: {
    primary: false,
    size: "smallCircle",
    hasImg: true,
    image: 'DefaultImg', 
  },
};

