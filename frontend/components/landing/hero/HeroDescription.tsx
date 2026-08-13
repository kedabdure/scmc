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
      className={`mt-8 max-w-[540px] text-lg leading-relaxed text-white/80 sm:text-xl ${className}`}
    >
      {children}
    </motion.p>
  );
}
