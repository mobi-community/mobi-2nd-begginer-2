import { Button } from "@mui/material";

const MuiButton = ({ children, color, onClick }) => {
  return (
    <Button variant="contained" color={color} onClick={onClick}>
      {children}
    </Button>
  );
};

export default MuiButton;
