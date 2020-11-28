import React from "react";
import { SimpleGrid, Box, Heading } from "@chakra-ui/core";

import WorkCard from "./WorkCard";

const WorkCards = ({ cards }) => {
  return (
    <Box>
      <Heading letterSpacing="0.1rem" size="2xl" color="#EB5E28" mb="1rem">
        .work
      </Heading>
      <SimpleGrid
        // maxWidth={{ xl: "30rem", lg: "30rem", md: "30rem" }}
        w={{ xl: "30rem", lg: "30rem", md: "30rem", base: "82vw" }}
        columns={{ xl: 2, lg: 2, md: 2, base: 1 }}
        spacing="0.5rem"
        shadow="lg"
      >
        {cards.map((card) => (
          <WorkCard key={card.id} data={card} />
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default WorkCards;
