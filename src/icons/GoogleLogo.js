import React, { Component } from "react";

import { ReactComponent as Google } from "../images/skills/google.svg";

class GoogleLogo extends Component {
  state = { class: "" };

  whatever = () => {};

  render() {
    return (
      <div className="">
        <p
          className={this.state.class}
          onClick={event => {
            this.setState({ class: "implode" });
            this.props.implode("google");
          }}
        >
          <Google className="googleLogo" />
          <br />
          GOOGLE ACTIONS
        </p>
      </div>
    );
  }
}

export default GoogleLogo;
