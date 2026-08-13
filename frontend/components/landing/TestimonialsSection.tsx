import { Reveal, StaggerReveal } from "@/components/motion/Reveal";

import SectionIntro from "./SectionIntro";

const TESTIMONIALS = [
  {
    quote:
      "Cash flow was our issue. Billing dropped to 5-6 days and we unlocked $1.6M in working capital.",
    author: "David Foster",
    title: "Managing Partner",
  },
  {
    quote:
      "Commission processing went from 50+ hours monthly to less than 8 with full audit traceability.",
    author: "Rachel Martinez",
    title: "CFO",
  },
  {
    quote:
      "Across 11 portfolio companies, NoorFlow delivered $2.1M in annualized savings in year one.",
    author: "Sarah Liu",
    title: "Partner",
  },
];

export default function TestimonialsSection() {
  return (
    <section className="bg-[#090706] py-24">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionIntro
          eyebrow="Customer Success"
          title="Real Impact. Transformational Results."
          description="Used by high-growth teams and global operators to transform finance operations."
        />

        <StaggerReveal className="grid gap-6 md:grid-cols-3">
          {TESTIMONIALS.map((item) => (
            <Reveal
              key={item.author}
              className="rounded-3xl border border-white/10 bg-white/[0.03] p-7 text-white"
            >
              <p className="text-lg leading-relaxed text-white/80">{item.quote}</p>
              <p className="mt-6 text-base font-semibold">{item.author}</p>
              <p className="text-sm uppercase tracking-[0.1em] text-white/55">{item.title}</p>
            </Reveal>
          ))}
        </StaggerReveal>
      </div>
    </section>
  );
}
