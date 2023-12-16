import { styled } from 'styled-components';
import facebook from "./assets/facebook.png";
import instagram from "./assets/instagram.png";
import twitter from "./assets/twitter.png";
import React from 'react';
import PropTypes from 'prop-types';

// 이미지가 저장되어 있는 경로들 객체에 지정
/**
 * 경로...........모르겠어.............패배....패배했어요..
 */
export const imgName = {
  Facebook: facebook, // 이게 왜 404 ㅠㅠ?
  Instagram: instagram,
  Twitter: twitter,

};

const ImgStyle = styled.img`
    z-index: 100;
`;
const Wrapper = styled.div`
    background-color: black;
    padding: 4%;
`

export const Img = ({ image }) => {
    console.log("imgName", imgName)
    console.log("image: ", typeof imgName.Facebook)
    console.log("facebook", facebook)
    console.log("facebook", typeof facebook)
    // 된다ㅠㅠㅠㅠㅠㅠㅠㅠㅠ

  return (
    <Wrapper>
        <ImgStyle src={imgName[image]} alt="sns icon"/>
    </Wrapper>
  );
};

Img.propTypes = {
    image: PropTypes.string,
};
Img.defaultProps = {
    image: undefined,
};