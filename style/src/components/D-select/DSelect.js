import styled, { css } from "styled-components";

const DSelect = ({ options, radius, size }) => {
  return (
    <Select radius={radius} size={size}>
      {options.map((el) => (
        <Option value={el.value}>{el.label}</Option>
      ))}
    </Select>
  );
};
export default DSelect;

const sizeCSS = {
  small: css`
    width: 68px;
    height: 24px;
    font-size: ${({ theme }) => theme.FONT_SIZE.small};
  `,
  large: css`
    width: 108px;
    height: 44px;
    font-size: ${({ theme }) => theme.FONT_SIZE.large};
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
  background-color: ${({ theme }) => theme.COLORS.primary["light"]};
  border: 1px solid ${({ theme }) => theme.COLORS.primary["main"]};
  cursor: pointer;
`;

const Option = styled.option`
  background-color: ${({ theme }) => theme.COLORS.primary["light"]};
`;
