import React from "react";
import Section from "components/Section";
import Container from "react-bootstrap/Container";
import SectionHeader from "components/SectionHeader";
import TeamBios4 from "components/TeamBios4";

function TeamBiosSection4(props) {
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
        <TeamBios4
          items={[
            {
              avatar: "https://uploads.divjoy.com/pravatar-150x-68.jpeg",
              name: "John Smith",
              role: "CEO",
            },
            {
              avatar: "https://uploads.divjoy.com/pravatar-150x-35.jpeg",
              name: "Lisa Zinn",
              role: "CTO",
            },
            {
              avatar: "https://uploads.divjoy.com/pravatar-150x-16.jpeg",
              name: "Diana Low",
              role: "Designer",
            },
            {
              avatar: "https://i.pravatar.cc/150?img=5",
              name: "Niomi Clay",
              role: "Software Engineer",
            },
            {
              avatar: "https://i.pravatar.cc/150?img=6",
              name: "Tim Wesley",
              role: "Software Engineer",
            },
            {
              avatar: "https://i.pravatar.cc/150?img=7",
              name: "Shawn David",
              role: "Marketing",
            },
            {
              avatar: "https://i.pravatar.cc/150?img=8",
              name: "Ian Gold",
              role: "Marketing",
            },
            {
              avatar: "https://i.pravatar.cc/150?img=10",
              name: "Ali Pine",
              role: "Software Engineer",
            },
          ]}
        />
      </Container>
    </Section>
  );
}

export default TeamBiosSection4;
