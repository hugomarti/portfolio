import React from "react";

import SayHelloImage from "../assets/sayHello.png";
import BigImage from "../components/BigImage";
import FormSection from "../components/FormSection";
import LinkAndStuff from "../components/LinksAndStuff";
import PageLayout from "../components/PageLayout";

const SayHello = () => {
  return (
    <PageLayout>
      <BigImage image={SayHelloImage} />
      <LinkAndStuff footer="Kamalele">
        <FormSection />
      </LinkAndStuff>
    </PageLayout>
  );
};

export default SayHello;
