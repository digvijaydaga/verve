import React from "react";
import Link from "next/link";

const MainBanner = () => {
  return (
    <>
      <div className="main-banner-area without-banner-animation">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-5 col-md-12">
              <div className="main-banner-content">
                <div 
                  className="tag"
                  data-aos="fade-right"
                  data-aos-delay="100"
                  data-aos-duration="1200"
                  data-aos-once="true"
                >
                  <img
                    src="/images/main-banner/banner-one/tag-icon.png"
                    alt="image"
                  />
                  # Ozen Best Startup Company
                </div>
              
                <h1
                  data-aos="fade-right"
                  data-aos-delay="200"
                  data-aos-duration="1200"
                  data-aos-once="true"
                >
                  We Are Here, To Help Your Startup Business
                </h1>
        
                <p
                  data-aos="fade-right"
                  data-aos-delay="300"
                  data-aos-duration="1200"
                  data-aos-once="true"
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Odio at ut tincidunt porttitor molestie aliquet quam cursus.
                  Rhoncus donec libero et volutpat erat posuere sagittis
                  cursus posuere
                </p> 

                <div 
                  className="banner-btn"
                  data-aos="fade-left"
                  data-aos-delay="100"
                  data-aos-duration="1200"
                  data-aos-once="true"
                >
                  <Link href="/about-us">
                    <span className="default-btn">
                      Read More <i className="ri-arrow-right-line"></i>
                      <span></span>
                    </span>
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-lg-7 col-md-12">
              <div 
                className="main-banner-image-wrap"
                data-aos="fade-up"
                data-aos-delay="500"
                data-aos-duration="1200"
                data-aos-once="true"
              >
                <img
                  src="/images/main-banner/banner-one/main-pic.png"
                  alt="image"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Shape Images */}
        <div className="main-banner-shape-1">
          <img src="/images/main-banner/banner-one/shape-1.png" alt="image" />
        </div>
        <div className="main-banner-shape-2">
          <img src="/images/main-banner/banner-one/shape-2.png" alt="image" />
        </div>
        <div className="main-banner-shape-3">
          <img src="/images/main-banner/banner-one/shape-3.png" alt="image" />
        </div>
        <div className="main-banner-shape-4">
          <img src="/images/main-banner/banner-one/shape-4.png" alt="image" />
        </div>
      </div>

      {/* Main Banner Style */}
      <style jsx>{`
        .main-banner-area {
          position: relative;
          z-index: 1;
          overflow: hidden;
        }
        .main-banner-area.without-banner-animation {
          padding-top: 80px;
          padding-bottom: 80px;
        }
        .main-banner-image-wrap {
          text-align: center;
        }
        .main-banner-content .tag {
          display: inline-block;
          background-color: #f4f8fc;
          padding: 12px 25px 12px 55px;
          border-radius: 50px;
          font-size: 14px;
          font-weight: 500;
          position: relative;
        }
        .main-banner-content .tag img {
          position: absolute;
          left: 25px;
          top: 50%;
          -webkit-transform: translateY(-50%);
          transform: translateY(-50%);
        }
        .main-banner-content h1 {
          font-size: 60px;
          margin-top: 30px;
          margin-bottom: 20px;
          font-weight: bold;
        }
        .main-banner-content p {
          margin-bottom: 0;
        }
        .main-banner-content .banner-btn {
          margin-top: 30px;
        }

        {/* Shape */}
        .main-banner-shape-1 {
          position: absolute;
          top: 10%;
          left: 35%;
          -webkit-transform: translateY(-10%) translateX(-35%);
          transform: translateY(-10%) translateX(-35%);
        }
        .main-banner-shape-2 {
          position: absolute;
          bottom: 20%;
          left: 35%;
          -webkit-transform: translateY(-20%) translateX(-35%);
          transform: translateY(-20%) translateX(-35%);
        }
        .main-banner-shape-3 {
          position: absolute;
          bottom: 5%;
          left: 50%;
          -webkit-transform: translateY(-5%) translateX(-50%);
          transform: translateY(-5%) translateX(-50%);
        }
        .main-banner-shape-4 {
          position: absolute;
          bottom: 10%;
          left: 50%;
          -webkit-transform: translateY(-10%) translateX(-50%);
          transform: translateY(-10%) translateX(-50%);
        }
        .main-banner-shape-5 {
          position: absolute;
          top: 20%;
          left: 35%;
          -webkit-transform: translateY(-20%) translateX(-35%);
          transform: translateY(-20%) translateX(-35%);
        }
        .main-banner-shape-6 {
          position: absolute;
          top: 25%;
          left: 40%;
          -webkit-transform: translateY(-25%) translateX(-40%);
          transform: translateY(-25%) translateX(-40%);
        }
        .main-banner-shape-7 {
          position: absolute;
          top: 20%;
          right: 15%;
          -webkit-transform: translateY(-20%) translateX(-15%);
          transform: translateY(-20%) translateX(-15%);
        }
        .main-banner-shape-8 {
          position: absolute;
          bottom: 20%;
          left: 38%;
          -webkit-transform: translateY(-20%) translateX(-38%);
          transform: translateY(-20%) translateX(-38%);
        }

        {/* Responsive Style */}
        @media only screen and (max-width: 767px) {
          .main-banner-area {
            padding-top: 60px;
            padding-bottom: 60px;
          }
          .main-banner-content {
            text-align: center;
          }
          .main-banner-content h1 {
            font-size: 30px;
          }
          .main-banner-content p {
            font-size: 15px;
          }
          .main-banner-area.without-banner-animation {
            padding-top: 60px;
            padding-bottom: 60px;
          }
          .main-banner-image-wrap {
            text-align: center;
            margin-top: 35px;
          }
          .main-banner-shape-1,
          .main-banner-shape-2,
          .main-banner-shape-3,
          .main-banner-shape-4,
          .main-banner-shape-5,
          .main-banner-shape-6,
          .main-banner-shape-7,
          .main-banner-shape-8 {
            display: none;
          }
        }

        @media only screen and (min-width: 768px) and (max-width: 991px) {
          .main-banner-area {
            padding-top: 80px;
            padding-bottom: 80px;
          }
          .main-banner-content {
            text-align: center;
          }
          .main-banner-content h1 {
            font-size: 50px;
          }
          .main-banner-content p {
            font-size: 15px;
          }
          .main-banner-area.without-banner-animation {
            padding-top: 80px;
            padding-bottom: 80px;
          }
          .main-banner-image-wrap {
            text-align: center;
            margin-top: 35px;
          }
          .main-banner-shape-1,
          .main-banner-shape-2,
          .main-banner-shape-3,
          .main-banner-shape-4,
          .main-banner-shape-5,
          .main-banner-shape-6,
          .main-banner-shape-7,
          .main-banner-shape-8 {
            display: none;
          }
        }

        @media only screen and (min-width: 992px) and (max-width: 1199px) {
          .main-banner-area {
            padding-top: 100px;
            padding-bottom: 100px;
          }
          .main-banner-content h1 {
            font-size: 35px;
          }
          .main-banner-content p {
            font-size: 15px;
          }
        }

        @media only screen and (min-width: 1200px) and (max-width: 1399px) {
          .main-banner-area {
            padding-top: 260px;
            padding-bottom: 260px;
          }
          .main-banner-content h1 {
            font-size: 45px;
          }
          .main-banner-content p {
            font-size: 15px;
          }
        }
      `}</style>
    </>
  );
};

export default MainBanner;
