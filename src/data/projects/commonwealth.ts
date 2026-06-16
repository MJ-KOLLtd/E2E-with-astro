import type { Project } from './types';

const commonwealth: Project = {
  slug: 'commonwealth',
  name: 'ESQUARE ESTATES Commonwealth',
  shortName: 'Commonwealth',
  brandLine: 'ESQUARE ESTATES · Commonwealth',
  status: 'Now Available',
  location: 'Ciudad Regina, Quezon City',
  locationShort: 'Ciudad Regina',
  developer: 'ESQUARE ESTATES',

  seo: {
    title: 'ESQUARE ESTATES Commonwealth | Exclusive Townhouses in Ciudad Regina Quezon City',
    description:
      'Discover ESQUARE ESTATES Commonwealth, a limited two-unit townhouse development in Ciudad Regina, Quezon City, offering contemporary architecture, privacy, and premium living.',
    ogImage: '/images/commonwealth/page01-img1.jpeg',
  },

  hero: {
    eyebrow: 'ESQUARE ESTATES · Commonwealth',
    headline: 'Exclusivity Redefined',
    subheadline:
      'A private two-unit contemporary townhouse enclave crafted for modern families seeking elegance, privacy, and enduring value.',
    render: '/images/commonwealth/page01-img1.jpeg',
    frameImage: '/images/commonwealth/page01-img1.jpeg',
    frameAlt: 'ESQUARE ESTATES Commonwealth exterior rendering',
    tag: 'Ciudad Regina, Quezon City',
    trustStats: [
      { value: '2', label: 'Exclusive units' },
      { value: '4', label: 'Bedrooms' },
      { value: '±245', label: 'sqm gross floor area' },
    ],
    lotCard: {
      title: 'ESQUARE ESTATES Commonwealth',
      rows: [
        { label: 'Location', value: 'Ciudad Regina' },
        { label: 'Units', value: '2 only' },
        { label: 'Developer', value: 'ESQUARE ESTATES' },
      ],
    },
  },

  inquiry: {
    formId: 'commonwealth',
    headline: 'Experience ESQUARE ESTATES Commonwealth in person.',
    description:
      'Tell us your preferred schedule. A property specialist will arrange a private viewing and share full project details.',
    points: [
      { icon: 'fas fa-calendar-check', text: 'Private unit viewing by appointment' },
      { icon: 'fas fa-file-invoice', text: 'Complete project brochure and specifications' },
      { icon: 'fas fa-map-location-dot', text: 'Ciudad Regina, Quezon City location briefing' },
      { icon: 'fas fa-bolt', text: 'Prompt reply via call, Viber, or email' },
    ],
    formTitle: 'Inquire about Commonwealth',
    subject: 'ESQUARE ESTATES Commonwealth — Landing Page Inquiry',
  },

  about: {
    eyebrow: 'About the Development',
    headline: 'A sanctuary of refined contemporary living.',
    paragraphs: [
      'Welcome to ESQUARE ESTATES Commonwealth, the latest premium development by ESQUARE ESTATES, nestled in the heart of Ciudad Regina, Quezon City.',
      'This exclusive two-unit enclave features modern contemporary townhouses, thoughtfully designed with a sleek minimalist aesthetic and a refined palette of light hues. The result is a harmonious blend of elegance and simplicity, creating a sophisticated yet welcoming living space tailored for modern lifestyles.',
    ],
    features: [
      'Premium development by ESQUARE ESTATES',
      'Located in Ciudad Regina, Quezon City',
      'Exclusive two-unit development',
      'Modern contemporary architecture with minimalist aesthetic',
      'Underground facilities for electricity and auxiliary lines',
    ],
    image: '/images/commonwealth/page02-img1.jpeg',
    imageAlt: 'ESQUARE ESTATES Commonwealth contemporary townhouse rendering',
  },

  whyChoose: {
    eyebrow: 'Why Choose This Property',
    headline: 'What to expect from ESQUARE ESTATES Commonwealth',
    description:
      'A sleek, smart, and sustainable home that seamlessly blends elegance, innovation, and comfort for a timeless living experience.',
    cards: [
      {
        icon: 'fas fa-building',
        title: 'Modern Contemporary Architecture',
        description:
          'Sleek minimalist design with a refined palette of light hues — a harmonious blend of elegance and simplicity for modern lifestyles.',
      },
      {
        icon: 'fas fa-gem',
        title: 'Exclusive Living',
        description: 'With only two units available, residents enjoy an exclusive, low-density community.',
      },
      {
        icon: 'fas fa-location-dot',
        title: 'Prime Location',
        description:
          'Situated in a secure village within Ciudad Regina, Quezon City, it provides easy access to major establishments in the metro.',
      },
      {
        icon: 'fas fa-shield-halved',
        title: 'Modern Comfort and Security',
        description:
          'Located within a private village, the project ensures a secure and serene environment, perfect for those seeking a balance between privacy and urban convenience.',
      },
      {
        icon: 'fas fa-vector-square',
        title: 'Spacious Functional Layouts',
        description:
          '±245.25 sqm total gross floor area across two floors — four bedrooms, four toilets and baths, and a two-car carport designed for everyday living.',
      },
    ],
  },

  overview: {
    eyebrow: 'Property Overview',
    headline: 'Unit specifications at a glance.',
    description:
      'Both Unit 1 and Unit 2 share identical specifications — a thoughtfully planned contemporary townhouse for discerning families.',
    stats: [
      { value: '±150', label: 'sqm lot area' },
      { value: '±245.25', label: 'sqm gross floor area' },
      { value: '4', label: 'bedrooms' },
      { value: '4', label: 'toilet & bath' },
      { value: '2', label: 'floors' },
      { value: '2', label: 'car carport' },
    ],
    amenities: ['Porch', 'Patio', 'Kitchen', 'Dining Area', 'Living Area', 'Balcony'],
    unitImages: [
      {
        src: '/images/commonwealth/page05-img1.jpeg',
        alt: 'ESQUARE ESTATES Commonwealth Unit 1 features and specifications',
      },
      {
        src: '/images/commonwealth/page06-img1.jpeg',
        alt: 'ESQUARE ESTATES Commonwealth Unit 2 features and specifications',
      },
    ],
  },

  locationSection: {
    eyebrow: 'Location',
    headline: 'Secure and private. Connected to the metro.',
    description:
      'Located within a private village, the project ensures a secure and serene environment, perfect for those seeking a balance between privacy and urban convenience.',
    categories: [
      {
        title: 'Educational Institutions',
        entries: [
          { name: 'Diliman Preparatory School (Commonwealth Campus)', minutes: '32 mins' },
          { name: 'School of the Holy Spirit, Quezon City', minutes: '44 mins' },
          { name: 'De La Salle Araneta', minutes: '53 mins' },
        ],
      },
      {
        title: 'Medical Institutions',
        entries: [
          { name: 'New Era General Hospital', minutes: '60 mins' },
          { name: 'Diliman Doctors Hospital', minutes: '44 mins' },
          { name: 'FEU-NRMF Medical Center', minutes: '60 mins' },
        ],
      },
      {
        title: 'Commercial Institutions',
        entries: [
          { name: 'Ever Gotesco', minutes: '21 mins' },
          { name: 'UP Town Center', minutes: '25 mins' },
          { name: 'SM North', minutes: '31 mins' },
          { name: 'SM Fairview', minutes: '39 mins' },
        ],
      },
    ],
    mapImage: '/images/commonwealth/page04-img1.jpeg',
    mapAlt: 'ESQUARE ESTATES Commonwealth location map showing nearby establishments',
  },

  gallery: {
    eyebrow: 'Gallery',
    headline: "Artist's illustrations.",
    description: 'Explore the exterior, outdoor spaces, and architectural details of ESQUARE ESTATES Commonwealth.',
    tabs: [
      { id: 'all', label: 'All' },
      { id: 'exterior', label: 'Exterior' },
      { id: 'porch', label: 'Porch & Linear Garden' },
      { id: 'carport', label: 'Carport' },
      { id: 'patio', label: 'Patio' },
      { id: 'water-tank', label: 'Water Tank' },
      { id: 'floor-plans', label: 'Floor Plans' },
    ],
    items: [
      { category: 'exterior', src: '/images/commonwealth/page01-img1.jpeg', label: 'Exterior rendering' },
      { category: 'exterior', src: '/images/commonwealth/page02-img1.jpeg', label: 'Contemporary façade' },
      { category: 'exterior', src: '/images/commonwealth/page03-img1.jpeg', label: 'Architectural detail' },
      { category: 'exterior', src: '/images/commonwealth/page03-img2.jpeg', label: 'Street perspective' },
      { category: 'porch', src: '/images/commonwealth/page10-img1.jpeg', label: 'Porch & linear garden' },
      { category: 'carport', src: '/images/commonwealth/page11-img1.jpeg', label: 'Carport' },
      { category: 'patio', src: '/images/commonwealth/page12-img1.jpeg', label: 'Patio' },
      { category: 'water-tank', src: '/images/commonwealth/page13-img1.jpeg', label: 'Water tank' },
      { category: 'floor-plans', src: '/images/commonwealth/render-page07.png', label: 'Unit 1 & 2 floor plans' },
      { category: 'floor-plans', src: '/images/commonwealth/render-page08.png', label: 'Unit 1 Option 2 specifications' },
      { category: 'floor-plans', src: '/images/commonwealth/render-page09.png', label: 'Unit 1 Option 2 floor plan' },
    ],
  },

  floorPlans: {
    eyebrow: 'Floor Plans',
    headline: 'Explore the layout.',
    description: 'Zoom and pan each floor plan to review room dimensions and spatial flow.',
    plans: [
      { title: 'Unit 1 & Unit 2 — Ground & Second Floor', src: '/images/commonwealth/render-page07.png' },
      { title: 'Unit 1 (Option 2) — Specifications', src: '/images/commonwealth/render-page08.png' },
      { title: 'Unit 1 (Option 2) — Floor Plan', src: '/images/commonwealth/render-page09.png' },
    ],
  },

  specifications: {
    eyebrow: 'Material Specifications',
    headline: 'Craftsmanship in every detail.',
    description: 'Premium finishes and systems specified for enduring quality and modern comfort.',
    sections: [
      {
        title: 'Floor Finishes',
        subsections: [
          {
            heading: 'Ground Floor',
            items: [
              "Living, Dining, Kitchen, Bedroom 1 & Maid's room — Glazed floor tiles",
              "Bedroom 1 & Maid's room T&B, Powder Room, Porch, Patio, & Driveway — Non-skid floor tiles",
              'Carport, Porch and Service area — Pebble washout',
              'Patio — Concrete pavers',
            ],
          },
          {
            heading: 'Second Floor',
            items: [
              'Master bedroom, and Common bedrooms 2&3 — Wood plank floor tiles',
              'Balcony, Master, and Common T&B — Non-skid floor tiles',
            ],
          },
        ],
      },
      {
        title: 'Structural System',
        subsections: [
          {
            items: [
              'Reinforced concrete foundation, footing, column, beams and slab',
              'Waterproofed T&B slab and exterior firewall',
              '6" CHB walls, plastered and painted finish (exterior walls)',
              'Gypsum drywalls on metal framing system for all bedrooms',
              'CHB with wall tiles, stucco finish and WPC fluted panel accents for T&B\'s and Powder room',
              'Tempered glass shower partition for Master T&B',
            ],
          },
        ],
      },
      {
        title: 'Doors and Windows',
        subsections: [
          {
            items: [
              'Steel door with smart lock for main entrance',
              'Glass swing door for service area and balcony',
              'HDF door for bedrooms',
              'PVC door for T&B and powder room',
              'Sliding windows, casement windows, awning windows and fixed windows',
            ],
          },
        ],
      },
      {
        title: 'Cabinetry',
        subsections: [
          {
            items: [
              'Modular kitchen cabinet with cooktop and rangehood',
              'Quartz stone kitchen countertop with stainless kitchen sink',
              'T&B vanity countertop with basin type lavatory',
              'Laminated T&B vanity cabinets',
              'Laminated closets',
            ],
          },
        ],
      },
      {
        title: 'Paint Finishes',
        subsections: [
          {
            items: [
              'Latex paints for concrete walls',
              'Epoxy primer for roof frames',
              'Flat latex for ceiling',
              'Automotive lacquer paint finish for stair railings',
              'Stainless mirror finish for balcony railings',
            ],
          },
        ],
      },
      {
        title: 'Stair Finishes',
        subsections: [
          {
            items: [
              'Wooden planks on concrete stair',
              'Solid wood handrails',
              'Steel tubular posts and rails/balusters',
            ],
          },
        ],
      },
      {
        title: 'Roofing',
        subsections: [
          {
            items: [
              'Pre-painted long span roofing on steel frame',
              'PE foam roofing insulation',
              'Fiber cement board on metal framing for roofing eaves, fascia, and T&B ceiling',
              'Gypsum board on metal framing for ground and second floor interior ceiling',
            ],
          },
        ],
      },
      {
        title: 'Utilities',
        subsections: [
          {
            items: [
              'Ready for Meralco power connection',
              'Ready for water connection',
              'Ready for telephone/internet cable connection',
              'Individual septic tank',
            ],
          },
        ],
      },
      {
        title: 'Electrical',
        subsections: [
          {
            items: [
              'Main panel board/circuit breakers',
              'PVC pipes conduits, flexible pipes',
              'Stranded copper electrical wires',
              'Telephone and cable system provision',
              'Wide series convenience outlets',
              'Centerlights and accent lights provision',
              'Pinlights casing included, no bulb',
              'Split type ACU provision',
              'Water heater provision',
              'Smart home system',
              'Solar power ready',
            ],
          },
        ],
      },
      {
        title: 'Plumbing',
        subsections: [
          {
            heading: 'All Toilets and Baths',
            items: ['One piece type water closet'],
          },
          {
            heading: 'Powder Room',
            items: ['Wall-mounted lavatory with half pedestal'],
          },
          {
            heading: 'Master T&B, Common and Bedroom T&B',
            items: [
              'Basin type lavatory on vanity cabinet',
              'Shower set with rainshower and telephone shower',
            ],
          },
          {
            heading: 'Sanitary / Plumbing System',
            items: ['PVC sanitary pipes and fittings', 'PPR water pipes and fittings'],
          },
        ],
      },
    ],
  },

  cta: {
    headline: 'Where your success finds its sanctuary.',
    description: 'Only two units. Schedule a viewing at ESQUARE ESTATES Commonwealth today.',
  },

  portfolio: {
    excerpt:
      'A private two-unit contemporary townhouse enclave with modern architecture, minimalist aesthetic, and underground utility facilities.',
    meta: [
      { value: '±245 sqm', label: 'Gross floor area' },
      { value: '2 units', label: 'Exclusive' },
    ],
    cardImage: '/images/commonwealth/page01-img1.jpeg',
    cardImageAlt: 'ESQUARE ESTATES Commonwealth exterior rendering',
  },

  jsonLd: {
    numberOfRooms: 4,
    numberOfBathroomsTotal: 4,
    floorSize: 245.25,
    addressLocality: 'Ciudad Regina, Quezon City',
  },
};

export default commonwealth;