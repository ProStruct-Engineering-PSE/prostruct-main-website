import Image from "next/image";
import Link from "next/link";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { StickyHeaderScript } from "@/components/layout/StickyHeader";

const NOT_FOUND_IMAGE = {
  src: "/images/not-found.jpg",
  alt: "ProStruct Engineering page not found illustration",
  width: 1440,
  height: 600,
};

export default function NotFound() {
  return (
    <>
      <StickyHeaderScript />
      <Header />

      <section className="c-banner position-relative">
        <div className="swiper c-banner-slider">
          <div className="swiper-wrapper">
            <div className="swiper-slide">
              <Image
                src={NOT_FOUND_IMAGE.src}
                alt={NOT_FOUND_IMAGE.alt}
                width={NOT_FOUND_IMAGE.width}
                height={NOT_FOUND_IMAGE.height}
                className="w-100 h-auto"
                priority
              />
            </div>
          </div>
          <div className="swiper-pagination" aria-hidden="true" />
        </div>

        <div className="c-banner-caption">
          <div className="container d-flex align-items-center">
            <div className="c-banner-caption__inner" style={{ maxWidth: 540 }}>
              <h1 style={{ color: "#000000" }}>Error 404 - Not Found</h1>
              <p style={{ color: "#000000" }}>
                We&apos;re sorry, but the page you&apos;re looking for
                can&apos;t be found
              </p>
              <p>
                <Link href="/" className="btn c-get-quote-btn">
                  Back To Home <i className="fa-solid fa-chevron-right" />
                </Link>
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
