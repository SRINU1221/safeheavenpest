export type Testimonial = {
  id: string;
  name: string;
  location: string;
  rating: number;
  review: string;
  service: string;
};

export const testimonials: Testimonial[] = [
  {
    id: "1",
    name: "Rajesh Sharma",
    location: "Banjara Hills, Hyderabad",
    rating: 5,
    review:
      "Excellent service from SafeHaven Pest Control. The technician arrived on time, explained the treatment process clearly, and was thorough in the inspection. No more termite activity after treatment. Very professional team.",
    service: "Termite Control",
  },
  {
    id: "2",
    name: "Priya Venkataraman",
    location: "Jubilee Hills, Hyderabad",
    rating: 5,
    review:
      "We had a persistent cockroach problem in our restaurant kitchen. SafeHaven Pest Control conducted a proper inspection, identified the harbourage areas, and treated them effectively. Highly recommend their commercial services.",
    service: "Commercial Pest Control",
  },
  {
    id: "3",
    name: "Mohammed Farhan",
    location: "Madhapur, Hyderabad",
    rating: 5,
    review:
      "Had a bed bug problem after returning from a trip. The team was discreet, professional, and thorough. They explained every step of the process and followed up after treatment. Excellent experience.",
    service: "Bed Bug Control",
  },
  {
    id: "4",
    name: "Sunita Reddy",
    location: "Kondapur, Hyderabad",
    rating: 5,
    review:
      "The mosquito fogging service made a noticeable difference in our garden. The technician also identified breeding sources we hadn't considered. Will definitely use SafeHaven Pest Control again for regular treatment.",
    service: "Mosquito Control",
  },
  {
    id: "5",
    name: "Arun Kumar",
    location: "Kukatpally, Hyderabad",
    rating: 5,
    review:
      "Found signs of rats in our warehouse and contacted SafeHaven Pest Control. Quick response, professional inspection, and effective treatment. They also helped identify and seal entry points. Very satisfied.",
    service: "Rodent Control",
  },
  {
    id: "6",
    name: "Deepa Krishnamurthy",
    location: "Gachibowli, Hyderabad",
    rating: 5,
    review:
      "I have been using SafeHaven Pest Control for quarterly pest control at my apartment for the past year. Consistent, professional service every time. The technicians are knowledgeable and courteous.",
    service: "General Pest Control",
  },
];

export type FAQ = {
  question: string;
  answer: string;
};

export const faqs: FAQ[] = [
  {
    question: "How much does pest control cost?",
    answer:
      "The cost of pest control depends on the type of pest, the size of the property, and the extent of the infestation. Contact us for a free inspection and we will provide a transparent quote based on your specific requirements.",
  },
  {
    question: "How long does a pest control treatment take?",
    answer:
      "Treatment duration varies depending on the service and property size. A typical residential treatment takes between 1 and 3 hours. More complex services or larger properties may take longer. Your technician will give you an estimated timeframe.",
  },
  {
    question: "Is pest control safe for children and pets?",
    answer:
      "We use treatments that are appropriate for the environment and follow safe application practices. Your technician will advise on any specific precautions recommended for your treatment, including re-entry times where applicable.",
  },
  {
    question: "Do I need to leave the property during treatment?",
    answer:
      "This depends on the treatment type. Many treatments allow residents to remain in unaffected areas of the property. Your technician will advise on the appropriate precautions for your specific treatment.",
  },
  {
    question: "How often should pest control be performed?",
    answer:
      "Frequency depends on the pest type, property characteristics, and local conditions. Some pest issues are addressed with a single treatment, while others benefit from regular scheduled services. We will recommend an appropriate program for your situation.",
  },
  {
    question: "How should I prepare before a pest control treatment?",
    answer:
      "Preparation requirements vary by treatment type. Your technician will provide specific instructions before the visit. General recommendations may include clearing access to treatment areas, securing or removing food items, and ensuring the technician has access to relevant areas.",
  },
  {
    question: "Do you provide commercial pest control services?",
    answer:
      "Yes. We provide pest management services for a range of commercial properties including restaurants, hotels, offices, warehouses, and retail spaces. Our commercial programs include regular inspection, targeted treatment, monitoring, and documentation.",
  },
  {
    question: "Do you offer follow-up visits?",
    answer:
      "Follow-up requirements depend on the service and the pest issue. Your technician will advise on whether follow-up treatment is recommended and what to expect after initial treatment.",
  },
  {
    question: "How quickly can I get an inspection?",
    answer:
      "We aim to respond to enquiries promptly. Contact us via phone, WhatsApp, or our online form and we will schedule an inspection at the earliest available appointment. For urgent situations, please call us directly.",
  },
  {
    question: "Which areas do you serve?",
    answer:
      "We serve Hyderabad and surrounding areas including Banjara Hills, Jubilee Hills, Madhapur, Gachibowli, Kondapur, Kukatpally, Secunderabad, Ameerpet, Begumpet, Miyapur, Kompally, and LB Nagar. Contact us to confirm service availability in your location.",
  },
];
