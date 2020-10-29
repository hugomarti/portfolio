import { Flex } from "@chakra-ui/core";
import React from "react";

const BigImage = ({ image }) => {
  return (
    <Flex
      backgroundImage={`url(${image})`}
      bgSize="cover"
      bgPos="50% 50%"
      w={{ xl: "30vw", lg: "30vw", md: "30vw", base: "100vw" }}
      h={{ xl: "100vh", lg: "100vh", md: "100vh", base: "20vh" }}
    />
  );
};

export default BigImage;
