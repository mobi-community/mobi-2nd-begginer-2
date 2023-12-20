import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

const MUI_TextFields = () => {
  return (
    <>
      <Box
        component="form"
        sx={{
          "& > :not(style)": { m: 1, width: "25ch" },
        }}
        noValidate
        autoComplete="off"
        display={"flex"}
        justifyContent={"center"}
        flexDirection={"column"}
      >
        <TextField id="id" label="ID" variant="standard" />
        <TextField id="PASSWORD" label="PASSWORD" variant="standard" />
      </Box>
      <Button backgroundColor="primary" size="medium" variant="contained">
        Login
      </Button>
    </>
  );
};
export default MUI_TextFields;
