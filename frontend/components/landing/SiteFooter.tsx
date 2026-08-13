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
    <footer className="border-t border-white/10 bg-[#09090b] py-16 text-white/70">
      <div className="mx-auto flex w-full max-w-[1440px] flex-col gap-10 px-10">
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
          <p className="text-xl font-medium text-white">Lateral</p>
          <nav className="flex flex-wrap items-center gap-6 text-sm font-medium">
            {LINKS.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="transition-colors hover:text-white"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>

        <div className="flex flex-col items-start justify-between gap-4 border-t border-white/10 pt-8 text-sm text-white/50 sm:flex-row sm:items-center">
          <p>© 2026 Lateral. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="/legal/privacy" className="transition-colors hover:text-white">
              Privacy
            </Link>
            <Link href="/legal/terms" className="transition-colors hover:text-white">
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
