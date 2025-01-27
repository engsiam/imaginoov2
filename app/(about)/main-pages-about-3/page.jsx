import dynamic from "next/dynamic";
const onePage = false;
const dark = false;
const ParallaxContainer = dynamic(
  () => import("@/components/common/ParallaxContainer"),
  {
    ssr: false, // Disable server-side rendering
  }
);

import AnimatedText from "@/components/common/AnimatedText";
import Footer5 from "@/components/footers/Footer5";
import Header5 from "@/components/headers/Header5";
import Split from "@/components/homes/home-1/Split";
import Steps from "@/components/homes/home-7/Steps";
import { featuresListData } from "@/data/features";
import { boldMultipage } from "@/data/menu";
import { progressData } from "@/data/skills";
import { testimonialItems } from "@/data/testimonials";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { evansSocials, socialMediaLinks } from "@/data/footer";

export const metadata = {
  title: "About Us",
  description: "",
};
export default function MainAboutPage3() {
  return (
    <>
      <div className="theme-main">
        <div className="page" id="top">
          <nav className="main-nav dark dark-mode transparent stick-fixed wow-menubar">
            <Header5 links={boldMultipage} />
          </nav>
          <main id="main">
            <section className="page-section pt-0 pb-0" id="home">
              <ParallaxContainer
                className="page-section bg-dark-1 bg-dark-alpha-80 light-content parallax-5"
                style={{
                  backgroundImage:
                    "url(/assets/images/full-width-images/about.png)",
                }}
              >
                <div className="container position-relative pt-50">
                  {/* Section Content */}
                  <div className="text-center">
                    <div className="row">
                      {/* Page Title */}
                      <div className="col-md-8 offset-md-2">
                        <h2
                          className="section-caption-border mb-30 mb-xs-20 wow fadeInUp"
                          data-wow-duration="1.2s"
                        >
                          We are AI Company
                        </h2>
                        <h1 className="hs-title-1 mb-40">
                          <span
                            className="wow charsAnimIn"
                            data-splitting="chars"
                          >
                            <AnimatedText text="About Us" />
                          </span>
                        </h1>
                        {/* Feature List */}
                        <div
                          className="mt-n10 wow fadeInUp"
                          data-wow-delay="0.6s"
                          data-wow-duration="1.2s"
                        >
                          {/* Features List Item */}
                          
                          {/* End Features List Item */}
                        </div>
                        {/* End Feature List */}
                      </div>
                      {/* End Page Title */}
                    </div>
                  </div>
                  {/* End Section Content */}
                </div>
              </ParallaxContainer>
            </section>
            
            {/* <section
              className="page-section bg-dark bg-dark-alpha-70 light-content"
              style={{
                backgroundImage:
                  "url(/assets/images/full-width-images/section-bg-4.jpg)",
              }}
            >
              <Features />
            </section> */}
            <>
              {/* Testimonials Section */}
              <section className="page-section bg-gradient-gray-light-2 bg-scroll"
                style={{
                  background: "linear-gradient(35deg, white, grey)",
                }}
              >
                <div className="container position-relative">
                  <div className="row">
                    <div className="col-md-10 offset-md-1 col-lg-8 offset-lg-2 text-center">
                      <h2 style={{color:"black"}} className="section-caption mb-xs-10 wow fadeInUp">
                        Our Ai Team
                      </h2>
                      <h3 style={{color:"black"}} className="section-title mb-70 mb-sm-50">
                        <span
                          className="wow charsAnimIn"
                          data-splitting="chars"
                        >
                          Meet the Founders.
                        </span>
                      </h3>
                    </div>
                  </div>
                  {testimonialItems.map((elm, i) => (
                    <React.Fragment key={i}>
                      {!(i % 2) ? (
                        <div className="row mb-80 mb-sm-60">
                          <div className="col-md-5 col-lg-4 offset-lg-1 mb-sm-40">
                          <div className="section-line mb-10" />
                              <footer style={{marginBottom: "30px"}}>
                                <div style={{color:"black"}} className="testimonials-6-author">
                                  {elm.author}
                                </div>
                                <div style={{color:"black"}} className="testimonials-6-position">
                                  {elm.position}
                                </div>{socialMediaLinks.map((elm, i) => (
                                   <a
                                     href={elm.href}
                                     key={1}
                                     title="Linkedin"
                                     rel="noopener nofollow"
                                     target="_blank"
                                   >
                                     <span className="visually-hidden">{elm.name}</span>
                                     <i className={elm.iconClass} />
                                   </a>
                                  ))}
                              </footer>
                            <div className="overflow-hidden round">
                              <Image
                                src={elm.imageSrc}
                                width={656}
                                height={800}
                                alt="Image Description"
                                className="wow scaleOutIn"
                              />
                            </div>
                          </div>
                          <div className="col-md-6 offset-md-1 col-lg-5 offset-lg-1 d-flex align-items-center wow fadeInUp">
                            <blockquote className="testimonials-6-item">
                              <div style={{color:"black"}}
                                className=" opacity-01-dark"
                                aria-hidden="true"
                              >
                                
                              </div>
                              <p style={{color:"black"}} className="testimonials-6-author mb-40">
                                {elm.quote}
                              </p>
                              <p style={{color:"black"}} className="testimonials-6-author">{elm.key}</p>

                              <ul style={{color:"black"}} className="testimonials-6-author">
                                {elm.details.map((detail, index) => (
                                  <li key={index}>{detail}</li>
                                ))}
                              </ul>

                              
                            </blockquote>
                          </div>
                          
                        </div>
                      ) : (
                        <div className="row">
                           
                          <div className="col-md-5 offset-md-1 col-lg-4 offset-lg-1 order-md-last mb-sm-40">
                          <div className="section-line mb-10" />
                          <footer style={{marginBottom:"30px"}}>
                                <div style={{color:"black"}} className="testimonials-6-author">
                                  {elm.author}
                                </div>
                                <div style={{color:"black"}} className="testimonials-6-position">
                                  {elm.position}
                                </div>
                                {evansSocials.map((elm, i) => (
                                   <a
                                     href={elm.href}
                                     key={2}
                                     title="Linkedin"
                                     rel="noopener nofollow"
                                     target="_blank"
                                   >
                                     <span className="visually-hidden">{elm.name}</span>
                                     <i className={elm.iconClass} />
                                   </a>
                                  ))}
                              </footer>
                            <div className="overflow-hidden round">
                              <Image
                                src={elm.imageSrc}
                                width={656}
                                height={800}
                                alt="Image Description"
                                className="wow scaleOutIn"
                              />
                            </div>
                          </div>
                          <div className="col-md-6 col-lg-5 offset-lg-1 d-flex align-items-center wow fadeInUp">
                            <blockquote className="testimonials-6-item">
                              <div style={{color:"black"}}
                                className=" opacity-01-dark"
                                aria-hidden="true"
                              >
                                
                              </div>
                              <p style={{color:"black"}} className="testimonials-6-author mb-40">
                                {elm.quote}
                              </p>
                              <p style={{color:"black"}} className="testimonials-6-author">{elm.key}</p>

                              <ul style={{color:"black"}} className="testimonials-6-author">
                                {elm.details.map((detail, index) => (
                                  <li key={index}>{detail}</li>
                                ))}
                              </ul>
                             
                              
                            </blockquote>
                          </div>
                        </div>
                      )}
                    </React.Fragment>
                  ))}
                  {/* End Testimonial */}
                </div>
              </section>
              {/* <section
                className={`page-section   ${
                  dark ? "bg-dark-1 light-content" : ""
                }`}
              >
                <Steps />
                <div className="d-flex justify-content-center mt-30">
                  <a
                    href="https://docs.google.com/forms/d/e/1FAIpQLScunCbnWdkDUnwgKoqO4EXRCMXEX7zM8eAyD3X-XQtWl8ma_g/viewform?usp=header"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`btn btn-mod btn-large text-center ${
                      dark ? " btn-w " : ""
                    } btn-round ms-1 me-1 mt-2 align-middle`}
                    data-btn-animate="y"
                  >
                    <span className="btn-animate-y">
                      <span className="btn-animate-y-1">
                        Ready to elevate your campaign?
                      </span>
                      <span className="btn-animate-y-2" aria-hidden="true">
                        Ready to elevate your campaign?
                      </span>
                    </span>
                  </a>
                </div>
              </section> */}
              {/* End Team Section */}
              <hr className="mt-0 mb-0" />
              {/* Benefits Section */}
              
              {/* End Benefits Section */}
              {/* Divider */}
              <hr className="mt-0 mb-0" />
             
            </>
            <>
              {/* Skills Section */}
            
              {/* Divider */}
            </>
            <hr className={`mt-0 mb-0 ${dark ? "black" : ""}`} />
            
          </main>
          <Footer5 />
        </div>{" "}
      </div>
    </>
  );
}
