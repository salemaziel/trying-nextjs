import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import AspectRatio from "components/AspectRatio";

function TeamBios3(props) {
  return (
    <Row className="justify-content-center">
      {props.items.map((item, index) => (
        <Col
          xs={12}
          md={6}
          lg={4}
          className="py-3 d-flex align-items-stretch"
          key={index}
        >
          <Card className="flex-grow-1">
            <AspectRatio ratio={1 / 1.3}>
              <Card.Img src={item.image} alt={item.title} variant="top" />
            </AspectRatio>
            <Card.Body className="d-flex flex-column text-center align-items-center p-4">
              <h6 className="font-weight-bold mb-0">{item.name}</h6>
              <small>{item.role}</small>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  );
}

export default TeamBios3;
