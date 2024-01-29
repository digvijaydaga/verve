import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import TopHeaderTwo from "./TopHeaderTwo";

const NavbarFour = () => {
  // Add active class
  const [currentPath, setCurrentPath] = useState("");
  const router = useRouter();
  // console.log(router.asPath)

  useEffect(() => {
    setCurrentPath(router.asPath);
  }, [router]);

  const [menu, setMenu] = React.useState(true);

  const toggleNavbar = () => {
    setMenu(!menu);
  };

  React.useEffect(() => {
    let elementId = document.getElementById("navbar");
    document.addEventListener("scroll", () => {
      if (window.scrollY > 170) {
        elementId.classList.add("is-sticky");
      } else {
        elementId.classList.remove("is-sticky");
      }
    });
  });

  // Search Modal
  const [isActiveSearchModal, setActiveSearchModal] = useState("false");
  const handleToggleSearchModal = () => {
    setActiveSearchModal(!isActiveSearchModal);
  };

  // Sidebar Modal
  const [isActiveSidebarModal, setActiveSidebarModal] = useState("false");
  const handleToggleSidebarModal = () => {
    setActiveSidebarModal(!isActiveSidebarModal);
  };

  const classOne = menu
    ? "collapse navbar-collapse"
    : "collapse navbar-collapse show";
  const classTwo = menu
    ? "navbar-toggler navbar-toggler-right collapsed"
    : "navbar-toggler navbar-toggler-right";

  return (
    <>
      {/* Top Header */}
      <TopHeaderTwo />

      <div id="navbar" className="navbar-area">
        <div className="main-navbar">
          <div className="container">
            <nav className="navbar navbar-expand-lg navbar-light">
              <Link href="/" className="navbar-brand">
                <img src="/images/logo.png" alt="logo" />
              </Link>

              <button
                onClick={toggleNavbar}
                className={classTwo}
                type="button"
                data-toggle="collapse"
                data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="icon-bar top-bar"></span>
                <span className="icon-bar middle-bar"></span>
                <span className="icon-bar bottom-bar"></span>
              </button>

              <div className={classOne} id="navbarSupportedContent">
                <ul className="navbar-nav m-auto">
                  <li className="nav-item">
                    <Link href="#" onClick={(e) => e.preventDefault()}>
                      <span className="nav-link">
                        Home <i className="ri-add-line"></i>
                      </span>
                    </Link>

                    <ul className="dropdown-menu">
                      <li className="nav-item">
                        <Link href="/">
                          <span
                            className={`nav-link ${
                              currentPath == "/" && "active"
                            }`}
                          >
                            Home Demo - 1
                          </span>
                        </Link>
                      </li>

                      <li className="nav-item">
                        <Link href="/index-2/">
                          <span
                            className={`nav-link ${
                              currentPath == "/index-2/" && "active"
                            }`}
                          >
                            Home Demo - 2
                          </span>
                        </Link>
                      </li>

                      <li className="nav-item">
                        <Link href="/index-3/">
                          <span
                            className={`nav-link ${
                              currentPath == "/index-3/" && "active"
                            }`}
                          >
                            Home Demo - 3
                          </span>
                        </Link>
                      </li>

                      <li className="nav-item">
                        <Link href="/index-4/">
                          <span
                            className={`nav-link ${
                              currentPath == "/index-4/" && "active"
                            }`}
                          >
                            Home Demo - 4 (Static Image)
                          </span>
                        </Link>
                      </li>

                      <li className="nav-item">
                        <Link href="/index-5/">
                          <span
                            className={`nav-link ${
                              currentPath == "/index-5/" && "active"
                            }`}
                          >
                            Home Demo - 5 (Static Image)
                          </span>
                        </Link>
                      </li>
                    </ul>
                  </li>

                  <li className="nav-item">
                    <Link href="#" onClick={(e) => e.preventDefault()}>
                      <span className="nav-link">
                        About <i className="ri-add-line"></i>
                      </span>
                    </Link>

                    <ul className="dropdown-menu">
                      <li className="nav-item">
                        <Link href="/about-us/">
                          <span
                            className={`nav-link ${
                              currentPath == "/about-us/" && "active"
                            }`}
                          >
                            About Us One
                          </span>
                        </Link>
                      </li>

                      <li className="nav-item">
                        <Link href="/about-us-2/">
                          <span
                            className={`nav-link ${
                              currentPath == "/about-us-2/" && "active"
                            }`}
                          >
                            About Us Two
                          </span>
                        </Link>
                      </li>

                      <li className="nav-item">
                        <Link href="/features/">
                          <span
                            className={`nav-link ${
                              currentPath == "/features/" && "active"
                            }`}
                          >
                            Features One
                          </span>
                        </Link>
                      </li>

                      <li className="nav-item">
                        <Link href="/features-2/">
                          <span
                            className={`nav-link ${
                              currentPath == "/features-2/" && "active"
                            }`}
                          >
                            Features Two
                          </span>
                        </Link>
                      </li>

                      <li className="nav-item">
                        <Link href="/testimonials/">
                          <span
                            className={`nav-link ${
                              currentPath == "/testimonials/" && "active"
                            }`}
                          >
                            Testimonials
                          </span>
                        </Link>
                      </li>
                    </ul>
                  </li>

                  <li className="nav-item">
                    <Link href="#" onClick={(e) => e.preventDefault()}>
                      <span className="nav-link">
                        Services <i className="ri-add-line"></i>
                      </span>
                    </Link>

                    <ul className="dropdown-menu">
                      <li className="nav-item">
                        <Link href="/services/">
                          <span
                            className={`nav-link ${
                              currentPath == "/services/" && "active"
                            }`}
                          >
                            Services One
                          </span>
                        </Link>
                      </li>

                      <li className="nav-item">
                        <Link href="/services-2/">
                          <span
                            className={`nav-link ${
                              currentPath == "/services-2/" && "active"
                            }`}
                          >
                            Services Two
                          </span>
                        </Link>
                      </li>

                      <li className="nav-item">
                        <Link href="/services-3/">
                          <span
                            className={`nav-link ${
                              currentPath == "/services-3/" && "active"
                            }`}
                          >
                            Services Three
                          </span>
                        </Link>
                      </li>

                      <li className="nav-item">
                        <Link href="/services-details/">
                          <span
                            className={`nav-link ${
                              currentPath == "/services-details/" && "active"
                            }`}
                          >
                            Services Details
                          </span>
                        </Link>
                      </li>
                    </ul>
                  </li>

                  <li className="nav-item">
                    <Link href="#" onClick={(e) => e.preventDefault()}>
                      <span className="nav-link">
                        Pages <i className="ri-add-line"></i>
                      </span>
                    </Link>

                    <ul className="dropdown-menu">
                      <li className="nav-item">
                        <Link href="/team-member/">
                          <span
                            className={`nav-link ${
                              currentPath == "/team-member/" && "active"
                            }`}
                          >
                            Team Member
                          </span>
                        </Link>
                      </li>

                      <li className="nav-item">
                        <Link href="/pricing/">
                          <span
                            className={`nav-link ${
                              currentPath == "/pricing/" && "active"
                            }`}
                          >
                            Pricing
                          </span>
                        </Link>
                      </li>

                      <li className="nav-item">
                        <Link href="/gallery/">
                          <span
                            className={`nav-link ${
                              currentPath == "/gallery/" && "active"
                            }`}
                          >
                            Gallery
                          </span>
                        </Link>
                      </li>

                      <li className="nav-item">
                        <Link href="/faq/">
                          <span
                            className={`nav-link ${
                              currentPath == "/faq/" && "active"
                            }`}
                          >
                            Faq's
                          </span>
                        </Link>
                      </li>

                      <li className="nav-item">
                        <Link href="#" onClick={(e) => e.preventDefault()}>
                          <span className="nav-link">
                            Events <i className="ri-arrow-right-s-line"></i>
                          </span>
                        </Link>

                        <ul className="dropdown-menu">
                          <li className="nav-item">
                            <Link href="/events/">
                              <span
                                className={`nav-link ${
                                  currentPath == "/events/" && "active"
                                }`}
                              >
                                Events
                              </span>
                            </Link>
                          </li>

                          <li className="nav-item">
                            <Link href="/events-details/">
                              <span
                                className={`nav-link ${
                                  currentPath == "/events-details/" && "active"
                                }`}
                              >
                                Events Details
                              </span>
                            </Link>
                          </li>
                        </ul>
                      </li>

                      <li className="nav-item">
                        <Link href="/profile-authentication/">
                          <span
                            className={`nav-link ${
                              currentPath == "/profile-authentication/" &&
                              "active"
                            }`}
                          >
                            Profile Authentication
                          </span>
                        </Link>
                      </li>

                      <li className="nav-item">
                        <Link href="/membership-levels/">
                          <span
                            className={`nav-link ${
                              currentPath == "/membership-levels/" && "active"
                            }`}
                          >
                            Membership Levels
                          </span>
                        </Link>
                      </li>

                      <li className="nav-item">
                        <Link href="/404/">
                          <span
                            className={`nav-link ${
                              currentPath == "/404/" && "active"
                            }`}
                          >
                            404 Error Page
                          </span>
                        </Link>
                      </li>

                      <li className="nav-item">
                        <Link href="/coming-soon/">
                          <span
                            className={`nav-link ${
                              currentPath == "/coming-soon/" && "active"
                            }`}
                          >
                            Coming Soon
                          </span>
                        </Link>
                      </li>

                      <li className="nav-item">
                        <Link href="/privacy-policy/">
                          <span
                            className={`nav-link ${
                              currentPath == "/privacy-policy/" && "active"
                            }`}
                          >
                            Privacy Policy
                          </span>
                        </Link>
                      </li>

                      <li className="nav-item">
                        <Link href="/terms-of-service/">
                          <span
                            className={`nav-link ${
                              currentPath == "/terms-of-service/" && "active"
                            }`}
                          >
                            Terms of Service
                          </span>
                        </Link>
                      </li>
                    </ul>
                  </li>

                  <li className="nav-item">
                    <Link href="#" onClick={(e) => e.preventDefault()}>
                      <span className="nav-link">
                        Case Study <i className="ri-add-line"></i>
                      </span>
                    </Link>

                    <ul className="dropdown-menu">
                      <li className="nav-item">
                        <Link href="/case-study/">
                          <span
                            className={`nav-link ${
                              currentPath == "/case-study/" && "active"
                            }`}
                          >
                            Case Study One
                          </span>
                        </Link>
                      </li>

                      <li className="nav-item">
                        <Link href="/case-study-2/">
                          <span
                            className={`nav-link ${
                              currentPath == "/case-study-2/" && "active"
                            }`}
                          >
                            Case Study Two
                          </span>
                        </Link>
                      </li>

                      <li className="nav-item">
                        <Link href="/case-study-details/">
                          <span
                            className={`nav-link ${
                              currentPath == "/case-study-details/" && "active"
                            }`}
                          >
                            Case Study Details
                          </span>
                        </Link>
                      </li>
                    </ul>
                  </li>

                  <li className="nav-item">
                    <Link href="#" onClick={(e) => e.preventDefault()}>
                      <span className="nav-link">
                        Blog <i className="ri-add-line"></i>
                      </span>
                    </Link>

                    <ul className="dropdown-menu">
                      <li className="nav-item">
                        <Link href="/blog/">
                          <span
                            className={`nav-link ${
                              currentPath == "/blog/" && "active"
                            }`}
                          >
                            Blog
                          </span>
                        </Link>
                      </li>

                      <li className="nav-item">
                        <Link href="/blog-right-sidebar/">
                          <span
                            className={`nav-link ${
                              currentPath == "/blog-right-sidebar/" && "active"
                            }`}
                          >
                            Blog Right Sidebar
                          </span>
                        </Link>
                      </li>

                      <li className="nav-item">
                        <Link href="/blog-details/">
                          <span
                            className={`nav-link ${
                              currentPath == "/blog-details/" && "active"
                            }`}
                          >
                            Blog Details
                          </span>
                        </Link>
                      </li>
                    </ul>
                  </li>

                  <li className="nav-item">
                    <Link href="/contact/">
                      <span
                        className={`nav-link ${
                          currentPath == "/contact/" && "active"
                        }`}
                      >
                        Contact
                      </span>
                    </Link>
                  </li>
                </ul>
              </div>

              <div className="others-options d-flex align-items-center">
                <div className="option-item">
                  <i
                    className="search-btn ri-search-line"
                    onClick={handleToggleSearchModal}
                  ></i>
                </div>

                <div className="option-item">
                  <Link href="/contact">
                    <span className="default-btn">
                      Let’s Talk
                      <i className="ri-message-line"></i>
                      <span></span>
                    </span>
                  </Link>
                </div>

                <div className="option-item">
                  <div
                    className="side-menu-btn"
                    onClick={handleToggleSidebarModal}
                  >
                    <i className="ri-menu-4-line"></i>
                  </div>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </div>

      {/* Search Form */}
      <div
        className={`search-overlay ${
          isActiveSearchModal ? "" : "search-overlay-active"
        }`}
      >
        <div className="d-table">
          <div className="d-table-cell">
            <div className="search-overlay-layer"></div>
            <div className="search-overlay-layer"></div>
            <div className="search-overlay-layer"></div>

            <div
              className="search-overlay-close"
              onClick={handleToggleSearchModal}
            >
              <span className="search-overlay-close-line"></span>
              <span className="search-overlay-close-line"></span>
            </div>

            <div className="search-overlay-form">
              <form>
                <input
                  type="text"
                  className="input-search"
                  placeholder="Search here..."
                />
                <button type="submit">
                  <i className="ri-search-2-line"></i>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      {/* End Search Form */}

      {/* Sidebar Modal */}
      <div
        className={`sidebarModal modal right ${
          isActiveSidebarModal ? "" : "show"
        }`}
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <button
              type="button"
              className="close"
              onClick={handleToggleSidebarModal}
            >
              <i className="ri-close-line"></i>
            </button>

            <div className="modal-body">
              <div className="title">
                <Link href="/" className="d-inline-block">
                  <img src="/images/logo.png" alt="image" />
                </Link>
              </div>

              <div className="sidebar-content">
                <h3>About Us</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipiscing elit sed do
                  eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                  enim ad minim veniam quis nostrud exercitation ullamco laboris
                  nisi ut aliquip ex ea commodo consequat.
                </p>

                <div className="sidebar-btn">
                  <Link href="/contact">
                    <div className="default-btn">
                      Let’s Talk
                      <i className="ri-message-line"></i>
                      <span></span>
                    </div>
                  </Link>
                </div>
              </div>

              <div className="sidebar-contact-info">
                <h3>Contact Information</h3>

                <ul className="info-list">
                  <li>
                    <i className="ri-phone-fill"></i>
                    <a href="tel:+11234567890">+1 (123) 456 7890</a>
                  </li>

                  <li>
                    <i className="ri-mail-line"></i>
                    <a href="mailto:hello@ozen.com">hello@ozen.com</a>
                  </li>

                  <li>
                    <i className="ri-map-pin-line"></i>
                    121 King St, Melbourne VIC <br /> 3000, Australia.
                  </li>
                </ul>
              </div>

              <ul className="sidebar-social-list">
                <li>
                  <a href="https://www.facebook.com/" target="_blank">
                    <i className="ri-facebook-fill"></i>
                  </a>
                </li>
                <li>
                  <a href="https://twitter.com/" target="_blank">
                    <i className="ri-twitter-fill"></i>
                  </a>
                </li>
                <li>
                  <a href="https://www.linkedin.com/" target="_blank">
                    <i className="ri-linkedin-fill"></i>
                  </a>
                </li>
                <li>
                  <a href="https://www.instagram.com/" target="_blank">
                    <i className="ri-instagram-fill"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      {/* End Sidebar Modal */}

      {/* Navbar, Search Form & Sidebar Modal Style */}
      <style jsx>{`
        {/* Navbar Area CSS */}
        .main-navbar {
          padding: 10px 0;
        }
        .main-navbar .navbar {
          -webkit-transition: var(--transition);
          transition: var(--transition);
          padding: 0;
        }
        .main-navbar .navbar .navbar-brand {
          padding: 0;
        }
        .main-navbar .navbar ul {
          padding-left: 0;
          list-style-type: none;
          margin-bottom: 0;
        }
        .main-navbar .navbar .navbar-nav .nav-item {
          position: relative;
          margin-left: 15px;
          margin-right: 15px;
        }
        .main-navbar .navbar .navbar-nav .nav-item .nav-link {
          color: var(--paragraph-color);
          font-size: var(--font-size);
          font-weight: 600;
          padding-left: 0;
          padding-right: 0;
          padding-top: 25px;
          padding-bottom: 25px;
          -webkit-transition: var(--transition);
          transition: var(--transition);
        }
        .main-navbar .navbar .navbar-nav .nav-item .nav-link i {
          font-size: 14px;
          position: relative;
          top: 2px;
          display: inline-block;
          margin-left: -2px;
          margin-right: -2px;
        }
        .main-navbar .navbar .navbar-nav .nav-item .nav-link:hover,
        .main-navbar .navbar .navbar-nav .nav-item .nav-link:focus,
        .main-navbar .navbar .navbar-nav .nav-item .nav-link.active {
          color: var(--main-color);
        }
        .main-navbar .navbar .navbar-nav .nav-item:last-child {
          margin-right: 0;
        }
        .main-navbar .navbar .navbar-nav .nav-item:first-child {
          margin-left: 0;
        }
        .main-navbar .navbar .navbar-nav .nav-item:hover .nav-link,
        .main-navbar .navbar .navbar-nav .nav-item.active .nav-link {
          color: var(--main-color);
        }
        .main-navbar .navbar .navbar-nav .nav-item .dropdown-menu {
          border: none;
          top: 70px;
          left: 0;
          z-index: 99;
          opacity: 0;
          width: 280px;
          display: block;
          border-radius: 8px;
          padding: 10px 0;
          margin-top: 15px;
          position: absolute;
          visibility: hidden;
          background: var(--white-color);
          -webkit-transition: all 0.2s ease-in-out;
          transition: all 0.2s ease-in-out;
          -webkit-box-shadow: 0px 0px 15px 0px rgba(0, 0, 0, 0.1);
          box-shadow: 0px 0px 15px 0px rgba(0, 0, 0, 0.1);
        }
        .main-navbar .navbar .navbar-nav .nav-item .dropdown-menu li {
          margin: 0;
        }
        .main-navbar .navbar .navbar-nav .nav-item .dropdown-menu li .nav-link {
          padding: 10px 20px;
          position: relative;
          display: block;
          color: var(--paragraph-color);
          font-size: 15px;
          font-weight: 600;
        }
        .main-navbar
          .navbar
          .navbar-nav
          .nav-item
          .dropdown-menu
          li
          .nav-link
          i {
          margin: 0;
          position: absolute;
          top: 50%;
          font-size: 15px;
          -webkit-transform: translateY(-50%);
          transform: translateY(-50%);
          right: 15px;
        }
        .main-navbar
          .navbar
          .navbar-nav
          .nav-item
          .dropdown-menu
          li
          .nav-link::before {
          content: "";
          position: absolute;
          left: 20px;
          top: 50%;
          -webkit-transform: translateY(-50%);
          transform: translateY(-50%);
          width: 8px;
          height: 8px;
          -webkit-transition: var(--transition);
          transition: var(--transition);
          background-color: var(--main-color);
          border-radius: 50%;
          opacity: 0;
          visibility: hidden;
        }
        .main-navbar
          .navbar
          .navbar-nav
          .nav-item
          .dropdown-menu
          li
          .nav-link:hover,
        .main-navbar
          .navbar
          .navbar-nav
          .nav-item
          .dropdown-menu
          li
          .nav-link:focus,
        .main-navbar
          .navbar
          .navbar-nav
          .nav-item
          .dropdown-menu
          li
          .nav-link.active {
          color: var(--main-color);
          padding-left: 35px;
        }
        .main-navbar
          .navbar
          .navbar-nav
          .nav-item
          .dropdown-menu
          li
          .nav-link:hover::before,
        .main-navbar
          .navbar
          .navbar-nav
          .nav-item
          .dropdown-menu
          li
          .nav-link:focus::before,
        .main-navbar
          .navbar
          .navbar-nav
          .nav-item
          .dropdown-menu
          li
          .nav-link.active::before {
          opacity: 1;
          visibility: visible;
        }
        .main-navbar
          .navbar
          .navbar-nav
          .nav-item
          .dropdown-menu
          li
          .dropdown-menu {
          top: 0;
          opacity: 0;
          left: -100%;
          margin-top: 15px;
          visibility: hidden;
        }
        .main-navbar
          .navbar
          .navbar-nav
          .nav-item
          .dropdown-menu
          li
          .dropdown-menu
          li
          .nav-link {
          color: var(--paragraph-color);
        }
        .main-navbar
          .navbar
          .navbar-nav
          .nav-item
          .dropdown-menu
          li
          .dropdown-menu
          li
          .nav-link:hover,
        .main-navbar
          .navbar
          .navbar-nav
          .nav-item
          .dropdown-menu
          li
          .dropdown-menu
          li
          .nav-link:focus,
        .main-navbar
          .navbar
          .navbar-nav
          .nav-item
          .dropdown-menu
          li
          .dropdown-menu
          li
          .nav-link.active {
          color: var(--main-color);
        }
        .main-navbar
          .navbar
          .navbar-nav
          .nav-item
          .dropdown-menu
          li
          .dropdown-menu
          li
          .dropdown-menu {
          top: 0;
          opacity: 0;
          left: 100%;
          visibility: hidden;
        }
        .main-navbar
          .navbar
          .navbar-nav
          .nav-item
          .dropdown-menu
          li
          .dropdown-menu
          li
          .dropdown-menu
          li
          .nav-link {
          color: var(--paragraph-color);
        }
        .main-navbar
          .navbar
          .navbar-nav
          .nav-item
          .dropdown-menu
          li
          .dropdown-menu
          li
          .dropdown-menu
          li
          .nav-link:hover,
        .main-navbar
          .navbar
          .navbar-nav
          .nav-item
          .dropdown-menu
          li
          .dropdown-menu
          li
          .dropdown-menu
          li
          .nav-link:focus,
        .main-navbar
          .navbar
          .navbar-nav
          .nav-item
          .dropdown-menu
          li
          .dropdown-menu
          li
          .dropdown-menu
          li
          .nav-link.active {
          color: var(--main-color);
        }
        .main-navbar
          .navbar
          .navbar-nav
          .nav-item
          .dropdown-menu
          li
          .dropdown-menu
          li
          .dropdown-menu
          li
          .dropdown-menu {
          top: 0;
          opacity: 0;
          left: -100%;
          visibility: hidden;
        }
        .main-navbar
          .navbar
          .navbar-nav
          .nav-item
          .dropdown-menu
          li
          .dropdown-menu
          li
          .dropdown-menu
          li
          .dropdown-menu
          li
          .nav-link {
          color: var(--paragraph-color);
        }
        .main-navbar
          .navbar
          .navbar-nav
          .nav-item
          .dropdown-menu
          li
          .dropdown-menu
          li
          .dropdown-menu
          li
          .dropdown-menu
          li
          .nav-link:hover,
        .main-navbar
          .navbar
          .navbar-nav
          .nav-item
          .dropdown-menu
          li
          .dropdown-menu
          li
          .dropdown-menu
          li
          .dropdown-menu
          li
          .nav-link:focus,
        .main-navbar
          .navbar
          .navbar-nav
          .nav-item
          .dropdown-menu
          li
          .dropdown-menu
          li
          .dropdown-menu
          li
          .dropdown-menu
          li
          .nav-link.active {
          color: var(--main-color);
        }
        .main-navbar
          .navbar
          .navbar-nav
          .nav-item
          .dropdown-menu
          li
          .dropdown-menu
          li
          .dropdown-menu
          li
          .dropdown-menu
          li
          .dropdown-menu {
          top: 0;
          opacity: 0;
          left: 100%;
          visibility: hidden;
        }
        .main-navbar
          .navbar
          .navbar-nav
          .nav-item
          .dropdown-menu
          li
          .dropdown-menu
          li
          .dropdown-menu
          li
          .dropdown-menu
          li
          .dropdown-menu
          li
          .nav-link {
          color: var(--paragraph-color);
        }
        .main-navbar
          .navbar
          .navbar-nav
          .nav-item
          .dropdown-menu
          li
          .dropdown-menu
          li
          .dropdown-menu
          li
          .dropdown-menu
          li
          .dropdown-menu
          li
          .nav-link:hover,
        .main-navbar
          .navbar
          .navbar-nav
          .nav-item
          .dropdown-menu
          li
          .dropdown-menu
          li
          .dropdown-menu
          li
          .dropdown-menu
          li
          .dropdown-menu
          li
          .nav-link:focus,
        .main-navbar
          .navbar
          .navbar-nav
          .nav-item
          .dropdown-menu
          li
          .dropdown-menu
          li
          .dropdown-menu
          li
          .dropdown-menu
          li
          .dropdown-menu
          li
          .nav-link.active {
          color: var(--main-color);
        }
        .main-navbar
          .navbar
          .navbar-nav
          .nav-item
          .dropdown-menu
          li
          .dropdown-menu
          li
          .dropdown-menu
          li
          .dropdown-menu
          li
          .dropdown-menu
          li
          .dropdown-menu {
          top: 0;
          opacity: 0;
          left: -100%;
          visibility: hidden;
        }
        .main-navbar
          .navbar
          .navbar-nav
          .nav-item
          .dropdown-menu
          li
          .dropdown-menu
          li
          .dropdown-menu
          li
          .dropdown-menu
          li
          .dropdown-menu
          li
          .dropdown-menu
          li
          .nav-link {
          color: var(--paragraph-color);
        }
        .main-navbar
          .navbar
          .navbar-nav
          .nav-item
          .dropdown-menu
          li
          .dropdown-menu
          li
          .dropdown-menu
          li
          .dropdown-menu
          li
          .dropdown-menu
          li
          .dropdown-menu
          li
          .nav-link:hover,
        .main-navbar
          .navbar
          .navbar-nav
          .nav-item
          .dropdown-menu
          li
          .dropdown-menu
          li
          .dropdown-menu
          li
          .dropdown-menu
          li
          .dropdown-menu
          li
          .dropdown-menu
          li
          .nav-link:focus,
        .main-navbar
          .navbar
          .navbar-nav
          .nav-item
          .dropdown-menu
          li
          .dropdown-menu
          li
          .dropdown-menu
          li
          .dropdown-menu
          li
          .dropdown-menu
          li
          .dropdown-menu
          li
          .nav-link.active {
          color: var(--main-color);
        }
        .main-navbar
          .navbar
          .navbar-nav
          .nav-item
          .dropdown-menu
          li
          .dropdown-menu
          li
          .dropdown-menu
          li
          .dropdown-menu
          li
          .dropdown-menu
          li
          .dropdown-menu
          li
          .dropdown-menu {
          top: 0;
          opacity: 0;
          left: 100%;
          visibility: hidden;
        }
        .main-navbar
          .navbar
          .navbar-nav
          .nav-item
          .dropdown-menu
          li
          .dropdown-menu
          li
          .dropdown-menu
          li
          .dropdown-menu
          li
          .dropdown-menu
          li
          .dropdown-menu
          li
          .dropdown-menu
          li
          .nav-link {
          color: var(--paragraph-color);
        }

        .main-navbar
          .navbar
          .navbar-nav
          .nav-item
          .dropdown-menu
          li
          .dropdown-menu
          li
          .dropdown-menu
          li
          .dropdown-menu
          li
          .dropdown-menu
          li
          .dropdown-menu
          li
          .dropdown-menu
          li
          .nav-link:hover,
        .main-navbar
          .navbar
          .navbar-nav
          .nav-item
          .dropdown-menu
          li
          .dropdown-menu
          li
          .dropdown-menu
          li
          .dropdown-menu
          li
          .dropdown-menu
          li
          .dropdown-menu
          li
          .dropdown-menu
          li
          .nav-link:focus,
        .main-navbar
          .navbar
          .navbar-nav
          .nav-item
          .dropdown-menu
          li
          .dropdown-menu
          li
          .dropdown-menu
          li
          .dropdown-menu
          li
          .dropdown-menu
          li
          .dropdown-menu
          li
          .dropdown-menu
          li
          .nav-link.active {
          color: var(--main-color);
        }
        .main-navbar
          .navbar
          .navbar-nav
          .nav-item
          .dropdown-menu
          li
          .dropdown-menu
          li
          .dropdown-menu
          li
          .dropdown-menu
          li
          .dropdown-menu
          li
          .dropdown-menu
          li.active
          .nav-link {
          color: var(--main-color);
        }
        .main-navbar
          .navbar
          .navbar-nav
          .nav-item
          .dropdown-menu
          li
          .dropdown-menu
          li
          .dropdown-menu
          li
          .dropdown-menu
          li
          .dropdown-menu
          li
          .dropdown-menu
          li:hover
          .dropdown-menu {
          opacity: 1;
          visibility: visible;
        }
        .main-navbar
          .navbar
          .navbar-nav
          .nav-item
          .dropdown-menu
          li
          .dropdown-menu
          li
          .dropdown-menu
          li
          .dropdown-menu
          li
          .dropdown-menu
          li.active
          .nav-link {
          color: var(--main-color);
        }
        .main-navbar
          .navbar
          .navbar-nav
          .nav-item
          .dropdown-menu
          li
          .dropdown-menu
          li
          .dropdown-menu
          li
          .dropdown-menu
          li
          .dropdown-menu
          li:hover
          .dropdown-menu {
          opacity: 1;
          visibility: visible;
        }
        .main-navbar
          .navbar
          .navbar-nav
          .nav-item
          .dropdown-menu
          li
          .dropdown-menu
          li
          .dropdown-menu
          li
          .dropdown-menu
          li.active
          .nav-link {
          color: var(--main-color);
        }
        .main-navbar
          .navbar
          .navbar-nav
          .nav-item
          .dropdown-menu
          li
          .dropdown-menu
          li
          .dropdown-menu
          li
          .dropdown-menu
          li:hover
          .dropdown-menu {
          opacity: 1;
          visibility: visible;
        }
        .main-navbar
          .navbar
          .navbar-nav
          .nav-item
          .dropdown-menu
          li
          .dropdown-menu
          li
          .dropdown-menu
          li.active
          .nav-link {
          color: var(--main-color);
        }
        .main-navbar
          .navbar
          .navbar-nav
          .nav-item
          .dropdown-menu
          li
          .dropdown-menu
          li
          .dropdown-menu
          li:hover
          .dropdown-menu {
          opacity: 1;
          visibility: visible;
        }
        .main-navbar
          .navbar
          .navbar-nav
          .nav-item
          .dropdown-menu
          li
          .dropdown-menu
          li.active
          .nav-link {
          color: var(--main-color);
        }
        .main-navbar
          .navbar
          .navbar-nav
          .nav-item
          .dropdown-menu
          li
          .dropdown-menu
          li:hover
          .dropdown-menu {
          opacity: 1;
          visibility: visible;
        }
        .main-navbar
          .navbar
          .navbar-nav
          .nav-item
          .dropdown-menu
          li.active
          .nav-link {
          color: var(--main-color);
        }
        .main-navbar
          .navbar
          .navbar-nav
          .nav-item
          .dropdown-menu
          li:hover
          .dropdown-menu {
          opacity: 1;
          visibility: visible;
          margin-top: 0;
        }
        .main-navbar .navbar .navbar-nav .nav-item:hover .dropdown-menu {
          opacity: 1;
          visibility: visible;
          margin-top: 0;
        }
        .main-navbar .navbar .others-options .option-item {
          position: relative;
          margin-right: 25px;
        }
        .main-navbar .navbar .others-options .option-item:last-child {
          margin-right: 0;
        }
        .main-navbar .navbar .others-options .option-item .search-btn {
          cursor: pointer;
          -webkit-transition: var(--transition);
          transition: var(--transition);
          color: var(--paragraph-color);
          font-size: 25px;
          transition: var(--transition);
        }
        .main-navbar .navbar .others-options .option-item .search-btn:hover {
          color: var(--main-color);
        }
        .main-navbar .navbar .others-options .option-item .close-btn {
          cursor: pointer;
          display: none;
          -webkit-transition: var(--transition);
          transition: var(--transition);
          color: var(--paragraph-color);
          font-size: 25px;
          transition: var(--transition);
        }
        .main-navbar .navbar .others-options .option-item .close-btn:hover {
          color: var(--main-color);
        }
        .main-navbar .navbar .others-options .option-item .close-btn.active {
          display: block;
        }
        .main-navbar .navbar .others-options .option-item .default-btn {
          background-color: var(--optional-color);
          color: var(--white-color);
          padding: 12px 50px 12px 25px;
        }
        .main-navbar .navbar .others-options .option-item .default-btn span {
          background-color: var(--main-color);
        }
        .main-navbar .navbar .others-options .option-item .side-menu-btn i {
          font-size: 25px;
          color: var(--paragraph-color);
          cursor: pointer;
          -webkit-transition: var(--transition);
          transition: var(--transition);
        }
        .main-navbar
          .navbar
          .others-options
          .option-item
          .side-menu-btn
          i:hover {
          color: var(--main-color);
        }
        .navbar-box-style .main-navbar {
          padding: 0;
        }
        .navbar-box-style .main-navbar .navbar {
          padding: 10px 30px;
          background: var(--white-color);
          border-radius: 5px;
        }
        .navbar-box-style .main-navbar .navbar .navbar-nav .nav-item a {
          color: var(--paragraph-color);
        }
        .navbar-box-style .main-navbar .navbar .navbar-nav .nav-item a:hover,
        .navbar-box-style .main-navbar .navbar .navbar-nav .nav-item a:focus,
        .navbar-box-style .main-navbar .navbar .navbar-nav .nav-item a.active {
          color: var(--optional-color);
        }
        .navbar-box-style .main-navbar .navbar .navbar-nav .nav-item:hover a,
        .navbar-box-style .main-navbar .navbar .navbar-nav .nav-item.active a {
          color: var(--optional-color);
        }
        .navbar-box-style
          .main-navbar
          .navbar
          .navbar-nav
          .nav-item
          .dropdown-menu
          li
          a {
          color: var(--paragraph-color);
        }
        .navbar-box-style
          .main-navbar
          .navbar
          .navbar-nav
          .nav-item
          .dropdown-menu
          li
          a::before {
          background-color: var(--optional-color);
        }
        .navbar-box-style
          .main-navbar
          .navbar
          .navbar-nav
          .nav-item
          .dropdown-menu
          li
          a:hover,
        .navbar-box-style
          .main-navbar
          .navbar
          .navbar-nav
          .nav-item
          .dropdown-menu
          li
          a:focus,
        .navbar-box-style
          .main-navbar
          .navbar
          .navbar-nav
          .nav-item
          .dropdown-menu
          li
          a.active {
          color: var(--optional-color);
        }
        .navbar-box-style
          .main-navbar
          .navbar
          .navbar-nav
          .nav-item
          .dropdown-menu
          li
          .dropdown-menu
          li
          a {
          color: var(--paragraph-color);
        }
        .navbar-box-style
          .main-navbar
          .navbar
          .navbar-nav
          .nav-item
          .dropdown-menu
          li
          .dropdown-menu
          li
          a:hover,
        .navbar-box-style
          .main-navbar
          .navbar
          .navbar-nav
          .nav-item
          .dropdown-menu
          li
          .dropdown-menu
          li
          a:focus,
        .navbar-box-style
          .main-navbar
          .navbar
          .navbar-nav
          .nav-item
          .dropdown-menu
          li
          .dropdown-menu
          li
          a.active {
          color: var(--optional-color);
        }
        .navbar-box-style
          .main-navbar
          .navbar
          .navbar-nav
          .nav-item
          .dropdown-menu
          li
          .dropdown-menu
          li
          .dropdown-menu
          li
          a {
          color: var(--paragraph-color);
        }
        .navbar-box-style
          .main-navbar
          .navbar
          .navbar-nav
          .nav-item
          .dropdown-menu
          li
          .dropdown-menu
          li
          .dropdown-menu
          li
          a:hover,
        .navbar-box-style
          .main-navbar
          .navbar
          .navbar-nav
          .nav-item
          .dropdown-menu
          li
          .dropdown-menu
          li
          .dropdown-menu
          li
          a:focus,
        .navbar-box-style
          .main-navbar
          .navbar
          .navbar-nav
          .nav-item
          .dropdown-menu
          li
          .dropdown-menu
          li
          .dropdown-menu
          li
          a.active {
          color: var(--optional-color);
        }
        .navbar-box-style
          .main-navbar
          .navbar
          .navbar-nav
          .nav-item
          .dropdown-menu
          li
          .dropdown-menu
          li
          .dropdown-menu
          li
          .dropdown-menu
          li
          a {
          color: var(--paragraph-color);
        }
        .navbar-box-style
          .main-navbar
          .navbar
          .navbar-nav
          .nav-item
          .dropdown-menu
          li
          .dropdown-menu
          li
          .dropdown-menu
          li
          .dropdown-menu
          li
          a:hover,
        .navbar-box-style
          .main-navbar
          .navbar
          .navbar-nav
          .nav-item
          .dropdown-menu
          li
          .dropdown-menu
          li
          .dropdown-menu
          li
          .dropdown-menu
          li
          a:focus,
        .navbar-box-style
          .main-navbar
          .navbar
          .navbar-nav
          .nav-item
          .dropdown-menu
          li
          .dropdown-menu
          li
          .dropdown-menu
          li
          .dropdown-menu
          li
          a.active {
          color: var(--optional-color);
        }
        .navbar-box-style
          .main-navbar
          .navbar
          .navbar-nav
          .nav-item
          .dropdown-menu
          li
          .dropdown-menu
          li
          .dropdown-menu
          li
          .dropdown-menu
          li
          .dropdown-menu
          li
          a {
          color: var(--paragraph-color);
        }
        .navbar-box-style
          .main-navbar
          .navbar
          .navbar-nav
          .nav-item
          .dropdown-menu
          li
          .dropdown-menu
          li
          .dropdown-menu
          li
          .dropdown-menu
          li
          .dropdown-menu
          li
          a:hover,
        .navbar-box-style
          .main-navbar
          .navbar
          .navbar-nav
          .nav-item
          .dropdown-menu
          li
          .dropdown-menu
          li
          .dropdown-menu
          li
          .dropdown-menu
          li
          .dropdown-menu
          li
          a:focus,
        .navbar-box-style
          .main-navbar
          .navbar
          .navbar-nav
          .nav-item
          .dropdown-menu
          li
          .dropdown-menu
          li
          .dropdown-menu
          li
          .dropdown-menu
          li
          .dropdown-menu
          li
          a.active {
          color: var(--optional-color);
        }
        .navbar-box-style
          .main-navbar
          .navbar
          .navbar-nav
          .nav-item
          .dropdown-menu
          li
          .dropdown-menu
          li
          .dropdown-menu
          li
          .dropdown-menu
          li
          .dropdown-menu
          li
          .dropdown-menu
          li
          a {
          color: var(--paragraph-color);
        }
        .navbar-box-style
          .main-navbar
          .navbar
          .navbar-nav
          .nav-item
          .dropdown-menu
          li
          .dropdown-menu
          li
          .dropdown-menu
          li
          .dropdown-menu
          li
          .dropdown-menu
          li
          .dropdown-menu
          li
          a:hover,
        .navbar-box-style
          .main-navbar
          .navbar
          .navbar-nav
          .nav-item
          .dropdown-menu
          li
          .dropdown-menu
          li
          .dropdown-menu
          li
          .dropdown-menu
          li
          .dropdown-menu
          li
          .dropdown-menu
          li
          a:focus,
        .navbar-box-style
          .main-navbar
          .navbar
          .navbar-nav
          .nav-item
          .dropdown-menu
          li
          .dropdown-menu
          li
          .dropdown-menu
          li
          .dropdown-menu
          li
          .dropdown-menu
          li
          .dropdown-menu
          li
          a.active {
          color: var(--optional-color);
        }
        .navbar-box-style
          .main-navbar
          .navbar
          .navbar-nav
          .nav-item
          .dropdown-menu
          li
          .dropdown-menu
          li
          .dropdown-menu
          li
          .dropdown-menu
          li
          .dropdown-menu
          li
          .dropdown-menu
          li
          .dropdown-menu
          li
          a {
          color: var(--paragraph-color);
        }
        .navbar-box-style
          .main-navbar
          .navbar
          .navbar-nav
          .nav-item
          .dropdown-menu
          li
          .dropdown-menu
          li
          .dropdown-menu
          li
          .dropdown-menu
          li
          .dropdown-menu
          li
          .dropdown-menu
          li
          .dropdown-menu
          li
          a:hover,
        .navbar-box-style
          .main-navbar
          .navbar
          .navbar-nav
          .nav-item
          .dropdown-menu
          li
          .dropdown-menu
          li
          .dropdown-menu
          li
          .dropdown-menu
          li
          .dropdown-menu
          li
          .dropdown-menu
          li
          .dropdown-menu
          li
          a:focus,
        .navbar-box-style
          .main-navbar
          .navbar
          .navbar-nav
          .nav-item
          .dropdown-menu
          li
          .dropdown-menu
          li
          .dropdown-menu
          li
          .dropdown-menu
          li
          .dropdown-menu
          li
          .dropdown-menu
          li
          .dropdown-menu
          li
          a.active {
          color: var(--optional-color);
        }
        .navbar-box-style
          .main-navbar
          .navbar
          .navbar-nav
          .nav-item
          .dropdown-menu
          li
          .dropdown-menu
          li
          .dropdown-menu
          li
          .dropdown-menu
          li
          .dropdown-menu
          li
          .dropdown-menu
          li.active
          a {
          color: var(--optional-color);
        }
        .navbar-box-style
          .main-navbar
          .navbar
          .navbar-nav
          .nav-item
          .dropdown-menu
          li
          .dropdown-menu
          li
          .dropdown-menu
          li
          .dropdown-menu
          li
          .dropdown-menu
          li.active
          a {
          color: var(--optional-color);
        }
        .navbar-box-style
          .main-navbar
          .navbar
          .navbar-nav
          .nav-item
          .dropdown-menu
          li
          .dropdown-menu
          li
          .dropdown-menu
          li
          .dropdown-menu
          li.active
          a {
          color: var(--optional-color);
        }
        .navbar-box-style
          .main-navbar
          .navbar
          .navbar-nav
          .nav-item
          .dropdown-menu
          li
          .dropdown-menu
          li
          .dropdown-menu
          li.active
          a {
          color: var(--optional-color);
        }
        .navbar-box-style
          .main-navbar
          .navbar
          .navbar-nav
          .nav-item
          .dropdown-menu
          li
          .dropdown-menu
          li.active
          a {
          color: var(--optional-color);
        }
        .navbar-box-style
          .main-navbar
          .navbar
          .navbar-nav
          .nav-item
          .dropdown-menu
          li.active
          a {
          color: var(--optional-color);
        }
        .navbar-box-color .main-navbar {
          background-color: #f4f8fc;
        }
        .navbar-area.is-sticky {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          z-index: 999;
          background: var(--white-color);
          -webkit-box-shadow: 0 0 1.25rem rgba(108, 118, 134, 0.1);
          box-shadow: 0 0 1.25rem rgba(108, 118, 134, 0.1);
          -webkit-transition: var(--transition);
          transition: var(--transition);
        }
        .navbar-area.is-sticky.navbar-box-style .main-navbar {
          padding: 10px 0;
        }
        .navbar-area.is-sticky.navbar-box-style .main-navbar .navbar {
          padding: 0;
        }
        .navbar-area.is-sticky.navbar-box-color .main-navbar {
          background-color: var(--white-color);
        }
        .main-header-area {
          position: absolute;
          width: 100%;
          z-index: 9;
        }

        {/* Navbar toggler */}
        .navbar-toggler {
          border: none;
          border-radius: 0;
          padding: 0;
        }
        .navbar-toggler:focus {
          -webkit-box-shadow: none;
          box-shadow: none;
        }
        .navbar-toggler .icon-bar {
          width: 35px;
          -webkit-transition: all 0.3s;
          transition: all 0.3s;
          background: #2e2f46;
          height: 4px;
          display: block;
          border-radius: 3px;
        }
        .navbar-toggler .top-bar {
          -webkit-transform: rotate(45deg);
          transform: rotate(45deg);
          -webkit-transform-origin: 10% 10%;
          transform-origin: 10% 10%;
          left: 4px;
          position: relative;
        }
        .navbar-toggler .middle-bar {
          opacity: 0;
          margin: 5px 0;
        }
        .navbar-toggler .bottom-bar {
          -webkit-transform: rotate(-45deg);
          transform: rotate(-45deg);
          -webkit-transform-origin: 10% 90%;
          transform-origin: 10% 90%;
          left: 4px;
          position: relative;
        }
        .navbar-toggler.collapsed .top-bar {
          -webkit-transform: rotate(0);
          transform: rotate(0);
          left: 0;
        }
        .navbar-toggler.collapsed .middle-bar {
          opacity: 1;
        }
        .navbar-toggler.collapsed .bottom-bar {
          -webkit-transform: rotate(0);
          transform: rotate(0);
          left: 0;
        }

        {/* Search Overlay CSS */}
        .search-overlay {
          position: fixed;
          top: 0;
          right: 0;
          bottom: 0;
          left: 0;
          z-index: 99999;
          opacity: 0;
          visibility: hidden;
          -webkit-transition: all 0.3s ease-in-out;
          transition: all 0.3s ease-in-out;
          overflow: hidden;
        }
        .search-overlay .search-overlay-layer {
          position: absolute;
          top: 0;
          right: 0;
          bottom: 0;
          z-index: 1;
          -webkit-transform: translateX(100%);
          transform: translateX(100%);
        }
        .search-overlay .search-overlay-layer:nth-child(1) {
          left: 0;
          background-color: rgba(0, 0, 0, 0.5);
          -webkit-transition: all 0.3s ease-in-out 0s;
          transition: all 0.3s ease-in-out 0s;
        }
        .search-overlay .search-overlay-layer:nth-child(2) {
          left: 0;
          background-color: rgba(0, 0, 0, 0.4);
          -webkit-transition: all 0.3s ease-in-out 0.3s;
          transition: all 0.3s ease-in-out 0.3s;
        }
        .search-overlay .search-overlay-layer:nth-child(3) {
          left: 0;
          background-color: rgba(0, 0, 0, 0.7);
          -webkit-transition: all 0.9s ease-in-out 0.6s;
          transition: all 0.9s ease-in-out 0.6s;
        }
        .search-overlay .search-overlay-close {
          position: absolute;
          bottom: 40px;
          right: 40px;
          width: 50px;
          z-index: 2;
          text-align: center;
          cursor: pointer;
          padding: 10px;
          -webkit-transition: all 0.9s ease-in-out 1.5s;
          transition: all 0.9s ease-in-out 1.5s;
          opacity: 0;
          visibility: hidden;
        }
        .search-overlay .search-overlay-close .search-overlay-close-line {
          width: 100%;
          height: 3px;
          float: left;
          margin-bottom: 5px;
          background-color: #fff;
          -webkit-transition: all 500ms ease;
          transition: all 500ms ease;
        }
        .search-overlay
          .search-overlay-close
          .search-overlay-close-line:nth-child(1) {
          -webkit-transform: rotate(45deg);
          transform: rotate(45deg);
        }
        .search-overlay
          .search-overlay-close
          .search-overlay-close-line:nth-child(2) {
          margin-top: -7px;
          -webkit-transform: rotate(-45deg);
          transform: rotate(-45deg);
        }
        .search-overlay .search-overlay-close:hover .search-overlay-close-line {
          background: var(--optional-color);
          -webkit-transform: rotate(180deg);
          transform: rotate(180deg);
        }
        .search-overlay .search-overlay-form {
          -webkit-transition: all 0.9s ease-in-out 1.4s;
          transition: all 0.9s ease-in-out 1.4s;
          opacity: 0;
          visibility: hidden;
          position: absolute;
          left: 50%;
          top: 50%;
          -webkit-transform: translateY(-50%) translateX(-50%);
          transform: translateY(-50%) translateX(-50%);
          z-index: 2;
          max-width: 500px;
          width: 500px;
        }
        .search-overlay .search-overlay-form form {
          position: relative;
        }
        .search-overlay .search-overlay-form form .input-search {
          display: block;
          width: 100%;
          height: 60px;
          border: none;
          border-radius: 30px;
          color: var(--black-color);
          padding: 3px 0 0 25px;
        }
        .search-overlay
          .search-overlay-form
          form
          .input-search::-webkit-input-placeholder {
          -webkit-transition: var(--transition);
          transition: var(--transition);
          letter-spacing: 0.5px;
          color: var(--blackColor);
        }
        .search-overlay
          .search-overlay-form
          form
          .input-search:-ms-input-placeholder {
          -webkit-transition: var(--transition);
          transition: var(--transition);
          letter-spacing: 0.5px;
          color: var(--blackColor);
        }
        .search-overlay
          .search-overlay-form
          form
          .input-search::-ms-input-placeholder {
          -webkit-transition: var(--transition);
          transition: var(--transition);
          letter-spacing: 0.5px;
          color: var(--blackColor);
        }
        .search-overlay .search-overlay-form form .input-search::placeholder {
          -webkit-transition: var(--transition);
          transition: var(--transition);
          letter-spacing: 0.5px;
          color: var(--blackColor);
        }
        .search-overlay .search-overlay-form form .input-search:focus {
          outline: 0;
        }
        .search-overlay
          .search-overlay-form
          form
          .input-search:focus::-webkit-input-placeholder {
          color: transparent;
        }
        .search-overlay
          .search-overlay-form
          form
          .input-search:focus:-ms-input-placeholder {
          color: transparent;
        }
        .search-overlay
          .search-overlay-form
          form
          .input-search:focus::-ms-input-placeholder {
          color: transparent;
        }
        .search-overlay
          .search-overlay-form
          form
          .input-search:focus::placeholder {
          color: transparent;
        }
        .search-overlay .search-overlay-form form button {
          position: absolute;
          right: 5px;
          top: 5px;
          width: 50px;
          color: var(--white-color);
          height: 50px;
          border-radius: 50%;
          background-color: var(--main-color);
          -webkit-transition: var(--transition);
          transition: var(--transition);
          border: none;
          font-size: 20px;
          line-height: 50px;
        }
        .search-overlay .search-overlay-form form button:hover {
          background-color: var(--black-color);
          color: var(--white-color);
        }
        .search-overlay.search-overlay-active.search-overlay {
          opacity: 1;
          visibility: visible;
        }
        .search-overlay.search-overlay-active.search-overlay
          .search-overlay-layer {
          -webkit-transform: translateX(0);
          transform: translateX(0);
        }
        .search-overlay.search-overlay-active.search-overlay
          .search-overlay-close {
          opacity: 1;
          visibility: visible;
        }
        .search-overlay.search-overlay-active.search-overlay
          .search-overlay-form {
          opacity: 1;
          visibility: visible;
        }

        {/* Sidebar Modal CSS */}
        .modal.right {
          left: auto;
          right: -100%;
        }
        .modal.right .modal-dialog {
          position: fixed;
          margin: auto;
          width: 420px;
          height: 100%;
          -webkit-transform: translate3d(0%, 0, 0);
          transform: translate3d(0%, 0, 0);
        }
        .modal.right .modal-content {
          height: 100%;
          overflow-y: auto;
          background-color: var(--white-color);
          border: none;
          border-radius: 0;
        }
        .modal.right .modal-content button.close {
          float: unset;
          position: absolute;
          right: 20px;
          top: 30px;
          background-color: transparent;
          color: var(--black-color);
          z-index: 2;
          opacity: 1;
          border: none;
          text-shadow: unset;
          -webkit-box-shadow: unset;
          box-shadow: unset;
          font-size: 25px;
          -webkit-transition: var(--transition);
          transition: var(--transition);
        }
        .modal.right .modal-content button.close:hover {
          color: red;
        }
        .modal.right .modal-dialog {
          right: -100%;
          -webkit-transition: opacity 0.3s linear, right 0.3s ease-out;
          transition: opacity 0.3s linear, right 0.3s ease-out;
        }
        .modal.right.show {
          right: 0;
        }
        .modal.right.show .modal-dialog {
          right: 0;
        }
        .sidebarModal.modal {
          background-color: rgba(0, 0, 0, 0.3);
          display: block;
          opacity: 1;
        }
        .sidebarModal.modal .modal-body {
          padding: 35px 30px 45px;
        }
        .sidebarModal.modal .modal-body .sidebar-content {
          margin-top: 35px;
        }
        .sidebarModal.modal .modal-body .sidebar-content h3 {
          font-size: 22px;
          margin-bottom: 15px;
        }
        .sidebarModal.modal .modal-body .sidebar-content .sidebar-btn {
          margin-top: 25px;
        }
        .sidebarModal.modal .modal-body .sidebar-contact-info {
          margin-top: 30px;
        }
        .sidebarModal.modal .modal-body .sidebar-contact-info h3 {
          font-size: 22px;
          margin-bottom: 0;
        }
        .sidebarModal.modal .modal-body .sidebar-contact-info .info-list {
          padding-left: 0;
          margin-top: 30px;
          margin-bottom: 0;
        }
        .sidebarModal.modal .modal-body .sidebar-contact-info .info-list li {
          list-style-type: none;
          font-size: 14px;
          color: var(--paragraph-color);
          font-weight: 500;
          margin-bottom: 20px;
          position: relative;
          padding-left: 22px;
        }
        .sidebarModal.modal
          .modal-body
          .sidebar-contact-info
          .info-list
          li:last-child {
          margin-bottom: 0;
        }
        .sidebarModal.modal .modal-body .sidebar-contact-info .info-list li a {
          color: var(--paragraph-color);
        }
        .sidebarModal.modal
          .modal-body
          .sidebar-contact-info
          .info-list
          li
          a:hover {
          color: var(--main-color);
        }
        .sidebarModal.modal .modal-body .sidebar-contact-info .info-list li i {
          position: absolute;
          left: 0;
          top: 2px;
          font-size: var(--font-size);
          color: var(--main-color);
        }
        .sidebarModal.modal
          .modal-body
          .sidebar-contact-info
          .info-list
          li
          .ri-mail-line {
          color: #ff414b;
        }
        .sidebarModal.modal
          .modal-body
          .sidebar-contact-info
          .info-list
          li
          .ri-map-pin-line {
          color: #36cc72;
        }
        .sidebarModal.modal .modal-body .sidebar-social-list {
          list-style-type: none;
          padding-left: 0;
          margin-bottom: 0;
          margin-top: 30px;
        }
        .sidebarModal.modal .modal-body .sidebar-social-list li {
          display: inline-block;
          margin-right: 8px;
        }
        .sidebarModal.modal .modal-body .sidebar-social-list li:last-child {
          margin-right: 0;
        }
        .sidebarModal.modal .modal-body .sidebar-social-list li i {
          display: inline-block;
          height: 35px;
          width: 35px;
          line-height: 35px;
          background-color: var(--main-color);
          text-align: center;
          color: var(--white-color);
          font-size: var(--font-size);
          border-radius: 50%;
          -webkit-transition: var(--transition);
          transition: var(--transition);
        }
        .sidebarModal.modal .modal-body .sidebar-social-list li i:hover {
          -webkit-transform: translateY(-5px);
          transform: translateY(-5px);
          background-color: var(--optional-color);
          color: var(--white-color);
        }

        @media only screen and (max-width: 1199px) {
          .navbar-area {
            background-color: var(--white-color);
            padding-top: 15px;
            padding-bottom: 15px;
          }
        }

        {/* Responsive Style */}
        @media only screen and (max-width: 767px) {
          .modal.right .modal-dialog {
            width: 310px;
          }
        }

        @media only screen and (max-width: 575px) {
          .search-overlay .search-overlay-form {
            max-width: 300px;
            width: 300px;
          }
        }

        @media only screen and (min-width: 768px) and (max-width: 991px) {
        }

        @media only screen and (min-width: 992px) and (max-width: 1199px) {
          {/* Navbar */}
          .navbar-area {
            padding-top: 10px;
            padding-bottom: 10px;
          }
          .navbar-area.is-sticky.navbar-box-style .main-navbar {
            padding: 0;
          }
          .main-navbar {
            padding: 0;
          }
          .main-navbar .navbar .navbar-nav .nav-item {
            margin-left: 9px;
            margin-right: 9px;
          }
          .main-navbar .navbar .navbar-nav .nav-item a {
            font-size: 15px;
            padding-top: 20px;
            padding-bottom: 20px;
          }
          .main-navbar .navbar .navbar-nav .nav-item .dropdown-menu {
            width: 250px;
          }
          .main-navbar .navbar .navbar-nav .nav-item .dropdown-menu li a {
            font-size: 14px;
            padding: 8px 20px;
          }
          .main-navbar .navbar .others-options .option-item {
            margin-right: 15px;
          }
          .main-navbar .navbar .others-options .option-item .default-btn {
            padding: 10px 40px 10px 20px;
            font-size: 13px;
          }
          .main-navbar .navbar .others-options .option-item .default-btn i {
            right: 20px;
          }
          .navbar-box-style .main-navbar .navbar {
            padding: 0;
          }
        }

        @media only screen and (max-width: 991px) {
          {/* Navbar */}
          .navbar-area {
            box-shadow: 0 0 10px #ddd;
          }
          .navbar-area.is-sticky.navbar-box-style .main-navbar {
            padding: 0;
          }
          .main-navbar {
            padding: 0;
          }
          .main-navbar .navbar .navbar-nav {
            border-top: 1px solid #eee;
            overflow-y: auto;
            max-height: 60vh;
            margin-top: 10px !important;
            padding-right: 15px;
            padding-top: 15px;
          }
          .main-navbar .navbar .navbar-nav .nav-item {
            margin: 0;
          }
          .main-navbar .navbar .navbar-nav .nav-item a {
            padding-top: 8px;
            font-size: 15px;
            padding-bottom: 8px;
          }
          .main-navbar .navbar .navbar-nav .nav-item a i {
            display: none;
          }
          .main-navbar .navbar .navbar-nav .nav-item .dropdown-menu {
            position: relative;
            opacity: 1;
            visibility: visible;
            width: 100%;
            margin-top: 10px;
            top: 0 !important;
            border: 1px solid #eee;
            margin-top: 0;
            margin-bottom: 10px;
          }
          .main-navbar .navbar .navbar-nav .nav-item .dropdown-menu li a {
            padding: 8px 15px;
            font-size: 14px;
          }
          .main-navbar
            .navbar
            .navbar-nav
            .nav-item
            .dropdown-menu
            li
            .dropdown-menu {
            position: relative;
            opacity: 1;
            visibility: visible;
            width: 90%;
            margin-top: 10px;
            top: 0 !important;
            border: 1px solid #eee;
            margin-top: 0;
            margin-bottom: 10px;
            left: 15px;
          }
          .main-navbar .navbar .others-options {
            position: absolute;
            right: 45px;
            top: 5px;
          }
          .main-navbar .navbar .others-options .option-item {
            margin-right: 10px;
          }
          .main-navbar .navbar .others-options .option-item .default-btn {
            padding: 5px 8px;
            font-size: 10px;
            position: relative;
            top: -3px;
          }
          .main-navbar .navbar .others-options .option-item .default-btn i {
            display: none;
          }
          .navbar-box-style .main-navbar .navbar {
            padding: 0;
          }
        }

        @media only screen and (min-width: 1200px) and (max-width: 1399px) {
          .main-navbar .navbar .navbar-nav .nav-item {
            margin-left: 12px;
            margin-right: 12px;
          }
          .main-navbar .navbar .others-options .option-item {
            margin-right: 20px;
          }
        }
      `}</style>
    </>
  );
};

export default NavbarFour;
