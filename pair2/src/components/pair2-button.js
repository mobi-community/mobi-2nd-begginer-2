import styled, { css } from "styled-components";

const Pair2Button = ({ children, variant, size, radius, ...rest }) => {
  return (
    <Button variant={variant} size={size} radius={radius} {...rest}>
      {children}
    </Button>
  );
};

export default Pair2Button;

const variantCSS = {
  primary: css`
    background-color: ${({ theme }) => theme.COLORS.primary["main"]};
    color: ${({ theme }) => theme.COLORS.white};
    &:hover {
      cursor: pointer;
      background-color: ${({ theme }) => theme.COLORS.primary["dark"]};
    }
  `,
  textBtn: css`
    background-color: transparent;
    color: ${({ theme }) => theme.COLORS.black};
    &:hover {
      cursor: pointer;
      color: ${({ theme }) => theme.COLORS.primary["dark"]};
      text-decoration: underline;
    }
  `,
};

const sizeCSS = {
  smallCircle: css`
    width: 36px;
    height: 36px;
  `,
  largeCircle: css`
    width: 50px;
    height: 50px;
  `,
  small: css`
    width: 68px;
    height: 24px;
  `,
  large: css`
    width: 108px;
    height: 48px;
  `,
};

const radiusCSS = {
  basis: css`
    border-radius: 10%;
  `,
  circle: css`
    border-radius: 50%;
  `,
};

const Button = styled.button`
  border: none;
  ${({ variant }) => variantCSS[variant]}
  ${({ size }) => sizeCSS[size]}
  ${({ radius }) => radiusCSS[radius]}
`;
