import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import './button.css';
import facebook from "./assets/facebook.png";
import instagram from "./assets/instagram.png";
import twitter from "./assets/twitter.png";
import male from "./assets/male.png"
import female from "./assets/female.png"
import defaultImg from './assets/click.png';
import { flexCenter } from '../styles/common.style';


export const imgName = {
  DefaultImg: defaultImg,
  Facebook: facebook,
  Instagram: instagram,
  Twitter: twitter,
  Male: male,
  Female: female,
};

export const Button = ({ primary, size, label, image, hasImg, ...props }) => {
  console.log("Button", facebook)
  const mode = primary ? 'popup-button--purple' : 'popup-button--gray';
  const Icon = styled.img`
    width: 60%;
    margin: 0 auto;
    ${flexCenter}
  `

  return (
    <button
      type="button"
      className={['popup-button', `popup-button--${size}`, mode].join(' ')}
      {...props}
    >
      {label}
      {hasImg ? <Icon src={imgName[image]} alt="sns icon"/> : ''}
    </button>
  );
};


Button.propTypes = {
  primary: PropTypes.bool,
  hasImg: PropTypes.bool,
  size: PropTypes.oneOf(['smallCircle', 'largeCircle', 'Square']),
  label: PropTypes.string,
  onClick: PropTypes.func,
  image: PropTypes.string,
};

Button.defaultProps = {
  primary: false,
  size: 'Square',
  onClick: undefined,
  hasImg: false,
};
