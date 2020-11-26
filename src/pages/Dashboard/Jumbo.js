import React, { Component } from "react";

class Jumbo extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <React.Fragment>
        <div className="jumbo">
          <h2 className="text-center">
            Lorem ipsum dolor sit amet consectetur
          </h2>
          <h5 className="text-center">
            Lorem ipsum dolor sit amet consectetur
          </h5>
          <div className="jumbo-search">
            <input placeholder=""></input>
            <button>Search</button>
          </div>
          <img
            src="https://images.pexels.com/photos/842571/pexels-photo-842571.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
            alt=""
            className="img-responsive"
          />
        </div>
      </React.Fragment>
    );
  }
}

export default Jumbo;
