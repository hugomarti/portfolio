import React from "react";
import { Box, Flex, Progress, Text } from "@chakra-ui/core";
import { motion } from "framer-motion";
import { skillsData } from "../../data/projects";

import CardLayout from "../Layout/CardLayout";
import CardHeading from "../SiteComponents/CardHeading";

const MotionBox = motion.custom(Box);

const SkillsSection = () => {
  return (
    <Box>
      <CardHeading name=".skills" />
      <CardLayout>
        <Flex flexDir="column" w="100%">
          {skillsData.map((skill) => (
            <MotionBox
              key={skill.id}
              animate={{ opacity: 1 }}
              initial={{ opacity: 0 }}
              transition={{ delay: skill.delay }}
              flexDir="column"
              my="0.5rem"
            >
              <Text color="#CCC5B9" fontSize="1.5rem">
                {skill.name}
              </Text>
              <Progress
                isAnimated
                hasStripe
                value={skill.value}
                size="sm"
                colorScheme="orange"
              />
            </MotionBox>
          ))}
        </Flex>
      </CardLayout>
    </Box>
  );
};

export default SkillsSection;
