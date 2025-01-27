"use client";
import { contactItems } from "@/data/contact";
import React from "react";

export default function Contact() {
  return (
    <div className="container">
      <div className="row mt-n10 mb-60 mb-xs-40">
        <div className="col-md-10 offset-md-1">
          <div className="row">
            {/* Phone */}
            {contactItems.map((item, index) => (
              <React.Fragment key={index}>
                <div className={`col-md-6 col-lg-4 mb-md-30 `}>
                  <div className="contact-item wow fadeScaleIn">
                    <div className="ci-icon">
                      <i className={item.iconClass} />
                    </div>
                    <h4 className="ci-title">{item.title}</h4>
                    <div className="ci-text large">{item.text}</div>
                    <div className="ci-link">
                      <a
                        href={item.link.url}
                        target={item.link.target}
                        rel={item.link.rel}
                      >
                        {item.link.text}
                      </a>
                    </div>{" "}
                  </div>
                </div>{" "}
              </React.Fragment>
            ))}

            {/* End Email */}
          </div>
        </div>
      </div>
      {/* Contact Form */}
      <div className="row" style={{textAlign:"center"}}>
        <div className="col-md-10 offset-md-1">
        <a
                    href="https://docs.google.com/forms/d/e/1FAIpQLScunCbnWdkDUnwgKoqO4EXRCMXEX7zM8eAyD3X-XQtWl8ma_g/viewform?usp=header"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`btn btn-mod btn-large 
                    } btn-round ms-1 me-1 mt-2 align-middle`}
                    data-btn-animate="y"
                    style={{ backgroundColor: "#fd924a", height: "" }}
                  >
                    <span  className="btn-animate-y">
                      <span style={{color:"black", fontWeight:"bold",fontSize:"15"}}className="btn-animate-y-1">Ready To Elevate Your Campaign?</span>
                      <span style={{color:"black", fontWeight:"bold",fontSize:"15"}} className="btn-animate-y-2" aria-hidden="true">
                        Ready To Elevate Your Campaign?
                      </span>
                    </span>
                  </a>
        </div>
      </div>
      {/* End Contact Form */}
    </div>
  );
}
