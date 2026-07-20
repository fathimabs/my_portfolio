import { projects } from '../data'

export default function Projects() {
  return (
    <section id="projects" className="section">
      <h3 className="section-title">Projects</h3>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((p) => (
          <a
            key={p.name}
            href={p.link}
            className="block rounded-xl border border-border bg-surface p-6 hover:shadow-lg hover:border-accent transition-all"
          >
            <h4 className="font-bold text-lg capitalize mb-2">{p.name.replace(/-/g, ' ')}</h4>
            <p className="text-muted text-sm leading-relaxed">{p.description}</p>
            <div className="flex flex-wrap gap-2 mt-4">
              {p.stack.map((s) => (
                <span key={s} className="text-xs px-2 py-1 rounded-full bg-accent-light text-accent-dark font-medium">
                  {s}
                </span>
              ))}
            </div>
          </a>
        ))}
      </div>
    </section>
  )
}
