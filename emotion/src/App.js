import "./App.css";
import { ThemeProvider, Global } from "@emotion/react";
import theme from "./style/theme";
import EmotionPage from "./page";
import resetStyle from "./style/global";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Global styles={resetStyle} />
      <EmotionPage />
    </ThemeProvider>
  );
}

export default App;
