/** @jsxImportSource @emotion/react */
import EmBasicButton from "../components/BasicButton";
import EmBasicInput from "../components/BasicInput";
import EmPagination from "../components/Pagination";
import EmCheckBox from "../components/CheckBox";
import theme from "../style/theme";
import EmTab from "components/Tab";
import EmSelectBox from "components/SelectBox";
import { css } from "@emotion/react";

const data = ["option1", "option2", "option3", "option4"];

export const navbarList = [
  {
    title: "메일",
    id: 1,
  },
  {
    title: "카페",
    id: 2,
  },
  {
    title: "블로그",
    id: 3,
  },
  {
    title: "쇼핑",
    id: 4,
  },
  {
    title: "뉴스",
    id: 5,
  },
  {
    title: "증권",
    id: 6,
  },
];

const divStyle = css`
  background-color: hotpink;
  font-size: 24px;
  border-radius: 4px;
  padding: 32px;
  text-align: center;
  &:hover {
    color: white;
  }
`;

const EmotionPage = () => {
  return (
    <>
      <div css={divStyle}>Hover to change color.</div>
      <EmBasicButton
        variant={"primary"}
        shape={"default"}
        size={"medium"}
        fontSize={"medium"}
        border={false}
      >
        로그인
      </EmBasicButton>
      <EmBasicButton
        variant={"secondary"}
        shape={"round"}
        size={"large"}
        fontSize={"large"}
        border={false}
      >
        회원가입
      </EmBasicButton>
      <EmBasicInput
        variant="primary"
        label={"아이디"}
        placeholder={"아이디를 입력해주세요"}
        size={"small"}
      />
      <EmBasicInput
        variant="secondary"
        label={"비밀번호"}
        placeholder={"비밀번호를 입력해주세요"}
        size={"large"}
      />
      <EmPagination
        totalLength={100}
        pagesPerGroup={10}
        size={"small"}
        color={theme.COLORS.warn}
        shape={"round"}
      />
      <EmPagination
        totalLength={100}
        pagesPerGroup={5}
        size={"large"}
        color={theme.COLORS.primary.mint}
        shape={"shape"}
      />
      <EmCheckBox
        type="checkbox"
        label={"로그인 상태 유지"}
        id={"small"}
        size={"small"}
      />
      <EmCheckBox
        type="checkbox"
        label={"로그인 상태 유지"}
        id={"medium"}
        size={"medium"}
      />
      <EmCheckBox
        type="checkbox"
        label={"로그인 상태 유지"}
        id={"large"}
        size={"large"}
      />
      <EmTab data={navbarList} variant={"primary"} />
      <EmTab data={navbarList} variant={"secondary"} />
      <EmSelectBox size={"small"} data={data} />
      <EmSelectBox size={"medium"} data={data} />
      <EmSelectBox size={"large"} data={data} />
    </>
  );
};

export default EmotionPage;
