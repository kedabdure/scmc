"use client";

import { motion } from "framer-motion";

import { Button } from "@/components/ui/button";
import { fadeInUp, staggerContainer } from "@/lib/motion";

import HeroVisual from "./HeroVisual";
import MarketingStack from "./MarketingStack";
import NavigationHeader from "./NavigationHeader";

export default function Hero() {
  return (
    <>
      <section
        className="relative min-h-screen overflow-hidden bg-black text-white"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1519817650390-64a93db51149?auto=format&fit=crop&w=2200&q=80')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/65" />
        <div className="absolute inset-0 bg-linear-to-r from-black/85 via-black/55 to-black/75" />

        <NavigationHeader />

        <div className="relative z-10 mx-auto flex min-h-screen w-full max-w-[1820px] items-center px-6 pt-24 sm:px-8 lg:px-10">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="grid w-full items-center gap-8 lg:grid-cols-[1.03fr_0.97fr]"
          >
            <div className="max-w-4xl border-l border-white/20 pl-8 sm:pl-10">
              <motion.p
                variants={fadeInUp}
                className="mb-8 inline-flex items-center rounded-full border border-white/20 bg-white/10 px-5 py-2 text-sm font-semibold text-white/90"
              >
                Lateral raises $45m Series A
              </motion.p>

              <motion.h1
                variants={fadeInUp}
                className="text-balance text-5xl font-semibold leading-[1.02] sm:text-6xl lg:text-8xl"
              >
                Your Hyperintelligent
                <span className="block text-white/62">Finance Assistant</span>
              </motion.h1>

              <motion.p
                variants={fadeInUp}
                className="mt-8 max-w-[620px] text-xl leading-[1.3] text-white/85 sm:text-2xl"
              >
                Deploy autonomous AI agents that handle your entire finance
                operation.
              </motion.p>

              <motion.div
                variants={fadeInUp}
                className="mt-10 flex flex-wrap items-center gap-3"
              >
                <Button size="lg" className="h-14 rounded-full px-8 text-lg font-semibold">
                  Request Demo
                </Button>
              </motion.div>
            </div>

            <motion.div variants={fadeInUp} className="pt-8 lg:pt-12">
              <HeroVisual />
            </motion.div>
          </motion.div>
        </div>

        <div className="relative z-10 border-t border-white/15 bg-black/25 backdrop-blur-sm">
          <div className="mx-auto flex max-w-7xl flex-wrap items-center gap-x-10 gap-y-4 px-4 py-5 text-sm font-medium uppercase tracking-[0.12em] text-white/60 sm:px-6 lg:px-8">
            <span>Westbridge</span>
            <span>Lattice</span>
            <span>Gantry</span>
            <span>53 Capital</span>
            <span>Northridge</span>
            <span>Greythorne</span>
          </div>
        </div>

        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_15%_25%,rgba(255,220,170,0.22),transparent_45%),radial-gradient(circle_at_85%_20%,rgba(230,180,120,0.14),transparent_40%)]" />
      </section>

      <MarketingStack />
    </>
  );
}
