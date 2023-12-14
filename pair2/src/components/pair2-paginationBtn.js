import styled from "styled-components";
import Pair2Button from "./pair2-button";
import { flexCenter } from "../style/common";

const Pair2PaginationBtn = ({
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
      <Pair2Button
        variant="primary"
        size={sizeCSS}
        radius="circle"
        onClick={onMovePrePage}
      >
        이전
      </Pair2Button>
      {buttonList.map((el) => (
        <Pair2Button
          variant="primary"
          size={sizeCSS}
          radius="circle"
          onClick={onMoveTargetPage}
        >
          {el}
        </Pair2Button>
      ))}
      <Pair2Button
        variant="primary"
        size={sizeCSS}
        radius="circle"
        onClick={onMoveNextPage}
      >
        다음
      </Pair2Button>
    </PaginationBtn>
  );
};

export default Pair2PaginationBtn;

const PaginationBtn = styled.div`
  ${flexCenter}
`;
