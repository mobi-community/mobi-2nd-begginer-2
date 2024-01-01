import React from "react";
import DSelect from "./DSelect";
import { ThemeProvider } from "styled-components";

export default {
  title: "DSelect",
  component: DSelect,
  argTypes: {
    size: { control: "select", options: ["small", "large"] },
    radius: { control: "select", options: ["basis", "round"] },
    options: { control: "object" },
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
    <DSelect {...args} />
  </ThemeProvider>
);

export const SmallSelect = Template.bind({});
SmallSelect.args = {
  size: "small",
  options: [
    { value: "value1", label: "Option 1" },
    { value: "value2", label: "Option 2" },
  ],
};

export const LargeSelect = Template.bind({});
LargeSelect.args = {
  size: "large",
  options: [
    { value: "value1", label: "Option 1" },
    { value: "value2", label: "Option 2" },
  ],
};
