
import { termiteImg, ecoImg, fumigateImg } from "./assets/images/index"

import slugify from "slugify";




export const services = [
  {
    id: "cockroach-control",
    title: "Cockroach Control",
    short: "Fast elimination with safe products for homes & restaurants.",
    details:
      "Thorough inspection, targeted treatment, follow-up visit and prevention tips. Child & pet friendly options available.",
    
  },
  {
    id: "termite-treatment",
    title: "Termite Treatment",
    short: "Protect structures and properties from costly termite damage.",
    details:
      "Comprehensive termite inspection, soil treatment or baiting, and warranty options. We protect your investment.",
    
  },
  {
    id: "rodent-removal",
    title: "Rodent Removal",
    short:
      "Humane trapping and exclusion with sanitation advice from professionals.",
    details:
      "Removal, exclusion works, and sanitation guidance to stop re-infestation. Ideal for homes and businesses.",
   
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

// src/data/blogData.js
// export const blogPosts = [
//   {
//     id: "5 Signs You Might Have a Termite Problem",
//     title: "5 Signs You Might Have a Termite Problem",
//     date: "Aug 10, 2025",
//     author: "Jane Doe",
//     excerpt:
//       "Termites can cause significant damage before you even realize they're there. Learn the early warning signs so you can act fast...",
//     image: termiteImg, // imported earlier
//     tags: ["Termites", "Home Safety", "Pest Control"],
//     content: `
// Termites are silent destroyers. Here are the top early warning signs you should know:

// 1. Mud tubes—slender tunnels built against foundations or walls—indicate active subterranean colonies.  
// 2. Swarmers or discarded wings near windows or entryways signal nearby colonies preparing to infest.  
// 3. Frass (pellet-like droppings), often found near infested wood, is a telltale sign of drywood termites.  
// 4. Uneven or bubbling paint, hollow sounds from wood, and stuck windows/doors can result from hidden damage.  
// 5. Faint clicking or rustling inside walls may reveal termite movement or feeding activity.

// If you notice these signs, contact a licensed pest control professional immediately to prevent serious structural damage.
//     `,
//   },
//   {
//     id: "Eco-Friendly Pest Control Solutions",
//     title: "Eco-Friendly Pest Control Solutions",
//     date: "Jul 28, 2025",
//     author: "John Smith",
//     excerpt:
//       "At E Consultants we use environmentally friendly products that are safe for your family and pets, without compromising effectiveness...",
//     image: ecoImg,
//     tags: ["Eco-Friendly", "Green Living", "Sustainable"],
//     content: `
// Eco-conscious pest control doesn’t mean compromising effectiveness. Explore these natural and sustainable methods:

// - Essential oils like eucalyptus, citronella, and peppermint can be mixed with water for homemade repellents.  
// - Used coffee grounds deter ants and slugs in gardens and around entry points.  
// - Biological controls—introducing predators such as ladybugs and mites—help manage pests naturally.  
// - Kaolin spray forms a protective mineral film that boosts crop health and reduces pest damage.  
// - Pheromones enable strategies like mass trapping, mating disruption, and attract-and-kill – targeting pests without broad chemicals.  
// - Biosolarization (using solar heat with compost) effectively clears soil pests in organic gardens.  
// - Sterile Insect Technique (SIT) helps suppress pest populations via sterile male releases—low-impact and effective.

// Together, these methods reduce chemical use while preserving ecosystem health.
//     `,
//   },
//   {
//     id: "How Often Should You Fumigate Your Home?",
//     title: "How Often Should You Fumigate Your Home?",
//     date: "Jul 12, 2025",
//     author: "Emily Turner",
//     excerpt:
//       "Regular fumigation can prevent infestations before they start. Here's how to determine the best schedule for your property...",
//     image: fumigateImg,
//     tags: ["Fumigation", "Home Maintenance", "Prevention"],
//     content: `
// Determining the right frequency for fumigation depends on your home's risk profile:

// - Many pest control services recommend **quarterly treatments** (every 3 months) to maintain effective protection.  
// - In some cases, fumigation effects can last **up to four years**, though **termite inspections every 2–4 years** are wise.  
// - Once infestations are resolved, **routine re-fumigation may not be necessary**; annual inspections are often sufficient.  

// Consult a trusted pest control professional to develop a tailored inspection and treatment plan specific to your property.
//     `,
//   },
// ];




export const blogPosts = [
  {
    id: slugify("5 Signs You Might Have a Termite Problem", { lower: true }),
    title: "5 Signs You Might Have a Termite Problem",
    date: "Aug 10, 2025",
    author: "Jane Doe",
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

If you notice these signs, contact a licensed pest control professional immediately to prevent serious structural damage.
    `,
  },
  {
    id: slugify("Eco-Friendly Pest Control Solutions", { lower: true }),
    title: "Eco-Friendly Pest Control Solutions",
    date: "Jul 28, 2025",
    author: "John Smith",
    excerpt:
      "At E Consultants we use environmentally friendly products that are safe for your family and pets, without compromising effectiveness...",
    image: ecoImg,
    tags: ["Eco-Friendly", "Green Living", "Sustainable"],
    content: `
Eco-conscious pest control doesn’t mean compromising effectiveness. Explore these natural and sustainable methods:

- Essential oils like eucalyptus, citronella, and peppermint can be mixed with water for homemade repellents.  
- Used coffee grounds deter ants and slugs in gardens and around entry points.  
- Biological controls—introducing predators such as ladybugs and mites—help manage pests naturally.  
- Kaolin spray forms a protective mineral film that boosts crop health and reduces pest damage.  
- Pheromones enable strategies like mass trapping, mating disruption, and attract-and-kill – targeting pests without broad chemicals.  
- Biosolarization (using solar heat with compost) effectively clears soil pests in organic gardens.  
- Sterile Insect Technique (SIT) helps suppress pest populations via sterile male releases—low-impact and effective.

Together, these methods reduce chemical use while preserving ecosystem health.
    `,
  },
  {
    id: slugify("How Often Should You Fumigate Your Home?", { lower: true }),
    title: "How Often Should You Fumigate Your Home?",
    date: "Jul 12, 2025",
    author: "Emily Turner",
    excerpt:
      "Regular fumigation can prevent infestations before they start. Here's how to determine the best schedule for your property...",
    image: fumigateImg,
    tags: ["Fumigation", "Home Maintenance", "Prevention"],
    content: `
Determining the right frequency for fumigation depends on your home's risk profile:

- Many pest control services recommend **quarterly treatments** (every 3 months) to maintain effective protection.  
- In some cases, fumigation effects can last **up to four years**, though **termite inspections every 2–4 years** are wise.  
- Once infestations are resolved, **routine re-fumigation may not be necessary**; annual inspections are often sufficient.  

Consult a trusted pest control professional to develop a tailored inspection and treatment plan specific to your property.
    `,
  },
];




