import ErrorMessage from "./components/errorMsg";
import Chakra_Toast from "./components/toast";
import styled from "styled-components";
import { flexAlignCenter, flexCenter } from "../../styles/common.style";
import { CircularProgress, Kbd } from "@chakra-ui/react";
import Chakra_Tooltip from "./components/tooltip";

const Chakra_Main = () => {
  return (
    <Container>
      <Text>
        <span>
          <Kbd>Shift</Kbd>
        </span>
        <span>
          <Kbd>C</Kbd>+<Kbd>H</Kbd>+<Kbd>A</Kbd>+<Kbd>K</Kbd>+<Kbd>R</Kbd>+
          <Kbd>A</Kbd>
        </span>
      </Text>
      <Chakra_Tooltip />
      <Chakra_Toast />
      <ErrorMessage />
      <CircularProgress isIndeterminate color="green" />
    </Container>
  );
};
export default Chakra_Main;

const Container = styled.div`
  width: 30%;
  height: 700px;
  ${flexAlignCenter}
  justify-content: space-between;
  flex-direction: column;
  margin: 2% 0;
`;
const Text = styled.div`
  font-size: ${({ theme }) => theme.FONT_SIZE.medium};
  margin: 4% 0;
  ${flexCenter}

  & > span {
    margin-right: 20px;

    & > * {
      padding: 6px;
      margin: 0 10px;
      background-color: #e3e3e3;
      border-radius: 4px;
      box-shadow: 5px 5px 0px rgba(0, 0, 0, 0.2);
    }
  }
`;
