import React, { useState } from "react";
import { Box, Image, Text, Flex, Button, Link } from "@chakra-ui/core";
import { MdLanguage } from "react-icons/md";

import Hugo from "../../assets/hugo.png";
import CardLayout from "../Layout/CardLayout";
import { FiDownloadCloud } from "react-icons/fi";
import CardHeading from "../SiteComponents/CardHeading";

const AboutCard = () => {
  const [spanish, setSpanish] = useState(false);

  return (
    <Box zIndex="1">
      <CardHeading name=".about" />
      <CardLayout>
        <Flex
          flexDir={{ xl: "row", lg: "row", md: "row", base: "column" }}
          color="#EB5E28"
          alignItems={{ xl: "", lg: "", md: "", base: "center" }}
          justifyContent="space-between"
          w="100%"
          mb="1rem"
        >
          <Image
            mb={{ xl: "", lg: "", md: "", base: "1rem" }}
            shadow="lg"
            h="110px"
            rounded="10px"
            src={Hugo}
          />
          <Flex flexDir="column">
            <Button
              leftIcon={<MdLanguage />}
              colorScheme="orange"
              variant="ghost"
              size={{ xl: "md", lg: "md", md: "md", base: "md" }}
              onClick={() => setSpanish(!spanish)}
            >
              {spanish ? "See in English" : "Ver en Español"}
            </Button>
            <Link
              href="https://drive.google.com/file/d/17kshDWSkSurEFlnHouD9UhOLx3j9JbHU/view?usp=sharing"
              isExternal
            >
              <Button
                mb={{ xl: "", lg: "", md: "", base: "1rem" }}
                leftIcon={<FiDownloadCloud />}
                color="#CCC5B9"
                colorScheme="orange"
                variant="ghost"
                size="xs"
                mt="0.5rem"
              >
                Download CV
              </Button>
            </Link>
          </Flex>
        </Flex>
        <Box>
          {spanish ? (
            <Text color="#CCC5B9">
              Me llamo Hugo Martí y soy de Barcelona. Después de trabajar en la
              industria musical durante 15 años, en enero de 2020 comencé a
              estudiar desarrollo web por mi cuenta. El propósito era investigar
              cómo hacer un proyecto personal relacionado con la música llamado
              Stem Hatch, puedes encontrar el progreso del proyecto en mi web,
              en la sección de trabajo.
              <br />
              <br />
              Después de algunas semanas investigando como desarrollar el
              proyecto y estudiar los conceptos básicos, decidí perseguir mi
              nueva pasión por la programación para convertirla en mi nueva
              carrera profesional. Estoy interesado en conectarme con empresas
              de desarrollo web en España para explorar la oportunidad de seguir
              ampliando mis conocimientos y así introducirme de lleno en esta
              industria que tanto me gusta.
            </Text>
          ) : (
            <Text color="#CCC5B9">
              My name is Hugo Marti and I am from Barcelona. After working in
              the music industry for 15 years, in January 2020 I started
              studying frontend web development by myself. The purpose was to
              investigate how to make a personal project music-related named
              Stem Hatch which you can find in my work section. After a few
              weeks of doing some research and studying the basics, I decided to
              pursue my new passion for coding to make it my full-time career.
              <br />
              <br />
              I’m keen to connect with web development companies in Spain to
              explore the opportunity of entry-level roles and internships to
              get a more in-depth understanding of the industry.
            </Text>
          )}
        </Box>
      </CardLayout>
    </Box>
  );
};

export default AboutCard;
