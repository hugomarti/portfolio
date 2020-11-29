import { Flex, Heading, useMediaQuery } from "@chakra-ui/core";
import React from "react";
import { useHistory } from "react-router-dom";
import { NavbarMobile } from "./NavbarMobile";
import NavGroupLinks from "./NavGroupLinks";

const NavBar = () => {
  const history = useHistory();
  const [isLargerThan767] = useMediaQuery("(min-width: 767px)");
  return (
    <Flex justifyContent="space-between" zIndex="1">
      <Flex alignItems="start">
        <Heading
          cursor="pointer"
          onClick={() => {
            history.push("/");
          }}
          color="#CCC5B9"
          fontSize={{
            xl: "2.2rem",
            lg: "2.2rem",
            md: "2.2rem",
            base: "1.5rem",
          }}
          _hover={{ color: "#EB5E28" }}
        >
          .hugoMarti
        </Heading>
      </Flex>
      {isLargerThan767 ? <NavGroupLinks /> : <NavbarMobile />}
    </Flex>
  );
};

export default NavBar;
