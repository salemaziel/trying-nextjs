import React from "react";
import Section from "components/Section";
import Container from "react-bootstrap/Container";
import SectionHeader from "components/SectionHeader";
import TeamBios3 from "components/TeamBios3";

function TeamBiosSection3(props) {
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
        <TeamBios3
          items={[
            {
              image: "https://uploads.divjoy.com/pexels-14661-1125x750.jpeg",
              name: "John Smith",
              role: "Software Engineer",
            },
            {
              image: "https://uploads.divjoy.com/pexels-52739-1125x750.jpeg",
              name: "Lisa Zinn",
              role: "Software Engineer",
            },
            {
              image: "https://uploads.divjoy.com/pexels-7051-1125x750.jpeg",
              name: "Sarah Howard",
              role: "Designer",
            },
          ]}
        />
      </Container>
    </Section>
  );
}

export default TeamBiosSection3;
