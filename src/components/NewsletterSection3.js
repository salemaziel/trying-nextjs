import React, { useState } from "react";
import Section from "components/Section";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import SectionHeader from "components/SectionHeader";
import Newsletter from "components/Newsletter";
import Image from "react-bootstrap/Image";
import "components/NewsletterSection3.scss";

function NewsletterSection3(props) {
  const [subscribed, setSubscribed] = useState(false);
  const image =
    subscribed && props.imageSuccess ? props.imageSuccess : props.image;

  return (
    <Section
      bg={props.bg}
      textColor={props.textColor}
      size={props.size}
      bgImage={props.bgImage}
      bgImageOpacity={props.bgImageOpacity}
    >
      <Container>
        <Row className="align-items-center">
          <Col lg={7} className="text-center text-lg-left">
            <SectionHeader
              title={props.title}
              subtitle={props.subtitle}
              size={2}
              spaced={false}
            />
            <Newsletter
              parentColor={props.color}
              buttonText={props.buttonText}
              buttonColor={props.buttonColor}
              inputPlaceholder={props.inputPlaceholder}
              subscribedMessage={props.subscribedMessage}
              onSubscribed={() => setSubscribed(true)}
              size="lg"
            />
          </Col>
          <Col className="offset-lg-1 mt-5 mt-lg-0">
            <figure className="NewsletterSection3__image-container mx-auto">
              <Image src={image} fluid={true} />
            </figure>
          </Col>
        </Row>
      </Container>
    </Section>
  );
}

export default NewsletterSection3;
