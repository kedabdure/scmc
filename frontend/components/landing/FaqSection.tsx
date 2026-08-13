"use client";

import { motion } from "framer-motion";

import { StaggerReveal } from "@/components/motion/Reveal";
import { fadeInUp } from "@/lib/motion";

import SectionIntro from "./SectionIntro";

const FAQS = [
  "How long does implementation take?",
  "Do we need to change our existing systems?",
  "How do you ensure financial accuracy?",
  "Is our financial data secure?",
  "Can we start with one workflow?",
];

export default function FaqSection() {
  return (
    <section className="bg-[#09090b] py-24">
      <div className="mx-auto w-full max-w-5xl px-10">
        <SectionIntro
          eyebrow="FAQ"
          title="Your Questions Answered"
          description="NoorFlow owns entire finance workflows while keeping your team in full control."
        />

        <StaggerReveal className="space-y-3">
          {FAQS.map((question) => (
            <motion.details
              key={question}
              variants={fadeInUp}
              className="group rounded-md border border-white/10 bg-white/[0.02] p-6 text-white"
            >
              <summary className="cursor-pointer list-none text-lg font-medium">
                {question}
              </summary>
              <p className="mt-3 leading-relaxed text-white/70">
                We tailor rollout to your current stack and governance model,
                then scale automation in measured phases.
              </p>
            </motion.details>
          ))}
        </StaggerReveal>
      </div>
    </section>
  );
}
