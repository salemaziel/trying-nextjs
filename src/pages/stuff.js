import React from "react";
import Announcement from "components/Announcement";
import Announcement2 from "components/Announcement2";
import HeroSection3 from "components/HeroSection3";
import HeroSection4 from "components/HeroSection4";
import VideoSection from "components/VideoSection";
import CarouselSection from "components/CarouselSection";
import ContentCardsSection from "components/ContentCardsSection";
import { useRouter } from "next/router";

function StuffPage(props) {
  const router = useRouter();

  return (
    <>
      <Announcement
        variant="white"
        text="An important announcement!"
        buttonText="Get Started"
        buttonColor="primary"
        buttonOnClick={() => {
          // Navigate to pricing page
          router.push("/pricing");
        }}
      />
      <Announcement2
        variant="white"
        text="An important announcement with"
        linkText="a link"
        linkOnClick={() => {
          // Navigate to pricing page
          router.push("/pricing");
        }}
      />
      <HeroSection3
        bg="white"
        textColor="dark"
        size="md"
        bgImage=""
        bgImageOpacity={1}
        title="Your landing page title here"
        subtitle="This landing page is perfect for showing off your awesome product and driving people to sign up for a paid plan."
        buttonText="Get Started"
        buttonColor="primary"
        image="https://uploads.divjoy.com/undraw-japan_ubgk.svg"
        buttonOnClick={() => {
          // Navigate to pricing page
          router.push("/pricing");
        }}
      />
      <HeroSection4
        bg="white"
        textColor="dark"
        size="md"
        bgImage=""
        bgImageOpacity={1}
        title="Your landing page title here"
        subtitle="This landing page is perfect for showing off your awesome product and driving people to sign up for a paid plan."
        buttonText="Get Started"
        buttonColor="primary"
        image="https://uploads.divjoy.com/undraw-beer_celebration_cefj.svg"
        buttonOnClick={() => {
          // Navigate to pricing page
          router.push("/pricing");
        }}
      />
      <VideoSection
        bg="white"
        textColor="dark"
        size="md"
        bgImage=""
        bgImageOpacity={1}
        title="Your title here"
        subtitle=""
        embedUrl="https://www.youtube.com/embed/z9Ul9ccDOqE"
      />
      <CarouselSection
        items={[
          {
            image: "http://source.unsplash.com/7v_lSDRaOO0/1200x600",
            caption: "Caption for the first image",
          },
          {
            image: "http://source.unsplash.com/PvCO2IXlXBs/1200x600",
            caption: "Caption for the second image",
          },
          {
            image: "http://source.unsplash.com/KgjcndVr7tU/1200x600",
            caption: "Caption for the third image",
          },
        ]}
      />
      <ContentCardsSection
        bg="white"
        textColor="dark"
        size="md"
        bgImage=""
        bgImageOpacity={1}
        title="Featured Content"
        subtitle=""
      />
    </>
  );
}

export default StuffPage;
