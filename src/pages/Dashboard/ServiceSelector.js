import React, { Component } from "react";
import { Row, Col } from "reactstrap";
import { Link } from "react-router-dom";

class ServiceSelector extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <React.Fragment>
        <Row>
          <Col xl={{ size: 4, offset: 2 }}>
            <Link to="/listingfood">
              <div className="mainservicetab s1">
                <div className="serviceinfo">
                  <h4>Food</h4>
                  <p>Delicious Deals</p>
                </div>
              </div>
            </Link>
          </Col>
          <Col xl="4">
            <Link to="/listinggrocery">
              <div className="mainservicetab s2">
                <div className="serviceinfo">
                  <h4>Groceries</h4>
                  <p>Freshness at your doorstep</p>
                </div>
              </div>
            </Link>
          </Col>
        </Row>
      </React.Fragment>
    );
  }
}

export default ServiceSelector;
