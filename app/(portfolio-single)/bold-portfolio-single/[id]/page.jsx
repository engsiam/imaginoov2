"use client";
import AnimatedText from "@/components/common/AnimatedText";
import RelatedProject9 from "@/components/portfolio/relatedProjects/RelatedProject9";
import Image from "next/image";
import { boldMultipage } from "@/data/menu";
import dynamic from "next/dynamic";

import React from "react";
import { portfolios4 } from "@/data/portfolio";
import Header5 from "@/components/headers/Header5";
import Footer5 from "@/components/footers/Footer5";
import ImageToVideo from "../imageToVideo";
const ParallaxContainer = dynamic(
  () => import("@/components/common/ParallaxContainer"),
  {
    ssr: false, // Disable server-side rendering
  }
);
// export const metadata = {
//   title:
//     "Portfolio Single",
//   description:
//     "",
// };

export default function BoldPortfolioSinglePage({ params }) {
  const portfolioItem =
  portfolios4.filter((elm) => elm.id == params.id)[0] || portfolios4[0];

  const {imageSrc, videoSrc, heading, subheading,description,statement,details,title} = portfolioItem;

  return (
    <>
      <div className="theme-bold">
        <div className="page" id="top">
          <nav className="main-nav dark transparent stick-fixed wow-menubar">
            <Header5 links={boldMultipage} />
          </nav>
          <main id="main">
            <ParallaxContainer
              className="page-section bg-dark-alpha-30 parallax-5 light-content"
              style={{
                backgroundColor: "black"}}
              id="home"
            >
              <div className="container position-relative pt-sm-40">
                <div className="text-center">
                  <h1 className="hs-title-4 font-alt mb-0">
                    <span
                      className="wow charsAnimInLong-1"
                      data-splitting="chars"
                    >
                      <AnimatedText text={title} />
                    </span>
                  </h1>
                </div>
              </div>
            </ParallaxContainer>
            <>
              {/* Section */}
              <section className="page-section">
                <div className="container position-relative">
                  <div className="row">
                    {/* Project Details */}
                    <div
                      className="col-md-4 mb-sm-40 wow fadeInUp"
                      data-wow-offset={0}
                    >
                      <div className="block-sticky">
                        <h2 className="h3 mb-20">Project Details</h2>
                        <h5 className="mb-20">{heading}</h5>
                        <p>{subheading}</p>
                        <p>{description}</p>
                        <p>{statement}</p>
                       <ul>
                          {details.map((detail, index) => (
                            <li key={index}>{detail}</li>
                          ))}
                       </ul>
                        {}
                      </div>
                    </div>
                    {/* End Project Details */}
                    <ImageToVideo imageSrc={imageSrc} videoSrc={videoSrc}/>
                  </div>
                </div>
              </section>
              {/* End Section */}
              {/* Divider */}
              <hr className="black mt-0 mb-0" />
              {/* End Divider */}
            </>
            <section className="page-section">
              <RelatedProject9 />
            </section>
          </main>
          <footer className="footer-1 bg-dark-1 light-content">
            <Footer5 />
          </footer>
        </div>{" "}
      </div>{" "}
    </>
  );
}
