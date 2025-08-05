// Standard animation variants for consistent motion across the app

export const fadeInVariants = {
  hidden: { 
    opacity: 0, 
    y: 20 
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: 'easeOut',
    },
  },
};

export const staggerContainerVariants = {
  hidden: { 
    opacity: 0 
  },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export const slideInFromRightVariants = {
  hidden: { 
    opacity: 0, 
    x: 20 
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
      ease: 'easeOut',
    },
  },
};

export const slideInFromLeftVariants = {
  hidden: { 
    opacity: 0, 
    x: -20 
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
      ease: 'easeOut',
    },
  },
};

export const scaleInVariants = {
  hidden: { 
    opacity: 0, 
    scale: 0.95 
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.4,
      ease: 'easeOut',
    },
  },
};

// Common transition configurations
export const transitions = {
  default: {
    duration: 0.5,
    ease: 'easeOut',
  },
  fast: {
    duration: 0.3,
    ease: 'easeOut',
  },
  slow: {
    duration: 0.8,
    ease: 'easeOut',
  },
  spring: {
    type: 'spring',
    stiffness: 100,
    damping: 15,
  },
} as const;