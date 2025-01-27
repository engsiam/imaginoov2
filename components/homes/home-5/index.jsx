import Image from "next/image";
import Link from "next/link";
import About from "./About";
import CardList from "./CardList";
import Contact from "./Contact";
import Marquee from "./Marquee";
import MarqueeDark from "./MarqueeDark";
import NewsLetter from "./NewsLetter";
import Portfolio from "./Portfolio";
import Service from "./Service";
import Hero5 from "../home-1/heros/Hero5";
import Videosection1 from "@/components/videosection/videosection1";
import Videosection2 from "@/components/videosection/videosection2";
import Videosection3 from "@/components/videosection/videosection3";

export default function Home5({ onePage = false, dark = false }) {
  return (
    <>
      
       <section
        className="home-section light-content z-index-1 scrollSpysection"
        id="home"
       >
        <Videosection1 />
       </section>
       <section
        className="home-section light-content z-index-1 scrollSpysection"
        id="home"
       >
        <Videosection2 />
       </section>
       <section
        className="home-section light-content z-index-1 scrollSpysection"
        id="home"
       >
        <Videosection3 />
       </section>

       {/* Latest Campaigns section start  */}
      <section
        className={`page-section  scrollSpysection  ${
          dark ? "bg-dark-1 light-content" : ""
        } `}
        id="campaigns"
        style={{
    background: "linear-gradient(35deg, black, #2C1603)",
     // Optional: Add padding for better visual appeal
    borderRadius: "10px", // Optional: Add rounded corners
  }}
      >
        <div className=" align-middle" >
          <div className="row mb-70 mb-sm-50 ">
            <div className="col-md-8 offset-md-2 col-lg-6 offset-lg-3 text-center">
              <h2 className=" mb-30 mb-sm-20">
                <span className="text-gray">Latest</span> Campaigns
                <span className="text-gray">.</span>
              </h2>
              <div className="text-gray mb-sm-20"></div>
            </div>
          </div>
        </div>
        <CardList />
        
      </section>
      {/* Latest Campaigns section end  */}
      <section
              className={`page-section  ${
                dark ? "bg-dark-1 light-content z-index-1" : ""
              }`}
            >
              <div className="container position-relative">
                {/* Decorative Waves */}
                {/* <div
                  className="decoration-21 d-none d-lg-block"
                  data-rellax-y
                  data-rellax-speed="0.7"
                  data-rellax-percentage="0.5"
                >
                  <Image
                    width={148}
                    height={148}
                    className="svg-shape"
                    src="/assets/images/decoration-3.svg"
                    alt=""
                  />
                </div> */}
                {/* End Decorative Waves */}
                <div className="row text-center wow fadeInUp">
                  <div className="col-md-8 offset-md-2 col-lg-10 offset-lg-1">
                    <h2 className="" style={{color: "#FF6F00"}}>Turning Vision into Scalable Success</h2>
                    <p className=" mb-50 mb-sm-30">
                    At Imaginoo, we don’t just create ads—we solve real-world marketing challenges by blending human creativity, data-driven insights, and cutting-edge AI tools. Our leadership team brings a unique combination of market strategy, audience research, and visual storytelling to every campaign, crafting content that captivates, converts, and resonates.
                    </p>
                    <div className="local-scroll">
                      <Link
                        href={`/main-pages-about-3`}
                        className="btn btn-mod btn-large btn-round btn-hover-anim"
                      >
                        <span>Our Story</span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </section>
      {/* <hr className="mt-0 mb-0" /> */}
      <h2 style={{color: "#FF6F00", textAlign:"center", padding:"10px"}} className="">It starts with your vision.<br />
      We’ll bring it to life</h2>

      {/* discovery Section */}
                    <section className="mt-100 mb-100">
                      <div className="container position-relative">
                        <div style={{color:"white"}} className="row">
                          {/* Section Text */}
                          <div className="col-lg-5 col-xl-5 d-flex align-items-center mb-md-60 mb-sm-40">
                            <div style={{color:"white"}} className="w-100">
                              {/* <h2 className="section-caption mb-30 mb-xs-10">
                                Benefits
                              </h2> */}
                              <h3 className="section-title mb-30" style={{ color: "#FF6F00", textAlign:"right" }}>
                                Discovery Session
                              </h3>
                              <p style={{color:"white", textAlign:"right" }} className=" mb-50 mb-sm-30">
                              We meet to understand your goals, audience, and brand priorities. This both aligns with your vision and drives the results you want
                              </p>
                              {/* Numbers */}
                              {/* <div className="row mt-sm-n10">
                                <div className="col-md-6 mt-sm-10">
                                  <div className="number-3-title black">5,000+</div>
                                  <div className="number-3-descr">
                                    Customers Reviews
                                  </div>
                                </div>
                                <div className="col-md-6 mt-sm-10">
                                  <div className="number-3-title black">99.9%</div>
                                  <div className="number-3-descr">
                                    Satisfied Customers
                                  </div>
                                </div>
                              </div> */}
                              {/* End Numbers */}
                            </div>
                          </div>
                          {/* End Section Text */}
                          {/* Image Column */}
                          <div className="col-lg-7 col-xl-6 offset-xl-1 d-flex align-items-center">
                            <div className="position-relative">
                              {/* Image */}
                              <div className="position-relative overflow-hidden">
                                <Image
                                  src="/assets/images/discovery.jpg"
                                  className="image-fullwidth relative"
                                  width={960}
                                  height={700}
                                  alt="Image Description"
                                />
                              </div>
                              {/* End Image */}
                            </div>
                          </div>
                          {/* End Image Column */}
                        </div>
                      </div>
                    </section>
                    {/* End discovery Section */}
                    <section className="mb-100">
  <div className="container position-relative">
    <div className="row" style={{ color: "white" }}>
      {/* Image Column */}
      <div className="col-lg-6 d-flex align-items-center">
        <div style={{ width: "100%" }}>
          <img
            src="/assets/images/roadmap.jpg" // Replace with your image path
            alt="The Campaign Roadmap"
            style={{ width: "100%", borderRadius: "8px" }}
          />
        </div>
      </div>
      {/* End Image Column */}

      {/* Text Column */}
      <div className="col-lg-6 d-flex align-items-center">
        <div style={{ padding: "20px" }}>
          <h3 className="section-title mb-30" style={{ color: "#FF6F00" }}>
            The Campaign Roadmap
          </h3>
          <p className="mb-50 mb-sm-30">
            A comprehensive strategy guide featuring:
          </p>
          <ul style={{ listStyleType: "none", padding: 0, color: "white" }}>
            <li>
              <strong>Target audience</strong> — demographics, interest,
              lifecycle, target persona, and other insights
            </li>
            <li>
              <strong>Competitive research</strong> — your competitors' traffic
              sources, partnerships, and loyalty drivers
            </li>
            <li>
              <strong>Channel strategy</strong> — our recommended channels for
              your goals. Specific goals & KPIs given your business
            </li>
            <li>
              <strong>Our pitch</strong> — moodboard and potential creative
              concept
            </li>
          </ul>
        </div>
      </div>
      {/* End Text Column */}
    </div>
  </div>
</section>

<section className="mb-100">
  <div className="container position-relative">
    <div className="row" style={{ color: "white" }}>
      {/* Text Column */}
      <div className="col-lg-6 d-flex align-items-center">
        <div style={{ padding: "20px" }}>
          <h3
            className="section-title mb-30"
            style={{ color: "#FF6F00", fontSize: "24px" }}
          >
            Your Next Steps
          </h3>
          <p style={{ fontStyle: "italic", marginBottom: "30px" }}>
            You choose if you want to
          </p>
          <div>
            <p>
              <strong>DIY Execution:</strong>
              <br />
              Take your Campaign Roadmap and implement it yourself.
            </p>
            <p>
              <strong>Partner with Us:</strong>
              <br />
              We bring the vision to life with end-to-end execution.
            </p>
          </div>
        </div>
      </div>
      {/* End Text Column */}

      {/* Image Column */}
      <div className="col-lg-6 d-flex align-items-center">
        <img
          src="/assets/images/steps.png" // Replace with your image path
          alt="Your Next Steps"
          style={{ width: "100%", borderRadius: "8px" }}
        />
      </div>
      {/* End Image Column */}
    </div>
    <div
  className="local-scroll wch-unset wow fadeInUp animated"
  data-wow-delay="0.6s"
  data-wow-duration="1.2s"
  style={{
    visibility: "visible",
    animationDuration: "1.2s",
    animationDelay: "0.6s",
    animationName: "fadeInUp",
    display: "flex", // Flexbox for alignment
    justifyContent: "center", // Centers horizontally
    alignItems: "center", // Centers vertically if required
    height: "100%", // Ensure the parent container takes up the full height
    marginTop:"10%",
  }}
>
  <a
    href="https://docs.google.com/forms/d/e/1FAIpQLScunCbnWdkDUnwgKoqO4EXRCMXEX7zM8eAyD3X-XQtWl8ma_g/viewform?usp=header"
    target="_blank"
    rel="noopener noreferrer"
    className={`btn btn-mod btn-large ${
      dark ? " btn-w " : ""
    } btn-round ms-1 me-1 mt-2 align-middle`}
    data-btn-animate="y"
    style={{ backgroundColor: "#fd924a" }}
  >
    <span className="btn-animate-y" >
      <span
        style={{
          color: "black",
          fontWeight: "bold",
          fontSize: "15px", // Added "px" for fontSize
        }}
        className="btn-animate-y-1"
      >
        Ready To Elevate Your Campaign?
      </span>
      <span
        style={{
          color: "#fd924a", 
          fontWeight: "bold",
          fontSize: "15px", // Added "px" for fontSize
          
        }}
        className="btn-animate-y-2"
        aria-hidden="true"
      >
        Ready To Elevate Your Campaign?
      </span>
    </span>
  </a>
</div>

  </div>
</section>


      {/* <section
        className={`page-section pb-0  scrollSpysection  ${
          dark ? "bg-dark-1 light-content" : ""
        } `}
        id="portfolio"
      >
        <div className="">
          <div className="row mb-30 mb-sm-50">
            <div className="col-md-8 offset-md-2 col-lg-6 offset-lg-3 text-center">
              <h2 className="section-title-medium mb-30 mb-sm-20">
                <span className="text-gray">Our</span> Portfolio
                <span className="text-gray">.</span>
              </h2>
              <div className="text-gray">
                Post production delivers creative solutions that redefine
                commercials, enhancing visuals and sound for maximum impact.
              </div>
            </div>
          </div>
        </div>
        <div className="">
          <Portfolio />
          <div
  className="local-scroll wch-unset wow fadeInUp animated d-flex justify-content-center align-items-center"
  data-wow-delay="0.6s"
  data-wow-duration="1.2s"
  style={{
    visibility: "visible",
    animationDuration: "1.2s",
    animationDelay: "0.6s",
    animationName: "fadeInUp",
    height: "100%", // Optional: Adjust to fill the height of the parent container
    paddingTop: "50px", // Add space before the button
  }}
>
  <a
    href="/imaginoo-portfolio" // Replace with your portfolio page path
    className="btn btn-mod btn-large btn-round ms-1 me-1 mt-2 align-middle"
    data-btn-animate="y"
    style={{
      backgroundColor: "#fd924a",
      height: "auto",
      textDecoration: "none",
    }}
  >
    <span className="btn-animate-y">
      <span
        style={{
          color: "black",
          fontWeight: "bold",
          fontSize: "15px",
        }}
        className="btn-animate-y-1"
      >
        View Portfolio
      </span>
      <span
        style={{
          color: "black",
          fontWeight: "bold",
          fontSize: "15px",
        }}
        className="btn-animate-y-2"
        aria-hidden="true"
      >
        View Portfolio
      </span>
    </span>
  </a>
</div>

        </div>
      </section> */}
      
      
      {/* <section
        className={`page-section scrollSpysection   ${
          dark ? "bg-dark-1 light-content" : ""
        } `}
        id="blog"
      >
        <Blog />
      </section> */}
      
      {/* <section
        className={`page-section  scrollSpysection  ${
          dark ? "bg-dark-1 light-content" : ""
        } `}
        id="contact"
      >
        <div className="container">
          <div className="row mb-70 mb-sm-50">
            <div className="col-md-8 offset-md-2 col-lg-6 offset-lg-3 text-center">
              <h2 className="section-title mb-30 mb-sm-20">
                <span className="text-gray">Connect with</span> Us
                <span className="text-gray">.</span>
              </h2>
              <div className="text-gray mb-sm-20">
                Ready to harness the power of AI for your next commercial
                photography or film project? Imaginoo is here to make your
                vision a reality. Experience firsthand how our blend of
                technology and creativity can elevate your brand story and
                captivate your audience.
              </div>
            </div>
          </div>
        </div>
        <Contact />
      </section> */}
    </>
  );
}
