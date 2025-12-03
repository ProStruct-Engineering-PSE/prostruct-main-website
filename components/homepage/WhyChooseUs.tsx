"use client";

import { useState, useEffect } from "react";
import ContactForm from "@/components/shared/ContactForm";
import Link from "next/link";
import Image from "next/image";
import { useModal } from "@/components/shared/ModalProvider";

// Embedded data from WordPress
const HEADING = "Why Choose Us?";

const REASONS = [
  {
    heading: "Experienced",
    description: `<ul>
      <li>35+ Years</li>
      <li>3,000+ Projects</li>
      <li>New Home, ADU, Addition, Remodel, and More</li>
    </ul>`,
  },
  {
    heading: "Budget-friendly",
    description: `<ul>
      <li>Local Pricing</li>
      <li>Fixed & Transparent</li>
      <li>No Surprises</li>
    </ul>`,
  },
  {
    heading: "Licensed & Insured",
    description: `<ul>
      <li>PE License</li>
      <li>Insured</li>
    </ul>`,
  },
  {
    heading: "Responsive & Fast",
    description: `<ul>
      <li>Proactive & Responsive</li>
      <li>Quick Turnaround</li>
    </ul>`,
  },
  {
    heading: "Professionalism",
    description: `<ul>
      <li><strong>Our Core Values:</strong> Integrity, Responsibility, Reliability, Ethics, And Maintaining The Highest Quality Standards For Structural Plans</li>
      <li>Adhering To These Standards Has Helped Us Build Trust And Credibility With Our Clients</li>
    </ul>`,
  },
];

const PERMIT_GUARANTEE_LINK = "/permit-guarantee";

export function WhyChooseUs() {
  const [isMobile, setIsMobile] = useState(false);
  const { openModal } = useModal();

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <section className="c-why-choose-sec w-100">
      {/* Permit Guarantee Badge - Positioned absolutely */}
      <Link href={PERMIT_GUARANTEE_LINK} className="permit">
        <img
          src="/images/badge.png"
          className="img-fluid"
          style={{ height: "120px !important" }}
          alt="Permit Guarantee Badge"
        />
      </Link>

      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6 c-content-area">
            <h2>{HEADING}</h2>
            <div className="row">
              {REASONS.map((reason, index) => (
                <div key={index} className="col-lg-6 mb-2">
                  <h5>{reason.heading}</h5>
                  <div
                    dangerouslySetInnerHTML={{ __html: reason.description }}
                  />
                </div>
              ))}
            </div>
          </div>

          <div className="col-lg-6">
            {isMobile && (
              <button onClick={openModal} className="btn get-free-quote-btn">
                Get Your Free Quote{" "}
                <i className="fa-solid fa-chevron-right"></i>
              </button>
            )}
            {!isMobile && <ContactForm />}
          </div>
        </div>
      </div>
    </section>
  );
}
