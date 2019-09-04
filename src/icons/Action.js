import React, { Component } from "react";

class Action extends Component {
  state = { class: "" };

  whatever = () => {};

  render() {
    return (
      <div className="">
        <p
          className={this.state.class}
          onClick={event => {
            this.setState({ class: "implode" });
            this.props.implode("action");
          }}
        >
          <img
            className="skillsLogo actionLogo"
            src={require("../images/skills/websocket.png")}
            alt=""
          />
          <br /> ACTION CABLE
        </p>
      </div>
    );
  }
}

export default Action;
