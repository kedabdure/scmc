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
    <section className="bg-[#090706] py-24">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionIntro
          eyebrow="Built For Modern Teams"
          title="Supercharge Your Finance Team With Powerful Automation"
          description="NoorFlow frees your team from repetitive admin so they can focus on strategic work and growth."
        />

        <StaggerReveal className="grid gap-6 md:grid-cols-3">
          {ITEMS.map((item) => (
            <motion.article
              key={item.title}
              variants={fadeInUp}
              className="rounded-3xl border border-white/10 bg-white/[0.03] p-7 text-white"
            >
              <p className="text-xs uppercase tracking-[0.14em] text-white/60">Metric</p>
              <p className="mt-4 text-5xl font-semibold tracking-tight">{item.stat}</p>
              <h3 className="mt-4 text-2xl font-semibold">{item.title}</h3>
              <p className="mt-3 text-white/70">{item.desc}</p>
            </motion.article>
          ))}
        </StaggerReveal>

        <Reveal className="mt-10 rounded-3xl border border-amber-200/20 bg-amber-100/5 p-7 text-white/80">
          We cut our billing cycle from 20 days to 6 days and unlocked visibility
          our team never had before.
        </Reveal>
      </div>
    </section>
  );
}
