import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";

const partnersData = [
  {
    image: "/images/partner/partner-1.png",
  },
  {
    image: "/images/partner/partner-2.png",
  },
  {
    image: "/images/partner/partner-3.png",
  },
  {
    image: "/images/partner/partner-4.png",
  },
  {
    image: "/images/partner/partner-5.png",
  },
  {
    image: "/images/partner/partner-1.png",
  },
  {
    image: "/images/partner/partner-2.png",
  },
  {
    image: "/images/partner/partner-3.png",
  },
];

const PartnerStyleTwo = () => {
  return (
    <>
      <div className="partner-area ptb-100">
        <div className="container">
          <Swiper
            spaceBetween={40}
            breakpoints={{
              0: {
                slidesPerView: 1,
              },
              576: {
                slidesPerView: 2,
              },
              768: {
                slidesPerView: 3,
              },
              992: {
                slidesPerView: 4,
              },
              1200: {
                slidesPerView: 5,
              },
            }}
            autoplay={{
              delay: 6500,
              disableOnInteraction: true,
              pauseOnMouseEnter: true,
            }}
            modules={[Autoplay]}
            className="partner-slides"
          >
            {partnersData && partnersData.map((value, i) => (
              <SwiperSlide key={i}>
                <div className="single-partner">
                  <img src={value.image} alt="image" />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

      {/* Partner Style */}
      <style jsx>{`
        .partner-area {
          position: relative;
          z-index: 1;
        }
        .single-partner {
          text-align: center;
        }
        .single-partner img {
          width: auto !important;
          display: inline-block !important;
        }
        .partner-shape-1 {
          position: absolute;
          top: -20%;
          left: 15%;
          -webkit-transform: translateY(-20%) translateX(-20%);
          transform: translateY(-20%) translateX(-20%);
          z-index: -1;
        }
        .partner-shape-2 {
          position: absolute;
          bottom: -50%;
          right: 10%;
          -webkit-transform: translateY(-28%) translateX(-10%);
          transform: translateY(-28%) translateX(-10%);
        }

        {/* Responsive Style */}
        @media only screen and (max-width: 767px) {
          .partner-shape-1 {
            display: none;
          }
          .partner-shape-2 {
            display: none;
          }
        }

        @media only screen and (min-width: 768px) and (max-width: 991px) {
          .partner-shape-1 {
            display: none;
          }
          .partner-shape-2 {
            display: none;
          }
        }

        @media only screen and (min-width: 992px) and (max-width: 1199px) {
        }
      `}</style>
    </>
  );
};

export default PartnerStyleTwo;
