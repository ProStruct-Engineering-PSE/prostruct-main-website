"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import { useModal } from "@/components/shared/ModalProvider";
import "swiper/css";
import "swiper/css/pagination";

// Embedded data from WordPress
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

const SECTION_CONTENT = `<h2>Project Types</h2>
Our Structural & Civil Engineers' expertise in providing Engineering Services extends to a variety of Residential & Commercial Project Types, including:
<div class="row">
<div class="col-md-6">
<ul>
\t<li><img src="/images/icon.svg" name="icon" /> New Custom Home</li>
\t<li><img src="/images/icon.svg" name="icon" />ADU</li>
\t<li><img src="/images/icon.svg" name="icon" />Home Addition/Remodel</li>
\t<li><img src="/images/icon.svg" name="icon" />Load Bearing Wall Removal</li>
\t<li><img src="/images/icon.svg" name="icon" />Commercial Projects</li>
</ul>
</div>
<div class="col-md-6">
<ul>
\t<li><img src="/images/icon.svg" name="icon" />Retaining Wall</li>
\t<li><img src="/images/icon.svg" name="icon" />Deck, Patio & Porch</li>
\t<li><img src="/images/icon.svg" name="icon" />Foundation Design & More</li>
\t<li><img src="/images/icon.svg" name="icon" />Construction Administration</li>
\t<li><img src="/images/icon.svg" name="icon" />Civil Engineering</li>
</ul>
</div>
</div>`;

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
                <SwiperSlide key={index}>
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
            <div dangerouslySetInnerHTML={{ __html: SECTION_CONTENT }} />
            <button onClick={openModal} className="btn c-get-quote-btn mt-3">
              GET YOUR FREE QUOTE <i className="fa-solid fa-chevron-right"></i>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
