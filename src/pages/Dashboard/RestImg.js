import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";
//i18n
import { withNamespaces } from "react-i18next";
import { BaseUrl } from "../../config/BaseUrl";
import { apiGet } from "../../config/apiConfig";

import axios from "axios";

class RestImg extends Component {
  constructor(props) {
    super(props);
    this.state = { img: "" };
  }

  componentDidMount() {
    let mid = this.props.bid;
    let Url =
      BaseUrl.apiUrl.baseUrl + "api/public/home/get_restaurant_image/" + mid;
    console.log(Url);
    axios
      .get(Url, {
        responseType: "blob",
      })
      .then((response) => this.setState({ img: response.data }));
  }

  render() {
    let img = "";
    if (this.state.img) {
      let imgsrc = "";
      console.log(this.state.img);
      imgsrc = URL.createObjectURL(this.state.img);
      console.log(imgsrc);
      img = <img src={imgsrc} alt="" />;
    }
    return img;
  }
}
export default RestImg;
