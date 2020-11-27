import {
  Button,
  Flex,
  FormLabel,
  Input,
  Textarea,
  Box,
  Heading,
} from "@chakra-ui/core";
import React from "react";

const FormSection = () => {
  return (
    <Box>
      <Heading mb="1rem" size="2xl" color="#EB5E28">
        .sayHello
      </Heading>
      <Flex
        flexDir="column"
        alignItems="flex-start"
        bg="#403D39"
        rounded="md"
        p="2rem"
        // maxWidth={{ xl: "30rem", lg: "30rem", md: "30rem" }}
        w="50vw"
      >
        <FormLabel color="#CCC5B9">Name:</FormLabel>
        <Input
          focusBorderColor="#EB5E28"
          color="#CCC5B9"
          style={{ borderColor: "#CCC5B9" }}
        />
        <FormLabel color="#CCC5B9" mt="1rem">
          Email:
        </FormLabel>
        <Input
          focusBorderColor="#EB5E28"
          color="#CCC5B9"
          style={{ borderColor: "#CCC5B9" }}
        />
        <FormLabel color="#CCC5B9" mt="1rem">
          Message:
        </FormLabel>
        <Textarea
          focusBorderColor="#EB5E28"
          color="#CCC5B9"
          style={{ borderColor: "#CCC5B9" }}
        />
        <Flex>
          <Button mt="1rem" bg="#EB5E28" _hover={{ bg: "#CC5325" }}>
            Send
          </Button>
          <Button ml="1rem" mt="1rem" bg="#CCC5B9" _hover={{ bg: "#A9A49C" }}>
            CV
          </Button>
        </Flex>
      </Flex>
    </Box>
  );
};

export default FormSection;
