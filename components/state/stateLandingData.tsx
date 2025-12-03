export type StateSlug =
  | "california-structural-engineers"
  | "washington-structural-engineers"
  | "oregon-structural-engineers"
  | "colorado-structural-engineers"
  | "nevada-structural-engineers"
  | "utah-structural-engineers"
  | "texas-structural-engineers"
  | "georgia-structural-engineers"
  | "arizona-structural-engineers"
  | "idaho-structural-engineers";

interface HeroContent {
  desktopHtml: string;
  mobileHtml: string;
  mobileBottomHtml?: string;
}

export interface Reason {
  heading: string;
  descriptionHtml: string;
}

interface ProjectTypesContent {
  heading: string;
  introHtml: string;
  columns: string[][];
}

export interface StateLandingContent {
  slug: StateSlug;
  title: string;
  hero: HeroContent;
  tagLine: string;
  whyChooseHeading: string;
  reasons: Reason[];
  aboutHeading: string;
  aboutDesktopHtml: string;
  aboutMobileHtml: string;
  projectTypes: ProjectTypesContent;
  howItWorksHeading: string;
  stepsDetails: string[];
  permitBadgeLink: string;
}

const STATE_NAMES: Record<StateSlug, string> = {
  "california-structural-engineers": "California",
  "washington-structural-engineers": "Washington",
  "oregon-structural-engineers": "Oregon",
  "colorado-structural-engineers": "Colorado",
  "nevada-structural-engineers": "Nevada",
  "utah-structural-engineers": "Utah",
  "texas-structural-engineers": "Texas",
  "georgia-structural-engineers": "Georgia",
  "arizona-structural-engineers": "Arizona",
  "idaho-structural-engineers": "Idaho",
};

const HERO_TEMPLATE_DESKTOP = (state: string) => `
<h1>Our Experienced Structural &amp; Civil Engineers for your <strong>Residential &amp; Commercial</strong> Project Needs</h1>
<span class="mbl-hide">At ProStruct Engineering we take pride in professionalism.</span> Our motivation is to improve <strong>${state}</strong> Homeowners' home-building experience by delivering high-quality Structural &amp; Civil Engineering Plans for permit approval smoothly.
We have a 100% success rate<sup>(1)</sup> in obtaining Residential &amp; Commercial Building Permits.

We’re experienced, reliable, and budget-friendly.`;

const HERO_TEMPLATE_MOBILE = (state: string) =>
  `<h1>Our Experienced <strong>${state} Structural &amp; Civil Engineers</strong> for your <strong>Residential &amp; Commercial</strong> Project Needs</h1>`;

const HERO_TEMPLATE_MOBILE_BOTTOM = (state: string) => `
Our motivation is to improve ${state} Homeowners' home-building experience by delivering high-quality Structural &amp; Civil Engineering Plans for permit approval smoothly.
We have a 100% success rate<sup>(1)</sup> in obtaining Residential &amp; Commercial Building Permits.

We’re experienced, reliable, and budget-friendly.`;

const STANDARD_TAGLINE = "Professional Structural & Civil Engineers";

const STANDARD_ABOUT_DESKTOP = `ProStruct Engineering’s experienced team of <strong>Professional Structural &amp; Civil Engineers</strong> provides <strong>high-quality
engineering</strong> plans that comply with building permit requirements for residential &amp; Commercial projects.

Our goal is to offer <strong>budget-friendly</strong> services and act as a dependable ally throughout the process.

Our services include <strong>Structural Site Inspections, Structural Calculations,</strong> creating <strong>Structural Plans,</strong>
and preparing <strong>Structural Permit Sets, and Civil Engineering Plans.</strong>`;

const STANDARD_ABOUT_MOBILE = `Our services include <strong>Structural Site Inspections, Structural Calculations,</strong> creating <strong>Structural Plans,</strong>
and preparing <strong>Structural Permit Sets and Civil Engineering Plans.</strong>

Our goal is to offer <strong>budget-friendly</strong> services and acting as a dependable ally throughout the process.`;

const STANDARD_PROJECT_INTRO = `<p>Our Structural &amp; Civil Engineers’ expertise in providing Engineering Services extends to a variety of Residential &amp; Commercial Project Types, including:</p>`;

const TEXAS_PROJECT_INTRO = `<p><span style="font-weight: 400;">We bring structural &amp; civil engineering solutions to a broad range of commercial project types:</span></p>`;

const STANDARD_PROJECT_COLUMNS = [
  [
    "New Custom Home",
    "ADU",
    "Home Addition/Remodel",
    "Load Bearing Wall Removal",
    "Commercial Projects",
  ],
  [
    "Retaining Wall",
    "Deck, Patio & Porch",
    "Foundation Design & More",
    "Construction Administration",
    "Civil Engineering",
  ],
];

const TEXAS_PROJECT_COLUMNS = [
  [
    "Ground-Up Commercial Construction",
    "Tenant Improvements",
    "Office Buildings",
    "Retail Spaces",
  ],
  [
    "Warehouses & Industrial Facilities",
    "Data Centers",
    "Mixed-Use Developments",
  ],
];

const HOW_IT_WORKS_HEADING = "How It Works: Its Fast, Easy & Convenient.";

const STANDARD_STEP_DETAILS = [
  "Share Your <span>Requirements</span>, Including Existing Plans/ Designs if Available",
  "Get a <span>No-obligation</span>,<br/>Free Express Quote<br/>Within 24 Hours",
  "We Start Your Project, With <br/><span>Quick Delivery</span> in 2-3 Weeks for Most Projects",
];

const createReasons = (state: string, experiencedHtml?: string): Reason[] => {
  const experienced = experiencedHtml
    ? experiencedHtml
    : `<ul>
 \t<li>35+ Years</li>
 \t<li>3,000+ Projects</li>
 \t<li>New Home, ADU, Addition, Remodel, and More</li>
</ul>`;

  return [
    {
      heading: "Experienced",
      descriptionHtml: experienced,
    },
    {
      heading: "Budget-friendly",
      descriptionHtml: `<ul>
 \t<li>Local Pricing</li>
 \t<li>Fixed &amp; Transparent</li>
 \t<li>No Surprises</li>
</ul>`,
    },
    {
      heading: "Licensed & Insured",
      descriptionHtml: `<ul>
 \t<li>${state} PE License</li>
 \t<li>Insured</li>
</ul>`,
    },
    {
      heading: "Responsive & Fast",
      descriptionHtml: `<ul>
 \t<li>Proactive &amp; Responsive</li>
 \t<li>Quick Turnaround</li>
</ul>`,
    },
    {
      heading: "Professionalism",
      descriptionHtml: `<ul>
 \t<li><strong>Our Core Values:</strong> Integrity, Responsibility, Reliability, Ethics, And Maintaining The Highest Quality Standards For Structural Plans</li>
 \t<li>Adhering To These Standards Has Helped Us Build Trust And Credibility With Our Clients</li>
</ul>`,
    },
  ];
};

const buildStandardHero = (stateSlug: StateSlug): HeroContent => {
  const stateName = STATE_NAMES[stateSlug];
  return {
    desktopHtml: HERO_TEMPLATE_DESKTOP(stateName),
    mobileHtml: HERO_TEMPLATE_MOBILE(stateName),
    mobileBottomHtml: HERO_TEMPLATE_MOBILE_BOTTOM(stateName),
  };
};

const buildNevadaHero = (): HeroContent => ({
  desktopHtml: HERO_TEMPLATE_DESKTOP(
    STATE_NAMES["nevada-structural-engineers"]
  ),
  mobileHtml: HERO_TEMPLATE_MOBILE(STATE_NAMES["nevada-structural-engineers"]),
  mobileBottomHtml: HERO_TEMPLATE_MOBILE_BOTTOM("Nevada"),
});

const buildTexasHero = (): HeroContent => ({
  desktopHtml: `<h1><b>Trusted Structural Engineers for Your Commercial &amp; Residential Project Needs</b></h1>
<span style="font-weight: 400;">At ProStruct Engineering, we specialize in delivering professional structural engineering solutions tailored to </span><b>commercial projects across Texas</b><span style="font-weight: 400;">. Our mission is to streamline your commercial project—from office buildings to retail spaces—with high-quality structural plans optimized for permits and compliance.</span><span style="font-weight: 400;">
</span><span style="font-weight: 400;">With our depth of expertise and trusted reputation, your commercial projects are in capable hands.</span>`,
  mobileHtml: `<h1><b>Trusted Structural Engineers for Your Commercial &amp; Residential Project Needs</b></h1>`,
  mobileBottomHtml: `<span style="font-weight: 400;">At ProStruct Engineering, we specialize in delivering professional structural engineering solutions tailored to </span><b>commercial projects across Texas</b><span style="font-weight: 400;">. Our mission is to streamline your commercial project—from office buildings to retail spaces—with high-quality structural plans optimized for permits and compliance.</span><span style="font-weight: 400;">
</span><span style="font-weight: 400;">With our depth of expertise and trusted reputation, your commercial projects are in capable hands.</span>`,
});

const createProjectTypes = (
  introHtml: string,
  columns: string[][]
): ProjectTypesContent => ({
  heading: "Project Types",
  introHtml,
  columns,
});

const createPermitLink = (slug: StateSlug) => `/${slug}/permit-guarantee`;

const stateLandingContentBase: Record<StateSlug, StateLandingContent> = {
  "california-structural-engineers": {
    slug: "california-structural-engineers",
    title: "California Structural Engineers",
    hero: buildStandardHero("california-structural-engineers"),
    tagLine: STANDARD_TAGLINE,
    whyChooseHeading: "Why Choose Us?",
    reasons: createReasons(STATE_NAMES["california-structural-engineers"]),
    aboutHeading: "Our Engineering Services",
    aboutDesktopHtml: STANDARD_ABOUT_DESKTOP,
    aboutMobileHtml: STANDARD_ABOUT_MOBILE,
    projectTypes: createProjectTypes(
      STANDARD_PROJECT_INTRO,
      STANDARD_PROJECT_COLUMNS
    ),
    howItWorksHeading: HOW_IT_WORKS_HEADING,
    stepsDetails: STANDARD_STEP_DETAILS,
    permitBadgeLink: createPermitLink("california-structural-engineers"),
  },
  "washington-structural-engineers": {
    slug: "washington-structural-engineers",
    title: "Washington Structural Engineers",
    hero: buildStandardHero("washington-structural-engineers"),
    tagLine: STANDARD_TAGLINE,
    whyChooseHeading: "Why Choose Us?",
    reasons: createReasons(STATE_NAMES["washington-structural-engineers"]),
    aboutHeading: "Our Engineering Services",
    aboutDesktopHtml: STANDARD_ABOUT_DESKTOP,
    aboutMobileHtml: STANDARD_ABOUT_MOBILE,
    projectTypes: createProjectTypes(
      STANDARD_PROJECT_INTRO,
      STANDARD_PROJECT_COLUMNS
    ),
    howItWorksHeading: HOW_IT_WORKS_HEADING,
    stepsDetails: STANDARD_STEP_DETAILS,
    permitBadgeLink: createPermitLink("washington-structural-engineers"),
  },
  "oregon-structural-engineers": {
    slug: "oregon-structural-engineers",
    title: "Oregon Structural Engineers",
    hero: buildStandardHero("oregon-structural-engineers"),
    tagLine: STANDARD_TAGLINE,
    whyChooseHeading: "Why Choose Us?",
    reasons: createReasons(STATE_NAMES["oregon-structural-engineers"]),
    aboutHeading: "Our Structural Engineering Services",
    aboutDesktopHtml: STANDARD_ABOUT_DESKTOP,
    aboutMobileHtml: STANDARD_ABOUT_MOBILE,
    projectTypes: createProjectTypes(
      STANDARD_PROJECT_INTRO,
      STANDARD_PROJECT_COLUMNS
    ),
    howItWorksHeading: HOW_IT_WORKS_HEADING,
    stepsDetails: STANDARD_STEP_DETAILS,
    permitBadgeLink: createPermitLink("oregon-structural-engineers"),
  },
  "colorado-structural-engineers": {
    slug: "colorado-structural-engineers",
    title: "Colorado Structural Engineers",
    hero: buildStandardHero("colorado-structural-engineers"),
    tagLine: STANDARD_TAGLINE,
    whyChooseHeading: "Why Choose Us?",
    reasons: createReasons(STATE_NAMES["colorado-structural-engineers"]),
    aboutHeading: "Our Structural Engineering Services",
    aboutDesktopHtml: STANDARD_ABOUT_DESKTOP,
    aboutMobileHtml: STANDARD_ABOUT_MOBILE,
    projectTypes: createProjectTypes(
      STANDARD_PROJECT_INTRO,
      STANDARD_PROJECT_COLUMNS
    ),
    howItWorksHeading: HOW_IT_WORKS_HEADING,
    stepsDetails: STANDARD_STEP_DETAILS,
    permitBadgeLink: createPermitLink("colorado-structural-engineers"),
  },
  "nevada-structural-engineers": {
    slug: "nevada-structural-engineers",
    title: "Nevada Structural Engineers",
    hero: buildNevadaHero(),
    tagLine: STANDARD_TAGLINE,
    whyChooseHeading: "Why Choose Us?",
    reasons: createReasons(STATE_NAMES["nevada-structural-engineers"]),
    aboutHeading: "Our Engineering Services",
    aboutDesktopHtml: STANDARD_ABOUT_DESKTOP,
    aboutMobileHtml: STANDARD_ABOUT_MOBILE,
    projectTypes: createProjectTypes(
      STANDARD_PROJECT_INTRO,
      STANDARD_PROJECT_COLUMNS
    ),
    howItWorksHeading: HOW_IT_WORKS_HEADING,
    stepsDetails: STANDARD_STEP_DETAILS,
    permitBadgeLink: createPermitLink("nevada-structural-engineers"),
  },
  "utah-structural-engineers": {
    slug: "utah-structural-engineers",
    title: "Utah Structural Engineers",
    hero: buildStandardHero("utah-structural-engineers"),
    tagLine: STANDARD_TAGLINE,
    whyChooseHeading: "Why Choose Us?",
    reasons: createReasons(STATE_NAMES["utah-structural-engineers"]),
    aboutHeading: "Our Engineering Services",
    aboutDesktopHtml: STANDARD_ABOUT_DESKTOP,
    aboutMobileHtml: STANDARD_ABOUT_MOBILE,
    projectTypes: createProjectTypes(
      STANDARD_PROJECT_INTRO,
      STANDARD_PROJECT_COLUMNS
    ),
    howItWorksHeading: HOW_IT_WORKS_HEADING,
    stepsDetails: STANDARD_STEP_DETAILS,
    permitBadgeLink: createPermitLink("utah-structural-engineers"),
  },
  "texas-structural-engineers": {
    slug: "texas-structural-engineers",
    title: "Residential Structural Engineers, Texas | ProStruct Engineering",
    hero: buildTexasHero(),
    tagLine: STANDARD_TAGLINE,
    whyChooseHeading: "Why Choose Us?",
    reasons: createReasons(
      STATE_NAMES["texas-structural-engineers"],
      `<ul>
 \t<li>35+ Years</li>
 \t<li>3,000+ Projects</li>
 \t<li><span style="font-weight: 400;">Office, Retail, Warehouses, and more</span></li>
</ul>`
    ),
    aboutHeading: "Our Engineering Services",
    aboutDesktopHtml: STANDARD_ABOUT_DESKTOP,
    aboutMobileHtml: STANDARD_ABOUT_MOBILE,
    projectTypes: createProjectTypes(
      TEXAS_PROJECT_INTRO,
      TEXAS_PROJECT_COLUMNS
    ),
    howItWorksHeading: HOW_IT_WORKS_HEADING,
    stepsDetails: STANDARD_STEP_DETAILS,
    permitBadgeLink: createPermitLink("texas-structural-engineers"),
  },
  "georgia-structural-engineers": {
    slug: "georgia-structural-engineers",
    title: "Residential Structural Engineers, GA",
    hero: buildStandardHero("georgia-structural-engineers"),
    tagLine: STANDARD_TAGLINE,
    whyChooseHeading: "Why Choose Us?",
    reasons: createReasons(STATE_NAMES["georgia-structural-engineers"]),
    aboutHeading: "Our Engineering Services",
    aboutDesktopHtml: STANDARD_ABOUT_DESKTOP,
    aboutMobileHtml: STANDARD_ABOUT_MOBILE,
    projectTypes: createProjectTypes(
      STANDARD_PROJECT_INTRO,
      STANDARD_PROJECT_COLUMNS
    ),
    howItWorksHeading: HOW_IT_WORKS_HEADING,
    stepsDetails: STANDARD_STEP_DETAILS,
    permitBadgeLink: createPermitLink("georgia-structural-engineers"),
  },
  "arizona-structural-engineers": {
    slug: "arizona-structural-engineers",
    title: "Residential Structural Engineers, AZ",
    hero: buildStandardHero("arizona-structural-engineers"),
    tagLine: STANDARD_TAGLINE,
    whyChooseHeading: "Why Choose Us?",
    reasons: createReasons(STATE_NAMES["arizona-structural-engineers"]),
    aboutHeading: "Our Engineering Services",
    aboutDesktopHtml: STANDARD_ABOUT_DESKTOP,
    aboutMobileHtml: STANDARD_ABOUT_MOBILE,
    projectTypes: createProjectTypes(
      STANDARD_PROJECT_INTRO,
      STANDARD_PROJECT_COLUMNS
    ),
    howItWorksHeading: HOW_IT_WORKS_HEADING,
    stepsDetails: STANDARD_STEP_DETAILS,
    permitBadgeLink: createPermitLink("arizona-structural-engineers"),
  },
  "idaho-structural-engineers": {
    slug: "idaho-structural-engineers",
    title: "Idaho Structural Engineers",
    hero: buildStandardHero("idaho-structural-engineers"),
    tagLine: STANDARD_TAGLINE,
    whyChooseHeading: "Why Choose Us?",
    reasons: createReasons(STATE_NAMES["idaho-structural-engineers"]),
    aboutHeading: "Our Engineering Services",
    aboutDesktopHtml: STANDARD_ABOUT_DESKTOP,
    aboutMobileHtml: STANDARD_ABOUT_MOBILE,
    projectTypes: createProjectTypes(
      STANDARD_PROJECT_INTRO,
      STANDARD_PROJECT_COLUMNS
    ),
    howItWorksHeading: HOW_IT_WORKS_HEADING,
    stepsDetails: STANDARD_STEP_DETAILS,
    permitBadgeLink: createPermitLink("idaho-structural-engineers"),
  },
};

export const stateLandingContent: Record<StateSlug, StateLandingContent> =
  stateLandingContentBase;
