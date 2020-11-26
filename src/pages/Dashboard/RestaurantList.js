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
      restaurantinfo: [
        {
          rid: "R1",
          rimg:
            "https://images.chinahighlights.com/allpicture/2019/01/482fb1f829ce4e6496b94fea_894x596.webp",
          rname: "Kallayees kitchen",
          rtags: "Arabian, Indian, Wraps, North Indian",
          rrating: 4.5,
          rdtime: 40,
          rcost: 250,
          rpromotion: false,
          rcoupon: "20% off | Use code ANNA2020",
        },
        {
          rid: "R2",
          rimg:
            "https://images.chinahighlights.com/allpicture/2019/01/482fb1f829ce4e6496b94fea_894x596.webp",
          rname: "Kayess Restaurant",
          rtags: "Arabian, Indian",
          rrating: 3.0,
          rdtime: 40,
          rcost: 150,
          rpromotion: false,
          rcoupon: "20% off | Use code ANNA2020",
        },
        {
          rid: "R1",
          rimg:
            "https://www.chicagofoodplanet.com/wp-content/uploads/2019/03/lous-pizza.png",
          rname: "Kallayees kitchen",
          rtags: "Arabian, Indian, Wraps, North Indian",
          rrating: 3.5,
          rdtime: 40,
          rcost: 250,
          rpromotion: true,
          rcoupon: "20% off | Use code ANNA2020",
        },
        {
          rid: "R2",
          rimg:
            "https://images.chinahighlights.com/allpicture/2019/01/482fb1f829ce4e6496b94fea_894x596.webp",
          rname: "Kayess Restaurant",
          rtags: "Arabian, Indian",
          rrating: 4.0,
          rdtime: 40,
          rcost: 150,
          rpromotion: true,
          rcoupon: "20% off | Use code ANNA2020",
        },
        {
          rid: "R1",
          rimg:
            "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/white-wine-coq-au-vin-1586056485.jpg?crop=0.879xw:0.699xh;0.0639xw,0.205xh&resize=640:",
          rname: "Kallayees kitchen",
          rtags: "Arabian, Indian, Wraps, North Indian",
          rrating: 4.5,
          rdtime: 40,
          rcost: 250,
          rpromotion: true,
          rcoupon: "20% off | Use code ANNA2020",
        },
        {
          rid: "R2",
          rimg:
            "https://www.chicagofoodplanet.com/wp-content/uploads/2019/03/lous-pizza.png",
          rname: "Kayess Restaurant",
          rtags: "Arabian, Indian",
          rrating: 3.0,
          rdtime: 40,
          rcost: 150,
          rpromotion: false,
          rcoupon: "20% off | Use code ANNA2020",
        },
        {
          rid: "R1",
          rimg:
            "https://images.chinahighlights.com/allpicture/2019/01/482fb1f829ce4e6496b94fea_894x596.webp",
          rname: "Kallayees kitchen",
          rtags: "Arabian, Indian, Wraps, North Indian",
          rrating: 2.5,
          rdtime: 40,
          rcost: 250,
          rpromotion: true,
          rcoupon: "20% off | Use code ANNA2020",
        },
        {
          rid: "R2",
          rimg:
            "https://www.chicagofoodplanet.com/wp-content/uploads/2019/03/lous-pizza.png",
          rname: "Kayess Restaurant",
          rtags: "Arabian, Indian",
          rrating: 3.2,
          rdtime: 40,
          rcost: 150,
          rpromotion: false,
          rcoupon: "20% off | Use code ANNA2020",
        },
        {
          rid: "R1",
          rimg:
            "https://images.chinahighlights.com/allpicture/2019/01/482fb1f829ce4e6496b94fea_894x596.webp",
          rname: "Kallayees kitchen",
          rtags: "Arabian, Indian, Wraps, North Indian",
          rrating: 1.5,
          rdtime: 40,
          rcost: 250,
          rpromotion: true,
          rcoupon: "20% off | Use code ANNA2020",
        },
        {
          rid: "R2",
          rimg:
            "https://www.chicagofoodplanet.com/wp-content/uploads/2019/03/lous-pizza.png",
          rname: "Kayess Restaurant",
          rtags: "Arabian, Indian",
          rrating: 3.0,
          rdtime: 40,
          rcost: 150,
          rpromotion: false,
          rcoupon: "20% off | Use code ANNA2020",
        },
        {
          rid: "R1",
          rimg:
            "https://images.chinahighlights.com/allpicture/2019/01/482fb1f829ce4e6496b94fea_894x596.webp",
          rname: "Kallayees kitchen",
          rtags: "Arabian, Indian, Wraps, North Indian",
          rrating: 4.5,
          rdtime: 40,
          rcost: 250,
          rpromotion: true,
          rcoupon: "20% off | Use code ANNA2020",
        },
        {
          rid: "R2",
          rimg:
            "https://www.chicagofoodplanet.com/wp-content/uploads/2019/03/lous-pizza.png",
          rname: "Kayess Restaurant",
          rtags: "Arabian, Indian",
          rrating: 3.2,
          rdtime: 40,
          rcost: 150,
          rpromotion: false,
          rcoupon: "20% off | Use code ANNA2020",
        },
      ],
    };
  }

  componentDidMount() {
    this.props.getVendors();
  }

  render() {
    return (
      <React.Fragment>
        {console.log("av props", this.props.vendorlist.Vendor.vendorlist)}
        <Row className="mt-4">
          <Col md="6">
            <h4>350 outlets near you</h4>
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
                  <Col md="3" className="restaurantwrapper">
                    <Row>
                      <Col md="12">
                        <div className="rest-img">
                          <img src={restaurant.rimg} alt="" />
                          <div className="delitime">
                            {restaurant.rdtime} mins
                          </div>
                          {restaurant.rpromotion ? (
                            <div className="promoted">Promoted</div>
                          ) : (
                            ""
                          )}
                        </div>
                      </Col>
                      <Col md="12">
                        <span className="rest-name">
                          {restaurant.merchantBranchName}
                        </span>
                      </Col>
                      <Col md="12">
                        <span className="rest-tags">{restaurant.rtags}</span>
                      </Col>
                      <Col md="12">
                        <Rating rating={restaurant.rrating} />{" "}
                        {restaurant.rcost} for two
                      </Col>
                      <Col md="12">
                        <hr />
                      </Col>
                      <Col md="12" className="rcoupon">
                        {restaurant.rcoupon}
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
  console.log("dsdsd", vendorlist.Vendor.vendorlist);
  return { vendorlist };
};
export default withRouter(
  connect(mapStatetoProps, { getVendors })(RestaurantList)
);
