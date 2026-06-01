'use client';

import { motion } from 'framer-motion';

export default function Preloader() {
  return (
    <motion.div
      className="fixed inset-0 z-[9998] flex flex-col items-center justify-center bg-forest-dark"
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6, ease: 'easeInOut' }}
    >
      {/* Tree SVG icon */}
      <motion.svg
        width="64"
        height="64"
        viewBox="0 0 64 64"
        fill="none"
        initial={{ scale: 0.6, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      >
        <motion.path
          d="M32 6L14 28h10v22h16V28h10L32 6z"
          stroke="#D4C4A8"
          strokeWidth="1.5"
          fill="none"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1.2, ease: 'easeInOut', delay: 0.2 }}
        />
        <motion.rect
          x="28" y="44" width="8" height="12"
          fill="#D4C4A8"
          initial={{ scaleY: 0 }}
          animate={{ scaleY: 1 }}
          transition={{ duration: 0.4, delay: 1.0 }}
          style={{ transformOrigin: 'top' }}
        />
      </motion.svg>

      <motion.span
        className="mt-6 font-display text-2xl font-light tracking-[0.25em] text-cream-sand"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.6 }}
      >
        ЛЕСНОЙ УЮТ
      </motion.span>

      {/* Progress bar */}
      <motion.div className="mt-8 h-px w-32 overflow-hidden bg-forest-mid">
        <motion.div
          className="h-full bg-cream-sand"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1.8, ease: 'easeInOut', delay: 0.3 }}
          style={{ transformOrigin: 'left' }}
        />
      </motion.div>
    </motion.div>
  );
}
