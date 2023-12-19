import { Badge, Stack } from "@chakra-ui/react";

const ChBadge = () => {
  return (
    <Stack direction="row">
      <Badge>Default</Badge>
      <Badge colorScheme="green" width="150px" height="50px">
        Success
      </Badge>
      <Badge colorScheme="red" height="30px">
        Removed
      </Badge>
      <Badge colorScheme="purple">New</Badge>
    </Stack>
  );
};

export default ChBadge;
