import React from "react";
import NavbarFour from "../components/_App/NavbarFour";
import PageBanner from "../components/Common/PageBanner";
import EventsCard from "../components/Events/EventsCard";
import Footer from "../components/_App/Footer";

const Events = () => {
  return (
    <>
      <NavbarFour />

      <PageBanner
        pageTitle="Events"
        homePageUrl="/"
        homePageText="Home"
        activePageText="Events"
      />

      <EventsCard />

      <Footer />
    </>
  );
};

export default Events;
