import styled from "styled-components";
import { flexAlignCenter, flexCenter } from "../../styles/common.style";
import MUI_Select from "./components/select";
import ContinuousSlider from "./components/slide";
import MUI_TextFields from "./components/textfield";

const Mui_Main = () => {
  return (
    <Container>
      <Text>Material UI</Text>
      <MUI_TextFields />
      <MUI_Select />
      <ContinuousSlider />
    </Container>
  );
};
export default Mui_Main;

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
  margin: 8% 0;
  ${flexCenter}
`;
