import GlobalStyles from "./styles/global.style";
import { ThemeProvider } from "styled-components";
import { RouterProvider } from "react-router-dom";
import theme from "./styles/theme.style";
import router from "./routes/router";
import { ChakraProvider } from "@chakra-ui/react";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <ChakraProvider theme={theme}>
        <GlobalStyles />
      </ChakraProvider>
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}

export default App;
