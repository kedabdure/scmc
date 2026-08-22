import Link from "next/link";

import { Button } from "@/components/ui/button";

const COLUMNS: Array<{ title: string; links: Array<{ label: string; href: string }> }> = [
  {
    title: "Product",
    links: [
      { label: "Features", href: "/product" },
      { label: "Use Cases", href: "/product" },
      { label: "Customer Stories", href: "/customers" },
      { label: "Pricing", href: "/pricing" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About Us", href: "/about" },
      { label: "Careers", href: "/company" },
      { label: "Terms", href: "/legal/terms" },
      { label: "Privacy", href: "/legal/privacy" },
    ],
  },
  {
    title: "Connect",
    links: [
      { label: "Blog", href: "/blog" },
      { label: "Request Demo", href: "#" },
      { label: "LinkedIn", href: "#" },
      { label: "X", href: "#" },
    ],
  },
];

function FooterLogoMark() {
  const lines = Array.from({ length: 16 }, (_, i) => i);

  return (
    <svg width="44" height="44" viewBox="0 0 44 44" fill="none" aria-hidden="true">
      <defs>
        <clipPath id="footer-logo-clip">
          <circle cx="22" cy="22" r="21" />
        </clipPath>
      </defs>
      <circle cx="22" cy="22" r="21" stroke="white" strokeOpacity="0.9" />
      <g clipPath="url(#footer-logo-clip)" stroke="white" strokeOpacity="0.85">
        {lines.map((i) => (
          <line key={i} x1={-14 + i * 4} y1="46" x2={6 + i * 4} y2="-2" />
        ))}
      </g>
    </svg>
  );
}

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-white/15 bg-black text-white">
      <div className="mx-auto w-full max-w-360 px-10">
        <div className="flex flex-col items-start justify-between gap-8 py-14 sm:flex-row sm:items-center">
          <h2
            className="text-2xl sm:text-4xl font-base"
            style={{ fontFamily: "'Fraunces', serif" }}
          >
            Supercharge Your Finance Team
          </h2>
          <Button className="h-9.5 rounded-full bg-white px-5 text-sm font-base text-black hover:bg-white/90">
            Request Demo
          </Button>
        </div>
      </div>

      <div className="border-t border-white/17">
        <div className="mx-auto w-full max-w-360  pl-10 pr-50 pb-10 pt-14">
          <div className="flex flex-col justify-between gap-16 sm:flex-row">
            <FooterLogoMark />

            <div className="grid grid-cols-2 gap-x-15 gap-y-10 sm:grid-cols-3 sm:gap-x-34">
              {COLUMNS.map((column) => (
                <div key={column.title}>
                  <p className="mb-5 text-sm text-white/40">{column.title}</p>
                  <ul className="space-y-2">
                    {column.links.map((link) => (
                      <li key={link.label}>
                        <Link
                          href={link.href}
                          className="text-[15px] font-base text-white transition-colors hover:text-white/70"
                        >
                          {link.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          <div
            aria-hidden="true"
            className="relative mt-8 h-28 select-none overflow-hidden sm:h-36 lg:h-54"
          >
            <p
              className="absolute -top right-0 whitespace-nowrap text-[140px] font-medium leading-none text-white/5 sm:text-[200px] lg:text-[260px]"
              style={{ fontFamily: "'Fraunces', serif" }}
            >
              Lateral
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-2 text-sm">
            <span className="text-white/90">© 2026 Lateral.</span>
            <span className="text-white/40">All rights reserved.</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
