import React from "react";
import NavbarFour from "../components/_App/NavbarFour";
import PageBanner from "../components/Common/PageBanner";
import MembershipLevelsTable from "../components/MembershipLevels/MembershipLevelsTable";
import Footer from "../components/_App/Footer";

const MembershipLevels = () => {
  return (
    <>
      <NavbarFour />

      <PageBanner
        pageTitle="Membership Levels"
        homePageUrl="/"
        homePageText="Home"
        activePageText="Membership Levels"
      />

      <MembershipLevelsTable />

      <Footer />
    </>
  );
};

export default MembershipLevels;
