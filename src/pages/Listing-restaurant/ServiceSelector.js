import React, { Component } from "react";
import { Row, Col } from "reactstrap";

class ServiceSelector extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <React.Fragment>
        <Row className="mt-2">
          <Col xl="4">
            <div className="mainservicetab s1">
              <div className="serviceinfo">
                <h4>Restaurants</h4>
                <p>Delicious Deals</p>
              </div>
            </div>
          </Col>
          <Col xl="4">
            <div className="mainservicetab s2">
              <div className="serviceinfo">
                <h4>Home kitchens</h4>
                <p>Good things have to wait</p>
              </div>
            </div>
          </Col>
          <Col xl="4">
            <div className="mainservicetab s2">
              <div className="serviceinfo">
                <h4>Cloud kitchens</h4>
                <p>Lorem ipsum dolor</p>
              </div>
            </div>
          </Col>
        </Row>
      </React.Fragment>
    );
  }
}

export default ServiceSelector;
