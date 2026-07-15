export const PHUKET_MICRO_NODES = [
  {
    title: 'Surin Beach: The Elite Standard',
    body: 'Known as the "St. Tropez of Phuket" — granite headlands, the island\'s highest concentration of ultra-luxury real estate, and water that clears to lake-like visibility from November through April.',
    href: '/phuket/surin-beach-guide',
    cta: 'Deep Dive: Surin Guide',
  },
  {
    title: 'Yamu Cape: The Eastern Secret',
    body: 'A quieter, easterly counterpoint with dramatic sunrise views and fine dining — a 15-minute drive across the island\'s narrowest point from Thalang\'s west-coast beaches.',
  },
  {
    title: 'Mai Khao: Environmental Purity',
    body: 'Part of Sirinat National Park and the island\'s longest beach — a sea turtle nesting site that remains largely untouched by mass-market development.',
  },
];

export const PHUKET_STATS = [
  { icon: 'flight_land', label: 'Distance to Airport', value: 'Phuket International Airport (HKT), 25 minutes, door-to-door.' },
  { icon: 'beach_access', label: 'Distance to Beaches', value: '5-10 minutes to Bang Tao, Surin, and Layan.' },
  { icon: 'shopping_cart', label: 'Dining & Retail', value: '3 minutes to Boat Avenue and Porto de Phuket.' },
];

export const PHUKET_LIST = [
  {
    slug: '2-bedroom-private-pool-villa-phuket',
    category: '2-Bedroom Specialty',
    title: 'The 2-Bedroom Villa, Located',
    teaser: 'Drive times, distances, and what a small-group stay in Thalang actually looks like day to day.',
    image: '/assets/media/villas/2-bedroom/IMG_8219.jpg',
  },
  {
    slug: 'best-villas-thalang-district',
    category: 'Location Spotlight',
    title: 'Thalang District, by the Numbers',
    teaser: 'Flat terrain, west-coast beaches, and 25 minutes to the airport — why the north is Phuket\'s strategic choice.',
    image: '/assets/media/villas/4-bedroom/IMG_8424.jpg',
  },
  {
    slug: 'private-pool-villas-phuket',
    category: 'Expert Guide',
    title: 'Choosing a Private Pool Villa',
    teaser: 'What actually separates a genuine private-pool estate from a directory listing with a nice photo.',
    image: null,
  },
  {
    slug: 'surin-beach-guide',
    category: "Thalang's Jewel",
    title: 'Surin Beach Guide',
    teaser: 'Millionaire\'s Row, the unmarked trail to Pansea Beach, and why the water stays swim-ready almost year-round.',
    image: '/assets/img/phi_phi_islands_luxury_boat_1776812721087.png',
  },
];

export const PHUKET_DATA = {
  '2-bedroom-private-pool-villa-phuket': {
    category: '2-Bedroom Specialty',
    title: 'The 2-Bedroom Villa,',
    italicTitle: 'Located.',
    heroImage: '/assets/media/villas/2-bedroom/IMG_8219.jpg',
    paragraphs: [
      'A [2-bedroom private pool villa](/villas/2-bedroom-private-pool) suits small groups of 4–6 precisely because it\'s purpose-built for intimacy — not a scaled-down version of something bigger. Two equal master suites, a full-length pool, and a kitchen designed to actually cook in.',
      'Staying in a hotel in Bang Tao or [Surin Beach](/phuket/surin-beach-guide) means buffet lines, elevator waits, and a pool shared with everyone else on the property. A villa in [Thalang District](/phuket/best-villas-thalang-district) gives you a genuinely private pool, 10 minutes from the same beach clubs — without the resort fee.',
      '[Booking direct with the owner](/booking) removes the 15–20% markup that aggregator and directory sites add on top of the nightly rate. Same villa, same dates, owner price.',
    ],
    comparisonTable: {
      title: 'The Practical Difference',
      columns: ['A Hotel Stay', 'The Sarayah 2-Bedroom'],
      rows: [
        ['Shared pool', 'Your own private pool'],
        ['Platform booking fees', 'Direct owner pricing'],
        ['Noise from common areas', 'Whisper-quiet nights'],
        ['Fixed breakfast times', 'Full kitchen & BBQ, on your schedule'],
      ],
    },
    relatedLinks: [
      { label: 'Best Pool Villas Phuket Guide', href: '/phuket/private-pool-villas-phuket' },
      { label: 'Why Thalang District?', href: '/phuket/best-villas-thalang-district' },
    ],
    ctaButtons: [
      { label: 'View Villa & Dates', href: '/villas/2-bedroom-private-pool' },
      { label: 'Request a Booking', href: '/booking' },
    ],
  },
  'best-villas-thalang-district': {
    category: 'Location Spotlight · Northern Phuket',
    title: 'Thalang District,',
    italicTitle: 'by the Numbers.',
    heroImage: '/assets/media/villas/4-bedroom/IMG_8424.jpg',
    paragraphs: [
      'Most Phuket visitors never get past the traffic of Kamala and Patong. Those who do find that [northern Phuket](/phuket) offers considerably more space, silence, and logistical efficiency than the south.',
      'Thalang is the district of choice for families and travelers seeking a Bang Tao-adjacent [pool villa](/villas) — flat terrain, larger plot sizes, and a quiet residential character that the steep southern cliffs simply cannot replicate.',
      'Sarayah chose Thalang for exactly this reason — a sanctuary rather than just a room, five minutes from [Boat Avenue\'s dining and retail](/blog/boat-avenue-luxury-center) and 25 minutes from Phuket International Airport (HKT).',
    ],
    stats: [
      { icon: 'beach_access', title: 'Pristine Beaches', body: 'Surin, Bang Tao, Mai Khao' },
      { icon: 'local_dining', title: 'Authentic Dining', body: 'Boat Avenue & local markets' },
      { icon: 'flight_land', title: 'Easy Access', body: '25 minutes to the airport' },
    ],
    relatedLinks: [
      { label: 'Compare Our Thalang Villas', href: '/villas' },
      { label: 'Surin Beach Insider Guide', href: '/phuket/surin-beach-guide' },
    ],
    ctaButtons: [{ label: 'Compare Our Thalang Villas', href: '/villas' }],
  },
  'private-pool-villas-phuket': {
    category: 'Expert Guide · 2026',
    title: 'Choosing a',
    italicTitle: 'Private Pool Villa.',
    heroImage: null,
    paragraphs: [
      'Searching "[private pool villas in Phuket](/villas)" tends to lead to directory sites — plenty of photos, very little transparency about what you\'re actually booking. "Private pool" is a filter setting on most platforms, not a commitment.',
      'Luxury here isn\'t about having the most listings. It\'s about having the right one. The pool that\'s actually yours. The kitchen designed to cook in. The perimeter wall that means no one can see you from the street.',
      '[Thalang District](/phuket/best-villas-thalang-district) puts you close to local culture while staying 10 minutes from Bang Tao and [Surin Beach](/phuket/surin-beach-guide) — the geographic balance that Sri Panwa and Cape Panwa, for all their drama, cannot offer.',
      'A true sanctuary means walking from bedroom to pool without being overlooked by a neighbour — worth verifying specifically, not assuming from photographs.',
    ],
    checklist: {
      title: 'Why Thalang Is the New Standard',
      items: [
        { title: 'Privacy', body: 'Actual walls, not just hedges.' },
        { title: 'Space', body: 'Full-sized villas with real gardens, not compact suites.' },
        { title: 'Value', body: 'Direct-to-owner booking saves the 15-20% platform markup.' },
      ],
    },
    villaTeasers: [
      { title: 'The 2-Bedroom Pool Villa', body: 'The intimate choice for couples or groups of 4-6, with a private pool and tropical gardens.', href: '/villas/2-bedroom-private-pool' },
      { title: 'The 4-Bedroom Grand Villa', body: 'A massive estate for up to 12 guests — the best group value in Thalang District.', href: '/villas/4-bedroom-villa' },
    ],
    relatedLinks: [
      { label: 'Surin Beach Guide', href: '/phuket/surin-beach-guide' },
      { label: '2BR Pool Villa Guide', href: '/phuket/2-bedroom-private-pool-villa-phuket' },
      { label: 'Compare All Villas', href: '/villas' },
    ],
    ctaButtons: [{ label: 'Compare All Villas', href: '/villas' }],
  },
  'surin-beach-guide': {
    category: "Thalang's Jewel",
    title: 'Surin',
    italicTitle: 'Beach Guide.',
    heroImage: '/assets/img/phi_phi_islands_luxury_boat_1776812721087.png',
    paragraphs: [
      '[Surin Beach](/phuket/surin-beach-guide) is Phuket\'s "Millionaire\'s Row" — the highest concentration of high-net-worth real estate in Southeast Asia, flanked by granite headlands that shield it from the southern coast\'s heavier swell.',
      'During high season (November–April), water clarity here rivals the Similan Islands. The beach itself remains undeveloped by mass-market resorts, preserved by the physical topography of the surrounding cliff-side ultra-luxury estates.',
      'Staying directly on the Surin hillside means steep climbs and limited garden space. Sarayah\'s [Thalang District location](/phuket/best-villas-thalang-district) gives you the same beach, 10 minutes away, with horizontal, expansive living rather than a cliff-side perch.',
      'Our recommended rhythm is the "Surin-Layan Cycle" — mornings at the high-energy Surin beach clubs, afternoons at the quieter, pine-fringed Layan Beach lagoon nearby. Home for a private BBQ by evening.',
    ],
    pullQuote: 'Surin is where Phuket\'s residents go to remember why they moved here.',
    cards: [
      { title: 'The Vibe', body: 'A sophisticated, calm "old money" feel — a world away from Patong\'s neon energy.' },
      { title: 'The Secret', body: 'A discreet forest trail north of the headland leads to Pansea Beach, home to the Amanpuri and The Surin resorts.' },
      { title: 'Gastronomy', body: 'From organic-coconut beach stalls to high-end fusion at Oriental Spoon, with sunset cocktails at the cliff-side bars.' },
    ],
    faqs: [
      { q: 'Is Surin Beach safe for swimming?', a: 'During high season (November-April) it\'s crystalline, almost lake-like. In the monsoon transition (May-October) it develops a surf break better suited to experienced swimmers — always check the beach flags.' },
      { q: 'How is the beach access from Sarayah?', a: 'A 10-minute drive inland gives a "tactical buffer" from beachfront congestion. Private luxury transfers are available, bypassing the limited beach parking.' },
      { q: 'Are there high-end beach clubs in Surin?', a: 'After a local environmental cleanup, larger clubs like Catch relocated to Bang Tao, 5 minutes away. Surin itself now favors smaller-scale, more authentic dining and loungers.' },
    ],
    ctaButtons: [{ label: 'Explore Villas', href: '/villas' }],
  },
};
