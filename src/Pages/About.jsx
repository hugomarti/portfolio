import React from "react";

import AboutBgImage from "../assets/about.png";
import AboutCard from "../components/SectionContent/AboutCard";
import BigImage from "../components/SiteComponents/BigImage";
import ContentaLayout from "../components/Layout/ContentLayout";
import PageLayout from "../components/Layout/PageLayout";

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
