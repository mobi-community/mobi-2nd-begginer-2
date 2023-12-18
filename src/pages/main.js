import styled from "styled-components";
import SignInForm from "./signIn_form";
import SignUpForm from "./signup_form";
import { flexJustifyCenter, positionCenter } from "../styles/common.style";

const MainPage = () => {
  return (
    <Wrapper>
      <Container>
        <SignInForm />
        <SignUpForm />
      </Container>
    </Wrapper>
  );
};
export default MainPage;

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  overflow: hidden;
`;

const Container = styled.div`
  width: 78%;
  height: 74%;
  border-radius: 14px;
  box-shadow: ${({ theme }) => theme.BOX_SHADOW.container};
  ${positionCenter}
  ${flexJustifyCenter}
  overflow: hidden;
`;
