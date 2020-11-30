import React from "react";
import { Heading } from "@chakra-ui/core";

const CardHeading = ({ name }) => {
  return (
    <Heading letterSpacing="0.1rem" fontSize="1.8rem" color="#EB5E28">
      {name}
    </Heading>
  );
};

export default CardHeading;
