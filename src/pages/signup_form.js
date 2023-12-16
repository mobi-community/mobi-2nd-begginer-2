import styled from "styled-components";
import Input from "../components/input";
import { flexCenter, flexAlignCenter, positionCenter, flexJustifyCenter } from "../styles/common.style";
import PopUpButton from "../components/button";
import Male from "../assets/male.png";
import Female from "../assets/female.png";
import Select from "../components/select";
import { BIRTHDAY_DAY_LIST, BIRTHDAY_MONTH_LIST, BIRTHDAY_YEAR_LIST } from "./datalist/birthday_list";

const SignUpForm = () => {
  return (
    <Container>
      <Title>Create Account</Title>
      <Form>
          <OneRow>
          <label>Name</label>
          <Input />
          </OneRow>
          <OneRow>
          <label>E-mail</label>
          <Input />
          </OneRow>
          <OneRow>
          <label>Password</label>
          <Input />
          </OneRow>
          <OneRow>
          <label>Birthday</label>
            <Select>
            <option value="" >YYYY</option>
            {BIRTHDAY_YEAR_LIST.map((year, index) => (
              <option key={index}>{year}</option>
              ))}
            </Select>
            <Select>
            <option value="" >MM</option>
            {BIRTHDAY_MONTH_LIST.map((month, index) => (
              <option key={index}>{month}</option>
              ))}
            </Select>
            <Select>
            <option value="" >DD</option>
            {BIRTHDAY_DAY_LIST.map((day, index) => (
              <option key={index}>{day}</option>
            ))}
            </Select>
          </OneRow>
          <OneRow>
          <label>Gender</label>
          <div>
            <PopUpButton variant={"gray"} size={"circle"} label={"male"} type={"button"}>
              <img src={Male} />
            </PopUpButton>
            <PopUpButton variant={"gray"} size={"circle"} label={"female"} type={"button"}>
              <img src={Female} />
            </PopUpButton>
            <PopUpButton variant={"gray"} size={"circle"} label={"secret"} type={"button"}>
              <Secret>?</Secret>
            </PopUpButton>
          </div>
          </OneRow>
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
`;
const Title = styled.h2`
  font-size: ${({ theme }) => theme.FONT_SIZE.large};
  font-weight: ${({ theme }) => theme.FONT_WEIGHT.bold};
  color: ${({ theme }) => theme.COLORS.purple[500]};
  margin: 7% 0;
  ${flexJustifyCenter};
`;

const Form = styled.form`
  width: 100%;
${flexCenter}
flex-direction: column;

& > button {
  margin: 6% 0 0;
}
`;

const OneRow = styled.div`
  width: 74%;
  ${flexAlignCenter}
  flex-direction: row;
  margin: 20px 0;

  & > label {
    width: 20%;
    justify-content: flex-start;
  }
  & > div {
    margin-left: 8%;

    & > button {
     margin-left: 24px;
    }
    & > label {
      margin-left: 10px;
     }
  }
  & > div:nth-of-type(1) {
    margin-left: 10%;
  }
`

const Secret = styled.div`
  font-weight: ${({ theme }) => theme.FONT_WEIGHT_bold};
  font-size: ${({ theme }) => theme.FONT_SIZE.medium};
  color: ${({ theme }) => theme.COLORS.white};
`;
