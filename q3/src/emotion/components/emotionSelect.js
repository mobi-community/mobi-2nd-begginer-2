import { css } from "@emotion/react";
import styled from "@emotion/styled";

const EmotionSelect = ({ options, radius, size }) => {
  return (
    <Select radius={radius} size={size}>
      {options.map((el) => (
        <Option value={el.value}>{el.label}</Option>
      ))}
    </Select>
  );
};

export default EmotionSelect;

const sizeCSS = {
  small: css`
    width: 68px;
    height: 24px;
    font-size: 18px;
  `,
  large: css`
    width: 108px;
    height: 44px;
    font-size: 24px;
  `,
};

const radiusCSS = {
  basis: css`
    border-radius: 4px;
  `,
  round: css`
    border-radius: 8px;
  `,
};

const Select = styled.select`
  ${({ size }) => sizeCSS[size]}
  ${({ radius }) => radiusCSS[radius]}
  background-color: #DAEDFF;
  border: 1px solid #70a8db;
  cursor: pointer;
`;

const Option = styled.option`
  background-color: #daedff;
`;
