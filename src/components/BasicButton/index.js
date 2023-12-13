import styled, { css } from "styled-components";
import { flexCenter } from "../../style/common";

const BasicButton = ({ size, shape, variant, children, ...rest }) => {
  return (
    <Button size={size} shape={shape} variant={variant} {...rest}>
      {children}
    </Button>
  );
};

export default BasicButton;

const variantCSS = {
  primary: css`
    background-color: ${({ theme }) => theme.COLORS.primary["mint"]};
    color: ${({ theme }) => theme.COLORS["white"]};
  `,

  secondary: css`
    background-color: ${({ theme }) => theme.COLORS.primary["pink"]};
    color: ${({ theme }) => theme.COLORS["white"]};
  `,
};

const sizeCSS = {
  small: css`
    width: 64px;
    height: 32px;
    padding: 16px 0;
  `,

  medium: css`
    width: 96px;
    height: 48px;
    padding: 16px 0;
  `,
  large: css`
    width: 128px;
    height: 64px;
    padding: 16px 0;
  `,

  full: css`
    width: 100%;
    aspect-ratio: 8 / 1;
  `,
};

const shapeCSS = {
  default: css``,
  shape: css`
    border-radius: 8px;
  `,
};

const Button = styled.button`
  ${({ variant }) => variantCSS[variant]}
  ${({ shape }) => shapeCSS[shape]}
    ${({ size }) => sizeCSS[size]}
    cursor: pointer;
  border: none;
  font-size: ${({ theme }) => theme.FONT_SIZE.medium};

  &:hover {
    opacity: 0.7;
  }

  /* &:active {
    border-color: red;
  } */
  ${flexCenter}
`;
