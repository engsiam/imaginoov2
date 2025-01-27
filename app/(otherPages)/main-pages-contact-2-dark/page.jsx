import dynamic from "next/dynamic";

const ParallaxContainer = dynamic(
  () => import("@/components/common/ParallaxContainer"),
  {
    ssr: false, // Disable server-side rendering
  }
);

import Footer5 from "@/components/footers/Footer5";
import Header5 from "@/components/headers/Header5";
import Contact from "@/components/homes/home-5/Contact";
import { boldMultipage } from "@/data/menu";
export const metadata = {
  title: "Contact Us",
  description: "",
};
export default function MainAboutPage1Dark() {
  return (
    <>
      <div className="theme-main">
        <div className="dark-mode">
          <div className="page bg-dark-1" id="top">
            <nav className="main-nav dark dark-mode transparent stick-fixed wow-menubar">
              <Header5 links={boldMultipage} />
            </nav>
            <main id="main">
              <section className="page-section pt-0 pb-0" id="home">
                <ParallaxContainer
                  className="page-section pb-100 pb-sm-60 bg-dark-1 bg-dark-alpha-80 light-content parallax-5"
                  style={{
                    backgroundImage:
                      "url(/assets/images/full-width-images/about.png)",
                  }}
                >
                  <>
                    <>
                      <div className="position-absolute top-0 bottom-0 start-0 end-0 bg-gradient-dark"></div>
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
                                Contact Us
                              </h2>
                              <h1 className="hs-title-1 mb-0">
                                <span
                                  className="wow charsAnimIn"
                                  data-splitting="chars"
                                >
                                  Say hello and let’s start the productive work.
                                </span>
                              </h1>
                            </div>
                            {/* End Page Title */}
                          </div>
                        </div>
                        {/* End Section Content */}
                      </div>
                    </>
                  </>
                </ParallaxContainer>
              </section>
              <>
                {/* Contact Section */}
                <section
                  className="page-section bg-dark-1 light-content pt-0"
                  id="contact"
                >
                  <Contact />
                </section>
                {/* <div className="google-map light-content">
                  <Map />
                </div> */}
                {/* End Contact Section */}
                {/* Divider */}
                {/* <hr className="mt-0 mb-0 white" /> */}
                {/* End Divider */}
                {/* FAQ Section */}
              </>
            </main>
            <footer className="bg-dark-2 light-content footer z-index-1 position-relative">
              <Footer5 />
            </footer>
          </div>{" "}
        </div>
      </div>
    </>
  );
}
