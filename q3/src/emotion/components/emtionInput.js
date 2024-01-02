import { css } from "@emotion/react";
import styled from "@emotion/styled";

const EmotionInput = ({ size, ...inputProps }) => {
  return (
    <>
      <Input {...inputProps} size={size} value="Search" />
    </>
  );
};
export default EmotionInput;

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

const Input = styled.input`
  border: none;
  border: 1px solid #70a8db;
  color: #70a8db;
  font-size: 24px;
  font-weight: 600;
  ${({ size }) => sizeCSS[size]}
`;
