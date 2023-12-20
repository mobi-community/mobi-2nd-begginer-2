import { css, styled } from "styled-components";

const Select = ({ children, ...rest }) => {
  return (
    <SelectBox {...rest}>
      <select>{children}</select>
    </SelectBox>
  );
};
export default Select;

const SelectBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;

  & > select {
    width: 100px;
    height: 38px;
    border: none;
    outline: none;
    padding: 0 10px;
    border-radius: 4px;
    background-color: ${({ theme }) => theme.COLORS.gray[100]};
    box-shadow: ${({ theme }) => theme.BOX_SHADOW.drop};
    &:hover {
      box-shadow: ${({ theme }) => theme.BOX_SHADOW.inner};
    }
  }
`;
