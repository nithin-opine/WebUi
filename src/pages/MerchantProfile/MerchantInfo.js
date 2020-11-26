import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";
import { Link } from "react-router-dom";

class MerchantInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div class="merchanttopbar">
        <Container fluid>
          <Row>
            <Col md="3">
              <div className="restmainimg">
                <img
                  src="https://img.freepik.com/free-photo/side-view-doner-with-grilled-chicken-greens-lettuce-tomato-french-fries-table_141793-4881.jpg?size=626&ext=jpg"
                  alt=""
                />
              </div>
            </Col>
            <Col md="6" className="restmaininfo">
              <h3>{this.props.props.vendordetails.merchantBranchName}</h3>
              <span className="restags">
                North Indian, Indian, Wraps, Continental
              </span>
              <span className="restloca mt-2">
                {this.props.props.vendordetails.merchantBranchAddress} ,
                {this.props.props.vendordetails.merchantBranchBankBranch}{" "}
              </span>
              <Row className="mt-3">
                <Col md="3" className="reststats">
                  3.7
                  <span>200+ reviews</span>
                </Col>
                <Col md="3" className="reststats">
                  43 mins
                  <span>Delivery time</span>
                </Col>
                <Col md="3" className="reststats">
                  300
                  <span>for two</span>
                </Col>
                <Col md="3" className="reststats">
                  Certified
                  <span>by Annasree</span>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default MerchantInfo;
