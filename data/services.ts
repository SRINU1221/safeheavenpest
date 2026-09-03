export type Service = {
  id: string;
  name: string;
  slug: string;
  shortDescription: string;
  description: string;
  icon: string;
  image: string;
  color: string;
  signs: string[];
  causes: string[];
  process: { step: string; description: string }[];
  benefits: string[];
  faqs: { question: string; answer: string }[];
  seoTitle: string;
  seoDescription: string;
};

export const services: Service[] = [
  {
    id: "termite-control",
    name: "Termite Control",
    slug: "termite-control",
    shortDescription:
      "Advanced termite inspection and treatment to protect your property's structural integrity.",
    description:
      "Termites are silent destroyers that can cause significant structural damage before their presence is even detected. Our comprehensive termite control program combines thorough inspection, targeted treatment, and preventive strategies to protect your property.",
    icon: "🏠",
    image: "/images/service-termite.png",
    color: "#8B4513",
    signs: [
      "Hollow-sounding wood when tapped",
      "Mud tubes along walls or foundation",
      "Discarded wings near windows and doors",
      "Frass (termite droppings) resembling sawdust",
      "Blistering or darkening of wood surfaces",
      "Small holes in drywall or wood",
      "Tight-fitting doors and windows",
    ],
    causes: [
      "Wood-to-soil contact around the property",
      "Moisture accumulation near the foundation",
      "Cracks in foundation or exterior walls",
      "Stored firewood near the structure",
      "Cellulose-rich debris near the building",
    ],
    process: [
      {
        step: "Property Inspection",
        description:
          "Our technicians conduct a detailed inspection of the property, including crawl spaces, attic, foundation, and wood structures to identify termite activity and entry points.",
      },
      {
        step: "Activity Assessment",
        description:
          "We assess the extent of termite activity, identify the species, and evaluate potential risk areas to determine the most effective treatment approach.",
      },
      {
        step: "Treatment Application",
        description:
          "Based on the inspection findings, we apply targeted treatment methods including liquid termiticide application, bait systems, or a combination of approaches.",
      },
      {
        step: "Preventive Measures",
        description:
          "We provide recommendations to reduce conducive conditions and help prevent future termite activity, including moisture control and structural modifications.",
      },
    ],
    benefits: [
      "Protection of structural integrity",
      "Early detection of termite activity",
      "Targeted treatment minimizing environmental impact",
      "Expert guidance on prevention",
      "Detailed inspection reports",
      "Follow-up support",
    ],
    faqs: [
      {
        question: "How do I know if I have termites?",
        answer:
          "Common signs include hollow-sounding wood, mud tubes on walls, discarded wings, and small holes in wood surfaces. If you suspect termite activity, contact us for a professional inspection.",
      },
      {
        question: "How long does termite treatment take?",
        answer:
          "The duration depends on the property size and extent of infestation. A typical treatment can take anywhere from a few hours to a full day.",
      },
      {
        question: "Do I need to vacate the property during treatment?",
        answer:
          "This depends on the treatment method used. Our technician will advise you on any necessary precautions specific to your treatment plan.",
      },
      {
        question: "When will I see results after treatment?",
        answer:
          "Results vary by treatment method and extent of infestation. Your technician will explain what to expect and the expected timeline.",
      },
    ],
    seoTitle: "Termite Control Services | SafeHaven Pest Control",
    seoDescription:
      "Professional termite control and inspection services. Protect your home from structural damage with SafeHaven Pest Control's targeted termite treatment solutions.",
  },
  {
    id: "cockroach-control",
    name: "Cockroach Control",
    slug: "cockroach-control",
    shortDescription:
      "Targeted gel and spray treatments for effective cockroach elimination in homes and businesses.",
    description:
      "Cockroaches are persistent pests that can contaminate food, spread bacteria, and trigger allergic reactions. Our targeted cockroach control program identifies the infestation source and applies effective, professional treatments to eliminate them.",
    icon: "🪲",
    image: "/images/service-cockroach.png",
    color: "#556B2F",
    signs: [
      "Live cockroaches, especially at night",
      "Egg capsules (oothecae) in dark areas",
      "Droppings resembling ground black pepper",
      "Musty or oily odour in infested areas",
      "Smear marks on surfaces near water",
      "Shed skins in hiding spots",
    ],
    causes: [
      "Food particles and crumbs not cleaned properly",
      "Water leaks and damp areas",
      "Gaps around pipes and wall cracks",
      "Cardboard boxes and paper clutter",
      "Inadequate sanitation practices",
    ],
    process: [
      {
        step: "Inspection",
        description:
          "Identify cockroach species, locate harbourage areas, and assess infestation severity in kitchens, bathrooms, and utility areas.",
      },
      {
        step: "Gel Bait Application",
        description:
          "Apply professional-grade gel baits in strategic harbourage areas, offering effective control with minimal disruption.",
      },
      {
        step: "Void Treatment",
        description:
          "Treat wall voids, crevices, and other hidden areas where cockroaches shelter.",
      },
      {
        step: "Prevention Guidance",
        description:
          "Provide sanitation recommendations and structural advice to reduce future cockroach activity.",
      },
    ],
    benefits: [
      "Effective elimination of cockroach populations",
      "Reduced risk of food contamination",
      "Targeted approach with minimal chemical exposure",
      "Residential and commercial solutions",
      "Sanitation recommendations included",
    ],
    faqs: [
      {
        question: "How quickly does cockroach treatment work?",
        answer:
          "Gel bait treatments typically show results within a few days. The timeline varies based on infestation severity.",
      },
      {
        question: "Is the treatment safe for my family and pets?",
        answer:
          "We use treatments appropriate for residential environments. Your technician will provide specific safety guidance for your treatment.",
      },
      {
        question: "Do I need to prepare before treatment?",
        answer:
          "We recommend clearing kitchen surfaces and storing food securely. Your technician will provide specific preparation instructions.",
      },
    ],
    seoTitle: "Cockroach Control Services | SafeHaven Pest Control",
    seoDescription:
      "Professional cockroach control for homes and businesses. Targeted gel treatments and expert inspection from SafeHaven Pest Control.",
  },
  {
    id: "bed-bug-control",
    name: "Bed Bug Control",
    slug: "bed-bug-control",
    shortDescription:
      "Thorough bed bug inspection and treatment to restore comfort to your living spaces.",
    description:
      "Bed bugs are difficult to detect and challenging to eliminate without professional treatment. Our comprehensive bed bug control program combines inspection, targeted treatment, and guidance to address infestations effectively.",
    icon: "🛏️",
    image: "/images/service-bedbug.png",
    color: "#8B0000",
    signs: [
      "Itchy welts on skin after sleeping",
      "Small rust-coloured stains on bedding",
      "Tiny dark spots (faecal marks) on mattress seams",
      "Shed skins or empty egg shells",
      "Live bugs in mattress seams and furniture joints",
      "Sweet, musty odour in severe infestations",
    ],
    causes: [
      "Travel and infested hotel stays",
      "Second-hand furniture or mattresses",
      "Shared laundry facilities",
      "Visitors from infested locations",
      "Clothing and luggage from infested areas",
    ],
    process: [
      {
        step: "Comprehensive Inspection",
        description:
          "Inspect mattresses, bed frames, furniture, baseboards, and all potential hiding areas to confirm infestation and assess severity.",
      },
      {
        step: "Preparation Instructions",
        description:
          "Provide detailed preparation guidelines to maximize treatment effectiveness.",
      },
      {
        step: "Targeted Treatment",
        description:
          "Apply appropriate treatment methods to all identified areas, following product guidelines and safety protocols.",
      },
      {
        step: "Follow-Up Assessment",
        description:
          "Assess treatment effectiveness and provide additional guidance where needed.",
      },
    ],
    benefits: [
      "Thorough inspection of all potential hiding areas",
      "Clear preparation instructions",
      "Targeted treatment approach",
      "Prevention guidance",
      "Follow-up assessment",
    ],
    faqs: [
      {
        question: "How do I prepare for bed bug treatment?",
        answer:
          "Your technician will provide specific preparation instructions. Generally, this includes washing bedding, clearing clutter, and vacuuming affected areas.",
      },
      {
        question: "How many treatments will I need?",
        answer:
          "This depends on the extent of the infestation. Your technician will advise on the recommended treatment plan.",
      },
      {
        question: "Are DIY treatments effective for bed bugs?",
        answer:
          "Bed bugs are difficult to eliminate without professional treatment. DIY methods may reduce populations temporarily but rarely eliminate an established infestation.",
      },
    ],
    seoTitle: "Bed Bug Control Services | SafeHaven Pest Control",
    seoDescription:
      "Professional bed bug inspection and treatment. Restore comfort to your home with SafeHaven Pest Control's targeted bed bug control services.",
  },
  {
    id: "mosquito-control",
    name: "Mosquito Control",
    slug: "mosquito-control",
    shortDescription:
      "Effective mosquito management programs for gardens, properties, and commercial spaces.",
    description:
      "Mosquitoes are not just a nuisance — they are vectors for serious diseases. Our mosquito control program targets breeding areas, eliminates adult populations, and implements preventive measures to reduce mosquito activity on your property.",
    icon: "🦟",
    image: "/images/service-mosquito.png",
    color: "#2E8B57",
    signs: [
      "Persistent mosquito activity during day or night",
      "Standing water in garden or around property",
      "Multiple bites on residents",
      "Larvae visible in stagnant water",
      "High activity near water features or drains",
    ],
    causes: [
      "Standing water in containers, pots, or gutters",
      "Clogged drains and drainage issues",
      "Overgrown vegetation providing shelter",
      "Ponds, water features, or irrigation areas",
      "Construction sites with water accumulation",
    ],
    process: [
      {
        step: "Property Survey",
        description:
          "Inspect the property to identify all actual and potential mosquito breeding areas, including water sources and shelter areas.",
      },
      {
        step: "Breeding Source Management",
        description:
          "Address standing water and breeding sources through appropriate larvicidal treatment where elimination is not possible.",
      },
      {
        step: "Adult Mosquito Control",
        description:
          "Apply appropriate treatments to vegetation and resting areas to reduce adult mosquito populations.",
      },
      {
        step: "Prevention Guidance",
        description:
          "Provide recommendations to reduce breeding conditions and minimize future mosquito activity.",
      },
    ],
    benefits: [
      "Identification and management of breeding sources",
      "Reduction of adult mosquito populations",
      "Residential and commercial solutions",
      "Prevention-focused approach",
      "Guidance on long-term mosquito reduction",
    ],
    faqs: [
      {
        question: "How often should mosquito control be performed?",
        answer:
          "Frequency depends on the property, local conditions, and season. Your technician will recommend an appropriate schedule.",
      },
      {
        question: "What can I do to reduce mosquitoes around my home?",
        answer:
          "Eliminate standing water, maintain gutters, trim vegetation, and use window screens. Our technician will provide specific recommendations.",
      },
    ],
    seoTitle: "Mosquito Control Services | SafeHaven Pest Control",
    seoDescription:
      "Professional mosquito control for homes and businesses. Target breeding areas and reduce mosquito populations with SafeHaven Pest Control.",
  },
  {
    id: "rodent-control",
    name: "Rodent Control",
    slug: "rodent-control",
    shortDescription:
      "Comprehensive rodent inspection, control, and exclusion services for your property.",
    description:
      "Rodents can cause significant property damage, contaminate food, and pose health risks. Our integrated rodent management program combines inspection, control measures, and exclusion strategies to protect your property.",
    icon: "🐀",
    image: "/images/service-rodent.png",
    color: "#696969",
    signs: [
      "Droppings along walls, in cupboards, or food storage areas",
      "Gnaw marks on wiring, furniture, or food packaging",
      "Scratching sounds, especially at night",
      "Burrows or nesting material",
      "Grease marks along walls and pipes",
      "Damaged food packaging",
    ],
    causes: [
      "Gaps in foundations, walls, or around pipes",
      "Open food storage or waste",
      "Overgrown vegetation near the building",
      "Clutter providing nesting opportunities",
      "Water sources near the structure",
    ],
    process: [
      {
        step: "Inspection",
        description:
          "Identify rodent species, assess activity levels, locate entry points, and map harbouring areas throughout the property.",
      },
      {
        step: "Control Strategy",
        description:
          "Implement appropriate control measures including trapping and bait stations in secured locations.",
      },
      {
        step: "Exclusion",
        description:
          "Identify and recommend sealing of entry points to prevent future rodent access.",
      },
      {
        step: "Monitoring & Prevention",
        description:
          "Provide guidance on environmental modifications to reduce conducive conditions.",
      },
    ],
    benefits: [
      "Identification of entry points",
      "Effective population control",
      "Exclusion recommendations",
      "Property damage prevention",
      "Sanitation guidance",
    ],
    faqs: [
      {
        question: "Are rodent control methods safe?",
        answer:
          "We use professionally applied control methods following safety guidelines. Your technician will advise on specific precautions.",
      },
      {
        question: "How can I prevent rodents from returning?",
        answer:
          "Key measures include sealing entry points, proper food storage, regular waste management, and vegetation maintenance. We provide detailed guidance.",
      },
    ],
    seoTitle: "Rodent Control Services | SafeHaven Pest Control",
    seoDescription:
      "Professional rodent inspection, control, and exclusion services. Protect your property from rats and mice with SafeHaven Pest Control.",
  },
  {
    id: "ant-control",
    name: "Ant Control",
    slug: "ant-control",
    shortDescription:
      "Targeted ant identification and treatment programs for homes and businesses.",
    description:
      "Different ant species require different treatment approaches. Our ant control program starts with accurate identification, followed by targeted treatment and prevention guidance to reduce ant activity effectively.",
    icon: "🐜",
    image: "/images/service-ant.png",
    color: "#FF6347",
    signs: [
      "Visible ant trails indoors or near entry points",
      "Ant nests in garden, under paving, or near structure",
      "Ants in food storage areas or around moisture",
      "Winged ants indicating colony expansion",
      "Sawdust-like debris from carpenter ant activity",
    ],
    causes: [
      "Food sources left accessible",
      "Moisture and water leaks",
      "Gaps in building exterior",
      "Garden debris near the structure",
      "Sweet or protein-rich food spills",
    ],
    process: [
      {
        step: "Species Identification",
        description:
          "Accurately identify the ant species present, as different species require different management approaches.",
      },
      {
        step: "Targeted Treatment",
        description:
          "Apply appropriate treatments including gel baits, liquid applications, or barrier treatments based on species and infestation location.",
      },
      {
        step: "Entry Point Assessment",
        description:
          "Identify entry points and harbourage areas to target treatment effectively.",
      },
      {
        step: "Prevention Recommendations",
        description:
          "Provide guidance on sanitation, food storage, and structural modifications to reduce future ant activity.",
      },
    ],
    benefits: [
      "Accurate species identification",
      "Species-appropriate treatment",
      "Targeted application minimizing environmental impact",
      "Comprehensive prevention guidance",
    ],
    faqs: [
      {
        question: "Why do ants keep coming back?",
        answer:
          "Ants often return if the colony or food/moisture source is not addressed. Professional treatment targets the colony and provides prevention guidance.",
      },
      {
        question: "Can I treat ants myself?",
        answer:
          "Over-the-counter products may temporarily reduce visible ants but often fail to address the colony. Professional treatment is more effective for persistent problems.",
      },
    ],
    seoTitle: "Ant Control Services | SafeHaven Pest Control",
    seoDescription:
      "Professional ant identification and control services. Targeted treatment programs for residential and commercial properties. Contact SafeHaven Pest Control.",
  },
  {
    id: "commercial-pest-control",
    name: "Commercial Pest Control",
    slug: "commercial-pest-control",
    shortDescription:
      "Integrated pest management programs tailored for restaurants, hotels, offices, and commercial properties.",
    description:
      "Commercial properties face unique pest challenges and compliance requirements. Our commercial pest management programs are designed to protect your business, employees, customers, and reputation through regular inspection, targeted treatment, monitoring, and documentation.",
    icon: "🏢",
    image: "/images/service-cockroach.png",
    color: "#1a2f5e",
    signs: [
      "Pest sightings reported by staff or customers",
      "Evidence in food storage or preparation areas",
      "Droppings or damage in utility areas",
      "Customer complaints related to pests",
      "Failed health inspection findings",
    ],
    causes: [
      "High foot traffic creating entry opportunities",
      "Food handling and storage areas",
      "Loading docks and delivery areas",
      "Complex building structures with many entry points",
      "Adjacent properties with pest pressures",
    ],
    process: [
      {
        step: "Initial Assessment",
        description:
          "Conduct a thorough assessment of the facility, identifying pest pressures, risk areas, and compliance requirements.",
      },
      {
        step: "Customized Program Design",
        description:
          "Develop a pest management program tailored to your industry, facility, and specific requirements.",
      },
      {
        step: "Treatment & Control",
        description:
          "Implement targeted control measures with minimal disruption to business operations.",
      },
      {
        step: "Monitoring & Reporting",
        description:
          "Maintain regular monitoring, provide service documentation, and adjust the program as required.",
      },
    ],
    benefits: [
      "Industry-appropriate pest management solutions",
      "Minimized disruption to operations",
      "Service documentation and reporting",
      "Compliance support",
      "Regular monitoring and program review",
      "Staff guidance on pest prevention",
    ],
    faqs: [
      {
        question: "Do you provide pest control for restaurants?",
        answer:
          "Yes. We have experience in food handling environments and apply treatments appropriate to these settings.",
      },
      {
        question: "Can treatment be scheduled outside business hours?",
        answer:
          "Yes. We can schedule treatments at times that minimize disruption to your operations.",
      },
      {
        question: "Do you provide documentation for audits?",
        answer:
          "Yes. We provide service reports that can support hygiene audits and inspections.",
      },
    ],
    seoTitle: "Commercial Pest Control Services | SafeHaven Pest Control",
    seoDescription:
      "Professional commercial pest management for restaurants, hotels, offices, and warehouses. Tailored programs with monitoring and reporting.",
  },
];

export const pestTypes = [
  "Termites",
  "Cockroaches",
  "Bed Bugs",
  "Mosquitoes",
  "Rodents",
  "Ants",
  "Flies",
  "Other",
];
