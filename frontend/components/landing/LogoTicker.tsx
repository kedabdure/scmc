"use client";

import Marquee from "react-fast-marquee";

import { LogoItem } from "./hero/LogoItem";

const LOGOS = [
  { name: "Greythorne", hasIcon: false },
  { name: "Westbridge", hasIcon: true },
  { name: "Lattice", hasIcon: true },
  { name: "Gantry", hasIcon: true },
  { name: "53 CAPITAL", hasIcon: false },
  { name: "NORTHRIDGE", hasIcon: false },
];

export default function LogoTicker() {
  return (
    <div className="border-t border-white/10 bg-black/30 py-6 backdrop-blur-sm">
      <Marquee
        speed={30}
        gradient={true}
        gradientColor="rgba(0, 0, 0, 0.3)"
        gradientWidth={100}
        pauseOnHover={true}
        className="overflow-hidden"
      >
        {LOGOS.map((logo, index) => (
          <LogoItem key={index} name={logo.name} hasIcon={logo.hasIcon} />
        ))}
      </Marquee>
    </div>
  );
}
