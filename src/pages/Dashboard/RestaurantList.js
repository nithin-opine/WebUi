import { auth } from "firebase";
import React, { Component } from "react";
import { Row, Col } from "reactstrap";
import Rating from "./Rating";
import axios from "axios";
import { connect } from "react-redux";
import { withRouter, Link } from "react-router-dom";
import { getVendors } from "../../store/actions";

class RestaurantList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filter: 0,
    };
  }

  componentDidMount() {
    this.props.getVendors(this.props.match.params.id);
  }

  render() {
    return (
      <React.Fragment>
        <Row className="mt-4">
          <Col md="6">
            <h4>
              {Object.keys(this.props.vendorlist.Vendor.vendorlist).length}{" "}
              outlets near you
            </h4>
          </Col>
          <Col md="6" className="text-right rlistfilters">
            <a>Relevance</a>
            <a href="#" className="filteractive">
              Cost for two
            </a>
            <a href="">Delivery time</a>
            <a href="#">Rating</a>
          </Col>
          <Col md="12">
            <hr />
          </Col>
          <Col md="12">
            <Row className="mt-1 restaurantlist">
              {this.props.vendorlist.Vendor.vendorlist.map(
                (restaurant, merchantBranchId) => (
                  <Col
                    md="3"
                    className="restaurantwrapper"
                    key={restaurant.merchantBranchId}
                  >
                    <Row>
                      <Col md="12">
                        <Link to={"/merchant/" + restaurant.merchantBranchId}>
                          <div className="rest-img">
                            <img
                              src="https://www.helpguide.org/wp-content/uploads/fast-foods-candy-cookies-pastries-768.jpg"
                              alt=""
                            />
                            <div className="delitime">
                              {restaurant.merchantBranchOrderTime} mins
                            </div>
                            {restaurant.rpromotion ? (
                              <div className="promoted">Promoted</div>
                            ) : (
                              ""
                            )}
                          </div>
                        </Link>
                      </Col>
                      <Col md="12">
                        <span className="rest-name">
                          {restaurant.merchantBranchName}{" "}
                          {restaurant.isAnnasreeCertified ? (
                            <i className="certiifedicon mdi mdi-check-decagram">
                              {" "}
                            </i>
                          ) : (
                            ""
                          )}
                        </span>
                      </Col>
                      <Col md="12">
                        <span className="rest-tags">
                          Arabic, Continental, Chinese
                        </span>
                      </Col>
                      <Col md="12">
                        <Rating
                          rating={Math.floor(Math.random() * (5 - 0) + 0)}
                        />{" "}
                        ₹ {restaurant.merchantBranchMinWalletAmnt} for two
                      </Col>
                      <Col md="12">
                        <hr />
                      </Col>
                      <Col md="12" className="rcoupon">
                        ANNAWEB 2020 for 20% OFF
                      </Col>
                    </Row>
                  </Col>
                )
              )}
            </Row>
          </Col>
        </Row>
      </React.Fragment>
    );
  }
}

const mapStatetoProps = (state) => {
  const vendorlist = state;
  console.log(vendorlist);
  return { vendorlist };
};
export default withRouter(
  connect(mapStatetoProps, { getVendors })(RestaurantList)
);
