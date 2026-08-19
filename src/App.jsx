import { useEffect } from 'react'
import Lenis from 'lenis'
import { AppProvider, useApp } from './context/AppContext'
import Navbar from './components/Navbar'
import Controls from './components/Controls'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Contact from './components/Contact'

function PortfolioContent() {
  const { fading } = useApp()

  useEffect(() => {
    const lenis = new Lenis({ lerp: 0.08 })
    let rafId
    const loop = (time) => {
      lenis.raf(time)
      rafId = requestAnimationFrame(loop)
    }
    rafId = requestAnimationFrame(loop)
    return () => {
      cancelAnimationFrame(rafId)
      lenis.destroy()
    }
  }, [])

  return (
    <>
      <Navbar />
      <Controls />
      <main style={{ transition: 'opacity 0.15s ease', opacity: fading ? 0 : 1 }}>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Contact />
      </main>
    </>
  )
}

export default function App() {
  return (
    <AppProvider>
      <PortfolioContent />
    </AppProvider>
  )
}
