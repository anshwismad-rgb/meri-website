const STATS = [
  { value: "150+", label: "Projects delivered" },
  { value: "8+", label: "Years in business" },
  { value: "60+", label: "Active clients" },
  { value: "4.8/5", label: "Average client rating" },
];

export default function Stats() {
  return (
    <section className="border-b border-border bg-card">
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-8 px-4 py-12 sm:px-6 md:grid-cols-4">
        {STATS.map((stat) => (
          <div key={stat.label} className="text-center">
            <p className="text-3xl font-extrabold text-primary sm:text-4xl">{stat.value}</p>
            <p className="mt-1 text-sm text-muted-foreground">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
