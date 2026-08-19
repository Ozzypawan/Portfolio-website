import { useState } from 'react'
import emailjs from '@emailjs/browser'
import { motion, AnimatePresence } from 'framer-motion'
import { useApp } from '../context/AppContext'
import { popUp, popLeft, popRight, stagger, VIEWPORT } from '../utils/variants'
import RevealTitle from './RevealTitle'
import Magnetic from './Magnetic'
import { handleSpotlightMove } from '../utils/spotlight'

const EJS_SERVICE  = 'service_p2oogfn'
const EJS_TEMPLATE = 'template_hvp363l'
const EJS_KEY      = 'uhRaRpArFs1iBQ1oy'

const GmailIcon = () => (
  <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width="22" height="22">
    <path fill="#EA4335" d="M6 20H4a2 2 0 01-2-2V7.25L12 14l10-6.75V18a2 2 0 01-2 2h-2V9.75L12 16 6 9.75V20z"/>
    <path fill="#EA4335" d="M2 7.25L12 14l10-6.75V6a2 2 0 00-2-2H4a2 2 0 00-2 2v1.25z"/>
  </svg>
)

const LinkedInIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" width="22" height="22">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
  </svg>
)

const GitHubIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" width="22" height="22">
    <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
  </svg>
)

const PhoneIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
    <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
  </svg>
)

const SOCIAL_META = {
  gmail:    { Icon: GmailIcon,    bg: '#ffffff', border: true, href: `mailto:${'pawanpandey1251@gmail.com'}` },
  linkedin: { Icon: LinkedInIcon, bg: '#0A66C2', href: 'https://www.linkedin.com/in/pawanrajpandey' },
  github:   { Icon: GitHubIcon,   bg: '#24292e', href: 'https://github.com/ozzypawan', border: true },
  phone:    { Icon: PhoneIcon,    bg: '#16a34a', href: 'tel:+9779767279454' },
}

const CheckIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" width="32" height="32">
    <polyline points="20 6 9 17 4 12" />
  </svg>
)

export default function Contact() {
  const { t } = useApp()
  const tc = t.contact
  const tf = tc.form

  const [form, setForm]     = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState('idle')

  const onChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const onSubmit = async (e) => {
    e.preventDefault()
    setStatus('sending')
    try {
      await emailjs.send(
        EJS_SERVICE,
        EJS_TEMPLATE,
        { name: form.name, email: form.email, message: form.message, title: 'Portfolio Contact' },
        EJS_KEY,
      )
      setStatus('sent')
      setForm({ name: '', email: '', message: '' })
    } catch {
      setStatus('error')
    }
  }

  return (
    <section id="contact" className="contact-section">
      <div className="section-wrap">
        <motion.div
          className="section-header"
          data-num="05"
          variants={popUp}
          initial="hidden"
          whileInView="show"
          viewport={VIEWPORT}
        >
          <span className="section-tag">{tc.tag}</span>
          <RevealTitle as="h2" className="section-title" text={tc.title} />
          <p className="section-desc">{tc.desc}</p>
        </motion.div>

        <div className="contact-grid-new">
          <motion.div
            className="contact-form-card spotlight"
            variants={popLeft}
            initial="hidden"
            whileInView="show"
            viewport={VIEWPORT}
            onMouseMove={handleSpotlightMove}
          >
            <h3 className="contact-form-title">{tf.title}</h3>

            <AnimatePresence mode="wait">
              {status === 'sent' ? (
                <motion.div
                  key="success"
                  className="form-success"
                  initial={{ opacity: 0, scale: 0.85 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ type: 'spring', damping: 14, stiffness: 120 }}
                >
                  <div className="form-success-icon">
                    <CheckIcon />
                  </div>
                  <p className="form-success-title">{tf.sent}</p>
                  <p className="form-success-desc">{tf.sentDesc}</p>
                  <button className="btn btn-outline form-back-btn" onClick={() => setStatus('idle')}>
                    {tf.sentAnother}
                  </button>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  className="contact-form"
                  onSubmit={onSubmit}
                  initial={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  <div className="form-row">
                    <div className="form-field">
                      <label className="form-label">{tf.name}</label>
                      <input
                        className="form-input"
                        type="text"
                        name="name"
                        value={form.name}
                        onChange={onChange}
                        placeholder={tf.ph.name}
                        required
                      />
                    </div>
                    <div className="form-field">
                      <label className="form-label">{tf.email}</label>
                      <input
                        className="form-input"
                        type="email"
                        name="email"
                        value={form.email}
                        onChange={onChange}
                        placeholder={tf.ph.email}
                        required
                      />
                    </div>
                  </div>

                  <div className="form-field">
                    <label className="form-label">{tf.message}</label>
                    <textarea
                      className="form-textarea"
                      name="message"
                      value={form.message}
                      onChange={onChange}
                      placeholder={tf.ph.message}
                      rows={5}
                      required
                    />
                  </div>

                  {status === 'error' && (
                    <p className="form-error">{tf.error}</p>
                  )}

                  <Magnetic className="form-submit-btn" strength={0.25}>
                    <button
                      className="btn btn-primary"
                      type="submit"
                      disabled={status === 'sending'}
                    >
                      {status === 'sending' ? (
                        <span className="btn-sending">
                          <span className="send-spinner" />
                          {tf.sending}
                        </span>
                      ) : (
                        tf.send
                      )}
                    </button>
                  </Magnetic>
                </motion.form>
              )}
            </AnimatePresence>
          </motion.div>

          <motion.div
            className="contact-socials"
            variants={popRight}
            initial="hidden"
            whileInView="show"
            viewport={VIEWPORT}
          >
            <h3 className="contact-connect-title">{tc.connect}</h3>

            <motion.div
              className="social-links-list"
              variants={stagger(0.1)}
              initial="hidden"
              whileInView="show"
              viewport={VIEWPORT}
            >
              {tc.socials.map((social) => {
                const meta = SOCIAL_META[social.key]
                const Icon = meta.Icon
                return (
                  <motion.a
                    key={social.key}
                    href={meta.href}
                    className="social-link-card spotlight"
                    target={meta.href.startsWith('mailto') || meta.href.startsWith('tel') ? '_self' : '_blank'}
                    rel="noreferrer"
                    variants={popUp}
                    whileHover={{ x: 5, transition: { type: 'spring', damping: 15, stiffness: 260 } }}
                    onMouseMove={handleSpotlightMove}
                  >
                    <div
                      className={`social-icon-badge ${meta.border ? 'social-icon-badge--bordered' : ''}`}
                      style={{ background: meta.bg }}
                    >
                      <Icon />
                    </div>
                    <div className="social-link-text">
                      <span className="social-link-label">{social.label}</span>
                      <span className="social-link-sub">{social.sub}</span>
                    </div>
                    <span className="social-link-arrow">→</span>
                  </motion.a>
                )
              })}
            </motion.div>
          </motion.div>
        </div>

        <motion.footer
          className="footer"
          variants={popUp}
          initial="hidden"
          whileInView="show"
          viewport={VIEWPORT}
        >
          <p>{t.footer}</p>
        </motion.footer>
      </div>
    </section>
  )
}
