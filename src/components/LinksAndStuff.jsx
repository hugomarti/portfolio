import { useHistory } from "react-router-dom";
import { Flex, Heading, Box, Text, Link } from "@chakra-ui/core";
import { NavLink } from "react-router-dom";
import React from "react";
import { IoLogoLinkedin, IoIosArrowBack, IoLogoGithub } from "react-icons/io";

const LinkAndStuff = ({ children, footerText, back }) => {
  const history = useHistory();
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
      <Flex justifyContent="space-between">
        <Flex alignItems="start">
          {back && (
            <Box
              as={IoIosArrowBack}
              color="#EB5E28"
              boxSize="2rem"
              mr="0.5rem"
              onClick={() => history.push("/work")}
              cursor="pointer"
            />
          )}

          <Heading
            cursor="pointer"
            onClick={() => {
              history.push("/");
            }}
            color="#CCC5B9"
            size="lg"
          >
            .hugoMarti
          </Heading>
        </Flex>
        <Flex flexDir="column" textAlign="right">
          <NavLink
            to="/work"
            style={{ color: "#CCC5B9", fontWeight: "600" }}
            activeStyle={{ color: "#EB5E28" }}
          >
            .work
          </NavLink>
          <NavLink
            to="/about"
            activeStyle={{ color: "#EB5E28" }}
            style={{ color: "#CCC5B9", fontWeight: "600" }}
          >
            .about
          </NavLink>
          <NavLink
            to="/say-hello"
            style={{ color: "#CCC5B9", fontWeight: "600" }}
            activeStyle={{ color: "#EB5E28" }}
          >
            .sayHello
          </NavLink>
        </Flex>
      </Flex>
      <Box mt={{ xl: "0", lg: "0", md: "0", base: "2rem" }}>{children}</Box>
      <Flex mt="2rem" alignItems="center" justifyContent="space-between">
        <Flex>
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
          <Text fontWeight="600" color="#CCC5B9">
            {footerText}
          </Text>
        )}
      </Flex>
    </Flex>
  );
};

export default LinkAndStuff;
