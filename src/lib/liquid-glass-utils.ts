/**
 * Liquid Glass Utilities
 * Based on Apple's design guidelines for materials and vibrancy
 */

export type MaterialThickness = 'thin' | 'regular' | 'thick' | 'ultra-thick'
export type VibrancyLevel = 'low' | 'medium' | 'high' | 'ultra'
export type DepthLevel = 1 | 2 | 3 | 4 | 5

/**
 * Calculate optimal blur value based on material thickness
 * Apple recommends progressive blur values for depth perception
 */
export const getBlurValue = (thickness: MaterialThickness): string => {
  const blurMap: Record<MaterialThickness, string> = {
    'thin': 'blur(8px)',
    'regular': 'blur(16px)',
    'thick': 'blur(24px)',
    'ultra-thick': 'blur(40px)',
  }
  return blurMap[thickness]
}

/**
 * Get Tailwind blur class based on material thickness
 */
export const getBlurClass = (thickness: MaterialThickness): string => {
  const blurClassMap: Record<MaterialThickness, string> = {
    'thin': 'backdrop-blur-sm',
    'regular': 'backdrop-blur-md',
    'thick': 'backdrop-blur-xl',
    'ultra-thick': 'backdrop-blur-3xl',
  }
  return blurClassMap[thickness]
}

/**
 * Calculate background opacity based on vibrancy level
 * Higher vibrancy = more transparency to show content behind
 */
export const getVibrancyOpacity = (level: VibrancyLevel): number => {
  const opacityMap: Record<VibrancyLevel, number> = {
    'low': 0.15,
    'medium': 0.10,
    'high': 0.05,
    'ultra': 0.02,
  }
  return opacityMap[level]
}

/**
 * Get shadow intensity based on depth level
 * Creates visual hierarchy through elevation
 */
export const getDepthShadow = (depth: DepthLevel): string => {
  const shadowMap: Record<DepthLevel, string> = {
    1: 'shadow-sm shadow-black/5',
    2: 'shadow-md shadow-black/10',
    3: 'shadow-lg shadow-black/15',
    4: 'shadow-xl shadow-black/20',
    5: 'shadow-2xl shadow-black/25',
  }
  return shadowMap[depth]
}

/**
 * Generate adaptive tint color based on theme
 * Apple's liquid glass adapts to content behind it
 */
export const getAdaptiveTint = (
  baseColor: string = 'white',
  intensity: number = 0.1
): string => {
  return `${baseColor}/${Math.round(intensity * 100)}`
}

/**
 * Calculate border opacity for glass edges
 * Subtle borders enhance the glass effect
 */
export const getBorderOpacity = (thickness: MaterialThickness): number => {
  const borderMap: Record<MaterialThickness, number> = {
    'thin': 0.1,
    'regular': 0.15,
    'thick': 0.2,
    'ultra-thick': 0.25,
  }
  return borderMap[thickness]
}

/**
 * Spring animation configuration for natural motion
 * Based on Apple's Human Interface Guidelines
 */
export const springConfig = {
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
 * Easing curves for smooth transitions
 * Apple's preferred easing functions
 */
export const easingCurves = {
  easeInOut: [0.4, 0.0, 0.2, 1],
  easeOut: [0.0, 0.0, 0.2, 1],
  easeIn: [0.4, 0.0, 1, 1],
  sharp: [0.4, 0.0, 0.6, 1],
}

/**
 * Generate gradient overlay for depth enhancement
 */
export const getDepthGradient = (depth: DepthLevel): string => {
  const gradients: Record<DepthLevel, string> = {
    1: 'linear-gradient(135deg, rgba(255,255,255,0.05), rgba(255,255,255,0.02))',
    2: 'linear-gradient(135deg, rgba(255,255,255,0.08), rgba(255,255,255,0.03))',
    3: 'linear-gradient(135deg, rgba(255,255,255,0.12), rgba(255,255,255,0.05))',
    4: 'linear-gradient(135deg, rgba(255,255,255,0.15), rgba(255,255,255,0.08))',
    5: 'linear-gradient(135deg, rgba(255,255,255,0.20), rgba(255,255,255,0.10))',
  }
  return gradients[depth]
}

/**
 * Calculate scale transform for hover states
 */
export const getHoverScale = (intensity: 'subtle' | 'medium' | 'prominent'): number => {
  const scaleMap = {
    'subtle': 1.01,
    'medium': 1.02,
    'prominent': 1.05,
  }
  return scaleMap[intensity]
}

/**
 * Get transition duration based on animation type
 */
export const getTransitionDuration = (type: 'fast' | 'normal' | 'slow'): number => {
  const durationMap = {
    'fast': 0.15,
    'normal': 0.3,
    'slow': 0.5,
  }
  return durationMap[type]
}
