import React from "react";
import {
  Button,
  Flex,
  FormLabel,
  Input,
  Textarea,
  Box,
  Heading,
} from "@chakra-ui/core";
import { FiSend } from "react-icons/fi";
import { FiDownloadCloud } from "react-icons/fi";
import CardLayout from "../CardLayout";

const FormSection = () => {
  return (
    <Box>
      <Heading letterSpacing="0.1rem" mb="1rem" size="2xl" color="#EB5E28">
        .sayHello
      </Heading>
      <CardLayout>
        <FormLabel color="#CCC5B9">Name:</FormLabel>
        <Input
          variant="flushed"
          // focusBorderColor="#EB5E28"
          color="#CCC5B9"
          style={{ borderColor: "#CCC5B9" }}
        />
        <FormLabel color="#CCC5B9" mt="1rem">
          Email:
        </FormLabel>
        <Input
          variant="flushed"
          // focusBorderColor="#EB5E28"
          color="#CCC5B9"
          style={{ borderColor: "#CCC5B9" }}
        />
        <FormLabel color="#CCC5B9" mt="1rem">
          Message:
        </FormLabel>
        <Textarea
          variant="flushed"
          // focusBorderColor="#EB5E28"
          color="#CCC5B9"
          style={{ borderColor: "#CCC5B9" }}
        />
        <Flex
          mt="1rem"
          flexDir={{ xl: "row", lg: "row", md: "row", base: "column" }}
          alignItems="center"
          w="100%"
        >
          <Button
            leftIcon={<FiSend />}
            mt="1rem"
            bg="#EB5E28"
            _hover={{ bg: "#CC5325" }}
            size="sm"
          >
            Send
          </Button>
          <Button
            ml={{ xl: "1rem", lg: "1rem", md: "1rem", base: "0" }}
            mt="1rem"
            bg="#CCC5B9"
            _hover={{ bg: "#A9A49C" }}
            leftIcon={<FiDownloadCloud />}
            size="sm"
          >
            Download CV
          </Button>
        </Flex>
      </CardLayout>
    </Box>
  );
};

export default FormSection;
