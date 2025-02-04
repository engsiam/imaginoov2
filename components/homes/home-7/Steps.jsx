import { stepsItems2 } from "@/data/steps";
import React from "react";

export default function Steps() {
  return (
    <div className="container position-relative">
      <div className="row mb-80 mb-sm-60">
        <div className="col-md-8 col-lg-6">
          <h2 className="section-title mb-0">
          Why Work With Imaginoo?
          </h2>
        </div>
        <div className="col-lg-6 pt-20 pt-md-30">
          <p className="text-gray mb-0">
          At Imaginoo, we excel in creating regionalized campaigns that resonate deeply with diverse markets, from the US to the UK and France. Our expertise lies in crafting scroll-stopping, social-first videos designed to maximize engagement and reach. More than just creators, we are problem solvers, transforming complex content and production challenges into opportunities for impactful growth.
          </p>
        </div>
      </div>
      {/* Steps Grid */}
      <div className="row mt-n30">
        {/* Gradient Settings for SVG Icons */}
        <svg className="visually-hidden" aria-hidden="true">
          <linearGradient id="gradient-horizontal">
            <stop offset="0%" stopColor="var(--color-primary-4)" />
            <stop offset="33%" stopColor="var(--color-primary-3)" />
            <stop offset="67%" stopColor="var(--color-primary-2)" />
            <stop offset="100%" stopColor="var(--color-primary-1)" />
          </linearGradient>
        </svg>
        {/* End Gradient Settings for SVG Icons */}
        {/* Steps Item */}

        {stepsItems2.map((item, index) => (
          <div
            key={index}
            className={
              "col-md-6 col-lg-3 d-flex align-items-stretch mt-30 wow fadeIn"
            }
            data-wow-duration={item.dataWowDuration}
            data-wow-delay={item.dataWowDelay}
          >
            <div className="features-2-item pt-sm-40 pb-sm-40">
              <div className="features-2-label">{item.label}</div>
              <div className="features-2-icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d={item.iconPath} />
                </svg>
              </div>
              <h4 className="features-2-title">{item.title}</h4>
              <div className="features-2-descr">{item.description}</div>
            </div>
          </div>
        ))}
        {/* End Steps Items */}
      </div>
      {/* End Steps Grid */}
    </div>
  );
}
