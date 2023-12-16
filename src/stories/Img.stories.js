import React from 'react';
import { Img, imgName } from './Img';

export default {
  component: Img,
  argTypes: {
    image: {
      // 선택지에 추가할 객체 지정
      options: Object.keys(imgName),
      // 이미지 선택하는 방식
      control: { type: 'select' }
    },
  },
  // 초기 이미지 설정
  args: {
    image: 'facebook', 
  },
};

// 스토리북의 컴포넌트 이름
export const Default = (args) => <Img {...args} />;