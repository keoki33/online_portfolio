import React, { Component } from "react";

class Comptia extends Component {
  state = { class: "" };

  whatever = () => {};

  render() {
    return (
      <div className="">
        <p
          className={this.state.class}
          onClick={event => {
            this.setState({ class: "implode" });
            this.props.implode("comptia");
          }}
        >
          <svg
            className="comptiaLogo"
            id="Layer_1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="25 20 240 220"
          >
            <path
              className="st0"
              d="M145.2 47.7c-52.6 0-95.4 42.8-95.4 95.4 0 26.5 10.6 51.1 29.8 69.3l1 1 1.1-1c2.8-2.6 5.7-4.9 8.7-7.1 14.6 12.9 33.8 20.8 54.8 20.8s40.2-7.9 54.8-20.8c3 2.2 5.9 4.5 8.7 7.1l1.1 1 1-1c19.3-18.2 29.9-42.9 29.9-69.3-.1-52.6-42.9-95.4-95.5-95.4z"
            />
            <path
              className="st1"
              d="M121.3 89.8c-2.2 0-4 1.5-4 3.4s1.8 3.4 4 3.4 4-1.5 4-3.4-1.8-3.4-4-3.4m0 9c-3.5 0-6.3-2.5-6.3-5.7s2.8-5.7 6.3-5.7 6.3 2.5 6.3 5.7c0 3.3-2.8 5.7-6.3 5.7M143.8 98.8c-1.3 0-2.3-1-2.3-2.3v-4.7c0-1.1-1-2-2.2-2-1.2 0-2.2.9-2.2 2v7c-1.3 0-2.3-1-2.3-2.3v-4.8c0-1.1-1-2-2.2-2-1.2 0-2.2.9-2.2 2v4.7c0 1.3-1 2.3-2.3 2.3v-7c0-2.4 2-4.3 4.5-4.3 1.3 0 2.5.5 3.3 1.4.8-.9 2-1.4 3.3-1.4 2.5 0 4.5 1.9 4.5 4.3l.1 7.1zM151.2 98.8c-.6 0-1.2 0-1.7-.2-1.2-.3-1.9-1.6-1.6-2.8 0-.1.1-.3.1-.4.6.7 1.7 1.1 3.1 1.1 2.1 0 3.7-1.5 3.7-3.3 0-1.9-1.6-3.5-3.7-3.5-2 0-4 1.1-4 3.5v7.4c0 1.2-1 2.2-2.3 2.2v-9.6c0-3.3 2.6-5.8 6.2-5.8 1.6 0 3.1.6 4.2 1.6 1.1 1.1 1.8 2.5 1.8 4.1.2 3.3-2.4 5.7-5.8 5.7M167.5 85.3h-4.9v13.5h-.1c-1.2 0-2.2-1-2.2-2.3V85.3h-4.9c-1.2 0-2.2-1-2.2-2.3h16.6c-.1 1.3-1.1 2.3-2.3 2.3M182 85.4l-3.2 7.1h6.1l-3.3-7.2.4.1zm5 12l-1.2-2.6h-8.1l-1.2 2.7c-.6 1.1-2.1 1.4-3.2 1.4l6.6-14.5c.4-.8 1-1.3 1.8-1.3s1.5.5 1.8 1.3l6.5 14.3c-1.1.1-2.5-.2-3-1.3"
            />
            <path
              className="st1"
              d="M112.4 87.3c-1.2-1.3-3-2.2-5-2.2-3.5 0-6.4 2.6-6.4 5.7 0 3.2 2.9 5.8 6.4 5.8 1.7 0 3.3-.6 4.5-1.7.8-.7 2.1-.6 2.9 0-.6 1-1.5 1.8-2.5 2.4-1.5.9-3.1 1.4-4.9 1.4-4.8 0-8.7-3.6-8.7-8s3.9-8 8.7-8c3.4 0 6.5 1.9 7.9 4.7-.9.8-2.1.7-2.9-.1M191.4 97h-.1s.1.1.3.4c-.1.1-.2.1-.3 0l-.3-.3h-.3V97c0-.1.1-.2.2-.2H191.2s.1 0 .1-.1c0 0 0-.1-.3-.1h-.4v.8c0 .1-.1.2-.2.2h-.1v-1c0-.1.1-.2.2-.2h.5c.5 0 .6.3.6.4l-.2.2m-.5-.9c-.5 0-.9.4-.9.8 0 .5.4.8.9.8s1-.4 1-.8c0-.5-.4-.8-1-.8m0 1.9c-.7 0-1.2-.5-1.2-1.1 0-.6.5-1.1 1.2-1.1s1.2.5 1.2 1.1c0 .6-.5 1.1-1.2 1.1M170.5 83.1v13.6c0 1.2 1 2.2 2.3 2.2V85.3c-.1-1.2-1.1-2.2-2.3-2.2"
            />
            <g>
              <path
                className="st2"
                d="M145.2 47.7c-52.6 0-95.4 42.8-95.4 95.4 0 26.5 10.6 51.1 29.8 69.3l1 1 1.1-1c2.8-2.6 5.7-4.9 8.7-7.1 14.6 12.9 33.8 20.8 54.8 20.8s40.2-7.9 54.8-20.8c3 2.2 5.9 4.5 8.7 7.1l1.1 1 1-1c19.3-18.2 29.9-42.9 29.9-69.3-.1-52.6-42.9-95.4-95.5-95.4zm54.5 153.8c-13.7-9.3-29.5-15-46.1-16.4v-10.8h-3.1v17.2c0 1.2.4 2.4 1.1 3.3l4.4 5.7c-.6.8-.9 1.7-.9 2.8 0 2.6 2.1 4.7 4.7 4.7s4.7-2.1 4.7-4.7-2.1-4.7-4.7-4.7c-.4 0-.8.1-1.2.2l-4.5-5.9c-.3-.4-.5-.9-.5-1.4v-3.2c15.7 1.4 30.7 6.7 43.7 15.5-14 12.1-32.3 19.5-52.2 19.5-20 0-38.2-7.4-52.2-19.5a94.15 94.15 0 0 1 42.6-15.4v3.1c0 .5-.2 1-.5 1.4l-4.5 5.9c-.4-.1-.8-.2-1.2-.2-2.6 0-4.7 2.1-4.7 4.7s2.1 4.7 4.7 4.7 4.7-2.1 4.7-4.7c0-1-.4-2-.9-2.8l4.4-5.7c.7-.9 1.1-2.1 1.1-3.3v-17.2h-3.1v10.9c-16.2 1.6-31.6 7.2-45 16.3-15.6-14.6-25.3-35.3-25.3-58.3 0-44.1 35.8-79.9 79.9-79.9S225 99.1 225 143.2c.1 22.9-9.7 43.7-25.3 58.3zm9.9 7.7c-2.4-2.1-4.8-4.1-7.4-6 15.9-15.1 25.9-36.5 25.9-60.1 0-45.8-37.2-83-83-83s-83 37.2-83 83c0 23.6 9.9 45 25.8 60.1-2.5 1.9-5 3.8-7.4 6-17.9-17.5-27.8-40.9-27.8-66.1 0-50.9 41.4-92.4 92.4-92.4s92.4 41.4 92.4 92.4c0 25.2-9.9 48.6-27.9 66.1z"
              />
              <path
                className="st1"
                d="M243.5 109.1H37.6V159c0 4.6 3.8 8.4 8.4 8.4h205.9v-49.9c-.1-4.7-3.8-8.4-8.4-8.4z"
              />
              <path
                className="st0"
                d="M157.5 155.9h-6.6l-3.6-8.6h-16.8l-3.6 8.6h-6.4l15.6-35.7h5.8l15.6 35.7zm-18.6-28.3l-6.1 14.2H145l-6.1-14.2zM167.8 125.6h5.8v9.7h9.7v5.6h-9.7v9.7h-5.8v-9.7h-9.7v-5.6h9.7v-9.7z"
              />
              <path
                className="st2"
                d="M146.1 209.2v-35H143v35c-1.8.6-3.1 2.4-3.1 4.4 0 2.6 2.1 4.7 4.7 4.7s4.7-2.1 4.7-4.7c-.1-2.1-1.4-3.8-3.2-4.4z"
              />
            </g>
            <path
              className="st2"
              d="M210 206.8h-.1s.1.1.3.4c-.1.1-.2.1-.3 0l-.3-.3h-.3v-.1c0-.1.1-.2.2-.2H209.8s.1 0 .1-.1c0 0 0-.1-.3-.1h-.4v.8c0 .1-.1.2-.2.2h-.1v-1c0-.1.1-.2.2-.2h.5c.5 0 .6.3.6.4 0 .1-.1.2-.2.2m-.4-.9c-.5 0-.9.4-.9.8 0 .5.4.8.9.8s1-.4 1-.8c-.1-.4-.5-.8-1-.8m0 1.9c-.7 0-1.2-.5-1.2-1.1 0-.6.5-1.1 1.2-1.1s1.2.5 1.2 1.1c0 .6-.6 1.1-1.2 1.1"
            />
          </svg>
          <br />
          A+ CERTIFICATION
        </p>
      </div>
    );
  }
}

export default Comptia;
