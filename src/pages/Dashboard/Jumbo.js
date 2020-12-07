import React, { Component } from "react";
import Banner from "../../assets/images/jumbo/banner.jpg";

class Jumbo extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <React.Fragment>
        <div className="jumbo">
          <div className="jumbo-inner">
            <div className="jumbo-main">
              <div className="jumbo-main-em"></div>
            </div>
          </div>
          <img src={Banner} alt="" className="img-responsive" />
        </div>
      </React.Fragment>
    );
  }
}

export default Jumbo;
