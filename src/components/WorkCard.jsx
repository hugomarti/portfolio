import React from "react";
import { Flex, IconButton, Image, Text } from "@chakra-ui/core";
import { useHistory } from "react-router-dom";
import { IoIosMore } from "react-icons/io";

const WorkCard = ({ data: { logo, title, route } }) => {
  const history = useHistory();
  return (
    <Flex h="334px" p="1rem" flexDir="column" rounded="md" bg="#403D39">
      <Flex justifyContent="center" alignItems="center" h="90%">
        <Image my="1rem" src={logo} />
      </Flex>
      <Flex h="10%" justifyContent="space-between" alignItems="flex-end">
        <Text color="#CCC5B9" mt="0.5rem" fontWeight="600">
          {title}
        </Text>
        <IconButton
          bg="#EB5E28"
          _hover={{ bg: "#CC5325" }}
          color="#CCC5B9"
          icon={<IoIosMore size="2rem" />}
          onClick={() => history.push(route)}
        />
      </Flex>
    </Flex>
  );
};

export default WorkCard;
