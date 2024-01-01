import { css } from "@emotion/react";

// 왜 css 가 안먹는 것이냐..

const EmotionButton = ({ children, variant, size, radius, ...rest }) => {
  const getVariantStyles = () => {
    switch (variant) {
      case "primary":
        return css`
          background-color: #70a8db;
          color: #ffffff;
          &:hover {
            cursor: pointer;
            background-color: #154d82;
          }
        `;
      case "textBtn":
        return css`
          background-color: transparent;
          color: #0f0f0f;
          &:hover {
            cursor: pointer;
            color: #154d82;
            text-decoration: underline;
          }
        `;
      default:
        return null;
    }
  };

  const getSizeStyles = () => {
    switch (size) {
      case "smallCircle":
        return css`
          width: 36px;
          height: 36px;
        `;
      case "largeCircle":
        return css`
          width: 50px;
          height: 50px;
        `;
      case "small":
        return css`
          width: 68px;
          height: 24px;
        `;
      case "large":
        return css`
          width: 108px;
          height: 48px;
        `;
      default:
        return null;
    }
  };

  const getRadiusStyles = () => {
    switch (radius) {
      case "basis":
        return css`
          border-radius: 10%;
        `;
      case "circle":
        return css`
          border-radius: 50%;
        `;
      default:
        return null;
    }
  };

  const buttonStyles = css`
    border: none;
    ${getVariantStyles()}
    ${getSizeStyles()}
    ${getRadiusStyles()}
  `;

  return (
    <button css={buttonStyles} {...rest}>
      {children}
    </button>
  );
};

export default EmotionButton;
