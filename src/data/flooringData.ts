export interface FloorFinish {
  id: string;
  name: string;
  category: string;
  price: number;
  fit: number;
  description: string;
  woodSpecies: string;
  finishType: string;
  warrantyYears: number;
  swatchColor: string;
  swatchTexture: string;
  roomImage: string;
  alt: string;
  textureDetails: string;
}

export const finishes: FloorFinish[] = [
  {
    id: 'oak-natural',
    name: 'Natural Oak',
    category: 'Solid & Engineered Timber',
    price: 62,
    fit: 24,
    description: 'European white oak with subtle honey warmth, light wire-brushing, and invisible ultra-matt oil finish.',
    woodSpecies: 'Quercus robur (French / Croatian Oak)',
    finishType: 'Bona Natural Matt Hardwax Oil',
    warrantyYears: 25,
    swatchColor: '#d6b88d',
    swatchTexture: 'linear-gradient(135deg, #d6b88d 0%, #c4a173 50%, #b89363 100%)',
    // Editorial room with natural honey-blonde oak planks
    roomImage: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=85',
    alt: 'Living room with Natural Oak wide plank flooring, bathed in soft afternoon daylight',
    textureDetails: '190mm plank width, 14/3mm prime grade, brushed surface with micro-bevels'
  },
  {
    id: 'oak-smoked',
    name: 'Smoked Oak',
    category: 'Engineered Wood',
    price: 74,
    fit: 24,
    description: 'Core-fumed oak with deep caramel and umber hues, bringing architectural depth without heavy staining.',
    woodSpecies: 'Fumed European Oak',
    finishType: 'Deep Fumed & Osmo Polyx Raw Oil',
    warrantyYears: 25,
    swatchColor: '#8a6e54',
    swatchTexture: 'linear-gradient(135deg, #91755a 0%, #76583e 50%, #5d422a 100%)',
    // Editorial room with smoky rich oak floor
    roomImage: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1600&q=85',
    alt: 'Living room interior featuring Smoked Oak engineered floor with serene neutral furniture',
    textureDetails: '220mm wide architectural boards, double fumed to core, tactile open grain'
  },
  {
    id: 'walnut',
    name: 'American Walnut',
    category: 'Solid & Engineered Hardwood',
    price: 96,
    fit: 24,
    description: 'Rich chocolate and dark mocha tones with dramatic auburn grain swirls. Unmatched quiet luxury.',
    woodSpecies: 'Juglans nigra (North American Black Walnut)',
    finishType: 'Satin Silk UV Cured Lacquer',
    warrantyYears: 25,
    swatchColor: '#5c3d28',
    swatchTexture: 'linear-gradient(135deg, #6d4932 0%, #4f3320 50%, #3a2213 100%)',
    // Architectural interior with luxurious dark walnut floor
    roomImage: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1600&q=85',
    alt: 'Serene living room with rich American Walnut flooring and warm ambient lighting',
    textureDetails: 'Select walnut grade, deep chocolate sapwood balance, velvet touch smooth finish'
  },
  {
    id: 'herringbone',
    name: 'Oak Herringbone',
    category: 'Parquet & Geometric',
    price: 88,
    fit: 38,
    description: 'Precision cut 90-degree parquet blocks laid in classic herringbone. Timeless period elegance.',
    woodSpecies: 'Select European Oak Blocks',
    finishType: 'Brushed & Extra-Matt Protective Lacquer',
    warrantyYears: 25,
    swatchColor: '#bfa07a',
    swatchTexture: 'repeating-linear-gradient(45deg, #bfa07a, #bfa07a 10px, #a88a64 10px, #a88a64 20px)',
    // Heritage room with classic herringbone floor
    roomImage: 'https://images.unsplash.com/photo-1581858726788-75bc0f6a952d?auto=format&fit=crop&w=1600&q=85',
    alt: 'Elegantly proportioned room featuring Oak Herringbone parquet floor with crisp block geometry',
    textureDetails: '600x120mm bespoke block size, 4-side micro-bevel, requires double adhesive trowel'
  },
  {
    id: 'lvt-stone',
    name: 'LVT Stone Effect',
    category: 'Luxury Vinyl Tile',
    price: 38,
    fit: 22,
    description: 'Ultra-durable, waterproof limestone effect tile with acoustic backing and authentic mineral texture.',
    woodSpecies: '0.55mm High-Performance Ceramic Wear Layer',
    finishType: 'Embossed-in-Register Honed Stone Finish',
    warrantyYears: 20,
    swatchColor: '#bfb8ad',
    swatchTexture: 'radial-gradient(circle, #cac3b9 20%, #b2aba0 80%)',
    // Bright contemporary kitchen/living room with stone floor
    roomImage: 'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=1600&q=85',
    alt: 'Bright open-plan living room with warm Honed Stone LVT tile floor, clean and understated',
    textureDetails: '914x457mm large format tiles, 100% waterproof, suitable for underfloor heating'
  }
];

export interface FloorTypeItem {
  id: string;
  name: string;
  tagline: string;
  description: string;
  rightFor: string[];
  notFor: string[];
  sanding: string;
  ufhReady: boolean;
  warranty: string;
  priceGuide: string;
  image: string;
}

export const floorTypes: FloorTypeItem[] = [
  {
    id: 'solid-wood',
    name: 'Solid Wood',
    tagline: 'One piece of timber throughout',
    description: 'One piece of timber throughout. Can be sanded and refinished many times, so it outlives everything else. Not suitable over underfloor heating or in bathrooms, and it will move with humidity.',
    rightFor: ['Living rooms', 'Dining rooms', 'Period Victorian hallways', 'Homes requiring heirloom longevity'],
    notFor: ['Underfloor heating', 'Bathrooms & wetrooms', 'Damp cellars or direct concrete without DPM'],
    sanding: 'Can be sanded 5–8 times over a lifetime',
    ufhReady: false,
    warranty: '25-Year wear guarantee',
    priceGuide: '£62/m² supply · £24/m² fit',
    image: 'https://images.unsplash.com/photo-1546484396-fb3fc6f95f98?auto=format&fit=crop&w=800&q=85'
  },
  {
    id: 'engineered-wood',
    name: 'Engineered Wood',
    tagline: 'Real timber top layer on plywood core',
    description: 'A real wood top layer on a plywood core. Stable over underfloor heating, sandable two or three times depending on the wear layer. The right answer for most modern homes.',
    rightFor: ['Throughout ground floors', 'Open-plan extensions', 'Underfloor heating systems', 'Apartments'],
    notFor: ['Wet rooms and steam rooms', 'Direct unventilated damp crawl spaces'],
    sanding: 'Can be sanded 2–3 times (4mm wear layer)',
    ufhReady: true,
    warranty: '25-Year wear guarantee',
    priceGuide: '£52–£74/m² supply · £24/m² fit',
    image: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=800&q=85'
  },
  {
    id: 'lvt',
    name: 'LVT (Luxury Vinyl Tile)',
    tagline: 'Waterproof, warm, and hyper-realistic',
    description: 'Luxury vinyl tile. Waterproof, warm underfoot, and genuinely convincing now in a way it was not ten years ago. Kitchens, bathrooms and utility rooms.',
    rightFor: ['Kitchens & dining areas', 'Bathrooms & utility rooms', 'Busy households with dogs & kids', 'Rental portfolios'],
    notFor: ['Purists seeking real botanical aging and hand-sanded timber patina'],
    sanding: 'No sanding required (scratch-resistant wear layer)',
    ufhReady: true,
    warranty: '20-Year domestic guarantee',
    priceGuide: '£38–£42/m² supply · £22–£28/m² fit',
    image: 'https://images.unsplash.com/photo-1556912172-45b7abe8b7e1?auto=format&fit=crop&w=800&q=85'
  },
  {
    id: 'laminate',
    name: 'Laminate',
    tagline: 'Honest, high-density budget resilience',
    description: 'The budget option, and there is no shame in it for a rental or a spare room. Not waterproof whatever the packaging says, and it cannot be repaired, only replaced.',
    rightFor: ['Rental properties', 'Spare bedrooms', 'Home study spaces', 'Cost-sensitive makeovers'],
    notFor: ['Bathrooms', 'Laundry rooms', 'Expectations of 30+ year restorative sanding'],
    sanding: 'Cannot be sanded; replaceable click boards',
    ufhReady: true,
    warranty: '10-Year wear guarantee',
    priceGuide: '£16/m² supply · £18/m² fit',
    image: 'https://images.unsplash.com/photo-1588854337221-4cf9fa96059c?auto=format&fit=crop&w=800&q=85'
  },
  {
    id: 'parquet-herringbone',
    name: 'Parquet and Herringbone',
    tagline: 'Geometric architectural craftsmanship',
    description: 'Blocks laid in a pattern. Twice the fitting labour of a plank floor, which is why the fitting price is higher. Worth it in a room you will look at for twenty years.',
    rightFor: ['Living rooms you love looking at', 'Formal entrance halls', 'Heritage renovations', 'Design-led spaces'],
    notFor: ['Rushed turnaround times (requires careful block setting and subfloor prep)'],
    sanding: 'Can be sanded 2–3 times (engineered blocks)',
    ufhReady: true,
    warranty: '25-Year wear guarantee',
    priceGuide: '£88/m² supply · £38/m² fit',
    image: 'https://images.unsplash.com/photo-1581858726788-75bc0f6a952d?auto=format&fit=crop&w=800&q=85'
  },
  {
    id: 'carpet',
    name: 'Carpet',
    tagline: 'Natural wool blends for acoustic calm',
    description: 'Wool and wool-blend, 80/20 and 50/50. Still the right choice for bedrooms and stairs, and we will say so even though it is the cheapest thing we sell.',
    rightFor: ['Bedrooms', 'Stairs and staircases', 'First-floor landings', 'Acoustic softening'],
    notFor: ['Kitchens', 'Boot rooms', 'Dining rooms where food spills are frequent'],
    sanding: 'Deep pile maintenance & wool-safe dry cleaning',
    ufhReady: true,
    warranty: '10–15 Year manufacturer guarantee',
    priceGuide: '£34/m² supply · £14/m² fit',
    image: 'https://images.unsplash.com/photo-1600121848594-d8644e57abab?auto=format&fit=crop&w=800&q=85'
  }
];

export interface PriceRow {
  product: string;
  category: string;
  supply: number;
  fitting: number;
  total: number;
  thickness: string;
  badge?: string;
}

export const priceList: PriceRow[] = [
  { product: 'Laminate, 8mm', category: 'Laminate', supply: 16, fitting: 18, total: 34, thickness: '8mm AC4 Rating', badge: 'Budget Friendly' },
  { product: 'LVT, click', category: 'LVT', supply: 38, fitting: 22, total: 60, thickness: '4.5mm Rigid Core', badge: 'Waterproof' },
  { product: 'LVT, glue down', category: 'LVT', supply: 42, fitting: 28, total: 70, thickness: '2.5mm Dry Back', badge: 'Commercial Grade' },
  { product: 'Engineered oak, 14mm', category: 'Engineered', supply: 52, fitting: 24, total: 76, thickness: '14/3mm European Oak', badge: 'UFH Ideal' },
  { product: 'Natural oak, solid', category: 'Solid Wood', supply: 62, fitting: 24, total: 86, thickness: '18mm Solid Plank', badge: 'Lifetime Sandable' },
  { product: 'Smoked oak, engineered', category: 'Engineered', supply: 74, fitting: 24, total: 98, thickness: '15/4mm Fumed Oak', badge: 'Architectural' },
  { product: 'Oak herringbone', category: 'Parquet', supply: 88, fitting: 38, total: 126, thickness: '15/4mm Precision Blocks', badge: 'Statement Craft' },
  { product: 'American walnut', category: 'Solid & Hardwood', supply: 96, fitting: 24, total: 120, thickness: '18/4mm Prime Walnut', badge: 'Quiet Luxury' },
  { product: 'Wool carpet, 80/20', category: 'Carpet', supply: 34, fitting: 14, total: 48, thickness: '45oz British Wool Blend', badge: 'Acoustic Calm' }
];

export const priceExtras = [
  { item: 'Underlay', cost: '£6 to £14/m²', note: 'Depending on acoustic & UFH thermal tog requirements' },
  { item: 'Self-levelling compound', cost: '£18/m²', note: 'Where required after survey assessment' },
  { item: 'Uplift & disposal of existing floor', cost: '£8/m²', note: 'Licensed ethical trade disposal & recycling' },
  { item: 'Beading & solid thresholds', cost: 'From £12/m', note: 'Colour-matched solid oak or aluminium profiles' },
  { item: 'Furniture moving', cost: 'Free', note: 'Carefully moved and replaced room-by-room' }
];

export const grainStripImages = [
  {
    id: 1,
    title: 'French Oak Medullary Rays',
    caption: 'Tight quarter-sawn grain with characteristic silver medullary rays',
    image: 'https://images.unsplash.com/photo-1546484396-fb3fc6f95f98?auto=format&fit=crop&w=700&q=85',
    speed: 0.15
  },
  {
    id: 2,
    title: 'American Black Walnut Swirl',
    caption: 'Subtle mineral streaks and swirling cathedral heartwood',
    image: 'https://images.unsplash.com/photo-1549488344-1f9b8d2bd1f3?auto=format&fit=crop&w=700&q=85',
    speed: 0.28
  },
  {
    id: 3,
    title: 'Fumed Smoked Oak Core',
    caption: 'Deep reactive tannin fuming that runs entirely through the board',
    image: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=700&q=85',
    speed: 0.2
  },
  {
    id: 4,
    title: 'Herringbone Block Endgrain',
    caption: 'Precision milled 90-degree tongue-and-groove joint profile',
    image: 'https://images.unsplash.com/photo-1538688525198-9b88f6f53126?auto=format&fit=crop&w=700&q=85',
    speed: 0.32
  },
  {
    id: 5,
    title: 'Kiln-Dried European Oak Rings',
    caption: 'Dried to 8% moisture equilibrium for East Midlands climate stability',
    image: 'https://images.unsplash.com/photo-1588854337221-4cf9fa96059c?auto=format&fit=crop&w=700&q=85',
    speed: 0.18
  }
];

export const fittingSteps = [
  {
    number: '01',
    title: 'Free Survey',
    duration: 'About 40 minutes',
    description: 'We measure, take moisture readings in three places, check subfloor level, and discuss which product actually suits the room. No pushy sales pitch.'
  },
  {
    number: '02',
    title: 'Quote',
    duration: 'Within 2 working days',
    description: 'Itemised within two working days: supply, fitting, underlay, prep, beading and disposal as separate lines. No hidden surprises.'
  },
  {
    number: '03',
    title: 'Acclimatisation',
    duration: '7 Days in room',
    description: 'Wood is delivered and left in the room for seven days before fitting. Skipping this is why floors cup and gap, and any fitter who offers to skip it is telling you something.'
  },
  {
    number: '04',
    title: 'Fitting',
    duration: '1 to 3 days for most homes',
    description: 'We work room by room so you keep the use of the house. Clean cuts, expansion gaps properly gauged, door undercuts included.'
  },
  {
    number: '05',
    title: 'Finish and Clean',
    duration: 'Final handover',
    description: 'Beading, thresholds, a full clean, and a care pack with the right pH-neutral cleaner for your floor type.'
  }
];

export const recentProjects = [
  {
    id: 'victorian-terrace',
    title: 'Victorian terrace, whole ground floor',
    location: 'Nottingham',
    product: 'Oak herringbone',
    area: '52m²',
    daysOnSite: '5 days on site including levelling',
    description: 'Replaced patchy 1970s floorboards and uneven bitumen screed with 20mm self-levelling compound, followed by 52m² of prime European oak herringbone flowing seamlessly through the hallway and double reception.',
    image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1000&q=85',
    tag: 'Full Ground Floor Heritage Restoration'
  },
  {
    id: 'west-bridgford',
    title: 'New-build kitchen and utility',
    location: 'West Bridgford',
    product: 'Glue-down LVT over underfloor heating',
    area: '31m²',
    daysOnSite: '2 days',
    description: 'Direct glue-down luxury vinyl tile in honed limestone finish over water-fed underfloor heating screed. Moisture read 1.8% CM before installation commenced. Totally waterproof around island and utility washer.',
    image: 'https://images.unsplash.com/photo-1556912172-45b7abe8b7e1?auto=format&fit=crop&w=1000&q=85',
    tag: 'Underfloor Heating & Moisture Tested'
  },
  {
    id: 'beeston-semi',
    title: '1930s semi, stairs and landing',
    location: 'Beeston',
    product: 'Wool carpet with engineered oak on the landing',
    area: '22m²',
    daysOnSite: '1.5 days',
    description: 'Heavy domestic 80/20 British wool twist fitted with high-density acoustic rubber underlay on winders and stairs, transitioning into 14mm brushed engineered oak on the upper landing.',
    image: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1000&q=85',
    tag: 'Acoustic Soundproofing & Oak Transition'
  }
];
