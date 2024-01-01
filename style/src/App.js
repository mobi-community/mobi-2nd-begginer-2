import { ThemeProvider } from "styled-components";
import theme from "./styles/theme";
import DPaginationBtn from "./components/D-paginationBtn";
import DButton from "./components/D-button/DButton";

function App() {
  return <ThemeProvider theme={theme}></ThemeProvider>;
}

export default App;
