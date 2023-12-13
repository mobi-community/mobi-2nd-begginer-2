import logo from "./logo.svg";
import "./App.css";
import BasicButton from "./components/BasicButton";
import { ThemeProvider } from "styled-components";
import theme from "./style/theme";
function App() {
  return (
    <ThemeProvider theme={theme}>
      <BasicButton variant={"primary"} shape={"shape"} size={"small"}>
        로그인
      </BasicButton>
      <BasicButton variant={"secondary"} shape={"round"} size={"medium"}>
        로그인
      </BasicButton>
    </ThemeProvider>
  );
}

export default App;
