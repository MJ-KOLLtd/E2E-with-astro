import type { Project } from './types';

const nineHandelHomes: Project = {
  slug: '9-handel-homes',
  name: '9 Handel Homes',
  shortName: '9 Handel Homes',
  brandLine: '9 Handel Homes',
  status: 'Now Available',
  location: 'Don Jose Heights, Quezon City',
  locationShort: 'Don Jose Heights',
  developer: 'ESQUARE ESTATES',

  seo: {
    title: '9 Handel Homes | Japanese-Inspired Townhouses in Don Jose Heights Quezon City',
    description:
      'Discover 9 Handel Homes, an exclusive two-unit townhouse development in Don Jose Heights, Quezon City — Japanese-inspired architecture with modern contemporary design and minimalist elegance.',
    ogImage: '/images/9-handel-homes/page01-img1.jpeg',
  },

  hero: {
    eyebrow: '9 Handel Homes · Don Jose Heights',
    headline: 'Tranquility Meets Contemporary Living',
    subheadline:
      'An exclusive two-unit townhouse enclave inspired by Japanese architecture and modern contemporary design — light colors, clean lines, and refined minimalist elegance.',
    render: '/images/9-handel-homes/page01-img1.jpeg',
    frameImage: '/images/9-handel-homes/page01-img1.jpeg',
    frameAlt: '9 Handel Homes interior artist illustration',
    tag: 'Don Jose Heights, Quezon City',
    trustStats: [
      { value: '2', label: 'Exclusive units' },
      { value: '4', label: 'Bedrooms' },
      { value: '±222', label: 'sqm lot area' },
    ],
    lotCard: {
      title: '9 Handel Homes',
      rows: [
        { label: 'Location', value: 'Don Jose Heights' },
        { label: 'Units', value: '2 only' },
        { label: 'Developer', value: 'ESQUARE ESTATES' },
      ],
    },
  },

  inquiry: {
    formId: 'nine-handel-homes',
    headline: 'Experience 9 Handel Homes in person.',
    description:
      'Tell us your preferred schedule. A property specialist will arrange a private viewing and share full project details.',
    points: [
      { icon: 'fas fa-calendar-check', text: 'Private unit viewing by appointment' },
      { icon: 'fas fa-file-invoice', text: 'Complete project brochure and specifications' },
      { icon: 'fas fa-map-location-dot', text: 'Don Jose Heights, Quezon City location briefing' },
      { icon: 'fas fa-bolt', text: 'Prompt reply via call, Viber, or email' },
    ],
    formTitle: 'Inquire about 9 Handel Homes',
    subject: '9 Handel Homes — Landing Page Inquiry',
  },

  about: {
    eyebrow: 'About the Development',
    headline: 'Japanese-inspired elegance in the heart of Quezon City.',
    paragraphs: [
      'Welcome to 9 Handel Homes, the latest premium development by ESQUARE ESTATES, situated inside Don Jose Heights, Quezon City.',
      'This exclusive two-unit townhouse project is designed with inspiration from Japanese architecture and modern contemporary design, featuring light colors and minimalist aesthetics that create a harmonious blend of elegance and simplicity.',
    ],
    features: [
      'Premium development by ESQUARE ESTATES',
      'Located in Don Jose Heights, Quezon City',
      'Exclusive two-unit development',
      'Japanese-inspired architecture with modern contemporary design',
      'Underground facilities for electricity and auxiliary lines',
    ],
    image: '/images/9-handel-homes/page02-img1.jpeg',
    imageAlt: '9 Handel Homes development overview',
  },

  whyChoose: {
    eyebrow: 'Why Choose This Property',
    headline: 'What to expect from 9 Handel Homes',
    description:
      'Combining traditional Japanese elements with modern contemporary design for a sense of tranquility, sophistication, and everyday comfort.',
    cards: [
      {
        icon: 'fas fa-spa',
        title: 'Japanese-Inspired Architecture',
        description:
          'Combining traditional Japanese elements with modern contemporary design, featuring light colors and clean lines, fostering a sense of tranquility and sophistication.',
      },
      {
        icon: 'fas fa-gem',
        title: 'Exclusive Living',
        description: 'With only two units available, residents enjoy an exclusive, low-density community.',
      },
      {
        icon: 'fas fa-shield-halved',
        title: 'Modern Comfort and Security',
        description:
          'The project features state-of-the-art security systems and modern amenities to ensure the comfort and peace of mind of its residents.',
      },
      {
        icon: 'fas fa-vector-square',
        title: 'Spacious and Functional Layouts',
        description:
          'Each home offers expansive living spaces, ideal for growing families or professionals who desire room for both work and leisure.',
      },
    ],
  },

  overview: {
    eyebrow: 'Property Overview',
    headline: 'Unit specifications at a glance.',
    description:
      'Both Unit 1 and Unit 2 share identical specifications — a thoughtfully planned Japanese-inspired townhouse for discerning families.',
    stats: [
      { value: '±222', label: 'sqm lot area' },
      { value: '±153', label: 'sqm enclosed floor area' },
      { value: '4', label: 'bedrooms' },
      { value: '4', label: 'toilet & bath' },
      { value: '3', label: 'floors' },
      { value: '2', label: 'car carport' },
    ],
    amenities: ['Porch', 'Patio', 'Kitchen', 'Dining Area', 'Living Area', 'Balcony'],
    unitImages: [
      {
        src: '/images/9-handel-homes/page05-img1.jpeg',
        alt: '9 Handel Homes Unit 1 features and specifications',
      },
      {
        src: '/images/9-handel-homes/page06-img1.jpeg',
        alt: '9 Handel Homes Unit 2 features and specifications',
      },
    ],
  },

  locationSection: {
    eyebrow: 'Location',
    headline: 'Live at a prime location.',
    description:
      'Situated in a secure village within Don Jose, Quezon City, it provides easy access to major business districts, shopping centers, schools, and lifestyle hubs.',
    categories: [
      {
        title: 'Medical Institutions',
        entries: [
          { name: 'Metro North Medical Center Hospital', minutes: '7 mins' },
          { name: 'Veterans Memorial Medical Center', minutes: '23 mins' },
          { name: 'East Avenue Medical Center', minutes: '29 mins' },
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
      {
        title: 'Educational Institutions',
        entries: [
          { name: 'FEU Diliman', minutes: '23 mins' },
          { name: 'University of the Philippines Diliman', minutes: '30 mins' },
          { name: 'De La Salle Araneta', minutes: '53 mins' },
        ],
      },
    ],
    mapImage: '/images/9-handel-homes/page04-img1.jpeg',
    mapAlt: '9 Handel Homes location map showing nearby establishments',
  },

  gallery: {
    eyebrow: 'Gallery',
    headline: "Artist's illustrations.",
    description: 'Explore the interior spaces and thoughtfully furnished rooms of 9 Handel Homes.',
    tabs: [
      { id: 'all', label: 'All' },
      { id: 'dining', label: 'Dining' },
      { id: 'kitchen', label: 'Kitchen' },
      { id: 'carport', label: 'Carport & Porch' },
      { id: 'bedroom', label: 'Bedrooms' },
      { id: 'bath', label: 'Toilet & Bath' },
      { id: 'floor-plans', label: 'Floor Plans' },
    ],
    items: [
      { category: 'dining', src: '/images/9-handel-homes/page08-img1.jpeg', label: 'Fully furnished dining area' },
      { category: 'dining', src: '/images/9-handel-homes/page08-img2.jpeg', label: 'Dining area detail' },
      { category: 'kitchen', src: '/images/9-handel-homes/page09-img1.jpeg', label: 'Fully furnished kitchen' },
      { category: 'kitchen', src: '/images/9-handel-homes/page09-img2.jpeg', label: 'Kitchen detail' },
      { category: 'carport', src: '/images/9-handel-homes/page10-img1.jpeg', label: 'Carport and porch' },
      { category: 'carport', src: '/images/9-handel-homes/page10-img2.jpeg', label: 'Entry porch' },
      { category: 'bedroom', src: '/images/9-handel-homes/page11-img1.jpeg', label: 'Fully furnished master bedroom' },
      { category: 'bedroom', src: '/images/9-handel-homes/page11-img2.jpeg', label: 'Master bedroom detail' },
      { category: 'bedroom', src: '/images/9-handel-homes/page12-img1.jpeg', label: 'Fully furnished common bedroom' },
      { category: 'bedroom', src: '/images/9-handel-homes/page12-img2.jpeg', label: 'Common bedroom detail' },
      { category: 'bedroom', src: '/images/9-handel-homes/page13-img1.jpeg', label: 'Common bedroom alternate view' },
      { category: 'bedroom', src: '/images/9-handel-homes/page13-img2.jpeg', label: 'Common bedroom layout' },
      { category: 'bath', src: '/images/9-handel-homes/page14-img1.jpeg', label: 'Fully furnished toilet & bath' },
      { category: 'bath', src: '/images/9-handel-homes/page14-img2.jpeg', label: 'Toilet & bath detail' },
      { category: 'bath', src: '/images/9-handel-homes/page15-img1.jpeg', label: 'Master bedroom toilet & bath' },
      { category: 'bath', src: '/images/9-handel-homes/page15-img2.jpeg', label: 'Master T&B detail' },
      { category: 'floor-plans', src: '/images/9-handel-homes/render-page07.png', label: 'Unit 1 & 2 open layout floor plans' },
    ],
  },

  floorPlans: {
    eyebrow: 'Floor Plans',
    headline: 'Explore the layout.',
    description: 'Zoom and pan the open layout floor plan to review room dimensions and spatial flow for both units.',
    plans: [
      { title: 'Unit 1 & Unit 2 — Open Layout', src: '/images/9-handel-homes/render-page07.png' },
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
              'Living area, Dining area, Kitchen area, and Common bedroom 1 — Glazed floor tiles',
              'Common bedroom 1, Powder room and T&B — Non-skid floor tiles',
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
        title: 'Interior Partitions',
        subsections: [
          {
            items: [
              'Gypsum drywalls on metal framing system for all bedrooms',
              'CHB with wall tiles, stucco finish and WPC fluted panel accents for T&B\'s and Powder room',
              'Tempered glass shower partition for T&B',
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
        title: 'Concrete Structure',
        subsections: [
          {
            items: [
              'Reinforced concrete foundation, footing, column, beams and slab',
              'Waterproofed T&B slab and exterior firewall',
            ],
          },
        ],
      },
      {
        title: 'Counters and Cabinetry',
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
        title: 'Roofing and Ceiling',
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
        title: 'Exterior Walls',
        subsections: [
          {
            items: ['6" CHB walls, plastered and painted finish'],
          },
        ],
      },
      {
        title: 'Toilet Fixtures and Fittings',
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
              'Concealed type shower set with rainshower and telephone shower',
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
              'PVC sanitary pipes and fittings',
              'PPR water pipes and fittings',
            ],
          },
        ],
      },
      {
        title: 'Electrical',
        subsections: [
          {
            heading: 'Electrical System',
            items: [
              'Main panel board/circuit breakers',
              'PVC pipes conduits, flexible pipes',
              'Stranded copper electrical wires',
              'Telephone and cable system provision',
            ],
          },
          {
            heading: 'Electrical Fixtures',
            items: [
              'Wide series convenience outlets and switches',
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
    ],
  },

  cta: {
    headline: 'Where your success finds its sanctuary.',
    description: 'Only two units at 9 Handel Homes. Schedule your private viewing today.',
  },

  portfolio: {
    excerpt:
      'A Japanese-inspired two-unit townhouse with modern contemporary design, light minimalist aesthetics, and underground utility facilities.',
    meta: [
      { value: '±222 sqm', label: 'Lot area' },
      { value: '4', label: 'Bedrooms' },
      { value: '2', label: 'Units only' },
    ],
    cardImage: '/images/9-handel-homes/page01-img1.jpeg',
    cardImageAlt: '9 Handel Homes interior artist illustration',
  },

  jsonLd: {
    numberOfRooms: 4,
    numberOfBathroomsTotal: 4,
    floorSize: 221.67,
    addressLocality: 'Don Jose Heights, Quezon City',
  },
};

export default nineHandelHomes;