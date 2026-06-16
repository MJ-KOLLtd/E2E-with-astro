export interface HeroTrustStat {
  value: string;
  label: string;
}

export interface LotCardRow {
  label: string;
  value: string;
}

export interface WhyCard {
  icon: string;
  title: string;
  description: string;
}

export interface OverviewStat {
  value: string;
  label: string;
}

export interface LocationEntry {
  name: string;
  minutes: string;
}

export interface LocationCategory {
  title: string;
  entries: LocationEntry[];
}

export interface GalleryItem {
  category: string;
  src: string;
  label: string;
}

export interface GalleryTab {
  id: string;
  label: string;
}

export interface FloorPlan {
  title: string;
  src: string;
}

export interface SpecSubsection {
  heading?: string;
  items: string[];
}

export interface SpecSection {
  title: string;
  subsections: SpecSubsection[];
}

export interface LeadPoint {
  icon: string;
  text: string;
}

export interface Project {
  slug: string;
  name: string;
  shortName: string;
  brandLine: string;
  status: 'Now Available' | 'Coming Soon' | 'Sold Out';
  location: string;
  locationShort: string;
  developer: string;

  seo: {
    title: string;
    description: string;
    ogImage: string;
  };

  hero: {
    eyebrow: string;
    headline: string;
    subheadline: string;
    render: string;
    frameImage: string;
    frameAlt: string;
    tag: string;
    trustStats: HeroTrustStat[];
    lotCard: {
      title: string;
      rows: LotCardRow[];
    };
  };

  inquiry: {
    formId: string;
    headline: string;
    description: string;
    points: LeadPoint[];
    formTitle: string;
    subject: string;
  };

  about: {
    eyebrow: string;
    headline: string;
    paragraphs: string[];
    features: string[];
    image: string;
    imageAlt: string;
  };

  whyChoose: {
    eyebrow: string;
    headline: string;
    description: string;
    cards: WhyCard[];
  };

  overview: {
    eyebrow: string;
    headline: string;
    description: string;
    stats: OverviewStat[];
    amenities: string[];
    unitImages: { src: string; alt: string }[];
  };

  locationSection: {
    eyebrow: string;
    headline: string;
    description: string;
    categories: LocationCategory[];
    mapImage: string;
    mapAlt: string;
  };

  gallery: {
    eyebrow: string;
    headline: string;
    description: string;
    tabs: GalleryTab[];
    items: GalleryItem[];
  };

  floorPlans: {
    eyebrow: string;
    headline: string;
    description: string;
    plans: FloorPlan[];
  };

  specifications: {
    eyebrow: string;
    headline: string;
    description: string;
    sections: SpecSection[];
  };

  cta: {
    headline: string;
    description: string;
  };

  portfolio: {
    excerpt: string;
    meta: { value: string; label: string }[];
    cardImage: string;
    cardImageAlt: string;
  };

  jsonLd: {
    numberOfRooms: number;
    numberOfBathroomsTotal: number;
    floorSize: number;
    addressLocality: string;
  };
}