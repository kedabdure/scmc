"use client";

import { motion } from "framer-motion";

import { fadeInUp, staggerContainer } from "@/lib/motion";

const FEATURES = [
  {
    title: "Move Faster",
    body: "AI agents handle approvals, reconciliation, and exceptions with audit-ready transparency.",
  },
  {
    title: "Scale Without Friction",
    body: "Process more volume across entities without expanding back-office headcount.",
  },
  {
    title: "Work Smarter",
    body: "Aligns to your compliance rules, approval hierarchy, and Islamic finance standards.",
  },
];

export default function FeatureCards() {
  return (
    <section className="bg-[#09090b] py-24">
      <div className="mx-auto w-full max-w-[1440px] px-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
          variants={staggerContainer}
          className="grid gap-6 md:grid-cols-3"
        >
          {FEATURES.map((feature) => (
            <motion.article
              key={feature.title}
              variants={fadeInUp}
              className="rounded-md border border-white/10 bg-white/[0.02] p-8 text-white"
            >
              <p className="text-xs font-medium uppercase tracking-wider text-white/50">
                Feature
              </p>
              <h3 className="mt-4 text-2xl font-semibold tracking-tight">
                {feature.title}
              </h3>
              <p className="mt-3 text-base leading-relaxed text-white/70">
                {feature.body}
              </p>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
