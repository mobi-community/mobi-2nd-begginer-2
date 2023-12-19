import "./App.css";
/** @jsxImportSource @emotion/react */
import { ThemeProvider, Global } from "@emotion/react";
import theme from "./style/theme";
import EmotionPage from "./page";
import resetStyle from "./style/global";
import { RouterProvider } from "react-router-dom";
import router from "router/router";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Global styles={resetStyle} />
      <RouterProvider router={router}>
        <EmotionPage />
      </RouterProvider>
    </ThemeProvider>
  );
}

export default App;
