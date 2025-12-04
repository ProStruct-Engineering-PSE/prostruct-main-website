"use client";

import { useModal } from "@/components/shared/ModalProvider";

const HERO_DESCRIPTION =
  "At ProStruct Engineering, we believe the permitting process should be predictable—not stressful. That’s why we back every set of engineering plans with our Permit Guarantee: a commitment that we will stand by your project until your permit is approved.";

const COVERAGE_ITEMS = [
  {
    icon: "fas fa-file-alt text-primary",
    text: "Your plans will be prepared to comply with current codes and jurisdiction requirements, based on the information you provide.",
  },
  {
    icon: "fas fa-redo-alt text-success",
    text: "If your project receives plan check comments related to our engineering scope, we’ll revise and resubmit at no extra charge—no matter how many rounds it takes.",
  },
  {
    icon: "fas fa-comments text-info",
    text: "We’ll communicate with plan reviewers as needed to clarify or resolve comments, so you’re never left navigating bureaucracy alone.",
  },
  {
    icon: "fas fa-check-circle text-warning",
    text: "This approach has enabled us to secure approvals for hundreds of residential and commercial projects across multiple states.",
  },
];

const EXCLUSIONS = [
  {
    icon: "fas fa-file-upload text-danger",
    text: "Delays or denials resulting from missing information (e.g., surveys, architectural plans) not provided by the client.",
  },
  {
    icon: "fas fa-project-diagram text-warning",
    text: "Plan check comments about items outside our scope (e.g., architectural, MEP, zoning).",
  },
  {
    icon: "fas fa-drafting-compass text-secondary",
    text: "Major design changes requested after initial delivery.",
  },
  {
    icon: "fas fa-university text-primary",
    text: "Delays from city departments beyond our control.",
  },
  {
    icon: "fas fa-user-shield text-danger",
    text: "Misuse or unauthorized alterations of our plans.",
  },
  {
    icon: "fas fa-file-contract text-success",
    text: "A clear scope and responsibility matrix will be included in your service agreement.",
  },
];

const HOW_STEPS = [
  {
    title: "Submit Your Project",
    description: "Send us your plans and project details.",
  },
  {
    title: "Share Project Assets",
    description:
      "Provide surveys, architectural drawings, and jurisdiction notes.",
  },
  {
    title: "Receive Permit-Ready Drawings",
    description:
      "We prepare compliant engineering plans for your jurisdiction.",
  },
  {
    title: "City Submittal",
    description:
      "Plans are submitted for review. We stay engaged throughout the process.",
  },
  {
    title: "Plan Check Support",
    description:
      "If comments arise within our scope, we revise and resubmit promptly—at no extra cost.",
  },
  {
    title: "Final Approval",
    description:
      "We continue collaborating with you and the city until your permit is granted.",
  },
];

export function PermitGuaranteePage() {
  const { openModal } = useModal();

  return (
    <>
      <section className="py-5 bg-light">
        <div className="container">
          <div className="text-center mb-5">
            <h1 className="display-5 fw-bold">Permit Guarantee</h1>
            <p className="text-muted mx-auto" style={{ maxWidth: 800 }}>
              {HERO_DESCRIPTION}
            </p>
          </div>

          <div className="row g-4 mb-5 align-items-center">
            <div className="col-lg-6">
              <h3 className="fw-bold mb-3">What Our Permit Guarantee Means</h3>
              <p>
                When you work with us, you get more than stamped drawings—you
                get a dedicated partner through the entire review process.
              </p>
              <h4 className="fw-bold mb-4">We guarantee that</h4>

              <div className="row g-3">
                {COVERAGE_ITEMS.map((item, index) => (
                  <div className="col-12" key={index}>
                    <div className="card shadow-sm h-100">
                      <div className="card-body d-flex align-items-center gap-3">
                        <i
                          className={`${item.icon} fa-lg`}
                          aria-hidden="true"
                        />
                        <p className="mb-0">{item.text}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="col-lg-6 text-center">
              <img
                src="/images/badge.png"
                alt="Permit guarantee badge"
                className="img-fluid"
                style={{ maxHeight: 320 }}
              />
            </div>
          </div>

          <div className="bg-white p-4 rounded shadow-sm mb-5">
            <h3 className="fw-bold">What It Doesn’t Cover</h3>
            <p className="text-muted mb-4">
              Our Permit Guarantee applies to the work within our agreed scope.
              It does not cover:
            </p>
            <div className="row g-3">
              {EXCLUSIONS.map((item, index) => (
                <div className="col-md-6 col-12" key={index}>
                  <div className="card shadow-sm h-100">
                    <div className="card-body d-flex align-items-center gap-3">
                      <i className={`${item.icon} fa-lg`} aria-hidden="true" />
                      <p className="mb-0">{item.text}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="c-structure-service-sec w-100">
        <div className="container">
          <div
            className="c-structure-service-sec__main-area"
            style={{ backgroundImage: "url('/images/service-bg.png')" }}
          >
            <h2>Why We Offer This</h2>
            <div className="c-structure-service-desktop">
              <p>
                Permitting often takes multiple review cycles. That’s normal—and
                part of the process. What matters is having an engineering team
                that doesn’t disappear after the first submission. We remain
                engaged, responsive, and accountable until your permit is
                secured.
              </p>
              <p>
                This is our promise—and the reason clients trust us project
                after project.
              </p>
            </div>
            <div className="c-structure-service-mobile">
              <p>
                Permitting often takes multiple review cycles. That’s normal—and
                part of the process. What matters is having an engineering team
                that doesn’t disappear after the first submission. We remain
                engaged, responsive, and accountable until your permit is
                secured.
              </p>
              <p>
                This is our promise—and the reason clients trust us project
                after project.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-5">
        <div className="container">
          <h3 className="fw-bold text-center mb-4">How It Works</h3>
          <div className="row g-3">
            {HOW_STEPS.map((step, index) => (
              <div className="col-md-6 col-12" key={step.title}>
                <div className="card shadow-sm h-100">
                  <div className="card-body d-flex gap-3">
                    <div
                      className="badge bg-primary rounded-circle text-white fw-bold"
                      style={{
                        width: 40,
                        height: 40,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      {index + 1}
                    </div>
                    <div>
                      <h5 className="mb-1">{step.title}</h5>
                      {step.description && (
                        <p className="text-muted mb-0">{step.description}</p>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        className="c-structure-service-sec__main-area text-center text-light"
        style={{ backgroundImage: "url('/images/what-we-are-bg.jpg')" }}
      >
        <h2>Have Questions?</h2>
        <p>
          Let’s talk. We’re here to make your permitting journey smoother — and
          ensure you have a team that stands by its work.
        </p>
        <button onClick={openModal} className="btn c-get-quote-btn">
          <strong>
            CONTACT US TODAY <i className="fa-solid fa-chevron-right" />
          </strong>
        </button>
      </section>

      <section
        className="c_paralax_img"
        style={{ backgroundImage: "url('/images/Footer.jpg')" }}
      />
    </>
  );
}
