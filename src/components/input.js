import { css, styled } from "styled-components";

const Input = ({ label, inputProps }) => {
  return (
    <InputBox>
      <label>{label}</label>
      <input {...inputProps} />
    </InputBox>
  );
};
export default Input;

const InputBox = styled.div`
  width: 80%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  & > input {
    width: 394px;
    height: 48px;
    padding: 0 10px;
    background-color: ${({ theme }) => theme.COLORS.gray[100]};
    box-shadow: ${({ theme }) => theme.BOX_SHADOW.inner};
    border-radius: 14px;
    border: none;
    outline: none;
  }
`;
