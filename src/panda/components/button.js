import { styled } from "../styled-system/jsx";
import { Circle, CircleProps } from "../styled-system/jsx";

const P_PopUpButton = () => {
  return <Button></Button>;
};
export default P_PopUpButton;

P_PopUpButton.propTypes = {
  circleSize: CircleProps["size"],
};

const Button = styled("button", {
  basic: {
    backgroundColor: "#fff",
    border: "1px solid #000",
  },
  sm: {
    backgroundColor: "#fff",
    border: "1px solid #000",
  },
  lg: {
    backgroundColor: "#fff",
    border: "1px solid #000",
  },
});
