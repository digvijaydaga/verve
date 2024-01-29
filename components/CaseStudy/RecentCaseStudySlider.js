import React from "react";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";

const RecentCaseStudySlider = () => {
  return (
    <>
      <div className="projects-area ptb-100">
        <div className="container-fluid">
          <div className="section-title">
            <h2>Recent Case Studies</h2>
            <p>
              Best Strategic planning dolor sit amet consectetur adipiscing
              elit. Scelerisque amet odio velit auctor. nam elit nulla eget
              sodales dui pulvina
            </p>
          </div>

          <Swiper
            spaceBetween={30}
            pagination={{
              clickable: true,
            }}
            breakpoints={{
              0: {
                slidesPerView: 1,
              },
              768: {
                slidesPerView: 2,
              },
              1200: {
                slidesPerView: 4,
              },
            }}
            modules={[Pagination]}
            className="projects-slides"
          >
        <SwiperSlide>
              <div className="single-projects">
                <div className="projects-image">
                  <Link href="/case-study-details">
                    <img src="/images/projects/projects-1.jpg" alt="image" />
                  </Link>
                </div>

                <div className="projects-content">
                  <h3>
                    <Link href="/case-study-details">
                      <span>Business Consulting</span>
                    </Link>
                  </h3>
                  <p>
                    Best Strategic planning dolor sit amet consectetur
                    adipiscing elit. Scelerisque amet odio velit eu auctor.
                    Aliquet nam elit nulla eget sodales dui pulvinar.
                  </p>

                  <Link href="/case-study-details">
                    <span className="projects-btn">
                      Read More
                      <i className="ri-arrow-right-line"></i>
                    </span>
                  </Link>
                </div>
              </div>
              </SwiperSlide>

              <SwiperSlide>
              <div className="single-projects">
                <div className="projects-image">
                  <Link href="/case-study-details">
                    <img src="/images/projects/projects-2.jpg" alt="image" />
                  </Link>
                </div>

                <div className="projects-content">
                  <h3>
                    <Link href="/case-study-details">
                      <span>Financial Consulting for Ozen</span>
                    </Link>
                  </h3>
                  <p>
                    Best Strategic planning dolor sit amet consectetur
                    adipiscing elit. Scelerisque amet odio velit eu auctor.
                    Aliquet nam elit nulla eget sodales dui pulvinar.
                  </p>

                  <Link href="/case-study-details">
                    <span className="projects-btn">
                      Read More
                      <i className="ri-arrow-right-line"></i>
                    </span>
                  </Link>
                </div>
              </div>
              </SwiperSlide>

              <SwiperSlide>
              <div className="single-projects">
                <div className="projects-image">
                  <Link href="/case-study-details">
                    <img src="/images/projects/projects-3.jpg" alt="image" />
                  </Link>
                </div>

                <div className="projects-content">
                  <h3>
                    <Link href="/case-study-details">
                      <span>Social Media Marketing</span>
                    </Link>
                  </h3>
                  <p>
                    Best Strategic planning dolor sit amet consectetur
                    adipiscing elit. Scelerisque amet odio velit eu auctor.
                    Aliquet nam elit nulla eget sodales dui pulvinar.
                  </p>

                  <Link href="/case-study-details">
                    <span className="projects-btn">
                      Read More
                      <i className="ri-arrow-right-line"></i>
                    </span>
                  </Link>
                </div>
              </div>
              </SwiperSlide>

              <SwiperSlide>
              <div className="single-projects">
                <div className="projects-image">
                  <Link href="/case-study-details">
                    <img src="/images/projects/projects-4.jpg" alt="image" />
                  </Link>
                </div>

                <div className="projects-content">
                  <h3>
                    <Link href="/case-study-details">
                      <span>SEO Optimization</span>
                    </Link>
                  </h3>
                  <p>
                    Best Strategic planning dolor sit amet consectetur
                    adipiscing elit. Scelerisque amet odio velit eu auctor.
                    Aliquet nam elit nulla eget sodales dui pulvinar.
                  </p>

                  <Link href="/case-study-details">
                    <span className="projects-btn">
                      Read More
                      <i className="ri-arrow-right-line"></i>
                    </span>
                  </Link>
                </div>
              </div>
              </SwiperSlide>

              <SwiperSlide>
              <div className="single-projects">
                <div className="projects-image">
                  <Link href="/case-study-details">
                    <img src="/images/projects/projects-5.jpg" alt="image" />
                  </Link>
                </div>

                <div className="projects-content">
                  <h3>
                    <Link href="/case-study-details">
                      <span>Advanced Analytics</span>
                    </Link>
                  </h3>
                  <p>
                    Best Strategic planning dolor sit amet consectetur
                    adipiscing elit. Scelerisque amet odio velit eu auctor.
                    Aliquet nam elit nulla eget sodales dui pulvinar.
                  </p>

                  <Link href="/case-study-details">
                    <span className="projects-btn">
                      Read More
                      <i className="ri-arrow-right-line"></i>
                    </span>
                  </Link>
                </div>
              </div>
              </SwiperSlide>

              <SwiperSlide>
              <div className="single-projects">
                <div className="projects-image">
                  <Link href="/case-study-details">
                    <img src="/images/projects/projects-6.jpg" alt="image" />
                  </Link>
                </div>

                <div className="projects-content">
                  <h3>
                    <Link href="/case-study-details">
                      <span>Email Marketing</span>
                    </Link>
                  </h3>
                  <p>
                    Best Strategic planning dolor sit amet consectetur
                    adipiscing elit. Scelerisque amet odio velit eu auctor.
                    Aliquet nam elit nulla eget sodales dui pulvinar.
                  </p>

                  <Link href="/case-study-details">
                    <span className="projects-btn">
                      Read More
                      <i className="ri-arrow-right-line"></i>
                    </span>
                  </Link>
                </div>
              </div>
              </SwiperSlide>

              <SwiperSlide>
              <div className="single-projects">
                <div className="projects-image">
                  <Link href="/case-study-details">
                    <img src="/images/projects/projects-1.jpg" alt="image" />
                  </Link>
                </div>

                <div className="projects-content">
                  <h3>
                    <Link href="/case-study-details">
                      <span>Business Consulting</span>
                    </Link>
                  </h3>
                  <p>
                    Best Strategic planning dolor sit amet consectetur
                    adipiscing elit. Scelerisque amet odio velit eu auctor.
                    Aliquet nam elit nulla eget sodales dui pulvinar.
                  </p>

                  <Link href="/case-study-details">
                    <span className="projects-btn">
                      Read More
                      <i className="ri-arrow-right-line"></i>
                    </span>
                  </Link>
                </div>
              </div>
              </SwiperSlide>

              <SwiperSlide>
              <div className="single-projects">
                <div className="projects-image">
                  <Link href="/case-study-details">
                    <img src="/images/projects/projects-2.jpg" alt="image" />
                  </Link>
                </div>

                <div className="projects-content">
                  <h3>
                    <Link href="/case-study-details">
                      <span>Financial Consulting for Ozen</span>
                    </Link>
                  </h3>
                  <p>
                    Best Strategic planning dolor sit amet consectetur
                    adipiscing elit. Scelerisque amet odio velit eu auctor.
                    Aliquet nam elit nulla eget sodales dui pulvinar.
                  </p>

                  <Link href="/case-study-details">
                    <span className="projects-btn">
                      Read More
                      <i className="ri-arrow-right-line"></i>
                    </span>
                  </Link>
                </div>
              </div>
              </SwiperSlide>

              <SwiperSlide>
              <div className="single-projects">
                <div className="projects-image">
                  <Link href="/case-study-details">
                    <img src="/images/projects/projects-3.jpg" alt="image" />
                  </Link>
                </div>

                <div className="projects-content">
                  <h3>
                    <Link href="/case-study-details">
                      <span>Social Media Marketing</span>
                    </Link>
                  </h3>
                  <p>
                    Best Strategic planning dolor sit amet consectetur
                    adipiscing elit. Scelerisque amet odio velit eu auctor.
                    Aliquet nam elit nulla eget sodales dui pulvinar.
                  </p>

                  <Link href="/case-study-details">
                    <span className="projects-btn">
                      Read More
                      <i className="ri-arrow-right-line"></i>
                    </span>
                  </Link>
                </div>
              </div>
              </SwiperSlide>

              <SwiperSlide>
              <div className="single-projects">
                <div className="projects-image">
                  <Link href="/case-study-details">
                    <img src="/images/projects/projects-4.jpg" alt="image" />
                  </Link>
                </div>

                <div className="projects-content">
                  <h3>
                    <Link href="/case-study-details">
                      <span>SEO Optimization</span>
                    </Link>
                  </h3>
                  <p>
                    Best Strategic planning dolor sit amet consectetur
                    adipiscing elit. Scelerisque amet odio velit eu auctor.
                    Aliquet nam elit nulla eget sodales dui pulvinar.
                  </p>

                  <Link href="/case-study-details">
                    <span className="projects-btn">
                      Read More
                      <i className="ri-arrow-right-line"></i>
                    </span>
                  </Link>
                </div>
              </div>
              </SwiperSlide>

              <SwiperSlide>
              <div className="single-projects">
                <div className="projects-image">
                  <Link href="/case-study-details">
                    <img src="/images/projects/projects-5.jpg" alt="image" />
                  </Link>
                </div>

                <div className="projects-content">
                  <h3>
                    <Link href="/case-study-details">
                      <span>Advanced Analytics</span>
                    </Link>
                  </h3>
                  <p>
                    Best Strategic planning dolor sit amet consectetur
                    adipiscing elit. Scelerisque amet odio velit eu auctor.
                    Aliquet nam elit nulla eget sodales dui pulvinar.
                  </p>

                  <Link href="/case-study-details">
                    <span className="projects-btn">
                      Read More
                      <i className="ri-arrow-right-line"></i>
                    </span>
                  </Link>
                </div>
              </div>
              </SwiperSlide>

              <SwiperSlide>
              <div className="single-projects">
                <div className="projects-image">
                  <Link href="/case-study-details">
                    <img src="/images/projects/projects-6.jpg" alt="image" />
                  </Link>
                </div>

                <div className="projects-content">
                  <h3>
                    <Link href="/case-study-details">
                      <span>Email Marketing</span>
                    </Link>
                  </h3>
                  <p>
                    Best Strategic planning dolor sit amet consectetur
                    adipiscing elit. Scelerisque amet odio velit eu auctor.
                    Aliquet nam elit nulla eget sodales dui pulvinar.
                  </p>

                  <Link href="/case-study-details">
                    <span className="projects-btn">
                      Read More
                      <i className="ri-arrow-right-line"></i>
                    </span>
                  </Link>
                </div>
              </div>
              </SwiperSlide>
            </Swiper>
        </div>

        {/* Shape Images */}
        <div className="projects-shape-1">
          <img src="/images/projects/shape-1.png" alt="image" />
        </div>
        <div className="projects-shape-2">
          <img src="/images/projects/shape-2.png" alt="image" />
        </div>
        <div className="projects-shape-3">
          <img src="/images/projects/shape-3.png" alt="image" />
        </div>
        <div className="projects-shape-4">
          <img src="/images/projects/shape-4.png" alt="image" />
        </div>
        <div className="projects-shape-5">
          <img src="/images/projects/shape-5.png" alt="image" />
        </div>
      </div>

      {/* Recent Case Study Slider Style */}
      <style jsx>{`
        .projects-area {
          position: relative;
          z-index: 1;
          overflow: hidden;
        }
        .single-projects .projects-image {
          overflow: hidden;
        }
        .single-projects .projects-image a {
          display: block;
        }
        .single-projects .projects-image img {
          -webkit-transition: var(--transition);
          transition: var(--transition);
          display: inline-block;
        }
        .single-projects .projects-content {
          margin-top: 25px;
        }
        .single-projects .projects-content h3 {
          font-size: 23px;
          margin-bottom: 15px;
        }
        .single-projects .projects-content h3 span {
          color: var(--black-color);
        }
        .single-projects .projects-content p {
          margin-bottom: 15px;
        }
        .single-projects .projects-content .projects-btn {
          color: var(--black-color);
          position: relative;
          -webkit-transition: var(--transition);
          transition: var(--transition);
          font-weight: 500;
        }
        .single-projects .projects-content .projects-btn i {
          position: absolute;
          right: -20px;
          top: 50%;
          -webkit-transform: translateY(-50%);
          transform: translateY(-50%);
        }
        .single-projects:hover .projects-image img {
          -webkit-transform: scale(1.1);
          transform: scale(1.1);
        }
        .single-projects:hover .projects-content h3 span {
          color: var(--optional-color);
        }
        .single-projects:hover .projects-content .projects-btn {
          letter-spacing: 1px;
          color: var(--optional-color);
        }

        {/* Projects shape */}
        .projects-shape-1 {
          position: absolute;
          top: 25%;
          left: 0;
          -webkit-transform: translateY(-25%);
          transform: translateY(-25%);
        }
        .projects-shape-2 {
          position: absolute;
          top: 20%;
          left: 30%;
          -webkit-transform: translateY(-20%) translateX(-30%);
          transform: translateY(-20%) translateX(-30%);
          z-index: -1;
        }
        .projects-shape-3 {
          position: absolute;
          top: 10%;
          right: 15%;
          -webkit-transform: translateY(-10%) translateX(-15%);
          transform: translateY(-10%) translateX(-15%);
        }
        .projects-shape-4 {
          position: absolute;
          bottom: 15%;
          right: 15%;
          -webkit-transform: translateY(-15%) translateX(-15%);
          transform: translateY(-15%) translateX(-15%);
        }
        .projects-shape-5 {
          position: absolute;
          bottom: 10%;
          right: 12%;
          -webkit-transform: translateY(-10%) translateX(-12%);
          transform: translateY(-10%) translateX(-12%);
        }

        {/* Responsive Style */}
        @media only screen and (max-width: 767px) {
          .projects-shape-1,
          .projects-shape-2,
          .projects-shape-3,
          .projects-shape-4,
          .projects-shape-5 {
            display: none;
          }
          .single-projects .projects-content h3 {
            font-size: 20px;
            margin-bottom: 15px;
          }
        }

        @media only screen and (min-width: 768px) and (max-width: 991px) {
          .projects-shape-1,
          .projects-shape-2,
          .projects-shape-3,
          .projects-shape-4,
          .projects-shape-5 {
            display: none;
          }
        }

        @media only screen and (min-width: 992px) and (max-width: 1199px) {
        }
      `}</style>
    </>
  );
};

export default RecentCaseStudySlider;
