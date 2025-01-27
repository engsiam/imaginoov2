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
import Portfolio from "@/components/homes/home-5/Portfolio";
import CompletePortfolio from "@/components/homes/home-5/CompletePortfolio";

export const metadata = {
  title: "About Us",
  description: "",
};
export default function ImaginooPortfolio() {
  return (
    <>
      <div className="theme-main">
        <div className="page" id="top">
          <nav className="main-nav dark dark-mode transparent stick-fixed wow-menubar">
            <Header5 links={boldMultipage} />
          </nav>
          <main id="main">
            <section className="page-section pt-0 pb-50" id="home">
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
                            <AnimatedText text="Our Portfolio" />
                          </span>
                        </h1>
                        {/* Feature List */}
                        <div
                          className="mt-n10 wow fadeInUp"
                          data-wow-delay="0.6s"
                          data-wow-duration="1.2s"
                        >
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
           <CompletePortfolio />
            
          </main>
          <Footer5 />
        </div>{" "}
      </div>
    </>
  );
}
