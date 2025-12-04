import parse from "html-react-parser";
import aboutPageData from "@/data/pages/about-us.json";
import { HowItWorks } from "@/components/homepage/HowItWorks";

const HERO_IMAGE = "/images/about_banner_new.png";
const MOTIVATION_IMAGE = "/images/our_motivition_new-1.png";
const WHY_CHOOSE_IMAGE = "/images/cost_img.png";

const MOTIVATION_HTML = `<h2>Our Motivation</h2>
<p>At ProStruct Engineering, our structural engineers are motivated by the desire to <span>make the home-building experience of homeowners as stress-free as possible</span>. We understand the process can be overwhelming, and our goal is to be a dependable ally that delivers high-quality Structural Engineering Plans that comply with building permit requirements, <span>ensuring a smooth process for our clients.</span></p>
<p>We are <span>committed to being cost-effective</span>, so you don't have to worry about any unexpected expenses.</p>`;

export function AboutPageContent() {
  const { acf } = aboutPageData;

  return (
    <div className="about_container">
      <div className="banner_section">
        <div className="c-banner position-relative">
          <div className="c-banner-caption">
            <div className="container d-flex align-items-center">
              <div className="banner_caption_inner_page">
                <h1>About Us</h1>
              </div>
            </div>
          </div>

          <div className="c-banner-slider">
            <img src={HERO_IMAGE} alt="About ProStruct Engineering" />
          </div>
        </div>

        <section className="c-data-structure">
          <div className="container">
            <div className="about_data">
              <h4>About Us</h4>
              {acf.banner_content && (
                <div className="row">
                  <div className="col-lg-6 about_data_cont">
                    {parse(acf.banner_content)}
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>
      </div>

      <div className="our_motivation_section">
        <div className="container">
          <div className="row">
            <div className="col-md-6 our_motivation_cont_area">
              <div className="our_motivation_cont">
                {parse(MOTIVATION_HTML)}
              </div>
            </div>

            <div className="col-md-6">
              <div className="our_motivation_img">
                <img
                  src={MOTIVATION_IMAGE}
                  alt="Structural engineer reviewing plans"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="our_core_values_section">
        <section className="c-structure-service-sec w-100">
          <div className="container">
            <div className="c-structure-service-sec__main-area">
              <h2>{acf.core_values_heading}</h2>

              <div className="c-structure-service-desktop">
                {parse(acf.core_values_content_desktop)}
              </div>

              <div className="c-structure-service-mobile">
                {parse(acf.core_values_content_mobile)}
              </div>
            </div>
          </div>
        </section>

        <section className="c-project-type-sec w-100">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-6 mb-4 mb-lg-0">
                <img src={WHY_CHOOSE_IMAGE} alt="Why choose ProStruct" />
              </div>
              <div className="col-lg-6 why_choose_us_section">
                {parse(acf.why_choose_us_content)}
              </div>
            </div>
          </div>
        </section>
      </div>

      <HowItWorks />
    </div>
  );
}
