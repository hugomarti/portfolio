import React from "react";

import BigImage from "../components/BigImage";
import FormSection from "../components/SectionContent/FormSection";
import ContentaLayout from "../components/ContentLayout";
import PageLayout from "../components/PageLayout";

const SayHello = () => {
  return (
    <PageLayout>
      <BigImage image="https://i.ibb.co/8YWtf4h/sayHello.png" />
      <ContentaLayout footer="Kamalele">
        <FormSection />
      </ContentaLayout>
    </PageLayout>
  );
};

export default SayHello;
