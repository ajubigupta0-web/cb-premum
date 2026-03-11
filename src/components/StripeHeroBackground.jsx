import { useRef } from 'react';
import { useStripeParallax } from '../hooks/useStripeParallax';

export default function StripeHeroBackground() {
  const ref = useRef(null);

  // Extremely subtle: keeps 60fps while feeling premium.
  useStripeParallax(ref, { strength: 10 });

  return (
    <div className="stripe-bg" ref={ref} aria-hidden="true">
      <div className="stripe-plane plane1"></div>
      <div className="stripe-plane plane2"></div>
      <div className="stripe-plane plane3"></div>
      <div className="stripe-plane plane4"></div>
      <div className="stripe-plane plane5"></div>
    </div>
  );
}

