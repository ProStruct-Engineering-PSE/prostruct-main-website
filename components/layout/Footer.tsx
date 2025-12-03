"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useModal } from "@/components/shared/ModalProvider";

// Embedded data from WordPress
const FOOTER_LOGO_URL = "/images/new-logo.svg";
const FOOTER_BG_IMAGE = "/images/footer-bg.png";

const FOOTER_DESCRIPTION = `Our structural & civil engineers offer dependable professional engineering services for residential and commercial building permits at reasonable prices. Trust us to deliver high-quality structural & civil plans.`;

const COPYRIGHT_TEXT = "© 2025 ProStruct Engineering Inc. All Rights Reserved.";

const FOOTER_DISCLAIMER = `(1)This only applies to our scope of work and omits unsuccessful permitting due to external factors like land ownership disputes, existing illegal Construction, flawed Architectural/Design plans, issues with client-provided documents, or the client halting the project for any reason, etc.`;

// Default footer menu (column 1)
const FOOTER_MENU_1 = [
  { id: 1, title: "New Home", url: "/for-new-custom-home" },
  { id: 2, title: "ADU", url: "/for-adu-or-jadu" },
  { id: 3, title: "Addition/Remodel", url: "/for-home-addition-remodel" },
  { id: 4, title: "Load Bearing Wall", url: "/for-load-bearing-wall-removal" },
  { id: 5, title: "Retaining Wall", url: "/for-retaining-wall" },
  {
    id: 6,
    title: "Foundation Design",
    url: "/seismic-retrofit-and-foundations",
  },
  {
    id: 7,
    title: "Deck, Patio & Porch",
    url: "/for-deck-patio-porch-gazebo",
  },
];

// Default footer menu (column 2)
const FOOTER_MENU_2 = [
  {
    id: 8,
    title: "Construction Administration",
    url: "/for-construction-administration",
  },
  { id: 9, title: "Civil Engineering", url: "/civil-engineers" },
  { id: 10, title: "Commercial Services", url: "/commercial-services" },
  { id: 11, title: "Permit Guarantee", url: "/permit-guarantee" },
  { id: 12, title: "Privacy Policy", url: "/privacy-policy" },
  { id: 13, title: "License", url: "/license" },
];

type ServiceAreaContact = {
  type: "serviceAreas";
  areas: { name: string; url: string }[];
  phones: string[];
};

type AddressContact = {
  type: "addresses";
  addresses: string[];
  phones: string[];
};

const DEFAULT_SERVICE_AREAS = [
  { name: "California", url: "/california-structural-engineers/" },
  { name: "Oregon", url: "/oregon-structural-engineers/" },
  { name: "Washington", url: "/washington-structural-engineers/" },
  { name: "Colorado", url: "/colorado-structural-engineers/" },
  { name: "Arizona", url: "/arizona-structural-engineers/" },
  { name: "Texas", url: "/texas-structural-engineers/" },
  { name: "Nevada", url: "/nevada-structural-engineers/" },
  { name: "Utah", url: "/utah-structural-engineers/" },
  { name: "Georgia", url: "/georgia-structural-engineers/" },
  { name: "Idaho", url: "/idaho-structural-engineers/" },
];

type ContactInfo = ServiceAreaContact | AddressContact;

const isServiceAreaContact = (info: ContactInfo): info is ServiceAreaContact =>
  info.type === "serviceAreas";

// State-specific contact information
const STATE_CONTACTS: Record<string, ContactInfo> = {
  default: {
    type: "serviceAreas",
    areas: DEFAULT_SERVICE_AREAS,
    phones: ["+1 844-750-0773"],
  },
  california: {
    type: "addresses",
    addresses: [
      "450 Folsom Street, #1502, San Francisco CA 94105",
      "901 H St #120, Sacramento CA 95814",
      "1177 Branham Ln, #1008, San Jose CA 95118",
      "5708 Hollister Ave, Ste A, Goleta CA 93117",
      "1601 S. Fourth Street, Alhambra CA 91803",
      "9528 Miramar Rd, #1260, San Diego CA 92126",
    ],
    phones: ["+1 855-665-8731", "+1 650-977-1073"],
  },
  washington: {
    type: "addresses",
    addresses: [
      "2226 Eastlake Ave E #1018, Seattle, WA 98102",
      "2624 North Division St. #1006 Spokane, WA 99207",
    ],
    phones: ["+1 844-750-0773"],
  },
  texas: {
    type: "addresses",
    addresses: ["3419 Westminster Ave, #1009, Dallas, TX 75205"],
    phones: ["+1 844-750-0773"],
  },
  arizona: {
    type: "addresses",
    addresses: ["8390 E Via De Ventura, Suite F-110, Scottsdale, AZ 85258"],
    phones: ["+1 844-750-0773"],
  },
  georgia: {
    type: "addresses",
    addresses: ["741 Piedmont Ave NE, Ste 200, Atlanta, GA 30308"],
    phones: ["+1 844-750-0773"],
  },
  nevada: {
    type: "addresses",
    addresses: ["5150 Mae Anne Ave, #405, Reno, NV 89523"],
    phones: ["+1 844-750-0773"],
  },
  utah: {
    type: "addresses",
    addresses: ["2795 E. Cottonwood Parkway, #300, Salt Lake City, UT 84121"],
    phones: ["+1 844-750-0773"],
  },
  idaho: {
    type: "addresses",
    addresses: ["8059 W. Preece Drive #1063, Boise, ID 83704"],
    phones: ["+1 844-750-0773"],
  },
  oregon: {
    type: "addresses",
    addresses: ["5331 S Macadam Ave #258, Portland, OR 97239"],
    phones: ["+1 844-750-0773"],
  },
  colorado: {
    type: "addresses",
    addresses: ["1905 Sherman Street, # 200 Denver CO 80203"],
    phones: ["+1 844-750-0773"],
  },
  "new-mexico": {
    type: "addresses",
    addresses: ["8531 Indian School Rd NE #1032 Albuquerque, NM 87112"],
    phones: ["+1 844-750-0773"],
  },
};

export function Footer() {
  const pathname = usePathname();
  const { openModal } = useModal();

  // Determine current state from pathname
  const getCurrentState = () => {
    if (pathname.includes("/california-structural-engineers"))
      return "california";
    if (pathname.includes("/washington-structural-engineers"))
      return "washington";
    if (pathname.includes("/texas-structural-engineers")) return "texas";
    if (pathname.includes("/arizona-structural-engineers")) return "arizona";
    if (pathname.includes("/georgia-structural-engineers")) return "georgia";
    if (pathname.includes("/nevada-structural-engineers")) return "nevada";
    if (pathname.includes("/utah-structural-engineers")) return "utah";
    if (pathname.includes("/idaho-structural-engineers")) return "idaho";
    if (pathname.includes("/oregon-structural-engineers")) return "oregon";
    if (pathname.includes("/colorado-structural-engineers")) return "colorado";
    if (pathname.includes("/new-mexico-structural-engineers"))
      return "new-mexico";
    return "default";
  };

  const currentState = getCurrentState();
  const contactInfo = STATE_CONTACTS[currentState] || STATE_CONTACTS.default;

  const serviceAreaColumns = isServiceAreaContact(contactInfo)
    ? [
        contactInfo.areas.slice(0, Math.ceil(contactInfo.areas.length / 2)),
        contactInfo.areas.slice(Math.ceil(contactInfo.areas.length / 2)),
      ]
    : [];

  const getLogoLink = () => {
    if (currentState === "default") return "/";
    return `/${currentState}-structural-engineers`;
  };

  // Determine if on state homepage (for footer bottom content)
  const isStateHomepage =
    pathname === "/" ||
    pathname === "/california-structural-engineers" ||
    pathname === "/washington-structural-engineers" ||
    pathname === "/oregon-structural-engineers" ||
    pathname === "/texas-structural-engineers" ||
    pathname === "/georgia-structural-engineers" ||
    pathname === "/arizona-structural-engineers" ||
    pathname === "/colorado-structural-engineers" ||
    pathname === "/nevada-structural-engineers" ||
    pathname === "/utah-structural-engineers" ||
    pathname === "/idaho-structural-engineers" ||
    pathname === "/new-mexico-structural-engineers";

  return (
    <footer
      className="o-footer w-100"
      style={{ backgroundImage: `url('${FOOTER_BG_IMAGE}')` }}
    >
      <div className="container">
        <div className="row">
          {/* Logo and Description */}
          <div className="col-lg-4 col-xl-3 mb-4 mb-xl-0 o-footer__content">
            <Link href={getLogoLink()} className="o-footer__logo">
              <Image
                src={FOOTER_LOGO_URL}
                alt="ProStruct Engineering Logo"
                width={200}
                height={50}
              />
            </Link>

            <p
              className="text-light"
              dangerouslySetInnerHTML={{ __html: FOOTER_DESCRIPTION }}
            />
          </div>

          {/* Explore Menu */}
          <div className="col-lg-5 col-xl-5 offset-xl-1 mb-4 mb-lg-0">
            <h3>EXPLORE</h3>
            <div className="c-nav-sub">
              <div className="row">
                <div className="col-sm-6 col-lg-5">
                  <ul>
                    {FOOTER_MENU_1.map((item) => (
                      <li key={item.id}>
                        <Link href={item.url}>{item.title}</Link>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="col-sm-6 col-lg-7">
                  <ul>
                    {FOOTER_MENU_2.map((item) => (
                      <li key={item.id}>
                        <Link href={item.url}>{item.title}</Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Information */}
          <div className="col-lg-3 col-xl-3 c-footer-address">
            <h3>Contact information</h3>

            {isServiceAreaContact(contactInfo) ? (
              <>
                <div className="row">
                  {serviceAreaColumns.map((column, columnIndex) => (
                    <div className="col-6" key={columnIndex}>
                      <ul>
                        {column.map((area) => (
                          <li key={area.url}>
                            <i
                              className="fas fa-map-marker-alt"
                              aria-hidden="true"
                            />
                            <Link
                              href={area.url}
                              className="text-white text-decoration-none"
                            >
                              {area.name}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>

                {contactInfo.phones.length > 0 && (
                  <ul className="footer_phone_number_ul">
                    {contactInfo.phones.map((phone, index) => (
                      <li key={index}>
                        <i className="fas fa-phone" aria-hidden="true" />
                        <a
                          href={`tel:${phone.replace(/\s/g, "")}`}
                          className="text-white text-decoration-none"
                        >
                          {phone}
                        </a>
                      </li>
                    ))}
                  </ul>
                )}
              </>
            ) : (
              <ul>
                {contactInfo.addresses.map((address, index) => (
                  <li key={index}>
                    <i className="fas fa-map-marker-alt" aria-hidden="true" />
                    {address}
                  </li>
                ))}
                {contactInfo.phones.map((phone, index) => (
                  <li key={index}>
                    <i className="fas fa-phone" aria-hidden="true" />
                    <a
                      href={`tel:${phone.replace(/\s/g, "")}`}
                      className="text-white text-decoration-none"
                    >
                      {phone}
                    </a>
                  </li>
                ))}
              </ul>
            )}

            <div className="mt-3 w-100 text-end">
              <button
                type="button"
                onClick={openModal}
                className="btn c-btn-get-quote"
              >
                CONTACT US <i className="fa-solid fa-chevron-right" />
              </button>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="o-footer__content mt-2">
          {isStateHomepage && (
            <div className="o-footer__bar">
              <div className="container">
                <p dangerouslySetInnerHTML={{ __html: FOOTER_DISCLAIMER }} />
              </div>
            </div>
          )}
          <p
            className="text-center"
            dangerouslySetInnerHTML={{ __html: COPYRIGHT_TEXT }}
          />
        </div>
      </div>
    </footer>
  );
}
