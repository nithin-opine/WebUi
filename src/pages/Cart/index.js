import React, { Component } from "react";
import {
  Container,
  Row,
  Col,
  Table,
  Input,
  InputGroup,
  InputGroupAddon,
  Button,
  Card,
  Form,
  FormGroup,
  Label,
  CardBody,
  CardTitle,
  CardSubtitle,
} from "reactstrap";
import { connect } from "react-redux";
import { withRouter, Link } from "react-router-dom";
import { getCart } from "../../store/actions";

class Cart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cartprice: "",
    };
  }
  componentDidMount() {
    const userid = localStorage.getItem("userid");
    this.props.getCart(5);
  }
  render() {
    console.log(this.props.cart_mirror);
    var rest_name = "";
    const cartArr = this.props.cart_mirror;
    var current_cart;
    var cp = "";
    if (typeof cartArr !== "undefined" && cartArr !== null) {
      current_cart = Object.keys(cartArr).map(function (key, index) {
        rest_name = cartArr[key].cartMerchantBranch.merchantBranchName;
        cp =
          cp +
          cartArr[key].itemPriceObj.priceonItemPrice * cartArr[key].cartQty;
        return (
          <Row className="cartrow mb-3">
            <Col md="8">
              <span className="itemname">
                {cartArr[key].cartMenuItem.itemName} (
                {cartArr[key].itemPriceObj.priceonItemTitle})
              </span>
              <br />₹ {cartArr[key].itemPriceObj.priceonItemPrice}
            </Col>
            <Col md="4">
              {" "}
              <InputGroup>
                <InputGroupAddon addonType="prepend">
                  <Button className="grpbtn" onClick={() => {}}>
                    +
                  </Button>
                </InputGroupAddon>
                <Input
                  type="text"
                  name="demo_vertical"
                  value={cartArr[key].cartQty}
                />
                <InputGroupAddon addonType="append">
                  <Button className="grpbtn" onClick={() => {}}>
                    -
                  </Button>
                </InputGroupAddon>
              </InputGroup>
            </Col>
          </Row>
        );
      });
    }

    return (
      <React.Fragment>
        <div className="page-content-inner">
          <Container fluid>
            <Row>
              <Col lx="8">
                <Card>
                  <CardBody>
                    <div>
                      <CardTitle>Payment information</CardTitle>
                      <CardSubtitle className="mb-3">
                        Fill all information below
                      </CardSubtitle>
                      <div>
                        <div className="custom-control custom-radio custom-control-inline mr-4">
                          <Input
                            type="radio"
                            value="1"
                            id="customRadioInline1"
                            name="customRadioInline1"
                            className="custom-control-input"
                          />
                          <Label
                            className="custom-control-label"
                            htmlFor="customRadioInline1"
                          >
                            <i className="fab fa-cc-mastercard mr-1 font-size-20 align-top"></i>{" "}
                            Credit / Debit Card
                          </Label>
                        </div>
                        <div className="custom-control custom-radio custom-control-inline mr-4">
                          <Input
                            type="radio"
                            value="2"
                            id="customRadioInline2"
                            name="customRadioInline1"
                            className="custom-control-input"
                          />
                          <Label
                            className="custom-control-label"
                            htmlFor="customRadioInline2"
                          >
                            <i className="fab fa-cc-paypal mr-1 font-size-20 align-top"></i>{" "}
                            Paypal
                          </Label>
                        </div>
                        <div className="custom-control custom-radio custom-control-inline mr-4">
                          <Input
                            type="radio"
                            value="3"
                            id="customRadioInline3"
                            defaultChecked
                            name="customRadioInline1"
                            className="custom-control-input"
                          />
                          <Label
                            className="custom-control-label"
                            htmlFor="customRadioInline3"
                          >
                            <i className="far fa-money-bill-alt mr-1 font-size-20 align-top"></i>{" "}
                            Cash on Delivery
                          </Label>
                        </div>
                      </div>

                      <h5 className="mt-5 mb-3 font-size-15">
                        For card Payment
                      </h5>
                      <div className="p-4 border">
                        <Form>
                          <FormGroup className="mb-0">
                            <Label htmlFor="cardnumberInput">Card Number</Label>
                            <Input
                              type="text"
                              className="form-control"
                              id="cardnumberInput"
                              placeholder="0000 0000 0000 0000"
                            />
                          </FormGroup>
                          <Row>
                            <Col lg="6">
                              <FormGroup className="mt-4 mb-0">
                                <Label htmlFor="cardnameInput">
                                  Name on card
                                </Label>
                                <Input
                                  type="text"
                                  className="form-control"
                                  id="cardnameInput"
                                  placeholder="Name on Card"
                                />
                              </FormGroup>
                            </Col>
                            <Col lg="3">
                              <FormGroup className=" mt-4 mb-0">
                                <Label htmlFor="expirydateInput">
                                  Expiry date
                                </Label>
                                <Input
                                  type="text"
                                  className="form-control"
                                  id="expirydateInput"
                                  placeholder="MM/YY"
                                />
                              </FormGroup>
                            </Col>
                            <Col lg="3">
                              <FormGroup className="mt-4 mb-0">
                                <Label htmlFor="cvvcodeInput">CVV Code</Label>
                                <Input
                                  type="text"
                                  className="form-control"
                                  id="cvvcodeInput"
                                  placeholder="Enter CVV Code"
                                />
                              </FormGroup>
                            </Col>
                          </Row>
                        </Form>
                      </div>
                    </div>
                  </CardBody>
                </Card>
              </Col>
              <Col xl="4">
                <Card>
                  <CardBody>
                    <CardTitle className="mb-4">{rest_name}</CardTitle>

                    {current_cart}
                  </CardBody>
                </Card>
                <Card>
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
                </Card>
                <Card>
                  <CardBody>
                    <CardTitle className="mb-3">Order Summary</CardTitle>

                    <div className="table-responsive">
                      <Table className="table mb-0">
                        <tbody>
                          <tr>
                            <td>Grand Total :</td>
                            <td>₹ {cp}</td>
                          </tr>
                          <tr>
                            <td>Discount : </td>
                            <td>- ₹ 157</td>
                          </tr>
                          <tr>
                            <td>Packaging and taxes: </td>
                            <td>₹ 19.22</td>
                          </tr>
                          <tr>
                            <td>Delivery Charge :</td>
                            <td>₹ 25</td>
                          </tr>

                          <tr>
                            <th>Grand Total :</th>
                            <th>₹ 1744.22</th>
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
  console.log("cart_mirror", cart_mirror);
  return { cart_mirror };
};

export default withRouter(connect(mapStatetoProps, { getCart })(Cart));
