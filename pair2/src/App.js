import logo from "./logo.svg";
import "./App.css";
import Pair2Button from "./components/pair2-button";
import Pair2Input from "./components/pair2-input";
import Pair2Modal from "./components/pair2-modal";
import { ThemeProvider } from "styled-components";
import theme from "./style/theme";
import Pair2PaginationBtn from "./components/pair2-paginationBtn";
import Pair2Select from "./components/pair2-select";

function App() {
  const optionsArr = [
    { value: "a", label: "aaaa" },
    { value: "b", label: "bbbb" },
  ];

  return (
    <ThemeProvider theme={theme}>
      <Pair2Button variant="primary">button</Pair2Button>
      <Pair2Button variant="textBtn">button</Pair2Button>
      <Pair2Button variant="primary" size="largeCircle" radius="circle">
        button
      </Pair2Button>
      <Pair2PaginationBtn
        buttonCount={10}
        currentPage={37}
        sizeCSS="largeCircle"
      />
      <Pair2Input size="small" />
      <Pair2Modal size="small" radius="round">
        login
      </Pair2Modal>
      <Pair2Modal size="midium" radius="basis">
        글쓰기
      </Pair2Modal>
      <Pair2Select options={optionsArr} radius="basis" size="small" />
      <Pair2Select options={optionsArr} radius="basis" size="large" />
    </ThemeProvider>
  );
}

export default App;
