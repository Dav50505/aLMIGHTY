'use client';

import { motion, useReducedMotion } from 'framer-motion';

const easeSmooth = [0.25, 0.4, 0.25, 1];
const duration = 0.6;

interface PageHeroProps {
  title: string;
  subtitle?: string;
  className?: string;
}

export default function PageHero({ title, subtitle, className = '' }: PageHeroProps) {
  const reduceMotion = useReducedMotion();
  const instant = reduceMotion === true;

  return (
    <div className={`relative z-10 text-center text-white px-4 ${className}`}>
      <motion.h1
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: instant ? 0 : duration, ease: easeSmooth }}
        className="font-[family-name:var(--font-playfair)] text-5xl md:text-6xl font-bold mb-4"
      >
        {title}
      </motion.h1>
      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: instant ? 0 : duration, delay: 0.15, ease: easeSmooth }}
          className="text-xl text-white/90 max-w-2xl mx-auto"
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  );
}
