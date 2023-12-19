import { useState } from "react";
import { ReactComponent as DownArrow } from "asset/downArrow.svg";
import { ReactComponent as UpArrow } from "asset/upArrow.svg";
import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { boxShadow } from "../../style/common";

const EmSelectBox = ({ data, size }) => {
  const [currentSelect, setCurrentSelect] = useState(data[0]);
  const [isOpen, setIsOpen] = useState(false);
  const onToggleSelect = () => {
    setIsOpen(!isOpen);
  };
  return (
    <S.SelectBoxWrapper size={size}>
      <S.InnerSelectBox onClick={onToggleSelect}>
        <div>{currentSelect}</div>
        {isOpen ? <UpArrow /> : <DownArrow />}
      </S.InnerSelectBox>
      <S.OptionListWrapper>
        {isOpen &&
          data?.map((option) => (
            <S.OptionWrapper
              onClick={() => {
                setCurrentSelect(option);
              }}
            >
              <button>{option}</button>
            </S.OptionWrapper>
          ))}
      </S.OptionListWrapper>
    </S.SelectBoxWrapper>
  );
};

export default EmSelectBox;

const sizeCSS = {
  small: css`
    width: 100px;
  `,

  medium: css`
    width: 150px;
  `,
  large: css`
    width: 400px;
  `,
};

const SelectBoxWrapper = styled.ul`
  ${({ size }) => sizeCSS[size]}
`;

const InnerSelectBox = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 15px;
  align-items: center;
  border-radius: 10px;
  background-color: white;
  height: 40px;
  width: 100%;
  font-size: 15px;
  ${boxShadow}
`;

const OptionListWrapper = styled.div`
  width: 100%;
  margin-top: 10px;
  background-color: white;
  border-radius: 10px;
  :last-child {
    border-bottom: none;
  }
  ${boxShadow}
`;

const OptionWrapper = styled.li`
  padding: 10px;
  margin: 0 10px;
  border-bottom: 3px solid ${({ theme }) => theme.COLORS.gray[200]};
  cursor: pointer;

  & > button {
    font-size: 15px;
  }
`;
export const S = {
  SelectBoxWrapper,
  InnerSelectBox,
  OptionListWrapper,
  OptionWrapper,
};
