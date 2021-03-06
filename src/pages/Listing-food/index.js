import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";
import { Link } from "react-router-dom";
import InnerpageAd from "./InnerpageAd";

import RestaurantList from "./RestaurantList";

//i18n
import { withNamespaces } from "react-i18next";
import ServiceSelector from "./ServiceSelector";

class ListingFood extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <React.Fragment>
        <div className="page-content-index">
          <InnerpageAd />
          <Container fluid>
            <Row>
              <Col xl="12 mt-4">
                <ServiceSelector />
              </Col>
            </Row>
            <Row>
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

export default withNamespaces()(ListingFood);
