import React, { Component } from "react";
import { Row, Col, Modal } from "reactstrap";
import MenuItem from "./MenuItem";

class OrderMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      item_modal: false,
      miid: "",
      menuitems: [],
    };
    this.tog_item_modal = this.tog_item_modal.bind(this);
  }
  tog_item_modal(id) {
    this.setState((prevState) => ({
      item_modal: !prevState.item_modal,
      miid: 0,
    }));
    this.removeBodyCss();
  }
  removeBodyCss() {
    document.body.classList.add("no_padding");
  }

  render() {
    const myObj = this.props.props.vendordetails.categoryObj;
    const rid = this.props.props.vendordetails.merchantBranchId;
    var categories;
    if (this.props.props.vendordetails.categoryObj) {
      if (typeof myObj !== "undefined" && myObj !== null) {
        categories = Object.keys(myObj).map(function (key, index) {
          return (
            <li key={key}>
              <a href={"#" + myObj[key].categoryName}>
                {myObj[key].categoryName}{" "}
              </a>
            </li>
          );
        });
      }
    }

    var menuObj;
    var menuitemlist;
    if (this.props.props.vendordetails.categoryObj) {
      if (typeof myObj !== "undefined" && myObj !== null) {
        menuitemlist = Object.keys(myObj).map(function (key, index) {
          menuObj = myObj[key].menuitemsObj;

          return Object.keys(menuObj).map(function (key1, index) {
            return (
              <>
                <a href="#" id={myObj[key].categoryName}>
                  {" "}
                </a>
                <MenuItem data={menuObj[key1]} rid={rid} />
              </>
            );
          });
        });
      }
    }

    return (
      <React.Fragment>
        <Row>
          <Col md="4" className="menutags">
            <ul>{categories}</ul>
          </Col>
          <Col md="8" className="menutoadd">
            <Row>
              <Col md="4" className="menusearch">
                <input></input>
              </Col>

              <Col md="8" className="text-right rlistfilters">
                <span>
                  <i className="bx bx-filter"></i>{" "}
                </span>
                <a>Relevance</a>
                <a href="#" className="filteractive">
                  Cost for two
                </a>
                <a href="">Delivery time</a>
                <a href="#">Rating</a>
              </Col>
              <Col md="12" className="menutoaddwrapper">
                {menuitemlist}
                <Modal
                  isOpen={this.state.item_modal}
                  toggle={this.tog_item_modal}
                  centered={true}
                >
                  <div className="modal-header">
                    <h5 className="modal-title mt-0">Arabian special mandhi</h5>
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
                          src="https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?ixlib=rb-1.2.1&w=1000&q=80"
                          className="img"
                          alt=""
                        />
                      </Col>
                      <Col md="8">
                        Lorem ipsum dolor sit amert consectetur adipsiicng elit
                        set duo euis mod tempor consectetur adipsiicng elit set
                        duo euis mod tempor consectetur adipsiicng elit set duo
                        euis mod tempor
                      </Col>
                    </Row>
                  </div>
                </Modal>
              </Col>
            </Row>
          </Col>
        </Row>
      </React.Fragment>
    );
  }
}

export default OrderMenu;
