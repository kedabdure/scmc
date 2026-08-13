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
    <section className="bg-[#0b0807] py-20">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
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
              className="rounded-3xl border border-white/10 bg-white/[0.04] p-7 text-white backdrop-blur-sm"
            >
              <p className="text-xs uppercase tracking-[0.14em] text-white/60">Feature</p>
              <h3 className="mt-3 text-2xl font-semibold">{feature.title}</h3>
              <p className="mt-4 text-base leading-relaxed text-white/75">{feature.body}</p>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
