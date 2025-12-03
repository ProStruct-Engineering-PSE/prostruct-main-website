"use client";

import Image from "next/image";
import { useModal } from "@/components/shared/ModalProvider";

// Embedded data from WordPress
const HEADING = "How It Works: Its Fast, Easy & Convenient.";

const STEPS = [
  {
    image: {
      url: "/images/How_It_Works_1.jpg",
      alt: "Illustrative sketch of architectural plans of a house which acts as an input for structural calculations and drawings.",
      width: 305,
      height: 224,
    },
    details:
      "Share Your <span>Requirements</span>, Including Existing Plans/ Designs if Available",
  },
  {
    image: {
      url: "/images/How_It_Works_2.jpg",
      alt: "Blue circular button: Get a Free Structural Engineering Quote from ProStruct Engineering.",
      width: 305,
      height: 224,
    },
    details:
      "Get a <span>No-obligation</span>,<br/>Free Express Quote<br/>Within 24 Hours",
  },
  {
    image: {
      url: "/images/How_It_Works_3.jpg",
      alt: "A blue-colored forward-leaning clock which implies a quick turnaround time for our projects.",
      width: 305,
      height: 224,
    },
    details:
      "We Start Your Project, With <br/><span>Quick Delivery</span> in 2-3 Weeks for Most Projects",
  },
];

export function HowItWorks() {
  const { openModal } = useModal();

  return (
    <section className="c-how-it-work-sec w-100">
      <div className="container">
        <h2>{HEADING}</h2>
        <div className="row position-relative px-0">
          {STEPS.map((step, index) => {
            const count = index + 1;
            let textAlign = "text-center";
            if (count === 1) textAlign = "text-center text-lg-start";
            else if (count === 3) textAlign = "text-center text-lg-end";

            return (
              <div key={index} className={`col-lg-4 ${textAlign}`}>
                <div className="c-single-work-process">
                  <figure>
                    <Image
                      src={step.image.url}
                      alt={step.image.alt}
                      width={step.image.width}
                      height={step.image.height}
                    />
                    <span className="c-single-work-process__number">
                      {count}
                    </span>
                  </figure>
                  <h6 dangerouslySetInnerHTML={{ __html: step.details }} />
                </div>
              </div>
            );
          })}
        </div>

        {/* Mobile CTA */}
        <div className="d-sm-none text-center">
          <h5>Start Your Project Today!</h5>
          <button onClick={openModal} className="btn c-get-quote-btn">
            GET IN TOUCH <i className="fa-solid fa-chevron-right"></i>
          </button>
        </div>
      </div>
    </section>
  );
}
