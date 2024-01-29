import React from "react";
import ServicesDetailsSidebar from "./ServicesDetailsSidebar";

const ServicesDetailsContent = () => {
  return (
    <>
      <div className="services-details-area ptb-100">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-12">
              <ServicesDetailsSidebar />
            </div>

            <div className="col-lg-9 col-md-12">
              <div className="services-details-overview-content">
                <h3>Custom Web Development</h3>
                <p>
                 Our journey begins with a comprehensive understanding of your business objectives. Through in-depth consultations, we delve into your goals, target audience, and market positioning to formulate a strategic roadmap for your custom web development project.
                </p>
                <p>
                  Stand out in the digital crowd with a design that reflects your brand identity and resonates with your audience. Our team of skilled designers ensures a visually stunning and intuitive user interface, creating an engaging experience that leaves a lasting impression.
                </p>
                <p>
                  Anticipate growth and ensure your web solution evolves with your business. We design and implement scalable architectures that accommodate future expansions, providing a foundation for seamless updates, increased functionality, and adaptability to changing market dynamics.
                </p>

                <ul className="overview-list">
                  <li>
                    <i className="ri-check-line"></i> Tailor your web solution to meet the specific needs of your business and audience. Whether it's e-commerce capabilities, custom integrations, or unique functionalities, we bring advanced features to the table, enhancing the overall user experience and functionality of your website.
                  </li>
                  <li>
                    <i className="ri-check-line"></i> Performance is non-negotiable in the digital realm. Our custom web development focuses on optimizing speed, responsiveness, and overall performance, ensuring that your website not only meets user expectations but also excels in search engine rankings.
                  </li>
                  <li>
                    <i className="ri-check-line"></i> Safeguard your digital assets and user data with our robust security measures. From secure coding practices to regular audits, we prioritize the highest standards of security in every line of code, creating a web solution that instills trust and complies with industry regulations.
                  </li>
                  <li>
                    <i className="ri-check-line"></i> Reach a diverse audience seamlessly with cross-platform compatibility. Our custom web solutions are designed and tested to perform consistently across various devices, browsers, and operating systems, ensuring a cohesive experience for all users.
                  </li>
                </ul>

                <div className="overview-image">
                  <img
                    src="/images/services-details/services-details-1.jpg"
                    alt="image"
                  />

                  {/* Shape Images */}
                  <div className="shape-1">
                    <img
                      src="/images/services-details/shape-1.png"
                      alt="image"
                    />
                  </div>
                  <div className="shape-2">
                    <img
                      src="/images/services-details/shape-2.png"
                      alt="image"
                    />
                  </div>
                  <div className="shape-3">
                    <img
                      src="/images/services-details/shape-3.png"
                      alt="image"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .services-details-overview-content {
          padding-left: 15px;
        }
        .services-details-overview-content h3 {
          font-size: 30px;
          margin-bottom: 20px;
        }
        .services-details-overview-content p {
          font-size: 15px;
        }
        .services-details-overview-content .overview-list {
          padding-left: 20px;
          margin-top: 30px;
          margin-bottom: 0;
        }
        .services-details-overview-content .overview-list li {
          list-style-type: none;
          font-size: 15px;
          color: var(--paragraph-color);
          position: relative;
          padding-left: 20px;
          margin-bottom: 20px;
        }
        .services-details-overview-content .overview-list li:last-child {
          margin-bottom: 0;
        }
        .services-details-overview-content .overview-list li i {
          font-size: 15px;
          color: #36cc72;
          position: absolute;
          left: 0;
          top: 2px;
        }
        .services-details-overview-content .overview-image {
          margin-top: 45px;
          position: relative;
          overflow: hidden;
          cursor: -webkit-zoom-in;
          cursor: zoom-in;
        }
        .services-details-overview-content .overview-image img {
          border-radius: 5px;
          -webkit-transition: var(--transition);
          transition: var(--transition);
        }
        .services-details-overview-content .overview-image .shape-1 {
          position: absolute;
          top: 10%;
          left: 15%;
          -webkit-transform: translateY(-10%) translateX(-15%);
          transform: translateY(-10%) translateX(-15%);
        }
        .services-details-overview-content .overview-image .shape-2 {
          position: absolute;
          top: 20%;
          left: 10%;
          -webkit-transform: translateY(-20%) translateX(-10%);
          transform: translateY(-20%) translateX(-10%);
        }
        .services-details-overview-content .overview-image .shape-3 {
          position: absolute;
          bottom: 10%;
          right: 5%;
          -webkit-transform: translateY(-10%) translateX(-5%);
          transform: translateY(-10%) translateX(-5%);
        }
        .services-details-overview-content .overview-image:hover img {
          -webkit-transform: scale(1.1);
          transform: scale(1.1);
        }

        {/* Responsive Style */}
        @media only screen and (max-width: 767px) {
          .services-details-overview-content {
            margin-top: 30px;
          }
          .services-details-overview-content h3 {
            font-size: 22px;
            margin-bottom: 15px;
          }
          .services-details-overview-content .overview-list {
            padding-left: 0;
          }
          .services-details-overview-content {
            padding-left: 0;
          }
        }

        @media only screen and (min-width: 768px) and (max-width: 991px) {
          .services-details-overview-content {
            margin-top: 30px;
          }
          .services-details-overview-content h3 {
            font-size: 25px;
          }
          .services-details-overview-content .overview-list {
            padding-left: 0;
          }
          .services-details-overview-content {
            padding-left: 0;
          }
        }

        @media only screen and (min-width: 992px) and (max-width: 1199px) {
          .services-details-overview-content {
            padding-left: 5px;
          }
        }
      `}</style>
    </>
  );
};

export default ServicesDetailsContent;
