/** @jsxImportSource @emotion/react */
import { flexCenter } from "../../style/common";
import { css } from "@emotion/react";

const EmBasicButton = ({
  size,
  shape,
  variant,
  children,
  fontSize,
  border,
  ...rest
}) => {
  const primaryStyle = (theme) => css`
    color: ${theme.COLORS.white};
    background-color: ${theme.COLORS.primary.mint};
    padding: 10px;
    border-radius: 5px;
    transition: background-color 0.3s ease;

    &:hover {
      background-color: ${theme.COLORS.primary.darkMint};
    }
  `;

  const secondaryStyle = (theme) => css`
    color: ${theme.COLORS.white};
    background-color: ${theme.COLORS.primary.light_blue};
    padding: 10px;
    border-radius: 5px;
    transition: background-color 0.3s ease;

    &:hover {
      background-color: ${theme.COLORS.primary.blue};
    }
  `;

  const smallSize = () => css`
    width: 64px;
    height: 32px;
    padding: 16px 0;
  `;

  const mediumSize = () => css`
    width: 96px;
    height: 48px;
    padding: 16px 0;
  `;

  const largeSize = () => css`
    width: 128px;
    height: 64px;
    padding: 16px 0;
  `;

  const smallFontSize = (theme) => css`
    font-size: ${theme.FONT_SIZE.x_small};
  `;

  const mediumFontSize = (theme) => css`
    font-size: ${theme.FONT_SIZE.medium};
  `;

  const largeFontSize = (theme) => css`
    font-size: ${theme.FONT_SIZE.x_large};
  `;

  const defaultShape = () => css`
    border-radius: 0px;
  `;

  const shapeShape = () => css`
    border-radius: 8px;
  `;

  const roundShape = () => css`
    border-radius: 24px;
  `;

  const variantCSS = variant === "primary" ? primaryStyle : secondaryStyle;

  const sizeCSS = {
    small: smallSize,
    medium: mediumSize,
    large: largeSize,
  };

  const fontSizeCSS = {
    small: smallFontSize,
    medium: mediumFontSize,
    large: largeFontSize,
  };

  const shapeCSS = {
    default: defaultShape,
    shape: shapeShape,
    round: roundShape,
  };

  const flexCSS = css`
    ${flexCenter}
  `;

  const combineStyle = [
    variantCSS,
    sizeCSS[size],
    fontSizeCSS[size],
    shapeCSS[shape],
    flexCSS,
  ];

  return (
    <button
      css={combineStyle}
      size={size}
      shape={shape}
      variant={variant}
      fontSize={fontSize}
      border={border}
      {...rest}
    >
      {children}
    </button>
  );
};

export default EmBasicButton;
