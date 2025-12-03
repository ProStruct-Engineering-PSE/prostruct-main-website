"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import { useModal } from "@/components/shared/ModalProvider";
import "swiper/css";
import "swiper/css/pagination";

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
    alt: "Wood framing of a new custom house under construction in California",
    width: 624,
    height: 636,
  },
];

const INTRO_TEXT =
  "Our Structural & Civil Engineers' expertise in providing Engineering Services extends to a variety of Residential & Commercial Project Types, including:";

const PROJECT_COLUMNS = [
  [
    "New Custom Home",
    "ADU",
    "Home Addition/Remodel",
    "Load Bearing Wall Removal",
    "Commercial Projects",
  ],
  [
    "Retaining Wall",
    "Deck, Patio & Porch",
    "Foundation Design & More",
    "Construction Administration",
    "Civil Engineering",
  ],
];

export function ProjectTypes() {
  const { openModal } = useModal();

  return (
    <section
      className="c-project-type-sec w-100"
      style={{
        backgroundImage: "url('/images/project-bg.svg')",
      }}
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
              {PROJECT_IMAGES.map((image, index) => (
                <SwiperSlide key={image.url}>
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
            <h2>Project Types</h2>
            <p>{INTRO_TEXT}</p>
            <div className="row">
              {PROJECT_COLUMNS.map((column, columnIndex) => (
                <div className="col-md-6" key={columnIndex}>
                  <ul>
                    {column.map((item) => (
                      <li key={item}>
                        <Image
                          src="/images/icon.svg"
                          alt="Project type item icon"
                          width={16}
                          height={16}
                          className="me-2"
                        />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            <button onClick={openModal} className="btn c-get-quote-btn mt-3">
              GET YOUR FREE QUOTE <i className="fa-solid fa-chevron-right"></i>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
