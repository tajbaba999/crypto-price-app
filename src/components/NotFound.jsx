import React from "react";
import { Box, Text, Spacer } from "@chakra-ui/react";

const NotFound = () => {
  return (
    <Box
      w="full"
      h="md"
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
    >
      <Box
        display={"inline-flex"}
        flexDirection={"column"}
        alignItems={"center"}
      >
        <Text fontSize={"6xl"}>404 - Not Found</Text>
        <Spacer h="2" />
        <Text fontSize={"4xl"}>
          The page you are looking for does not exist.
        </Text>
      </Box>
    </Box>
  );
};

export default NotFound;
