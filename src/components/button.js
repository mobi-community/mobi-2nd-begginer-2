import { css, styled } from "styled-components";

const PopUpButton = ({ variant, size, children, ...rest }) => {
  return (
    <Button variant={variant} size={size} {...rest}>
      {children}
    </Button>
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
    width: 40%;
    height: 42px;
    border-radius: 16px;
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

const Button = styled.button`
  ${({ variant }) => variantCSS[variant]}
  ${({ size }) => sizeCSS[size]}
  cursor: pointer;
  transition: all 0.6s;
`;
