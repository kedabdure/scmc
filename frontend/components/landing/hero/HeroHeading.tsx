"use client";

import { motion } from "framer-motion";
import type { Variants } from "framer-motion";

type HeroHeadingProps = {
  children: React.ReactNode;
  highlight?: React.ReactNode;
  variants?: Variants;
};

export function HeroHeading({ children, highlight, variants }: HeroHeadingProps) {
  return (
    <motion.h1
      variants={variants}
      className="text-4xl font-medium leading-[1.1] sm:text-6xl lg:text-[65px]"
      style={{ fontFamily: "'Fraunces', serif" }}
    >
      {children}
      {highlight && (
        <>
          <br />
          <span className="text-white/55">{highlight}</span>
        </>
      )}
    </motion.h1>
  );
}
