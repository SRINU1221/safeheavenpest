// Central site configuration for SafeHaven Pest Control
// Update these values with actual business information before going live

export const siteConfig = {
  name: "SafeHaven Pest Control",
  tagline: "Professional Pest Control Solutions",
  description:
    "Professional pest-control solutions for homes and businesses in Hyderabad. Request a free inspection and get a customized solution for your pest problem.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://safehavenpestcontrol.com",

  // Contact Information
  phone: "+91 95050 82120",
  phoneTel: "+919505082120",
  whatsapp: "+919505082120",
  email: "info@safehavenpestcontrol.com",
  address: "Business Address, Hyderabad, Telangana, India",
  mapUrl: "https://maps.google.com",

  // Business Hours
  businessHours: {
    weekdays: "Monday – Saturday: 8:00 AM – 7:00 PM",
    sunday: "Sunday: 9:00 AM – 4:00 PM",
    emergency: "Emergency services available",
  },

  // WhatsApp prefilled message
  whatsappMessage: "Hello, I would like to know more about your pest-control services.",

  // Social Links
  social: {
    facebook: "https://facebook.com",
    instagram: "https://instagram.com",
    twitter: "https://twitter.com",
    youtube: "https://youtube.com",
  },

  // Service Areas
  serviceAreas: [
    { name: "Banjara Hills", slug: "banjara-hills" },
    { name: "Jubilee Hills", slug: "jubilee-hills" },
    { name: "Madhapur", slug: "madhapur" },
    { name: "Gachibowli", slug: "gachibowli" },
    { name: "Kondapur", slug: "kondapur" },
    { name: "Kukatpally", slug: "kukatpally" },
    { name: "Secunderabad", slug: "secunderabad" },
    { name: "Ameerpet", slug: "ameerpet" },
    { name: "Begumpet", slug: "begumpet" },
    { name: "Miyapur", slug: "miyapur" },
    { name: "Kompally", slug: "kompally" },
    { name: "LB Nagar", slug: "lb-nagar" },
  ],

  // Statistics (replace with verified figures)
  stats: {
    experience: "10+",
    customers: "5,000+",
    areas: "20+",
    satisfaction: "95%",
  },

  // Navigation
  nav: [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    {
      label: "Services",
      href: "/services",
      children: [
        { label: "Termite Control", href: "/services/termite-control" },
        { label: "Cockroach Control", href: "/services/cockroach-control" },
        { label: "Bed Bug Control", href: "/services/bed-bug-control" },
        { label: "Mosquito Control", href: "/services/mosquito-control" },
        { label: "Rodent Control", href: "/services/rodent-control" },
        { label: "Ant Control", href: "/services/ant-control" },
        { label: "Commercial Pest Control", href: "/services/commercial-pest-control" },
      ],
    },
    { label: "Why Us", href: "/why-us" },
    { label: "Process", href: "/process" },
    { label: "Areas", href: "/service-areas" },
    { label: "Blog", href: "/blog" },
    { label: "Contact", href: "/contact" },
  ],
};

export type SiteConfig = typeof siteConfig;
