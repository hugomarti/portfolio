import React from "react";

import AboutBgImage from "../assets/about.png";
import AboutCard from "../components/SectionContent/AboutCard";
import BigImage from "../components/BigImage";
import ContentaLayout from "../components/ContentLayout";
import PageLayout from "../components/PageLayout";

const About = () => {
  return (
    <PageLayout>
      <BigImage image={AboutBgImage} />
      <ContentaLayout>
        <AboutCard />
      </ContentaLayout>
    </PageLayout>
  );
};

export default About;
