import React, { Component } from "react";

import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

class Projects extends Component {
  state = {
    class: "projects",

    mirrorPic: [
      "./images/projects/m1.png",
      "./images/projects/m2.png",
      "./images/projects/m3.png",
      "./images/projects/m4.png",
      "./images/projects/m5.png",
      "./images/projects/m6.png",
      "./images/projects/m7.png",
      "./images/projects/m8.png",
      "./images/projects/m9.png",
      "./images/projects/m10.png",
      "./images/projects/m11.png",
      "./images/projects/m12.png",
      "./images/projects/m13.png",
      "./images/projects/m14.png",
      "./images/projects/m15.png",
      "./images/projects/m16.png",
      "./images/projects/m17.jpeg",
      "./images/projects/m18.png"
    ],
    gamePic: [
      "./images/projects/g1.png",
      "./images/projects/g2.png",
      "./images/projects/g3.png",
      "./images/projects/g4.png",
      "./images/projects/g5.png",
      "./images/projects/g6.png",
      "./images/projects/g7.png"
    ],
    recipePic: [
      "./images/projects/r1.png",
      "./images/projects/r2.png",
      "./images/projects/r3.png",
      "./images/projects/r4.png",
      "./images/projects/r5.png",
      "./images/projects/r6.png",
      "./images/projects/r7.png"
    ],
    mirrorIndex: 0,
    gameIndex: 0,
    recipeIndex: 0
  };

  componentDidMount() {
    this.setState({ class: "projects" });

    this.interval = setInterval(() => this.cyclePics(), 3000);
  }

  cyclePics = () => {
    this.mirrorPic();
    this.gamePic();
    this.recipePic();
  };

  componentWillUnmount() {
    // synth.cancel();
    clearInterval(this.interval);
  }

  mirrorPic = () => {
    if (this.state.mirrorIndex == this.state.mirrorPic.length - 1) {
      this.setState({ mirrorIndex: 0 });
    }
    this.setState({
      mirrorIndex: this.state.mirrorIndex + 1
    });
  };

  gamePic = () => {
    if (this.state.gameIndex == this.state.gamePic.length - 1) {
      this.setState({ gameIndex: 0 });
    }
    this.setState({
      gameIndex: this.state.gameIndex + 1
    });
  };

  recipePic = () => {
    if (this.state.recipeIndex == this.state.recipePic.length - 1) {
      this.setState({ recipeIndex: 0 });
    }
    this.setState({
      recipeIndex: this.state.recipeIndex + 1
    });
  };

  render() {
    return (
      <div className={this.state.class}>
        <h1>Projects</h1>
        <div className="projectDivs">
          <div className="mirrorDiv">
            <img
              className="mirrorPic"
              src={require(`${this.state.mirrorPic[this.state.mirrorIndex]}`)}
              alt=""
            />
            <div className="mirrorDesc">
              <p>
                <h1>- Reflectere -</h1>A Google home voice controlled smart
                mirror. <br /> <br /> Why just look at a mirror when you can
                talk to it. <br />
                <br />
                <a
                  href="https://youtu.be/A7g2VQ8CuxM"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Video Demo
                </a>
                {" | "}
                <a
                  href="https://quizzical-noyce-07bcbc.netlify.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Mirror
                </a>
                {" | "}
                <a
                  href="https://stupefied-agnesi-9b6078.netlify.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Remote Control
                </a>
                <br />
                <a
                  href="https://github.com/keoki33/smart_mirror"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Github mirror
                </a>
                {" | "}
                <a
                  href="https://github.com/keoki33/remote-control"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Github remote
                </a>
                <br />
                <a
                  href="https://github.com/keoki33/remote-control"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Github back-end
                </a>
              </p>
            </div>
          </div>
          <div className="gameDiv">
            <img
              className="gamePic"
              src={require(`${this.state.gamePic[this.state.gameIndex]}`)}
              alt=""
            />
            <div className="gameDesc">
              {" "}
              <p>
                <h1>- Game -</h1> A 80’s retro theme HTML canvas game.
                <br />
                <br />
                <a
                  href="https://youtu.be/0_UtxgQkIlg"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Video Demo
                </a>
                {" | "}
                <a
                  href="https://zen-hamilton-9b3aa1.netlify.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Website
                </a>
                {" | "}
                <a
                  href="https://github.com/keoki33/game_project"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Github front-end
                </a>
                <br />
                <a
                  href="https://github.com/keoki33/game_api"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Github back-end
                </a>
              </p>
            </div>
          </div>
          <div className="recipeDiv">
            <img
              className="recipePic"
              src={require(`${this.state.recipePic[this.state.recipeIndex]}`)}
              alt=""
            />
            <div className="recipeDesc">
              {" "}
              <p>
                <h1>- WTC -</h1> A recipes website allowing user to search
                recipes by ingredients and time.
                <br />
                <br />
                <a
                  href="https://youtu.be/QoIAFNWLduA"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Video Demo
                </a>
                {" | "}
                <a
                  href="https://github.com/keoki33/recipes_project"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Github front-end
                </a>
                <br />
                <a
                  href="https://github.com/keoki33/recipes_api"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Github back-end
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Projects;
