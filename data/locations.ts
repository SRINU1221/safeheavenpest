export interface LocationData {
  id: string;
  name: string;
  slug: string;
  metaDescription: string;
  description: string;
  population?: string;
  landmarks: string[];
}

export const locations: LocationData[] = [
  {
    id: 'loc-1',
    name: 'Banjara Hills',
    slug: 'banjara-hills',
    metaDescription: 'Professional pest control services in Banjara Hills, Hyderabad. Fast response and effective treatments for residential and commercial properties.',
    description: 'We provide premium pest control services tailored for the residential and commercial properties in Banjara Hills. Our experienced technicians understand the specific pest challenges in this upscale neighborhood and offer discreet, effective, and safe solutions.',
    landmarks: ['City Center Mall', 'Taj Krishna', 'KBR National Park (nearby)'],
  },
  {
    id: 'loc-2',
    name: 'Jubilee Hills',
    slug: 'jubilee-hills',
    metaDescription: 'Expert pest control in Jubilee Hills. Protect your home and business with our comprehensive, safe, and guaranteed pest management solutions.',
    description: 'Our comprehensive pest management solutions are available throughout Jubilee Hills. We specialize in protecting large residential properties and businesses from termites, mosquitoes, rodents, and other common pests, ensuring a safe and comfortable environment.',
    landmarks: ['Jubilee Hills Check Post', 'Apollo Health City', 'Peddamma Gudi'],
  },
  {
    id: 'loc-3',
    name: 'Gachibowli',
    slug: 'gachibowli',
    metaDescription: 'Top-rated pest control in Gachibowli. Residential and commercial pest management for apartments, villas, and office spaces.',
    description: 'Serving the bustling IT hub of Gachibowli, we offer customized pest control programs for modern apartment complexes, villas, and corporate offices. Our fast-response team is equipped to handle everything from routine maintenance to severe infestations.',
    landmarks: ['Gachibowli Stadium', 'DLF Cyber City', 'University of Hyderabad'],
  },
  {
    id: 'loc-4',
    name: 'Madhapur',
    slug: 'madhapur',
    metaDescription: 'Reliable pest control services in Madhapur, Hyderabad. Effective solutions for IT parks, restaurants, and residential homes.',
    description: 'Madhapur requires vigilant pest management due to its high density of restaurants, IT parks, and residential areas. We provide targeted treatments to keep these properties free from cockroaches, rodents, and other pests that threaten health and safety.',
    landmarks: ['HITEC City', 'Inorbit Mall', 'Shilparamam'],
  },
  {
    id: 'loc-5',
    name: 'Kukatpally',
    slug: 'kukatpally',
    metaDescription: 'Affordable and effective pest control in Kukatpally. Protect your family with our safe residential pest treatments.',
    description: 'We offer reliable and affordable pest control services across Kukatpally. Whether you live in an independent house or a large apartment complex, our team provides effective solutions for mosquitoes, bed bugs, termites, and more.',
    landmarks: ['Nexus Mall (formerly Sujana Forum)', 'JNTU Hyderabad', 'KPHB Colony'],
  },
  {
    id: 'loc-6',
    name: 'Secunderabad',
    slug: 'secunderabad',
    metaDescription: 'Professional pest control in Secunderabad. Comprehensive pest management for heritage homes, businesses, and commercial spaces.',
    description: 'With its mix of heritage properties and new developments, Secunderabad presents unique pest challenges. Our experts are highly experienced in treating older structures for termites and rodents, as well as providing general pest control for modern buildings.',
    landmarks: ['Secunderabad Railway Station', 'Parade Ground', 'Hussain Sagar (nearby)'],
  },
];
