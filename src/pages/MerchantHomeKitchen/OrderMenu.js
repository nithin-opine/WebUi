import React, { Component } from "react";
import { Row, Col, Modal } from "reactstrap";
import Rating from "react-rating";
import RatingTooltip from "react-rating-tooltip";
class OrderMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      item_modal: false,
      miid: "",
      menuitems: [
        {
          id: "MI234",
          name: "Arabian special mandhi",
          veg: false,
          rating: 4,
          price: 250,
          img:
            "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?ixlib=rb-1.2.1&w=1000&q=80",
          desc:
            "Lorem ipsum dolor sit amet dolor sit amet consectetur adispisc eit",
          schedulestart: "10:00 PM",
          customisable: true,
        },
      ],
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
    return (
      <React.Fragment>
        <Row>
          <Col md="4" className="menutags">
            <ul>
              <li className="activeli">
                <a href="">Starters</a>
              </li>
              <li>
                <a href="">Special combos</a>
              </li>
              <li>
                <a href="">Meals for one</a>
              </li>
              <li>
                <a href="">Breads</a>
              </li>
              <li>
                <a href="">Starters</a>
              </li>
              <li>
                <a href="">Special combos</a>
              </li>
              <li>
                <a href="">Meals for one</a>
              </li>
              <li>
                <a href="">Breads</a>
              </li>
            </ul>
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
                {this.state.menuitems.map((menuitem, id) => (
                  <Row className="menuitem" className="mt-3">
                    <Col md="8" className="menuleft">
                      <img
                        className="menuitemimg"
                        src={menuitem.img}
                        onClick={(id) => this.tog_item_modal(id)}
                      ></img>
                      <div className="menudesc">
                        <h4>{menuitem.name}</h4>
                        <div className="menurating">
                          <RatingTooltip
                            max={5}
                            onChange={(rate) =>
                              this.setState({ default: rate })
                            }
                            ActiveComponent={
                              <i
                                key={"active_1"}
                                className="mdi mdi-star text-primary"
                                style={this.state.starStyle}
                              />
                            }
                            InActiveComponent={
                              <i
                                key={"active_01"}
                                className="mdi mdi-star-outline text-muted"
                                style={this.state.starStyle}
                              />
                            }
                          />{" "}
                        </div>
                        <p>{menuitem.desc}</p>
                        <p>
                          <span className="hkwarning">
                            Schedule before {menuitem.schedulestart} to get it
                            tomorrow{" "}
                          </span>
                        </p>
                        <p>
                          <span className="price">₹ {menuitem.price}</span>
                        </p>
                      </div>
                    </Col>
                    <Col md="4" className="text-right">
                      <button className="menuaddbtn">Add</button> <br />
                      Customisable
                    </Col>
                  </Row>
                ))}
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
