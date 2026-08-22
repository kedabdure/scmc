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
      className="group mb-6 inline-flex items-center gap-2 rounded-full border border-white/20 bg-black/30 px-4 py-1.5 backdrop-blur-md"
    >
      <span className="text-xs font-medium text-white">{children}</span>
      <svg
        width="12"
        height="11"
        viewBox="0 0 12 12"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="text-white/80 transition-transform duration-300 ease-out group-hover:-rotate-45"
        aria-hidden="true"
      >
        <path
          d="M1 6H11M11 6L6 1M11 6L6 11"
          stroke="currentColor"
          strokeWidth="1.5"
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
