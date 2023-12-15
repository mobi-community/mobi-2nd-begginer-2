import { css, styled } from "styled-components";

const Select = ({ variant, size, label, children, ...rest }) => {
  return (
    <SelectBox variant={variant} size={size} {...rest}>
      <select>{children}</select>
    </SelectBox>
  );
};
export default Select;

const SelectBox = styled.div`
  width: 20%;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;

  & > select {
    width: 108px;
    height: 48px;
    border: none;
    outline: none;
    border-radius: 4px;
    background-color: ${({ theme }) => theme.COLORS.gray[100]};
    box-shadow: ${({ theme }) => theme.BOX_SHADOW.drop};
  }
`;
