"use client";

import { socialMediaLinks } from "@/data/footer";

export default function Footer9() {
  const scrollToTop = (event) => {
    event.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Smooth scrolling for better user experience
    });
  };

  return (
    <div className="container">
      <div className="page-section">
        <div className="row">
          {/* Copyright */}
          <div className="col-lg-3 text-center text-lg-start mb-md-50">
            © IB-Themes {new Date().getFullYear()}.
          </div>
          {/* End Copyright */}

          {/* Social Links */}
          <div className="col-lg-6 footer-social-links text-center mb-md-40">
            {Array.isArray(socialMediaLinks) && socialMediaLinks.length > 0 ? (
              socialMediaLinks.map((elm, i) => (
                <a
                  key={i}
                  href={elm.href || "#"}
                  title={elm.name || "Social Media"}
                  rel="noopener nofollow"
                  target="_blank"
                >
                  <span className="visually-hidden">{elm.name}</span>
                  <i className={elm.iconClass || "default-icon"} />
                </a>
              ))
            ) : (
              <p>No social links available.</p> // Fallback for empty or invalid links
            )}
          </div>
          {/* End Social Links */}

          {/* Back to Top */}
          <div className="col-lg-3 text-center text-lg-end local-scroll">
            <a href="#top" className="fw-top-link" onClick={scrollToTop}>
              <span className="fw-top-link-underline">Back to top</span>
              <span className="icon ms-1">
                <i className="icon-arrow-up size-17" />
              </span>
            </a>
          </div>
        </div>
      </div>

      {/* Footer Text */}
      <div className="footer-text text-center opacity-75 mt-n10 pb-50">
        Made with love for great people.
        <div className="small">
          Read <a href="#">Terms &amp; Conditions</a> and{" "}
          <a href="#">Privacy Policy</a>.
        </div>
      </div>
      {/* End Footer Text */}
    </div>
  );
}
