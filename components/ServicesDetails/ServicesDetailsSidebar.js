import React from "react";
import Link from "next/link";

const ServicesDetailsSidebar = () => {
  return (
    <>
      <div className="services-details-information">
        <ul className="services-list">
          <li>
            <Link href="/services-details">
              <span>Custom Web Development</span>
            </Link>
          </li>
          <li>
            <Link href="/services-details">
              <span>Responsive Web Design</span>
            </Link>
          </li>
          <li>
            <Link href="/services-details">
              <span>
                E-commerce Solutions
              </span>
            </Link>
          </li>
          <li>
            <Link href="/services-details">
              <span>Content Management Systems (CMS)</span>
            </Link>
          </li>
          <li>
            <Link href="/services-details">
              <span>UI/UX Design</span>
            </Link>
          </li>
          <li>
            <Link href="/services-details">
              <span>Website Maintenance and Support</span>
            </Link>
          </li>
        </ul>

        <div className="services-contact-info">
          <h3>Let's Make Something Amazing Together!</h3>

          <div className="info-box-one">
            <i className="ri-customer-service-line"></i>
            <a href="tel:9012550701">9012550701</a>
          </div>

          <div className="info-box-two">
            <i className="ri-earth-line"></i>
            <a href="mailto:sales@webvervestudios.com">sales@webvervestudios.com</a>
          </div>
        </div>
      </div>

      <style jsx>{`
        .services-details-information .services-list {
          border: 1px solid #eceeef;
        }
        .services-details-information .services-list {
          padding-left: 0;
          margin-bottom: 0;
          background-color: #f4f8fc;
        }
        .services-details-information .services-list li {
          list-style-type: none;
          border-bottom: 1px solid #eceeef;
        }
        .services-details-information .services-list li:last-child {
          border-bottom: none;
        }
        .services-details-information .services-list li span {
          display: inline-block;
          padding: 20px 35px;
          font-size: var(--font-size);
          width: 100%;
          font-weight: 500;
        }
        .services-details-information .services-list li span:hover,
        .services-details-information .services-list li span.active {
          background-color: var(--white-color);
          color: var(--main-color);
        }
        .services-details-information .services-list li:last-child span {
          border-bottom: none;
        }
        .services-details-information .services-contact-info {
          background-color: #f4f8fc;
          padding: 40px 35px;
          margin-top: 30px;
          text-align: center;
        }
        .services-details-information .services-contact-info h3 {
          font-size: 22px;
          font-weight: 500;
          margin-bottom: 0;
          line-height: 1.5;
        }
        .services-details-information .services-contact-info .info-box-one {
          background-color: var(--main-color);
          padding: 30px;
          border-radius: 5px;
          margin-top: 25px;
        }
        .services-details-information .services-contact-info .info-box-one i {
          display: block;
          color: var(--white-color);
          font-size: 30px;
          margin-bottom: 15px;
        }
        .services-details-information .services-contact-info .info-box-one a {
          color: var(--white-color);
          font-size: var(--font-size);
          font-weight: 500;
        }
        .services-details-information .services-contact-info .info-box-two {
          background-color: #36cc72;
          padding: 30px;
          border-radius: 5px;
          margin-top: 25px;
        }
        .services-details-information .services-contact-info .info-box-two i {
          display: block;
          color: var(--white-color);
          font-size: 30px;
          margin-bottom: 15px;
        }
        .services-details-information .services-contact-info .info-box-two a {
          color: var(--white-color);
          font-size: var(--font-size);
          font-weight: 500;
        }

        {/* Responsive Style */}
        @media only screen and (max-width: 767px) {
          .services-details-information .services-list li span {
            padding: 20px 25px;
          }
        }

        @media only screen and (min-width: 768px) and (max-width: 991px) {
        }

        @media only screen and (min-width: 992px) and (max-width: 1199px) {
          .services-details-information .services-list li span {
            padding: 10px 20px;
            font-size: 14px;
          }
          .services-details-information .services-contact-info {
            padding: 25px 15px;
          }
          .services-details-information .services-contact-info .info-box-one {
            padding: 20px;
          }
          .services-details-information .services-contact-info .info-box-one a {
            font-size: 14px;
          }
          .services-details-information .services-contact-info .info-box-two {
            padding: 20px;
          }
          .services-details-information .services-contact-info .info-box-two a {
            font-size: 14px;
          }
          .services-details-information .services-contact-info h3 {
            font-size: 19px;
          }

          .services-details-overview-content h3 {
            font-size: 26px;
          }
        }

        @media only screen and (min-width: 1200px) and (max-width: 1399px) {
          .services-details-information .services-list li span {
            padding: 20px 25px;
          }
          .services-details-information .services-contact-info h3 {
            font-size: 20px;
          }
        }

      `}</style>
    </>
  );
};

export default ServicesDetailsSidebar;
