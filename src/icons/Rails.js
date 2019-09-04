import React, { Component } from "react";

class Rails extends Component {
  state = { class: "" };

  whatever = () => {};

  render() {
    return (
      <div className="">
        <p
          className={this.state.class}
          onClick={event => {
            this.setState({ class: "implode" });
            this.props.implode("rails");
          }}
        >
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
      </div>
    );
  }
}

export default Rails;
