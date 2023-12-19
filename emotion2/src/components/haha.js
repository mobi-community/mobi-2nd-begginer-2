import { css } from "@emotion/react";

export const asfd = css`
  background-color: hotpink;
  font-size: 24px;
  border-radius: 4px;
  padding: 32px;
  text-align: center;
  &:hover {
    color: white;
  }
`;

const Haha = () => {
  return <div css={asfd}>asf</div>;
};

export default Haha;
