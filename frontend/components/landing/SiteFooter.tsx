import Link from "next/link";

const LINKS = [
  { label: "Product", href: "/product" },
  { label: "Customers", href: "/customers" },
  { label: "Pricing", href: "/pricing" },
  { label: "Company", href: "/company" },
  { label: "Blog", href: "/blog" },
];

export default function SiteFooter() {
  return (
    <footer className="border-t border-white/10 bg-[#070605] py-12 text-white/80">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-8 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
          <p className="text-2xl font-semibold text-white">NoorFlow</p>
          <nav className="flex flex-wrap items-center gap-5 text-sm uppercase tracking-[0.1em]">
            {LINKS.map((item) => (
              <Link key={item.label} href={item.href} className="hover:text-white">
                {item.label}
              </Link>
            ))}
          </nav>
        </div>

        <div className="flex flex-col items-start justify-between gap-4 border-t border-white/10 pt-6 text-sm text-white/60 sm:flex-row sm:items-center">
          <p>Template-inspired design system for SCMC.</p>
          <p>2026 NoorFlow. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
