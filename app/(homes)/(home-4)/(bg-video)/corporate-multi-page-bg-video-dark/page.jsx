import Footer4 from "@/components/footers/Footer4";
import Header4 from "@/components/headers/Header4";
import Home4 from "@/components/homes/home-4";
import Hero1Dark from "@/components/homes/home-4/heros/Hero1Dark";
import Hero3 from "@/components/homes/home-4/heros/Hero3";
import { corporateMultipageDark } from "@/data/menu";

export const metadata = {
  title:
    "Home 4 BG Video MultiPage Dark || Resonance &mdash; One & Multi Page React Nextjs Creative Template",
  description:
    "Resonance &mdash; One & Multi Page React Nextjs Creative Template",
};
export default function Home4BGVideoMultiPageDark() {
  return (
    <>
      <div className="theme-corporate">
        <div className="dark-mode">
          <div className="page bg-dark-1" id="top">
            <nav className="main-nav dark transparent light-after-scroll stick-fixed wow-menubar wch-unset">
              <Header4 links={corporateMultipageDark} />
            </nav>

            <main id="main">
              <section
                className="home-section light-content scrollSpysection"
                id="home"
              >
                <Hero3 />
              </section>

              <Home4 dark />
            </main>
            <footer className="footer-2 bg-dark-1 light-content pb-50">
              <Footer4 />
            </footer>
          </div>{" "}
        </div>{" "}
      </div>
    </>
  );
}
