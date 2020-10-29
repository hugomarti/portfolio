import { Flex, Heading, Text } from "@chakra-ui/core";
import React from "react";
import HomePageImage from "../assets/home.png";
import BigImage from "../components/BigImage";
import LinkAndStuff from "../components/LinksAndStuff";
import PageLayout from "../components/PageLayout";

const HomePage = () => {
  return (
    <PageLayout>
      <BigImage image={HomePageImage} />
      <LinkAndStuff
        footerText={
          <Text>
            I am a frontend web developer <br /> based in Barcelona.
          </Text>
        }
      >
        <Flex ml="2rem" h="60vh" alignItems="center">
          <Heading color="#CCC5B9">
            <span style={{ color: "#EB5E28" }}>FRONTEND</span>
            <br />
            WEB DEVELOPER
          </Heading>
        </Flex>
      </LinkAndStuff>
    </PageLayout>
  );
};

export default HomePage;
