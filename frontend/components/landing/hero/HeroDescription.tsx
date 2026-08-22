"use client";

import { motion } from "framer-motion";
import type { Variants } from "framer-motion";

type HeroDescriptionProps = {
  children: React.ReactNode;
  variants?: Variants;
  className?: string;
};

export function HeroDescription({
  children,
  variants,
  className = "",
}: HeroDescriptionProps) {
  return (
    <motion.p
      variants={variants}
      className={`mt-6 max-w-sm text-lg text-white/80 sm:text-lg leading-5.5 ${className}`}
    >
      {children}
    </motion.p>
  );
}
