import React from "react";
import { ThemeProvider } from "styled-components";
import DButton from "./DButton";

export default {
  title: "DButton",
  component: DButton,
  argTypes: {
    variant: { control: "select", options: ["primary", "textBtn"] },
    size: {
      control: "select",
      options: ["smallCircle", "largeCircle", "small", "large"],
    },
    radius: { control: "select", options: ["basis", "circle"] },
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
};

const Template = (args) => (
  <ThemeProvider theme={theme}>
    <DButton {...args} />
  </ThemeProvider>
);

export const PrimarySmallCircle = Template.bind({});
PrimarySmallCircle.args = {
  variant: "primary",
  size: "smallCircle",
  children: "Primary Small Circle Button",
};

export const TextButtonLarge = Template.bind({});
TextButtonLarge.args = {
  variant: "textBtn",
  size: "large",
  children: "Text Button Large",
};
