import { Variants } from "framer-motion"

/**
 * Spring Configuration Presets
 * Based on Apple's Human Interface Guidelines for natural motion
 */
export const springPresets = {
  gentle: {
    type: "spring" as const,
    stiffness: 100,
    damping: 15,
    mass: 0.5,
  },
  responsive: {
    type: "spring" as const,
    stiffness: 200,
    damping: 20,
    mass: 0.8,
  },
  snappy: {
    type: "spring" as const,
    stiffness: 300,
    damping: 25,
    mass: 1,
  },
  bouncy: {
    type: "spring" as const,
    stiffness: 400,
    damping: 15,
    mass: 1.2,
  },
}

/**
 * Fade In Animations with Spring Physics
 */
export const fadeInUp: Variants = {
  initial: { opacity: 0, y: 60 },
  animate: { 
    opacity: 1, 
    y: 0,
    transition: springPresets.gentle
  },
}

export const fadeInLeft: Variants = {
  initial: { opacity: 0, x: -60 },
  animate: { 
    opacity: 1, 
    x: 0,
    transition: springPresets.gentle
  },
}

export const fadeInRight: Variants = {
  initial: { opacity: 0, x: 60 },
  animate: { 
    opacity: 1, 
    x: 0,
    transition: springPresets.gentle
  },
}

export const fadeInDown: Variants = {
  initial: { opacity: 0, y: -60 },
  animate: { 
    opacity: 1, 
    y: 0,
    transition: springPresets.gentle
  },
}

/**
 * Scale Animations with Spring
 */
export const scaleIn: Variants = {
  initial: { opacity: 0, scale: 0.8 },
  animate: { 
    opacity: 1, 
    scale: 1,
    transition: springPresets.responsive
  },
}

export const scaleInBounce: Variants = {
  initial: { opacity: 0, scale: 0.5 },
  animate: { 
    opacity: 1, 
    scale: 1,
    transition: springPresets.bouncy
  },
}

/**
 * Liquid Glass Morphing Animation
 * Smooth transitions for glass elements
 */
export const liquidGlassMorph: Variants = {
  initial: { 
    opacity: 0,
    scale: 0.95,
    backdropFilter: "blur(0px)",
  },
  animate: {
    opacity: 1,
    scale: 1,
    backdropFilter: "blur(16px)",
    transition: {
      ...springPresets.gentle,
      backdropFilter: { duration: 0.4 }
    }
  },
  hover: {
    scale: 1.02,
    backdropFilter: "blur(24px)",
    transition: springPresets.responsive
  },
  tap: {
    scale: 0.98,
    transition: springPresets.snappy
  }
}

/**
 * Interactive Glass Hover Effects
 */
export const glassHover: Variants = {
  initial: { scale: 1 },
  whileHover: {
    scale: 1.02,
    transition: springPresets.responsive
  },
  whileTap: {
    scale: 0.98,
    transition: springPresets.snappy
  }
}

export const glassHoverIntense: Variants = {
  initial: { scale: 1 },
  whileHover: {
    scale: 1.05,
    y: -5,
    transition: springPresets.bouncy
  },
  whileTap: {
    scale: 0.95,
    transition: springPresets.snappy
  }
}

/**
 * Stagger Container Animations
 */
export const staggerContainer: Variants = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
}

export const staggerContainerFast: Variants = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.05,
      delayChildren: 0.1
    }
  }
}

/**
 * Floating Animation with Natural Motion
 */
export const floatingAnimation: Variants = {
  animate: {
    y: [-10, 10, -10],
    transition: {
      duration: 6,
      repeat: Infinity,
      ease: "easeInOut"
    }
  }
}

export const floatingAnimationSlow: Variants = {
  animate: {
    y: [-15, 15, -15],
    transition: {
      duration: 8,
      repeat: Infinity,
      ease: "easeInOut"
    }
  }
}

/**
 * Rotation Animations
 */
export const rotateIn: Variants = {
  initial: { opacity: 0, rotate: -180 },
  animate: { 
    opacity: 1, 
    rotate: 0,
    transition: springPresets.bouncy
  }
}

/**
 * Slide Animations with Spring
 */
export const slideInFromBottom: Variants = {
  initial: { y: 100, opacity: 0 },
  animate: { 
    y: 0, 
    opacity: 1,
    transition: springPresets.responsive
  }
}

export const slideInFromTop: Variants = {
  initial: { y: -100, opacity: 0 },
  animate: { 
    y: 0, 
    opacity: 1,
    transition: springPresets.responsive
  }
}

/**
 * Blur Fade Animation
 * Perfect for glass elements appearing
 */
export const blurFadeIn: Variants = {
  initial: { 
    opacity: 0, 
    filter: "blur(10px)",
    scale: 0.95
  },
  animate: { 
    opacity: 1, 
    filter: "blur(0px)",
    scale: 1,
    transition: {
      ...springPresets.gentle,
      filter: { duration: 0.5 }
    }
  }
}

/**
 * Shimmer Effect Animation
 */
export const shimmerAnimation = {
  initial: { x: "-100%" },
  animate: { 
    x: "100%",
    transition: {
      duration: 2,
      repeat: Infinity,
      repeatDelay: 3,
      ease: "easeInOut"
    }
  }
}

/**
 * Glow Pulse Animation
 */
export const glowPulse: Variants = {
  animate: {
    opacity: [0.5, 1, 0.5],
    scale: [1, 1.05, 1],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut"
    }
  }
}

/**
 * Magnetic Hover Effect
 * Elements follow cursor on hover
 */
export const magneticHover = () => ({
  whileHover: {
    scale: 1.05,
    transition: springPresets.responsive
  }
})

/**
 * Ripple Effect Configuration
 */
export const rippleEffect: Variants = {
  initial: { scale: 0, opacity: 0.5 },
  animate: { 
    scale: 2, 
    opacity: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  }
}

/**
 * Page Transition Variants
 */
export const pageTransition: Variants = {
  initial: { opacity: 0, y: 20 },
  animate: { 
    opacity: 1, 
    y: 0,
    transition: springPresets.gentle
  },
  exit: { 
    opacity: 0, 
    y: -20,
    transition: { duration: 0.2 }
  }
}

/**
 * Scroll-triggered Animation
 * Use with whileInView prop on motion components
 */
export const scrollReveal: Variants = {
  initial: { 
    opacity: 0, 
    y: 50,
    scale: 0.95
  },
  whileInView: { 
    opacity: 1, 
    y: 0,
    scale: 1,
    transition: springPresets.gentle
  }
}

/**
 * Viewport configuration for scroll animations
 */
export const scrollViewport = { 
  once: true, 
  margin: "-100px" 
}

/**
 * Card Flip Animation
 */
export const cardFlip: Variants = {
  initial: { rotateY: 0 },
  hover: { 
    rotateY: 180,
    transition: springPresets.responsive
  }
}

/**
 * Elastic Scale Animation
 */
export const elasticScale: Variants = {
  initial: { scale: 0 },
  animate: { 
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 500,
      damping: 10,
      mass: 1.5
    }
  }
}
