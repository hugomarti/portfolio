import React from "react";
import { Box } from "@chakra-ui/core";
import HomePage from "./Pages/HomePage";
import Work from "./Pages/Work";
import About from "./Pages/About";
import SayHello from "./Pages/SayHello";
import { Route } from "react-router-dom";
import ProjectPage from "./Pages/ProjectPage";

import { cards } from "./data/projects";

function App() {
  return (
    <Box>
      <Route exact path="/" component={HomePage} />
      <Route path="/work" render={() => <Work cards={cards} />} />
      <Route path="/about" component={About} />
      <Route path="/say-hello" component={SayHello} />
      <Route path="/project/:projectId" render={() => <ProjectPage />} />
    </Box>
  );
}

export default App;
