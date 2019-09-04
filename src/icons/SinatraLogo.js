import React, { Component } from "react";
import { ReactComponent as Sinatra } from "../images/skills/sinatra.svg";

class SinatraLogo extends Component {
  state = { class: "" };

  whatever = () => {};

  render() {
    return (
      <div className="">
        <p
          className={this.state.class}
          onClick={event => {
            this.setState({ class: "implode" });
            this.props.implode("sinatra");
          }}
        >
          <Sinatra className="sinatraLogo" />
          <br />
          SINATRA
        </p>
      </div>
    );
  }
}

export default SinatraLogo;
