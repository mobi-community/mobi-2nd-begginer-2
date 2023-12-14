import React from "react";
import styled from "styled-components";
import { PopUpCircle, SubmitButton } from "./Button";

export const SignUpPage = () => {
  return (
    <Container>
      회원가입 페이지
      <PopUpCircle color={"purple"} size={"big"}>
        test
      </PopUpCircle>
      <SubmitButton>sign up</SubmitButton>
    </Container>
  );
};

const Container = styled.div``;
