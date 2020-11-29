import React from "react";
import { Box, Button, Flex, Heading, Image, Link, Text } from "@chakra-ui/core";
import { TiArrowBackOutline } from "react-icons/ti";
import { useHistory } from "react-router-dom";

const ProjectSection = ({ data }) => {
  const history = useHistory();
  return (
    <Box>
      <Flex alignItems="center" mb="1rem">
        <Box
          as={TiArrowBackOutline}
          color="#CCC5B9"
          boxSize="2rem"
          mr="0.5rem"
          onClick={() => history.push("/work")}
          cursor="pointer"
          _hover={{ color: "#CC5325" }}
        />
        <Heading size="2xl" color="#EB5E28">
          {data.title}
        </Heading>
      </Flex>

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
            <Button
              disabled={data.disableButton}
              ml="1rem"
              mt="2rem"
              bg="#CCC5B9"
              _hover={{ bg: "#A9A49C" }}
            >
              Source Code
            </Button>
          </Link>
        </Flex>
      </Flex>
    </Box>
  );
};

export default ProjectSection;
