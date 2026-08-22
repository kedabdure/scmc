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

const EDGE_FADE_MASK =
  "linear-gradient(to right, transparent, black 15%, black 88%, transparent)";

export default function LogoTicker() {
  return (
    <div className="w-full py-7">
      <div
        className="overflow-hidden"
        style={{
          WebkitMaskImage: EDGE_FADE_MASK,
          maskImage: EDGE_FADE_MASK,
        }}
      >
        <Marquee speed={15} gradient={false} pauseOnHover={true} autoFill={true}>
          {LOGOS.map((logo, index) => (
            <LogoItem key={index} name={logo.name} hasIcon={logo.hasIcon} />
          ))}
        </Marquee>
      </div>
    </div>
  );
}
