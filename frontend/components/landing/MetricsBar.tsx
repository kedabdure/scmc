"use client";

import { motion } from "framer-motion";

import { fadeInUp, staggerContainerFast } from "@/lib/motion";

const METRICS = [
  { value: "10x", label: "Transaction capacity" },
  { value: "$2.8m", label: "Avg annual savings" },
  { value: "120h", label: "Monthly time saved" },
];

export default function MetricsBar() {
  return (
    <section className="border-y border-white/10 bg-[#09090b]">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={staggerContainerFast}
        className="mx-auto grid w-full max-w-[1440px] grid-cols-1 gap-8 px-10 py-16 sm:grid-cols-3"
      >
        {METRICS.map((item) => (
          <motion.div key={item.label} variants={fadeInUp} className="text-white">
            <p className="text-4xl font-semibold tracking-tight">{item.value}</p>
            <p className="mt-2 text-sm font-medium uppercase tracking-wider text-white/60">
              {item.label}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
