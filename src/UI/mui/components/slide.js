import * as React from "react";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Slider from "@mui/material/Slider";
import VolumeDown from "@mui/icons-material/VolumeDown";
import VolumeUp from "@mui/icons-material/VolumeUp";

const ContinuousSlider = () => {
  const [volume, setVolume] = React.useState(30);

  const onHandleChange = (event, newVolume) => {
    setVolume(newVolume);
  };

  return (
    <Box sx={{ width: 400 }} marginTop="50px">
      <Stack spacing={2} direction="row" sx={{ mb: 1 }} alignItems="center">
        <VolumeDown />
        {volume > 70 ? (
          <>
            <Slider color="error" value={volume} onChange={onHandleChange} />
          </>
        ) : (
          <Slider value={volume} onChange={onHandleChange} />
        )}
        <VolumeUp />
      </Stack>
    </Box>
  );
};
export default ContinuousSlider;
