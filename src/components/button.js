import { css, styled } from "styled-components";

const PopUpButton = ({ variant, size, children, ...rest }) => {
  return (
    <Button variant={variant} size={size} {...rest}>
      {children}
    </Button>
  );
};
export default PopUpButton;

const Button = styled.button``;
