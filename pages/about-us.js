import React from "react";
import NavbarFour from "../components/_App/Navbar";
import PageBanner from "../components/Common/PageBanner";
import FeaturesCard from "../components/HomeDemoOne/FeaturesCard";
import AboutUsContent from "../components/AboutUs/AboutUsContent";
import FunFacts from "../components/Common/FunFacts";
import TechSupport from "../components/Common/TechSupport";
import Team from "../components/Common/Team";
import OurRespectedClients from "../components/Common/OurRespectedClients";
import Faqs from "../components/Common/Faqs";
import Footer from "../components/_App/Footer";

const AboutUs = () => {
  return (
    <>
      <NavbarFour />

      <PageBanner
        pageTitle="About Us"
        homePageUrl="/"
        homePageText="Home"
        activePageText="About Us"
      />

      <FeaturesCard />

      <AboutUsContent />

     {/* <div className="ptb-100">
        <FunFacts />
      </div> */}

      <TechSupport />

	  {/* <Team /> */}

       {/* <OurRespectedClients /> */}

      <Faqs />

      <Footer />
    </>
  );
};

export default AboutUs;
