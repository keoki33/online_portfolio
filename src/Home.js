import React, { Component } from "react";
import Footer from "./Footer";

import { ReactComponent as Ruby } from "./images/skills/ruby.svg";
import { ReactComponent as Sinatra } from "./images/skills/sinatra.svg";
import { ReactComponent as Websocket } from "./images/skills/websocket.svg";

class Home extends Component {
  state = { class: "home" };

  whatever = () => {};

  componentDidMount() {
    this.setState({ class: "home" });
  }

  render() {
    return (
      <div
        className={this.state.class}
        onClick={event => {
          this.props.shoot();
        }}
      >
        <div className="homeDesc">
          <hr />
          <h2>George Wong</h2>
          <h3>
            Full Stack Developer | Proud Graduate of Flatiron Coding Bootcamp
            2019
          </h3>
          <p>
            “Give a man a program, frustrate him for a day. Teach a man to
            program, frustrate him for a lifetime.” ― Muhammad Waseem
          </p>{" "}
          <hr />
        </div>
        <br />
        <h2>Skills</h2>
        <div className="skillsLogoWrapper">
          <p>
            {/* <img
              className="skillsLogo"
              src={require("./images/skills/html.png")}
              alt=""
            /> */}
            <svg
              className="htmlLogo"
              viewBox="0 0 434.147 434.147"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                id="html"
                className="html"
                d="m27.336 14.372 28.177 360.474a13.333 13.333 0 0 0 9.263 11.67l148.268 47.008c2.622.831 5.437.831 8.059 0l148.268-47.008a13.333 13.333 0 0 0 9.263-11.67l28.177-360.474c.606-7.75-5.519-14.372-13.292-14.372h-352.89c-7.773 0-13.898 6.622-13.293 14.372zm307.217 111.843h-183.635l5.542 51.105h174.099l-11.389 145.693-102.096 32.369-102.096-32.369-5.95-76.116h53.588v37.336l55.89 15 55.556-15 4.31-59.503h-171.077l-11.358-145.311h242.273z"
                // fill="#fc490b"
              />
            </svg>
            <br />
            HTML
          </p>
          <p>
            {/* <img
              className="skillsLogo"
              src={require("./images/skills/css.png")}
              alt=""
            /> */}
            <svg
              className="cssLogo"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
            >
              <path
                fill="#2196f3"
                d="M32 0l40.8 460.8L256 512l183.136-51.168L480 0z"
              />
              <path
                fill="#fafafa"
                d="M392.768 150.688l-5.152 57.888-15.552 173.536L256 414.208l-.096.032-116-32.128-8.096-90.752h56.832l4.224 47.072 63.072 17.024.032-.032 63.168-17.024 8.608-78.432-198.656.544-5.632-53.632 209.056-2.464 4.224-57.408-218.88.608-3.68-53.408h283.648z"
              />
            </svg>
            <br />
            CSS
          </p>
          <p>
            {/* <img
              className="skillsLogo"
              src={require("./images/skills/html.png")}
              alt=""
            /> */}
            <svg
              className="scssLogo"
              xmlns="http://www.w3.org/2000/svg"
              width="2500"
              height="1875"
              viewBox="0 0 512 384"
            >
              <path d="M440.6 220.6c-17.9.101-33.4 4.4-46.4 10.801-4.8-9.5-9.6-17.801-10.399-24-.9-7.2-2-11.601-.9-20.2C384 178.6 389 166.4 389 165.4c-.101-.9-1.101-5.3-11.4-5.4s-19.2 2-20.2 4.7-3 8.9-4.3 15.3c-1.8 9.4-20.6 42.7-31.3 60.2-3.5-6.8-6.5-12.8-7.101-17.601-.899-7.199-2-11.6-.899-20.199 1.1-8.601 6.1-20.8 6.1-21.8-.1-.9-1.1-5.3-11.399-5.4-10.301-.1-19.2 2-20.2 4.7s-2.1 9.1-4.3 15.3C281.9 201.4 256.9 257 250.4 271.5c-3.3 7.4-6.199 13.3-8.3 17.3-2.1 4-.1.3-.3.7-1.8 3.4-2.8 5.3-2.8 5.3v.101c-1.4 2.5-2.9 4.899-3.601 4.899-.5 0-1.5-6.7.2-15.899 3.7-19.301 12.7-49.4 12.601-50.5 0-.5 1.699-5.801-5.801-8.5-7.3-2.7-9.899 1.8-10.5 1.8-.6 0-1.1 1.6-1.1 1.6s8.1-33.899-15.5-33.899c-14.8 0-35.2 16.1-45.3 30.8-6.4 3.5-20 10.899-34.4 18.8-5.5 3-11.2 6.2-16.6 9.1L117.9 251.9c-28.6-30.5-81.5-52.1-79.3-93.1.8-14.9 6-54.2 101.601-101.8 78.3-39 141-28.3 151.899-4.5 15.5 34-33.5 97.2-114.899 106.3-31 3.5-47.301-8.5-51.4-13-4.3-4.7-4.9-4.9-6.5-4-2.6 1.4-1 5.6 0 8.1 2.4 6.3 12.4 17.5 29.4 23.1 14.899 4.9 51.3 7.6 95.3-9.4 49.3-19.1 87.8-72.1 76.5-116.4-11.5-45.1-86.3-59.9-157-34.8C121.4 27.4 75.8 50.8 43 81.5 4 117.9-2.2 149.7.4 162.9c9.101 47.1 74 77.8 100 100.5-1.3.699-2.5 1.399-3.6 2-13 6.399-62.5 32.3-74.9 59.699-14 31 2.2 53.301 13 56.301 33.4 9.3 67.6-7.4 86.1-34.9 18.399-27.5 16.2-63.2 7.7-79.5l-.301-.6 10.2-6c6.601-3.9 13.101-7.5 18.8-10.601-3.199 8.7-5.5 19-6.699 34-1.4 17.601 5.8 40.4 15.3 49.4 4.2 3.899 9.2 4 12.3 4 11 0 16-9.101 21.5-20 6.8-13.3 12.8-28.7 12.8-28.7s-7.5 41.7 13 41.7c7.5 0 15-9.7 18.4-14.7v.1s.2-.3.6-1a36.13 36.13 0 0 0 1.2-1.899v-.2c3-5.2 9.7-17.1 19.7-36.8 12.899-25.4 25.3-57.2 25.3-57.2s1.2 7.8 4.9 20.6c2.199 7.601 6.999 15.9 10.699 24-3 4.2-4.8 6.601-4.8 6.601l.1.1c-2.399 3.2-5.1 6.601-7.899 10-10.2 12.2-22.4 26.101-24 30.101-1.9 4.699-1.5 8.199 2.2 11 2.7 2 7.5 2.399 12.6 2 9.2-.601 15.6-2.9 18.8-4.301 5-1.8 10.7-4.5 16.2-8.5 10-7.399 16.1-17.899 15.5-31.899-.3-7.7-2.8-15.3-5.9-22.5.9-1.3 1.801-2.601 2.7-4 15.8-23.101 28-48.5 28-48.5s1.2 7.8 4.9 20.6c1.899 6.5 5.7 13.601 9.1 20.601-14.8 12.1-24.1 26.1-27.3 35.3-5.9 17-1.3 24.7 7.4 26.5 3.899.8 9.5-1 13.699-2.8 5.2-1.7 11.5-4.601 17.301-8.9 10-7.4 19.6-17.7 19.1-31.6-.3-6.4-2-12.7-4.3-18.7 12.6-5.2 28.899-8.2 49.6-5.7 44.5 5.2 53.3 33 51.601 44.6-1.7 11.601-11 18-14.101 20-3.1 1.9-4.1 2.601-3.8 4 .4 2.101 1.8 2 4.5 1.601 3.7-.601 23.4-9.5 24.2-30.899 1.2-27.504-24.9-57.504-71.2-57.205zM97.4 336.3c-14.7 16.1-35.4 22.2-44.2 17-9.5-5.5-5.801-29.2 12.3-46.3 11-10.4 25.3-20 34.7-25.9 2.1-1.3 5.3-3.199 9.1-5.5.6-.399 1-.6 1-.6.7-.4 1.5-.9 2.3-1.4 6.7 24.4.3 45.8-15.2 62.7zm107.5-73.1c-5.1 12.5-15.9 44.6-22.4 42.8-5.601-1.5-9-25.8-1.101-49.8 4-12.101 12.5-26.5 17.5-32.101 8.101-9 16.9-12 19.101-8.3 2.6 4.801-9.9 39.601-13.1 47.401zm88.7 42.4c-2.2 1.101-4.2 1.9-5.1 1.301-.7-.4.899-1.9.899-1.9s11.1-11.9 15.5-17.4c2.5-3.199 5.5-6.899 8.7-11.1v1.2C313.6 292.1 299.8 301.7 293.6 305.6zm68.399-15.6c-1.6-1.2-1.399-4.9 4-16.5 2.101-4.6 6.9-12.3 15.2-19.6 1 3 1.601 5.899 1.5 8.6-.099 18-12.899 24.7-20.7 27.5z" />
            </svg>
            <br />
            SCSS
          </p>
          <p>
            {/* <img
              className="skillsLogo"
              src={require("./images/skills/ruby.jpeg")}
              alt=""
            /> */}
            <Ruby className="rubyLogo" />
            <br />
            RUBY
          </p>
          <p>
            {/* <img
              className="skillsLogo"
              src={require("./images/skills/sinatra.png")}
              alt=""
            /> */}
            <Sinatra className="sinatraLogo" />
            <br />
            SINATRA
          </p>
          <p>
            {/* <img
              className="skillsLogo"
              src={require("./images/skills/rails.png")}
              alt=""
            /> */}
            <svg
              className="railsLogo"
              viewBox="0 0 512 512"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="256" cy="256" fill="#C00" r="256" />
              <g fill="#FFF">
                <path d="M130.627 403.045h156.2s-34.6-78.7-25.8-150.9 65.8-105.1 98.1-108.6 49.9 16.4 49.9 16.4l7-10.6s-46.4-47-105.1-41.7c-58.7 5.3-99.2 44-124.5 91-25.2 47-39.9 79.9-49.9 129.2-10 49.4-5.9 75.2-5.9 75.2zM99.527 324.345l30.5 2.3-5.3 30.5-28.8-3.5 3.6-29.3zM147.627 259.745l8.2-22.9-27-10.6-8.8 24.7 27.6 8.8zM185.827 181.145l15.9-18.8-20.5-13.5-16.5 18.2 21.1 14.1zM227.527 108.345l14.1 17 19.4-11.2-14.1-15.9-19.4 10.1zM296.227 88.945l3.5 17 24.1-.6-2.4-15.3-25.2-1.1z" />
                <path d="M377.827 107.145l-.6 10.6 16.4 8.8 3.5-5.3-19.3-14.1zM374.327 152.345v8.8l15.9 1.8v-7l-15.9-3.6zM323.827 159.945l7.6 14.1 11.2-8.8-2.3-9.4-16.5 4.1zM299.727 178.145l11.7 17.6-7 12.3-17-18.8 12.3-11.1zM276.227 226.945l-7.6 15.3 20 17 4.7-19.4-17.1-12.9zM268.027 280.345l-1.2 20.5 24.7 10.6-1.2-19.4-22.3-11.7zM275.127 353.145l5.9 21.1 31.1 1.8-11.2-22.9h-25.8z" />
              </g>
            </svg>
            <br />
            RAILS
          </p>
          <p>
            <img
              className="skillsLogo railsLogo"
              src={require("./images/skills/websocket.png")}
              alt=""
            />
            <br /> ACTION CABLE
          </p>
          <p>
            <img
              className="skillsLogo"
              src={require("./images/skills/javascript.png")}
              alt=""
            />
            <br />
            JAVASCRIPT
          </p>
          <p>
            <img
              className="skillsLogo"
              src={require("./images/skills/react.png")}
              alt=""
            />
            <br />
            REACT
          </p>
          <p>
            <img
              className="skillsLogo"
              src={require("./images/skills/sql.jpg")}
              alt=""
            />
            <br />
            SQL
          </p>
          <p>
            <img
              className="skillsLogo"
              src={require("./images/skills/googleActions.png")}
              alt=""
            />{" "}
            <br />
            GOOGLE ACTIONS
          </p>
          <p>
            <img
              className="skillsLogo"
              src={require("./images/skills/heroku.png")}
              alt=""
            />
            <br />
            HEROKU
          </p>
          <p>
            <img
              className="skillsLogo"
              src={require("./images/skills/netlify.png")}
              alt=""
            />
            <br />
            NETLIFY
          </p>
          <p>
            <img
              className="skillsLogo"
              src={require("./images/skills/a+.png")}
              alt=""
            />
            <br />
            A+ CERTIFICATION
          </p>
          <p>
            <img
              className="skillsLogo"
              src={require("./images/skills/zendesk.png")}
              alt=""
            />
            <br />
            ZENDESK
          </p>
          <p>
            <img
              className="skillsLogo"
              src={require("./images/skills/ps.png")}
              alt=""
            />
            <br />
            PHOTOSHOP
          </p>
          <p>
            <img
              className="skillsLogo"
              src={require("./images/skills/ase.jpg")}
              alt=""
            />{" "}
            <br />
            ASE MASTER TECH
          </p>
          <img
            className="skillsLogoMore"
            src={require("./images/skills/more.jpg")}
            alt=""
          />{" "}
        </div>

        <Footer />
      </div>
    );
  }
}

export default Home;
