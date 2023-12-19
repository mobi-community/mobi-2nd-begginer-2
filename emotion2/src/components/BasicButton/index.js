import { css } from "@emotion/react";

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

const EmBasicButton = () => {
  return (
    <>
      <div
        css={divStyle} // Use css prop instead of style prop
      >
        ㅁㄴㅇㄹㅁㄴㅇ
      </div>
    </>
  );
};

export default EmBasicButton;
