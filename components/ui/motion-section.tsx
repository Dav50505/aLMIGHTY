'use client';

import { useRef } from 'react';
import { motion, useInView, useReducedMotion } from 'framer-motion';

export const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

export const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

const defaultTransition = { duration: 0.5, ease: [0.25, 0.4, 0.25, 1] };
const staggerTransition = { staggerChildren: 0.08, delayChildren: 0.05 };

interface MotionSectionProps {
  children: React.ReactNode;
  className?: string;
  /** Use stagger for child motion elements; children should be motion.* with variants */
  stagger?: boolean;
  /** Variant: fadeUp (default) or fadeIn */
  variant?: 'fadeUp' | 'fadeIn';
  /** Root margin for useInView (e.g. "0px 0px -80px 0px" to trigger a bit early) */
  rootMargin?: string;
  /** Render as section or div */
  as?: 'section' | 'div';
}

export function MotionSection({
  children,
  className,
  stagger = false,
  variant = 'fadeUp',
  rootMargin = '0px 0px -60px 0px',
  as: Tag = 'div',
}: MotionSectionProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: rootMargin });
  const reduceMotion = useReducedMotion();

  const contentVariants = variant === 'fadeIn' ? fadeIn : fadeUp;
  const instant = reduceMotion === true;

  const containerVariants = stagger
    ? {
        hidden: {},
        visible: {
          transition: instant ? { duration: 0 } : staggerTransition,
        },
      }
    : contentVariants;

  const Wrapper = Tag === 'section' ? motion.section : motion.div;

  return (
    <Wrapper
      ref={ref as React.Ref<HTMLDivElement>}
      initial={stagger ? 'hidden' : (instant ? false : contentVariants.hidden)}
      animate={
        stagger
          ? isInView
            ? 'visible'
            : 'hidden'
          : isInView
            ? contentVariants.visible
            : instant
              ? contentVariants.visible
              : contentVariants.hidden
      }
      variants={containerVariants}
      transition={instant ? { duration: 0 } : defaultTransition}
      className={className}
    >
      {stagger ? (
        <>{children}</>
      ) : (
        children
      )}
    </Wrapper>
  );
}

/** Child for use inside MotionSection with stagger: use variants={fadeUp} or variants={fadeIn} */
export function MotionItem({
  children,
  className,
  variants = fadeUp,
}: {
  children: React.ReactNode;
  className?: string;
  variants?: typeof fadeUp | typeof fadeIn;
}) {
  const reduceMotion = useReducedMotion();
  return (
    <motion.div
      variants={variants}
      transition={reduceMotion ? { duration: 0 } : defaultTransition}
      className={className}
    >
      {children}
    </motion.div>
  );
}
