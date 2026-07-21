import { contact } from '../data'
import { PinIcon, PhoneIcon, MailIcon } from './Icons'

const details = [
  { label: 'Location', value: contact.location, Icon: PinIcon, href: null },
  { label: 'Phone', value: contact.phone, Icon: PhoneIcon, href: `tel:${contact.phone.replace(/\s+/g, '')}` },
  { label: 'Email', value: contact.email, Icon: MailIcon, href: `mailto:${contact.email}` },
]

export default function Contact() {
  return (
    <section id="contact" className="section text-center">
      <h3 className="section-title">Contact</h3>
      <p className="text-muted mb-12 px-4">
        I'm always open to discussing new opportunities,
        exciting projects, or collaborations. Feel free to reach out anytime.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-3xl mx-auto">
        {details.map(({ label, value, Icon, href }) => (
          <div key={label} className="flex flex-col sm:flex-row items-center sm:items-start gap-2 sm:gap-3 text-center sm:text-left">
            <span className="w-10 h-10 rounded-full bg-accent-light text-accent flex items-center justify-center shrink-0">
              <Icon />
            </span>
            <div className="min-w-0">
              <p className="text-sm text-muted mb-0.5">{label}</p>
              {href ? (
                <a href={href} className="font-semibold text-text hover:text-accent transition-colors break-words">
                  {value}
                </a>
              ) : (
                <p className="font-semibold text-text break-words">{value}</p>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}