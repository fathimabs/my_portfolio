import { experience, education } from '../data'
import { BriefcaseIcon, GraduationCapIcon } from './Icons'

// Merge work experience and education into a single chronological-style
// timeline, each tagged with a `type` so we can pick the right icon.
const timeline = [
  experience[0], // Job Junction
  experience[1], // Softzane Solutions
  experience[2], // Angular Internship
  {
    type: 'education',
    role: education[0].degree,
    company: education[0].institute,
    period: education[0].period,
    points: [],
  },
];
export default function Experience() {
  return (
    <section id="experience" className="section">
      <h3 className="section-title">My Experience</h3>

      <div className="relative max-w-3xl mx-auto">
        {/* Center timeline line — hidden on mobile, shown from md up */}
        <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-border -translate-x-1/2" />
        {/* Left timeline line for mobile */}
        <div className="md:hidden absolute left-5 top-0 bottom-0 w-px bg-border" />

        <div className="space-y-10">
          {timeline.map((item, i) => {
            const alignRight = i % 2 === 1
            const Icon = item.type === 'work' ? BriefcaseIcon :GraduationCapIcon

            return (
              <div key={`${item.company}-${i}`} className="relative md:flex">
                {/* Icon node */}
                <div className="absolute left-5 md:left-1/2 top-0 md:-translate-x-1/2 w-10 h-10 rounded-full bg-surface/70 backdrop-blur-sm border border-border flex items-center justify-center z-10">
                  <Icon className="text-accent" width={18} height={18} />
                </div>

                {/* Date label (desktop only, aligned with the icon node) */}
                <div
                  className={`hidden md:flex md:w-1/2 md:h-10 md:items-center ${
                    alignRight ? 'md:order-1 md:pr-12 md:justify-end' : 'md:order-2 md:pl-12'
                  }`}
                >
                  <span className="text-sm text-muted font-medium">{item.period}</span>
                </div>

                {/* Card */}
                <div
                  className={`relative ml-16 md:ml-0 md:w-1/2 ${
                    alignRight ? 'md:order-2 md:pl-12' : 'md:order-1 md:pr-12'
                  }`}
                >
                  <div className="rounded-xl border border-border bg-surface/30 backdrop-blur-sm p-5">
                    <p className="md:hidden text-xs text-muted font-medium mb-1">{item.period}</p>
                    <h4 className="font-bold text-text">{item.role}</h4>
                    <p className="text-sm text-muted mb-3">{item.company}</p>
                    {item.points.length > 0 && (
                      <ul className="text-sm text-muted space-y-1 list-disc list-inside">
                        {item.points.map((point, idx) => (
                          <li key={idx}>{point}</li>
                        ))}
                      </ul>
                    )}
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}