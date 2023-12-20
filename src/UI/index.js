import styled from "styled-components";
import Chakra_Main from "./chakara";
import Headless_Main from "./headless";
import Mui_Main from "./mui";
import { flexAlignCenter, flexCenter } from "../styles/common.style";

const AKA_Main = () => {
  return (
    <>
      <Text>UI Samples</Text>
      <Container>
        <Chakra_Main />
        <Headless_Main />
        <Mui_Main />
      </Container>
    </>
  );
};

export default AKA_Main;

const Text = styled.div`
  font-size: ${({ theme }) => theme.FONT_SIZE.large};
  margin: 2% 0;
  ${flexCenter}
`;

const Container = styled.div`
  width: 100%;
  height: 90%;
  padding: 0 5%;
  ${flexAlignCenter}
  justify-content: space-between;
  flex-direction: row;
`;
