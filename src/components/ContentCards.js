import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Link from "next/link";
import AspectRatio from "components/AspectRatio";

function ContentCards(props) {
  return (
    <Row className="justify-content-center">
      {props.items.map((item, index) => (
        <Col xs={12} md={6} lg={3} className="py-3" key={index}>
          <Link href={item.url} passHref>
            <Card as="a" text="dark" className="text-decoration-none">
              <AspectRatio ratio={1 / 0.75}>
                <Card.Img src={item.image} alt={item.title} variant="top" />
              </AspectRatio>
              <Card.Body>
                <Card.Title>{item.title}</Card.Title>
                <Card.Text>{item.body}</Card.Text>
              </Card.Body>
            </Card>
          </Link>
        </Col>
      ))}
    </Row>
  );
}

export default ContentCards;
