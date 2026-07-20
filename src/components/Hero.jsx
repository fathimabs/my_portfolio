import { profile } from '../data'

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-[90vh] flex flex-col-reverse md:flex-row items-center justify-center gap-12 md:gap-20 max-w-content mx-auto px-6 sm:px-8 py-16"
    >
      <div className="max-w-xl text-center md:text-left">
        <h1 className="text-3xl sm:text-5xl font-bold mb-2">Hi There! 👋</h1>
        <h1 className="text-3xl sm:text-5xl font-bold mb-4">I'm {profile.name}</h1>
        <h2 className="text-xl sm:text-2xl font-semibold text-text mb-6">{profile.role}</h2>

        <p className="mb-8 text-muted italic leading-relaxed">"{profile.tagline}"</p>

        <a
          href={profile.resumeUrl}
          download
          className="inline-block px-5 py-3 rounded-full border border-accent text-accent font-semibold hover:bg-accent hover:text-white transition-colors"
        >
          Get Resume
        </a>
      </div>

      {/* <img
        src="/images/person.jpg"
        alt={profile.name}
        className="w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 rounded-full shadow-xl object-cover ring-4 ring-accent-light shrink-0"
      /> */}
       <img
        src="/images/person.jpg"
        alt={profile.name}
        className="w-80 h-80 sm:w-[28rem] sm:h-[28rem] rounded-full shadow-xl object-cover ring-4 ring-accent-light"
      />
    </section>
  )
}