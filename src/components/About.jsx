import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import { education } from '../data/index'
import { useApp } from '../context/AppContext'
import { popUp, popLeft, popRight, stagger, VIEWPORT } from '../utils/variants'
import RevealTitle from './RevealTitle'

export default function About() {
  const { t } = useApp()
  const ta = t.about

  const mx = useMotionValue(0.5)
  const my = useMotionValue(0.5)
  const rotateX = useSpring(useTransform(my, [0, 1], [10, -10]), { stiffness: 150, damping: 18 })
  const rotateY = useSpring(useTransform(mx, [0, 1], [-10, 10]), { stiffness: 150, damping: 18 })

  const handleAvatarMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect()
    mx.set((e.clientX - rect.left) / rect.width)
    my.set((e.clientY - rect.top) / rect.height)
  }
  const resetAvatarTilt = () => { mx.set(0.5); my.set(0.5) }

  return (
    <section id="about">
      <div className="section-wrap">
        <motion.div
          className="section-header"
          data-num="01"
          variants={popUp}
          initial="hidden"
          whileInView="show"
          viewport={VIEWPORT}
        >
          <span className="section-tag">{ta.tag}</span>
          <RevealTitle as="h2" className="section-title" text={ta.title} />
        </motion.div>

        <div className="about-grid">
          <motion.div
            className="avatar-wrap"
            variants={popLeft}
            initial="hidden"
            whileInView="show"
            viewport={VIEWPORT}
            style={{ rotateX, rotateY, transformPerspective: 800 }}
            onMouseMove={handleAvatarMove}
            onMouseLeave={resetAvatarTilt}
          >
            <img
              src="/avatar.jpg"
              alt="Pawan Raj Pandey"
              className="avatar-img"
              onError={(e) => { e.currentTarget.style.visibility = 'hidden' }}
            />
            <div className="avatar-ring" />
            <div className="avatar-glow" />
          </motion.div>

          <motion.div
            className="about-bio"
            variants={popRight}
            initial="hidden"
            whileInView="show"
            viewport={VIEWPORT}
          >
            {ta.bio.map((para, i) => (
              <p key={i} dangerouslySetInnerHTML={{ __html: para }} />
            ))}

            <motion.div
              className="stats-grid"
              variants={stagger(0.1)}
              initial="hidden"
              whileInView="show"
              viewport={VIEWPORT}
            >
              {ta.stats.map((stat) => (
                <motion.div key={stat.label} className="stat-card" variants={popUp}>
                  <span className="stat-value gradient-text">{stat.value}</span>
                  <span className="stat-label">{stat.label}</span>
                </motion.div>
              ))}
            </motion.div>

            <motion.div
              className="education-card"
              variants={popUp}
              initial="hidden"
              whileInView="show"
              viewport={VIEWPORT}
            >
              <div className="edu-icon">🎓</div>
              <div className="edu-info">
                <span className="edu-degree">{education.degree}</span>
                <span className="edu-sub">
                  {education.institution} · {education.university} · {education.period}
                </span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
