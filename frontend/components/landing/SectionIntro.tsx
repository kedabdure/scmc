import { Reveal } from "@/components/motion/Reveal";

type SectionIntroProps = {
  eyebrow: string;
  title: string;
  description: string;
};

export default function SectionIntro({
  eyebrow,
  title,
  description,
}: SectionIntroProps) {
  return (
    <Reveal className="mx-auto mb-12 max-w-3xl text-center text-white">
      <p className="text-xs uppercase tracking-[0.14em] text-white/60">{eyebrow}</p>
      <h2 className="mt-4 text-4xl font-semibold leading-tight sm:text-5xl">{title}</h2>
      <p className="mt-5 text-lg text-white/70">{description}</p>
    </Reveal>
  );
}
