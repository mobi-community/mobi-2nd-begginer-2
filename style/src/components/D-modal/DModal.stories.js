import React from "react";
import DModal from "./DModal";
import { ThemeProvider } from "styled-components";

export default {
  title: "DModal",
  component: DModal,
  argTypes: {
    size: { control: "select", options: ["small", "midium", "large"] },
    radius: { control: "select", options: ["basis", "round"] },
    children: { control: "text" },
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
    <DModal {...args} />
  </ThemeProvider>
);

export const SmallModal = Template.bind({});
SmallModal.args = {
  size: "small",
  children: "Small Modal Content",
};

export const LargeModal = Template.bind({});
LargeModal.args = {
  size: "large",
  children: "Large Modal Content",
};
