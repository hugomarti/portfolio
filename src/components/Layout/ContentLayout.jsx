import React from "react";
import { Box, Flex, Image } from "@chakra-ui/core";
import { motion } from "framer-motion";
import HomeSvgCristal from "../../assets/home-cristal.svg";

import NavBar from "../SiteComponents/NavBar";
import Footer from "../SiteComponents/Footer";

const MotionBox = motion.custom(Flex);
const MotionBox2 = motion.custom(Box);

const ContentaLayout = ({ children, footerText, back }) => {
  return (
    <Flex
      position="relative"
      w={{ xl: "70%", lg: "70%", md: "70%", base: "100vw" }}
      h="100%"
      justifyContent="space-between"
      flexDir="column"
      py="1rem"
      px="2rem"
      bg="#252422"
      pos="relative"
      overflow="hidden"
    >
      <NavBar back={back} />
      <MotionBox
        initial={{ opacity: 0, scale: 1.1 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          ease: "easeOut",
          scale: { duration: 0.8 },
          opacity: { duration: 2 },
        }}
        justifyContent="center"
        alignItems="center"
        margin="auto"
        mt={{ xl: "0", lg: "0", md: "0", base: "2rem" }}
        h="100%"
        w="100%"
        // zIndex="1"
      >
        {children}
      </MotionBox>
      <MotionBox2
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          duration: 3,
          delay: 0.5,
        }}
        pos="absolute"
        top="0"
        bottom="0"
        right="0"
        left="0"
      >
        <Image h="100vh" src={HomeSvgCristal} />
      </MotionBox2>
      <Footer footerText={footerText} />
    </Flex>
  );
};

export default ContentaLayout;
