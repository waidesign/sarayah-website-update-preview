export const EXPERIENCES_LIST = [
  {
    slug: 'private-yacht-charters',
    category: 'Maritime Mastery',
    title: 'Private Yacht Charters',
    teaser: 'The Andaman from the deck of a meticulously maintained private vessel — gourmet catering and custom routes included.',
    image: '/assets/img/yacht_charter_phuket_1776802394443.png',
    cta: 'Explore Fleet',
  },
  {
    slug: 'in-villa-culinary',
    category: 'Culinary Sanctum',
    title: 'In-Villa Dining & Chefs',
    teaser: 'A private chef in your own social kitchen, specializing in Thai heritage cuisine and international fusion.',
    image: '/assets/img/in_villa_culinary_1776802359050.png',
    cta: 'View Menu',
  },
  {
    slug: 'wellness-spa',
    category: 'Holistic Rejuvenation',
    title: 'Wellness & Spa Sanctuary',
    teaser: 'Private spa treatments delivered to your poolside deck — Thai massage, sound-bath therapy, and yoga.',
    image: '/assets/img/wellness_spa_1776802376309.png',
    cta: 'Book a Ritual',
  },
  {
    slug: 'island-expeditions',
    category: 'Discovery',
    title: 'Island Expeditions',
    teaser: 'Phi Phi, James Bond Island, and the hidden Hongs of Phang Nga Bay — via tide-optimized, crowd-avoiding routes.',
    image: '/assets/img/phi_phi_islands_luxury_boat_1776812721087.png',
    cta: 'See Routes',
  },
  {
    slug: 'car-rentals',
    category: 'Mobility',
    title: 'Premium Car & Bike Rentals',
    teaser: 'Navigate Thalang with absolute autonomy — a fleet from scooters to a Mercedes, owner-managed and direct-booked.',
    image: '/assets/img/cape_panwa_vs_thalang_view_1776802429321.png',
    cta: 'Rent Direct',
  },
  {
    slug: 'taxi-transfers',
    category: 'Logistics',
    title: 'Private Transfers & Taxis',
    teaser: 'Seamless airport arrivals and island-wide chauffeured transit, with executive speed and local intelligence.',
    image: '/assets/media/villas/4-bedroom/IMG_8384.jpg',
    cta: 'Book Transfer',
  },
];

export const EXPERIENCES_DATA = {
  'private-yacht-charters': {
    category: 'Discovery',
    title: 'Sea',
    italicTitle: 'Expeditions.',
    heroImage: '/assets/img/yacht_charter_phuket_1776802394443.png',
    intro: 'The Andaman Sea is your backyard — from the karsts of Phang Nga Bay to the crystal waters of Phi Phi. We treat the sea as an extension of the villa, curating charters timed to avoid the crowds.',
    body: [
      {
        eyebrow: 'Maritime Strategy',
        title: 'Two marinas,',
        italicTitle: 'one flexible itinerary.',
        paragraphs: [
          'Thalang District sits equidistant from Ao Po Grand Marina (east coast, gateway to Phang Nga Bay) and Royal Phuket Marina (for the southern islands) — letting your itinerary pivot with the wind and tide.',
          'Every fleet is vetted for maintenance and crew professionalism, from 70ft luxury motor yachts to performance sailing catamarans. Villa-to-marina transfers, provisioning, and dietary needs are handled before you board.',
        ],
        image: '/assets/img/phi_phi_islands_luxury_boat_1776812721087.png',
        imageSide: 'right',
      },
    ],
    highlights: {
      title: 'Strategic Sea Nodes',
      items: [
        { title: 'The Emerald Node — Phang Nga Bay', body: 'Catamaran through shallow tidal caves, with a secret sunrise route to James Bond Island before the tour fleets arrive.' },
        { title: 'The Azure Node — Phi Phi Cluster', body: 'High-speed motor yachts, under 45 minutes transit, to the secluded coves of Phi Phi Don and Bamboo Island.' },
        { title: 'The Deep Node — Racha Islands', body: 'The best visibility for diving and snorkeling, with professional dive masters and high-end equipment.' },
      ],
    },
    featureTiles: [
      { icon: 'wine_bar', label: 'Curated Cellar' },
      { icon: 'skillet', label: 'Onboard Chef' },
      { icon: 'set_meal', label: 'Fresh Catch' },
      { icon: 'local_bar', label: 'Sunset Cocktails' },
    ],
    ctaLabel: 'Consult Our Captains',
  },
  'in-villa-culinary': {
    category: 'Gastronomy',
    title: 'In-Villa',
    italicTitle: 'Feasts.',
    heroImage: '/assets/img/in_villa_culinary_1776802359050.png',
    intro: 'Why go out when the best table in Phuket is on your own poolside deck? Our chefs bring Thai heat, flavor, and tradition directly to you.',
    body: [
      {
        eyebrow: 'Gourmet Sanctum',
        title: 'Hyper-local',
        italicTitle: 'gastronomy.',
        paragraphs: [
          'Our chefs source from local organic farms and the daily catch from Layan fishermen. Both villas feature professional-grade kitchens engineered for a chef to work poolside — full-service, from a WhatsApp menu consultation through cleanup.',
          'Breakfast is the foundation of your day\'s peace: the iconic Floating Breakfast in the pool, or a continental spread on the terrace.',
        ],
      },
    ],
    highlights: {
      title: 'Signature Menus',
      items: [
        { title: 'The Southern Thai Degustation', body: 'An 8-course menu including Geng Som (sour curry) and Moo Hong (slow-braised pork belly).' },
        { title: 'The Andaman Seafood BBQ', body: 'Live rock lobster, tiger prawns, and whole snapper, with house-made Nam Jim sauce.' },
        { title: 'The Global Grill', body: 'Wagyu beef MB9+, Australian lamb racks, and full vegetarian options.' },
      ],
    },
    featureTiles: [
      { icon: 'wb_sunny', label: 'The Vitality Spread' },
      { icon: 'ramen_dining', label: 'The Thalang Traditional' },
      { icon: 'bakery_dining', label: 'The Western Classic' },
    ],
    ctaLabel: 'Plan Your Menu',
  },
  'wellness-spa': {
    category: 'Rejuvenation',
    title: 'Private',
    italicTitle: 'Sanctuary.',
    heroImage: '/assets/img/wellness_spa_1776802376309.png',
    intro: 'Unwind where the jungle meets the sanctuary. Our wellness experiences bring the most skilled therapists in Phuket directly to your poolside deck.',
    body: [
      {
        eyebrow: 'Tailored for Stillness',
        title: 'Recovery,',
        italicTitle: 'on your own terms.',
        paragraphs: [
          'Whether you need recovery after a long flight or a daily ritual of relaxation, our concierge team can organize a series of treatments throughout your stay — total privacy, no travel required.',
        ],
      },
    ],
    highlights: {
      title: 'Treatments',
      items: [
        { title: 'Traditional Thai Massage', body: 'The ancient art of healing, focused on energy lines and deep stretching.' },
        { title: 'Aromatherapy & Oils', body: 'Relaxing full-body treatments using locally sourced essential oils.' },
      ],
    },
    ctaLabel: 'Book a Treatment',
  },
  'island-expeditions': {
    category: 'Southern Sanctuary',
    title: 'Island',
    italicTitle: 'Expeditions.',
    heroImage: '/assets/img/phi_phi_islands_luxury_boat_1776812721087.png',
    intro: 'The Andaman Sea changes with every tide. Sarayah vets private charter captains and uses speed-adjusted departure times and alternate routes through the Yao Islands to avoid herd tourism.',
    body: [
      {
        eyebrow: 'The Phi Phi Archipelago',
        title: 'Beyond',
        italicTitle: 'Maya Bay.',
        paragraphs: [
          'Private charters visit Maya Bay at serene light, then move to the secret nodes: Wang Long Bay\'s narrow hidden entrance, and Bamboo Island\'s shallow, shark-free nursery waters. Snorkeling at Hin Bida reef brings orange anemone fish and the occasional leopard shark.',
          'The Thalang Transit Advantage: departing from northern piers saves 30 minutes of transit versus the congested southern sea-lanes.',
        ],
        image: '/assets/img/phi_phi_islands_luxury_boat_1776812721087.png',
        imageSide: 'right',
      },
      {
        eyebrow: 'The Bay of Legends',
        title: 'Phang Nga &',
        italicTitle: 'the limestone labyrinth.',
        paragraphs: [
          'Beyond Koh Tapu (James Bond Island), the real treasure is the Hongs — hidden lagoons behind limestone walls, reachable only by sea canoe. Expeditions prioritize Koh Panak and Koh Hong with an expert canoeist guide.',
          'A culinary stop at the floating village of Koh Panyee brings an authentic sea-gypsy community and a private Thai feast with fish caught that morning.',
        ],
        image: '/assets/img/yacht_charter_phuket_1776802394443.png',
        imageSide: 'left',
      },
    ],
    highlights: {
      title: 'Phang Nga Highlights',
      items: [
        { title: 'Private Sea Canoeing', body: 'Secret Hong exploration through hidden limestone lagoons.' },
        { title: 'Koh Panyee Gourmet Lunch', body: 'A private Thai feast in an authentic floating fishing village.' },
        { title: 'Sunset over Limestone Karsts', body: 'Timed departures for the Andaman\'s golden hour.' },
      ],
    },
    faqs: [
      {
        q: 'What is the best time for Phi Phi tours?',
        a: 'Between November and April. James Bond Island in Phang Nga Bay, however, is protected and can be visited year-round, even during the monsoon season.',
      },
      {
        q: 'Are these group or private tours?',
        a: 'Sarayah Phuket only recommends private charters, to ensure exclusivity and flexibility. Most of our recommended operators allow fully custom itineraries.',
      },
    ],
    ctaLabel: 'Consult Our Team',
  },
  'car-rentals': {
    category: 'Mobility on Your Terms',
    title: 'Private',
    italicTitle: 'Fleet.',
    heroImage: '/assets/img/cape_panwa_vs_thalang_view_1776802429321.png',
    intro: 'The true luxury of Thalang isn\'t just the villa — it\'s the absolute autonomy to explore the Andaman coast at your own pace. Wider roads, manageable traffic, and scenic coastal routes start at your doorstep.',
    body: [
      {
        eyebrow: 'Driver\'s Intelligence',
        title: 'Local knowledge,',
        italicTitle: 'built in.',
        paragraphs: [
          'Northern Phuket roads are far less congested than Patong or Chalong. For the Boat Avenue Friday Night Market, arrive before 5pm or use the lot behind Villa Market. The scenic back-road from Layan to Nai Thon Beach is a local favorite.',
          'Thailand drives on the left — our automatic fleet (Corolla, BMW, Mercedes) eases the transition. Every vehicle is owner-managed and meticulously maintained, booked directly with our concierge team.',
        ],
      },
    ],
    highlights: {
      title: 'The Fleet',
      items: [
        { title: 'Premium Scooter Collection (125–150cc)', body: 'Ideal for the Layan and Bang Tao roads.', meta: '400 THB/day · 2,000 THB/week' },
        { title: '2012 Toyota Corolla', body: 'Compact enough for Porto de Phuket parking.', meta: '800 THB/day' },
        { title: '2009 BMW 525d (2.5L Diesel)', body: 'Built for the hills of Surin and Kamala.', meta: '1,500 THB/day' },
        { title: '2016 Mercedes C300', body: 'Panoramic sunroof, for events at The Pavilions or Anantara Layan.', meta: '3,000 THB/day' },
      ],
    },
    ctaLabel: 'Request via WhatsApp',
  },
  'taxi-transfers': {
    category: 'Seamless Connectivity',
    title: 'Taxi &',
    italicTitle: 'Transfers.',
    heroImage: '/assets/media/villas/4-bedroom/IMG_8384.jpg',
    intro: 'Arrive in the heart of Northern Phuket luxury without the stress. Our private transfer service connects you to the airport, beach clubs, and local attractions with professional, English-speaking drivers.',
    body: [
      {
        eyebrow: 'The Service',
        title: 'Three ways',
        italicTitle: 'we move you.',
        paragraphs: [
          'Airport Arrival — Phuket International (HKT) is 25 minutes from Sarayah; we meet you at arrivals with a personalized sign.',
          'Daily Disposal — rent a car and driver for 4, 8, or 12 hours, ideal for island hopping, restaurant tours, or Old Phuket Town shopping.',
          'Beach Club Hub — discounted flat rates to Catch, Café del Mar, and Maya beach clubs.',
        ],
      },
    ],
    highlights: {
      title: 'Standard Rates',
      items: [
        { title: 'Airport Transfer (HKT)', body: 'SUV / Premium Sedan', meta: '800–1,200 THB' },
        { title: 'Bang Tao / Laguna Area', body: 'Any vehicle', meta: '400 THB' },
        { title: 'Phuket Old Town', body: 'SUV', meta: '1,000 THB' },
        { title: 'Patong Beach', body: 'SUV', meta: '800 THB' },
      ],
    },
    ctaLabel: 'Book via WhatsApp',
  },
};
