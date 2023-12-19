import styled from "@emotion/styled";
import { flexCenter } from "../../style/common";
import { css } from "@emotion/react";
import PropTypes from "prop-types";

const EmBasicButton = ({
  size,
  shape,
  variant,
  children,
  fontSize,
  border,
  badge,
  ...rest
}) => {
  return (
    <>
      <S.Button
        size={size}
        shape={shape}
        variant={variant}
        fontSize={fontSize}
        border={border}
        {...rest}
      >
        <S.Badge type={badge.type}>{badge.value}</S.Badge>
        {children}
      </S.Button>
    </>
  );
};

export default EmBasicButton;

const sizeCSS = {
  small: css`
    width: 64px;
    height: 32px;
    padding: 16px 0;
  `,

  medium: css`
    width: 96px;
    height: 48px;
    padding: 16px 0;
  `,
  large: css`
    width: 128px;
    height: 64px;
    padding: 16px 0;
  `,
};

const shapeCSS = {
  default: css`
    border-radius: 0px;
  `,
  shape: css`
    border-radius: 8px;
  `,
  round: css`
    border-radius: 24px;
  `,
};

const Button = styled.button`
  color: ${({ theme }) => theme.COLORS.white};
  border: ${({ border }) => (border ? "3px solid white" : "none")};
  padding: 10px;
  background-color: ${({ theme, variant }) =>
    variant === "primary"
      ? theme.COLORS.primary.mint
      : theme.COLORS.primary.blue};
  &:hover {
    background-color: ${({ theme, variant }) =>
      variant === "primary"
        ? theme.COLORS.primary.dark_mint
        : theme.COLORS.primary.light_blue};
  }
  ${({ shape }) => shapeCSS[shape]}
  ${({ size }) => sizeCSS[size]}
  font-size: ${({ theme, fontSize }) =>
    fontSize === "small"
      ? theme.FONT_SIZE.x_small
      : fontSize === "medium"
      ? theme.FONT_SIZE.medium
      : theme.FONT_SIZE.x_large};
  cursor: pointer;
  font-weight: 800;
  ${flexCenter}
  position: relative;
`;

const Badge = styled.div`
  ${flexCenter}
  background-color: ${({ theme, type }) =>
    type === "default"
      ? theme.COLORS.primary.mint
      : type === "warn"
      ? theme.COLORS.warn
      : theme.COLORS.error};
  min-width: 33px;
  min-height: 33px;
  padding: 5px;
  border-radius: 50%;
  position: absolute;
  top: -10px;
  right: -10px;
`;

export const S = {
  Button,
  Badge,
};
