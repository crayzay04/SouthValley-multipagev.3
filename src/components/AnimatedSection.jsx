import useInView from '../hooks/useInView';

/**
 * Wraps children in a scroll-triggered reveal.
 *
 * variant:
 *   'fadeUp'    (default) — fade in + translate up
 *   'fadeIn'              — pure fade
 *   'slideLeft'           — slide in from left
 *   'slideRight'          — slide in from right
 *   'scaleIn'             — scale up from 95%
 *
 * delay   — CSS transitionDelay string e.g. '150ms' OR Tailwind class 'delay-150'
 *            Pass numeric ms via the `style` prop: style={{ transitionDelay: '200ms' }}
 * className — extra classes on the wrapper
 * style     — extra inline styles (merged with animation state styles)
 */
export default function AnimatedSection({
  children,
  variant = 'fadeUp',
  delay = '',
  className = '',
  threshold = 0.12,
  as: Tag = 'div',
  style: extraStyle = {},
}) {
  const [ref, inView] = useInView({ threshold });

  const DURATION = '0.6s';

  const hiddenStyles = {
    fadeUp:     { opacity: 0, transform: 'translateY(28px)' },
    fadeIn:     { opacity: 0 },
    slideLeft:  { opacity: 0, transform: 'translateX(-36px)' },
    slideRight: { opacity: 0, transform: 'translateX(36px)' },
    scaleIn:    { opacity: 0, transform: 'scale(0.94)' },
  }[variant] ?? { opacity: 0, transform: 'translateY(28px)' };

  const visibleStyles = {
    opacity: 1,
    transform: 'translateY(0) translateX(0) scale(1)',
  };

  // Merge transition delay: prefer style prop, fall back to delay string
  const delayValue = extraStyle.transitionDelay ?? (delay ? delay : '0ms');

  const inlineStyle = {
    transition: `opacity ${DURATION} ease, transform ${DURATION} ease`,
    transitionDelay: delayValue,
    ...(inView ? visibleStyles : hiddenStyles),
    // Allow any additional style overrides EXCEPT the ones we control
    ...Object.fromEntries(
      Object.entries(extraStyle).filter(([k]) => k !== 'transitionDelay')
    ),
  };

  return (
    <Tag ref={ref} className={className} style={inlineStyle}>
      {children}
    </Tag>
  );
}
