"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useModal } from "@/components/shared/ModalProvider";

// California-specific header menu
const HEADER_MENU = [
  {
    id: 1144,
    title: "Residential",
    url: "/services",
    classes: ["about-menu"],
    children: [
      { id: 1245, title: "Services", url: "/services" },
      { id: 1145, title: "New Custom Home", url: "/for-new-custom-home" },
      {
        id: 1146,
        title: "Home Addition/Remodel",
        url: "/for-home-addition-remodel",
      },
      { id: 1147, title: "ADU", url: "/for-adu-or-jadu" },
      { id: 1148, title: "Retaining Wall", url: "/for-retaining-wall" },
      {
        id: 1149,
        title: "Load Bearing Wall Removal",
        url: "/for-load-bearing-wall-removal",
      },
      {
        id: 1150,
        title: "Deck, Patio & Porch",
        url: "/for-deck-patio-porch-gazebo",
      },
      {
        id: 1151,
        title: "Foundation Design",
        url: "/seismic-retrofit-and-foundations",
      },
      {
        id: 1152,
        title: "Construction Administration",
        url: "/for-construction-administration",
      },
      { id: 4961, title: "Civil Engineering", url: "/civil-engineers" },
    ],
  },
  {
    id: 3008,
    title: "Commercial",
    url: "/commercial-services",
    classes: ["about-menu"],
    children: [
      { id: 3921, title: "Services", url: "/commercial-services" },
      {
        id: 3860,
        title: "Ground Up Construction",
        url: "/for-ground-up-construction",
      },
      { id: 3861, title: "Tenant Improvement", url: "/for-tenant-improvement" },
      {
        id: 3862,
        title: "Mixed-Use Building",
        url: "/for-mixed-use-buildings",
      },
      {
        id: 3863,
        title: "Apartment/Townhouse",
        url: "/for-apartment-buildings",
      },
      {
        id: 3864,
        title: "Equipment Anchorage",
        url: "/for-equipment-anchorage",
      },
      { id: 3865, title: "Warehouse", url: "/warehouse" },
      { id: 3866, title: "Office", url: "/for-offices" },
      { id: 3867, title: "Retail", url: "/for-retails" },
      { id: 3868, title: "Data Center", url: "/for-data-centers" },
    ],
  },
  {
    id: 1157,
    title: "About Us",
    url: "/about-us",
    classes: ["about-menu"],
    children: [
      { id: 1156, title: "About Us", url: "/about-us" },
      { id: 1154, title: "Privacy Policy", url: "/privacy-policy" },
      { id: 1153, title: "License", url: "/license" },
      { id: 1157, title: "Blog", url: "/blog", classes: ["blog-menu-updated"] },
    ],
  },
  {
    id: 5274,
    title: "Why Us",
    url: "#",
    classes: ["reviews-menu-icon"],
    children: [
      { id: 1858, title: "Reviews", url: "/reviews" },
      { id: 5336, title: "Permit Guarantee", url: "/permit-guarantee" },
    ],
  },
];

const LOGO_URL = "/images/new-logo.svg";
const NAV_BUTTON_LABEL = "Contact Us";

// California-specific header (header-with-state-cal.php)
// Logo always links to /california-structural-engineers
export function HeaderWithStateCal() {
  const { openModal } = useModal();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="o-header w-100">
      <div className="container">
        <div className="d-flex align-items-center">
          <Link href="/california-structural-engineers" className="o-logo">
            <Image
              src={LOGO_URL}
              alt="ProStruct Engineering Logo"
              width={217}
              height={50}
              priority
            />
          </Link>

          <div className="o-header__right">
            <nav className="c-nav-sup">
              <ul>
                {HEADER_MENU.map((item) => (
                  <li key={item.id} className={item.classes?.join(" ")}>
                    <Link href={item.url}>{item.title}</Link>
                    {item.children && (
                      <ul className="sub-menu">
                        {item.children.map((child) => (
                          <li key={child.id}>
                            <Link href={child.url}>{child.title}</Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                ))}
              </ul>
            </nav>

            <button
              type="button"
              onClick={openModal}
              className="btn c-btn-contact"
            >
              {NAV_BUTTON_LABEL} <i className="fa-solid fa-chevron-right"></i>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Offcanvas Menu */}
      {isMobileMenuOpen && (
        <>
          <div
            className="offcanvas offcanvas-end show"
            style={{ visibility: "visible" }}
          >
            <div className="offcanvas-header">
              <Link
                href="/"
                className="o-logo"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <Image
                  src={LOGO_URL}
                  alt="ProStruct Engineering Logo"
                  width={200}
                  height={50}
                />
              </Link>
              <button
                type="button"
                className="btn-close text-reset"
                onClick={() => setIsMobileMenuOpen(false)}
                aria-label="Close"
              ></button>
            </div>
            <div className="offcanvas-body">
              <div className="c-mobile-menu">
                <ul>
                  {HEADER_MENU.map((item) => (
                    <li key={item.id} className={item.classes?.join(" ")}>
                      <Link
                        href={item.url}
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        {item.title}
                      </Link>
                      {item.children && (
                        <ul>
                          {item.children.map((child) => (
                            <li key={child.id}>
                              <Link
                                href={child.url}
                                onClick={() => setIsMobileMenuOpen(false)}
                              >
                                {child.title}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          <div
            className="offcanvas-backdrop fade show"
            onClick={() => setIsMobileMenuOpen(false)}
          ></div>
        </>
      )}

      {/* Mobile Bottom Bar */}
      <section className="head-bottom d-sm-none">
        <div className="container">
          <div className="d-flex justify-content-between align-items-center">
            <div className="head-bottom-btn">
              <button
                type="button"
                onClick={openModal}
                className="btn c-btn-contact"
              >
                Contact Us <i className="fa-solid fa-chevron-right"></i>
              </button>
            </div>
            <button
              className="btn c-btn-toggle"
              type="button"
              onClick={() => setIsMobileMenuOpen(true)}
            >
              <i className="fa-solid fa-bars"></i>
            </button>
          </div>
        </div>
      </section>
    </header>
  );
}
