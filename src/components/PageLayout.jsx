import React from "react";
import { Flex } from "@chakra-ui/core";

const PageLayout = ({ children }) => {
  return (
    <Flex
      h={{ xl: "100vh", lg: "100vh", md: "100vh" }}
      flexDir={{ xl: "row", lg: "row", md: "row", base: "column" }}
      w={{ xl: "100vw", lg: "100vw", md: "100vw", base: "100vw" }}
      margin="auto"
      pos="relative"
    >
      {children}
    </Flex>
  );
};

export default PageLayout;
