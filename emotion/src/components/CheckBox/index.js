import { ReactComponent as Checked } from "asset/checked.svg";
import { ReactComponent as NonChecked } from "asset/nonChecked.svg";
import { useState } from "react";
import { css } from "@emotion/react";
import styled from "@emotion/styled";

const EmCheckBox = ({ label, id, size, ...checkBoxProps }) => {
  const [isChecked, setIsChecked] = useState(false);

  const isClickChecked = () => {
    setIsChecked(!isChecked);
  };
  return (
    <S.CheckBoxArea>
      <input id={id} {...checkBoxProps} />
      {isChecked ? (
        <S.SizeChecked onClick={isClickChecked} size={size} />
      ) : (
        <S.SizeNonChecked onClick={isClickChecked} size={size} />
      )}
      <S.Label htmlFor={id} size={size}>
        {label}
      </S.Label>
    </S.CheckBoxArea>
  );
};

export default EmCheckBox;

const sizeCSS = {
  small: css`
    width: 20px;
    height: 20px;
  `,

  medium: css`
    width: 30px;
    height: 30px;
  `,
  large: css`
    width: 40px;
    height: 40px;
  `,
};

const CheckBoxArea = styled.div`
  display: flex;
  align-items: center;
  & input {
    display: none;
  }
`;

const SizeNonChecked = styled(NonChecked)`
  ${({ size }) => sizeCSS[size]}
`;
const SizeChecked = styled(Checked)`
  ${({ size }) => sizeCSS[size]}
`;

const Label = styled.label`
  padding-left: 10px;
  font-size: ${({ theme, size }) =>
    size === "small"
      ? theme.FONT_SIZE.x_small
      : size === "medium"
      ? theme.FONT_SIZE.medium
      : theme.FONT_SIZE.x_large};
`;
export const S = {
  CheckBoxArea,
  SizeNonChecked,
  SizeChecked,
  Label,
};
