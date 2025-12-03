"use client";

import { useState, useEffect, ReactNode } from "react";
import ContactForm from "@/components/shared/ContactForm";
import Link from "next/link";
import Image from "next/image";
import { useModal } from "@/components/shared/ModalProvider";

const HEADING = "Why Choose Us?";

const REASONS: Array<{ heading: string; points: ReactNode[] }> = [
  {
    heading: "Experienced",
    points: [
      "35+ Years",
      "3,000+ Projects",
      "New Home, ADU, Addition, Remodel, and More",
    ],
  },
  {
    heading: "Budget-friendly",
    points: ["Local Pricing", "Fixed & Transparent", "No Surprises"],
  },
  {
    heading: "Licensed & Insured",
    points: ["PE License", "Insured"],
  },
  {
    heading: "Responsive & Fast",
    points: ["Proactive & Responsive", "Quick Turnaround"],
  },
  {
    heading: "Professionalism",
    points: [
      <>
        <strong>Our Core Values:</strong> Integrity, Responsibility,
        Reliability, Ethics, And Maintaining The Highest Quality Standards For
        Structural Plans
      </>,
      "Adhering To These Standards Has Helped Us Build Trust And Credibility With Our Clients",
    ],
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
      <Link href={PERMIT_GUARANTEE_LINK} className="permit">
        <Image
          src="/images/badge.png"
          alt="Permit Guarantee Badge"
          width={150}
          height={150}
          style={{ height: "120px", width: "auto" }}
        />
      </Link>

      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6 c-content-area">
            <h2>{HEADING}</h2>
            <div className="row">
              {REASONS.map((reason) => (
                <div key={reason.heading} className="col-lg-6 mb-2">
                  <h5>{reason.heading}</h5>
                  <ul>
                    {reason.points.map((point, index) => (
                      <li key={index}>{point}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          <div className="col-lg-6">
            {isMobile ? (
              <button onClick={openModal} className="btn get-free-quote-btn">
                Get Your Free Quote <i className="fa-solid fa-chevron-right" />
              </button>
            ) : (
              <ContactForm />
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
