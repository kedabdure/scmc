import { Reveal } from "@/components/motion/Reveal";
import { Button } from "@/components/ui/button";

export default function CtaSection() {
  return (
    <section className="bg-[#090706] py-24">
      <div className="mx-auto w-full max-w-5xl px-4 sm:px-6 lg:px-8">
        <Reveal className="rounded-3xl border border-white/10 bg-linear-to-br from-white/[0.08] to-white/[0.03] p-10 text-center text-white">
          <p className="text-xs uppercase tracking-[0.14em] text-white/60">Get Started</p>
          <h2 className="mt-4 text-4xl font-semibold sm:text-5xl">
            See Why Top Finance Teams Use NoorFlow
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-white/75">
            Book a guided demo to see autonomous finance workflows in action.
          </p>
          <div className="mt-8 flex justify-center">
            <Button size="lg">Request Demo</Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
