import { motion } from 'framer-motion'

// Word-level stagger reveal (word-safe for every language in translations.js,
// unlike a char-split which breaks Devanagari conjuncts/matras).
const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.07, delayChildren: 0.02 } },
}

const word = {
  hidden: { opacity: 0, y: 28, filter: 'blur(6px)' },
  show:   { opacity: 1, y: 0, filter: 'blur(0px)', transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } },
}

export default function RevealTitle({ text, className = '', as: Tag = 'h2', viewport }) {
  const words = text.split(' ')

  return (
    <Tag className={className}>
      <motion.span
        style={{ display: 'inline-block' }}
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={viewport || { once: true, margin: '-80px' }}
      >
        {words.map((w, i) => (
          <span key={i} style={{ display: 'inline-block' }}>
            <motion.span variants={word} style={{ display: 'inline-block' }}>{w}</motion.span>
            {i < words.length - 1 ? ' ' : ''}
          </span>
        ))}
      </motion.span>
    </Tag>
  )
}
