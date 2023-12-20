import { Button, Tooltip } from "@chakra-ui/react";

const Chakra_Tooltip = () => {
  return (
    <Tooltip
      hasArrow
      label="Ann Kimi Amy"
      placement="top"
      background="red"
      color="white"
      padding="10px"
    >
      <Button
        margin="10px 0"
        backgroundColor="black"
        color="white"
        padding="16px"
        borderRadius="4px"
        fontWeight="800"
      >
        AKA stands for?
      </Button>
    </Tooltip>
  );
};

export default Chakra_Tooltip;
