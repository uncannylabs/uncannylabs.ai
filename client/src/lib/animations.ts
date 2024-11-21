import type { Variants } from 'framer-motion'

export const fadeInUp: Variants = {
  initial: { opacity: 0, scale: 0.95 },
  animate: { opacity: 1, scale: 1 },
  exit: { opacity: 0, scale: 0.95 }
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
