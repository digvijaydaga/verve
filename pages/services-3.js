import React from "react";
import NavbarFour from "../components/_App/NavbarFour";
import PageBanner from "../components/Common/PageBanner";
import ServicesStyleThree from "../components/Services/ServicesStyleThree";
import TechSupport from "../components/Common/TechSupport";
import CTA from "../components/Common/CTA";
import Footer from "../components/_App/Footer";

const ServicesThree = () => {
  return (
    <>
      <NavbarFour />

      <PageBanner
        pageTitle="Services Three"
        homePageUrl="/"
        homePageText="Home"
        activePageText="Services Three"
      />

      <ServicesStyleThree />

      <TechSupport />

      <div className="ptb-100">
        <CTA />
      </div>

      <Footer />
    </>
  );
};

export default ServicesThree;
