import { useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";
import styled, { css } from "styled-components";
import { flexCenter } from "../styles/common.style";

const Pagination = ({ totalLength, pagesPerGroup, variant }) => {
  //useSearchParams => 쿼리스트링 추출 {page : 12 }
  const [searchParams, setSearchParams] = useSearchParams();

  const perPage = Number(searchParams.get("perPage")) || 20;
  const page = Number(searchParams.get("page")) || 1;
  const totalPage = totalLength / perPage;

  const [currentPage, setCurrentPage] = useState(page);

  //처음 페이지 이동 함수
  const onMoveStartPage = () => {
    setCurrentPage(1);
  };

  //마지막 페이지 이동 함수9
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

  //페이지 그룹을 바꿔주는 함수 => 현재 페이지가 바뀔 때마다 실행
  useEffect(() => {
    const newCurrentGroup = Math.ceil(currentPage / pagesPerGroup);
    searchParams.set("page", currentPage); // page라는 이름의 param에 current라는 value값.
    setSearchParams(searchParams);
  }, [currentPage]);  // currentpage(버튼을 누를 때 몇 페이지인지) 가 변할 때마다 page라는 이름의 param에 currentPage라는 value값을 넣어준다. 

  useEffect(() => {
    setCurrentPage(page);
  }, [page]);

  //해당 페이지로 이동하는 함수
  const onMoveTargetPage = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const Buttons = Array(pagesPerGroup) //5
    .fill()
    .map((_, idx) => {
      const currentGroup = Math.ceil(currentPage / 5);
      const pageNumber = (currentGroup - 1) * pagesPerGroup + idx + 1;
      // data가 없으면 얼리 리턴으로 버튼 생성 X
      if (totalLength > perPage * idx) return pageNumber;
    });

  return (
    <S.Wrapper >
      <S.Button onClick={onMoveStartPage}>≪</S.Button>
      <S.Button onClick={onMovePrevPage} >＜</S.Button>
      {/*버튼들 현재 그룹 => 해당 버튼들만 보여주기*/}
      {Buttons.map((pageNumber) => {
        if (!pageNumber) return;
        return (
          <S.Button variant={variant}
            onClick={() => {
              onMoveTargetPage(pageNumber);
            }}
            isFocus={pageNumber === page}
          >
            {pageNumber}
          </S.Button>
        );
      })}
      <S.Button onClick={onMoveNextPage} >＞</S.Button>
      <S.Button onClick={onMoveLastPage} >≫</S.Button>
    </S.Wrapper>
  );
};
export default Pagination;

const variantCSS={
    primary:css`
        background-color: ${({theme}) => theme.COLORS.primary[100]};
    `,
    secondary:css`
        background-color: ${({theme}) => theme.COLORS.primary[400]};
    `
}

const Wrapper = styled.div`
  width: 500px;
  height: 100px;
  ${flexCenter}

`;

const Button = styled.button`
    ${({isFocus, variant})=>isFocus && variantCSS[variant]}
  color: ${({ isFocus }) => (isFocus ? "white" : "black")};
  width: 30px;
  height: 30px;
  font-size: 15px;
  font-weight: 400;
  border-radius: 50%;
  cursor: pointer;
`;

const sizeCSS = {
  small:css`
      width: 20px;
      height: 20px;
      font-size: ${({theme}) => theme.FONT_SIZE.small};
  `,
  medium:css`
      width: 26px;
      height: 26px;
      font-size: ${({theme}) => theme.FONT_SIZE.medium};
  `,
  large:css`
      width: 30px;
      height: 30px;
      font-size: ${({theme}) => theme.FONT_SIZE.large};`
}


export const S = {
  Wrapper,
  Button,
};