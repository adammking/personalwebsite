import React from "react";
import { Switch, Route } from "react-router-dom";
import Homepage from "./Homepage";
import About from "./About";
import Projects from "./Projects";
import Contact from "./Contact";


function Routes() {
  return (
    <div className="pt-5">
      <Switch>

        <Route exact path="/">
          <Homepage />
        </Route>

        <Route exact path="/projects">
          <Projects />
        </Route>

        <Route exact path="/about">
          <About />
        </Route>

        <Route exact path="/contact">
            <Contact />
        </Route>

      </Switch>
    </div>
  );
}

export default Routes;
