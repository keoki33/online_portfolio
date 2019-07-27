import React, { Component } from "react";

import "./App.css";
import Navbar from "./Navbar";
import Home from "./Home";
import About from "./About";
import Projects from "./Projects";
import Resume from "./Resume";
import Contact from "./Contact";
import Footer from "./Footer";

import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

class App extends Component {
  state = {
    x: 0,
    y: 0,
    clicked: false,
    navbarClass: "navbarIn",
    facePic: "./images/180.png"
  };

  whatever = () => {};

  mouseTrack(e) {
    this.setState({ x: e.screenX, y: e.screenY });

    this.facePic();
  }

  facePic = () => {
    if (this.state.clicked) {
      this.setState({ facePic: "./images/smile.jpg" }, () =>
        setTimeout(() => {
          this.setState({ clicked: false });
        }, 1000)
      );
    } else if (this.state.x > 2550) {
      this.setState({ facePic: "./images/230.png" });
    } else if (this.state.x < 2330) {
      this.setState({ facePic: "./images/130.png" });
    } else {
      this.setState({ facePic: "./images/180.png" });
    }
  };

  handleClick = () => {
    this.setState({ clicked: true });
  };

  render() {
    return (
      <Router>
        <div
          className="main"
          // onTouchStart={event => {
          //   this.mouseTrack(event);
          // }}
          // onTouchEnd={event => {
          //   this.mouseTrack(event);
          // }}
          onMouseMove={event => {
            this.mouseTrack(event);
          }}
        >
          {console.log(`x: ${this.state.x} y: ${this.state.x}`)}
          <Navbar
            x={this.state.x}
            y={this.state.y}
            facePic={this.state.facePic}
            navbarClass={this.state.navbarClass}
            handleClick={this.handleClick}
          />
          <Switch>
            <div className="content">
              <Route
                exact
                path={["/recipes", "/home", "/"]}
                render={props => <Home />}
              />
              <Route path="/about" render={props => <About />} />
              <Route path="/projects" render={props => <Projects />} />
              <Route path="/resume" render={props => <Resume />} />
              <Route path="/contact" render={props => <Contact />} />
            </div>
          </Switch>
          {/* <Footer /> */}
        </div>
      </Router>
    );
  }
}

export default App;
