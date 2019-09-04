import React, { Component } from "react";

class Netlify extends Component {
  state = { class: "" };

  whatever = () => {};

  render() {
    return (
      <div className="">
        <p
          className={this.state.class}
          onClick={event => {
            this.setState({ class: "implode" });
            this.props.implode("netlify");
          }}
        >
          <img
            className="skillsLogo netlify"
            src={require("../images/skills/netlify.png")}
            alt=""
          />
          <br />
          NETLIFY
        </p>
      </div>
    );
  }
}

export default Netlify;
