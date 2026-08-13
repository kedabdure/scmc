"use client";

import { motion } from "framer-motion";
import type { Variants } from "framer-motion";

type HeroBadgeProps = {
  children: React.ReactNode;
  variants?: Variants;
  href?: string;
};

export function HeroBadge({ children, variants, href }: HeroBadgeProps) {
  const content = (
    <motion.div
      variants={variants}
      className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/20 bg-black/30 px-4 py-2 backdrop-blur-md transition-colors hover:border-white/30"
    >
      <span className="text-sm font-medium text-white">{children}</span>
      <svg
        width="12"
        height="12"
        viewBox="0 0 12 12"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="text-white/60"
        aria-hidden="true"
      >
        <path
          d="M1 11L11 1M11 1H1M11 1V11"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </motion.div>
  );

  if (href) {
    return (
      <a href={href} className="inline-block">
        {content}
      </a>
    );
  }

  return content;
}
