import { ThemeProvider } from "styled-components";
import theme from "./styles/theme.style";
import HomePage from "./pages";


function App() {
  return (
    <ThemeProvider theme={theme}>
      <HomePage />
    </ThemeProvider>
  );
}

export default App;
