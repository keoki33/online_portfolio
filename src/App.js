import React, { Component } from "react";

import { TransitionGroup, CSSTransition } from "react-transition-group";

import "./App.scss";
import Navbar from "./Navbar";
import Home from "./Home";
import About from "./About";
import Projects from "./Projects";
import Resume from "./Resume";
import Contact from "./Contact";
import ProjectsV2 from "./ProjectsV2";
import Fire from "./Fire";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

class App extends Component {
  state = {
    x: 0,
    y: 0,
    clicked: false,
    navbarClass: "navbarIn",
    facePic: "./images/180.png",
    middleX: 0,
    middleY: 0,
    laser: false,
    fireArray: [],
    fireCount: 1
  };

  whatever = () => {};

  componentDidMount() {
    this.screenPos();
  }

  mouseTrack(e) {
    this.screenPos();
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

  // facePic = () => {
  //   if (this.state.clicked) {
  //     this.setState({ facePic: "./images/smile.jpg" }, () =>
  //       setTimeout(() => {
  //         this.setState({ clicked: false });
  //       }, 1000)
  //     );
  //   } else if (this.state.x > 2550) {
  //     this.setState({ facePic: "./images/230.png" });
  //   } else if (this.state.x < 2330) {
  //     this.setState({ facePic: "./images/130.png" });
  //   } else {
  //     this.setState({ facePic: "./images/180.png" });
  //   }
  // };

  handleClick = () => {
    this.setState({ clicked: true });
  };

  laser = () => {
    return (
      <svg className="lasers">
        <line
          className="laser"
          x1={this.state.middleX + 12}
          y1={this.state.middleY}
          x2={this.state.x + 5}
          y2={this.state.y}
          style={{ stroke: "rgb(255,0,0)", strokeWidth: 4 }}
        />
        <line
          className="laser"
          x1={this.state.middleX - 12}
          y1={this.state.middleY}
          x2={this.state.x - 5}
          y2={this.state.y}
          style={{ stroke: "rgb(255,0,0)", strokeWidth: 4 }}
        />
      </svg>
    );
  };

  shoot = () => {
    this.screenPos();

    if (window.location.pathname === "/") {
      this.setState({ laser: true, fireCount: this.state.fireCount + 1 });
      setTimeout(() => {
        this.setState({ laser: false });
      }, 300);
    }
    this.fire();
  };

  screenPos = () => {
    const pic = document.getElementById("facePic");
    let pos = pic.getBoundingClientRect();
    // console.log(pos.left);
    // console.log(pos.top);
    // console.log(pos.bottom);
    // console.log(this.state.middleY);
    // console.log(pos.width);
    // console.log(pos.height);
    // console.log(
    //   `middle x=${pos.left + pos.width * 0.5} y=${Math.abs(pos.top)}`
    // );
    this.setState({
      middleX: pos.left + pos.width * 0.5,
      middleY: Math.abs(pos.bottom * 0.6)
    });
    // console.log(this.state.width);
  };

  fire = () => {
    for (let i = 0; i < this.state.fireCount; i++) {
      this.setState({
        fireArray: [
          ...this.state.fireArray,
          <Fire key={this.state.fireCount} x={this.state.x} y={this.state.y} />
        ]
      });
    }
    console.log(this.state.fireArray);
    if (this.state.fireArray.length > 5) {
      this.setState({ fireArray: this.state.fireArray.slice(1) });
    }
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
                  {this.state.laser ? this.laser() : console.log()}

                  {/* {console.log(`x: ${this.state.x} y: ${this.state.y}`)} */}
                  <Navbar
                    x={this.state.x}
                    y={this.state.y}
                    facePic={this.state.facePic}
                    navbarClass={this.state.navbarClass}
                    handleClick={this.handleClick}
                  />
                  <div className="content">
                    {this.state.fireArray}
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
                            render={props => (
                              <Home
                                x={this.state.x}
                                y={this.state.y}
                                shoot={this.shoot}
                              />
                            )}
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
