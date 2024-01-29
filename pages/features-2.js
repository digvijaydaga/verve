import React from "react";
import NavbarFour from "../components/_App/NavbarFour";
import PageBanner from "../components/Common/PageBanner";
import FeaturesStyleTwo from "../components/Features/FeaturesStyleTwo";
import OurRespectiveClientsTwo from "../components/Common/OurRespectiveClientsTwo";
import CTA from "../components/Common/CTA";
import Footer from "../components/_App/Footer";

const FeaturesTwo = () => {
  return (
    <>
      <NavbarFour />

      <PageBanner
        pageTitle="Features Two"
        homePageUrl="/"
        homePageText="Home"
        activePageText="Features Two"
      />

      <FeaturesStyleTwo />

      <OurRespectiveClientsTwo />

      <div className="ptb-100">
        <CTA />
      </div>

      <Footer />
    </>
  );
};

export default FeaturesTwo;
