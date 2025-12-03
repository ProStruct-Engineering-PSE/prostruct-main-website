"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const BANNER_SLIDES = [
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

const DESKTOP_CONTENT = (
  <>
    <h1>
      Our Experienced Structural & Civil Engineers for your{" "}
      <strong>Residential & Commercial</strong> Project Needs
    </h1>
    <span className="mbl-hide">
      At ProStruct Engineering we take pride in professionalism.
    </span>
    <p>
      Our motivation is to improve Homeowners&apos; home-building experience by
      delivering high-quality Structural & Civil Engineering Plans for permit
      approval smoothly.
    </p>
    <p>
      We have a 100% success rate<sup>(1)</sup> in obtaining Residential &
      Commercial Building Permits.
    </p>
    <p>We’re experienced, reliable, and budget-friendly.</p>
  </>
);

const MOBILE_CONTENT = (
  <h1>
    Our Experienced <strong>Structural & Civil Engineers</strong> for your{" "}
    <strong>Residential & Commercial</strong> Project Needs
  </h1>
);

const MOBILE_BOTTOM_CONTENT = (
  <>
    <p>
      Our motivation is to improve Homeowners&apos; home-building experience by
      delivering high-quality Structural Engineering Plans for permit approval
      smoothly.
    </p>
    <p>
      We have a 100% success rate<sup>(1)</sup> in obtaining Residential &
      Commercial Building Permits.
    </p>
    <p>We’re experienced, reliable, and budget-friendly.</p>
  </>
);

export function Banner() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <div className="c-banner position-relative">
      <div className="c-banner-caption">
        <div className="container d-flex align-items-center">
          <div className="c-banner-caption__inner">
            {isMobile ? MOBILE_CONTENT : DESKTOP_CONTENT}
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
        {BANNER_SLIDES.map((slide, index) => (
          <SwiperSlide key={slide.url}>
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

      {isMobile && (
        <div className="c-banner-caption">
          <div className="container d-flex align-items-center">
            <div className="c-banner-caption__inner">
              {MOBILE_BOTTOM_CONTENT}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
