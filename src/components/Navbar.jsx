import { useState, useEffect, useRef, useCallback } from 'react'
import { motion } from 'framer-motion'
import { useApp } from '../context/AppContext'
import Magnetic from './Magnetic'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeHref, setActiveHref] = useState(null)
  const [indicator, setIndicator] = useState({ left: 0, width: 0, opacity: 0 })
  const navListRef = useRef(null)
  const linkRefs = useRef({})
  const { t } = useApp()

  const navLinks = [
    { label: t.nav.about,      href: '#about' },
    { label: t.nav.experience, href: '#experience' },
    { label: t.nav.projects,   href: '#projects' },
    { label: t.nav.contact,    href: '#contact' },
  ]

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Track which section is in view so the underline can glide to it.
  useEffect(() => {
    const ids = navLinks.map((l) => l.href.slice(1))
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveHref(`#${entry.target.id}`)
        })
      },
      { rootMargin: '-45% 0px -50% 0px', threshold: 0 },
    )
    ids.forEach((id) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })
    return () => observer.disconnect()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [t])

  const measureIndicator = useCallback(() => {
    const container = navListRef.current
    const activeEl = activeHref && linkRefs.current[activeHref]
    if (!container || !activeEl) {
      setIndicator((s) => ({ ...s, opacity: 0 }))
      return
    }
    const containerRect = container.getBoundingClientRect()
    const linkRect = activeEl.getBoundingClientRect()
    setIndicator({ left: linkRect.left - containerRect.left, width: linkRect.width, opacity: 1 })
  }, [activeHref])

  useEffect(() => {
    measureIndicator()
    window.addEventListener('resize', measureIndicator)
    return () => window.removeEventListener('resize', measureIndicator)
  }, [measureIndicator])

  return (
    <motion.nav
      className={`navbar ${scrolled ? 'scrolled' : ''}`}
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <a href="#home" className="nav-logo">
        {'Pawan Raj Pandey'.split('').map((char, i) => (
          <motion.span
            key={i}
            className={i === 0 ? 'gradient-text' : ''}
            initial={{ opacity: 0, scale: 0.4, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ delay: 0.3 + i * 0.05, type: 'spring', stiffness: 300, damping: 14 }}
            style={{ display: 'inline-block', whiteSpace: 'pre' }}
          >
            {char}
          </motion.span>
        ))}
      </a>

      <ul className="nav-links" ref={navListRef}>
        {navLinks.map((link, i) => (
          <motion.li
            key={link.href}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 * i + 0.3 }}
          >
            <a
              href={link.href}
              className={`nav-link ${activeHref === link.href ? 'active' : ''}`}
              ref={(el) => { linkRefs.current[link.href] = el }}
            >
              {link.label}
            </a>
          </motion.li>
        ))}
        <motion.span
          className="nav-indicator"
          animate={indicator}
          transition={{ type: 'spring', stiffness: 380, damping: 32 }}
        />
        <motion.li initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.7 }}>
          <Magnetic strength={0.3}>
            <a href="/resume.pdf" className="nav-cta" target="_blank" rel="noreferrer">
              {t.nav.resume}
            </a>
          </Magnetic>
        </motion.li>
      </ul>

      <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
        <span className={`hamburger ${menuOpen ? 'open' : ''}`} />
      </button>

      {menuOpen && (
        <motion.div
          className="mobile-menu"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0 }}
        >
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} onClick={() => setMenuOpen(false)}>
              {link.label}
            </a>
          ))}
          <a href="/resume.pdf" target="_blank" rel="noreferrer">{t.nav.resume}</a>
        </motion.div>
      )}
    </motion.nav>
  )
}
