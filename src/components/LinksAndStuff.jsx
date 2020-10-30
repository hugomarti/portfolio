import React from "react";
import { Flex } from "@chakra-ui/core";

import NavBar from "./NavBar";
import Footer from "./Footer";

const LinkAndStuff = ({ children, footerText, back }) => {
  return (
    <Flex
      position="relative"
      w={{ xl: "80vw", lg: "80vw", md: "80vw", base: "100vw" }}
      h={{ xl: "100vh", lg: "100vh", md: "100vh" }}
      justifyContent="space-between"
      flexDir="column"
      p="1rem"
      bg="#252422"
    >
      <NavBar back={back} />
      <Flex
        alignItems="center"
        margin="auto"
        mt={{ xl: "0", lg: "0", md: "0", base: "2rem" }}
        h="100%"
      >
        {children}
      </Flex>
      <Footer footerText={footerText} />
    </Flex>
  );
};

export default LinkAndStuff;
