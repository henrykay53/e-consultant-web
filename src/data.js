import slugify from "slugify";


import {
  termiteImg,
  ecoImg,
  fumigateImg,
  checkListImg,
  plantfumigationImg,
} from "./assets/images/index";


export const services = [
  {
    id: "cockroach-control",
    icon: "general", // Bug icon
    title: "Cockroach Control",
    short: "Fast elimination with safe products for homes & restaurants.",
    details:
      "Thorough inspection, targeted treatment, follow-up visit and prevention tips. Child & pet friendly options available.",
  },
  {
    id: "termite-treatment",
    icon: "termite", // ShieldCheck icon
    title: "Termite Treatment",
    short: "Protect structures and properties from costly termite damage.",
    details:
      "Comprehensive termite inspection, soil treatment or baiting, and warranty options. We protect your investment.",
  },
  {
    id: "rodent-removal",
    icon: "home", // Home icon
    title: "Rodent Removal",
    short:
      "Humane trapping and exclusion with sanitation advice from professionals.",
    details:
      "Removal, exclusion works, and sanitation guidance to stop re-infestation. Ideal for homes and businesses.",
  },
  {
    id: "disinfestation",
    icon: "disinfection", // SprayCan icon
    title: "Disinfestation",
    short:
      "Elimination of unwanted pests from large spaces using specialized equipment.",
    details:
      "Advanced disinfection and pest eradication treatments for residential and commercial properties.",
  },
  {
    id: "detailed-fumigation",
    icon: "outdoor", // Trees icon
    title: "Detailed Fumigation",
    short:
      "Intensive pest elimination covering all corners, indoors and outdoors.",
    details:
      "Full-site fumigation targeting all pests, with safety-focused protocols for people, pets, and plants.",
  },
  {
    id: "cleaning",
    icon: "petSafe", // PawPrint icon
    title: "Cleaning",
    short: "Eco-friendly cleaning services to maintain hygiene and safety.",
    details:
      "Thorough cleaning solutions tailored for homes, offices, and pet-friendly environments.",
  },
];

export const testimonials = [
  {
    name: "Mrs. Adebayo",
    text: "They came same day and solved our cockroach problem. Professional and safe around kids.",
  },
  {
    name: "Kolawole Properties",
    text: "Reliable and clear communication — saved us money by preventing termite damage early.",
  },
  {
    name: "Kolawole Properties",
    text: "Reliable and clear communication — saved us money by preventing termite damage early.",
  },
  {
    name: "Kolawole Properties",
    text: "Reliable and clear communication — saved us money by preventing termite damage early.",
  },
  {
    name: "Kolawole Properties",
    text: "Reliable and clear communication — saved us money by preventing termite damage early.",
  },
  {
    name: "Kolawole Properties",
    text: "Reliable and clear communication — saved us money by preventing termite damage early.",
  },
];


export const blogPosts = [
  {
    id: slugify("5 Signs You Might Have a Termite Problem", { lower: true }),
    title: "5 Signs You Might Have a Termite Problem",
    date: "Aug 10, 2025",
    author: "Sumi",
    excerpt:
      "Termites can cause significant damage before you even realize they're there. Learn the early warning signs so you can act fast...",
    image: termiteImg,
    tags: ["Termites", "Home Safety", "Pest Control"],
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
    excerpt:
      "At E Consultants we use environmentally friendly products that are safe for your family and pets, without compromising effectiveness...",
    image: ecoImg,
    tags: ["Eco-Friendly", "Green Living", "Sustainable"],
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
    excerpt:
      "Regular fumigation can prevent infestations before they start. Here's how to determine the best schedule for your property...",
    image: fumigateImg,
    tags: ["Fumigation", "Home Maintenance", "Prevention"],
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
    excerpt:
      "Fumigation works best when you're properly prepared. Use this checklist to ensure your home is ready for safe and effective treatment.",
    image: checkListImg, // <-- Replace with your actual import or asset
    tags: ["Fumigation", "Home Prep", "Checklist"],
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
    excerpt:
      "Explore biofumigation — an eco-friendly pest control method using plant materials that naturally release fumigating compounds.",
    image: plantfumigationImg, // <-- Replace with your actual import or asset
    tags: ["Biofumigation", "Sustainable", "Fumigation"],
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
