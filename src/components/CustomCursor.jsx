import { useEffect, useState, useRef } from 'react';

const CURSOR_COLOR = '#000000';
const DOT_SIZE = 12;
const RING_SIZE = 42;
const RING_BORDER = 2;
const SMOOTHING = 0.15; // lower = smoother follow for ring

export default function CustomCursor() {
  const [useCursor, setUseCursor] = useState(false);
  const [visible, setVisible] = useState(false);
  const [isHover, setIsHover] = useState(false);
  const dotRef = useRef(null);
  const ringRef = useRef(null);
  const mouseRef = useRef({ x: 0, y: 0 });
  const ringPosRef = useRef({ x: -100, y: -100 });
  const rafRef = useRef(null);

  useEffect(() => {
    setUseCursor(window.matchMedia('(pointer: fine)').matches);
  }, []);

  useEffect(() => {
    if (!useCursor) return;

    const dot = dotRef.current;
    const ring = ringRef.current;
    if (!dot || !ring) return;

    const isHoverTarget = (el) => {
      if (!el || el === document.body) return false;
      const tag = el.tagName?.toLowerCase();
      const role = el.getAttribute?.('role');
      const isDirect =
        tag === 'a' ||
        tag === 'button' ||
        tag === 'input' ||
        tag === 'select' ||
        tag === 'textarea' ||
        tag === 'img' ||
        tag === 'video' ||
        tag === 'svg' ||
        /^h[1-6]$/.test(tag) || // h1–h6 headings
        role === 'button' ||
        role === 'link' ||
        el.closest?.('a, button, img, video, [role="button"], [role="link"], [data-cursor-hover]');
      if (isDirect) return true;
      // Headings and icons (SVG or common icon classes)
      if (el.closest?.('h1, h2, h3, h4, h5, h6')) return true;
      if (el.closest?.('svg') || el.closest?.('[class*="icon"]') || el.closest?.('[class*="Icon"]')) return true;
      const style = window.getComputedStyle?.(el);
      return style?.cursor === 'pointer';
    };

    const onMouseMove = (e) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };
      if (!visible) {
        setVisible(true);
        document.body.classList.add('custom-cursor-visible');
      }
      const target = document.elementFromPoint(e.clientX, e.clientY);
      const hover = isHoverTarget(target);
      setIsHover(hover);
      if (hover) {
        document.body.classList.add('custom-cursor-hover');
      } else {
        document.body.classList.remove('custom-cursor-hover');
      }
      if (dot) dot.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
    };

    const animate = () => {
      const { x: mx, y: my } = mouseRef.current;
      let { x: rx, y: ry } = ringPosRef.current;
      rx += (mx - rx) * SMOOTHING;
      ry += (my - ry) * SMOOTHING;
      ringPosRef.current = { x: rx, y: ry };
      ring.style.transform = `translate(${rx}px, ${ry}px)`;
      rafRef.current = requestAnimationFrame(animate);
    };

    const onMouseLeave = () => {
      setVisible(false);
      document.body.classList.remove('custom-cursor-visible');
    };
    const onMouseEnter = () => document.body.classList.add('custom-cursor-visible');

    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseleave', onMouseLeave);
    document.body.addEventListener('mouseenter', onMouseEnter);
    rafRef.current = requestAnimationFrame(animate);

    document.body.classList.add('custom-cursor-active');

    return () => {
      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseleave', onMouseLeave);
      document.body.removeEventListener('mouseenter', onMouseEnter);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      document.body.classList.remove('custom-cursor-active');
    };
  }, [useCursor, visible]);

  if (!useCursor) return null;

  return (
    <>
      <div
        ref={dotRef}
        className="custom-cursor-dot-outer"
        aria-hidden="true"
      >
        <div
          className={`custom-cursor-dot ${isHover ? 'custom-cursor-hover' : ''}`}
          style={{
            '--cursor-color': CURSOR_COLOR,
            '--cursor-dot-size': `${DOT_SIZE}px`,
          }}
        />
      </div>
      <div
        ref={ringRef}
        className="custom-cursor-ring-outer"
        aria-hidden="true"
      >
        <div
          className={`custom-cursor-ring ${isHover ? 'custom-cursor-hover' : ''}`}
          style={{
            '--cursor-color': CURSOR_COLOR,
            '--cursor-ring-size': `${RING_SIZE}px`,
            '--cursor-ring-border': `${RING_BORDER}px`,
          }}
        />
      </div>
    </>
  );
}
