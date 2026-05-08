import { motion } from 'framer-motion'
import { projects } from '../data/index'
import { useApp } from '../context/AppContext'
import { popUp, stagger, VIEWPORT } from '../utils/variants'

export default function Projects() {
  const { t } = useApp()
  const tp = t.projects

  return (
    <section id="projects">
      <div className="section-wrap">
        <motion.div
          className="section-header"
          data-num="04"
          variants={popUp}
          initial="hidden"
          whileInView="show"
          viewport={VIEWPORT}
        >
          <span className="section-tag">{tp.tag}</span>
          <h2 className="section-title">{tp.title}</h2>
        </motion.div>

        <motion.div
          className="projects-grid"
          variants={stagger(0.12)}
          initial="hidden"
          whileInView="show"
          viewport={VIEWPORT}
        >
          {projects.map((project, i) => {
            const tx = tp.items[i]
            return (
              <motion.article
                key={project.id}
                className="project-card"
                style={{ background: project.gradient }}
                variants={popUp}
                whileHover={{ y: -7, transition: { type: 'spring', damping: 15, stiffness: 200 } }}
              >
                <div className="project-accent-bar" style={{ background: project.accent }} />

                {tx.tag && (
                  <span className="project-tag-work">{tx.tag}</span>
                )}

                <h3 className="project-title">{tx.title}</h3>
                <p className="project-desc">{tx.description}</p>

                <div className="project-tags">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="project-tag"
                      style={{ color: project.accent, borderColor: `${project.accent}45` }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="project-links">
                  {project.private ? (
                    <span className="project-link project-link-private">Private repo</span>
                  ) : (
                    <a href={project.github} className="project-link" target="_blank" rel="noreferrer">GitHub</a>
                  )}
                  <a
                    href={project.live}
                    className="project-link project-link-live"
                    style={{ color: project.accent }}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Visit site →
                  </a>
                </div>
              </motion.article>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
