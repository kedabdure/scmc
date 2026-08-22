"use client";

import { motion } from "framer-motion";

import { StaggerReveal } from "@/components/motion/Reveal";
import { fadeInUp } from "@/lib/motion";

import SectionIntro from "./SectionIntro";

const TESTIMONIALS = [
  {
    quote:
      "Cash flow was our issue. Billing dropped to 5-6 days and we unlocked $1.6M in working capital.",
    author: "David Foster",
    title: "Managing Partner",
  },
  {
    quote:
      "Commission processing went from 50+ hours monthly to less than 8 with full audit traceability.",
    author: "Rachel Martinez",
    title: "CFO",
  },
  {
    quote:
      "Across 11 portfolio companies, NoorFlow delivered $2.1M in annualized savings in year one.",
    author: "Sarah Liu",
    title: "Partner",
  },
];

export default function Testimonials() {
  return (
    <section className="bg-[#f9f9f9] py-24">
      <div className="mx-auto w-full max-w-360 px-10">
        <SectionIntro
          eyebrow="Customer Success"
          title="Real Impact. Transformational Results."
          description="Used by high-growth teams and global operators to transform finance operations."
          theme="light"
        />

        <StaggerReveal className="grid gap-6 md:grid-cols-3">
          {TESTIMONIALS.map((item) => (
            <motion.div
              key={item.author}
              variants={fadeInUp}
              className="rounded-md border border-black/10 bg-white p-8"
            >
              <p className="text-lg leading-relaxed text-black/70">&quot;{item.quote}&quot;</p>
              <p className="mt-6 text-base font-semibold text-black">{item.author}</p>
              <p className="text-sm font-medium uppercase tracking-wider text-black/40">
                {item.title}
              </p>
            </motion.div>
          ))}
        </StaggerReveal>
      </div>
    </section>
  );
}
