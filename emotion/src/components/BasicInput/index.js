import styled from "@emotion/styled";
import { flexCenter } from "../../style/common";
import { css } from "@emotion/react";

const EmBasicInput = ({ variant, size, placeholder, label, ...inputProps }) => {
  return (
    <S.InputBox>
      <S.Label>{label}</S.Label>
      <S.Input
        size={size}
        variant={variant}
        placeholder={placeholder}
        inputProps={inputProps}
      />
    </S.InputBox>
  );
};
export default EmBasicInput;

/*인풋 사이즈 토큰*/
const sizeCSS = {
  small: css`
    width: 200px;
    height: 30px;
    padding: 8px 0;
  `,

  medium: css`
    width: 300px;
    height: 35px;
    padding: 10px 0;
  `,
  large: css`
    width: 400px;
    height: 40px;
    padding: 12px 0;
  `,

  full: css`
    width: 100%;
    height: 45px;
    padding: 12px 0;
  `,
};

const InputBox = styled.div`
  display: grid;
  grid-template-columns: 1fr 4fr;
`;

const Label = styled.label`
  ${flexCenter};
  font-size: ${({ theme, size }) => theme.FONT_SIZE[size]};
  padding: 10px;
  min-width: 70px;
`;

const Input = styled.input`
  ${({ size }) => sizeCSS[size]}
  background-color: ${({ theme, variant }) =>
    variant === "primary" ? theme.COLORS.white : theme.COLORS.gray[200]};
  color: ${({ theme, variant }) =>
    variant === "primary" ? theme.COLORS.black : theme.COLORS.white};
  font-size: ${({ theme, size }) => theme.FONT_SIZE[size]};
  border: 3px solid
    ${({ theme, variant }) =>
      variant === "primary" ? theme.COLORS["line"] : theme.COLORS["white"]};
  border-radius: 10px;
  padding: 10px;
`;

const S = {
  InputBox,
  Label,
  Input,
};
