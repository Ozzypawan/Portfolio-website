/* Shared Framer Motion variants — spring-based pop system */

const SPRING = { type: 'spring', damping: 16, stiffness: 120, mass: 0.75 }
const SPRING_SOFT = { type: 'spring', damping: 20, stiffness: 100 }

export const popUp = {
  hidden: { opacity: 0, scale: 0.84, y: 32, filter: 'blur(3px)' },
  show:   { opacity: 1, scale: 1,    y: 0,  filter: 'blur(0px)', transition: SPRING },
}

export const popLeft = {
  hidden: { opacity: 0, scale: 0.88, x: -40, filter: 'blur(3px)' },
  show:   { opacity: 1, scale: 1,    x: 0,   filter: 'blur(0px)', transition: SPRING },
}

export const popRight = {
  hidden: { opacity: 0, scale: 0.88, x: 40,  filter: 'blur(3px)' },
  show:   { opacity: 1, scale: 1,    x: 0,   filter: 'blur(0px)', transition: SPRING },
}

export const slideUp = {
  hidden: { opacity: 0, y: 50, filter: 'blur(4px)' },
  show:   { opacity: 1, y: 0,  filter: 'blur(0px)', transition: SPRING_SOFT },
}

export const fadeIn = {
  hidden: { opacity: 0 },
  show:   { opacity: 1, transition: { duration: 0.5 } },
}

export const stagger = (delay = 0.08) => ({
  hidden: {},
  show:   { transition: { staggerChildren: delay, delayChildren: 0.05 } },
})

export const VIEWPORT = { once: true, margin: '-70px' }
export const VIEWPORT_SM = { once: true, margin: '-30px' }
