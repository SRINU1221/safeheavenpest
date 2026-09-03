import './WhyChooseUs.css';

const benefits = [
  {
    icon: '🎯',
    title: 'Targeted Treatment',
    description:
      'Solutions based on accurate pest identification and property requirements, not generic spray-and-hope approaches.',
  },
  {
    icon: '🛡️',
    title: 'Safety Focused',
    description:
      'Treatment recommendations that prioritize responsible application and the wellbeing of residents, staff, and the surrounding environment.',
  },
  {
    icon: '👨‍🔬',
    title: 'Experienced Professionals',
    description:
      'Trained technicians using structured pest-management procedures developed through years of field experience.',
  },
  {
    icon: '⚡',
    title: 'Fast Response',
    description:
      'We make it easy for customers to request an inspection, with prompt scheduling and responsive service.',
  },
  {
    icon: '💬',
    title: 'Transparent Service',
    description:
      'We explain the treatment process, what to expect, and provide clear documentation so you are informed throughout.',
  },
  {
    icon: '🔄',
    title: 'Follow-Up Support',
    description:
      'Prevention guidance and follow-up support where appropriate, helping you maintain results after treatment.',
  },
];

export default function WhyChooseUs() {
  return (
    <section className="section why-us" id="why-us" aria-labelledby="why-us-title">
      <div className="container">
        <div className="section-header reveal">
          <span className="section-label">Why Choose Us</span>
          <h2 className="section-title" id="why-us-title">
            Reliable Pest Control <span>You Can Count On</span>
          </h2>
          <p className="section-subtitle">
            We combine professional expertise, responsible treatment methods, and genuine customer care to deliver pest management services you can trust.
          </p>
        </div>

        <div className="why-us__grid">
          {benefits.map((benefit, index) => (
            <div
              key={benefit.title}
              className={`why-us__card reveal delay-${Math.min((index % 3 + 1) * 100, 300)}`}
            >
              <div className="why-us__card-icon" aria-hidden="true">{benefit.icon}</div>
              <h3 className="why-us__card-title">{benefit.title}</h3>
              <p className="why-us__card-desc">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
