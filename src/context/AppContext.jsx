import { createContext, useContext, useState, useEffect } from 'react'
import { translations } from '../data/translations'

const AppContext = createContext()

export function AppProvider({ children }) {
  const [lang, setLangRaw] = useState('en')
  const [theme, setThemeRaw] = useState('cyan')
  const [fading, setFading] = useState(false)

  const setLang = (next) => {
    if (next === lang) return
    setFading(true)
    setTimeout(() => {
      setLangRaw(next)
      setFading(false)
    }, 160)
  }

  const setTheme = (next) => {
    setThemeRaw(next)
  }

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
  }, [theme])

  useEffect(() => {
    document.documentElement.lang = lang === 'np' ? 'ne' : 'en'
  }, [lang])

  return (
    <AppContext.Provider value={{ lang, setLang, theme, setTheme, t: translations[lang], fading }}>
      {children}
    </AppContext.Provider>
  )
}

export const useApp = () => useContext(AppContext)
