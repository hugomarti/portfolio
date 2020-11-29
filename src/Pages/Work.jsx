import React from "react";

import WorkBgImage from "../assets/work.png";
import ContentaLayout from "../components/Layout/ContentLayout";
import BigImage from "../components/SiteComponents/BigImage";
import PageLayout from "../components/Layout/PageLayout";
import WorkCards from "../components/SectionContent/Work/WorkCards";

const Work = ({ cards }) => {
  return (
    <PageLayout>
      <BigImage image={WorkBgImage} />
      <ContentaLayout footer="Kamalele">
        <WorkCards cards={cards} />
      </ContentaLayout>
    </PageLayout>
  );
};

export default Work;
