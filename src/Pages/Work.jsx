import React from "react";
import { SimpleGrid, Box, Heading } from "@chakra-ui/core";

import WorkImage from "../assets/work.png";
import WorkCard from "../components/WorkCard";
import LinkAndStuff from "../components/LinksAndStuff";
import BigImage from "../components/BigImage";
import PageLayout from "../components/PageLayout";

const Work = ({ cards }) => {
  return (
    <PageLayout>
      <BigImage image={WorkImage} />
      <LinkAndStuff footer="Kamalele">
        <Box>
          <Heading size="4xl" color="#EB5E28" mb="1rem">
            .work
          </Heading>
          <SimpleGrid
            columns={{ xl: 2, lg: 2, md: 2, base: 1 }}
            spacing="0.5rem"
          >
            {cards.map((card) => (
              <WorkCard key={card.id} data={card} />
            ))}
          </SimpleGrid>
        </Box>
      </LinkAndStuff>
    </PageLayout>
  );
};

export default Work;
