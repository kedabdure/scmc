const METRICS = [
  { value: "10x", label: "Transaction capacity" },
  { value: "$2.8m", label: "Avg annual savings" },
  { value: "120h", label: "Monthly time saved" },
];

export default function MetricsBar() {
  return (
    <section className="border-y border-white/10 bg-black/35">
      <div className="mx-auto grid w-full max-w-7xl grid-cols-1 gap-5 px-4 py-10 sm:grid-cols-3 sm:px-6 lg:px-8">
        {METRICS.map((item) => (
          <div key={item.label} className="text-white">
            <p className="text-4xl font-semibold tracking-tight">{item.value}</p>
            <p className="mt-2 text-sm uppercase tracking-[0.12em] text-white/65">
              {item.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
