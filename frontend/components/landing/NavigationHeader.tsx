"use client";

import Link from "next/link";

import { Button } from "@/components/ui/button";

const NAV_LINKS = [
  { label: "Product", href: "/product" },
  { label: "Customers", href: "/customers" },
  { label: "Pricing", href: "/pricing" },
  { label: "Company", href: "/company" },
  { label: "Blog", href: "/blog" },
];

type NavigationHeaderProps = {
  absolute?: boolean;
};

export default function NavigationHeader({ absolute = true }: NavigationHeaderProps) {
  return (
    <header
      className={`${absolute ? "absolute" : "relative"} inset-x-0 top-0 z-50 w-full`}
    >
      <div className="mx-auto flex max-w-[1440px] items-center justify-between px-10 py-6">
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

        <div className="flex items-center gap-3">
          <Button
            variant="ghost"
            size="sm"
            className="hidden text-sm font-medium text-white/90 hover:bg-white/10 hover:text-white sm:inline-flex"
          >
            Log In
          </Button>
          <Button
            size="sm"
            className="h-11 rounded-full bg-white px-6 text-sm font-semibold text-black hover:bg-white/90"
          >
            Request Demo
          </Button>
        </div>
      </div>
    </header>
  );
}
