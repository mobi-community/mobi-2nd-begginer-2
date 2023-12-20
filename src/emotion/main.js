/** @jsxImportSource @emotion/react */

import { css } from "@emotion/react";
import E_SignInForm from "./e_signIn_form";
import E_SignUpForm from "./e_signUp_form";
import styled from "@emotion/styled";

const E_MainPage = () => {
  return (
    <div
      css={css`
        width: 100vw;
        height: 100vh;
        overflow: hidden;
      `}
    >
      <Container>
        <E_SignInForm />
        <E_SignUpForm />
      </Container>
    </div>
  );
};
export default E_MainPage;

const Container = styled.div`
  width: 1424px;
  height: 898px;
  border-radius: 14px;
  overflow: hidden;
  margin: 4% 13%;
  box-shadow: -5px -5px 10px #fff, 5px 5px 10px #babebc;
  /* 안에 contents 정렬 */
  display: flex;
  align-items: center;
  justify-content: center;
`;
