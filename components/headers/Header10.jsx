"use client";

import { toggleMobileMenu } from "@/utlis/toggleMobileMenu";
import Image from "next/image";
import Link from "next/link";
import LanguageSelect from "./components/LanguageSelect";
import Nav from "./components/Nav";

export default function Header10({ links = [] }) {
  // Validate the `links` prop to ensure it's an array with valid data
  if (!Array.isArray(links) || links.length === 0) {
    console.warn("Invalid or empty links prop:", links);
    return null; // Safely return null if no links are provided
  }

  return (
    <div className="main-nav-sub full-wrapper">
      {/* Logo */}
      <div className="nav-logo-wrap local-scroll">
        <a href="#top" className="logo font-alt">
          <Image
            src="/assets/images/demo-strong/logo-white.svg"
            alt="Your Company Logo"
            width={176}
            height={34}
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
        <i className="mobile-nav-icon" />
        <span className="visually-hidden">Menu</span>
      </div>

      {/* Main Menu */}
      <div className="inner-nav desktop-nav">
        <ul className="clearlist scroll-nav local-scroll scrollspyLinks">
          <Nav links={links} />
        </ul>

        <ul className="items-end clearlist local-scroll">
          {/* Language Selector */}
          <LanguageSelect />

          {/* Call to Action */}
          {links?.[0]?.href?.includes("/") ? (
            <li>
              <Link
                href={links[links.length - 1]?.href || "#"}
                className="opacity-1 no-hover"
              >
                <span className="link-hover-anim" data-link-animate="y">
                  <span className="icon-ellipse me-1" /> Say hello
                </span>
              </Link>
            </li>
          ) : (
            <li>
              <a href="#contact" className="opacity-1 no-hover">
                <span className="link-hover-anim" data-link-animate="y">
                  <span className="icon-ellipse me-1" /> Say hello
                </span>
              </a>
            </li>
          )}
        </ul>
      </div>
      {/* End Main Menu */}
    </div>
  );
}
