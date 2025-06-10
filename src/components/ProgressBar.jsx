'use client';

import { motion, useScroll } from 'framer-motion';

export default function ProgressBar() {
  const { scrollYProgress } = useScroll();

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#9256A4] via-[#4D2C5E] to-[#2B2D42] origin-left z-50"
      style={{ scaleX: scrollYProgress }}
    />
  );
}