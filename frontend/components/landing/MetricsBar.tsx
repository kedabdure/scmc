"use client";

import { motion } from "framer-motion";
import CountUp from "react-countup";

import { VerticalLine } from "@/components/commons/VerticalLine";
import { Button } from "@/components/ui/button";

const METRICS = [
  {
    end: 10,
    suffix: "x",
    label: "TRANSACTION CAPACITY INCREASE"
  },
  {
    end: 1,
    prefix: "$",
    suffix: "m",
    label: "AVERAGE ANNUAL SAVINGS"
  },
  {
    end: 8,
    suffix: "x",
    label: "REDUCTION IN TRANSACTION COSTS"
  },
];

export default function MetricsBar() {
  return (
    <section className="bg-[#e5e5e3] py-24">
      <div className="mx-auto max-w-360 px-10">
        <div className="relative mb-20 pl-6">
          <VerticalLine variant="dark" />
          {/* Eyebrow */}
          <div className="mb-6 flex items-center gap-2">
            <span className="inline-block h-2 w-2 bg-[#636363]" />
            <span className="text-xs font-medium uppercase tracking-widest text-[#636363]">
              REDEFINING FINANCE
            </span>
          </div>

          {/* Heading */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-6 max-w-3xl font-['Fraunces'] text-5xl font-medium leading-tight tracking-tight text-[#080808] md:text-4xl"
          >
            Supercharge Your Finance Team With Powerful Automation
          </motion.h2>

          {/* Subtext */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mb-10 max-w-xl text-lg leading-relaxed text-[#636363]"
          >
            Lateral frees you from admin so you can think sharper, move faster and scale without friction.
          </motion.p>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Button
              size="lg"
              variant="default"
              className="bg-[#080808] text-white hover:bg-[#1a1a1a]"
            >
              Request Demo
            </Button>
          </motion.div>
        </div>

        {/* Metrics Grid */}
        <div className="grid grid-cols-1 gap-0 border-t border-[#636363]/20 pt-16 sm:grid-cols-3">
          {METRICS.map((metric, index) => (
            <div
              key={metric.label}
              className={`px-8 ${index !== METRICS.length - 1 ? "sm:border-r sm:border-[#636363]/20" : ""}`}
            >
              <div className="mb-4 font-['Fraunces'] text-6xl font-medium tracking-tight text-[#080808] md:text-7xl lg:text-8xl">
                <CountUp
                  end={metric.end}
                  prefix={metric.prefix}
                  suffix={metric.suffix}
                  duration={1.2}
                  enableScrollSpy
                  scrollSpyOnce
                />
              </div>
              <p className="font-mono text-xs font-medium uppercase tracking-wider text-[#636363]">
                {metric.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
