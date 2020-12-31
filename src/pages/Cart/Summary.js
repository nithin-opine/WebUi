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
import { connect } from "react-redux";
import { withRouter, Link } from "react-router-dom";
import { getCart } from "../../store/actions";

class Summary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cartempty: "1",
      item_modal: false,
    };
  }
  componentDidMount() {
    this.interval = setInterval(() => {
      const userid = localStorage.getItem("userid");
      this.props.getCart(userid);
    }, 5000);
  }
  componentWillUnmount() {
    clearInterval(this.interval);
  }
  render() {
    var cart = this.props.cart_mirror;
    var cart_total,
      deli_charge = 0,
      tax,
      grand_total;
    if (typeof cart !== "undefined" && cart !== null) {
      if (cart.cartItemList !== null) {
        cart_total = cart.cartItemTotal;

        grand_total = cart.cartGrandTotal;

        deli_charge = cart.deliveryCharge === null ? 0 : cart.deliveryCharge;

        tax = cart.cartTaxAmount === null ? 0 : cart.cartTaxAmount;
      }
    }
    return (
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
    );
  }
}
const mapStatetoProps = (state) => {
  console.log(state);
  const cart_mirror = state.Cart.cart.cart_data;
  return { cart_mirror };
};

export default withRouter(connect(mapStatetoProps, { getCart })(Summary));
