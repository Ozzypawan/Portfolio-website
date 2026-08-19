import { useRef } from 'react'
import { motion, useScroll, useSpring } from 'framer-motion'
import { experience } from '../data/index'
import { useApp } from '../context/AppContext'
import { popUp, popRight, stagger, VIEWPORT, VIEWPORT_SM } from '../utils/variants'
import RevealTitle from './RevealTitle'
import { handleSpotlightMove } from '../utils/spotlight'

export default function Experience() {
  const { t } = useApp()
  const te = t.experience

  const timelineRef = useRef(null)
  const { scrollYProgress } = useScroll({ target: timelineRef, offset: ['start 0.8', 'end 0.4'] })
  const railScale = useSpring(scrollYProgress, { stiffness: 220, damping: 32, mass: 0.4 })

  return (
    <section id="experience">
      <div className="section-wrap">
        <motion.div
          className="section-header"
          data-num="03"
          variants={popUp}
          initial="hidden"
          whileInView="show"
          viewport={VIEWPORT}
        >
          <span className="section-tag">{te.tag}</span>
          <RevealTitle as="h2" className="section-title" text={te.title} />
        </motion.div>

        <div className="timeline" ref={timelineRef}>
          <div className="timeline-rail" />
          <motion.div className="timeline-rail-fill" style={{ scaleY: railScale }} />

          {experience.map((exp, i) => {
            const tx = te.items[i]
            return (
              <div className="timeline-item" key={exp.id}>
                <div className="timeline-track">
                  <motion.div
                    className="timeline-dot"
                    style={{ background: exp.accent, boxShadow: `0 0 14px ${exp.accent}60` }}
                    initial={{ scale: 0, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={VIEWPORT_SM}
                    transition={{ delay: i * 0.1, duration: 0.4, type: 'spring', damping: 12, stiffness: 180 }}
                  />
                </div>

                <motion.div
                  className="exp-card spotlight"
                  variants={popRight}
                  initial="hidden"
                  whileInView="show"
                  viewport={VIEWPORT_SM}
                  transition={{ delay: i * 0.08 }}
                  onMouseMove={handleSpotlightMove}
                >
                  <div
                    className="exp-accent-bar"
                    style={{ background: `linear-gradient(90deg, ${exp.accent}, transparent)` }}
                  />

                  <div className="exp-header">
                    <div className="exp-header-left">
                      <h3 className="exp-role">{tx.role}</h3>
                      <a
                        href={exp.link}
                        className="exp-company"
                        target="_blank"
                        rel="noreferrer"
                        style={{ color: exp.accent }}
                      >
                        {exp.company} ↗
                      </a>
                      <span className="exp-location">{exp.location}</span>
                    </div>
                    <div className="exp-header-right">
                      <span className="exp-period">{exp.period}</span>
                      <span className={`exp-type-badge ${exp.type.toLowerCase().replace(/[^a-z]/g, '')}`}>
                        {exp.type}
                      </span>
                    </div>
                  </div>

                  <motion.ul
                    className="exp-bullets"
                    variants={stagger(0.07)}
                    initial="hidden"
                    whileInView="show"
                    viewport={VIEWPORT_SM}
                  >
                    {tx.bullets.map((bullet, j) => (
                      <motion.li key={j} className="exp-bullet" variants={popUp}>
                        {bullet}
                      </motion.li>
                    ))}
                  </motion.ul>

                  <div className="exp-tech">
                    {exp.tech.map((tech) => (
                      <span key={tech} className="exp-tech-tag">{tech}</span>
                    ))}
                  </div>
                </motion.div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
