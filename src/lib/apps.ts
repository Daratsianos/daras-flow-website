// The Lab: small apps built to scratch real itches. Card Sorter is also the
// flagship workflow case study on the home page.

export const SITE_URL = "https://www.darasflow.com";

export type LabApp = {
  slug: string;
  name: string;
  status: string;
  url: string;
  playUrl?: string;
  /** Three-to-eight-word description for the one-line Lab strip. */
  short: string;
  tagline: string;
  story: string;
  tryLabel: string;
  schema: {
    applicationCategory: string;
    operatingSystem: string | string[];
    description: string;
  };
};

export const apps: LabApp[] = [
  {
    slug: "card-sorter",
    name: "Card Sorter",
    status: "Beta · web",
    url: "https://card-sorter-one.vercel.app",
    short: "sorts card statements for bookkeeping",
    tagline:
      "Turns business credit-card statements into categorised, bookkeeping-ready data.",
    story:
      "Built for a freelancer who was spending days sorting transactions by hand. It reads a statement, organises the transactions and learns from his corrections. Almost 700 real transactions processed so far.",
    tryLabel: "Try the beta",
    schema: {
      applicationCategory: "BusinessApplication",
      operatingSystem: "Web",
      description:
        "Turn business credit-card statements into categorized, bookkeeping-ready data.",
    },
  },
  {
    slug: "pare-gala",
    name: "Pare Gala",
    status: "Android · web",
    url: "https://paregala.com",
    playUrl: "https://play.google.com/store/apps/details?id=app.paregala.twa",
    short: "shared grocery list for families",
    tagline: "A shared, real-time grocery list for families.",
    story:
      "Named after the classic Greek household emergency, “Pare gala!” (“Get milk!”). Shopping lists get messy with several editors and spotty store wifi, so this one syncs instantly and does nothing else.",
    tryLabel: "Open in browser",
    schema: {
      applicationCategory: "LifestyleApplication",
      operatingSystem: "Android, Web",
      description:
        "A shared, real-time grocery list app for families who want one simple place to manage shopping.",
    },
  },
  {
    slug: "honestcal",
    name: "HonestCal",
    status: "Android · web",
    url: "https://honestcal.com",
    playUrl: "https://play.google.com/store/apps/details?id=com.honestcal.app",
    short: "calorie estimates with confidence instead of fake precision",
    tagline:
      "Calorie and macro estimates from a photo, a description or a barcode, with confidence levels instead of fake precision.",
    story:
      "I lost 30 kilos and have kept it off for over six years. Consistency and honesty mattered far more than database precision, and I could not find a bloat-free app that worked that way, so I built one. It says what it assumed you ate and lets you correct it before logging.",
    tryLabel: "Open in browser",
    schema: {
      applicationCategory: "HealthApplication",
      operatingSystem: ["Web", "Android"],
      description:
        "AI calorie and macro tracking from meal photos, descriptions, and barcodes, with confidence levels instead of fake precision.",
    },
  },
  {
    slug: "chroma",
    name: "Chroma",
    status: "Beta · web",
    url: "https://chroma-game-beta.vercel.app",
    short: "family photos turned into colouring pages",
    tagline:
      "A paint-by-number colouring game that turns your own family photos into colouring pages.",
    story:
      "My daughter was hooked on a paint-by-number game, so I rebuilt it and added the one feature the original never had: colouring the people you love.",
    tryLabel: "Try the beta",
    schema: {
      applicationCategory: "GameApplication",
      operatingSystem: "Web",
      description:
        "A relaxing paint-by-number colouring game that can turn your own family photos into colouring pages.",
    },
  },
];

export const CARD_SORTER = apps[0];
export const labOnly = apps.filter((a) => a.slug !== "card-sorter");
