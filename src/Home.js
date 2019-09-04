import React, { Component } from "react";
import Footer from "./Footer";
import Html from "./icons/Html";
import Css from "./icons/Css";
import Scss from "./icons/Scss";
import RubyLogo from "./icons/RubyLogo";
import SinatraLogo from "./icons/SinatraLogo";
import Rails from "./icons/Rails";
import Action from "./icons/Action";
import Javascript from "./icons/Javascript";
import ReactLogo from "./icons/ReactLogo";
import Sql from "./icons/Sql";
import GoogleLogo from "./icons/GoogleLogo";
import Heroku from "./icons/Heroku";
import Netlify from "./icons/Netlify";
import Comptia from "./icons/Comptia";
import Zendesk from "./icons/Zendesk";
import Photoshop from "./icons/Photoshop";
import Ase from "./icons/Ase";
import Stay from "./icons/Stay";

class Home extends Component {
  state = {
    class: "home",
    html: true,
    css: true,
    scss: true,
    ruby: true,
    sinatra: true,
    rails: true,
    action: true,
    javascript: true,
    react: true,
    sql: true,
    google: true,
    heroku: true,
    netlify: true,
    comptia: true,
    zendesk: true,
    photoshop: true,
    ase: true,
    stay: true,
    skills: ""
  };

  whatever = () => {};

  componentDidMount() {
    this.setState({ class: "home" });
  }

  implode = x => {
    setTimeout(() => {
      this.setState({ [x]: false }, () => this.skillsActive());
    }, 1900);
  };

  skillsActive = () => {
    if (
      this.state.html &&
      this.state.css &&
      this.state.scss &&
      this.state.ruby &&
      this.state.sinatra &&
      this.state.rails &&
      this.state.action &&
      this.state.javascript &&
      this.state.react &&
      this.state.sql &&
      this.state.google &&
      this.state.heroku &&
      this.state.netlify &&
      this.state.comptia &&
      this.state.zendesk &&
      this.state.photoshop &&
      this.state.ase &&
      this.state.stay
    ) {
      this.setState({ skills: "" });
    } else {
      this.setState({ skills: "skillsActive" });
    }
  };

  handleSkills = () => {
    this.setState(
      {
        html: true,
        css: true,
        scss: true,
        ruby: true,
        sinatra: true,
        rails: true,
        action: true,
        javascript: true,
        react: true,
        sql: true,
        google: true,
        heroku: true,
        netlify: true,
        comptia: true,
        zendesk: true,
        photoshop: true,
        ase: true,
        stay: true
      },
      () => this.skillsActive()
    );
  };

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
        <h2
          className={this.state.skills}
          onClick={event => {
            this.handleSkills();
          }}
        >
          Skills
        </h2>
        <div className="skillsLogoWrapper">
          {this.state.html ? <Html implode={this.implode} /> : console.log()}
          {this.state.css ? <Css implode={this.implode} /> : console.log()}
          {this.state.scss ? <Scss implode={this.implode} /> : console.log()}
          {this.state.ruby ? (
            <RubyLogo implode={this.implode} />
          ) : (
            console.log()
          )}
          {this.state.sinatra ? (
            <SinatraLogo implode={this.implode} />
          ) : (
            console.log()
          )}
          {this.state.rails ? <Rails implode={this.implode} /> : console.log()}
          {this.state.action ? (
            <Action implode={this.implode} />
          ) : (
            console.log()
          )}
          {this.state.javascript ? (
            <Javascript implode={this.implode} />
          ) : (
            console.log()
          )}
          {this.state.react ? (
            <ReactLogo implode={this.implode} />
          ) : (
            console.log()
          )}
          {this.state.sql ? <Sql implode={this.implode} /> : console.log()}
          {this.state.google ? (
            <GoogleLogo implode={this.implode} />
          ) : (
            console.log()
          )}
          {this.state.heroku ? (
            <Heroku implode={this.implode} />
          ) : (
            console.log()
          )}
          {this.state.netlify ? (
            <Netlify implode={this.implode} />
          ) : (
            console.log()
          )}
          {this.state.comptia ? (
            <Comptia implode={this.implode} />
          ) : (
            console.log()
          )}
          {this.state.zendesk ? (
            <Zendesk implode={this.implode} />
          ) : (
            console.log()
          )}
          {this.state.photoshop ? (
            <Photoshop implode={this.implode} />
          ) : (
            console.log()
          )}
          {this.state.ase ? <Ase implode={this.implode} /> : console.log()}
          {this.state.stay ? <Stay implode={this.implode} /> : console.log()}
        </div>

        <Footer />
      </div>
    );
  }
}

export default Home;
