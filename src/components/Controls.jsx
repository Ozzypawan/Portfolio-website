import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useApp } from '../context/AppContext'

const THEMES = [
  { key: 'cyan',    color: '#00d9ff', label: 'Cyan' },
  { key: 'purple',  color: '#a855f7', label: 'Purple' },
  { key: 'emerald', color: '#10b981', label: 'Emerald' },
]

export default function Controls() {
  const { lang, setLang, theme, setTheme, t } = useApp()
  const [open, setOpen] = useState(false)

  return (
    <motion.div
      className="controls-wrap"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 1.8, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
    >
      <AnimatePresence>
        {open && (
          <motion.div
            className="controls-panel"
            initial={{ opacity: 0, y: 10, scale: 0.93 }}
            animate={{ opacity: 1, y: 0,  scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.93 }}
            transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="controls-group">
              <span className="controls-label">{t.controls.lang}</span>
              <div className="lang-switch">
                {['en', 'np'].map((l) => (
                  <button
                    key={l}
                    className={`lang-btn ${lang === l ? 'active' : ''}`}
                    onClick={() => setLang(l)}
                  >
                    {l.toUpperCase()}
                  </button>
                ))}
              </div>
            </div>

            <div className="controls-divider" />

            <div className="controls-group">
              <span className="controls-label">{t.controls.theme}</span>
              <div className="theme-dots">
                {THEMES.map((th) => (
                  <motion.button
                    key={th.key}
                    className={`theme-dot-btn ${theme === th.key ? 'active' : ''}`}
                    style={{ background: th.color }}
                    onClick={() => setTheme(th.key)}
                    title={th.label}
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.9 }}
                    transition={{ type: 'spring', damping: 15, stiffness: 300 }}
                  />
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        className={`controls-toggle ${open ? 'active' : ''}`}
        onClick={() => setOpen((v) => !v)}
        title="Customize"
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.93 }}
        transition={{ type: 'spring', damping: 15, stiffness: 300 }}
      >
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round">
          <circle cx="9"  cy="5"  r="2" />
          <line x1="11" y1="5"  x2="21" y2="5"  />
          <line x1="3"  y1="5"  x2="7"  y2="5"  />
          <circle cx="15" cy="12" r="2" />
          <line x1="17" y1="12" x2="21" y2="12" />
          <line x1="3"  y1="12" x2="13" y2="12" />
          <circle cx="9"  cy="19" r="2" />
          <line x1="11" y1="19" x2="21" y2="19" />
          <line x1="3"  y1="19" x2="7"  y2="19" />
        </svg>
      </motion.button>
    </motion.div>
  )
}
