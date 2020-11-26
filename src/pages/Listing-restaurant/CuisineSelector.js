import React, { Component } from "react";
import { Row, Col } from "reactstrap";

class CuisineSelector extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cuisines: [
        {
          title: "Vegetables",
          img:
            "https://image.shutterstock.com/image-photo/assortment-fresh-fruits-vegetables-260nw-553662235.jpg",
        },
        {
          title: "Meat",
          img:
            "https://hips.hearstapps.com/ghk.h-cdn.co/assets/16/38/1474395998-ghk-0216-comfortfoodcover-meatballs.jpg?crop=0.856xw:0.571xh;0.0224xw,0.296xh&resize=640:*",
        },
        {
          title: "Cooking essentials",
          img:
            "https://townsquare.media/site/959/files/2020/06/GettyImages-614515684.jpg?w=980&q=75",
        },
        {
          title: "Snacks & Beverages",
          img:
            "https://i1.wp.com/www.eatthis.com/wp-content/uploads/2020/09/unhealthy-snacks.jpg?resize=640%2C360&ssl=1*",
        },
        {
          title: "Household",
          img:
            "https://www.henryford.com/-/media/henry-ford-blog/images/mobile-interior-banner-images/2019/02/bucket-of-cleaning-products.jpg",
        },
        {
          title: "Beauty & Baby",
          img:
            "https://cdn.cdnparenting.com/articles/2018/09/15-beauty-products-you-dont-need-to-waste-your-money-on.jpg",
        },
      ],
    };
  }

  render() {
    return (
      <React.Fragment>
        <Row>
          <Col xl="4">
            <h4>Browse by category</h4>
          </Col>
        </Row>
        <Row className="mt-4">
          {this.state.cuisines.map((cuisine, key) => (
            <Col xl="2" key={key}>
              <div className="cuisineimg">
                <img src={cuisine.img} alt="" />
              </div>
              <div className="cuisinetitle text-center">{cuisine.title}</div>
            </Col>
          ))}
        </Row>
      </React.Fragment>
    );
  }
}

export default CuisineSelector;
