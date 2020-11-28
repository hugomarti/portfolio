import React from "react";
import { Box, Flex, Link, Text } from "@chakra-ui/core";
import { IoLogoLinkedin, IoLogoGithub } from "react-icons/io";

const Footer = ({ footerText }) => {
  return (
    <Flex
      mt="2rem"
      alignItems="center"
      justifyContent="space-between"
      zIndex="200000"
      flexDir={{ xl: "row", lg: "row", md: "row", base: "column" }}
    >
      <Flex
        order={{ xl: "1", lg: "1", md: "1", base: "2" }}
        mt={{ xl: "0", lg: "0", md: "0", base: "1rem" }}
      >
        <Link
          href="https://www.linkedin.com/in/hugo-marti-5522461b0/"
          isExternal
        >
          <Box
            color="#CCC5B9"
            _hover={{ color: "#EB5E28" }}
            boxSize="2.5rem"
            as={IoLogoLinkedin}
          />
        </Link>
        <Link href="https://github.com/hugomarti" isExternal ml="1rem">
          <Box
            color="#CCC5B9"
            _hover={{ color: "#EB5E28" }}
            boxSize="2.5rem"
            as={IoLogoGithub}
          />
        </Link>
      </Flex>

      {footerText && (
        <Text
          fontWeight="600"
          color="#CCC5B9"
          textAlign={{ xl: "left", lg: "left", md: "left", base: "center" }}
          fontSize="1.2rem"
        >
          {footerText}
        </Text>
      )}
    </Flex>
  );
};

export default Footer;
