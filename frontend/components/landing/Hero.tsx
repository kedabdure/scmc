"use client";

import { motion } from "framer-motion";

import { Button } from "@/components/ui/button";
import { fadeInUp, staggerContainer } from "@/lib/motion";

import MarketingStack from "./MarketingStack";
import NavigationHeader from "./NavigationHeader";

const PARTNERS = [
  "Westbridge",
  "Lattice",
  "Gantry",
  "53 Capital",
  "Northridge",
  "Greythorne",
];

export default function Hero() {
  return (
    <>
      <section className="relative min-h-screen overflow-hidden bg-[#09090b] text-white">
        <NavigationHeader />

        <div className="relative z-10 mx-auto flex min-h-screen max-w-[1440px] items-center px-10 pt-24">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="w-full pb-32"
          >
            <div className="max-w-4xl">
              <motion.div
                variants={fadeInUp}
                className="mb-6 inline-flex items-center gap-2 rounded-full backdrop-blur-[30px]"
                style={{
                  background: "rgba(59, 59, 59, 0.4)",
                  padding: "6px 16px",
                }}
              >
                <span className="text-sm font-medium text-white">
                  Lateral raises $45m Series A
                </span>
              </motion.div>

              <motion.h1
                variants={fadeInUp}
                className="text-6xl font-semibold leading-[1.1] tracking-tight sm:text-7xl lg:text-[72px]"
              >
                Your Hyperintelligent
                <br />
                <span className="text-white/60">Finance Assistant</span>
              </motion.h1>

              <motion.p
                variants={fadeInUp}
                className="mt-6 max-w-[600px] text-xl leading-relaxed text-white/85"
              >
                Deploy autonomous AI agents that handle your entire finance
                operation.
              </motion.p>

              <motion.div variants={fadeInUp} className="mt-10">
                <Button
                  size="lg"
                  className="h-12 rounded-full bg-white px-8 text-base font-semibold text-black hover:bg-white/90"
                >
                  Request Demo
                </Button>
              </motion.div>
            </div>
          </motion.div>
        </div>

        <div className="relative z-10 border-t border-white/10 bg-black/30 backdrop-blur-sm">
          <div className="mx-auto flex max-w-[1440px] flex-wrap items-center gap-x-10 gap-y-4 px-10 py-5">
            {PARTNERS.map((partner) => (
              <span
                key={partner}
                className="text-sm font-medium uppercase tracking-wider text-white/50"
              >
                {partner}
              </span>
            ))}
          </div>
        </div>
      </section>

      <MarketingStack />
    </>
  );
}
