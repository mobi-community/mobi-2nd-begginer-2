import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Input,
} from "@chakra-ui/react";
import { useState } from "react";
import { flexCenter } from "../../../styles/common.style";
import styled from "styled-components";

const ErrorMessage = () => {
  const [input, setInput] = useState("");

  const handleInputChange = (e) => setInput(e.target.value);

  const isError = input === "";

  return (
    <Wrapper>
      <FormControl
        width={"28%"}
        isInvalid={isError}
        alignItems={"center"}
        margin={"20px"}
      >
        <FormLabel>Email</FormLabel>
        <Input
          type="email"
          value={input}
          onChange={handleInputChange}
          padding="10px"
          borderRadius="4px"
          margin="6px 0"
        />
        {!isError ? (
          <FormHelperText>
            Enter the email you'd like to receive the newsletter on.
          </FormHelperText>
        ) : (
          <FormErrorMessage color="red">Email is required.</FormErrorMessage>
        )}
      </FormControl>
    </Wrapper>
  );
};
export default ErrorMessage;

const Wrapper = styled.div`
  width: 100%;
  ${flexCenter}
`;
