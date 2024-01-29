import React from "react";
import NavbarFour from "../components/_App/NavbarFour";
import PageBanner from "../components/Common/PageBanner";
import FeaturesCard from "../components/HomeDemoTwo/FeaturesCard";
import AboutUsContentTwo from "../components/AboutUs/AboutUsContentTwo";
import FunFactStyleTwo from "../components/Common/FunFactStyleTwo";
import IntroVideoStyleTwo from "../components/Common/IntroVideoStyleTwo";
import OurRespectiveClientsTwo from "../components/Common/OurRespectiveClientsTwo";
import PricePlansOne from "../components/PricePlans/PricePlansOne";
import CTA from "../components/Common/CTA";
import Footer from "../components/_App/Footer";

const AboutUsTwo = () => {
  return (
    <>
      <NavbarFour />

      <PageBanner
        pageTitle="About Us Two"
        homePageUrl="/"
        homePageText="Home"
        activePageText="About Us Two"
      />

      <FeaturesCard />

      <AboutUsContentTwo />

      <div className="pt-100">
        <FunFactStyleTwo />
      </div>

      <IntroVideoStyleTwo />

      <OurRespectiveClientsTwo />

      <PricePlansOne />

      <div className="ptb-100">
        <CTA />
      </div>

      <Footer />
    </>
  );
};

export default AboutUsTwo;
