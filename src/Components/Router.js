import React from "react";
import {
  HashRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom";
import Home from "Routes/Home";
import About from "Routes/About";
import Contact from "Routes/Contact";
import Portfolio from "Routes/Portfolio";
import Skill from "Routes/Skill";
import Project1 from "ProjectDetails/Project1";
import Project2 from "ProjectDetails/Project2";
import Project3 from "ProjectDetails/Project3";
import Project4 from "ProjectDetails/Project4";
import Project5 from "ProjectDetails/Project5";
import Project6 from "ProjectDetails/Project6";
import Project7 from "ProjectDetails/Project7";
import Project8 from "ProjectDetails/Project8";
import Project9 from "ProjectDetails/Project9";
import Project10 from "ProjectDetails/Project10";

export default () => (
  <Router>
    <>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/me" exact component={About} />
        <Route path="/portfolio" exact component={Portfolio} />
        <Route path="/portfolio/project1" exact component={Project1} />
        <Route path="/portfolio/project2" exact component={Project2} />
        <Route path="/portfolio/project3" exact component={Project3} />
        <Route path="/portfolio/project4" exact component={Project4} />
        <Route path="/portfolio/project5" exact component={Project5} />
        <Route path="/portfolio/project6" exact component={Project6} />
        <Route path="/portfolio/project7" exact component={Project7} />
        <Route path="/portfolio/project8" exact component={Project8} />
        <Route path="/portfolio/project9" exact component={Project9} />
        <Route path="/portfolio/project10" exact component={Project10} />
        <Route path="/skill" exact component={Skill} />
        <Route path="/contact" exact component={Contact} />
        <Redirect from="*" to="/" />
      </Switch>
    </>
  </Router>
);
