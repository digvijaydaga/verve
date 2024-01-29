import React from "react";
import NavbarFour from "../components/_App/NavbarFour";
import PageBanner from "../components/Common/PageBanner";
import PartnerStyleTwo from "../components/Common/PartnerStyleTwo";
import OurRespectedClients from "../components/Common/OurRespectedClients";
import CTA from "../components/Common/CTA";
import Footer from "../components/_App/Footer";

const Testimonials = () => {
  return (
    <>
      <NavbarFour />

      <PageBanner
        pageTitle="Testimonials"
        homePageUrl="/"
        homePageText="Home"
        activePageText="Testimonials"
      />

      <PartnerStyleTwo />

      <OurRespectedClients />

      <div className="ptb-100">
        <CTA />
      </div>

      <Footer />
    </>
  );
};

export default Testimonials;
