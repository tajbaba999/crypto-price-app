import { Button, HStack } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <HStack
      p={"4"}
      shadow={"base"}
      bgColor={"blackAlpha.900"}
      spacing={"10"}
      flexDirection={"row-reverse"}
    >
      <Button
        marginEnd={"10"}
        variant={"unstyled"}
        fontSize={"23"}
        color={"white"}
      >
        <Link to="/">Home</Link>
      </Button>
      <Button variant={"unstyled"} fontSize={"23"} color={"white"}>
        <Link to="/exchange">Exchanges</Link>
      </Button>
      <Button variant={"unstyled"} fontSize={"23"} color={"white"}>
        <Link to="/coins">Coins</Link>
      </Button>
    </HStack>
  );
};

export default Header;
