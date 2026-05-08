import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { useApp } from '../context/AppContext'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
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

  return (
    <motion.nav
      className={`navbar ${scrolled ? 'scrolled' : ''}`}
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <a href="#home" className="nav-logo">
        <span className="gradient-text">P</span>awan
      </a>

      <ul className="nav-links">
        {navLinks.map((link, i) => (
          <motion.li
            key={link.href}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 * i + 0.3 }}
          >
            <a href={link.href} className="nav-link">{link.label}</a>
          </motion.li>
        ))}
        <motion.li initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.7 }}>
          <a href="/resume.pdf" className="nav-cta" target="_blank" rel="noreferrer">
            {t.nav.resume}
          </a>
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
