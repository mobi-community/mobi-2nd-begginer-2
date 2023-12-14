import { styled, css } from "styled-components";

const Pair2Input = ({ size, ...inputProps }) => {
  return (
    <>
      <Input {...inputProps} size={size} value="Search" />

      {/* <></> */}
    </>
  );
};
export default Pair2Input;

const sizeCSS = {
  small: css`
    width: 244px;
    height: 30px;
    border-radius: 10px;
  `,
  midium: css`
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
  border: 1px solid ${({ theme }) => theme.COLORS.primary["main"]};
  color: ${({ theme }) => theme.COLORS.primary["main"]};
  font-size: ${({ theme }) => theme.FONT_SIZE.large};
  font-weight: ${({ theme }) => theme.FONT_WEIGHT.regular};
  ${({ size }) => sizeCSS[size]}
`;
