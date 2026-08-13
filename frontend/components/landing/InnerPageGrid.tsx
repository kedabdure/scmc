import { Reveal, StaggerReveal } from "@/components/motion/Reveal";

type Item = {
  title: string;
  body: string;
};

type InnerPageGridProps = {
  items: Item[];
};

export default function InnerPageGrid({ items }: InnerPageGridProps) {
  return (
    <section className="mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <StaggerReveal className="grid gap-6 md:grid-cols-3">
        {items.map((item) => (
          <Reveal
            key={item.title}
            className="rounded-3xl border border-white/10 bg-white/[0.03] p-7 text-white"
          >
            <h2 className="text-2xl font-semibold">{item.title}</h2>
            <p className="mt-4 text-white/70">{item.body}</p>
          </Reveal>
        ))}
      </StaggerReveal>
    </section>
  );
}
