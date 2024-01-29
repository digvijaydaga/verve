import React from "react";
import NavbarFour from "../components/_App/NavbarFour";
import PageBanner from "../components/Common/PageBanner";
import BlogGridPost from "../components/Blog/BlogGridPost";
import Footer from "../components/_App/Footer";

const BlogPost = () => {
  return (
    <>
      <NavbarFour />

      <PageBanner
        pageTitle="Blog Post"
        homePageUrl="/"
        homePageText="Home"
        activePageText="Blog Post"
      />

      <BlogGridPost />

      <Footer />
    </>
  );
};

export default BlogPost;
