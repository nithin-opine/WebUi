import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import Header from "./HorizontalLayout/Header";
import Footer from "./HorizontalLayout/Footer";

class NonAuthLayout extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.capitalizeFirstLetter.bind(this);
  }

  capitalizeFirstLetter = (string) => {
    return string.charAt(1).toUpperCase() + string.slice(2);
  };

  componentDidMount() {
    let currentage = this.capitalizeFirstLetter(this.props.location.pathname);

    document.title = "AnnaSree - Food delivery";
  }
  render() {
    return (
      <React.Fragment>
        <div id="layout-wrapper">
          <Header
            theme={this.props.topbarTheme}
            openLeftMenuCallBack={this.openMenu}
          />
          <div className="main-content">{this.props.children}</div>

          <Footer />
        </div>
      </React.Fragment>
    );
  }
}

export default withRouter(NonAuthLayout);
