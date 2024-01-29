import React from "react";
import NavbarFour from "../components/_App/NavbarFour";
import PageBanner from "../components/Common/PageBanner";
import ServicesStyleOne from "../components/Services/ServicesStyleOne";
import WorkProcess from "../components/Common/WorkProcess";
import TechSupport from "../components/Common/TechSupport";
import OurRespectedClients from "../components/Common/OurRespectedClients";
import CTA from "../components/Common/CTA";
import Footer from "../components/_App/Footer";

const Services = () => {
  return (
    <>
      <NavbarFour />

      <PageBanner
        pageTitle="Services One"
        homePageUrl="/"
        homePageText="Home"
        activePageText="Services One"
      />

      <ServicesStyleOne />

      <div className="pb-100">
        <WorkProcess />
      </div>

      <TechSupport />

      <OurRespectedClients />

      <div className="ptb-100">
        <CTA />
      </div>

      <Footer />
    </>
  );
};

export default Services;
