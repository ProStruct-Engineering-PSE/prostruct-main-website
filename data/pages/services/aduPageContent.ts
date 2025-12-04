type ImageAsset = {
  src: string;
  alt: string;
  width: number;
  height: number;
};

type AduType = {
  heading: string;
  contentHtml: string;
};

type WhatWeDoItem = {
  headingHtml: string;
  icon: ImageAsset;
};

type HowItWorksStep = {
  image: ImageAsset;
  detailsHtml: string;
};

export type AduPageContent = {
  stateName?: string;
  heroTitleHtml: string;
  heroContentHtml: string;
  heroImage: ImageAsset;
  bannerHeading?: string;
  pyramidImage: ImageAsset;
  permitLink: string;
  aduTypesIntroHtml: string;
  aduTypesHeading: string;
  aduTypes: AduType[];
  aduTypesImage: ImageAsset;
  whatWeDoHeading: string;
  whatWeDoSubheading: string;
  whatWeDoItems: WhatWeDoItem[];
  whatWeDoDetailsHtml: string;
  getStartedHeading: string;
  getStartedContent: string;
  stepsHeading: string;
  steps: HowItWorksStep[];
  footerImage: ImageAsset;
};

const HERO_IMAGE: ImageAsset = {
  src: "/images/adu-banner.jpg",
  alt: "Homeowner reviewing ADU structural plans",
  width: 1440,
  height: 600,
};

const PYRAMID_IMAGE: ImageAsset = {
  src: "/images/serviceimg2.png",
  alt: "ProStruct Engineering service highlights",
  width: 652,
  height: 422,
};

const ADU_TYPES_IMAGE: ImageAsset = {
  src: "/images/image-right-1.jpg",
  alt: "Accessory dwelling unit exterior",
  width: 512,
  height: 512,
};

const FOOTER_IMAGE: ImageAsset = {
  src: "/images/Footer.jpg",
  alt: "California style home exterior at sunset",
  width: 1440,
  height: 545,
};

const ADU_TYPES: AduType[] = [
  {
    heading: "Junior ADU (JADU)",
    contentHtml:
      "These are smaller units that are typically less than 500 square feet and are often created by converting a single room within the primary residence.",
  },
  {
    heading: "Attached ADU",
    contentHtml:
      "These are units that are attached to the main house, often as an addition or a converted garage.",
  },
  {
    heading: "Detached ADU",
    contentHtml:
      "These are stand-alone structures that are separate from the primary residence. They can be built on the same lot as the main house or on a separate lot.",
  },
  {
    heading: "Basement ADU",
    contentHtml:
      "These are units that are located in the basement of the primary residence.",
  },
  {
    heading: "Garage ADU",
    contentHtml:
      "These are units that are built above or within an existing garage.",
  },
  {
    heading: "Multi-family ADU",
    contentHtml:
      "Sometimes referred to as a secondary suite, these ADUs are designed to be part of a larger multi-family residential building, such as an apartment complex or duplex.",
  },
];

const WHAT_WE_DO_ITEMS: WhatWeDoItem[] = [
  {
    headingHtml: "Structural Site <br /> Inspections",
    icon: {
      src: "/images/whatweicon1.svg",
      alt: "Structural site inspections icon",
      width: 93,
      height: 92,
    },
  },
  {
    headingHtml: "Structural <br /> Calculations",
    icon: {
      src: "/images/whatweicon2.svg",
      alt: "Structural calculations icon",
      width: 93,
      height: 92,
    },
  },
  {
    headingHtml: "Structural <br /> Plans",
    icon: {
      src: "/images/whatweicon3.svg",
      alt: "Structural plans icon",
      width: 94,
      height: 92,
    },
  },
  {
    headingHtml: "Structural Permit <br /> Sets",
    icon: {
      src: "/images/whatweicon4.svg",
      alt: "Structural permit sets icon",
      width: 93,
      height: 92,
    },
  },
  {
    headingHtml: "Construction <br /> Administration",
    icon: {
      src: "/images/whatweicon5.svg",
      alt: "Construction administration icon",
      width: 94,
      height: 92,
    },
  },
];

const WHAT_WE_DO_DETAILS_HTML = `
<div class="str_sec" id="str1">
  <h4>Structural Site Inspections</h4>
  <p>This involves a site visit to assess factors that may impact the structural design of your ADU (or JADU), or the stability of your home if it is a JADU or attached ADU.</p>
</div>
<div class="str_sec" id="str2">
  <h4>Structural Calculations</h4>
  <p>Load calculations are performed to assess the static and dynamic stresses your ADU structure will need to endure during seismic activity. This helps determine the appropriate sizes and shapes of structural members like beams, columns, load-bearing walls, and foundations.</p>
</div>
<div class="str_sec" id="str3">
  <h4>Structural Plans</h4>
  <p>Based on structural load calculation results, our engineers develop plans for your ADU’s structural components, such as framing, foundation, and roof systems.</p>
</div>
<div class="str_sec" id="str4">
  <h4>Structural Permit Sets</h4>
  <p>These typically include detailed drawings and specifications of your ADU’s structural components, as well as calculations and other documentation required by local building departments to obtain a construction permit.</p>
</div>
<div class="str_sec" id="str5">
  <h4>Construction Administration</h4>
  <p>Our engineers can provide construction administration services, which include guidance throughout the build. This encompasses responding to RFIs, performing submittal reviews, addressing substitution requests, and conducting structural observations.</p>
</div>
`;

const HOW_IT_WORKS_STEPS: HowItWorksStep[] = [
  {
    image: {
      src: "/images/How_It_Works_1.jpg",
      alt: "Share your requirements illustration",
      width: 305,
      height: 224,
    },
    detailsHtml:
      "Share Your <span>Requirements</span>, Including Existing Plans/ Designs if Available",
  },
  {
    image: {
      src: "/images/How_It_Works_2.jpg",
      alt: "Get a free quote button",
      width: 305,
      height: 224,
    },
    detailsHtml:
      "Get a <span>No-obligation</span>,<br/>Free Express Quote<br/>Within 24 Hours",
  },
  {
    image: {
      src: "/images/How_It_Works_3.jpg",
      alt: "Quick delivery clock graphic",
      width: 305,
      height: 224,
    },
    detailsHtml:
      "We Start Your Project, With <br/><span>Quick Delivery</span> in 2-3 Weeks for Most Projects",
  },
];

const HERO_TITLE = "Structural Engineer for your <br /> ADU (or JADU)";
const ADU_INTRO_HTML = `
  <h2>Types of Accessory Dwelling Units (ADUs)</h2>
  <p>Single-family ADUs are secondary housing units that are located on the same lot as a single-family home. These units are also sometimes referred to as granny flats, in-law suites or backyard cottages.</p>
`;
const GET_STARTED_HEADING = "Ready To Get Started?";
const GET_STARTED_CONTENT =
  "Schedule a Free Consultation With One of Our Expert Structural Engineers for Your ADU Project.";

const BASE_HERO_CONTENT = (stateLabel: string) =>
  `Our Structural Engineers provide a full range of professional structural engineering services to meet your <strong>Accessory Dwelling Unit (ADU)</strong> or <strong>Junior Accessory Dwelling Unit (JADU)</strong> needs in <strong>${stateLabel}</strong>. Our services include conducting necessary <strong>Structural Site Inspections</strong>, performing <strong>Structural Calculations</strong>, creating <strong>Structural Plans</strong>, and preparing <strong>Structural Permit Sets</strong> for construction permit approval.`;

function createVariant({
  stateName,
  permitBasePath,
}: {
  stateName?: string;
  permitBasePath?: string;
}): AduPageContent {
  const stateLabel = stateName ?? "Homeowners";
  const permitLink = permitBasePath
    ? `${permitBasePath}/permit-guarantee`
    : "/permit-guarantee";

  return {
    stateName,
    heroTitleHtml: HERO_TITLE,
    heroContentHtml: BASE_HERO_CONTENT(stateLabel),
    heroImage: HERO_IMAGE,
    pyramidImage: PYRAMID_IMAGE,
    permitLink,
    aduTypesIntroHtml: ADU_INTRO_HTML,
    aduTypesHeading: "Some popular ADU types:",
    aduTypes: ADU_TYPES,
    aduTypesImage: ADU_TYPES_IMAGE,
    whatWeDoHeading: "What We Do?",
    whatWeDoSubheading:
      "Our skilled structural engineers can provide the following services for your ADU (or JADU) project:",
    whatWeDoItems: WHAT_WE_DO_ITEMS,
    whatWeDoDetailsHtml: WHAT_WE_DO_DETAILS_HTML,
    getStartedHeading: GET_STARTED_HEADING,
    getStartedContent: GET_STARTED_CONTENT,
    stepsHeading: "How It Works: Its Fast, Easy & Convenient.",
    steps: HOW_IT_WORKS_STEPS,
    footerImage: FOOTER_IMAGE,
  };
}

export type AduVariantKey =
  | "default"
  | "structural"
  | "california"
  | "oregon"
  | "washington"
  | "colorado"
  | "nevada"
  | "utah"
  | "arizona"
  | "texas"
  | "georgia"
  | "new-mexico"
  | "idaho";

const STATE_BASE_PATHS: Record<string, string> = {
  california: "/california-structural-engineers",
  oregon: "/oregon-structural-engineers",
  washington: "/washington-structural-engineers",
  colorado: "/colorado-structural-engineers",
  nevada: "/nevada-structural-engineers",
  utah: "/utah-structural-engineers",
  arizona: "/arizona-structural-engineers",
  texas: "/texas-structural-engineers",
  georgia: "/georgia-structural-engineers",
  "new-mexico": "/new-mexico-structural-engineers",
  idaho: "/idaho-structural-engineers",
};

export const aduPageContent: Record<AduVariantKey, AduPageContent> = {
  default: createVariant({}),
  structural: createVariant({ permitBasePath: "/structural-engineers" }),
  california: createVariant({
    stateName: "California",
    permitBasePath: STATE_BASE_PATHS.california,
  }),
  oregon: createVariant({
    stateName: "Oregon",
    permitBasePath: STATE_BASE_PATHS.oregon,
  }),
  washington: createVariant({
    stateName: "Washington",
    permitBasePath: STATE_BASE_PATHS.washington,
  }),
  colorado: createVariant({
    stateName: "Colorado",
    permitBasePath: STATE_BASE_PATHS.colorado,
  }),
  nevada: createVariant({
    stateName: "Nevada",
    permitBasePath: STATE_BASE_PATHS.nevada,
  }),
  utah: createVariant({
    stateName: "Utah",
    permitBasePath: STATE_BASE_PATHS.utah,
  }),
  arizona: createVariant({
    stateName: "Arizona",
    permitBasePath: STATE_BASE_PATHS.arizona,
  }),
  texas: createVariant({
    stateName: "Texas",
    permitBasePath: STATE_BASE_PATHS.texas,
  }),
  georgia: createVariant({
    stateName: "Georgia",
    permitBasePath: STATE_BASE_PATHS.georgia,
  }),
  "new-mexico": createVariant({
    stateName: "New Mexico",
    permitBasePath: STATE_BASE_PATHS["new-mexico"],
  }),
  idaho: createVariant({
    stateName: "Idaho",
    permitBasePath: STATE_BASE_PATHS.idaho,
  }),
};
