import React from "react";
import { Route, Switch, withRouter } from "react-router-dom";
import styled from "styled-components";
import { CSSTransition, TransitionGroup } from "react-transition-group";

import HomePage from "./Pages/HomePage";
import Work from "./Pages/Work";
import About from "./Pages/About";
import SayHello from "./Pages/SayHello";
import ProjectPage from "./Pages/ProjectPage";

import { cards } from "./data/projects";

function App({ location }) {
  return (
    <Wrapper>
      <TransitionGroup>
        <CSSTransition
          key={location.key}
          timeout={{ enter: 300, exit: 300 }}
          classNames={"fade"}
        >
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route path="/work" render={() => <Work cards={cards} />} />
            <Route path="/about" component={About} />
            <Route path="/say-hello" component={SayHello} />
            <Route path="/project/:projectId" render={() => <ProjectPage />} />
          </Switch>
        </CSSTransition>
      </TransitionGroup>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  .fade-enter {
    opacity: 0.01;
  }
  .fade-enter.fade-enter-active {
    opacity: 1;
    transition: opacity 300ms ease-in;
  }
  .fade-exit {
    opacity: 1;
  }

  .fade-exit.fade-exit-active {
    opacity: 0.01;
    transition: opacity 300ms ease-in;
  }
`;

export default withRouter(App);
