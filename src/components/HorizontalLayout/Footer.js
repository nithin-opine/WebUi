import React from "react";
import { Container, Row, Col } from "reactstrap";

const Footer = () => {
  return (
    <React.Fragment>
      <footer className="footernew">
        <Container fluid={true}>
          <Row>
            <Col md="6" className="footerbrand">
              <img src={require("../../assets/images/annalogowhite.png")} />
            </Col>
          </Row>
          <Row className="mt-5">
            <Col md="3" className="footercol">
              <h4>THE COMPANY</h4>
              <ul>
                <li>
                  <a href="">Who we are</a>
                </li>
                <li>
                  <a href="">Careers</a>
                </li>
                <li>
                  <a href="">Report Fraud</a>
                </li>
                <li>
                  <a href="">Contact us</a>
                </li>
              </ul>
            </Col>
            <Col md="3" className="footercol">
              <h4>FOR FOODIES</h4>
              <ul>
                <li>
                  <a href="">Code of conduct</a>
                </li>
                <li>
                  <a href="">Developers</a>
                </li>
                <li>
                  {" "}
                  <a href="">Mobile Apps</a>
                </li>
              </ul>
            </Col>
            <Col md="3" className="footercol">
              <h4>FOR RESTAURANTS</h4>
              <ul>
                <li>
                  <a href="">Become a partner</a>
                </li>
                <li>
                  <a href="">Business products</a>
                </li>
                <li>
                  <a href="">Partner applications</a>
                </li>
              </ul>
            </Col>
            <Col md="3" className="footercol">
              <h4>GENERAL</h4>
              <ul>
                <li>
                  <a href="">Privacy</a>
                </li>
                <li>
                  <a href="">Terms</a>
                </li>
              </ul>
            </Col>
          </Row>
          <Row>
            <Col md="12">
              <div className="endline">
                <hr />
              </div>
            </Col>
            <Col md="12">
              By continuing past this page, you agree to our Terms of Service,
              Cookie Policy, Privacy Policy and Content Policies. All trademarks
              are properties of their respective owners. 2008-2020 © AnnaSree
              Ltd. All rights reserved.
            </Col>
          </Row>
        </Container>
      </footer>
    </React.Fragment>
  );
};

export default Footer;
