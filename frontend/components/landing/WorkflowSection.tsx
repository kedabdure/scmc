"use client";

import { motion } from "framer-motion";

import { Reveal, StaggerReveal } from "@/components/motion/Reveal";
import { fadeInUp } from "@/lib/motion";

import SectionIntro from "./SectionIntro";

const ITEMS = [
  {
    title: "Faster Billing",
    stat: "10x",
    desc: "AI agents own end-to-end billing workflows and automatically resolve edge cases.",
  },
  {
    title: "Time Saved Monthly",
    stat: "120h",
    desc: "Teams reclaim hours by automating reconciliation, approvals, and reporting cycles.",
  },
  {
    title: "Reduction In Costs",
    stat: "62%",
    desc: "NoorFlow reduces operational drag through intelligent finance workflow orchestration.",
  },
];

export default function WorkflowSection() {
  return (
    <section className="bg-[#f9f9f9] py-24">
      <div className="mx-auto w-full max-w-360 px-10">
        <SectionIntro
          eyebrow="Built For Modern Teams"
          title="Supercharge Your Finance Team With Powerful Automation"
          description="NoorFlow frees your team from repetitive admin so they can focus on strategic work and growth."
        />

        <StaggerReveal className="mt-16 grid gap-6 md:grid-cols-3">
          {ITEMS.map((item) => (
            <motion.article
              key={item.title}
              variants={fadeInUp}
              className="rounded-md border border-black/10 bg-white p-8"
            >
              <p className="text-xs font-medium uppercase tracking-wider text-black/40">
                Metric
              </p>
              <p className="mt-4 text-5xl font-semibold tracking-tight text-black">
                {item.stat}
              </p>
              <h3 className="mt-4 text-2xl font-semibold tracking-tight text-black">
                {item.title}
              </h3>
              <p className="mt-3 leading-relaxed text-black/60">{item.desc}</p>
            </motion.article>
          ))}
        </StaggerReveal>

        <Reveal className="mt-10 rounded-md border-l-4 border-black/20 bg-white p-8 text-lg leading-relaxed text-black/70">
          &quot;We cut our billing cycle from 20 days to 6 days and unlocked visibility
          our team never had before.&quot;
        </Reveal>
      </div>
    </section>
  );
}
