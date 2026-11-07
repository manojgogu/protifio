import { useState } from 'react'
import { contact, profile, socialLinks } from '../data/portfolio'
import SectionHead from './SectionHead'
import {
  IconCheck,
  IconGithub,
  IconLinkedin,
  IconMail,
  IconMapPin,
  IconPhone,
  IconSend,
} from './icons'

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

const initialValues = {
  name: '',
  email: '',
  subject: '',
  message: '',
}

const socialIconMap = {
  github: IconGithub,
  linkedin: IconLinkedin,
}

export default function Contact() {
  const [values, setValues] = useState(initialValues)
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState('idle')
  const [senderName, setSenderName] = useState('')

  const validate = (data) => {
    const nextErrors = {}
    const name = data.name.trim()
    const email = data.email.trim()
    const subject = data.subject.trim()
    const message = data.message.trim()

    if (!name) {
      nextErrors.name = 'Please enter your name.'
    }
    if (!email) {
      nextErrors.email = 'Please enter your email address.'
    } else if (!emailPattern.test(email)) {
      nextErrors.email = 'Please enter a valid email address.'
    }
    if (!subject) {
      nextErrors.subject = 'Please add a short subject.'
    }
    if (!message) {
      nextErrors.message = 'Please write a message.'
    } else if (message.length < 10) {
      nextErrors.message = 'Your message should be at least 10 characters.'
    }

    return nextErrors
  }

  const handleChange = (event) => {
    const { name, value } = event.target
    setValues((current) => ({ ...current, [name]: value }))
    setErrors((current) => {
      if (!current[name]) {
        return current
      }
      const next = { ...current }
      delete next[name]
      return next
    })
    if (status === 'success') {
      setStatus('idle')
    }
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    const nextErrors = validate(values)

    if (Object.keys(nextErrors).length > 0) {
      setErrors(nextErrors)
      setStatus('idle')
      return
    }

    setSenderName(values.name.trim())
    setStatus('success')
    setErrors({})
    setValues(initialValues)
  }

  return (
    <section id="contact" className="section contact-section">
      <div className="container">
        <SectionHead
          index="07"
          kicker={contact.eyebrow}
          title={contact.heading}
          description={contact.text}
          center
        />

        <div className="contact-grid">
          <div className="contact-card" data-reveal>
            <div className="contact-card-head">
              <span className="contact-status">
                <span className="status-dot" />
                Available for opportunities
              </span>
              <span className="contact-timezone">IST · Telangana</span>
            </div>

            <div className="contact-rows">
              <a className="contact-row" href={`mailto:${profile.email}`}>
                <span className="contact-row-icon">
                  <IconMail />
                </span>
                <span>
                  <small>Email</small>
                  <strong>{profile.email}</strong>
                </span>
              </a>

              <a className="contact-row" href={profile.phoneHref}>
                <span className="contact-row-icon">
                  <IconPhone />
                </span>
                <span>
                  <small>Phone</small>
                  <strong>{profile.phoneDisplay}</strong>
                </span>
              </a>

              <div className="contact-row contact-row-static">
                <span className="contact-row-icon">
                  <IconMapPin />
                </span>
                <span>
                  <small>Location</small>
                  <strong>{profile.location}</strong>
                </span>
              </div>
            </div>

            <div className="contact-socials">
              {socialLinks
                .filter((link) => link.url)
                .map((link) => {
                  const Icon = socialIconMap[link.icon] ?? IconMail
                  return (
                    <a
                      className="social-btn"
                      href={link.url}
                      key={link.label}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={`${link.label} — opens in a new tab`}
                      title={link.label}
                    >
                      <Icon />
                    </a>
                  )
                })}
            </div>

            <div className="contact-card-foot">
              <IconCheck />
              <span>Usually replies within a day.</span>
            </div>
          </div>

          <form className="contact-form card-panel" onSubmit={handleSubmit} noValidate data-reveal>
            <div className="form-row">
              <div className="field">
                <label htmlFor="contact-name">Name</label>
                <input
                  id="contact-name"
                  type="text"
                  name="name"
                  value={values.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  autoComplete="name"
                  aria-invalid={errors.name ? 'true' : undefined}
                  aria-describedby={errors.name ? 'contact-name-error' : undefined}
                />
                {errors.name ? (
                  <p id="contact-name-error" className="field-error" role="alert">
                    {errors.name}
                  </p>
                ) : null}
              </div>

              <div className="field">
                <label htmlFor="contact-email">Email</label>
                <input
                  id="contact-email"
                  type="email"
                  name="email"
                  value={values.email}
                  onChange={handleChange}
                  placeholder="you@example.com"
                  autoComplete="email"
                  aria-invalid={errors.email ? 'true' : undefined}
                  aria-describedby={errors.email ? 'contact-email-error' : undefined}
                />
                {errors.email ? (
                  <p id="contact-email-error" className="field-error" role="alert">
                    {errors.email}
                  </p>
                ) : null}
              </div>
            </div>

            <div className="field">
              <label htmlFor="contact-subject">Subject</label>
              <input
                id="contact-subject"
                type="text"
                name="subject"
                value={values.subject}
                onChange={handleChange}
                placeholder="What would you like to talk about?"
                aria-invalid={errors.subject ? 'true' : undefined}
                aria-describedby={errors.subject ? 'contact-subject-error' : undefined}
              />
              {errors.subject ? (
                <p id="contact-subject-error" className="field-error" role="alert">
                  {errors.subject}
                </p>
              ) : null}
            </div>

            <div className="field">
              <label htmlFor="contact-message">Message</label>
              <textarea
                id="contact-message"
                name="message"
                value={values.message}
                onChange={handleChange}
                placeholder="Tell me a little about your idea or opportunity..."
                rows="5"
                aria-invalid={errors.message ? 'true' : undefined}
                aria-describedby={errors.message ? 'contact-message-error' : undefined}
              />
              {errors.message ? (
                <p id="contact-message-error" className="field-error" role="alert">
                  {errors.message}
                </p>
              ) : null}
            </div>

            <div aria-live="polite">
              {status === 'success' ? (
                <div className="form-success" role="status">
                  <IconCheck />
                  <div>
                    <strong>Thanks{senderName ? `, ${senderName}` : ''}!</strong>
                    <span>
                      Your message is validated. This demo form does not send yet — email me directly
                      at {profile.email}.
                    </span>
                  </div>
                </div>
              ) : null}
            </div>

            <div className="form-actions">
              <button type="submit" className="btn btn-primary">
                <IconSend />
                Send Message
              </button>
              <p className="form-note">{contact.formNote}</p>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}
