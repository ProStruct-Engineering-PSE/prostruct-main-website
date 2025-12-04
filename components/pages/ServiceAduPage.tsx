"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import parse from "html-react-parser";
import ContactForm from "@/components/shared/ContactForm";
import { useModal } from "@/components/shared/ModalProvider";
import { AduPageContent } from "@/data/pages/services/aduPageContent";

const READY_BG_IMAGE = "/images/what-we-are-bg.jpg";

type ServiceAduPageProps = {
  data: AduPageContent;
};

export function ServiceAduPage({ data }: ServiceAduPageProps) {
  const { openModal } = useModal();
  const [showDetails, setShowDetails] = useState(false);
  const [aduActiveIndex, setAduActiveIndex] = useState<number | null>(0);

  return (
    <>
      {/* Hero */}
      <div className="banner_section">
        <div className="c-banner position-relative">
          <div className="c-banner-caption">
            <div className="container d-flex align-items-center">
              <div className="banner_caption_inner_page">
                <h1 className="d-sm-none">{parse(data.heroTitleHtml)}</h1>
              </div>
            </div>
          </div>
          <div className="c-banner-slider">
            <Image
              src={data.heroImage.src}
              alt={data.heroImage.alt}
              width={data.heroImage.width}
              height={data.heroImage.height}
              className="w-100 h-auto"
              priority
            />
          </div>
        </div>

        <section className="c-data-structure">
          <div className="container">
            <div className="about_data">
              <h1 className="d-sm-block d-none w-50">
                {parse(data.heroTitleHtml)}
              </h1>
              <div className="row">
                <div className="col-lg-6 about_data_cont text-white">
                  {parse(data.heroContentHtml)}
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Pyramid / Contact */}
      <section
        className="c-why-choose-sec w-100"
        style={{ paddingTop: "66px" }}
      >
        <Link
          href={data.permitLink}
          className="permit"
          aria-label="Permit guarantee"
        >
          <Image
            src="/images/badge.png"
            alt="Permit Guarantee Badge"
            width={150}
            height={150}
            style={{ height: "120px", width: "auto" }}
          />
        </Link>
        <div className="container">
          <div className="row align-items-center g-4">
            <div className="col-lg-6 c-content-area text-center text-lg-start">
              <Image
                src={data.pyramidImage.src}
                alt={data.pyramidImage.alt}
                width={data.pyramidImage.width}
                height={data.pyramidImage.height}
                className="img-fluid mb-4 mb-lg-3"
                priority={false}
              />
              <button onClick={openModal} className="btn get-free-quote-btn">
                Get Your Free Quote <i className="fa-solid fa-chevron-right" />
              </button>
            </div>
            <div className="col-lg-6">
              <div className="d-none d-lg-block">
                <ContactForm />
              </div>
              <div className="d-lg-none text-center">
                <button onClick={openModal} className="btn get-free-quote-btn">
                  Contact Us
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ADU Types */}
      <section className="adu_types">
        <div className="container">
          <div className="top_tontent text-center">
            {parse(data.aduTypesIntroHtml)}
          </div>
          <div className="popular_type_lists mt-4">
            <div className="row align-items-start g-4">
              <div className="col-lg-6">
                <div className="list_area">
                  <h4>{data.aduTypesHeading}</h4>
                  <div className="all_lists mt-3">
                    <div className="row">
                      {data.aduTypes.map((type, idx) => (
                        <div className="col-6" key={type.heading}>
                          <div
                            className={`each_list ${
                              aduActiveIndex === idx ? "active" : ""
                            }`}
                          >
                            <div
                              className="heading"
                              role="button"
                              tabIndex={0}
                              onClick={() =>
                                setAduActiveIndex(
                                  aduActiveIndex === idx ? null : idx
                                )
                              }
                              onKeyDown={(e) => {
                                if (e.key === "Enter" || e.key === " ") {
                                  setAduActiveIndex(
                                    aduActiveIndex === idx ? null : idx
                                  );
                                }
                              }}
                            >
                              {type.heading}
                            </div>
                            <div className="content">
                              {parse(type.contentHtml)}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="right_image text-center">
                  <Image
                    src={data.aduTypesImage.src}
                    alt={data.aduTypesImage.alt}
                    width={data.aduTypesImage.width}
                    height={data.aduTypesImage.height}
                    className="img-fluid"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="c-how-it-work-sec w-100">
        <div className="container">
          <h2>{data.stepsHeading}</h2>
          <div className="row position-relative px-0">
            {data.steps.map((step, index) => {
              const count = index + 1;
              let textAlign = "text-center";
              if (count === 1) textAlign = "text-center text-lg-start";
              else if (count === data.steps.length)
                textAlign = "text-center text-lg-end";

              return (
                <div key={step.detailsHtml} className={`col-lg-4 ${textAlign}`}>
                  <div className="c-single-work-process">
                    <figure>
                      <Image
                        src={step.image.src}
                        alt={step.image.alt}
                        width={step.image.width}
                        height={step.image.height}
                        className="img-fluid"
                      />
                      <span className="c-single-work-process__number">
                        {count}
                      </span>
                    </figure>
                    <h6>{parse(step.detailsHtml)}</h6>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="d-sm-none text-center">
            <h5>Start Your Project Today!</h5>
            <button onClick={openModal} className="btn c-get-quote-btn">
              GET IN TOUCH <i className="fa-solid fa-chevron-right" />
            </button>
          </div>
        </div>
      </section>

      {/* Ready to Get Started */}
      <section className="s-bttom-back-section">
        <div className="container">
          <div
            className="c-structure-service-sec__main-area"
            style={{ backgroundImage: `url(${READY_BG_IMAGE})` }}
          >
            <h2>{data.getStartedHeading}</h2>
            <p>{data.getStartedContent}</p>
            <button onClick={openModal} className="btn c-get-quote-btn">
              <strong>
                CONTACT US TODAY <i className="fa-solid fa-chevron-right" />
              </strong>
            </button>
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section className="s-what-we-do">
        <div className="container">
          <h2>{data.whatWeDoHeading}</h2>
          <p className="text-center s-what-sub-text">
            {data.whatWeDoSubheading}
          </p>
          <div className="s-what-we-wrap">
            <div className="row justify-content-center g-3">
              {data.whatWeDoItems.map((item) => (
                <div className="col-lg-4 col-sm-6" key={item.headingHtml}>
                  <div className="s-what-we-item text-center">
                    <h3>{parse(item.headingHtml)}</h3>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-4 text-center">
            <span
              className="structural_slidedown"
              aria-label="Show details"
              style={{ display: showDetails ? "none" : "inline-flex" }}
              role="button"
              tabIndex={0}
              onClick={() => setShowDetails(true)}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") setShowDetails(true);
              }}
            >
              <i className="fa-solid fa-angles-down" />
            </span>
          </div>

          <div className={`st_slide ${showDetails ? "is-open" : ""}`}>
            <div className="st_slide__content" style={{ display: "block" }}>
              {parse(data.whatWeDoDetailsHtml)}
            </div>
            <div className="text-center">
              <span
                className="structural_slidedup"
                aria-label="Hide details"
                style={{ display: showDetails ? "inline-flex" : "none" }}
                role="button"
                tabIndex={0}
                onClick={() => setShowDetails(false)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") setShowDetails(false);
                }}
              >
                <i className="fa-solid fa-angles-up" />
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Parallax */}
      <section
        className="c_paralax_img"
        style={{ backgroundImage: `url(${data.footerImage.src})` }}
      />
    </>
  );
}
