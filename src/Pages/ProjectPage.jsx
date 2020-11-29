import React from "react";
import { useRouteMatch } from "react-router-dom";
import { projectPages } from "../data/projects";

import BigImage from "../components/SiteComponents/BigImage";
import ContentaLayout from "../components/Layout/ContentLayout";
import ProjectSection from "../components/SectionContent/ProjectSection";
import PageLayout from "../components/Layout/PageLayout";

const ProjectPage = () => {
  const match = useRouteMatch();

  const matchProject = projectPages[match.params.projectId];

  const { bgImage } = matchProject;

  return (
    <PageLayout>
      <BigImage image={bgImage} />
      <ContentaLayout>
        <ProjectSection data={matchProject} />
      </ContentaLayout>
    </PageLayout>
  );
};

export default ProjectPage;
