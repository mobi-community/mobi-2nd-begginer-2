/** @jsxImportSource @emotion/react */
import { useState } from "react";
import { flexCenter } from "../../style/common";
import { css } from "@emotion/react";
import styled from "@emotion/styled";

const EmPagination = ({ totalLength, pagesPerGroup, color, size, shape }) => {
  const perPage = 10;

  const totalPage = totalLength / perPage;

  const [currentPage, setCurrentPage] = useState(1);

  //처음 페이지 이동 함수
  const onMoveStartPage = () => {
    setCurrentPage(1);
  };

  //마지막 페이지 이동 함수
  const onMoveLastPage = () => {
    setCurrentPage(totalPage);
  };

  //뒤로 가기 함수
  const onMoveNextPage = () => {
    if (currentPage !== totalPage) {
      setCurrentPage((prev) => prev + 1);
    }
  };

  //앞으로 가기 함수
  const onMovePrevPage = () => {
    if (currentPage !== 1) {
      setCurrentPage((prev) => prev - 1);
    }
  };

  //해당 페이지로 이동하는 함수
  const onMoveTargetPage = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const Buttons = Array(pagesPerGroup) //5
    .fill()
    .map((_, idx) => {
      const currentGroup = Math.ceil(currentPage / pagesPerGroup);
      const pageNumber = (currentGroup - 1) * pagesPerGroup + idx + 1;
      // data가 없으면 얼리 리턴으로 버튼 생성 X
      if (totalLength > perPage * idx) return pageNumber;
    });

  return (
    <S.Wrapper size={size}>
      <S.Button size={size} onClick={onMoveStartPage}>
        ≪
      </S.Button>
      <S.Button size={size} onClick={onMovePrevPage}>
        ＜
      </S.Button>
      {/*버튼들 현재 그룹 => 해당 버튼들만 보여주기*/}
      {Buttons.map((pageNumber) => {
        if (!pageNumber) return;
        return (
          <S.Button
            shape={shape}
            size={size}
            onClick={() => {
              onMoveTargetPage(pageNumber);
            }}
            isFocus={pageNumber === currentPage}
            color={color}
          >
            {pageNumber}
          </S.Button>
        );
      })}
      <S.Button size={size} onClick={onMoveNextPage}>
        ＞
      </S.Button>
      <S.Button size={size} onClick={onMoveLastPage}>
        ≫
      </S.Button>
    </S.Wrapper>
  );
};
export default EmPagination;

const sizeCSS = {
  small: css`
    width: 600px;
  `,
  medium: css`
    width: 500px;
  `,
  large: css`
    width: 400px;
  `,
};
const buttonSizeCSS = {
  small: css`
    width: 20px;
    height: 20px;
    font-size: 12px;
  `,
  medium: css`
    width: 30px;
    height: 30px;
    font-size: 15px;
  `,
  large: css`
    width: 40px;
    height: 40px;
    font-size: 25px;
  `,
};

const shapeCSS = {
  shape: css`
    border-radius: 8px;
  `,
  round: css`
    border-radius: 50%;
  `,
};

const Wrapper = styled.div`
  ${({ size }) => sizeCSS[size]}
  height: 100px;
  ${flexCenter}
`;

const Button = styled.button`
  ${({ size }) => buttonSizeCSS[size]};
  ${({ shape }) => shapeCSS[shape]}
  background-color: ${({ isFocus, color }) => (isFocus ? color : "white")};
  color: ${({ isFocus }) => (isFocus ? "white" : "black")};
  font-weight: 400;
  cursor: pointer;
`;

export const S = {
  Wrapper,
  Button,
};
