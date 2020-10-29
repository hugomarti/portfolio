import React from "react";
import { useRouteMatch } from "react-router-dom";
import { projectPages } from "../data/projects";

import BigImage from "../components/BigImage";
import LinkAndStuff from "../components/LinksAndStuff";
import ProjectSection from "../components/ProjectSection";
import PageLayout from "../components/PageLayout";

const ProjectPage = () => {
  const match = useRouteMatch();

  const matchProject = projectPages[match.params.projectId];

  const { bgImage } = matchProject;

  return (
    <PageLayout>
      <BigImage image={bgImage} />
      <LinkAndStuff back>
        <ProjectSection data={matchProject} />
      </LinkAndStuff>
    </PageLayout>
  );
};

export default ProjectPage;
