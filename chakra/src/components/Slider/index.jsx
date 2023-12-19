import {
  Slider,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
} from "@chakra-ui/react";

const SliderBox = () => {
  return (
    <Slider
      m={3}
      w={"90%"}
      colorScheme="pink"
      aria-label="slider-ex-1"
      defaultValue={10}
    >
      <SliderTrack h={10} borderRadius={20}>
        <SliderFilledTrack />
      </SliderTrack>
      <SliderThumb h={10} w={10} />
    </Slider>
  );
};

export default SliderBox;
