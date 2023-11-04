import React from "react";
import { Box, Image, Text } from "@chakra-ui/react";
import btcsrc from "../assets/btc.png";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <Box bgColor={"blackAlpha.900"} w={"full"} h={"85vh"} position="relative">
      <motion.div
        style={{
          height: "80vh",
        }}
        animate={{
          translateY: "20px",
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          repeatType: "loop",
        }}
      >
        <Image
          w={"full"}
          h={"full"}
          objectFit={"contain"}
          src={btcsrc}
          filter={"grayscale(1)"}
        />
      </motion.div>
      <Text
        fontSize={"6xl"}
        textAlign={"center"}
        fontWeight={"bold"}
        color={"whiteAlpha.700"}
        position="absolute"
        bottom="0" // Adjust this value as needed to position the text at the bottom
        left="50%"
        transform="translateX(-50%)"
        mt="2" // Add margin-top to create a gap between the text and the image
      >
        CoinVista
      </Text>
    </Box>
  );
};

export default Home;
