"use client";

import Link from "next/link";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import { useState } from "react";

import { Button } from "@/components/ui/button";

const NAV_LINKS = [
  { label: "Product", href: "/product" },
  { label: "Customers", href: "/customers" },
  { label: "Pricing", href: "/pricing" },
  { label: "Company", href: "/company" },
  { label: "Blog", href: "/blog" },
];

export default function NavigationHeader() {
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 20);

    const previous = scrollY.getPrevious() ?? 0;
    if (latest < 96) {
      setHidden(false);
      return;
    }
    setHidden(latest > previous);
  });

  return (
    <motion.header
      animate={hidden ? "hidden" : "visible"}
      variants={{ visible: { y: 0 }, hidden: { y: "-100%" } }}
      transition={{ duration: 0.35, ease: "easeInOut" }}
      className={`fixed inset-x-0 top-0 z-50 w-full transition-colors duration-300 ${
        scrolled
          ? "border-b border-white/10 bg-black/70 backdrop-blur-md"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-18 max-w-360 items-center justify-between px-10">
        <Link href="/" className="text-xl font-medium text-white">
          Lateral
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="text-sm font-medium text-white/90 transition-colors hover:text-white"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Button
            variant="ghost"
            size="sm"
            className="hidden text-sm font-semibold text-white/90 hover:bg-white/10 hover:text-white sm:inline-flex"
          >
            Log In
          </Button>
          <Button
            size="sm"
            className="h-10 rounded-full bg-white px-6 text-[14px] font-semibold text-black hover:bg-white/90"
          >
            Request Demo
          </Button>
        </div>
      </div>
    </motion.header>
  );
}
