import React from "react";
import HeroSection2 from "components/HeroSection2";
import StatsSection from "components/StatsSection";
import TeamBiosSection from "components/TeamBiosSection";
import TeamBiosSection2 from "components/TeamBiosSection2";
import TeamBiosSection3 from "components/TeamBiosSection3";
import TeamBiosSection4 from "components/TeamBiosSection4";
import CtaSection1 from "components/CtaSection1";
import { useRouter } from "next/router";

function AboutPage(props) {
  const router = useRouter();

  return (
    <>
      <HeroSection2
        bg="white"
        textColor="dark"
        size="lg"
        bgImage=""
        bgImageOpacity={1}
        title="We help you make money"
        subtitle="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum consequatur numquam aliquam tenetur ad amet inventore hic beatae, quas accusantium perferendis sapiente explicabo, corporis totam!"
      />
      <StatsSection
        bg="light"
        textColor="dark"
        size="sm"
        bgImage=""
        bgImageOpacity={1}
      />
      <TeamBiosSection
        bg="white"
        textColor="dark"
        size="md"
        bgImage=""
        bgImageOpacity={1}
        title="Meet the Team"
        subtitle=""
      />
      <TeamBiosSection2
        bg="white"
        textColor="dark"
        size="md"
        bgImage=""
        bgImageOpacity={1}
        title="Meet the Team"
        subtitle=""
      />
      <TeamBiosSection3
        bg="white"
        textColor="dark"
        size="md"
        bgImage=""
        bgImageOpacity={1}
        title="Meet the Team"
        subtitle=""
      />
      <TeamBiosSection4
        bg="white"
        textColor="dark"
        size="md"
        bgImage=""
        bgImageOpacity={1}
        title="Meet the Team"
        subtitle=""
      />
      <CtaSection1
        bg="primary"
        textColor="light"
        size="sm"
        bgImage=""
        bgImageOpacity={1}
        title="Ready to get started?"
        subtitle=""
        buttonText="Get Started"
        buttonColor="light"
        buttonOnClick={() => {
          // Navigate to pricing page
          router.push("/pricing");
        }}
      />
    </>
  );
}

export default AboutPage;
