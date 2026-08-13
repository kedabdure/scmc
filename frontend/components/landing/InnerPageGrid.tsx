"use client";

import { motion } from "framer-motion";

import { StaggerReveal } from "@/components/motion/Reveal";
import { fadeInUp } from "@/lib/motion";

type Item = {
  title: string;
  body: string;
};

type InnerPageGridProps = {
  items: Item[];
};

export default function InnerPageGrid({ items }: InnerPageGridProps) {
  return (
    <section className="bg-[#09090b] py-24">
      <div className="mx-auto w-full max-w-[1440px] px-10">
        <StaggerReveal className="grid gap-6 md:grid-cols-3">
          {items.map((item) => (
            <motion.div
              key={item.title}
              variants={fadeInUp}
              className="rounded-md border border-white/10 bg-white/[0.02] p-8 text-white"
            >
              <h2 className="text-2xl font-semibold tracking-tight">{item.title}</h2>
              <p className="mt-4 leading-relaxed text-white/70">{item.body}</p>
            </motion.div>
          ))}
        </StaggerReveal>
      </div>
    </section>
  );
}
