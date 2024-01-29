import React from "react";

const ContactInfo = () => {
  return (
    <>
      <div className="contact-info-area pb-100">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-4 col-md-12">
              <div className="contact-address">
                <h3>Contact Address:</h3>
                <p>
                  The IT industry offers a sea of options, from platforms,
                  programming languages, methodologies, technologies, tools, and
                  more.
                </p>

                <ul className="address-info">
                  <li>
                    <i className="ri-customer-service-line"></i>
                    <a href="tel:9012550701">9012550701</a>
                  </li>

                  <li>
                    <i className="ri-global-line"></i>
                    <a href="mailto:sales@webvervestudios.com">sales@webvervestudios.com</a>
                  </li>

                  <li>
                    <i className="ri-map-pin-line"></i>
                     D-311, Sector 10, Noida, Gautam Buddha Nagar, Uttar Pradesh
                  </li>
                </ul>

                <ul className="address-social">
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
                    <a href="https://www.messenger.com/" target="_blank">
                      <i className="ri-messenger-fill"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-lg-8 col-md-12">
              <div id="map">
			  <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d3502.560320065801!2d77.32040857517869!3d28.612964284969557!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1706428331445!5m2!1sen!2sin"></iframe>
                
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .contact-address {
          background: #f4f8fc;
          border: 1px solid #e6edf6;
          padding: 45px 35px;
          border-radius: 5px;
        }

        .contact-address h3 {
          font-size: 22px;
          margin-bottom: 15px;
        }

        .contact-address p {
          font-size: 15px;
        }

        .contact-address .address-info {
          padding-left: 0;
          margin-top: 30px;
          margin-bottom: 0;
        }

        .contact-address .address-info li {
          list-style-type: none;
          margin-bottom: 30px;
          font-size: 15px;
          font-weight: 500;
          color: #4b4b61;
          position: relative;
          padding-left: 40px;
        }

        .contact-address .address-info li a {
          font-size: 15px;
          font-weight: 500;
          color: #4b4b61;
        }

        .contact-address .address-info li a:hover {
          color: var(--main-color);
        }

        .contact-address .address-info li i {
          position: absolute;
          left: 0;
          top: 50%;
          -webkit-transform: translateY(-50%);
          transform: translateY(-50%);
          color: var(--main-color);
          font-size: 30px;
        }

        .contact-address .address-info li .ri-global-line {
          color: #ff414b;
        }

        .contact-address .address-info li .ri-map-pin-line {
          color: #36cc72;
        }

        .contact-address .address-info li:last-child {
          margin-bottom: 0;
        }

        .contact-address .address-social {
          padding-left: 0;
          margin-bottom: 0;
          margin-top: 35px;
          text-align: center;
        }

        .contact-address .address-social li {
          display: inline-block;
          list-style-type: none;
          margin-bottom: 0;
          margin-right: 10px;
        }

        .contact-address .address-social li:last-child {
          margin-right: 0;
        }

        .contact-address .address-social li i {
          display: inline-block;
          height: 35px;
          width: 35px;
          line-height: 35px;
          background-color: var(--white-color);
          color: var(--main-color);
          -webkit-box-shadow: 0px 15px 35px rgba(0, 0, 0, 0.1);
          box-shadow: 0px 15px 35px rgba(0, 0, 0, 0.1);
          border-radius: 50px;
          text-align: center;
          font-size: var(--font-size);
          -webkit-transition: var(--transition);
          transition: var(--transition);
        }

        .contact-address .address-social li i:hover {
          background-color: var(--main-color);
          color: var(--white-color);
          -webkit-transform: translateY(-5px);
          transform: translateY(-5px);
        }

        #map iframe {
          width: 100%;
          height: 440px;
          border: 1px solid #e6edf6;
          border-radius: 5px;
        }

        {/* Responsive Style */}
        @media only screen and (max-width: 767px) {
          .contact-address {
            padding: 35px 20px;
            margin-bottom: 30px;
          }
        }

        @media only screen and (min-width: 768px) and (max-width: 991px) {
          .contact-address {
            padding: 35px 20px;
            margin-bottom: 30px;
          }
        }

        @media only screen and (min-width: 992px) and (max-width: 1199px) {
        }
      `}</style>
    </>
  );
};

export default ContactInfo;
