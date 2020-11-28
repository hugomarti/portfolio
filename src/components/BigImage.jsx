import { Flex } from "@chakra-ui/core";
import { motion } from "framer-motion";
import React from "react";

const MotionBox = motion.custom(Flex);

const BigImage = ({ image }) => {
  return (
    <MotionBox
      initial={{ opacity: 0.5 }}
      animate={{ opacity: 1 }}
      transition={{
        opacity: { duration: 1 },
      }}
      zIndex="900000000"
      backgroundImage={`url(${image})`}
      bgSize="cover"
      bgPos="50% 50%"
      w={{ xl: "30%", lg: "30%", md: "30%", base: "100vw" }}
      h={{ xl: "100vh", lg: "100vh", md: "100vh", base: "8vh" }}
      shadow="lg"
      pos="sticky"
      top="0"
    />
  );
};

export default BigImage;
