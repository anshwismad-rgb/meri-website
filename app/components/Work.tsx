const PROJECTS = [
  {
    name: "Add your project name",
    category: "E-commerce",
    gradient: "from-primary to-accent",
  },
  {
    name: "Add your project name",
    category: "Web App",
    gradient: "from-accent to-secondary",
  },
  {
    name: "Add your project name",
    category: "Marketing Site",
    gradient: "from-secondary to-primary",
  },
];

export default function Work() {
  return (
    <section id="work" className="bg-background py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="max-w-2xl">
          <h2 className="text-sm font-semibold uppercase tracking-wide text-accent">
            Recent work
          </h2>
          <p className="mt-2 text-3xl font-extrabold tracking-tight text-primary sm:text-4xl">
            A few projects we&apos;re proud of
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {PROJECTS.map((project, i) => (
            <a
              key={i}
              href="#contact"
              className="group block cursor-pointer overflow-hidden rounded-2xl border border-border bg-card transition-shadow hover:shadow-md"
            >
              <div
                className={`flex h-44 items-center justify-center bg-gradient-to-br ${project.gradient} text-sm font-medium text-white/70`}
              >
                Replace with a project screenshot
              </div>
              <div className="p-5">
                <p className="text-xs font-semibold uppercase tracking-wide text-accent">
                  {project.category}
                </p>
                <h3 className="mt-1 text-base font-bold text-primary group-hover:underline">
                  {project.name}
                </h3>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
