/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

const EmBasicInput = ({ variant, size, placeholder, label, ...inputProps }) => {
  const smallCSS = () => css`
    width: 200px;
    height: 50px;
    padding: 8px 0;
  `;

  const mediumCSS = () => css`
    width: 300px;
    height: 55px;
    padding: 10px 0;
  `;

  const largeCSS = () => css`
    width: 400px;
    height: 60px;
    padding: 12px 0;
  `;

  const fullCSS = () => css`
    width: 100%;
    height: 60px;
    padding: 12px 0;
  `;

  const sizeCSS = {
    small: smallCSS,
    medium: mediumCSS,
    large: largeCSS,
    full: fullCSS,
  };

  const fontSize = (theme) => css`
    font-size: ${theme.FONT_SIZE[size] || theme.FONT_SIZE["large"]};
  `;

  const primaryCSS = (theme) => css`
    background-color: ${theme.COLORS.white};
    color: ${theme.COLORS["black"]};
    border: 3px solid ${theme.COLORS["line"]};
  `;

  const secondaryCSS = (theme) => css`
    background-color: ${theme.COLORS.gray[200]};
    color: ${theme.COLORS["white"]};
    border: 3px solid ${theme.COLORS["white"]};
  `;

  const inputCSS = css`
    border-radius: 10px;
    padding: 10px;
  `;

  const labelCSS = css`
    padding-right: 10px;
  `;

  const variantCSS = variant === "primary" ? primaryCSS : secondaryCSS;

  const inputCombineCSS = [sizeCSS[size], inputCSS, variantCSS, fontSize];

  return (
    <div css={fontSize}>
      <label css={labelCSS}>{label}</label>
      <input
        css={inputCombineCSS}
        size={size}
        variant={variant}
        placeholder={placeholder}
        inputProps={inputProps}
      />
    </div>
  );
};

export default EmBasicInput;
