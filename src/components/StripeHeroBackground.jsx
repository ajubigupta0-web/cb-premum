import { useRef } from 'react';
import { useStripeParallax } from '../hooks/useStripeParallax';

export default function StripeHeroBackground() {
  const ref = useRef(null);

  // Extremely subtle: keeps 60fps while feeling premium.
  useStripeParallax(ref, { strength: 10 });

  return (
    <div className="hero-burst-bg" ref={ref} aria-hidden="true">
      <div className="hero-burst-rays" />
      <div className="hero-burst-glow" />
    </div>
  );
}

