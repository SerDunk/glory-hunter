"use client";

import { motion } from "motion/react";

export default function Circle() {
  return (
    <motion.div
      animate={{
        opacity: [0.1, 0.3, 0.1],
        scale: [1, 1.05, 1],
        x: [0, 5, -5, 0],
        y: [0, -5, 5, 0],
      }}
      transition={{
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      className="pointer-events-none absolute top-0 h-60 w-60 rounded-full bg-glory-gold-600 blur-3xl filter sm:h-72 sm:w-72"
    />
  );
}
