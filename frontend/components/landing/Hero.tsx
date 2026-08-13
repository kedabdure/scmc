"use client";

import Image from "next/image";
import { motion } from "framer-motion";

import { Button } from "@/components/ui/button";
import { fadeInUp, staggerContainer } from "@/lib/motion";

import { HeroBadge } from "./hero/HeroBadge";
import { HeroDescription } from "./hero/HeroDescription";
import { HeroHeading } from "./hero/HeroHeading";
import { HeroPhoneMockup } from "./hero/HeroPhoneMockup";
import LogoTicker from "./LogoTicker";
import MarketingStack from "./MarketingStack";
import NavigationHeader from "./NavigationHeader";

export default function Hero() {
  return (
    <>
      <section className="relative min-h-screen overflow-hidden bg-black text-white">
        {/* Background image */}
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1551836022-4c4c79ecde51?auto=format&fit=crop&w=2400&q=80"
            alt="Background"
            fill
            className="object-cover opacity-40"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-black/50 to-black/70" />
        </div>

        <NavigationHeader />

        <div className="relative z-10 grid min-h-screen grid-cols-1 items-center gap-12 px-6 pb-32 pt-32 sm:px-10 lg:grid-cols-2 lg:px-12 xl:px-16 2xl:px-24">
          {/* Left column - Text content */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="max-w-2xl"
          >
            <HeroBadge variants={fadeInUp}>Lateral raises $45m Series A</HeroBadge>

            <HeroHeading variants={fadeInUp} highlight="Finance Assistant">
              Your Hyperintelligent
            </HeroHeading>

            <HeroDescription variants={fadeInUp}>
              Deploy autonomous AI agents that handle your entire finance operation.
            </HeroDescription>

            <motion.div variants={fadeInUp} className="mt-10">
              <Button
                size="lg"
                className="h-14 rounded-full bg-white px-9 text-base font-semibold text-black transition-all hover:bg-white/90 hover:shadow-lg"
              >
                Request Demo
              </Button>
            </motion.div>
          </motion.div>

          {/* Right column - Phone mockup */}
          <HeroPhoneMockup
            src="https://images.unsplash.com/photo-1592286927505-c0d0f7d0a748?auto=format&fit=crop&w=400&q=80"
            alt="Mobile app interface"
          />
        </div>

        <LogoTicker />
      </section>

      <MarketingStack />
    </>
  );
}
