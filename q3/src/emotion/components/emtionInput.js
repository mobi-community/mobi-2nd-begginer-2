import { css } from "@emotion/react";

const EmotionInput = ({ size, ...inputProps }) => {
  const sizeCSS = {
    small: css`
      width: 244px;
      height: 30px;
      border-radius: 10px;
    `,
    medium: css`
      width: 244px;
      height: 40px;
      border-radius: 20px;
    `,
    large: css`
      width: 344px;
      height: 50px;
      border-radius: 30px;
    `,
  };

  return (
    <>
      <input css={sizeCSS[size]} {...inputProps} size={size} value="Search" />
    </>
  );
};

export default EmotionInput;
