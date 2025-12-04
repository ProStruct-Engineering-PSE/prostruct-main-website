"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import { useModal } from "@/components/shared/ModalProvider";
import ContactForm from "@/components/shared/ContactForm";
import parse from "html-react-parser";
import { StateLandingContent } from "./stateLandingData";

import "swiper/css";
import "swiper/css/pagination";

const HERO_SLIDES = [
  {
    url: "/images/Banner1-1.jpg",
    alt: "Three generations enjoying lunch together on an open outdoor patio.",
    width: 1440,
    height: 600,
  },
  {
    url: "/images/Banner2-1.jpg",
    alt: "A happy young couple enjoying cooking and playing with vegetables in a well-designed kitchen.",
    width: 1440,
    height: 600,
  },
  {
    url: "/images/Banner3.jpg",
    alt: "Proud happy parents of two kids relaxing on the couch in an open-concept living area.",
    width: 1440,
    height: 600,
  },
  {
    url: "/images/Group-1.png",
    alt: "A commercial retail store building",
    width: 1440,
    height: 600,
  },
];

const PROJECT_IMAGES = [
  {
    url: "/images/Project_Types_2.jpg",
    alt: "Olive green-colored single-story backyard ADU with grey roof and reddish-brown doors and windows.",
    width: 624,
    height: 636,
  },
  {
    url: "/images/Project_Types_1.jpg",
    alt: "Grey and white colored new custom home exterior with a front lawn and garage, and a clear blue sky above.",
    width: 624,
    height: 636,
  },
  {
    url: "/images/AdobeStock_507941848-1.png",
    alt: "Wood framing of a new custom house under construction.",
    width: 624,
    height: 636,
  },
];

const STEP_IMAGES = [
  {
    url: "/images/How_It_Works_1.jpg",
    alt: "Illustrative sketch of architectural plans of a house which acts as an input for structural calculations and drawings.",
    width: 305,
    height: 224,
  },
  {
    url: "/images/How_It_Works_2.jpg",
    alt: "Blue circular button: Get a Free Structural Engineering Quote from ProStruct Engineering.",
    width: 305,
    height: 224,
  },
  {
    url: "/images/How_It_Works_3.jpg",
    alt: "A blue-colored forward-leaning clock which implies a quick turnaround time for our projects.",
    width: 305,
    height: 224,
  },
];

const INFO_IMAGE = {
  url: "/images/triangle.png",
  alt: "ProStruct Features: Low Cost, High Speed, High Quality",
  width: 1493,
  height: 813,
};

const PERMIT_BADGE = {
  url: "/images/badge.png",
  alt: "Permit Guarantee Badge",
  width: 150,
  height: 150,
};

const PROJECT_ICON = {
  url: "/images/icon.svg",
  alt: "List icon",
  width: 16,
  height: 16,
};

const SECTION_BACKGROUND = "/images/service-bg.png";

const FOOTER_TOP_IMAGE = {
  url: "/images/Footer.jpg",
  alt: "Typical California home exterior",
  width: 1440,
  height: 545,
};

interface StateLandingPageProps {
  content: StateLandingContent;
}

export function StateLandingPage({ content }: StateLandingPageProps) {
  const { openModal } = useModal();
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const heroSlides = HERO_SLIDES;
  const projectImages = PROJECT_IMAGES;

  return (
    <>
      <section className="c-banner position-relative">
        <div className="c-banner-caption">
          <div className="container d-flex align-items-center">
            <div className="c-banner-caption__inner">
              {parse(
                isMobile ? content.hero.mobileHtml : content.hero.desktopHtml
              )}
            </div>
          </div>
        </div>

        <Swiper
          modules={[Pagination, Autoplay]}
          pagination={{ clickable: true }}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          speed={2000}
          className="c-banner-slider"
        >
          {heroSlides.map((slide, index) => (
            <SwiperSlide key={`${slide.url}-${index}`}>
              <Image
                src={slide.url}
                alt={slide.alt}
                width={slide.width}
                height={slide.height}
                priority={index === 0}
                loading={index === 0 ? "eager" : "lazy"}
                style={{ width: "100%", height: "auto" }}
              />
            </SwiperSlide>
          ))}
        </Swiper>

        {isMobile && content.hero.mobileBottomHtml && (
          <div className="c-banner-caption">
            <div className="container d-flex align-items-center">
              <div className="c-banner-caption__inner">
                {parse(content.hero.mobileBottomHtml)}
              </div>
            </div>
          </div>
        )}
      </section>

      {content.tagLine && (
        <section className="c-data-structure">
          <div className="container">
            <h3>{content.tagLine}</h3>
            <div className="row">
              <div className="col-lg-6">
                <div className="row align-items-start g-0">
                  <div className="col-md-5 offset-md-7 col-lg-7 offset-lg-5">
                    <Image
                      src={INFO_IMAGE.url}
                      alt={INFO_IMAGE.alt}
                      width={INFO_IMAGE.width}
                      height={INFO_IMAGE.height}
                      priority={false}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      <section className="c-why-choose-sec w-100">
        {content.permitBadgeLink && (
          <Link href={content.permitBadgeLink} className="permit">
            <Image
              src={PERMIT_BADGE.url}
              alt={PERMIT_BADGE.alt}
              width={PERMIT_BADGE.width}
              height={PERMIT_BADGE.height}
              priority={false}
            />
          </Link>
        )}
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 c-content-area">
              <h2>{content.whyChooseHeading}</h2>
              <div className="row">
                {content.reasons.map((reason) => (
                  <div className="col-lg-6 mb-2" key={reason.heading}>
                    <h5>{reason.heading}</h5>
                    <div>{parse(reason.descriptionHtml)}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="col-lg-6">
              <div className="d-none d-lg-block">
                <ContactForm />
              </div>
              <div className="d-lg-none text-center">
                <button
                  type="button"
                  onClick={openModal}
                  className="btn get-free-quote-btn"
                >
                  Get Your Free Quote{" "}
                  <i className="fa-solid fa-chevron-right" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="c-structure-service-sec w-100">
        <div className="container">
          <div
            className="c-structure-service-sec__main-area"
            style={{ backgroundImage: `url('${SECTION_BACKGROUND}')` }}
          >
            <h2>{content.aboutHeading}</h2>
            <div className="c-structure-service-desktop">
              <div className="text-white">
                {parse(content.aboutDesktopHtml)}
              </div>
            </div>
            <div className="c-structure-service-mobile">
              <div className="text-white">{parse(content.aboutMobileHtml)}</div>
            </div>
          </div>
        </div>
      </section>

      <section
        className="c-project-type-sec w-100"
        style={{ backgroundImage: "url('/images/project-bg.svg')" }}
      >
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 mb-4 mb-lg-0">
              <Swiper
                modules={[Pagination, Autoplay]}
                pagination={{ clickable: true }}
                autoplay={{ delay: 5000, disableOnInteraction: false }}
                speed={2000}
                className="c-banner-slider"
              >
                {projectImages.map((image, index) => (
                  <SwiperSlide key={`${image.url}-${index}`}>
                    <Image
                      src={image.url}
                      alt={image.alt}
                      width={image.width}
                      height={image.height}
                      priority={index === 0}
                      loading={index === 0 ? "eager" : "lazy"}
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
            <div className="col-lg-6">
              <h2>{content.projectTypes.heading}</h2>
              <div className="mb-3">
                {parse(content.projectTypes.introHtml)}
              </div>
              <div className="row">
                {content.projectTypes.columns.map((column, columnIndex) => (
                  <div className="col-md-6" key={`column-${columnIndex}`}>
                    <ul>
                      {column.map((item) => (
                        <li key={item}>
                          <Image
                            src={PROJECT_ICON.url}
                            alt={PROJECT_ICON.alt}
                            width={PROJECT_ICON.width}
                            height={PROJECT_ICON.height}
                            className="me-2"
                          />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
              <button
                type="button"
                onClick={openModal}
                className="btn c-get-quote-btn mt-3"
              >
                GET YOUR FREE QUOTE <i className="fa-solid fa-chevron-right" />
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="c-how-it-work-sec w-100">
        <div className="container">
          <h2>{content.howItWorksHeading}</h2>
          <div className="row position-relative px-0">
            {content.stepsDetails.map((detailsHtml, index) => {
              const stepImage = STEP_IMAGES[index % STEP_IMAGES.length];
              const alignmentClass =
                index === 0
                  ? "text-lg-start"
                  : index === 2
                  ? "text-lg-end"
                  : "";

              return (
                <div
                  className={`col-lg-4 text-center ${alignmentClass}`}
                  key={`step-${index}`}
                >
                  <div className="c-single-work-process">
                    <figure>
                      <Image
                        src={stepImage.url}
                        alt={stepImage.alt}
                        width={stepImage.width}
                        height={stepImage.height}
                      />
                      <span className="c-single-work-process__number">
                        {index + 1}
                      </span>
                    </figure>
                    <h6>{parse(detailsHtml)}</h6>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="d-sm-none text-center">
            <h5>Start Your Project Today!</h5>
            <button
              type="button"
              onClick={openModal}
              className="btn c-get-quote-btn"
            >
              GET IN TOUCH <i className="fa-solid fa-chevron-right" />
            </button>
          </div>
        </div>
      </section>

      <section
        className="c_paralax_img"
        style={{
          backgroundImage: `url('${FOOTER_TOP_IMAGE.url}')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
          minHeight: "300px",
        }}
      />
    </>
  );
}
