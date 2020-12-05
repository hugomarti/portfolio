import React from "react";
import { Flex, Text } from "@chakra-ui/core";
import HomeBgImage from "../assets/home.png";

import BigImage from "../components/SiteComponents/BigImage";
import PageLayout from "../components/Layout/PageLayout";
import ContentaLayout from "../components/Layout/ContentLayout";

const HomePage = () => {
  return (
    <PageLayout>
      <BigImage image={HomeBgImage} />
      <ContentaLayout>
        <Flex
          flexDir="column"
          justifyContent="center"
          h="60vh"
          m="auto"
          alignItems={{ xl: "start", lg: "start", md: "start", base: "center" }}
        >
          <Text
            fontWeight="600"
            color="#CCC5B9"
            textAlign="left"
            fontSize="2.2rem"
          >
            I'm a
            <br />
            <span style={{ color: "#EB5E28" }}>Frontend</span> Web Developer
            <br /> based in Barcelona.
          </Text>
          {/*
          <Heading
            color="#EB5E28"
            fontSize={{
              xl: "3.5rem",
              lg: "3.5rem",
              md: "3.5rem",
              base: "2rem",
            }}
            mb={{ xl: "1rem", lg: "1rem", md: "1rem", base: "0" }}
          >
            FRONTEND
          </Heading>
          <Heading
            zIndex="1"
            color="#CCC5B9"
            fontSize={{
              xl: "3.5rem",
              lg: "3.5rem",
              md: "3.5rem",
              base: "2rem",
            }}
            lineHeight={{ xl: "5rem", lg: "5rem", md: "5rem", base: "3rem" }}
          >
            WEB DEVELOPER
          </Heading>
          */}
        </Flex>
      </ContentaLayout>
    </PageLayout>
  );
};

export default HomePage;
