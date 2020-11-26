import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";
import { Link } from "react-router-dom";
import Jumbo from "./Jumbo";

import ServiceSelector from "./ServiceSelector";
import InnerpageAd from "./InnerpageAd";
import RestaurantList from "./RestaurantList";

//i18n
import { withNamespaces } from "react-i18next";

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <React.Fragment>
        <Jumbo />
        <div className="page-content-index">
          <Container fluid>
            <Row>
              <Col xl="12">
                <ServiceSelector />
              </Col>
              <Col xl="12 mt-4">
                <RestaurantList />
              </Col>
            </Row>
          </Container>
        </div>
      </React.Fragment>
    );
  }
}

export default withNamespaces()(Dashboard);
