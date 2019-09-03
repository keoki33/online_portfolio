import React, { Component } from "react";

class Html extends Component {
  state = { class: "" };

  whatever = () => {};

  render() {
    return (
      <div className="">
        <p
          className={this.state.class}
          onClick={event => {
            this.setState({ class: "implode" });
            this.props.implode("html");
          }}
        >
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
      </div>
    );
  }
}

export default Html;
