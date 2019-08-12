import React, { Component } from "react";
import { TransitionGroup, CSSTransition } from "react-transition-group";

import "./App.css";
import Navbar from "./Navbar";
import Home from "./Home";
import About from "./About";
import Projects from "./Projects";
import Resume from "./Resume";
import Contact from "./Contact";
import ProjectsV2 from "./ProjectsV2";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

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
    this.setState({ x: e.pageX, y: e.pageY });
    // console.log(this.state.x);
  }

  touchTrack(e) {
    this.setState({
      x: e.touches[0].clientX,
      y: e.touches[0].clientY
    });
    // console.log(this.state.x);
    // console.log(this.state.y);
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
        <div className="app">
          <Route
            render={({ location }) => {
              return (
                <div
                  className="main"
                  onTouchStart={event => {
                    this.touchTrack(event);
                  }}
                  onTouchMove={event => {
                    this.touchTrack(event);
                  }}
                  onMouseMove={event => {
                    this.mouseTrack(event);
                  }}
                >
                  {/* {console.log(`x: ${this.state.x} y: ${this.state.y}`)} */}
                  <Navbar
                    x={this.state.x}
                    y={this.state.y}
                    facePic={this.state.facePic}
                    navbarClass={this.state.navbarClass}
                    handleClick={this.handleClick}
                  />
                  <div className="content">
                    <TransitionGroup component={null}>
                      <CSSTransition
                        key={location.key}
                        classNames="animation"
                        timeout={1000}
                      >
                        <Switch location={location}>
                          <Route
                            exact
                            path={["/home", "/"]}
                            render={props => <Home />}
                          />
                          <Route path="/about" render={props => <About />} />
                          <Route
                            path="/projects"
                            render={props => <Projects />}
                          />
                          <Route path="/resume" render={props => <Resume />} />
                          <Route
                            path="/contact"
                            render={props => <Contact />}
                          />
                        </Switch>
                      </CSSTransition>
                    </TransitionGroup>
                  </div>
                </div>
              );
            }}
          />
        </div>
      </Router>
    );
  }
}

export default App;
