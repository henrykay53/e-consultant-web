import slugify from "slugify";

import {
  termiteImg,
  ecoImg,
  fumigateImg,
  checkListImg,
  plantfumigationImg,
} from "./assets/images/index";

/* ------------------------------------------------------------------ *
 * SERVICES
 * Each service gets enough real content to stand as its own landing
 * page. Thin pages with one sentence cannot rank for anything.
 * ------------------------------------------------------------------ */

export const services = [
  {
    id: "cockroach-control",
    icon: "general",
    title: "Cockroach Control",
    priceKey: "cockroachTreatment",
    short: "The one that embarrasses you in front of guests. Cleared discreetly, kitchen and drains included.",
    details:
      "Thorough inspection, targeted gel baiting and residual spraying, a follow-up visit, and prevention advice. Child and pet friendly options available.",
    metaTitle: "Cockroach Control in Lagos | Same-Day Treatment",
    metaDescription:
      "Professional cockroach control for Lagos homes, restaurants and offices. Gel baiting and residual treatment with a 30-day guarantee. Get a quote today.",
    signs: [
      "Droppings that look like coarse black pepper along skirting boards and inside cupboards",
      "A musty, oily smell in the kitchen that does not clear with cleaning",
      "Shed skins or egg cases (oothecae) behind appliances",
      "Sightings during the day — usually a sign the population is already large",
    ],
    includes: [
      "Full inspection of kitchen, bathrooms, drains and service ducts",
      "Gel bait applied to harbourage points rather than blanket spraying",
      "Residual barrier treatment at entry points",
      "Drain and waste-area treatment where cockroaches breed",
      "Follow-up visit within 14 days included",
    ],
    faqs: [
      {
        q: "Do I need to leave the house?",
        a: "For gel baiting, no. For a full residual spray we ask you to stay out for 2–4 hours and ventilate before re-entry.",
      },
      {
        q: "Why do they come back after I spray myself?",
        a: "Supermarket sprays kill what you can see and scatter the rest deeper into the building. Gel bait is carried back to the harbourage and reaches the ones you never see.",
      },
    ],
  },
  {
    id: "termite-treatment",
    icon: "termite",
    title: "Termite Treatment",
    priceKey: "termiteTreatment",
    short: "Common in new Lekki and Ajah builds, where untreated fill soil brings them in with the foundation.",
    details:
      "Comprehensive termite inspection, soil treatment or baiting, and warranty options. We protect the structure before the damage becomes a building bill.",
    metaTitle: "Termite Treatment & Control in Lagos | Soil Treatment & Baiting",
    metaDescription:
      "Licensed termite treatment in Lagos. Inspection, soil barrier treatment, baiting systems and pre-construction anti-termite treatment. Request a survey.",
    signs: [
      "Mud tubes running up foundations, walls or pillars",
      "Winged swarmers or discarded wings near windows after rain",
      "Wood that sounds hollow when tapped, or paint that bubbles unexpectedly",
      "Doors and windows that suddenly stick in their frames",
      "Frass — small pellet-like droppings near skirting or ceilings",
    ],
    includes: [
      "Structural inspection of foundations, roof timbers, door frames and furniture",
      "Identification of species (subterranean vs drywood changes the treatment entirely)",
      "Soil barrier treatment or in-ground baiting stations",
      "Direct injection into infested timbers where required",
      "Written report and scheduled re-inspection",
    ],
    faqs: [
      {
        q: "How quickly do termites cause real damage?",
        a: "A mature subterranean colony can consume several kilograms of timber a month. By the time damage is visible, the colony has usually been active for a year or more.",
      },
      {
        q: "Can you treat a building that is still under construction?",
        a: "Yes — pre-construction soil treatment is far cheaper than treating an infestation later, and we recommend it for any new build in Lagos.",
      },
    ],
  },
  {
    id: "rodent-removal",
    icon: "home",
    title: "Rodent Removal",
    priceKey: "rodentTreatment",
    short: "Trapping alone never works. We seal the entry points so they cannot simply come back.",
    details:
      "Removal, exclusion work and sanitation guidance to stop re-infestation. Trapping alone never solves a rodent problem — sealing the entry points does.",
    metaTitle: "Rodent & Rat Control in Lagos | Removal and Proofing",
    metaDescription:
      "Rat and rodent control for Lagos homes and businesses. Trapping, secure baiting, entry-point proofing and sanitation advice. Book an inspection.",
    signs: [
      "Droppings along walls, in cupboards or behind the cooker",
      "Gnaw marks on food packaging, cables, pipes or door edges",
      "Scratching or scurrying in the ceiling at night",
      "Grease marks along skirting boards where rodents run the same route",
      "A persistent ammonia-like smell",
    ],
    includes: [
      "Inspection to map runs, harbourage and every entry point",
      "Tamper-resistant bait stations, or snap traps where children and pets are present",
      "Proofing — sealing gaps around pipes, vents, roof eaves and door thresholds",
      "Removal of carcasses and deodorising",
      "Sanitation and food-storage advice to remove the reason they came",
    ],
    faqs: [
      {
        q: "Is baiting safe with children and pets in the house?",
        a: "We use lockable tamper-resistant stations, and in homes with small children we will often recommend trapping instead. We will always tell you exactly what has been placed and where.",
      },
      {
        q: "Why do they keep coming back?",
        a: "Almost always because the entry point was never sealed. Proofing is the part of the job that actually ends the problem.",
      },
    ],
  },
  {
    id: "disinfestation",
    icon: "disinfection",
    title: "Bed Bug Treatment",
    priceKey: "bbTreatment",
    short: "The short-let owner\u2019s nightmare. Full room-system treatment between guests, verified before you re-list.",
    details:
      "Bed bugs hide in seams, joints and cracks, not just mattresses. We treat the whole room system — frame, furniture, skirting and soft furnishings — then verify.",
    metaTitle: "Bed Bug Treatment in Lagos | Guaranteed Eradication",
    metaDescription:
      "Bed bug treatment for Lagos homes, hotels and hostels. Full-room treatment, mattress and frame work, plus a verification visit. Discreet and guaranteed.",
    signs: [
      "Small itchy bites in a line or cluster, usually on arms, shoulders or legs",
      "Rust-coloured spots on sheets or the mattress seam",
      "Tiny dark specks (droppings) along the mattress piping and bed frame joints",
      "A sweet, musty odour in a heavily infested room",
      "Shed skins in the bed frame or behind the headboard",
    ],
    includes: [
      "Room-by-room inspection including frames, joints, skirting and adjacent furniture",
      "Targeted residual and contact treatment of all harbourage points",
      "Mattress and upholstery treatment",
      "Guidance on laundering and bagging to prevent re-introduction",
      "Verification visit — bed bugs are never a one-visit job",
    ],
    faqs: [
      {
        q: "Do I need to throw away my mattress?",
        a: "Usually not. Replacing the mattress without treating the frame and room simply moves the problem to the new one.",
      },
      {
        q: "How many visits will it take?",
        a: "Plan for two. The second visit catches anything that hatched after the first treatment, and it is included in the price.",
      },
    ],
  },
  {
    id: "detailed-fumigation",
    icon: "outdoor",
    title: "Detailed Fumigation",
    priceKey: "termiteTreatment",
    short: "Whole-property treatment before you move in, after a build, or on a schedule for commercial premises.",
    details:
      "Full-site fumigation targeting all pests at once, with safety-focused protocols for people, pets and plants. The right choice before moving in, after a build, or on a schedule for commercial premises.",
    metaTitle: "Home & Office Fumigation in Lagos | Whole-Property Treatment",
    metaDescription:
      "Detailed fumigation for Lagos homes, offices, schools and warehouses. Whole-property treatment with clear re-entry guidance and a 30-day guarantee.",
    signs: [
      "You are moving into a property and want a clean slate before furniture arrives",
      "Building work has just finished and dust has driven pests into the structure",
      "More than one pest type is present at the same time",
      "A commercial premises needs scheduled treatment for compliance or inspection",
    ],
    includes: [
      "Pre-treatment survey and a written preparation checklist",
      "Whole-property treatment: rooms, ceilings, drains, soakaway, compound and perimeter",
      "Space spraying and residual application appropriate to the building",
      "Clear re-entry timing and ventilation instructions in writing",
      "Certificate of treatment on request — useful for landlords and schools",
    ],
    faqs: [
      {
        q: "How long before we can go back in?",
        a: "Typically 4–6 hours depending on the products used and how well the building ventilates. We give you the exact clearance time in writing before we start.",
      },
      {
        q: "Can you work overnight or at the weekend?",
        a: "Yes. For schools, restaurants and offices we routinely work outside opening hours so you lose no trading time.",
      },
    ],
  },
  {
    id: "cleaning",
    icon: "petSafe",
    title: "Post-Treatment Cleaning",
    priceKey: "cockroachTreatment",
    short: "Fumigation removes the pests. Cleaning removes what attracted them in the first place.",
    details:
      "Fumigation removes the pests; cleaning removes what attracted them. Deep cleaning and sanitisation for homes, offices and pet-friendly environments.",
    metaTitle: "Deep Cleaning & Sanitisation Services in Lagos",
    metaDescription:
      "Post-fumigation deep cleaning and sanitisation for Lagos homes and offices. Removes residue, droppings and the food sources that attract pests back.",
    signs: [
      "A property has just been fumigated and needs residue and droppings cleared",
      "A move-in or move-out clean is needed",
      "Kitchen grease build-up is feeding a recurring cockroach problem",
      "An office or clinic needs routine sanitisation",
    ],
    includes: [
      "Removal of dead insects, droppings and treatment residue",
      "Deep clean of kitchen surfaces, cupboards and behind appliances",
      "Sanitisation of bathrooms and high-touch surfaces",
      "Waste-area and bin-store cleaning",
      "Advice on the storage and waste habits that cause repeat infestations",
    ],
    faqs: [
      {
        q: "Should cleaning happen before or after fumigation?",
        a: "After. Cleaning first removes the residue we need to leave behind, and deep cleaning before treatment can drive pests deeper into the structure.",
      },
    ],
  },
];

/* ------------------------------------------------------------------ *
 * PRICING
 * These are the same figures the business was already using — only the
 * shape has changed, so the pricing page and the calculator can no
 * longer contradict each other. Both now read from this one object.
 * ------------------------------------------------------------------ */

export const pricing = {
  currency: "₦",

  houseType: {
    Apartment: 10000,
    Bungalow: 10000,
    Duplex: 15000,
    Mansion: 30000,
    Warehouse: 100000,
  },

  fumigationType: {
    bbTreatment: 30000,
    termiteTreatment: 30000,
    rodentTreatment: 30000,
    cockroachTreatment: 30000,
  },

  // Service-and-callout fee by zone.
  // NOTE FOR THE OWNER: Mainland is currently priced above the Island.
  // If that is not deliberate, swap these two numbers.
  location: {
    lagosIsland: 30000,
    lagosMainland: 40000,
  },

  perRoom: 5000,
};

export const houseTypeLabels = {
  Apartment: "Apartment / Flat",
  Bungalow: "Bungalow",
  Duplex: "Duplex",
  Mansion: "Mansion / Large home",
  Warehouse: "Warehouse / Commercial",
};

export const fumigationTypeLabels = {
  bbTreatment: "Bed Bug Treatment",
  termiteTreatment: "Termite Treatment",
  rodentTreatment: "Rodent Treatment",
  cockroachTreatment: "Cockroach Treatment",
};

export const locationLabels = {
  lagosIsland: "Lagos Island",
  lagosMainland: "Lagos Mainland",
};

export const computeQuote = ({
  houseType = "Apartment",
  fumigationType = "bbTreatment",
  location = "lagosIsland",
  rooms = 0,
} = {}) =>
  (pricing.houseType[houseType] || 0) +
  (pricing.fumigationType[fumigationType] || 0) +
  (pricing.location[location] || 0) +
  Math.max(0, rooms) * pricing.perRoom;

// The pricing cards are derived from the calculator, not typed by hand,
// so the two can never disagree again.
export const pricingTiers = [
  {
    name: "Apartments & Bungalows",
    from: computeQuote({ houseType: "Apartment" }),
    description:
      "Single-treatment fumigation for flats, self-contained apartments and bungalows.",
    fits: ["1–3 bedrooms", "One treatment type", "Same-day slots often available"],
  },
  {
    name: "Family Homes",
    from: computeQuote({ houseType: "Duplex" }),
    description:
      "Duplexes and larger family homes, including compound and perimeter treatment.",
    fits: ["3–5 bedrooms", "Indoor and outdoor coverage", "Child & pet safe options"],
    highlight: true,
  },
  {
    name: "Commercial & Warehouse",
    from: computeQuote({ houseType: "Warehouse" }),
    description:
      "Warehouses, offices, schools, restaurants and estates — including out-of-hours work.",
    fits: ["Scheduled or one-off", "Out-of-hours available", "Certificate of treatment"],
  },
];

/* ------------------------------------------------------------------ *
 * SERVICE AREAS
 * One page per area, because "fumigation in Lekki" is what people
 * actually search — not "pest control".
 * ------------------------------------------------------------------ */

export const serviceAreas = [
  {
    id: "lekki",
    name: "Lekki",
    zone: "lagosIsland",
    blurb:
      "Fumigation and pest control across Lekki Phase 1, Phase 2, Chevron, Agungi, Osapa London and the Lekki–Epe corridor.",
    context:
      "Lekki's mix of new-build estates and reclaimed low-lying land makes it particularly prone to termites and cockroaches. Freshly completed developments often bring termite activity in with untreated fill soil, and the high water table means drains and soakaways need attention as part of any serious treatment.",
    common: ["Termites in new builds", "Cockroaches", "Mosquitoes", "Rodents in estates"],
  },
  {
    id: "ajah",
    name: "Ajah",
    zone: "lagosIsland",
    blurb:
      "Same-day fumigation across Ajah, Sangotedo, Badore, Addo and the surrounding estates — this is our home base.",
    context:
      "Our office is on Angelica Avenue in GoodHomes Estate, so Ajah is the area we reach fastest. Rapid development here means a lot of properties sit next to cleared bush or active building sites, which pushes rodents and snakes toward occupied homes and makes perimeter treatment as important as indoor work.",
    common: ["Termites", "Rodents", "Cockroaches", "Perimeter and compound treatment"],
  },
  {
    id: "victoria-island",
    name: "Victoria Island",
    zone: "lagosIsland",
    blurb:
      "Discreet commercial and residential fumigation for Victoria Island offices, apartments and hospitality.",
    context:
      "VI is dense, commercial and largely high-rise, so the work here is mostly scheduled out-of-hours treatment for offices, restaurants and serviced apartments. Shared service ducts and refuse areas mean a single untreated unit can re-infest a whole floor — building-wide coordination matters more here than anywhere else in Lagos.",
    common: ["Cockroaches in shared kitchens", "Rodents in service ducts", "Bed bugs in serviced apartments"],
  },
  {
    id: "ikoyi",
    name: "Ikoyi",
    zone: "lagosIsland",
    blurb:
      "Residential fumigation and termite protection for Ikoyi homes, apartments and estates.",
    context:
      "Ikoyi's older housing stock and mature tree cover mean termite work here is often about protecting genuinely valuable timber — roof structures, joinery and hardwood floors that are expensive to replace. We survey before treating rather than blanket-spraying.",
    common: ["Termites in older timber", "Mosquitoes", "Rodents", "Bed bugs"],
  },
  {
    id: "ikeja",
    name: "Ikeja",
    zone: "lagosMainland",
    blurb:
      "Fumigation for Ikeja GRA, Allen, Opebi, Oregun and the surrounding commercial districts.",
    context:
      "Ikeja combines residential GRA housing with heavy commercial and light industrial activity. Restaurants, warehouses and offices here usually need scheduled treatment rather than one-off visits, and food-handling premises often want a certificate of treatment for their records.",
    common: ["Cockroaches in food premises", "Rodents in warehouses", "Termites", "Flies"],
  },
  {
    id: "yaba",
    name: "Yaba",
    zone: "lagosMainland",
    blurb:
      "Fumigation for Yaba homes, student accommodation, hostels and offices.",
    context:
      "Yaba's high density of shared accommodation and student housing makes it one of the areas where bed bugs spread fastest — a single room left untreated will re-infest the rest of a hostel within weeks. We treat block by block rather than room by room wherever the building allows it.",
    common: ["Bed bugs in hostels", "Cockroaches", "Rodents", "Mosquitoes"],
  },
  {
    id: "surulere",
    name: "Surulere",
    zone: "lagosMainland",
    blurb:
      "Residential and commercial fumigation across Surulere, Aguda, Ojuelegba and Masha.",
    context:
      "Surulere's older, densely built housing means shared walls and shared drainage — which is why treating one flat in isolation so often fails here. Drain and soakaway treatment is usually the part that makes the difference for recurring cockroach problems.",
    common: ["Cockroaches", "Rodents", "Mosquitoes", "Drain treatment"],
  },
  {
    id: "gbagada",
    name: "Gbagada",
    zone: "lagosMainland",
    blurb:
      "Fumigation and termite treatment for Gbagada, Anthony, Oworonshoki and Phase 1 & 2 estates.",
    context:
      "Gbagada's estates sit close to low-lying and waterlogged ground, which keeps mosquito pressure high year-round and makes drainage and standing-water management part of any effective treatment plan.",
    common: ["Mosquitoes", "Termites", "Rodents", "Cockroaches"],
  },
];

/* ------------------------------------------------------------------ *
 * TESTIMONIALS
 * `area` and `date` render only when present. Fill them in as you
 * collect permission — an unattributed quote persuades nobody.
 * ------------------------------------------------------------------ */

export const testimonials = [
  {
    name: "Mrs. Adebayo",
    area: "",
    date: "",
    text: "They came the same day and solved our cockroach problem. Very professional and safe around the kids.",
  },
  {
    name: "Kolawole Properties",
    area: "",
    date: "",
    text: "Reliable and clear communication — saved us money by preventing termite damage early.",
  },
  {
    name: "Mr. Okon",
    area: "",
    date: "",
    text: "The team was punctual, friendly, and thorough. No more mosquitoes in our compound!",
  },
  {
    name: "Bright Future Schools",
    area: "",
    date: "",
    text: "We needed urgent fumigation before resumption. They worked overnight so classes could reopen on time.",
  },
  {
    name: "Mrs. Hassan",
    area: "",
    date: "",
    text: "Affordable, efficient, and they explained every step. I finally have peace of mind at home.",
  },
  {
    name: "Crown Plaza Hotel",
    area: "",
    date: "",
    text: "Excellent commercial service. Guests noticed the difference immediately — our environment is pest-free.",
  },
];

/* ------------------------------------------------------------------ *
 * CASE STUDIES
 * Deliberately empty. The "Our Work" section renders nothing until you
 * add real jobs — inventing them would be worse than having none.
 *
 * Template:
 * {
 *   id: "warehouse-apapa",
 *   title: "Overnight fumigation of a 2,000m² warehouse",
 *   client: "Client name, or 'Logistics company, Apapa' if not public",
 *   area: "Apapa",
 *   service: "detailed-fumigation",
 *   problem: "What was wrong when you arrived.",
 *   approach: "What you actually did.",
 *   outcome: "The result, with a number if you have one.",
 *   duration: "One night, 8 hours",
 *   image: importedImage,
 * }
 * ------------------------------------------------------------------ */

export const caseStudies = [];

/* ------------------------------------------------------------------ *
 * BLOG
 * ------------------------------------------------------------------ */

export const blogPosts = [
  {
    id: slugify("5 Signs You Might Have a Termite Problem", { lower: true }),
    title: "5 Signs You Might Have a Termite Problem",
    date: "Aug 10, 2025",
    author: "Sumi",
    authorBio: "Field supervisor, termite and structural treatments.",
    excerpt:
      "Termites can cause significant damage before you even realize they're there. Learn the early warning signs so you can act fast...",
    image: termiteImg,
    tags: ["Termites", "Home Safety", "Pest Control"],
    relatedService: "termite-treatment",
    content: `
Termites are silent destroyers. Here are the top early warning signs you should know:


 1. Mud tubes—slender tunnels built against foundations or walls—indicate active subterranean colonies.
 2. Swarmers or discarded wings near windows or entryways signal nearby colonies preparing to infest.
 3. Frass (pellet-like droppings), often found near infested wood, is a telltale sign of drywood termites.
 4. Uneven or bubbling paint, hollow sounds from wood, and stuck windows/doors can result from hidden damage.
 5. Faint clicking or rustling inside walls may reveal termite movement or feeding activity.

If you notice these signs, contact a licensed pest control professional immediately...
    `,
  },
  {
    id: slugify("Eco-Friendly Pest Control Solutions", { lower: true }),
    title: "Eco-Friendly Pest Control Solutions",
    date: "Jul 28, 2025",
    author: "Kola",
    authorBio: "Treatment lead, eco-friendly and low-toxicity programmes.",
    excerpt:
      "At E Consultants we use environmentally friendly products that are safe for your family and pets, without compromising effectiveness...",
    image: ecoImg,
    tags: ["Eco-Friendly", "Green Living", "Sustainable"],
    relatedService: "detailed-fumigation",
    content: `
Eco-conscious pest control doesn’t mean compromising effectiveness. Explore these natural and sustainable methods:

 a. Essential oils like eucalyptus, citronella, and peppermint can be mixed with water for homemade repellents.
 b. Used coffee grounds deter ants and slugs in gardens and around entry points.
 c. Biological controls—introducing predators such as ladybugs and mites—help manage pests naturally.
 d. Kaolin spray forms a protective mineral film that boosts crop health and reduces pest damage.
 e. Pheromones enable strategies like mass trapping, mating disruption, and attract-and-kill – targeting pests without broad chemicals.
 f. Biosolarization (using solar heat with compost) effectively clears soil pests in organic gardens.
 g. Sterile Insect Technique (SIT) helps suppress pest populations via sterile male releases—low-impact and effective.

 Together, these methods reduce chemical use while preserving ecosystem health.
    `,
  },
  {
    id: slugify("How Often Should You Fumigate Your Home?", { lower: true }),
    title: "How Often Should You Fumigate Your Home?",
    date: "Jul 12, 2025",
    author: "HNRY",
    authorBio: "Operations, scheduling and maintenance programmes.",
    excerpt:
      "Regular fumigation can prevent infestations before they start. Here's how to determine the best schedule for your property...",
    image: fumigateImg,
    tags: ["Fumigation", "Home Maintenance", "Prevention"],
    relatedService: "detailed-fumigation",
    content: ` Determining the right frequency for fumigation depends on your home's risk profile:

 Many pest control services recommend quarterly treatments (every 3 months) to maintain effective protection.
 In some cases, fumigation effects can last up to four years, though termite inspections every 2–4 years are wise.
 Once infestations are resolved, routine re-fumigation may not be necessary; annual inspections are often sufficient.

Consult a trusted pest control professional to develop a tailored inspection and treatment plan specific to your property.
    `,
  },
  {
    id: slugify("Steps to Prepare for Fumigation", { lower: true }),
    title:
      "Steps to Prepare for Fumigation: Your Essential Pre-Treatment Checklist",
    date: "Aug 13, 2025",
    author: "Henry Kolawole",
    authorBio: "Founder, E Consultants Global Tiija.",
    excerpt:
      "Fumigation works best when you're properly prepared. Use this checklist to ensure your home is ready for safe and effective treatment.",
    image: checkListImg,
    tags: ["Fumigation", "Home Prep", "Checklist"],
    relatedService: "detailed-fumigation",
    content: `
Preparing your home for fumigation is key for safety and effectiveness. Here’s your go-to checklist:

1. Remove or seal food, medication, and out-of-date perishables.
2. Open all drawers, cabinets, and appliances to allow fumigant access.
3. Cover or relocate live plants and sensitive electronics.
4. Notify neighbors and plan safe re-entry post-treatment.
5. Ventilate the area fully once clearance is confirmed.

Following these steps ensures the fumigation team can do a thorough, efficient job — and helps keep your family safe.
    `,
  },
  {
    id: slugify("Biofumigation A Safer Alternative", { lower: true }),
    title: "Biofumigation: A Safe, Green Alternative in Fumigation",
    date: "Aug 13, 2025",
    author: "Henry Kolawole",
    authorBio: "Founder, E Consultants Global Tiija.",
    excerpt:
      "Explore biofumigation — an eco-friendly pest control method using plant materials that naturally release fumigating compounds.",
    image: plantfumigationImg,
    tags: ["Biofumigation", "Sustainable", "Fumigation"],
    relatedService: "detailed-fumigation",
    content: `
Biofumigation offers a more sustainable pest control option by using decomposing plants to release natural fumigants. Here’s how it works:

- Plant Brassicaceae species (e.g., mustard, broccoli) high in glucosinolates.
- Chop and incorporate them into soil, then seal under film to trap isothiocyanates.
- After 3–4 weeks, remove the film; the soil is ready for planting within a day.
- Benefits include lower toxicity, enhanced soil health, and minimal environmental impact.
- Considerations: requires planning, crop rotation adjustment, and may vary in efficacy based on plant type and conditions.

Biofumigation is ideal for gardeners and eco-minded homeowners looking for gentle yet effective pest suppression.
    `,
  },
];
