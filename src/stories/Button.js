import React from "react";
import styled from "styled-components";

/**
 *     color: ${({ theme }) => theme.COLORS.primary["navy"]};
 *     border: 1px solid ${({ theme }) => theme.COLORS.primary["navy"]};
 *   font-weight: ${({ theme }) => theme.FONT_WEIGHT["regular"]};
 *   font-size: ${({ theme }) => theme.FONT_SIZE["extraSmall"]};

 */
const CircleButton = styled.button`
  background: ${(props) => (props.color || "purple" ? "#5252f7" : "#EBECF0")};
  width: ${(props) => (props.size === "big" ? "80px" : "48px")};
  height: ${(props) => (props.size === "big" ? "80px" : "48px")};
  border-radius: 50%;
`;
const SquareButton = styled.button`
  background: "#EBECF0";
  width: 280px;
  height: 84px;
  border-radius: 30px;
`;

export const PopUpCircle = ({ color, size, text }) => {
  <CircleButton color={color} size={size}>
    {text}
  </CircleButton>;
};

export const SubmitButton = ({ text }) => {
  <SquareButton>{text}</SquareButton>;
};
