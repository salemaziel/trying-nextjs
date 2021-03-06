import React from "react";
import Section from "components/Section";
import Container from "react-bootstrap/Container";
import SectionHeader from "components/SectionHeader";
import Features2 from "components/Features2";

function FeaturesSection2(props) {
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
        <Features2
          items={[
            {
              title: "Explore",
              description:
                "Integer ornare neque mauris, ac vulputate lacus venenatis et. Pellentesque ut ultrices purus.",
              image: "https://uploads.divjoy.com/undraw-mind_map_cwng.svg",
            },
            {
              title: "Explore",
              description:
                "Integer ornare neque mauris, ac vulputate lacus venenatis et. Pellentesque ut ultrices purus.",
              image:
                "https://uploads.divjoy.com/undraw-personal_settings_kihd.svg",
            },
            {
              title: "Explore",
              description:
                "Integer ornare neque mauris, ac vulputate lacus venenatis et. Pellentesque ut ultrices purus.",
              image: "https://uploads.divjoy.com/undraw-having_fun_iais.svg",
            },
            {
              title: "Explore",
              description:
                "Integer ornare neque mauris, ac vulputate lacus venenatis et. Pellentesque ut ultrices purus.",
              image: "https://uploads.divjoy.com/undraw-balloons_vxx5.svg",
            },
          ]}
        />
      </Container>
    </Section>
  );
}

export default FeaturesSection2;
