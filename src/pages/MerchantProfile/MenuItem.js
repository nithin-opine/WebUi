import React, { Component } from "react";
import { Row, Col, Modal, Alert, InputGroup, Button } from "reactstrap";
import { getItemDetails } from "../../store/actions";
import { connect } from "react-redux";
import { withRouter, Link } from "react-router-dom";
import {
  AvForm,
  AvField,
  AvInput,
  AvRadio,
  AvRadioGroup,
  AvCheckbox,
  AvCheckboxGroup,
} from "availity-reactstrap-validation";
import { apiPost } from "../../config/apiConfig";
import { BaseUrl } from "../../config/BaseUrl";
class MenuItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      item_modal: false,
      data_attr: 1,
      custom_modal: false,
      miid: "",
      menuitems: [],
    };
    this.tog_item_modal = this.tog_item_modal.bind(this);
    this.tog_custom_modal = this.tog_custom_modal.bind(this);
    this.handle_item_add = this.handle_item_add.bind(this);
    this.handleValidSubmit = this.handleValidSubmit.bind(this);
  }
  tog_item_modal() {
    this.setState((prevState) => ({
      item_modal: !prevState.item_modal,
      miid: 0,
    }));
    this.removeBodyCss();
  }
  tog_custom_modal() {
    this.setState((prevState) => ({
      custom_modal: !prevState.custom_modal,
    }));
    this.removeBodyCss();
  }
  handle_item_add(itemid, rid) {
    this.props.getItemDetails(itemid, rid);

    this.tog_custom_modal();
  }
  async handleValidSubmit(event, values) {
    const url = BaseUrl.apiUrl.baseUrl + "api/public/add_cart";
    values.cartAddons = values.cartAddons.toString();
    console.log(url, values);
    const response = await apiPost(url, values);
    console.log(" add cart response is", response);
    this.tog_custom_modal();
  }

  removeBodyCss() {
    document.body.classList.add("no_padding");
  }
  render() {
    const myObj = this.props.item_mirror.itemdetails;
    var priceObj;
    var pricelist;
    var uid = localStorage.getItem("userid");
    if (typeof myObj !== "undefined" && myObj !== null) {
      priceObj = myObj.priceOnList;
      if (typeof priceObj !== "undefined" && priceObj !== null) {
        pricelist = Object.keys(priceObj).map(function (key, index) {
          return (
            <>
              <Row>
                <Col md="6">
                  <AvRadio
                    label={priceObj[key].priceonItemTitle}
                    value={priceObj[key].priceonId}
                  />
                </Col>
                <Col md="6" className="text-right">
                  <j>₹ {priceObj[key].priceonItemPrice}</j>
                </Col>
              </Row>
            </>
          );
        });
      }
    }
    var addonObj;
    var subObj;
    var addonlist;
    if (typeof myObj !== "undefined" && myObj !== null) {
      addonObj = myObj.addonsList;
      if (typeof addonObj !== "undefined" && addonObj !== null) {
        Object.keys(addonObj).map(function (key, index) {
          subObj = addonObj[key].addonsSubTitleList;
          addonlist = Object.keys(subObj).map(function (key1, index) {
            return (
              <>
                <Row>
                  <Col md="8">
                    <AvCheckbox
                      label={subObj[key1].addonsSubTitleName}
                      value={subObj[key1].addonsSubTitleId}
                    />
                  </Col>
                  <Col md="4" className="text-right">
                    <j>₹ {subObj[key1].addonsSubTitlePrice}</j>
                  </Col>
                </Row>
              </>
            );
          });
        });
      }
    }
    return (
      <Row className="menuitem" className="mt-3">
        <Col md="9" className="menuleft">
          <Row>
            <Col md="3">
              <div className="menuimgwrap">
                <img
                  className="menuitemimg"
                  src="https://www.reachaccountant.com/wp-content/uploads/2018/01/placeit.png"
                  onClick={this.tog_item_modal}
                ></img>
              </div>
            </Col>
            <Col md="9">
              <div className="menudesc">
                <h4>{this.props.data.itemName}</h4>
                <p>{this.props.data.itemDescription}</p>
                <p>
                  <span className="hkwarning">
                    Schedule before 10PM to get it tomorrow{" "}
                  </span>
                </p>
                <p>
                  <span className="price">₹ {this.props.data.itemPrice}</span>
                </p>
              </div>
            </Col>
            <Modal
              isOpen={this.state.item_modal}
              toggle={this.tog_item_modal}
              centered={true}
            >
              <div className="modal-header">
                <h5 className="modal-title mt-0">{this.props.data.itemName}</h5>
                <button
                  type="button"
                  onClick={this.tog_item_modal}
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                <Row>
                  <Col md="4" className="modalimg">
                    <img
                      src="https://bigoven-res.cloudinary.com/image/upload/d_recipe-no-image.jpg,t_recipe-256/double-cheese-burger-with-chips.jpg"
                      className="img"
                      alt=""
                    />
                  </Col>
                  <Col md="8">{this.props.data.itemDescription}</Col>
                </Row>
              </div>
            </Modal>
            <Modal
              isOpen={this.state.custom_modal}
              toggle={this.tog_custom_modal}
              centered={true}
              className="itemcustommodal"
            >
              <div className="modal-header">
                <h5 className="modal-title mt-0">{this.props.data.itemName}</h5>
                <button
                  type="button"
                  onClick={this.tog_custom_modal}
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body ">
                <Row>
                  <Col md="12">
                    <AvForm
                      className="form-horizontal"
                      onValidSubmit={this.handleValidSubmit}
                    >
                      {this.props.error && this.props.error ? (
                        <Alert color="danger">{this.props.error}</Alert>
                      ) : null}

                      <div className="form-group">
                        {}
                        <AvRadioGroup
                          name="cartPriceOnId"
                          label="Select quantity"
                          errorMessage="Pick one!"
                        >
                          <AvRadio label="Regular" value="0" checked />

                          {pricelist}
                        </AvRadioGroup>

                        <AvCheckboxGroup
                          name="cartAddons"
                          label="select any addons"
                        >
                          {addonlist}
                        </AvCheckboxGroup>
                        <AvInput
                          type="number"
                          className="form-control"
                          value={this.props.data.itemId}
                          placeholder="number"
                          name="itemId"
                          hidden
                        />
                        <AvInput
                          type="number"
                          className="form-control"
                          value="1"
                          placeholder="number"
                          name="areaId"
                          hidden
                        />
                        <AvInput
                          type="number"
                          className="form-control"
                          value={this.props.branchId}
                          placeholder="number"
                          name="branchId"
                          hidden
                        />
                        <AvInput
                          type="number"
                          className="form-control"
                          value="1"
                          placeholder="number"
                          name="cartGuestId"
                          hidden
                        />
                        <AvInput
                          type="text"
                          className="form-control"
                          value="spl"
                          placeholder="number"
                          name="cartSpecialRequest"
                          hidden
                        />

                        <AvInput
                          type="number"
                          className="form-control"
                          value={uid}
                          placeholder="number"
                          name="userId"
                          hidden
                        />
                        <div className="mt-3">
                          <Row>
                            <Col md="6">
                              <InputGroup>
                                <div
                                  className="input-group-append"
                                  onClick={() =>
                                    this.setState({
                                      data_attr: this.state.data_attr - 1,
                                    })
                                  }
                                >
                                  <Button type="button" color="primary">
                                    <i className="mdi mdi-minus"></i>
                                  </Button>
                                </div>
                                <AvInput
                                  type="number"
                                  className="form-control"
                                  value={this.state.data_attr}
                                  placeholder="number"
                                  name="cartQty"
                                  readOnly
                                />
                                <div
                                  className="input-group-append"
                                  onClick={() =>
                                    this.setState({
                                      data_attr: this.state.data_attr + 1,
                                    })
                                  }
                                >
                                  <Button type="button" color="primary">
                                    <i className="mdi mdi-plus"></i>
                                  </Button>
                                </div>
                              </InputGroup>
                            </Col>
                            <Col md="6">
                              <button
                                className="btn btn-primary btn-block waves-effect waves-light"
                                type="submit"
                              >
                                Add to cart
                              </button>
                            </Col>
                          </Row>
                        </div>
                      </div>
                    </AvForm>
                  </Col>
                </Row>
              </div>
            </Modal>
          </Row>
        </Col>
        <Col md="3" className="text-right">
          <button
            className="menuaddbtn"
            onClick={() => {
              this.handle_item_add(this.props.data.itemId, this.props.rid);
            }}
          >
            Add
          </button>{" "}
          <br />
          Customisable
        </Col>
      </Row>
    );
  }
}

const mapStatetoProps = (state) => {
  const branchId = state.Vendor.vendordetails.merchantBranchId;
  const item_mirror = state.Vendor.itemdetails;
  return { item_mirror, branchId };
};
export default withRouter(
  connect(mapStatetoProps, { getItemDetails })(MenuItem)
);
