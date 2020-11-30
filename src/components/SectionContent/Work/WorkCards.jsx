import React from "react";
import { SimpleGrid, Box } from "@chakra-ui/core";

import WorkCard from "./WorkCard";
import CardHeading from "../../SiteComponents/CardHeading";

const WorkCards = ({ cards }) => {
  return (
    <Box>
      <CardHeading name=".work" />
      <SimpleGrid
        // maxWidth={{ xl: "30rem", lg: "30rem", md: "30rem" }}
        w={{ xl: "30rem", lg: "30rem", md: "30rem", base: "82vw" }}
        columns={{ xl: 2, lg: 2, md: 2, base: 1 }}
        spacing={{ xl: "0.5rem", lg: "0.5rem", md: "0.5rem", base: "1rem" }}
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
