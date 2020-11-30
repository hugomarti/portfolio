import React from "react";
import { Flex, Text } from "@chakra-ui/core";
import { NavLink } from "react-router-dom";

const NavGroupLinks = () => {
  return (
    <Flex flexDir="column" textAlign="right" pos="absolute" right="2rem">
      <NavLink
        to="/work"
        style={{ color: "#CCC5B9", fontWeight: "600" }}
        activeStyle={{ color: "#EB5E28" }}
      >
        <Text
          fontSize={{
            xl: "1.1rem",
            lg: "1.1rem",
            md: "1.5rem",
            base: "1.5rem",
          }}
          _hover={{ color: "#EB5E28" }}
          mt={{ xl: "0rem", lg: "0rem", md: "0rem", base: "1rem" }}
        >
          .work
        </Text>
      </NavLink>
      <NavLink
        to="/skills"
        style={{ color: "#CCC5B9", fontWeight: "600" }}
        activeStyle={{ color: "#EB5E28" }}
      >
        <Text
          fontSize={{
            xl: "1.1rem",
            lg: "1.1rem",
            md: "1.5rem",
            base: "1.5rem",
          }}
          _hover={{ color: "#EB5E28" }}
          mt={{ xl: "0rem", lg: "0rem", md: "0rem", base: "1rem" }}
        >
          .skills
        </Text>
      </NavLink>
      <NavLink
        to="/about"
        activeStyle={{ color: "#EB5E28" }}
        style={{ color: "#CCC5B9", fontWeight: "600" }}
      >
        <Text
          fontSize={{
            xl: "1.1rem",
            lg: "1.1rem",
            md: "1.5rem",
            base: "1.5rem",
          }}
          _hover={{ color: "#EB5E28" }}
          mt={{ xl: "0rem", lg: "0rem", md: "0rem", base: "1rem" }}
        >
          .about
        </Text>
      </NavLink>
      <NavLink
        to="/say-hello"
        style={{ color: "#CCC5B9", fontWeight: "600" }}
        activeStyle={{ color: "#EB5E28" }}
      >
        <Text
          fontSize={{
            xl: "1.1rem",
            lg: "1.1rem",
            md: "1.5rem",
            base: "1.5rem",
          }}
          _hover={{ color: "#EB5E28" }}
          mt={{ xl: "0rem", lg: "0rem", md: "0rem", base: "1rem" }}
        >
          .sayHello
        </Text>
      </NavLink>
    </Flex>
  );
};

export default NavGroupLinks;
