"use client";

import { VerticalLine } from "@/components/commons/VerticalLine";
import { Reveal } from "@/components/motion/Reveal";

type SectionIntroProps = {
  eyebrow: string;
  title: string;
  description: string;
  theme?: "dark" | "light";
};

export default function SectionIntro({
  eyebrow,
  title,
  description,
  theme = "dark",
}: SectionIntroProps) {
  const isDark = theme === "dark";

  return (
    <Reveal
      className={`relative mx-auto mb-12 max-w-3xl pl-6 ${isDark ? "text-white" : "text-black"}`}
    >
      <VerticalLine variant={isDark ? "light" : "dark"} />
      <div
        className="mb-4 inline-flex items-center gap-2 rounded-full backdrop-blur-[30px]"
        style={{
          background: isDark
            ? "rgba(59, 59, 59, 0.4)"
            : "rgba(230, 227, 227, 0.4)",
          padding: "6px 16px",
        }}
      >
        <span
          className={`text-xs font-medium uppercase tracking-wider ${isDark ? "text-white/90" : "text-black/70"}`}
        >
          {eyebrow}
        </span>
      </div>
      <h2
        className={`text-4xl font-semibold leading-tight tracking-tight sm:text-5xl ${isDark ? "text-white" : "text-black"}`}
      >
        {title}
      </h2>
      <p
        className={`mt-5 text-lg leading-relaxed ${isDark ? "text-white/70" : "text-black/60"}`}
      >
        {description}
      </p>
    </Reveal>
  );
}
