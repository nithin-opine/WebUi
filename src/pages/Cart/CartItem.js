import Axios from "axios";
import React, { Component } from "react";
import {
  Row,
  Col,
  Input,
  InputGroup,
  InputGroupAddon,
  Button,
} from "reactstrap";
import axios from "axios";
import { connect } from "react-redux";
import { withRouter, Link } from "react-router-dom";
import { getCart } from "../../store/actions";

class CartItem extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.updateCart = this.updateCart.bind(this);
    this.removefromCart = this.removefromCart.bind(this);
  }
  componentDidMount() {
    this.setState({ itemqty: this.props.data.cartQty });
  }
  updateCart(item, qty) {
    const userid = localStorage.getItem("userid");
    if (this.state.itemqty >= 1) {
      console.log("updating", item, qty);
      axios.put(
        "https://annasree.com:8443/annasree-0.0.1-SNAPSHOT/api/public/update_cartqty/" +
          item +
          "/" +
          qty
      );
    }
  }
  removefromCart(id) {
    console.log("hello");
    axios.delete(
      " https://annasree.com:8443/annasree-0.0.1-SNAPSHOT/api/public/delete_cart/" +
        id
    );
  }
  render() {
    return (
      <Row className="cartrow mb-3">
        <Col md="8">
          <span className="itemname">{this.props.data.itemName}</span>
          <span className="menuqty">{this.props.data.priceOnType}</span>
          <br />₹ {this.props.data.cartItemFinalPrice}
          <br />{" "}
        </Col>
        <Col md="4">
          {" "}
          <InputGroup>
            <InputGroupAddon addonType="prepend">
              <Button
                className="grpbtn"
                onClick={() => {
                  this.setState({ itemqty: this.state.itemqty - 1 });
                }}
              >
                -
              </Button>
            </InputGroupAddon>

            <Input
              type="text"
              name="demo_vertical"
              value={this.state.itemqty}
              min="2"
              onChange={this.updateCart(
                this.props.data.cartId,
                this.state.itemqty
              )}
            />
            <InputGroupAddon addonType="append">
              <Button
                className="grpbtn"
                onClick={() => {
                  this.setState({ itemqty: this.state.itemqty + 1 });
                }}
              >
                +
              </Button>
            </InputGroupAddon>
          </InputGroup>
          <a
            href="#"
            className="removebtn text-right"
            onClick={() => {
              this.removefromCart(this.props.data.cartId);
            }}
          >
            Remove
          </a>
        </Col>
      </Row>
    );
  }
}

const mapStatetoProps = (state) => {
  console.log(state);
  const cart_mirror = state.Cart.cart.cart_data;
  return { cart_mirror };
};

export default withRouter(connect(mapStatetoProps, { getCart })(CartItem));
