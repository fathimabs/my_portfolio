import { techStack } from "../data";

export default function Tools() {
  return (
    <section id="tools" className="section">
      <h3 className="section-title">Tools &amp; Tech</h3>

      <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 gap-4 sm:gap-6">
        {techStack.map((tech) => {
          const ReactIcon = tech.reactIcon;

          return (
            <div
              key={tech.name}
              className="flex flex-col items-center gap-2 p-4 rounded-xl border border-border hover:border-accent hover:shadow-md transition-all"
            >
              {tech.image ? (
                <img
                  src={tech.image}
                  alt={tech.name}
                  className="w-10 h-10 object-contain"
                />
              ) : ReactIcon ? (
                <ReactIcon className="text-4xl" />
              ) : (
                <i
                  className={`${tech.icon} text-4xl`}
                  aria-hidden="true"
                />
              )}

              <span className="text-xs font-medium text-muted text-center">
                {tech.name}
              </span>
            </div>
          );
        })}
      </div>
    </section>
  );
}