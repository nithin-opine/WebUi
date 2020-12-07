import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import {
  changeLayout,
  changeTopbarTheme,
  toggleRightSidebar,
  changeLayoutWidth,
} from "../../store/actions";

// Other Layout related Component
import Header from "./Header";
import Footer from "./Footer";
import CartFragment from "./CartFragment";

class Layout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isMenuOpened: false,
    };
  }

  /**
   * Open/close right sidebar
   */

  componentDidMount() {
    if (this.props.isPreloader === true) {
      document.getElementById("preloader").style.display = "block";
      document.getElementById("status").style.display = "block";

      setTimeout(function () {
        document.getElementById("preloader").style.display = "none";
        document.getElementById("status").style.display = "none";
      }, 2500);
    } else {
      document.getElementById("preloader").style.display = "none";
      document.getElementById("status").style.display = "none";
    }

    // Scrollto 0,0
    window.scrollTo(0, 0);

    const title = this.props.location.pathname;
    let currentage = title.charAt(1).toUpperCase() + title.slice(2);

    document.title = " AnnaSree  Food delivery made simple";

    this.props.changeLayout("horizontal");
    if (this.props.topbarTheme) {
      this.props.changeTopbarTheme(this.props.topbarTheme);
    }
    if (this.props.layoutWidth) {
      this.props.changeLayoutWidth(this.props.layoutWidth);
    }
  }

  render() {
    return (
      <React.Fragment>
        <div id="preloader">
          <div id="status">
            <div className="spinner-chase">
              <div className="chase-dot"></div>
              <div className="chase-dot"></div>
              <div className="chase-dot"></div>
              <div className="chase-dot"></div>
              <div className="chase-dot"></div>
              <div className="chase-dot"></div>
            </div>
          </div>
        </div>

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
const mapStatetoProps = (state) => {
  return {
    ...state.Layout,
  };
};
export default connect(mapStatetoProps, {
  changeTopbarTheme,
  toggleRightSidebar,
  changeLayout,
  changeLayoutWidth,
})(withRouter(Layout));
