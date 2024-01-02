import { Box, Image, Text } from "@chakra-ui/react";

const ChakraCard = ({ imageUrl, title, description }) => {
  return (
    <Box maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden">
      <Image src={imageUrl} alt="카드 이미지" />
      <Box p="6">
        <Text fontWeight="bold" fontSize="xl" mb="2">
          {title}
        </Text>
        <Text color="gray.600">{description}</Text>
      </Box>
    </Box>
  );
};

export default ChakraCard;
