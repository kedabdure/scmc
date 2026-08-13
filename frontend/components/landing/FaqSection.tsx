import { Reveal } from "@/components/motion/Reveal";

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
    <section className="bg-[#0b0807] py-24">
      <div className="mx-auto w-full max-w-5xl px-4 sm:px-6 lg:px-8">
        <SectionIntro
          eyebrow="FAQ"
          title="Your Questions Answered"
          description="NoorFlow owns entire finance workflows while keeping your team in full control."
        />

        <div className="space-y-3">
          {FAQS.map((question) => (
            <Reveal key={question}>
              <details className="group rounded-2xl border border-white/10 bg-white/[0.03] p-5 text-white">
                <summary className="cursor-pointer list-none text-lg font-medium">
                  {question}
                </summary>
                <p className="mt-3 text-white/70">
                  We tailor rollout to your current stack and governance model,
                  then scale automation in measured phases.
                </p>
              </details>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
