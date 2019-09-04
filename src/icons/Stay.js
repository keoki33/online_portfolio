import React, { Component } from "react";

class Stay extends Component {
  state = { class: "" };

  whatever = () => {};

  render() {
    return (
      <div className="">
        <p
          className={this.state.class}
          onClick={event => {
            this.setState({ class: "implode" });
            this.props.implode("stay");
          }}
        >
          {" "}
          <img
            className="skillsLogoMore more"
            src={require("../images/skills/more.jpg")}
            alt=""
          />{" "}
        </p>
      </div>
    );
  }
}

export default Stay;
