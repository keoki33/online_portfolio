import React, { Component } from "react";

class ToggleSwitch extends Component {
  state = { selected: "Fade", position: 0 };

  select = (selected, position) => {
    this.setState({ selected, position });
    this.props.toggleSwitch(selected);
  };

  render() {
    return (
      <div className="toggleSwitch">
        <div
          className="switch1"
          onClick={() => {
            this.select("Fade", 0);
          }}
        >
          Fade
        </div>
        <div
          className="switch2"
          onClick={() => {
            this.select("Slide", 63);
          }}
        >
          Slide
        </div>
        <div
          className="switch3"
          onClick={() => {
            this.select("Flip", 120);
          }}
        >
          Flip
        </div>
        <div className="selector" style={{ left: this.state.position }}>
          {this.state.selected}
        </div>
      </div>
    );
  }
}

export default ToggleSwitch;
