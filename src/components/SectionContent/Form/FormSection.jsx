import React, { useState } from "react";
import { Box, Flex, Heading, Text } from "@chakra-ui/core";
import CardLayout from "../../Layout/CardLayout";
import FormikForm from "./FormikForm";
import { IoMdCloudDone } from "react-icons/io";
import CardHeading from "../../SiteComponents/CardHeading";

const FormSection = () => {
  const [submited, setSubmited] = useState(false);
  return (
    <Box>
      <CardHeading name=".sayHello" />
      <CardLayout>
        {submited ? (
          <Flex
            alignItems="center"
            justifyContent="center"
            flexDir="column"
            w="100%"
            textAlign="center"
          >
            <Heading color="#EB5E28" size="lg">
              Thanks for your message!
            </Heading>
            <Text mt="1rem" color="#CCC5B9">
              I will get back to you as soon as I read it.
            </Text>
            <Box
              mt="1rem"
              as={IoMdCloudDone}
              color="#CCC5B9"
              w={"5rem"}
              h={"5rem"}
            />
          </Flex>
        ) : (
          <FormikForm submited={() => setSubmited(true)} />
        )}
      </CardLayout>
    </Box>
  );
};

export default FormSection;
