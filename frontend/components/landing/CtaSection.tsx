"use client";

import { Reveal } from "@/components/motion/Reveal";
import { Button } from "@/components/ui/button";

export default function CtaSection() {
  return (
    <section className="bg-[#f9f9f9] py-24">
      <div className="mx-auto w-full max-w-5xl px-10">
        <Reveal className="rounded-md border border-black/10 bg-gradient-to-br from-white to-black/[0.02] p-12 text-center">
          <div
            className="mb-4 inline-flex items-center gap-2 rounded-full backdrop-blur-[30px]"
            style={{
              background: "rgba(230, 227, 227, 0.4)",
              padding: "6px 16px",
            }}
          >
            <span className="text-xs font-medium uppercase tracking-wider text-black/70">
              Get Started
            </span>
          </div>
          <h2 className="text-4xl font-semibold tracking-tight text-black sm:text-5xl">
            See Why Top Finance Teams Use NoorFlow
          </h2>
          <p className="mx-auto mt-5 max-w-2xl leading-relaxed text-black/60">
            Book a guided demo to see autonomous finance workflows in action.
          </p>
          <div className="mt-8 flex justify-center">
            <Button
              size="lg"
              className="h-12 rounded-full bg-black px-8 text-base font-semibold text-white hover:bg-black/90"
            >
              Request Demo
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
