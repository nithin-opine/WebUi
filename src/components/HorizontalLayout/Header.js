import React, { Component } from "react";

import { connect } from "react-redux";

import { Link } from "react-router-dom";
import Geocode from "react-geocode";
// reactstrap
import { Row, Col, Dropdown, DropdownToggle, DropdownMenu } from "reactstrap";

// Import menuDropdown
import LanguageDropdown from "../CommonForBoth/TopbarDropdown/LanguageDropdown";
import NotificationDropdown from "../CommonForBoth/TopbarDropdown/NotificationDropdown";
import ProfileMenu from "../CommonForBoth/TopbarDropdown/ProfileMenu";

import megamenuImg from "../../assets/images/megamenu-img.png";
import logo from "../../assets/images/annalogocolor.png";
import logoLight from "../../assets/images/annalogocolor.png";
import logoLightSvg from "../../assets/images/annalogocolor.png";
import logoDark from "../../assets/images/annalogocolor.png";
import Autocomplete from "react-autocomplete"
import { BaseUrl } from "../../config/BaseUrl";
import { apiGet } from "../../config/apiConfig";
// Redux Store
import { toggleRightSidebar } from "../../store/actions";

//i18n
import { withNamespaces } from "react-i18next";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = { isSearch: false,value:"" };
    this.toggleSearch = this.toggleSearch.bind(this);
  }

  toggleSearch = () => {
    this.setState({ isSearch: !this.state.isSearch });
  };
  handleChange(e){
   
    this.setState({value:e.target.value})
    const Url = BaseUrl.apiUrl.baseUrl + "api/public/search/"+e.target.value;
    let resp = apiGet(Url);
    resp.then((resp)=> {
      console.log('oooooooooooooooooo',resp)
    })
  }
  handleSelect(val){
    // console.log('bbbbbbbbbbbbbbbbbbb',val)
  }
  render() {
    var lat = "7.568443,2.485789";
    var long = "";
    navigator.geolocation.getCurrentPosition(function (position) {
      console.log("Latitude is :", position.coords.latitude);
      lat = position.coords.latitude;
      console.log("Longitude is :", position.coords.longitude);
      long = position.coords.longitude;
    });
    return (
      <React.Fragment>
        <header id="page-topbar">
          <div className="navbar-header">
            <div className="d-flex">
              <div className="navbar-brand-box">
                <Link to="/dashboard" className="logo logo-dark">
                  <span className="logo-sm">
                    <img src={logo} alt="" height="22" />
                  </span>
                  <span className="logo-lg">
                    <img src={logoDark} alt="" height="22" />
                  </span>
                </Link>

                <Link to="/dashboard" className="logo logo-light">
                  <span className="logo-sm">
                    <img src={logoLightSvg} alt="" height="22" />
                  </span>
                  <span className="logo-lg">
                    <img src={logoLight} alt="" height="19" />
                  </span>
                </Link>
              </div>
              <button
                type="button"
                className="btn btn-sm px-3 font-size-16 d-lg-none header-item waves-effect waves-light"
                data-toggle="collapse"
                onClick={this.toggleMenu}
                data-target="#topnav-menu-content"
              >
                <i className="fa fa-fw fa-bars"></i>
              </button>
              {/* <form className="app-search d-none d-lg-block">
                <div className="position-relative">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Search..."
                  />
                  <span className="bx bx-search-alt"></span>
                </div>
              </form> */}
              <Autocomplete
              getItemValue={(item) => item.label}
              items={[
                { label: 'apple' },
                { label: 'banana' },
                { label: 'pear' }
                ]}
                renderItem={(item, isHighlighted) =>
                <div style={{ background: isHighlighted ? 'lightgray' : 'white' }}>
                  {item.label}
              </div>
  }
  value={this.state.value}
  onChange={(e) => this.handleChange(e)}
  onSelect={(val) => this.handleSelect(val)}
/>
              <div className="headerlocation">
                Delivering to
                <span className="deli">{lat}</span>
                <i className="bx bx-current-location"></i>
              </div>
            </div>

            <div className="d-flex">
              <div className="dropdown d-inline-block d-lg-none ml-2">
                <button
                  type="button"
                  className="btn header-item noti-icon waves-effect"
                  id="page-header-search-dropdown"
                  onClick={() => {
                    this.setState({ isSearch: !this.state.isSearch });
                  }}
                >
                  <i className="mdi mdi-magnify"></i>
                </button>
                <div
                  className={
                    this.state.isSearch
                      ? "dropdown-menu dropdown-menu-lg dropdown-menu-right p-0 show"
                      : "dropdown-menu dropdown-menu-lg dropdown-menu-right p-0"
                  }
                  aria-labelledby="page-header-search-dropdown"
                >
                  <form className="p-3">
                    <div className="form-group m-0">
                      <div className="input-group">
                        <input
                          type="text"
                          className="form-control"
                          placeholder={this.props.t("Search") + "..."}
                          aria-label="Recipient's username"
                        />
                        <div className="input-group-append">
                          <button className="btn btn-primary" type="submit">
                            <i className="mdi mdi-magnify"></i>
                          </button>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>

              <ProfileMenu />
            </div>
          </div>
        </header>
      </React.Fragment>
    );
  }
}

const mapStatetoProps = (state) => {
  const { layoutType } = state.Layout;
  return { layoutType };
};

export default connect(mapStatetoProps, { toggleRightSidebar })(
  withNamespaces()(Header)
);
