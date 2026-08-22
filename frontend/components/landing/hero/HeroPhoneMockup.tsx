"use client";

import Image from "next/image";
import { motion } from "framer-motion";

type HeroPhoneMockupProps = {
  src: string;
  alt: string;
};

export function HeroPhoneMockup({ src, alt }: HeroPhoneMockupProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 40 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, delay: 0.3 }}
      className="relative flex justify-center lg:justify-end"
    >
      <div className="relative h-150 w-75 sm:h-175 sm:w-87.5">
        <Image
          src={src}
          alt={alt}
          fill
          className="rounded-[3rem] object-cover shadow-2xl"
          priority
        />
      </div>
    </motion.div>
  );
}
