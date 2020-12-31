import React, { Component } from "react";
import { Row, Col, CardBody, Card, Alert, Container } from "reactstrap";
import axios from "axios";
// availity-reactstrap-validation
import { AvForm, AvField } from "availity-reactstrap-validation";
import { useHistory } from "react-router-dom";

// action
import {
  registerUser,
  apiError,
  registerUserFailed,
} from "../../store/actions";

// Redux
import { connect } from "react-redux";
import { Link } from "react-router-dom";

// import images
import profileImg from "../../assets/images/profile-img.png";
import logoImg from "../../assets/images/logo.svg";

class Validate extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: "Please enter OTP received on your mobile device",
    };

    // handleValidSubmit
    this.validateOtp = this.validateOtp.bind(this);
  }

  validateOtp(event, data) {
    console.log(data);
    axios
      .post(
        "https://annasree.com:8443/annasree-0.0.1-SNAPSHOT/api/public/validate",
        data
      )
      .then(function (response) {
        window.location.href = "/login";
      })
      .catch((err) => {
        var message;
        if (err.response && err.response.status) {
          switch (err.response.status) {
            case 406:
              message = "Wrong OTP";
              this.setState({ error: "Wrong otp" });
              window.location.reload();
              break;
            case 500:
              message =
                "Sorry! something went wrong, please contact our support team";
              break;
            case 401:
              message = "Invalid credentials";
              break;
            default:
              message = err[1];
              break;
          }
        }
        throw message;
      });
  }

  // handleValidSubmit

  componentDidMount() {
    this.props.apiError("");
    this.props.registerUserFailed("");
  }

  render() {
    let mobile = localStorage.getItem("registering_with");
    return (
      <React.Fragment>
        <div className="home-btn d-none d-sm-block">
          <Link to="/" className="text-dark">
            <i className="bx bx-home h2"></i>
          </Link>
        </div>
        <div className="account-pages my-5 pt-sm-5">
          <Container>
            <Row className="justify-content-center">
              <Col md={8} lg={6} xl={5}>
                <Card className="overflow-hidden">
                  <div className="bg-soft-primary">
                    <Row>
                      <Col className="col-7">
                        <div className="text-primary p-4">
                          <h5 className="text-primary"></h5>
                          <p>Validate your mobile number to continue</p>
                        </div>
                      </Col>
                      <Col className="col-5 align-self-end">
                        <img src={profileImg} alt="" className="img-fluid" />
                      </Col>
                    </Row>
                  </div>
                  <CardBody className="pt-0">
                    <div>
                      <Link to="/">
                        <div className="avatar-md profile-user-wid mb-4">
                          <span className="avatar-title rounded-circle bg-light">
                            <img
                              src={logoImg}
                              alt=""
                              className="rounded-circle"
                              height="34"
                            />
                          </span>
                        </div>
                      </Link>
                    </div>
                    <div className="p-2">
                      <AvForm
                        className="form-horizontal"
                        onValidSubmit={this.validateOtp}
                      >
                        {this.props.error && this.props.error ? (
                          <Alert color="danger">{this.props.error}</Alert>
                        ) : null}
                        {this.props.registrationError &&
                        this.props.registrationError ? (
                          <Alert color="danger">
                            {this.props.registrationError}
                          </Alert>
                        ) : null}

                        <div className="form-group">
                          <AvField
                            name="mobile"
                            className="form-control"
                            type="number"
                            hidden
                            value={mobile}
                          />
                          <AvField
                            name="validateOtp"
                            label={this.state.error}
                            className="form-control"
                            placeholder="****"
                            type="number"
                            required
                          />
                        </div>

                        <div className="mt-4">
                          <button
                            className="btn btn-primary btn-block waves-effect waves-light"
                            type="submit"
                          >
                            Validate OTP
                          </button>
                        </div>

                        <div className="mt-4 text-center">
                          <p className="mb-0">
                            By registering you agree to the Annasree{" "}
                            <Link to="#" className="text-primary">
                              Terms of Use
                            </Link>
                          </p>
                        </div>
                      </AvForm>
                    </div>
                  </CardBody>
                </Card>
                <div className="mt-5 text-center">
                  <p>
                    Already have an account ?{" "}
                    <Link
                      to="/login"
                      className="font-weight-medium text-primary"
                    >
                      {" "}
                      Login
                    </Link>{" "}
                  </p>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </React.Fragment>
    );
  }
}

const mapStatetoProps = (state) => {
  const { user, registrationError, loading } = state.Account;
  return { user, registrationError, loading };
};

export default connect(mapStatetoProps, {
  registerUser,
  apiError,
  registerUserFailed,
})(Validate);
