import React from "react";
import AboutImage from "../assets/about.png";
import AboutCard from "../components/AboutCard";
import BigImage from "../components/BigImage";
import LinkAndStuff from "../components/LinksAndStuff";
import PageLayout from "../components/PageLayout";

const About = () => {
  return (
    <PageLayout>
      <BigImage image={AboutImage} />
      <LinkAndStuff>
        <AboutCard />
      </LinkAndStuff>
    </PageLayout>
  );
};

export default About;
