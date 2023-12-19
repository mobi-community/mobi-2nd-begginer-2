import { css, styled } from "styled-components";

const PopUpButton = ({ variant, size, label, children, ...rest }) => {
  return (
    <>
      <Button variant={variant} size={size} {...rest}>
        {children}
      </Button>
      <label>{label}</label>
    </>
  );
};
export default PopUpButton;

const variantCSS = {
  purple: css`
    box-shadow: ${({ theme }) => theme.BOX_SHADOW.dropPurple};
    &:hover,
    &:focus {
      box-shadow: ${({ theme }) => theme.BOX_SHADOW.innerPurple};
    }
  `,
  gray: css`
    box-shadow: ${({ theme }) => theme.BOX_SHADOW.drop};
    &:hover,
    &:focus {
      box-shadow: ${({ theme }) => theme.BOX_SHADOW.inner};
    }
  `,
};
const sizeCSS = {
  submit: css`
    width: 278px;
    height: 70px;
    border-radius: 16px;
    font-size: ${({ theme }) => theme.FONT_SIZE.medium};
    font-weight: ${({ theme }) => theme.FONT_WEIGHT.thin};
  `,
  purpleCircle: css`
    background: ${({ theme }) => theme.COLORS.purple[500]};
    width: 80px;
    height: 80px;
    border-radius: 50%;
    & > img {
      width: 40px;
      height: 40px;
    }
  `,
  circle: css`
    width: 48px;
    height: 48px;
    border-radius: 50%;
    & > img {
      width: 24px;
      height: 24px;
    }
  `,
};

// 재사용을 해야하니 공통된 최소한의 속성만 적어주는 것이 좋다. (교집합되는!) control
const Button = styled.button`
  ${({ variant }) => variantCSS[variant]}
  ${({ size }) => sizeCSS[size]}
  cursor: pointer;
  transition: all 0.6s;
`;
