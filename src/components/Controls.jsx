import { motion } from 'framer-motion'
import { useApp } from '../context/AppContext'

const THEMES = [
  { key: 'cyan',    color: '#00d9ff', label: 'Cyan' },
  { key: 'purple',  color: '#a855f7', label: 'Purple' },
  { key: 'emerald', color: '#10b981', label: 'Emerald' },
]

export default function Controls() {
  const { lang, setLang, theme, setTheme, t } = useApp()

  return (
    <motion.div
      className="controls-panel"
      initial={{ opacity: 0, y: 16, scale: 0.92 }}
      animate={{ opacity: 1, y: 0,  scale: 1 }}
      transition={{ delay: 1.8, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
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
  )
}
