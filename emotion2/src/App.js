/** @jsxImportSource @emotion/react */
import { css, jsx } from "@emotion/react";
import EmBasicButton from "./components/BasicButton";
import { ThemeProvider } from "@emotion/react";
import theme from "./style/theme";
import Haha from "./components/haha";

const divStyle = css`
  background-color: hotpink;
  font-size: 24px;
  border-radius: 4px;
  padding: 32px;
  text-align: center;
  &:hover {
    color: white;
  }
`;

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <div css={divStyle}>asdfa</div>
      <Haha />
    </ThemeProvider>
  );
}
