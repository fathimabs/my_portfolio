import { contact } from '../data'
import { GithubIcon, XIcon, LinkedinIcon, InstagramIcon, MailIcon } from './Icons'

const socials = [
  { href: contact.github, label: 'GitHub', Icon: GithubIcon },
  { href: contact.twitter, label: 'X', Icon: XIcon },
  { href: contact.linkedin, label: 'LinkedIn', Icon: LinkedinIcon },
  { href: contact.instagram, label: 'Instagram', Icon: InstagramIcon },
  { href: `mailto:${contact.email}`, label: 'Email', Icon: MailIcon },
]

export default function Footer() {
  return (
    <footer className="border-t border-border py-8 px-6">
      <div className="max-w-content mx-auto flex flex-col items-center gap-4 text-center">
        <div className="flex flex-wrap justify-center gap-3">
          {socials.map(({ href, label, Icon }) => (
            <a
              key={label}
              href={href}
              aria-label={label}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-text text-white flex items-center justify-center hover:bg-accent transition-colors"
            >
              <Icon />
            </a>
          ))}
        </div>

        <p className="text-sm text-muted">
          © {new Date().getFullYear()} Fathima B S. All rights reserved.
        </p>
      </div>
    </footer>
  )
}