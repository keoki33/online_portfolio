import React, { Component } from "react";

class Zendesk extends Component {
  state = { class: "" };

  whatever = () => {};

  render() {
    return (
      <div className="">
        <p
          className={this.state.class}
          onClick={event => {
            this.setState({ class: "implode" });
            this.props.implode("zendesk");
          }}
        >
          <svg
            viewBox="0 -50 260 260"
            className="zendeskLogo"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="xMidYMid"
          >
            <path
              d="M118.25 51.233v142.773H0L118.25 51.233zm0-51.233c0 32.644-26.481 59.125-59.125 59.125S0 32.645 0 0h118.25zm19.5 194.006c0-32.677 26.449-59.125 59.125-59.125 32.677 0 59.125 26.48 59.125 59.125H137.75zm0-51.266V0H256L137.75 142.74z"
              fill="#03363D"
            />
          </svg>
          <br />
          ZENDESK
        </p>
      </div>
    );
  }
}

export default Zendesk;
