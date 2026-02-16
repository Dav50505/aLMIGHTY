'use client';

import { motion, useReducedMotion } from 'framer-motion';

const easeSmooth = [0.25, 0.4, 0.25, 1];
const duration = 0.8;

export default function HomeClient() {
  const reduceMotion = useReducedMotion();

  return (
    <>
      <motion.h1
        initial={{ opacity: 0, y: 30, scale: reduceMotion ? 1 : 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: reduceMotion ? 0 : duration, ease: easeSmooth }}
        className="font-[family-name:var(--font-playfair)] text-5xl md:text-7xl font-bold mb-4"
      >
        aLMIGHTY BISTRO
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: reduceMotion ? 0 : duration, delay: 0.2, ease: easeSmooth }}
        className="text-xl md:text-2xl mb-8 text-white/90"
      >
        Island Fusion Cuisine
      </motion.p>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: reduceMotion ? 0 : duration, delay: 0.4, ease: easeSmooth }}
        className="flex flex-col sm:flex-row gap-4 justify-center"
      >
        <a
          href="https://order.toasttab.com/online/mom-and-pop-chicken-shop-el-dorado-hills-4355-town-center-blvd-114"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary"
        >
          Order Online
        </a>
        <a
          href="https://www.yelp.com/biz/almighty-bistro-el-dorado-hills"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-secondary"
        >
          Make Reservation
        </a>
      </motion.div>
    </>
  );
}
