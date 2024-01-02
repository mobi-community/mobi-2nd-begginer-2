import styled from "@emotion/styled";

const EmotionButton = ({ children, variant, size, radius, ...rest }) => {
  return (
    <Button variant={variant} size={size} radius={radius} {...rest}>
      {children}
    </Button>
  );
};

export default EmotionButton;

const variantStyles = {
  primary: `
    background-color: #70A8DB;
    color: #ffffff;
    &:hover {
      cursor: pointer;
      background-color: #154D82;
    }
  `,
  textBtn: `
    background-color: transparent;
    color: #0F0F0F;
    &:hover {
      cursor: pointer;
      color: #154D82;
      text-decoration: underline;
    }
  `,
};

const sizeStyles = {
  smallCircle: `
    width: 36px;
    height: 36px;
  `,
  largeCircle: `
    width: 50px;
    height: 50px;
  `,
  small: `
    width: 68px;
    height: 24px;
  `,
  large: `
    width: 108px;
    height: 48px;
  `,
};

const radiusStyles = {
  basis: `
    border-radius: 10%;
  `,
  circle: `
    border-radius: 50%;
  `,
};

const Button = styled.button`
  border: none;
  ${({ variant }) => variantStyles[variant]}
  ${({ size }) => sizeStyles[size]}
  ${({ radius }) => radiusStyles[radius]}
`;
