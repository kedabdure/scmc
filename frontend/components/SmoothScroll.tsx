"use client";

import { ReactLenis, useLenis } from "lenis/react";

const BASE_LERP = 0.1;
const HERO_ZONE_LERP = 0.045;

function HeroScrollDamping() {
  useLenis((lenis) => {
    const inHeroZone = lenis.animatedScroll < window.innerHeight;
    const scrollingUp = lenis.direction === -1;

    lenis.options.lerp = inHeroZone && scrollingUp ? HERO_ZONE_LERP : BASE_LERP;
  });

  return null;
}

export function SmoothScroll({ children }: { children: React.ReactNode }) {
  return (
    <ReactLenis
      root
      options={{
        lerp: BASE_LERP,
        wheelMultiplier: 1,
        touchMultiplier: 1,
        smoothWheel: true,
      }}
    >
      <HeroScrollDamping />
      {children}
    </ReactLenis>
  );
}
