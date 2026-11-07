import { footer, navLinks, profile, socialLinks } from '../data/portfolio'
import {
  IconArrowUp,
  IconGithub,
  IconLinkedin,
  IconMail,
  IconMapPin,
  IconPhone,
} from './icons'

const socialIconMap = {
  github: IconGithub,
  linkedin: IconLinkedin,
}

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-top">
          <div className="footer-brand">
            <a className="brand" href="#home" aria-label="Manoj Gogu — home">
              <span className="brand-mark">
                <span>{profile.initials}</span>
              </span>
              <span className="brand-text">
                <strong>{profile.name}</strong>
                <small>{profile.role}</small>
              </span>
            </a>
            <p className="footer-tagline">{footer.tagline}</p>
            <div className="footer-socials">
              {socialLinks
                .filter((link) => link.url)
                .map((link) => {
                  const Icon = socialIconMap[link.icon] ?? IconMail
                  return (
                    <a
                      key={link.label}
                      href={link.url}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={`${link.label} — opens in a new tab`}
                      title={link.label}
                    >
                      <Icon />
                    </a>
                  )
                })}
              <a href={`mailto:${profile.email}`} aria-label="Email" title="Email">
                <IconMail />
              </a>
            </div>
          </div>

          <div className="footer-col">
            <h4>Navigate</h4>
            {navLinks.slice(1, 5).map((link) => (
              <a key={link.href} href={link.href}>
                {link.label}
              </a>
            ))}
          </div>

          <div className="footer-col">
            <h4>More</h4>
            {navLinks.slice(5).map((link) => (
              <a key={link.href} href={link.href}>
                {link.label}
              </a>
            ))}
            <a href={`mailto:${profile.email}`}>Email</a>
          </div>

          <div className="footer-col footer-contact">
            <h4>Get in touch</h4>
            <a href={`mailto:${profile.email}`}>
              <IconMail />
              {profile.email}
            </a>
            <a href={profile.phoneHref}>
              <IconPhone />
              {profile.phoneDisplay}
            </a>
            <span>
              <IconMapPin />
              {profile.location}
            </span>
          </div>
        </div>

        <div className="footer-bottom">
          <p>{footer.copyright}</p>
          <a className="back-to-top" href="#home">
            Back to top
            <IconArrowUp />
          </a>
        </div>
      </div>
    </footer>
  )
}
