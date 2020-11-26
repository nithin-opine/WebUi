import React, { Component } from "react";
import {
  TabContent,
  TabPane,
  Collapse,
  NavLink,
  NavItem,
  CardText,
  Nav,
  Card,
  Row,
  Col,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardHeader,
  Container,
} from "reactstrap";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { Link } from "react-router-dom";
import classnames from "classnames";
//i18n
import { withNamespaces } from "react-i18next";
import MerchantInfo from "./MerchantInfo";
import OrderMenu from "./OrderMenu";
import { getVendorDetails } from "../../store/actions";

class MerchantProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      customActiveTab: "1",
    };
    this.toggleCustom = this.toggleCustom.bind(this);
  }

  toggleCustom(tab) {
    if (this.state.customActiveTab !== tab) {
      this.setState({
        customActiveTab: tab,
      });
    }
  }
  componentDidMount() {
    this.props.getVendorDetails(this.props.match.params.id);
  }
  render() {
    return (
      <React.Fragment>
        <MerchantInfo props={this.props.vendordetails.Vendor} />
        {console.log("jj", this.props.vendordetails.Vendor)}
        <Container fluid>
          <Row>
            <div className="page">
              <Col lg={12}>
                <Card>
                  <CardBody>
                    <Nav tabs className="nav-tabs-custom">
                      <NavItem>
                        <NavLink
                          style={{ cursor: "pointer" }}
                          className={classnames({
                            active: this.state.customActiveTab === "1",
                          })}
                          onClick={() => {
                            this.toggleCustom("1");
                          }}
                        >
                          <span className="d-none d-sm-block">
                            Order food online
                          </span>
                        </NavLink>
                      </NavItem>
                      <NavItem>
                        <NavLink
                          style={{ cursor: "pointer" }}
                          className={classnames({
                            active: this.state.customActiveTab === "2",
                          })}
                          onClick={() => {
                            this.toggleCustom("2");
                          }}
                        >
                          <span className="d-none d-sm-block">Reviews</span>
                        </NavLink>
                      </NavItem>
                      <NavItem>
                        <NavLink
                          style={{ cursor: "pointer" }}
                          className={classnames({
                            active: this.state.customActiveTab === "3",
                          })}
                          onClick={() => {
                            this.toggleCustom("3");
                          }}
                        >
                          <span className="d-none d-sm-block">Photos</span>
                        </NavLink>
                      </NavItem>
                      <NavItem>
                        <NavLink
                          style={{ cursor: "pointer" }}
                          className={classnames({
                            active: this.state.customActiveTab === "4",
                          })}
                          onClick={() => {
                            this.toggleCustom("4");
                          }}
                        ></NavLink>
                      </NavItem>
                    </Nav>

                    <TabContent activeTab={this.state.customActiveTab}>
                      <TabPane tabId="1" className="p-3">
                        <Row>
                          <Col sm="12">
                            <CardText>
                              <OrderMenu
                                props={this.props.vendordetails.Vendor}
                              />
                            </CardText>
                          </Col>
                        </Row>
                      </TabPane>
                      <TabPane tabId="2" className="p-3">
                        <Row>
                          <Col sm="12">
                            <CardText>
                              Food truck fixie locavore, accusamus mcsweeney's
                              marfa nulla single-origin coffee squid.
                              Exercitation +1 labore velit, blog sartorial PBR
                              leggings next level wes anderson artisan four loko
                              farm-to-table craft beer twee. Qui photo booth
                              letterpress, commodo enim craft beer mlkshk
                              aliquip jean shorts ullamco ad vinyl cillum PBR.
                              Homo nostrud organic, assumenda labore aesthetic
                              magna delectus mollit. Keytar helvetica VHS salvia
                              yr, vero magna velit sapiente labore stumptown.
                              Vegan fanny pack odio cillum wes anderson 8-bit.
                            </CardText>
                          </Col>
                        </Row>
                      </TabPane>
                      <TabPane tabId="3" className="p-3">
                        <Row>
                          <Col sm="12">
                            <CardText>
                              Etsy mixtape wayfarers, ethical wes anderson tofu
                              before they sold out mcsweeney's organic lomo
                              retro fanny pack lo-fi farm-to-table readymade.
                              Messenger bag gentrify pitchfork tattooed craft
                              beer, iphone skateboard locavore carles etsy
                              salvia banksy hoodie helvetica. DIY synth PBR
                              banksy irony. Leggings gentrify squid 8-bit cred
                              pitchfork. Williamsburg banh mi whatever
                              gluten-free, carles pitchfork biodiesel fixie etsy
                              retro mlkshk vice blog. Scenester cred you
                              probably haven't heard of them, vinyl craft beer
                              blog stumptown. Pitchfork sustainable tofu synth
                              chambray yr.
                            </CardText>
                          </Col>
                        </Row>
                      </TabPane>
                      <TabPane tabId="4" className="p-3">
                        <Row>
                          <Col sm="12">
                            <CardText>
                              Trust fund seitan letterpress, keytar raw denim
                              keffiyeh etsy art party before they sold out
                              master cleanse gluten-free squid scenester freegan
                              cosby sweater. Fanny pack portland seitan DIY, art
                              party locavore wolf cliche high life echo park
                              Austin. Cred vinyl keffiyeh DIY salvia PBR, banh
                              mi before they sold out farm-to-table VHS viral
                              locavore cosby sweater. Lomo wolf viral, mustache
                              readymade thundercats keffiyeh craft beer marfa
                              ethical. Wolf salvia freegan, sartorial keffiyeh
                              echo park vegan.
                            </CardText>
                          </Col>
                        </Row>
                      </TabPane>
                    </TabContent>
                  </CardBody>
                </Card>
              </Col>
            </div>
          </Row>
        </Container>
      </React.Fragment>
    );
  }
}

const mapStatetoProps = (state) => {
  const vendordetails = state;
  console.log("dsdsd", vendordetails);
  return { vendordetails };
};
export default withRouter(
  connect(mapStatetoProps, { getVendorDetails })(MerchantProfile)
);
