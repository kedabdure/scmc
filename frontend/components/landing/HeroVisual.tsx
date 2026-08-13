import Image from "next/image";

export default function HeroVisual() {
  return (
    <div className="relative ml-auto hidden w-full max-w-lg lg:block">
      <div className="absolute -inset-8 rounded-[3rem] bg-amber-300/20 blur-3xl" />
      <div className="relative overflow-hidden rounded-[2.4rem] border border-white/20 bg-white/5 p-3 shadow-[0_35px_80px_-30px_rgba(0,0,0,0.85)] backdrop-blur-md">
        <div className="overflow-hidden rounded-[2rem] border border-zinc-900/20 bg-zinc-100">
          <Image
            src="https://images.unsplash.com/photo-1573152143286-0c422b4d2175?auto=format&fit=crop&w=900&q=80"
            alt="Islamic finance assistant on mobile"
            width={800}
            height={1100}
            className="h-auto w-full scale-[1.02] object-cover"
            priority
          />
        </div>
      </div>
    </div>
  );
}
