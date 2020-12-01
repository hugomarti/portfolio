import { Flex, Heading, useMediaQuery } from "@chakra-ui/core";
import React from "react";
import { useHistory } from "react-router-dom";
import { NavbarMobile } from "./NavbarMobile";
import NavGroupLinks from "./NavGroupLinks";

const NavBar = () => {
  const history = useHistory();
  const [isLarger] = useMediaQuery("(min-width: 1030px)");
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
            xl: "1.8rem",
            lg: "1.8rem",
            md: "1.8rem",
            base: "1.5rem",
          }}
          _hover={{ color: "#EB5E28" }}
        >
          .hugoMarti
        </Heading>
      </Flex>
      {isLarger ? <NavGroupLinks /> : <NavbarMobile />}
    </Flex>
  );
};

export default NavBar;
