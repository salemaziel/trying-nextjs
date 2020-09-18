import React from "react";
import ContactSection from "components/ContactSection";
import ContactSection2 from "components/ContactSection2";
import NewsletterSection from "components/NewsletterSection";
import NewsletterSection2 from "components/NewsletterSection2";
import NewsletterSection3 from "components/NewsletterSection3";

function ContactPage(props) {
  return (
    <>
      <ContactSection
        bg="white"
        textColor="dark"
        size="md"
        bgImage=""
        bgImageOpacity={1}
        title="Contact Us"
        subtitle=""
        buttonText="Send message"
        buttonColor="primary"
        showNameField={true}
        inputSize="md"
      />
      <ContactSection2
        bg="white"
        textColor="dark"
        size="md"
        bgImage=""
        bgImageOpacity={1}
        title="Contact Us"
        subtitle="We strive to make our customers happy! And no, we didn't know about the similarly titled movie. Please stop asking about that."
        buttonText="Send message"
        buttonColor="primary"
        showNameField={false}
        inputSize="md"
        embedSrc="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3333.176569329384!2d115.64515051624444!3d-33.340336599257625!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2a2e1d6e1f2832f7%3A0xe4813eb823ccbe30!2sFlorist+Gump!5e0!3m2!1sen!2sus!4v1564947283991!5m2!1sen!2sus"
      />
      <NewsletterSection
        bg="white"
        textColor="dark"
        size="md"
        bgImage=""
        bgImageOpacity={1}
        title="Stay in the know"
        subtitle="Receive our latest articles and feature updates"
        buttonText="Subscribe"
        buttonColor="primary"
        inputPlaceholder="Enter your email"
        subscribedMessage="You are now subscribed!"
      />
      <NewsletterSection2
        bg="white"
        textColor="dark"
        size="md"
        bgImage=""
        bgImageOpacity={1}
        title="Stay in the know"
        subtitle="Receive our latest articles and feature updates"
        buttonText="Subscribe"
        buttonColor="primary"
        inputPlaceholder="Enter your email"
        subscribedMessage="You are now subscribed!"
      />
      <NewsletterSection3
        bg="white"
        textColor="dark"
        size="md"
        bgImage=""
        bgImageOpacity={1}
        title="Stay in the know"
        subtitle="Do you like email? Do you like a lot of email!? Well, you're in luck! Sign up to get blasted with a dozen emails a day of varying quality."
        buttonText="Subscribe"
        buttonColor="primary"
        inputPlaceholder="Enter your email"
        subscribedMessage="You are now subscribed 🙌"
        image="https://uploads.divjoy.com/undraw-newsletter_vovu.svg"
        imageSuccess="https://uploads.divjoy.com/undraw-high_five_u364.svg"
      />
    </>
  );
}

export default ContactPage;
