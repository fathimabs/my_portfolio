import { useState } from 'react'
import { skills, education } from '../data'

const tabs = [
  { id: 'skills', label: 'Skills' },
  { id: 'education', label: 'Education' },
]

export default function About() {
  const [activeTab, setActiveTab] = useState('skills')

  return (
    <section id="about" className="section">
      <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
        <div className="flex justify-center order-2 md:order-1">
          <img
            src="/images/about.jpg"
            alt="Fathima working"
            className="rounded-xl shadow-lg w-64 sm:w-80 object-cover aspect-square"
          />
        </div>

        <div className="order-1 md:order-2">
          <h3 className="text-2xl sm:text-3xl font-bold uppercase tracking-wide text-accent mb-4">
            About Me
          </h3>

          <p className="text-muted leading-relaxed mb-8">
            I'm a full-stack developer experienced in React and the MERN stack (JavaScript,
            MongoDB, Express.js, React.js, Node.js). I enjoy building clean, user-friendly
            applications and working across both frontend and backend.
          </p>

          <div className="flex gap-6 sm:gap-8 text-sm font-semibold border-b border-border">
            {tabs.map((t) => (
              <button
                key={t.id}
                onClick={() => setActiveTab(t.id)}
                className={`pb-3 border-b-2 -mb-px transition-colors ${
                  activeTab === t.id
                    ? 'text-accent border-accent'
                    : 'border-transparent text-muted hover:text-accent'
                }`}
              >
                {t.label}
              </button>
            ))}
          </div>

          <div className="mt-6 text-sm leading-relaxed">
            {activeTab === 'skills' && (
              <p >Web App Development</p>
            )}

            {activeTab === 'education' && (
              <div className="space-y-2">
                {education.map((ed) => (
                  <div key={ed.institute}>
                    <p className="font-bold text-text">{ed.degree}</p>
                    <p className="text-muted">{ed.institute}</p>
                    <p className="text-muted">{ed.period}</p>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}