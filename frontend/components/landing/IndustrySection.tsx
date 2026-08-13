import { Reveal, StaggerReveal } from "@/components/motion/Reveal";

import SectionIntro from "./SectionIntro";

const INDUSTRIES = [
  "Professional Services",
  "Banking",
  "Insurance",
  "Legal",
];

export default function IndustrySection() {
  return (
    <section className="bg-[#0b0807] py-24">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionIntro
          eyebrow="Solutions"
          title="Built For Your Industry"
          description="NoorFlow owns finance workflows end-to-end, adapting to each operating model and compliance layer."
        />

        <StaggerReveal className="grid gap-4 md:grid-cols-4">
          {INDUSTRIES.map((industry) => (
            <Reveal
              key={industry}
              className="rounded-2xl border border-white/10 bg-white/[0.02] px-4 py-4 text-center text-sm font-medium uppercase tracking-[0.1em] text-white/80"
            >
              {industry}
            </Reveal>
          ))}
        </StaggerReveal>

        <Reveal className="mt-8 rounded-3xl border border-white/10 bg-white/[0.04] p-8 text-white">
          <h3 className="text-2xl font-semibold">Professional Services</h3>
          <p className="mt-4 max-w-3xl text-white/75">
            Consulting, accounting, and advisory firms use NoorFlow to automate
            client billing, multi-entity accounting, and approval-heavy workflows.
          </p>
          <p className="mt-5 text-4xl font-semibold">$1m+ first-year savings</p>
        </Reveal>
      </div>
    </section>
  );
}
