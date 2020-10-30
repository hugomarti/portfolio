import React from "react";
import { Box, Button, Flex, Heading, Image, Link, Text } from "@chakra-ui/core";

const ProjectSection = ({ data }) => {
  return (
    <Box>
      <Heading mb="1rem" size="2xl" color="#EB5E28">
        {data.title}
      </Heading>

      <Flex
        flexDir="column"
        alignItems="flex-start"
        rounded="md"
        p="1rem"
        bg="#403D39"
        maxWidth={{ xl: "30rem", lg: "30rem", md: "30rem" }}
        h="34rem"
      >
        <Flex flexDir="column">
          <Image src={data.logo} />
          <Box my="1rem">
            <Heading color="#EB5E28" size="md">
              React
            </Heading>
            <Heading size="md">{data.type}</Heading>
          </Box>
          <Text color="#CCC5B9">{data.description}</Text>
        </Flex>
        <Flex>
          <Link href={data.link} isExternal>
            <Button mt="2rem" bg="#EB5E28" _hover={{ bg: "#CC5325" }}>
              View Site
            </Button>
          </Link>
          <Link href={data.sourceCode} isExternal>
            <Button ml="1rem" mt="2rem" bg="#CCC5B9" _hover={{ bg: "#A9A49C" }}>
              Source Code
            </Button>
          </Link>
        </Flex>
      </Flex>
    </Box>
  );
};

export default ProjectSection;
