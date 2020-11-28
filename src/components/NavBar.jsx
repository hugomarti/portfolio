import { Box, Flex, Heading } from "@chakra-ui/core";
import React from "react";
import { NavLink, useHistory } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";

const NavBar = ({ back }) => {
  const history = useHistory();
  return (
    <Flex justifyContent="space-between" zIndex="100000">
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
          fontSize="2.2rem"
          _hover={{ color: "#EB5E28" }}
          letterSpacing="0.1rem"
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
          <Heading
            fontSize="1.1rem"
            letterSpacing="0.1rem"
            _hover={{ color: "#EB5E28" }}
            mt={{ xl: "0rem", lg: "0rem", md: "0rem", base: "0.5rem" }}
          >
            .work
          </Heading>
        </NavLink>
        <NavLink
          to="/about"
          activeStyle={{ color: "#EB5E28" }}
          style={{ color: "#CCC5B9", fontWeight: "600" }}
        >
          <Heading
            fontSize="1.1rem"
            letterSpacing="0.1rem"
            _hover={{ color: "#EB5E28" }}
            mt={{ xl: "0rem", lg: "0rem", md: "0.2rem", base: "0.5rem" }}
          >
            .about
          </Heading>
        </NavLink>
        <NavLink
          to="/say-hello"
          style={{ color: "#CCC5B9", fontWeight: "600" }}
          activeStyle={{ color: "#EB5E28" }}
        >
          <Heading
            fontSize="1.1rem"
            letterSpacing="0.1rem"
            _hover={{ color: "#EB5E28" }}
            mt={{ xl: "0rem", lg: "0rem", md: "0.2rem", base: "0.5rem" }}
          >
            .sayHello
          </Heading>
        </NavLink>
      </Flex>
    </Flex>
  );
};

export default NavBar;
