import { useState } from 'react'
import { skills, education, experience } from '../data'

const tabs = [
  { id: 'skills', label: 'Skills' },
  { id: 'experience', label: 'Experience' },
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
          <h3 className="section-title">About Me
          </h3>

          <p className="text-muted leading-relaxed mb-8">
            MERN Stack Developer with practical experience in developing responsive,
            user-focused web applications using React.js, Node.js, Express.js and MongoDB.
            Experienced in building complete web solutions with RESTful APIs,
            JWT Authentication, Redux, Multer, Cloudinary and Tailwind CSS.
            Familiar with Git, GitHub, Postman and Figma, with experience deploying applications
            using Vercel, Netlify and Render.
            Passionate about transforming ideas into scalable, maintainable and high-quality
            web applications while continuously expanding technical expertise and
            embracing modern development practices.
            Currently exploring AI integration in web applications using OpenAI APIs and modern JavaScript technologies.
          </p>

          <div className="flex gap-6 sm:gap-8 text-sm font-semibold border-b border-border">
            {tabs.map((t) => (
              <button
                key={t.id}
                onClick={() => setActiveTab(t.id)}
                className={`pb-3 border-b-2 -mb-px transition-colors ${activeTab === t.id
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
              <p className="text-muted">Web App Development</p>
            )}


            {activeTab === 'experience' && (
              <div className="space-y-2">
                {experience.map((ex) => (
                  <div key={ex.company}>
                    <p className=" font-semibold  text-accent">{ex.period}</p>
                    <p className="text-muted">{ex.company}</p>
                  </div>

                ))}
              </div>
            )}

            {activeTab === 'education' && (
              <div className="space-y-2">
                {education.map((ed) => (
                  <div key={ed.institute}>
                    <p className="font-bold text-accent">{ed.period}</p>
                    <p className="text-muted">{ed.institute}</p>

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