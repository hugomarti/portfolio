import React from "react";
import { useRouteMatch } from "react-router-dom";
import { projectPages } from "../data/projects";

import BigImage from "../components/BigImage";
import ContentaLayout from "../components/ContentLayout";
import ProjectSection from "../components/ProjectSection";
import PageLayout from "../components/PageLayout";

const ProjectPage = () => {
  const match = useRouteMatch();

  const matchProject = projectPages[match.params.projectId];

  const { bgImage } = matchProject;

  return (
    <PageLayout>
      <BigImage image={bgImage} />
      <ContentaLayout back>
        <ProjectSection data={matchProject} />
      </ContentaLayout>
    </PageLayout>
  );
};

export default ProjectPage;
