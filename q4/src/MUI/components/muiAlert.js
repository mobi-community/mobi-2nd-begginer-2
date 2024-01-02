import { Alert } from "@mui/material";

const MuiAlert = ({ severity, children }) => {
  return <Alert severity={severity}>{children}</Alert>;
};

export default MuiAlert;
