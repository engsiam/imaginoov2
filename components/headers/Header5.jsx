"use client";
import { toggleMobileMenu } from "@/utlis/toggleMobileMenu";
import Nav from "./components/Nav";

import Image from "next/image";

export default function Header5({ links }) {
  return (
    <header className="main-header">
      <div className="main-nav-sub full-wrapper">
        {/* Logo Section */}
        <div className="nav-logo-wrap local-scroll">
          <a href="#top" className="font-alt">
            <Image
              src="/assets/images/logo.png"
              alt="imaginoo"
              width={140}
              height={40} // Adjusted height for proper scaling
              className="nav-logo"
            />
          </a>
        </div>

        {/* Mobile Menu Button */}
        <div
          onClick={toggleMobileMenu}
          className="mobile-nav"
          role="button"
          tabIndex={0}
        >
          <i className="mobile-nav-icon fa fa-bars" />
          <span className="visually-hidden">Menu</span>
        </div>

        {/* Main Menu */}
        <div className="inner-nav desktop-nav">
          <ul className="clearlist scroll-nav local-scroll justify-content-end scrollspyLinks">
            <Nav links={links} />
            <li className="ms-3 me-2" />
            <li>
              <a href="/" className="opacity-1 no-hover" target="_blank">
                {/* Add any additional button links here */}
              </a>
            </li>
          </ul>
        </div>
        {/* End Main Menu */}
      </div>
    </header>
  );
}
