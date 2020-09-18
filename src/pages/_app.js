import React from "react";
import "styles/global.scss";
import NavbarCustom1 from "components/NavbarCustom1";
import NavbarCustom2 from "components/NavbarCustom2";
import Footer from "components/Footer";
import Footer2 from "components/Footer2";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <NavbarCustom1
        bg="white"
        variant="light"
        expand="md"
        logo="https://uploads.divjoy.com/logo.svg"
      />
      <NavbarCustom2
        bg="white"
        variant="light"
        expand="md"
        logo="https://uploads.divjoy.com/logo.svg"
      />

      <Component {...pageProps} />

      <Footer
        bg="white"
        textColor="dark"
        size="md"
        bgImage=""
        bgImageOpacity={1}
        description="A short description of what you do here"
        copyright="© 2019 Company"
        logo="https://uploads.divjoy.com/logo.svg"
      />
      <Footer2
        bg="white"
        textColor="dark"
        size="md"
        bgImage=""
        bgImageOpacity={1}
        description="A short description of what you do here"
        copyright="© 2019 Company"
        logo="https://uploads.divjoy.com/logo.svg"
      />
    </>
  );
}

export default MyApp;
