import React from "react";

import SayHelloBg from "../assets/sayHello.png";
import BigImage from "../components/SiteComponents/BigImage";
import FormSection from "../components/SectionContent/Form/FormSection";
import ContentaLayout from "../components/Layout/ContentLayout";
import PageLayout from "../components/Layout/PageLayout";

const SayHello = () => {
  return (
    <PageLayout>
      <BigImage image={SayHelloBg} />
      <ContentaLayout footer="Kamalele">
        <FormSection />
      </ContentaLayout>
    </PageLayout>
  );
};

export default SayHello;
