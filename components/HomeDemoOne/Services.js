import React from "react";
import Link from "next/link";

const Services = () => {
  return (
    <>
      <div className="services-area pt-100 pb-70">
        <div className="container">
          <div className="section-title">
            <h2>Services We Offer</h2>
            <p>
              With a proven track record spanning over 12 years, our team combines technical prowess with creative ingenuity to deliver solutions that not only meet but exceed your expectations.
            </p>
          </div>

          <div className="row justify-content-center">
            <div 
              className="col-lg-4 col-md-6"
              data-aos="fade-up"
              data-aos-delay="100"
              data-aos-duration="1200"
              data-aos-once="false"
            >
              <div className="single-services">
                <div className="icon">
                  <i className="ri-quill-pen-line"></i>
                </div>
                <h3>
                  <Link href="/services-details">
                    <span>Custom Web Development</span>
                  </Link>
                </h3>
                <p>
                  Leverage our expertise to bring your unique vision to life. Our custom web development services ensure that your website or web application is precisely tailored to meet the specific needs of your business, incorporating the latest technologies and industry best practices.
                </p>

                <Link href="/services-details">
                  <span className="services-btn">
                    Read More <i className="ri-arrow-right-line"></i>
                  </span>
                </Link>
              </div>
            </div>

            <div 
              className="col-lg-4 col-md-6"
              data-aos="fade-up"
              data-aos-delay="200"
              data-aos-duration="1200"
              data-aos-once="false"
            >
              <div className="single-services">
                <div className="icon bg-36CC72">
                  <i className="ri-pie-chart-line"></i>
                </div>
                <h3>
                  <Link href="/services-details">
                    <span>Responsive Web Design</span>
                  </Link>
                </h3>
                <p>
                  In the era of diverse devices and screen sizes, our responsive web design ensures a seamless and visually appealing experience across all platforms. From desktops to tablets and smartphones, your audience will enjoy a consistent and engaging interface.
                </p>

                <Link href="/services-details">
                  <span className="services-btn">
                    Read More <i className="ri-arrow-right-line"></i>
                  </span>
                </Link>
              </div>
            </div>

            <div 
              className="col-lg-4 col-md-6"
              data-aos="fade-up"
              data-aos-delay="300"
              data-aos-duration="1200"
              data-aos-once="false"
            >
              <div className="single-services">
                <div className="icon bg-FF414B">
                  <i className="ri-lightbulb-line"></i>
                </div>
                <h3>
                  <Link href="/services-details">
                    <span>E-commerce Solutions</span>
                  </Link>
                </h3>
                <p>
                  Transform your online store into a revenue-generating powerhouse with our e-commerce solutions. We specialize in creating secure, user-friendly, and feature-rich e-commerce platforms that enhance the shopping experience and drive conversions.
                </p>

                <Link href="/services-details">
                  <span className="services-btn">
                    Read More <i className="ri-arrow-right-line"></i>
                  </span>
                </Link>
              </div>
            </div>

            <div 
              className="col-lg-4 col-md-6"
              data-aos="fade-up"
              data-aos-delay="400"
              data-aos-duration="1200"
              data-aos-once="false"
            >
              <div className="single-services">
                <div className="icon bg-FF6D3D">
                  <i className="ri-customer-service-2-line"></i>
                </div>
                <h3>
                  <Link href="/services-details">
                    <span>Content Management Systems (CMS)</span>
                  </Link>
                </h3>
                <p>
                 Take control of your content with our CMS development services. We integrate robust and user-friendly CMS platforms, empowering you to easily manage and update your website's content without technical complexities.
                </p>

                <Link href="/services-details">
                  <span className="services-btn">
                    Read More <i className="ri-arrow-right-line"></i>
                  </span>
                </Link>
              </div>
            </div>

            <div 
              className="col-lg-4 col-md-6"
              data-aos="fade-up"
              data-aos-delay="500"
              data-aos-duration="1200"
              data-aos-once="false"
            >
              <div className="single-services">
                <div className="icon bg-8932F8">
                  <i className="ri-cloud-line"></i>
                </div>
                <h3>
                  <Link href="/services-details">
                    <span>Website Maintenance and Support</span>
                  </Link>
                </h3>
                <p>
                  Ensure the continuous health and functionality of your web assets with our maintenance and support services. From regular updates to troubleshooting and performance optimization, we've got your back long after the initial development phase.
                </p>

                <Link href="/services-details">
                  <span className="services-btn">
                    Read More <i className="ri-arrow-right-line"></i>
                  </span>
                </Link>
              </div>
            </div>

            <div 
              className="col-lg-4 col-md-6"
              data-aos="fade-up"
              data-aos-delay="600"
              data-aos-duration="1200"
              data-aos-once="false"
            >
              <div className="single-services">
                <div className="icon bg-FFCA40">
                  <i className="ri-layout-row-line"></i>
                </div>
                <h3>
                  <Link href="/services-details">
                    <span>Domain and Hosting</span>
                  </Link>
                </h3>
                <p>
                 Secure a unique and memorable online identity with our domain registration services.Our hosting services guarantee optimal uptime, fast loading speeds, and scalable resources, providing the foundation for a seamless online experience for your visitors. 
                </p>

                <Link href="/services-details">
                  <span className="services-btn">
                    Read More <i className="ri-arrow-right-line"></i>
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Shape Images */}
        <div className="services-shape-1">
          <img src="/images/services/shape-1.png" alt="image" />
        </div>
        <div className="services-shape-2">
          <img src="/images/services/shape-2.png" alt="image" />
        </div>
        <div className="services-shape-3">
          <img src="/images/services/shape-3.png" alt="image" />
        </div>
        <div className="services-shape-4">
          <img src="/images/services/shape-4.png" alt="image" />
        </div>
      </div>

      {/* Services Card Style */}
      <style jsx>{`
        .services-area {
          position: relative;
          z-index: 1;
          overflow: hidden;
        }
        .single-services {
          margin-bottom: 30px;
          padding: 35px;
          border-radius: 5px;
          -webkit-transition: var(--transition);
          transition: var(--transition);
          border: 1px solid #eeeeee;
        }
        .single-services .icon {
          margin-bottom: 25px;
        }
        .single-services .icon i {
          display: inline-block;
          height: 80px;
          width: 80px;
          line-height: 80px;
          background-color: #e5f0ff;
          color: var(--main-color);
          text-align: center;
          font-size: 45px;
          border-radius: 5px;
          -webkit-transition: var(--transition);
          transition: var(--transition);
        }
        .single-services .icon.bg-36CC72 i {
          background-color: #ebfaf1;
          color: #36cc72;
        }
        .single-services .icon.bg-FF414B i {
          background-color: #ffeced;
          color: #ff414b;
        }
        .single-services .icon.bg-FF6D3D i {
          background-color: #fff0ec;
          color: #ff6d3d;
        }
        .single-services .icon.bg-8932F8 i {
          background-color: #f3ebfe;
          color: #8932f8;
        }
        .single-services .icon.bg-FFCA40 i {
          background-color: #fffaec;
          color: #ffca40;
        }
        .single-services h3 {
          margin-bottom: 15px;
        }
        .single-services h3 span {
          color: var(--black-color);
          font-size: 25px;
          -webkit-transition: var(--transition);
          transition: var(--transition);
        }
        .single-services p {
          margin-bottom: 15px;
          font-size: 15px;
          -webkit-transition: var(--transition);
          transition: var(--transition);
        }
        .single-services .services-btn {
          font-size: 15px;
          font-weight: 500;
          position: relative;
          -webkit-transition: var(--transition);
          transition: var(--transition);
          display: inline-block;
        }
        .single-services .services-btn i {
          position: absolute;
          right: -20px;
          top: 50%;
          -webkit-transform: translateY(-50%);
          transform: translateY(-50%);
          font-size: 15px;
        }
        .single-services:hover {
          background-color: var(--white-color);
          -webkit-box-shadow: 0px 15px 35px rgba(0, 0, 0, 0.1);
          box-shadow: 0px 15px 35px rgba(0, 0, 0, 0.1);
          -webkit-transform: translateY(-10px);
          transform: translateY(-10px);
        }
        .single-services:hover .icon i {
          background-color: var(--main-color);
          color: var(--white-color);
        }
        .single-services:hover .icon.bg-36CC72 i {
          background-color: #36cc72;
        }
        .single-services:hover .icon.bg-FF414B i {
          background-color: #ff414b;
        }
        .single-services:hover .icon.bg-FF6D3D i {
          background-color: #ff6d3d;
        }
        .single-services:hover .icon.bg-8932F8 i {
          background-color: #8932f8;
        }
        .single-services:hover .icon.bg-FFCA40 i {
          background-color: #ffca40;
        }
        .single-services:hover h3 span {
          color: var(--main-color);
        }
        .single-services:hover .services-btn {
          color: var(--main-color);
          letter-spacing: 1px;
        }

        {/* Shape */}
        .services-shape-1 {
          position: absolute;
          top: 20%;
          left: 45%;
          -webkit-transform: translateY(-20%) translateX(-45%);
          transform: translateY(-20%) translateX(-45%);
          z-index: 1;
        }
        .services-shape-2 {
          position: absolute;
          top: 15%;
          left: 45%;
          -webkit-transform: translateY(-15%) translateX(-45%);
          transform: translateY(-15%) translateX(-45%);
          z-index: 1;
        }
        .services-shape-3 {
          position: absolute;
          top: 45%;
          left: 2%;
          -webkit-transform: translateY(-45%) translateX(-2%);
          transform: translateY(-45%) translateX(-2%);
          z-index: -1;
        }
        .services-shape-4 {
          position: absolute;
          top: 45%;
          right: 0%;
          -webkit-transform: translateY(-45%) translateX(-5%);
          transform: translateY(-45%) translateX(-5%);
          z-index: -1;
        }
        .services-shape-5 {
          position: absolute;
          bottom: 10%;
          left: 35%;
          -webkit-transform: translateY(-10%) translateX(-35%);
          transform: translateY(-10%) translateX(-35%);
          z-index: 1;
        }

        {/* Responsive Style */}
        @media only screen and (max-width: 767px) {
          .single-services {
            padding: 30px 15px;
            text-align: center;
          }
          .single-services .icon {
            margin-bottom: 30px;
          }
          .single-services h3 span {
            font-size: 20px;
          }
          .services-shape-1 {
            display: none;
          }
          .services-shape-2 {
            display: none;
          }
          .services-shape-3 {
            display: none;
          }
          .services-shape-4 {
            display: none;
          }
          .services-shape-5 {
            display: none;
          }
        }

        @media only screen and (min-width: 768px) and (max-width: 991px) {
          .single-services {
            padding: 30px 20px;
          }
          .single-services .icon {
            margin-bottom: 30px;
          }
          .single-services h3 span {
            font-size: 20px;
          }
          .services-shape-1 {
            display: none;
          }
          .services-shape-2 {
            display: none;
          }
          .services-shape-3 {
            display: none;
          }
          .services-shape-4 {
            display: none;
          }
          .services-shape-5 {
            display: none;
          }
        }

        @media only screen and (min-width: 992px) and (max-width: 1199px) {
          .single-services {
            padding: 35px 20px;
          }
          .single-services h3 span {
            font-size: 20px;
          }
          .services-shape-1 {
            display: none;
          }
          .services-shape-2 {
            display: none;
          }
          .services-shape-3 {
            display: none;
          }
          .services-shape-4 {
            display: none;
          }
          .services-shape-5 {
            display: none;
          }
        }

        @media only screen and (min-width: 1200px) and (max-width: 1399px) {
          .single-services {
            padding: 30px;
          }
          .single-services h3 span {
            font-size: 24px;
          }
        }
      `}</style>
    </>
  );
};

export default Services;
