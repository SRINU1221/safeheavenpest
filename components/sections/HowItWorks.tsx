import './HowItWorks.css';

const steps = [
  {
    number: '01',
    title: 'Contact Us',
    description:
      'Call us, send a WhatsApp message, or submit an enquiry online. Tell us about your pest problem and location.',
    icon: '📞',
  },
  {
    number: '02',
    title: 'Inspection',
    description:
      'Our technician visits your property, identifies the pest issue, assesses the affected areas, and determines the best approach.',
    icon: '🔍',
  },
  {
    number: '03',
    title: 'Treatment',
    description:
      'We recommend and perform the appropriate professional treatment using targeted methods suited to your specific pest problem.',
    icon: '🧪',
  },
  {
    number: '04',
    title: 'Follow-Up',
    description:
      'We provide prevention guidance and follow-up support where applicable to help you maintain a pest-free property.',
    icon: '✅',
  },
];

export default function HowItWorks() {
  return (
    <section className="section how-it-works" id="process" aria-labelledby="process-title">
      <div className="container">
        <div className="section-header reveal">
          <span className="section-label">Our Process</span>
          <h2 className="section-title" id="process-title">
            How It <span>Works</span>
          </h2>
          <p className="section-subtitle">
            A simple, clear process designed to get your pest problem resolved as efficiently as possible.
          </p>
        </div>

        <div className="how-it-works__steps">
          {steps.map((step, index) => (
            <div
              key={step.number}
              className={`how-it-works__step reveal delay-${(index + 1) * 100}`}
              aria-label={`Step ${step.number}: ${step.title}`}
            >
              <div className="how-it-works__step-connector" aria-hidden="true" />
              <div className="how-it-works__step-number" aria-hidden="true">
                {step.number}
              </div>
              <div className="how-it-works__step-icon" aria-hidden="true">
                {step.icon}
              </div>
              <h3 className="how-it-works__step-title">{step.title}</h3>
              <p className="how-it-works__step-desc">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
