import React, { Component } from "react";
import { Row, Col } from "reactstrap";

class CuisineSelector extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cuisines: [
        {
          title: "Indian",
          img:
            "https://i.ndtvimg.com/i/2017-06/spicy-dishes_620x350_41498029900.jpg",
        },
        {
          title: "Arabian",
          img:
            "https://hips.hearstapps.com/ghk.h-cdn.co/assets/16/38/1474395998-ghk-0216-comfortfoodcover-meatballs.jpg?crop=0.856xw:0.571xh;0.0224xw,0.296xh&resize=640:*",
        },
        {
          title: "Continental",
          img:
            "https://wonderfulwanderings.com/wp-content/uploads/2017/05/most-popular-indian-dishes.jpg",
        },
        {
          title: "Burgers",
          img:
            "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/whm060119foodflash-001-1562770762.jpg?crop=0.653xw:0.435xh;0.178xw,0.302xh&resize=480:*",
        },
        {
          title: "Ice creams",
          img:
            "https://www.holidify.com/blog/wp-content/uploads/2015/07/1280px-Rogan_Josh.jpg",
        },
        {
          title: "Beverages",
          img:
            "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/white-wine-coq-au-vin-1586056485.jpg?crop=0.879xw:0.699xh;0.0639xw,0.205xh&resize=640:*",
        },
      ],
    };
  }

  render() {
    return (
      <React.Fragment>
        <Row>
          <Col xl="4">
            <h4>Browse by cuisines</h4>
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
