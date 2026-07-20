import { useState } from 'react'
import { navLinks } from '../data'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <nav className="sticky top-0 z-50">
      <div className="max-w-content mx-auto px-6 sm:px-8 py-4 flex justify-between items-center">
        <a href="#home" className="text-lg font-bold font-display text-text">
          Dev.Fathima
        </a>

        {/* Desktop links */}
        <ul className="hidden md:flex gap-8 font-semibold text-sm">
          {navLinks.map((l) => (
            <li key={l.id}>
              <a href={`#${l.id}`} className="hover:text-accent transition-colors">
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
          aria-expanded={open}
          className="md:hidden flex flex-col gap-1.5 p-2"
        >
          <span className={`block h-0.5 w-6 bg-text transition-transform ${open ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`block h-0.5 w-6 bg-text transition-opacity ${open ? 'opacity-0' : ''}`} />
          <span className={`block h-0.5 w-6 bg-text transition-transform ${open ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <ul className="md:hidden flex flex-col gap-1 px-6 pb-4 font-semibold text-sm">
          {navLinks.map((l) => (
            <li key={l.id}>
              <a
                href={`#${l.id}`}
                onClick={() => setOpen(false)}
                className="block py-2 hover:text-accent transition-colors"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </nav>
  )
}