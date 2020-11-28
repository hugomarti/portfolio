import React from "react";
import { Flex } from "@chakra-ui/core";

const CardLayout = ({ children }) => {
  return (
    <Flex
      flexDir="column"
      alignItems="flex-start"
      bg="#403D39"
      rounded="md"
      p="2rem"
      // w={{ xl: "20vw", lg: "35vw", md: "40vw", base: "92vw" }}
      w={{ xl: "30rem", lg: "30rem", md: "30rem", base: "82vw" }}
    >
      {children}
    </Flex>
  );
};

export default CardLayout;
