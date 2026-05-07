'use client';

import { useScroll, useSpring, motion } from 'framer-motion';

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 200, damping: 30, restDelta: 0.001 });

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-[2px] z-[9999]"
      style={{
        scaleX,
        transformOrigin: '0%',
        background: 'linear-gradient(90deg, #60a5fa, #a855f7, #22d3ee)',
      }}
    />
  );
}
