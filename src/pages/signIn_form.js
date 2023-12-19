import styled from "styled-components";
import { flexCenter } from "../styles/common.style";
import Facebook from "../assets/facebook.png";
import Instagram from "../assets/instagram.png";
import Twitter from "../assets/twitter.png";
import PopUpButton from "../components/button";

const SignInForm = () => {
  return (
    <Container>
      <Title>Hello, friend</Title>
      <Body>
        You can sign up quickly and easily <br /> or please use the form on the
        right
      </Body>
      <IconContainer>
        <PopUpButton variant={"purple"} size={"purpleCircle"}>
          <img src={Facebook} />
        </PopUpButton>
        <PopUpButton variant={"purple"} size={"purpleCircle"}>
          <img src={Instagram} />
        </PopUpButton>
        <PopUpButton variant={"purple"} size={"purpleCircle"}>
          <img src={Twitter} />
        </PopUpButton>
      </IconContainer>
    </Container>
  );
};
export default SignInForm;

const Container = styled.div`
  width: 50%;
  height: 100%;
  ${flexCenter}
  flex-direction: column;
  background-color: ${({ theme }) => theme.COLORS.purple[500]};
`;

const Title = styled.div`
  font-size: ${({ theme }) => theme.FONT_SIZE.large};
  font-weight: ${({ theme }) => theme.FONT_WEIGHT.bold};
  color: ${({ theme }) => theme.COLORS.white};
`;

const Body = styled.p`
  font-size: ${({ theme }) => theme.FONT_SIZE.medium};
  font-weight: ${({ theme }) => theme.FONT_WEIGHT.regular};
  color: ${({ theme }) => theme.COLORS.white};
  padding: 16% 0%;
`;

const IconContainer = styled.div`
  width: 50%;
  display: flex;
  justify-content: space-evenly;

  & > button {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
