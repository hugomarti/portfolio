import React from "react";

import SkillBg from "../assets/sayHello.png";
import BigImage from "../components/SiteComponents/BigImage";
import ContentaLayout from "../components/Layout/ContentLayout";
import PageLayout from "../components/Layout/PageLayout";
import SkillsSection from "../components/SectionContent/SkillsSection";

const Skils = () => {
  return (
    <PageLayout>
      <BigImage image={SkillBg} />
      <ContentaLayout footer="Kamalele">
        <SkillsSection />
      </ContentaLayout>
    </PageLayout>
  );
};

export default Skils;
