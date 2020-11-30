import React from "react";
import { chakra, Flex, Text } from "@chakra-ui/core";
import { useHistory } from "react-router-dom";
import { motion } from "framer-motion";

const MotionBox = motion.custom(Flex);
const MotionBox2 = chakra(motion.img);

const WorkCard = ({ data: { logo, title, route } }) => {
  const history = useHistory();
  return (
    <Flex
      cursor="pointer"
      h="275px"
      p="1rem"
      flexDir="column"
      rounded="md"
      bg="#403D39"
      _hover={{ bg: "#53504b" }}
      onClick={() => history.push(route)}
    >
      <MotionBox
        border="1px"
        rounded="md"
        borderColor="#CCC5B9"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          opacity: { duration: 1 },
          delay: 0.5,
        }}
        justifyContent="center"
        alignItems="center"
        h="90%"
      >
        <MotionBox2
          my="1rem"
          src={logo}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        />
      </MotionBox>
      <Flex h="10%">
        <Text
          color="#CCC5B9"
          textAlign="center"
          mt="0.5rem"
          fontWeight="600"
          w="100%"
        >
          {title}
        </Text>
      </Flex>
    </Flex>
  );
};

export default WorkCard;
