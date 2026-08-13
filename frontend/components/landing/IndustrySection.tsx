"use client";

import { motion } from "framer-motion";

import { Reveal, StaggerReveal } from "@/components/motion/Reveal";
import { fadeInUp } from "@/lib/motion";

import SectionIntro from "./SectionIntro";

const INDUSTRIES = [
  "Professional Services",
  "Banking",
  "Insurance",
  "Legal",
];

export default function IndustrySection() {
  return (
    <section className="bg-[#09090b] py-24">
      <div className="mx-auto w-full max-w-[1440px] px-10">
        <SectionIntro
          eyebrow="Solutions"
          title="Built For Your Industry"
          description="NoorFlow owns finance workflows end-to-end, adapting to each operating model and compliance layer."
        />

        <StaggerReveal className="grid gap-4 md:grid-cols-4">
          {INDUSTRIES.map((industry) => (
            <motion.div
              key={industry}
              variants={fadeInUp}
              className="rounded-md border border-white/10 bg-white/[0.02] px-6 py-5 text-center text-sm font-medium uppercase tracking-wider text-white/80"
            >
              {industry}
            </motion.div>
          ))}
        </StaggerReveal>

        <Reveal className="mt-8 rounded-md border-l-4 border-white/20 bg-white/[0.03] p-10 text-white">
          <h3 className="text-2xl font-semibold tracking-tight">
            Professional Services
          </h3>
          <p className="mt-4 max-w-3xl leading-relaxed text-white/70">
            Consulting, accounting, and advisory firms use NoorFlow to automate
            client billing, multi-entity accounting, and approval-heavy workflows.
          </p>
          <p className="mt-6 text-4xl font-semibold tracking-tight">
            $1m+ first-year savings
          </p>
        </Reveal>
      </div>
    </section>
  );
}
