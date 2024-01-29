import React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemPanel,
  AccordionItemButton,
} from "react-accessible-accordion";

const Faqs = () => {
  return (
    <>
      <div className="faq-area ptb-100">
        <div className="container">
          <div className="section-title">
            <h2>Frequently Asked Questions</h2>
            <p>
              Which peoples loves us a lot, please check out what about says
              about us
            </p>
          </div>

          <div className="row align-items-center">
            <div className="col-lg-4 col-md-12">
              <div className="faq-image">
                <img src="/images/faq/faq-1.png" alt="image" />
              </div>
            </div>

            <div className="col-lg-8 col-md-12">
              <div className="faq-accordion">
                <Accordion allowZeroExpanded preExpanded={["a"]}>
                  <AccordionItem uuid="a">
                    <AccordionItemHeading>
                      <AccordionItemButton>
                        What services does Web Verve Studios offer
                      </AccordionItemButton>
                    </AccordionItemHeading>

                    <AccordionItemPanel>
                      <p>
                        At Web Verve Studios, we offer a comprehensive suite of web development services. This includes custom web application development, responsive website design, e-commerce solutions, mobile app development, and digital strategy consulting.
                      </p>
                    </AccordionItemPanel>
                  </AccordionItem>

                  <AccordionItem uuid="b">
                    <AccordionItemHeading>
                      <AccordionItemButton>
                        How does the web development process at Web Verve Studios work?
                      </AccordionItemButton>
                    </AccordionItemHeading>

                    <AccordionItemPanel>
                      <p>
                        Our web development process is a collaborative journey. It typically involves an initial consultation, project planning, design and development phases, client feedback, and final deployment. We prioritize transparency and open communication throughout the entire process to ensure your vision is realized.
                      </p>
                    </AccordionItemPanel>
                  </AccordionItem>

                  <AccordionItem uuid="c">
                    <AccordionItemHeading>
                      <AccordionItemButton>
                        What technologies does Web Verve Studios specialize in?
                      </AccordionItemButton>
                    </AccordionItemHeading>

                    <AccordionItemPanel>
                      <p>
                        We specialize in a wide range of technologies and frameworks to ensure that we can meet the diverse needs of our clients. Our expertise includes but is not limited to HTML5, CSS3, JavaScript, PHP, React, Angular, Node.js, and various content management systems (CMS) like WordPress.
                      </p>
                    </AccordionItemPanel>
                  </AccordionItem>

                  <AccordionItem uuid="d">
                    <AccordionItemHeading>
                      <AccordionItemButton>
                       Can Web Verve Studios redesign an existing website?
                      </AccordionItemButton>
                    </AccordionItemHeading>

                    <AccordionItemPanel>
                      <p>
                        Absolutely! Whether you need a complete website overhaul or a targeted redesign, we have the expertise to revamp your online presence. Our team will work closely with you to understand your goals and create a modern, user-friendly, and visually appealing website.
                      </p>
                    </AccordionItemPanel>
                  </AccordionItem>

                  <AccordionItem uuid="e">
                    <AccordionItemHeading>
                      <AccordionItemButton>
                        How do you ensure the security of web applications developed by Web Verve Studios?
                      </AccordionItemButton>
                    </AccordionItemHeading>

                    <AccordionItemPanel>
                      <p>
                       Security is a top priority for us. We follow industry best practices for secure coding, conduct regular security audits, and implement robust measures to protect against common vulnerabilities. We also stay informed about the latest security trends to continuously enhance our protocols.
                      </p>
                    </AccordionItemPanel>
                  </AccordionItem>

                  <AccordionItem uuid="f">
                    <AccordionItemHeading>
                      <AccordionItemButton>
                        What makes Web Verve Studios different from other web development agencies?
                      </AccordionItemButton>
                    </AccordionItemHeading>

                    <AccordionItemPanel>
                      <p>
                        Our key differentiators include over 12 years of industry experience, a highly skilled and dedicated team, a client-centric approach, and a commitment to staying at the forefront of technology trends. We prioritize delivering high-quality solutions that align with your business objectives.
                      </p>
                    </AccordionItemPanel>
                  </AccordionItem>
                </Accordion>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Faqs;
