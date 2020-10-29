import { Box, Flex, Image, Text, Heading } from "@chakra-ui/core";
import React from "react";

import Hugo from "../assets/hugo.png";

const AboutCard = () => {
  return (
    <Box>
      <Heading size="4xl" color="#EB5E28" mb="1rem">
        .about
      </Heading>
      <Flex
        flexDir="column"
        alignItems="flex-start"
        rounded="md"
        p="2rem"
        bg="#403D39"
      >
        <Image h="150px" mb="1rem" rounded="30px" src={Hugo} />

        <Text color="#CCC5B9">
          With fifteen years in the audio engineering and music business field,
          I have this year decided to persue my passion of frontend web
          development with the goal of making it my full time career.
          <br />
          <br />
          I’m keen to connect with web development companies in Spain to explore
          the opportunity of entry level roles and internships to get a more
          indepth understanding of the industry.
        </Text>
      </Flex>
    </Box>
  );
};

export default AboutCard;
