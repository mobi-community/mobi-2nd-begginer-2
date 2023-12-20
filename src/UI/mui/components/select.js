import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

const MUI_Select = () => {
  const [gender, setGender] = React.useState("");

  const onHandleChange = (event) => {
    setGender(event.target.value);
  };

  return (
    <Box sx={{ minWidth: 120 }} marginTop="50px">
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Gender</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={gender}
          label="Gender"
          onChange={onHandleChange}
        >
          <MenuItem value="Male">Male</MenuItem>
          <MenuItem value="Female">Female</MenuItem>
          <MenuItem value="Secret">Secret</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
};
export default MUI_Select;
