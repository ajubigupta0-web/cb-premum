import { useRef } from 'react';
import { useStripeParallax } from '../hooks/useStripeParallax';

export default function StripeHeroBackground() {
  const ref = useRef(null);

  // Extremely subtle: keeps 60fps while feeling premium.
  useStripeParallax(ref, { strength: 10 });

  return (
    <div className="hero-burst-bg" ref={ref} aria-hidden="true">
      <div className="fluent-gradient" />
      <div className="fluent-glass-stack">
        <div className="fluent-square sq1" />
        <div className="fluent-square sq2" />
        <div className="fluent-square sq3" />
        <div className="fluent-square sq4" />
      </div>
    </div>
  );
}

