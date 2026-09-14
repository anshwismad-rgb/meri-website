import Reveal from "./Reveal";
import RevealGroup from "./RevealGroup";

const PROJECTS = [
  { name: "Add your project name", category: "E-commerce" },
  { name: "Add your project name", category: "Web App" },
  { name: "Add your project name", category: "Marketing Site" },
];

export default function Work() {
  return (
    <section id="work" className="py-24 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal className="mx-auto max-w-2xl text-center">
          <h2 className="text-sm font-semibold uppercase tracking-wide text-accent-2">
            Recent work
          </h2>
          <p className="font-display mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
            A few projects we&apos;re proud of
          </p>
        </Reveal>

        <RevealGroup className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {PROJECTS.map((project, i) => (
            <a
              key={i}
              href="#contact"
              className="group block cursor-pointer overflow-hidden rounded-3xl border border-border bg-card shadow-sm transition-all hover:-translate-y-1 hover:shadow-md"
            >
              <div
                className="flex h-44 items-center justify-center text-sm font-medium text-white/80"
                style={{
                  background:
                    i % 2 === 0
                      ? "linear-gradient(135deg, var(--color-accent-glow), var(--color-accent-2-glow))"
                      : "linear-gradient(135deg, var(--color-accent-2-glow), var(--color-accent-glow))",
                }}
              >
                Replace with a project screenshot
              </div>
              <div className="p-5">
                <p className="text-xs font-semibold uppercase tracking-wide text-accent-2">
                  {project.category}
                </p>
                <h3 className="font-display mt-1 text-base font-bold group-hover:underline">
                  {project.name}
                </h3>
              </div>
            </a>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
