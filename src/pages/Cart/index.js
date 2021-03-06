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
import Summary from "./Summary";
// this.options = {
//   'key': 'rzp_test_QDmubH5QzhntWX', //test
//   // 'key': 'rzp_live_zmGjmxou23uOR6', //live
//   'name': '',
//   'description': 'Place Order',
//   'handler': function (response) {
//     blockUI.start();
//     this.checkoutItemId = [];
//     for (var i = 0; i < $rootScope.cartItems.length; i++) {
//       if ($rootScope.cartItems[i].product_details.is_published != "UA" || $rootScope.cartItems[i].product_details.is_published != "OS")
//       this.checkoutItemId.push($rootScope.cartItems[i].id)
//     }
//     this.data = {
//       orders: this.checkoutItemId,
//       status: 'PD',
//       payment_id: response.razorpay_payment_id,
//       from_wallet: $rootScope.walletDataa,
//       payment_method : 'OP'
//     }
//     $rootScope.CartSrv.checkout(this.data, (resp) => {
//       cartStorage.cart.items = [];
//       $state.go('medigen.profile')
//       blockUI.stop();
//     })
//     // $rootScope.updateWallet();
//   },
//   "prefill": {
//     "name": ""
//   },
//   "notes": {
//     "address": ""
//   },
//   "theme": {
//     "color": "#F37254"
//   }
// };

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
      "https://annasree.com:8443/annasree-0.0.1-SNAPSHOT/api/public/update_cartqty/" +
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
  handleValidSubmit(event, values) {
    const userid = localStorage.getItem("userid");
    let scope= this
    var options =
 {
  "key": "rzp_test_rA3CKJfzVEtcEM", // Enter the Key ID generated from the Dashboard
  "amount": "100", // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
  "currency": "INR",
  "name": "Annasree",
  "description": "Test Transaction",
  "handler": function (response){
    console.log("dddd", values);
    axios.post(
      "https://annasree.com:8443/annasree-0.0.1-SNAPSHOT/api/public/checkout/",
      {
        userId: userid,
        addressId: 128,
        mobile: values.addressMobileNo,
        paymentMode: "0",
        emailId: "nisha.selene@gmail.com",
        packageType: "",
        deliveryType: "",
        merchantBranch: values.merchantBranch,
        areaId: "513",
        cityId: "13",
        landlineNo: "5661099",
        propertyType: "1",
        street: values.street,
        additionalDirection: values.additionalDirection,
        apartmentFlour: "1",
        addressTitle: "G",
        apartmentNo: values.apartmentNo,
        couponStatus: "1",
        couponId: 13,
        scheduledDeliveryTime: "2020-11-28T09:00:00",
      }
    );
    scope.tog_item_modal();
    setTimeout(function () {
      window.location.reload(false);
    }, 5000);
  },
  "prefill": {
      "name": "Gaurav Kumar",
      "email": "gaurav.kumar@example.com",
      "contact": "9999999999"
  },
  "notes": {
      "address": "Razorpay Corporate Office"
  },
  "theme": {
      "color": "#3399cc"
  }
};
    let rzp = new window.Razorpay(options);
    rzp.open()
    
  }
  render() {
    var cart = this.props.cart_mirror;
    var cart_rest_id;
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
        cart_rest_id = cart.cartRestaurantId;
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
                                Registered number
                              </Label>
                              <AvField
                                type="text"
                                name="addressMobileNo"
                                className="form-control"
                                id="addressMobileNo"
                                placeholder=""
                                value={localStorage.getItem("username")}
                              />
                            </FormGroup>
                          </Col>
                          <Col lg="5">
                            <FormGroup className="mt-2 mb-0">
                              <AvField
                                type="text"
                                name="merchantBranch"
                                className="form-control"
                                id="merchantBranch"
                                placeholder=""
                                value={cart_rest_id}
                                hidden
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
                <Summary />
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
