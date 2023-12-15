import styled from "styled-components";
import Input from "../components/input";
import { flexAlignCenter } from "../styles/common.style";
import PopUpButton from "../components/button";
import Male from "../assets/male.png";
import Female from "../assets/female.png";
import Select from "../components/select";

const SignUpForm = () => {
  return (
    <Container>
      <Title>Create Account</Title>
      <Form>
        <Input label={"Name"} />
        <Input label={"E-mail"} />
        <Input label={"Password"} />
        <Birthday>
          <label>Birthday</label>
          <Select>
            <option>YYYY</option>
          </Select>
          <Select>
            <option>MM</option>
          </Select>
          <Select>
            <option>DD</option>
          </Select>
        </Birthday>
        <Gender>
          <label>Gender</label>
          <PopUpButton variant={"gray"} size={"circle"}>
            <img src={Male} />
          </PopUpButton>
          <label>male</label>
          <PopUpButton variant={"gray"} size={"circle"}>
            <img src={Female} />
          </PopUpButton>
          <label>female</label>
          <PopUpButton variant={"gray"} size={"circle"}>
            <Secret>?</Secret>
          </PopUpButton>
          <label>secret</label>
        </Gender>
        <PopUpButton variant={"gray"} size={"submit"}>
          Sign Up
        </PopUpButton>
      </Form>
    </Container>
  );
};
export default SignUpForm;

const Container = styled.div`
  width: 50%;
  height: 100%;
  ${flexAlignCenter}
  flex-direction: column;
`;
const Title = styled.h2`
  font-size: ${({ theme }) => theme.FONT_SIZE.large};
  font-weight: ${({ theme }) => theme.FONT_WEIGHT.bold};
  margin: 20% 0 10%;
  color: ${({ theme }) => theme.COLORS.purple[500]};
`;

const Form = styled.form`
  width: 100%;
  height: 60%;
  ${flexAlignCenter}
  flex-direction: column;
  justify-content: space-evenly;
`;
const Birthday = styled.div`
  width: 80%;
  ${flexAlignCenter}

  & > label {
    margin-right: 20%;
  }
`;

const Gender = styled.div`
  width: 80%;
  ${flexAlignCenter}
  justify-content: space-around;
  & > label:nth-of-type(1) {
    margin-right: 22.5%;
  }
`;

const Secret = styled.div`
  font-weight: ${({ theme }) => theme.FONT_WEIGHT_bold};
  font-size: ${({ theme }) => theme.FONT_SIZE.medium};
  color: ${({ theme }) => theme.COLORS.white};
`;
