import React from "react";
import DInput from "./DInput";
import { ThemeProvider } from "styled-components";

export default {
  title: "DInput",
  component: DInput,
  argTypes: {
    size: { control: "select", options: ["small", "midium", "large"] },
  },
};

const theme = {
  COLORS: {
    primary: {
      light: "#DAEDFF",
      main: "#70A8DB",
      dark: "#154D82",
    },
    white: "#ffffff",
    black: "#0F0F0F",
  },
  FONT_SIZE: {
    small: "18px",
    large: "24px",
    header: "40px",
  },
  FONT_WEIGHT: {
    thin: 300,
    regular: 600,
    bold: 900,
  },
};

const Template = (args) => (
  <ThemeProvider theme={theme}>
    <DInput {...args} />
  </ThemeProvider>
);

export const SmallInput = Template.bind({});
SmallInput.args = {
  size: "small",
};

export const MediumInput = Template.bind({});
MediumInput.args = {
  size: "midium",
};

export const LargeInput = Template.bind({});
LargeInput.args = {
  size: "large",
};
