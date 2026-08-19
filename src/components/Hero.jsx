import { useEffect, useRef, lazy, Suspense } from 'react'
import { motion } from 'framer-motion'
import gsap from 'gsap'

const HeroCanvas = lazy(() => import('../canvas/HeroCanvas'))
import { personalInfo } from '../data/index'
import { useApp } from '../context/AppContext'
import Magnetic from './Magnetic'

export default function Hero() {
  const containerRef = useRef()
  const { t } = useApp()

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power4.out' } })
      tl.from('.gsap-char', { y: 90, opacity: 0, duration: 0.7, stagger: 0.026, delay: 0.3 })
        .from('.gsap-word', { y: 50, opacity: 0, duration: 0.55, stagger: 0.12 }, '-=0.35')
        .from('.gsap-desc', { y: 20, opacity: 0, duration: 0.45 }, '-=0.25')
        .from('.gsap-cta',  { y: 18, opacity: 0, duration: 0.4, stagger: 0.1 }, '-=0.3')
    }, containerRef)
    return () => ctx.revert()
  }, [])

  return (
    <section id="home" className="hero-section" ref={containerRef}>
      <div className="hero-bg-glow" />

      <div className="hero-content">
        <motion.div
          className="hero-meta"
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <span className="availability-badge">
            <span className="availability-dot" />
            {t.hero.openTo}
          </span>
          <span className="hero-location">
            <span className="location-icon">◎</span>
            {personalInfo.location}
          </span>
        </motion.div>

        <motion.p
          className="hero-greeting"
          initial={{ opacity: 0, x: -14 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.45, delay: 0.18 }}
        >
          {t.hero.greeting}
        </motion.p>

        <div className="hero-name-wrap">
          <h1 className="hero-name">
            {personalInfo.name.split('').map((char, i) => (
              <span
                key={i}
                className="gsap-char"
                style={{ display: 'inline-block', whiteSpace: char === ' ' ? 'pre' : undefined }}
              >
                {char === ' ' ? ' ' : char}
              </span>
            ))}
          </h1>
        </div>

        <div className="hero-title-wrap">
          {t.hero.roleWords.map((word) => (
            <span key={word} className="hero-word gsap-word">{word}</span>
          ))}
        </div>

        <p className="hero-description gsap-desc">{t.hero.description}</p>

        <div className="hero-actions">
          <Magnetic>
            <a href="#projects" className="btn btn-primary gsap-cta">{t.hero.viewProjects}</a>
          </Magnetic>
          <Magnetic>
            <a href="#experience" className="btn btn-outline gsap-cta">{t.hero.myExperience}</a>
          </Magnetic>
        </div>
      </div>

      <div className="hero-canvas-wrap">
        <Suspense fallback={null}>
          <HeroCanvas />
        </Suspense>
      </div>

      <motion.div
        className="scroll-indicator"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.4, duration: 1 }}
      >
        <div className="scroll-line" />
        <span>scroll</span>
      </motion.div>
    </section>
  )
}
