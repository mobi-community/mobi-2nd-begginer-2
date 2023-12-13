/** @typedef {object} Colors */
/** @typedef {object} FontSize */
/** @typedef {object} FontWeight */
/** @typedef {object} Theme */

/** @type {Colors} */
const COLORS = {
  primary: {
    pink: "#FF9DA9",
    green: "#67BD7A",
    mint: "#66EBCB",
    navy: "#12678C",
    violet: "#8E29BE",
  },
  font: "#0F0F0F",
  error: "#EF6969",
  white: "#FFFFFF",
  black: "#000000",
  gray: {
    100: "#E4E4E4",
    200: "#CBCBCB",
    300: "#8F8F8F",
    400: "#646464",
    500: "#3A3A3A",
  },
};

/** @type {FontSize} */
const FONT_SIZE = {
  x_small: "14px",
  small: "16px",
  medium: "18px",
  large: "20px",
  x_large: "22px",
};

/** @type {FontWeight} */
const FONT_WEIGHT = {
  thin: 400,
  regular: 500,
  bold: 700,
};

/** @type {Theme} */
const theme = {
  COLORS,
  FONT_SIZE,
  FONT_WEIGHT,
};

export default theme;
