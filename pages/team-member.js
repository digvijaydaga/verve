import React from "react";
import NavbarFour from "../components/_App/NavbarFour";
import PageBanner from "../components/Common/PageBanner";
import TeamMembers from './../components/Team/TeamMembers';
import CTA from "../components/Common/CTA";
import Footer from "../components/_App/Footer";

const TeamMember = () => {
  return (
    <>
      <NavbarFour />

      <PageBanner
        pageTitle="Team Member"
        homePageUrl="/"
        homePageText="Home"
        activePageText="Team Member"
      />

      <TeamMembers />

      <div className="pb-100">
        <CTA />
      </div>

      <Footer />
    </>
  );
};

export default TeamMember;
