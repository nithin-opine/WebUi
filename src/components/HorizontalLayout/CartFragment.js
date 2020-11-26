import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";

class CartFragment extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <React.Fragment>
        <div className="cartfragment">
          <Container fluid>
            <Row>
              <Col md="12" className="text-right">
                <h5 className="ordersummary">Your order (1)</h5>
                <h5>Subtotal : ₹ 250 </h5>
                <button className="checkoutbtn">Checkout</button>
              </Col>
            </Row>
          </Container>
        </div>
      </React.Fragment>
    );
  }
}

export default CartFragment;
