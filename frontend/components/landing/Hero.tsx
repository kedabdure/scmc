"use client";

import { useRef } from "react";

import Image from "next/image";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

import { VerticalLine } from "@/components/commons/VerticalLine";
import { Button } from "@/components/ui/button";
import { fadeInUp, staggerContainer } from "@/lib/motion";

import { HeroBadge } from "./hero/HeroBadge";
import { HeroDescription } from "./hero/HeroDescription";
import { HeroHeading } from "./hero/HeroHeading";
import LogoTicker from "./LogoTicker";
import MarketingStack from "./MarketingStack";

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });
  const rawBgY = useTransform(scrollYProgress, [0, 1], ["-8%", "8%"]);
  const bgY = useSpring(rawBgY, { stiffness: 100, damping: 30, mass: 0.5 });

  return (
    <>
      <section
        ref={sectionRef}
        className="relative flex h-screen pb-4 flex-col overflow-hidden bg-black text-white"
      >
        {/* Background image */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div style={{ y: bgY, top: "-10%", bottom: "-10%" }} className="absolute inset-x-0">
            <Image
              // src="https://images.unsplash.com/photo-1551836022-4c4c79ecde51?auto=format&fit=crop&w=2400&q=80"
              src="/images/mosque.jpg"
              alt="Background"
              fill
              className="object-cover opacity-40"
              priority
            />
          </motion.div>
          <div className="absolute inset-0 bg-linear-to-br from-black/60 via-black/50 to-black/70" />
        </div>

        <div className="relative z-10 flex flex-1 items-center pt-10 px-6 sm:px-10 lg:px-10">
          {/* Text content */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="relative max-w-2xl pl-8"
          >
            <VerticalLine variant="light" />
            <HeroBadge variants={fadeInUp}>Lateral raises $45m Series A</HeroBadge>

            <HeroHeading variants={fadeInUp} highlight="Finance Assistant">
              Your Hyperintelligent
            </HeroHeading>

            <HeroDescription variants={fadeInUp}>
              Deploy autonomous AI agents that handle your entire finance operation.
            </HeroDescription>

            <motion.div variants={fadeInUp} className="mt-10">
              <Button
                size="sm"
                className="h-10 rounded-full bg-white px-6 text-[14px] font-semibold text-black transition-all hover:bg-white/90 hover:shadow-lg"
              >
                Request Demo
              </Button>
            </motion.div>
          </motion.div>
        </div>

        <div className="relative z-10">
          <LogoTicker />
        </div>
      </section>

      <MarketingStack />
    </>
  );
}
