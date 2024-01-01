import styled from "styled-components";
import { flexCenter } from "../styles/common";
import DButton from "./D-button/DButton";

const DPaginationBtn = ({
  sizeCSS,
  buttonCount,
  currentPage,
  onMoveTargetPage,
  onMovePrePage,
  onMoveNextPage,
}) => {
  const buttonList = Array(buttonCount)
    .fill()
    .map((_, index) => {
      const currentGroup = Math.ceil(currentPage / buttonCount);
      const pageNumber = (currentGroup - 1) * buttonCount + index + 1;
      return pageNumber;
    });

  return (
    <PaginationBtn>
      <DButton
        variant="primary"
        size={sizeCSS}
        radius="circle"
        onClick={onMovePrePage}
      >
        이전
      </DButton>
      {buttonList.map((el) => (
        <DButton
          variant="primary"
          size={sizeCSS}
          radius="circle"
          onClick={onMoveTargetPage}
        >
          {el}
        </DButton>
      ))}
      <DButton
        variant="primary"
        size={sizeCSS}
        radius="circle"
        onClick={onMoveNextPage}
      >
        다음
      </DButton>
    </PaginationBtn>
  );
};

export default DPaginationBtn;

const PaginationBtn = styled.div`
  ${flexCenter}
`;
