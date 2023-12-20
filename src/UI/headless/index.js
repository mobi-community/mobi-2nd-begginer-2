import { Dialog } from "@headlessui/react";
import Toggle from "./components/toggle";
import Tabs from "./components/tab";
import HUI_Dialog from "./components/dialog";
import styled from "styled-components";
import { flexAlignCenter, flexCenter } from "../../styles/common.style";

const Headless_Main = () => {
  return (
    <Container>
      <Text>Headless UI</Text>
      <HUI_Dialog />
      <Toggle />
      <Tabs />
    </Container>
  );
};
export default Headless_Main;

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
`;
