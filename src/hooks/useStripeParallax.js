import { useEffect } from 'react';

export function useStripeParallax(ref, { strength = 10 } = {}) {
  useEffect(() => {
    const el = ref?.current;
    if (!el) return;

    const prefersReducedMotion =
      typeof window !== 'undefined' &&
      window.matchMedia &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (prefersReducedMotion) return;

    let raf = 0;
    let targetX = 0;
    let targetY = 0;
    let currentX = 0;
    let currentY = 0;

    const clamp = (v, min, max) => Math.min(max, Math.max(min, v));

    const onMove = (e) => {
      const rect = el.getBoundingClientRect();
      const nx = (e.clientX - rect.left) / rect.width; // 0..1
      const ny = (e.clientY - rect.top) / rect.height; // 0..1
      targetX = (nx - 0.5) * 2; // -1..1
      targetY = (ny - 0.5) * 2; // -1..1
    };

    const tick = () => {
      // Smooth follow for subtle premium feel
      currentX += (targetX - currentX) * 0.08;
      currentY += (targetY - currentY) * 0.08;

      const px = clamp(currentX * strength, -strength, strength);
      const py = clamp(currentY * strength, -strength, strength);

      el.style.setProperty('--stripe-parallax-x', `${px}px`);
      el.style.setProperty('--stripe-parallax-y', `${py}px`);

      raf = window.requestAnimationFrame(tick);
    };

    el.addEventListener('mousemove', onMove, { passive: true });
    raf = window.requestAnimationFrame(tick);

    return () => {
      el.removeEventListener('mousemove', onMove);
      if (raf) window.cancelAnimationFrame(raf);
    };
  }, [ref, strength]);
}

