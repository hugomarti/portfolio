import React from "react";
import { Route, Switch, useLocation } from "react-router-dom";

import HomePage from "./Pages/HomePage";
import Work from "./Pages/Work";
import About from "./Pages/About";
import SayHello from "./Pages/SayHello";
import ProjectPage from "./Pages/ProjectPage";

import { cards } from "./data/projects";

function App() {
  const location = useLocation();
  return (
    <Switch location={location} key={location.pathname}>
      <Route exact path="/" component={HomePage} />
      <Route path="/work" render={() => <Work cards={cards} />} />
      <Route path="/about" component={About} />
      <Route path="/say-hello" component={SayHello} />
      <Route path="/project/:projectId" render={() => <ProjectPage />} />
    </Switch>
  );
}

export default App;
