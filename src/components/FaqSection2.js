import React from "react";
import Section from "components/Section";
import Container from "react-bootstrap/Container";
import SectionHeader from "components/SectionHeader";
import Faq2 from "components/Faq2";

function FaqSection2(props) {
  return (
    <Section
      bg={props.bg}
      textColor={props.textColor}
      size={props.size}
      bgImage={props.bgImage}
      bgImageOpacity={props.bgImageOpacity}
    >
      <Container>
        <SectionHeader
          title={props.title}
          subtitle={props.subtitle}
          size={2}
          spaced={true}
          className="text-center"
        />
        <Faq2
          items={[
            {
              question: "Integer ornare neque mauris?",
              answer:
                "Integer ornare neque mauris, ac vulputate lacus venenatis et. Pellentesque ut ultrices purus. Suspendisse ut tincidunt eros. In velit mi, rhoncus dictum neque a, tincidunt lobortis justo.",
            },
            {
              question: "Lorem ipsum dolor sit amet?",
              answer:
                "Nunc nulla mauris, laoreet vel cursus lacinia, consectetur sit amet tellus. Suspendisse ut tincidunt eros. In velit mi, rhoncus dictum neque a, tincidunt lobortis justo.",
            },
            {
              question: "Suspendisse ut tincidunt?",
              answer:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In lobortis, metus et mattis ullamcorper. Suspendisse ut tincidunt eros. In velit mi, rhoncus dictum neque a, tincidunt lobortis justo.",
            },
            {
              question: "Ut enim ad minim veniam?",
              answer:
                "Suspendisse ut tincidunt eros. In velit mi, rhoncus dictum neque a, tincidunt lobortis justo.",
            },
          ]}
        />
      </Container>
    </Section>
  );
}

export default FaqSection2;
