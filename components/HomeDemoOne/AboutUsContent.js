import React from "react";
import Link from "next/link";

const AboutUsContent = () => {
  return (
    <>
      <div className="experiences-area">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="experiences-item">
                <div className="experiences-content">
                  <div className="tag">
                    <img src="/images/experiences/tag-icon.png" alt="image" />
                  </div>
                  <h3>Over 12 Year Professional Experiences</h3>
                  <p>
                    we bring a wealth of expertise to the table, firmly establishing ourselves as industry leaders. Our journey in the dynamic realm of web technologies has been marked by continuous evolution, staying ahead of the curve to deliver cutting-edge solutions that resonate with the ever-changing needs of the digital landscape.
                  </p>
                </div>

                <div className="experiences-inner-content">
                  <img src="/images/experiences/img1.png" alt="image" />
                  <p>
                    Let us be the architects of your success, working hand in hand to build a strategic framework that propels your startup towards lasting prosperity.
                  </p>
                </div>

                <div className="experiences-inner-content">
                  <img src="/images/experiences/img2.png" alt="image" />
                  <p>
                    With a relentless pursuit of knowledge and a keen understanding of industry trends, we navigate the ever-evolving landscape to uncover opportunities that fuel your startup's growth.
                  </p>
                </div>

                <div className="experiences-inner-content">
                  <img src="/images/experiences/img3.png" alt="image" />
                  <p>
                   Collaboration is at the heart of our Design & Implementation process. We work closely with your team to incorporate feedback, address concerns, and fine-tune details, ensuring that the final product aligns seamlessly with your startup's goals and objectives.
                  </p>
                </div>

                <div className="experiences-btn">
                  <Link href="/about-us">
                    <span className="default-btn">
                      Read More
                      <i className="ri-arrow-right-line"></i>
                      <span></span>
                    </span>
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-lg-6">
              <div 
                className="experiences-image"
                data-aos="fade-up"
                data-aos-delay="400"
                data-aos-duration="1200"
                data-aos-once="false"
              >
                <img src="/images/experiences/experiences-1.png" alt="image" />
              </div>
            </div>
          </div>
        </div>

        {/* Shape Images */}
        <div
          className="experiences-shape-1"
          data-speed="0.08"
          data-revert="true"
        >
          <img src="/images/experiences/shape-1.png" alt="image" />
        </div>
        <div
          className="experiences-shape-2"
          data-speed="0.06"
          data-revert="true"
        >
          <img src="/images/experiences/shape-2.png" alt="image" />
        </div>
        <div
          className="experiences-shape-3"
          data-speed="0.08"
          data-revert="true"
        >
          <img src="/images/experiences/shape-3.png" alt="image" />
        </div>
        <div
          className="experiences-shape-4"
          data-speed="0.06"
          data-revert="true"
        >
          <img src="/images/experiences/shape-2.png" alt="image" />
        </div>
        <div
          className="experiences-shape-5"
          data-speed="0.08"
          data-revert="true"
        >
          <img src="/images/experiences/shape-3.png" alt="image" />
        </div>
        <div
          className="experiences-shape-6"
          data-speed="0.06"
          data-revert="true"
        >
          <img src="/images/experiences/shape-4.png" alt="image" />
        </div>
        <div
          className="experiences-shape-7"
          data-speed="0.08"
          data-revert="true"
        >
          <img src="/images/experiences/shape-5.png" alt="image" />
        </div>
      </div>

      {/* About Us Content Style */}
      <style jsx>{`
        .experiences-area {
          position: relative;
          z-index: 1;
        }
        .experiences-area::before {
          position: absolute;
          content: "";
          height: 100%;
          width: 50%;
          background-color: #f4f8fc;
          left: 0;
          top: 0;
          z-index: -1;
        }
        .experiences-area::after {
          position: absolute;
          content: "";
          height: 100%;
          width: 50%;
          background-color: var(--white-color);
          right: 0;
          top: 0;
          z-index: -1;
        }
        .experiences-item {
          padding-top: 80px;
          padding-bottom: 80px;
          padding-right: 30px;
        }
        .experiences-item .experiences-content .tag {
          display: inline-block;
          height: 50px;
          width: 50px;
          line-height: 50px;
          background-color: var(--white-color);
          text-align: center;
          border-radius: 50px;
          -webkit-box-shadow: 0 0 1.25rem rgba(108, 118, 134, 0.1);
          box-shadow: 0 0 1.25rem rgba(108, 118, 134, 0.1);
        }
        .experiences-item .experiences-content h3 {
          font-size: 40px;
          margin-top: 25px;
          margin-bottom: 20px;
          line-height: 1.4;
        }
        .experiences-item .experiences-inner-content {
          position: relative;
          margin-top: 30px;
          padding-left: 80px;
        }
        .experiences-item .experiences-inner-content img {
          position: absolute;
          left: 0;
          top: 0;
        }
        .experiences-item .experiences-btn {
          margin-top: 30px;
          padding-left: 85px;
        }
        .experiences-image {
          text-align: right;
        }
        .experiences-shape-1 {
          position: absolute;
          top: 8%;
          left: 40%;
          -webkit-transform: translateY(-8%) translateX(-40%);
          transform: translateY(-8%) translateX(-40%);
          z-index: -1;
        }
        .experiences-shape-2 {
          position: absolute;
          top: 50%;
          left: 2%;
          -webkit-transform: translateY(-50%) translateX(-2%);
          transform: translateY(-50%) translateX(-2%);
          z-index: -1;
        }
        .experiences-shape-3 {
          position: absolute;
          top: 52%;
          left: 5%;
          -webkit-transform: translateY(-52%) translateX(-5%);
          transform: translateY(-52%) translateX(-5%);
          z-index: -1;
        }
        .experiences-shape-4 {
          position: absolute;
          bottom: 10%;
          left: 35%;
          -webkit-transform: translateY(-10%) translateX(-35%);
          transform: translateY(-10%) translateX(-35%);
          z-index: -1;
        }
        .experiences-shape-5 {
          position: absolute;
          bottom: 8%;
          left: 36%;
          -webkit-transform: translateY(-8%) translateX(-36%);
          transform: translateY(-8%) translateX(-36%);
          z-index: -1;
        }
        .experiences-shape-6 {
          position: absolute;
          bottom: 10%;
          left: 48%;
          -webkit-transform: translateY(-10%) translateX(-48%);
          transform: translateY(-10%) translateX(-48%);
          z-index: 1;
        }
        .experiences-shape-7 {
          position: absolute;
          bottom: 2%;
          left: 48%;
          -webkit-transform: translateY(-2%) translateX(-48%);
          transform: translateY(-2%) translateX(-48%);
          z-index: 1;
        }

        {/* Responsive Style */}
        @media only screen and (max-width: 767px) {
          .experiences-area {
            padding-bottom: 50px;
          }
          .experiences-area::after {
            background-color: #f4f8fc;
          }
          .experiences-item {
            padding-top: 50px;
            padding-bottom: 50px;
            padding-right: 0;
          }
          .experiences-item .experiences-content h3 {
            font-size: 24px;
          }
          .experiences-item .experiences-content p {
            font-size: 15px;
          }
          .experiences-item .experiences-inner-content {
            padding-left: 0;
            text-align: center;
          }
          .experiences-item .experiences-inner-content img {
            position: relative;
            margin-bottom: 15px;
          }
          .experiences-item .experiences-btn {
            padding-left: 0;
            text-align: center;
          }
          .experiences-image {
            text-align: center;
          }
          .experiences-shape-1 {
            display: none;
          }
          .experiences-shape-2 {
            display: none;
          }
          .experiences-shape-3 {
            display: none;
          }
          .experiences-shape-4 {
            display: none;
          }
          .experiences-shape-5 {
            display: none;
          }
          .experiences-shape-6 {
            display: none;
          }
          .experiences-shape-7 {
            display: none;
          }
        }

        @media only screen and (min-width: 768px) and (max-width: 991px) {
          .experiences-area {
            padding-bottom: 50px;
          }
          .experiences-area::after {
            background-color: #f4f8fc;
          }
          .experiences-item {
            padding-top: 50px;
            padding-bottom: 50px;
            padding-right: 0;
          }
          .experiences-image {
            text-align: center;
          }
          .experiences-shape-1 {
            display: none;
          }
          .experiences-shape-2 {
            display: none;
          }
          .experiences-shape-3 {
            display: none;
          }
          .experiences-shape-4 {
            display: none;
          }
          .experiences-shape-5 {
            display: none;
          }
          .experiences-shape-6 {
            display: none;
          }
          .experiences-shape-7 {
            display: none;
          }
        }

        @media only screen and (min-width: 992px) and (max-width: 1199px) {
          .experiences-item {
            padding-top: 50px;
            padding-bottom: 50px;
          }
          .experiences-item .experiences-content h3 {
            font-size: 30px;
            margin-top: 20px;
            margin-bottom: 15px;
          }
          .experiences-item .experiences-content p {
            font-size: 14px;
          }
          .experiences-item .experiences-inner-content p {
            font-size: 14px;
          }
        }
      `}</style>
    </>
  );
};

export default AboutUsContent;
