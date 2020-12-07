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
                  <h4>Restaurants</h4>
                  <p>Delicious Deals</p>
                  <p className="mt-5">
                    View all{" "}
                    <i className="mdi mdi-arrow-right-bold-circle-outline ml-1"></i>
                  </p>
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
                  <p className="mt-5">
                    View all{" "}
                    <i className="mdi mdi-arrow-right-bold-circle-outline ml-1"></i>
                  </p>
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
