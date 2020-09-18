import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import SectionHeader from "components/SectionHeader";
import Image from "react-bootstrap/Image";
import "components/Features2.scss";

function Features2(props) {
  return (
    <div className="Features2">
      {props.items.map((item, index) => (
        <Row className="align-items-center" key={index}>
          <Col xs={12} lg={6}>
            <SectionHeader
              title={item.title}
              subtitle={item.description}
              spaced={true}
              size={3}
              className="text-center text-lg-left"
            />
          </Col>
          <Col>
            <figure className="Features2__image-container">
              <Image src={item.image} alt={item.title} fluid={true} />
            </figure>
          </Col>
        </Row>
      ))}
    </div>
  );
}

export default Features2;
