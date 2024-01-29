import React from "react";
import NavbarFour from "../components/_App/NavbarFour";
import PageBanner from "../components/Common/PageBanner";
import FeaturesStyleOne from "../components/Features/FeaturesStyleOne";
import OurRespectedClients from "../components/Common/OurRespectedClients";
import CTA from "../components/Common/CTA";
import Footer from "../components/_App/Footer";

const Features = () => {
  return (
    <>
      <NavbarFour />

      <PageBanner
        pageTitle="Features"
        homePageUrl="/"
        homePageText="Home"
        activePageText="Features"
      />

      <FeaturesStyleOne />
 
      <OurRespectedClients />

      <div className="ptb-100">
        <CTA />
      </div>

      <Footer />
    </>
  );
};

export default Features;
