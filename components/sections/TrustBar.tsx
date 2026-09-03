import './TrustBar.css';

const trustItems = [
  { icon: '🏆', value: '10+', label: 'Years Experience' },
  { icon: '👥', value: '5,000+', label: 'Customers Served' },
  { icon: '📍', value: '20+', label: 'Service Areas' },
  { icon: '⚡', value: '< 2hrs', label: 'Response Time' },
  { icon: '✅', value: '95%', label: 'Satisfaction Rate' },
];

export default function TrustBar() {
  return (
    <div className="trust-bar" aria-label="Our key statistics">
      <div className="container">
        <ul className="trust-bar__list">
          {trustItems.map((item) => (
            <li key={item.label} className="trust-bar__item">
              <span className="trust-bar__icon" aria-hidden="true">{item.icon}</span>
              <div className="trust-bar__content">
                <strong className="trust-bar__value">{item.value}</strong>
                <span className="trust-bar__label">{item.label}</span>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
