import React from "react";
import { Flex, Heading, Text } from "@chakra-ui/core";
import HomeBgImage from "../assets/home.png";

import BigImage from "../components/BigImage";
import PageLayout from "../components/PageLayout";
import ContentaLayout from "../components/ContentLayout";

const HomePage = () => {
  return (
    <PageLayout>
      <BigImage image={HomeBgImage} />
      <ContentaLayout
        footerText={
          <Text>
            I am a frontend web developer <br /> based in Barcelona.
          </Text>
        }
      >
        <Flex
          flexDir="column"
          justifyContent="center"
          h="60vh"
          m="auto"
          alignItems={{ xl: "start", lg: "start", md: "start", base: "center" }}
        >
          <Heading
            color="#EB5E28"
            fontSize={{ xl: "4rem", lg: "4rem", md: "4rem", base: "2rem" }}
            mb={{ xl: "1rem", lg: "1rem", md: "1rem", base: "0" }}
          >
            FRONTEND
          </Heading>
          <Heading
            zIndex="1"
            color="#CCC5B9"
            fontSize={{ xl: "4rem", lg: "4rem", md: "4rem", base: "2rem" }}
            lineHeight={{ xl: "5rem", lg: "5rem", md: "5rem", base: "3rem" }}
          >
            WEB DEVELOPER
          </Heading>
        </Flex>
      </ContentaLayout>
    </PageLayout>
  );
};

export default HomePage;
