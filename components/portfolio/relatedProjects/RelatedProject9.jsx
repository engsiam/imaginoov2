import { portfolios4 } from "@/data/portfolio";
import Image from "next/image";
import Link from "next/link";

export default function RelatedProject9() {
  // Get a random index from portfolios4
  const randomIndex = Math.floor(Math.random() * portfolios4.length);
  const randomProject = portfolios4[randomIndex]; // Get the random project

  return (
    <div className="container">
      <h2 className="section-title-medium font-alt text-outline-cont mt-20 mb-50 mb-md-30">
        <span className="text-outline">Next Project</span>
      </h2>
      {/* Portfolio Item */}
      <div
        key={randomProject.id}
        className={`portfolio-2-item mb-100 mb-sm-50 mix ${
          Array.isArray(randomProject.categories)
            ? randomProject.categories.join(" ")
            : ""
        }`}
      >
        <div className="row">
          {/* Check if it's an even or odd index to alternate layout */}
          {randomIndex % 2 === 0 ? (
            <>
              <div className="col-md-8 mb-sm-30 order-md-first">
                <div className="portfolio-2-image">
                  <Link href={`/bold-portfolio-single/${randomProject.id}`}>
                    <Image
                      width={1200}
                      height={500}
                      src={randomProject.imageSrc}
                      alt="Image Description"
                      style={{ backgroundSize: "cover", backgroundPosition: "center" }}
                    />
                  </Link>
                </div>
              </div>
              <div className="col-md-4">
                <hr className="black thick mt-0 mb-20 d-none d-md-block" />
                <h3 className="portfolio-2-title font-alt mb-20">
                  <Link href={`/bold-portfolio-single/${randomProject.id}`}>{randomProject.heading}</Link>
                </h3>
                <p className="portfolio-2-descr">{randomProject.description}</p>
                <div>
                  <Link
                    href={`/bold-portfolio-single/${randomProject.id}`}
                    className="link-hover-anim underline align-middle"
                    data-link-animate="y"
                  >
                    <span className="link-strong link-strong-unhovered">
                      View Project
                    </span>
                    <span
                      className="link-strong link-strong-hovered"
                      aria-hidden="true"
                    >
                      View Project
                    </span>
                  </Link>
                </div>
              </div>
            </>
          ) : (
            <>
              <div className="col-md-4">
                <hr className="black thick mt-0 mb-20 d-none d-md-block" />
                <h3 className="portfolio-2-title font-alt mb-20">
                  <Link href={`/bold-portfolio-single/${randomProject.id}`}>{randomProject.heading}</Link>
                </h3>
                <p className="portfolio-2-descr">{randomProject.description}</p>
                <div>
                  <Link
                    href={`/bold-portfolio-single/${randomProject.id}`}
                    className="link-hover-anim underline align-middle"
                    data-link-animate="y"
                  >
                    <span className="link-strong link-strong-unhovered">
                      View Project
                    </span>
                    <span
                      className="link-strong link-strong-hovered"
                      aria-hidden="true"
                    >
                      View Project
                    </span>
                  </Link>
                </div>
              </div>
              <div
                className={`col-md-8 mb-sm-30 ${
                  randomIndex % 2 ? "order-first order-md-last" : ""
                }`}
              >
                <div className="portfolio-2-image">
                  <Link href={`/bold-portfolio-single/${randomProject.id}`}>
                    <Image
                      width={1200}
                      height={500}
                      src={randomProject.imageSrc}
                      alt="Image Description"
                      style={{
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                      }}
                    />
                  </Link>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
      {/* End Portfolio Item */}
    </div>
  );
}
