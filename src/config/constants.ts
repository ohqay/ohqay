// Animation configuration
export const ANIMATION = {
  durations: {
    fastest: 0.2,
    fast: 0.3,
    normal: 0.5,
    slow: 0.8,
  },
  delays: {
    none: 0,
    short: 0.05,
    medium: 0.1,
    long: 0.2,
    longer: 0.4,
    longest: 0.6,
  },
  scales: {
    contracted: 0.9,
    reduced: 0.95,
    normal: 1,
    expanded: 1.05,
    large: 1.1,
    largest: 1.15,
    xl: 1.2,
  },
  zIndexes: {
    dropdown: 10,
    overlay: 20,
    modal: 50,
  },
} as const;

// Spacing configuration for consistent layout
export const SPACING = {
  sections: {
    py: {
      small: 'py-8',
      medium: 'py-12',
      large: 'py-16',
      xl: 'py-24',
    },
  },
  margins: {
    mb: {
      xs: 'mb-2',
      sm: 'mb-4',
      md: 'mb-6',
      lg: 'mb-8',
      xl: 'mb-12',
      '2xl': 'mb-16',
      '3xl': 'mb-24',
    },
  },
} as const;

// Timeout values for UI feedback
export const TIMEOUTS = {
  TOAST: 2000,
  COPY_FEEDBACK: 2000,
  NAVIGATION_HIDE: 2500,
} as const;

// Layout and spacing constants
export const GRID_GAPS = {
  sm: 16,
  md: 24,
  lg: 32,
  xl: 48,
} as const;

export const GRID_COLUMNS = {
  default: 5,
  lg: 4,
  md: 3,
  sm: 2,
  xs: 1,
} as const;

// Breakpoints (matching Tailwind defaults)
export const BREAKPOINTS = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  '2xl': 1536,
} as const;

// Common sizes
export const SIZES = {
  xs: 4,
  sm: 6,
  md: 8,
  lg: 10,
  xl: 12,
} as const;

// Z-index values (legacy - use ANIMATION.zIndexes for new code)
export const Z_INDEX = {
  dropdown: 1000,
  sticky: 1020,
  fixed: 1030,
  modal: 1040,
  popover: 1050,
  tooltip: 1060,
} as const;

// ServiceCard configuration
export const SERVICE_CARD = {
  layout: {
    width: 288, // w-72 = 18rem = 288px
    height: 320, // h-80 = 20rem = 320px
    marginLeft: -144, // Half of width for centering
    marginTop: -160, // Half of height for centering
  },
  positioning: {
    cardSpacing: 180, // Distance between cards in base position
    fanningAngle: 15, // Base fanning angle for rotation
    hoverLift: -80, // How much card lifts on hover
    partingDistance: 50, // How much cards move away from hovered card
  },
  zIndex: {
    base: 10,
    nonHovered: 5,
    hovered: 20,
  },
  animation: {
    // Spring configurations for smooth animations
    position: {
      stiffness: 260,
      damping: 26,
      mass: 0.8,
    },
    movement: {
      stiffness: 300,
      damping: 30,
      mass: 0.8,
    },
    scale: {
      stiffness: 400,
      damping: 25,
      mass: 0.8,
    },
    iconAnimation: {
      scale: 1.15,
      x: 14,
      y: -5,
    },
  },
  styles: {
    borderRadius: 'rounded-2xl',
    padding: 'p-8',
    patternOpacity: 'opacity-5',
  },
} as const;