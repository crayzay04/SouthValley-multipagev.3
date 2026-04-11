import { useEffect, useRef, useState } from 'react';

/**
 * Returns [ref, isInView].
 * `once` (default true)  — only fires once when the element enters the viewport.
 * `threshold` — 0–1 fraction of element visible before firing.
 * `rootMargin`  — CSS-style margin around the root.
 */
export default function useInView({
  threshold = 0.15,
  rootMargin = '0px 0px -60px 0px',
  once = true,
} = {}) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          if (once) observer.disconnect();
        } else if (!once) {
          setInView(false);
        }
      },
      { threshold, rootMargin }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold, rootMargin, once]);

  return [ref, inView];
}
