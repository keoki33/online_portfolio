import React, { Component } from "react";
import "./App.css";
import Navbar from "./Navbar";
import Home from "./Home";
import About from "./About";
import Projects from "./Projects";
import Resume from "./Resume";
import Contact from "./Contact";

import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

class App extends Component {
  state = {
    x: 0,
    y: 0,
    navbarClass: "navbarIn"
  };

  whatever = () => {};

  mouseTrack(e) {
    this.setState({ x: e.screenX, y: e.screenY });
  }

  render() {
    return (
      <Router>
        <div
          className="main"
          onMouseMove={event => {
            this.mouseTrack(event);
          }}
        >
          {console.log(`x: ${this.state.x}`)}
          <Navbar x={this.state.x} navbarClass={this.state.navbarClass} />
          <Switch>
            <Route
              exact
              path={["/recipes", "/home", "/"]}
              render={props => <Home />}
            />
            <Route path="/about" render={props => <About />} />
            <Route path="/projects" render={props => <Projects />} />
            <Route path="/resume" render={props => <Resume />} />
            <Route path="/contact" render={props => <Contact />} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
