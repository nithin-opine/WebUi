import React, { Component } from "react";
import {
  Container,
  Row,
  Col,
  Table,
  Input,
  Button,
  Card,
  FormGroup,
  Label,
  CardBody,
  CardTitle,
  Alert,
  Modal,
} from "reactstrap";
import { AvForm, AvField } from "availity-reactstrap-validation";
import Logo from "../../assets/images/annalogocolor.png";
import { connect } from "react-redux";
import { withRouter, Link } from "react-router-dom";
import { getCart } from "../../store/actions";
import axios from "axios";
import CartItem from "./CartItem";
class Cart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cartempty: "1",
      item_modal: false,
    };
    this.tog_item_modal = this.tog_item_modal.bind(this);
    this.updateCartQty = this.updateCartQty.bind(this);
    this.handleValidSubmit = this.handleValidSubmit.bind(this);
  }
  updateCartQty(cartid, qty) {
    console.log(cartid, qty);
    axios.put(
      "http://207.180.228.92:8080/annasree-0.0.1-SNAPSHOT/api/public/update_cartqty/" +
        cartid +
        "/" +
        qty
    );
  }
  tog_item_modal() {
    this.setState((prevState) => ({
      item_modal: !prevState.item_modal,
      miid: 0,
    }));
  }
  componentDidMount() {
    const userid = localStorage.getItem("userid");
    this.props.getCart(userid);
  }
  handleValidSubmit() {
    const userid = localStorage.getItem("userid");
    axios.post(
      "http://207.180.228.92:8080/annasree-0.0.1-SNAPSHOT/api/public/checkout/",
      {
        userId: userid,
        addressId: 0,
        mobile: "9895468440",
        paymentMode: "0",
        emailId: "nisha.selene@gmail.com",
        packageType: "",
        deliveryType: "",
        merchantBranch: "54",
        areaId: "513",
        cityId: "13",
        landlineNo: "5661099",
        propertyType: "1",
        apartmentFlour: "1",
        addressTitle: "G",
        couponStatus: "1",
        couponId: 13,
        scheduledDeliveryTime: "2020-11-28T09:00:00",
      }
    );
    this.tog_item_modal();
    setTimeout(function () {
      window.location.reload(false);
    }, 5000);
  }
  render() {
    var cart = this.props.cart_mirror;

    var rest_name = "";
    var cart_list = <CardTitle>Cart is empty</CardTitle>;
    var cart_total,
      deli_charge = 0,
      tax,
      grand_total;

    var qty = 0;
    if (typeof cart !== "undefined" && cart !== null) {
      if (cart.cartItemList !== null) {
        rest_name = cart.restaurantDetails.merchantBranchName;
        cart_total = cart.cartItemTotal;
        grand_total = cart.cartGrandTotal;
        deli_charge = cart.deliveryCharge === null ? 0 : cart.deliveryCharge;
        tax = cart.cartTaxAmount === null ? 0 : cart.cartTaxAmount;

        cart_list = Object.keys(cart.cartItemList).map(function (key, index) {
          return <CartItem data={cart.cartItemList[key]} />;
        });
      }
    }

    return (
      <React.Fragment>
        <div className="page-content-inner">
          <Container fluid>
            <Row>
              <Col lx="8">
                <Card>
                  <AvForm
                    className="form-horizontal"
                    onValidSubmit={this.handleValidSubmit}
                  >
                    {this.props.error && this.props.error ? (
                      <Alert color="danger">{this.props.error}</Alert>
                    ) : null}
                    <CardBody>
                      <div>
                        <CardTitle>Delivery information</CardTitle>
                        <Row>
                          <Col lg="5">
                            <FormGroup className="mt-4 mb-0">
                              <Label htmlFor="street">Lane / Street name</Label>
                              <AvField
                                type="text"
                                name="street"
                                className="form-control"
                                id="street"
                                placeholder=""
                                required
                              />
                            </FormGroup>
                          </Col>
                          <Col lg="4">
                            <FormGroup className=" mt-4 mb-0">
                              <Label htmlFor="apartmentNo">
                                Building number
                              </Label>
                              <AvField
                                type="text"
                                name="apartmentNo"
                                className="form-control"
                                id="apartmentNo"
                                placeholder=""
                                required
                              />
                            </FormGroup>
                          </Col>
                          <Col lg="3">
                            <FormGroup className="mt-4 mb-0">
                              <Label htmlFor="city">City</Label>
                              <Input
                                type="text"
                                className="form-control"
                                id="city"
                              />
                            </FormGroup>
                          </Col>
                        </Row>
                        <Row>
                          <Col lg="7">
                            <FormGroup className="mt-2 mb-0">
                              <Label htmlFor="additionalDirection">
                                Additional landmarks
                              </Label>
                              <Input
                                type="text"
                                className="form-control"
                                id="additionalDirection"
                                placeholder=""
                              />
                            </FormGroup>
                          </Col>
                          <Col lg="5">
                            <FormGroup className="mt-2 mb-0">
                              <Label htmlFor="addressMobileNo">
                                Contact number
                              </Label>
                              <Input
                                type="text"
                                className="form-control"
                                id="addressMobileNo"
                                placeholder=""
                              />
                            </FormGroup>
                          </Col>
                        </Row>
                        <Row>
                          <Col lg="3">
                            <Button type="submit" className="mt-4">
                              Checkout
                            </Button>
                          </Col>
                        </Row>
                      </div>
                    </CardBody>
                    <Modal
                      isOpen={this.state.item_modal}
                      toggle={this.tog_item_modal}
                      centered={true}
                      className="acceptedmodal"
                    >
                      <img src={Logo} alt="" />
                      Order accepted !
                    </Modal>
                  </AvForm>
                </Card>
              </Col>
              <Col xl="4">
                <Card>
                  <CardBody>
                    <CardTitle className="mb-4">{rest_name}</CardTitle>
                    {cart_list}
                  </CardBody>
                </Card>

                {/* <Card>
                  <CardBody>
                    <CardTitle className="mb-4">
                      Schedule your delivery
                    </CardTitle>

                    <Row className="cartrow">
                      <Col md="12">
                        Select date and time for receiving your delivery.
                      </Col>
                      <Col md="6" className="mt-3">
                        <Input type="date"></Input>
                      </Col>
                      <Col md="6" className="mt-3">
                        <Input type="time"></Input>
                      </Col>
                    </Row>
                  </CardBody>
               </Card> */}

                <Card>
                  <CardBody>
                    <CardTitle className="mb-3">Order Summary</CardTitle>

                    <div className="table-responsive">
                      <Table className="table mb-0">
                        <tbody>
                          <tr>
                            <td>Cart Total :</td>
                            <td>₹ {cart_total}</td>
                          </tr>

                          <tr>
                            <td>Packaging and taxes: </td>
                            <td>₹ {tax}</td>
                          </tr>
                          <tr>
                            <td>Delivery Charge : </td>
                            <td>₹ {deli_charge}</td>
                          </tr>

                          <tr>
                            <th>Grand Total :</th>
                            <th>₹ {grand_total}</th>
                          </tr>
                        </tbody>
                      </Table>
                    </div>
                  </CardBody>
                </Card>
              </Col>
            </Row>
          </Container>
        </div>
      </React.Fragment>
    );
  }
}

const mapStatetoProps = (state) => {
  console.log(state);
  const cart_mirror = state.Cart.cart.cart_data;
  return { cart_mirror };
};

export default withRouter(connect(mapStatetoProps, { getCart })(Cart));
