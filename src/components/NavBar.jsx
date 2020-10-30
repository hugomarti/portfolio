import { Box, Flex, Heading, Text } from "@chakra-ui/core";
import React from "react";
import { NavLink, useHistory } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";

const NavBar = ({ back }) => {
  const history = useHistory();
  return (
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
          _hover={{ color: "#EB5E28" }}
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
          <Text _hover={{ color: "#EB5E28" }}>.work</Text>
        </NavLink>
        <NavLink
          to="/about"
          activeStyle={{ color: "#EB5E28" }}
          style={{ color: "#CCC5B9", fontWeight: "600" }}
        >
          <Text _hover={{ color: "#EB5E28" }}>.about</Text>
        </NavLink>
        <NavLink
          to="/say-hello"
          style={{ color: "#CCC5B9", fontWeight: "600" }}
          activeStyle={{ color: "#EB5E28" }}
        >
          <Text _hover={{ color: "#EB5E28" }}>.sayHello</Text>
        </NavLink>
      </Flex>
    </Flex>
  );
};

export default NavBar;
