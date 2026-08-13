"use client";

import { motion } from "framer-motion";

import { fadeInUp, staggerContainer } from "@/lib/motion";

type RevealProps = {
  children: React.ReactNode;
  className?: string;
};

export function Reveal({ children, className }: RevealProps) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={fadeInUp}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function StaggerReveal({ children, className }: RevealProps) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.15 }}
      variants={staggerContainer}
      className={className}
    >
      {children}
    </motion.div>
  );
}
