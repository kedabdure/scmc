import { Reveal } from "@/components/motion/Reveal";

import NavigationHeader from "./NavigationHeader";

type InnerPageHeroProps = {
  eyebrow: string;
  title: string;
  description: string;
};

export default function InnerPageHero({
  eyebrow,
  title,
  description,
}: InnerPageHeroProps) {
  return (
    <section className="relative overflow-hidden border-b border-white/10 bg-[radial-gradient(circle_at_10%_10%,rgba(255,220,170,0.2),transparent_35%)]">
      <NavigationHeader absolute={false} />
      <div className="mx-auto w-full max-w-5xl px-4 pb-20 pt-10 sm:px-6 lg:px-8">
        <Reveal>
          <p className="text-xs uppercase tracking-[0.14em] text-white/60">{eyebrow}</p>
          <h1 className="mt-4 text-5xl font-semibold leading-tight text-white sm:text-6xl">
            {title}
          </h1>
          <p className="mt-6 max-w-3xl text-lg text-white/75">{description}</p>
        </Reveal>
      </div>
    </section>
  );
}
