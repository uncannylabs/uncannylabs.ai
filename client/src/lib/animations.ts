import type { Variants } from 'framer-motion'

export const fadeInUp: Variants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 }
}

export const expandHorizontal: Variants = {
  initial: { opacity: 0, width: 0 },
  animate: { opacity: 1, width: 'auto' },
  exit: { opacity: 0, width: 0 }
}

export const transition = {
  duration: 0.2,
  ease: 'easeOut'
}
