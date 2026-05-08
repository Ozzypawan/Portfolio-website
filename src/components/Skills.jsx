import { motion } from 'framer-motion'
import { skills, skillCategoryKeys } from '../data/index'
import { useApp } from '../context/AppContext'
import { popUp, stagger, VIEWPORT, VIEWPORT_SM } from '../utils/variants'

export default function Skills() {
  const { t } = useApp()
  const ts = t.skills

  const grouped = skillCategoryKeys.map((key) => ({
    key,
    label: ts.categories[key],
    items: skills.filter((s) => s.category === key),
  }))

  return (
    <section id="skills">
      <div className="section-wrap">
        <motion.div
          className="section-header"
          data-num="02"
          variants={popUp}
          initial="hidden"
          whileInView="show"
          viewport={VIEWPORT}
        >
          <span className="section-tag">{ts.tag}</span>
          <h2 className="section-title">{ts.title}</h2>
        </motion.div>

        <div className="skills-categories">
          {grouped.map((cat, catIdx) => (
            <motion.div
              key={cat.key}
              className="skill-category"
              variants={popUp}
              initial="hidden"
              whileInView="show"
              viewport={VIEWPORT_SM}
              transition={{ delay: catIdx * 0.06 }}
            >
              <h3 className="skill-category-label">{cat.label}</h3>
              <motion.div
                className="skill-pills"
                variants={stagger(0.06)}
                initial="hidden"
                whileInView="show"
                viewport={VIEWPORT_SM}
              >
                {cat.items.map((skill) => (
                  <motion.div
                    key={skill.name}
                    className="skill-pill"
                    variants={popUp}
                    whileHover={{ y: -4, transition: { duration: 0.18 } }}
                  >
                    <span className="skill-dot" style={{ background: skill.color }} />
                    <span className="skill-name">{skill.name}</span>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
