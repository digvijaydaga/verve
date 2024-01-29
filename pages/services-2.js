import React from "react";
import NavbarFour from "../components/_App/NavbarFour";
import PageBanner from "../components/Common/PageBanner";
import ServicesStyleTwo from "../components/Services/ServicesStyleTwo";
import WorkProcessTwo from "../components/Common/WorkProcessTwo";
import IntroVideoStyleTwo from "../components/Common/IntroVideoStyleTwo";
import OurRespectedClients from "../components/Common/OurRespectedClients";
import CTA from "../components/Common/CTA";
import Footer from "../components/_App/Footer";

const ServicesTwo = () => {
  return (
    <>
      <NavbarFour />

      <PageBanner
        pageTitle="Services Two"
        homePageUrl="/"
        homePageText="Home"
        activePageText="Services Two"
      />

      <ServicesStyleTwo />

      <WorkProcessTwo />

      <IntroVideoStyleTwo />

      <OurRespectedClients />

      <div className="ptb-100">
        <CTA />
      </div>

      <Footer />
    </>
  );
};

export default ServicesTwo;
