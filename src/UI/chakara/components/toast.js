import { Button, useToast } from "@chakra-ui/react";

const Chakra_Toast = () => {
  const toast = useToast();
  return (
    <Button
      padding={"14px"}
      borderRadius={"4px"}
      backgroundColor={"black"}
      color={"white"}
      onClick={() =>
        toast({
          title: "Thanks for Clicking :)",
          description: "",
          status: "success",
          duration: 9000,
          isClosable: true,
          icon: "🎁",
          containerStyle: {
            background: "hotPink",
            color: "white",
            width: "800px",
            height: "60px",
            padding: "20px",
            fontSize: "18px",
            borderRadius: "8px",
            fontWeight: "600",
          },
        })
      }
    >
      Click Me
    </Button>
  );
};

export default Chakra_Toast;
