import Hero from "@/components/preview/Hero";
import dynamic from "next/dynamic";

const ParallaxContainer = dynamic(
  () => import("@/components/common/ParallaxContainer"),
  {
    ssr: false, // Disable server-side rendering
  }
);
import Showcase from "@/components/preview/Showcase";
import Multipage from "@/components/preview/Multipage";
import Onepage from "@/components/preview/Onepage";
import Intro from "@/components/preview/Intro";
import Testomonials from "@/components/preview/Testomonials";
import FooterPreview from "@/components/footers/FooterPreview";
import HeaderPreview from "@/components/headers/HeaderPreview";
import Home5 from "@/components/homes/home-5";
import Home5BGVideoOnepage from "./(homes)/(home-5)/(bg-video)/elegant-one-page-bg-video/page";
import Home5BGVideoOnepageDark from "./(homes)/(home-5)/(bg-video)/elegant-one-page-bg-video-dark/page";

export const metadata = {
  title:
    "Imaginoo - AI videos creation",
  description:
    "",
};

export default function Home() {
  return (
    <>
      <div className="theme-main">
        <div className="page" id="top">
          {/* Navigation Panel */}
          
          {/* End Navigation Panel */}
          <main id="main">
            {/* Home Section */}
            <Home5BGVideoOnepageDark/>
          </main>
          {/* Footer */}
          {/* <footer className="page-section footer bg-gray-light-1 pb-30">
            <FooterPreview />
          </footer> */}
          {/* End Footer */}
        </div>
      </div>
    </>
  );
}
