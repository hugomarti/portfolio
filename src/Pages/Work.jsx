import React from "react";

import WorkBgImage from "../assets/work.png";
import ContentaLayout from "../components/ContentLayout";
import BigImage from "../components/BigImage";
import PageLayout from "../components/PageLayout";
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
