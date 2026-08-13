"use client";

import { Reveal } from "@/components/motion/Reveal";

import NavigationHeader from "./NavigationHeader";

type InnerPageHeroProps = {
  eyebrow: string;
  title: string;
  description: string;
};

export default function InnerPageHero({
  eyebrow,
  title,
  description,
}: InnerPageHeroProps) {
  return (
    <section className="relative overflow-hidden border-b border-white/10 bg-[#09090b]">
      <NavigationHeader absolute={false} />
      <div className="mx-auto w-full max-w-[1440px] px-10 pb-24 pt-16">
        <Reveal className="max-w-3xl">
          <div
            className="mb-4 inline-flex items-center gap-2 rounded-full backdrop-blur-[30px]"
            style={{
              background: "rgba(59, 59, 59, 0.4)",
              padding: "6px 16px",
            }}
          >
            <span className="text-xs font-medium uppercase tracking-wider text-white/90">
              {eyebrow}
            </span>
          </div>
          <h1 className="text-5xl font-semibold leading-tight tracking-tight text-white sm:text-6xl">
            {title}
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-white/70">{description}</p>
        </Reveal>
      </div>
    </section>
  );
}
