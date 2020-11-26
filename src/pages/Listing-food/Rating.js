import React, { Component } from "react";

class Rating extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    var bg = "";
    if (this.props.rating < 2) bg = "rgb(147, 83, 76)";
    if (this.props.rating >= 2) bg = "rgb(191, 123, 63)";
    if (this.props.rating >= 3) bg = "rgb(171, 179, 72)";
    if (this.props.rating >= 4) bg = "#3adb71";

    return (
      <React.Fragment>
        <span class="ratingspan" style={{ backgroundColor: bg }}>
          {this.props.rating}
        </span>
      </React.Fragment>
    );
  }
}

export default Rating;
