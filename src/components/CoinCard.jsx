import React from "react";
import { Link } from "react-router-dom";
import { Text, Image, VStack, Heading } from "@chakra-ui/react";

const CoinCard = ({ id, name, img, symbol, price, currencySymbol = "₹" }) => {
  return (
    <Link to={`/coins/${id}`}>
      <VStack
        w="250px"
        shadow="lg"
        p="8"
        borderRadius="lg"
        transition="all 0.3s"
        m="4"
        align="center"
        _hover={{
          transform: "scale(1.1)",
        }}
      >
        <Image src={img} w="10" h="10" objectFit="contain" alt="Coin" />
        <Heading size="md" noOfLines={1}>
          {symbol}
        </Heading>
        <Text noOfLines={1}>{name}</Text>
        <Text noOfLines={1}>{price ? `${currencySymbol}${price}` : "NA"}</Text>
      </VStack>
    </Link>
  );
};

export default CoinCard;
