import React from "react";
import { Box, Flex, Link, Text } from "@chakra-ui/core";
import { IoLogoLinkedin, IoLogoGithub } from "react-icons/io";
import { FiMail } from "react-icons/fi";
import { motion } from "framer-motion";

const MotionBox = motion.custom(Box);

const Footer = ({ footerText }) => {
  return (
    <Flex
      mt="2rem"
      alignItems="flex-end"
      justifyContent={footerText ? "space-between" : "flex-end"}
      zIndex="10"
      flexDir={{ xl: "row", lg: "row", md: "row", base: "column" }}
    >
      <Flex
        order={{ xl: "1", lg: "1", md: "1", base: "2" }}
        mt={{ xl: "0", lg: "0", md: "0", base: "1rem" }}
      >
        <Link
          href="https://www.linkedin.com/in/hugo-marti-5522461b0/"
          isExternal
        >
          <Box
            color="#CCC5B9"
            _hover={{ color: "#EB5E28" }}
            boxSize="1.7rem"
            as={IoLogoLinkedin}
          />
        </Link>
        <Link href="https://github.com/hugomarti" isExternal ml="1rem">
          <Box
            color="#CCC5B9"
            _hover={{ color: "#EB5E28" }}
            boxSize="1.7rem"
            as={IoLogoGithub}
          />
        </Link>
        <Link href="mailto: hgmarti@gmail.com" isExternal ml="1rem">
          <Box
            color="#CCC5B9"
            _hover={{ color: "#EB5E28" }}
            boxSize="1.7rem"
            as={FiMail}
          />
        </Link>
      </Flex>

      {footerText && (
        <MotionBox
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            ease: "easeOut",
            duration: 1,
            delay: 1,
          }}
        >
          <Text
            fontWeight="600"
            color="#CCC5B9"
            textAlign={{ xl: "left", lg: "left", md: "left", base: "center" }}
            fontSize="1.2rem"
          >
            I am a frontend web developer <br /> based in Barcelona.
          </Text>
        </MotionBox>
      )}
    </Flex>
  );
};

export default Footer;
