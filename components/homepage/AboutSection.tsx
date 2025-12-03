"use client";

import { useState, useEffect } from "react";

// Embedded data from WordPress
const HEADING = "Our Engineering Services";

const BACKGROUND_IMAGE = "/images/service-bg.png";

const CONTENT_DESKTOP = [
  <>
    ProStruct Engineering&apos;s experienced team of{" "}
    <strong>Professional Structural &amp; Civil Engineers</strong> provides{" "}
    <strong>high-quality engineering</strong> plans that comply with building
    permit requirements for residential &amp; commercial projects.
  </>,
  <>
    Our goal is to offer <strong>budget-friendly</strong> services and act as a
    dependable ally throughout the process.
  </>,
  <>
    Our services include{" "}
    <strong>
      Structural and Civil Site Inspections, Structural and Civil Calculations
    </strong>
    , creating <strong>Structural and Civil Plans</strong> and preparing{" "}
    <strong>Structural and Civil Engineering Plans.</strong>
  </>,
];

const CONTENT_MOBILE = [
  <>
    Our services include{" "}
    <strong>
      Structural and Civil Site Inspections, Structural and Civil Calculations
    </strong>
    , creating <strong>Structural and Civil Plans</strong> and preparing{" "}
    <strong>Structural and Civil Engineering Plans.</strong>
  </>,
  <>
    Our goal is to offer <strong>budget-friendly</strong> services and act as a
    dependable ally throughout the process.
  </>,
];

export function AboutSection() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <section className="c-structure-service-sec w-100">
      <div className="container">
        <div
          className="c-structure-service-sec__main-area"
          style={{ backgroundImage: `url('${BACKGROUND_IMAGE}')` }}
        >
          <h2>{HEADING}</h2>

          {/* Desktop Version */}
          {!isMobile && (
            <div className="c-structure-service-desktop">
              {CONTENT_DESKTOP.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
          )}

          {/* Mobile Version */}
          {isMobile && (
            <div className="c-structure-service-mobile">
              {CONTENT_MOBILE.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
