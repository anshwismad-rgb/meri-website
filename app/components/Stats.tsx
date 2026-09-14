const STATS = [
  { value: "150+", label: "Projects delivered" },
  { value: "8+", label: "Years in business" },
  { value: "60+", label: "Active clients" },
  { value: "4.8/5", label: "Average client rating" },
];

export default function Stats() {
  return (
    <section className="relative px-4 sm:px-6">
      <div className="glass mx-auto grid max-w-5xl grid-cols-2 gap-8 rounded-3xl px-6 py-10 sm:-mt-6 md:grid-cols-4">
        {STATS.map((stat) => (
          <div key={stat.label} className="text-center">
            <p className="font-display text-3xl font-bold sm:text-4xl">{stat.value}</p>
            <p className="mt-1 text-sm text-muted-foreground">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
