import React from 'react';
import { motion, Variants } from 'framer-motion';
import { cn } from '@/lib/utils';

export interface ResponsiveColumns {
  /** Default columns for desktop and up */
  default: number;
  /** Extra large screens (1280px+) */
  xl?: number;
  /** Large screens (1024px+) */
  lg?: number;
  /** Medium screens (768px+) */
  md?: number;
  /** Small screens (640px+) */
  sm?: number;
  /** Extra small screens (below 640px) */
  xs?: number;
}

export interface AnimatedGridProps<T> {
  /** Array of items to render */
  items: T[];
  /** Responsive column configuration */
  columns: ResponsiveColumns;
  /** Gap between grid items */
  gap?: number;
  /** Stagger delay between items (in seconds) */
  staggerDelay?: number;
  /** Custom animation variants */
  itemVariants?: Variants;
  /** Custom animation variants for container */
  containerVariants?: Variants;
  /** Render prop for flexible item rendering */
  renderItem: (item: T, index: number) => React.ReactNode;
  /** Additional CSS classes for the grid container */
  className?: string;
  /** Grid layout type */
  layout?: 'grid' | 'masonry' | 'flex';
  /** Animation configuration */
  animation?: {
    /** Initial state */
    initial?: string | object;
    /** Animate to state */
    animate?: string | object;
    /** Exit state */
    exit?: string | object;
    /** Animation duration */
    duration?: number;
    /** Animation easing */
    ease?: [number, number, number, number] | 'linear' | 'easeIn' | 'easeOut' | 'easeInOut' | 'circIn' | 'circOut' | 'circInOut' | 'backIn' | 'backOut' | 'backInOut' | 'anticipate';
  };
}

/**
 * Default animation variants for grid items
 */
const defaultItemVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 20,
    scale: 0.95,
  },
  visible: (index: number) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: 'easeOut',
      delay: index * 0.05, // Staggered animation
    },
  }),
};

/**
 * Default animation variants for grid container
 */
const defaultContainerVariants: Variants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
      delayChildren: 0.1,
    },
  },
};

/**
 * Generate responsive grid classes based on column configuration
 */
const generateGridClasses = (columns: ResponsiveColumns): string => {
  const classes = [`grid-cols-${columns.default}`];
  
  if (columns.xs) {
    classes.push(`xs:grid-cols-${columns.xs}`);
  }
  if (columns.sm) {
    classes.push(`sm:grid-cols-${columns.sm}`);
  }
  if (columns.md) {
    classes.push(`md:grid-cols-${columns.md}`);
  }
  if (columns.lg) {
    classes.push(`lg:grid-cols-${columns.lg}`);
  }
  if (columns.xl) {
    classes.push(`xl:grid-cols-${columns.xl}`);
  }
  
  return classes.join(' ');
};

/**
 * Advanced animated grid component with configurable columns, animations, and render patterns
 * 
 * @example
 * ```tsx
 * <AnimatedGrid
 *   items={projects}
 *   columns={{ default: 3, md: 2, lg: 4 }}
 *   gap={6}
 *   staggerDelay={0.1}
 *   renderItem={(project, index) => (
 *     <ProjectCard key={project.id} project={project} />
 *   )}
 * />
 * ```
 */
export function AnimatedGrid<T>({
  items,
  columns,
  gap = 6,
  staggerDelay = 0.05,
  itemVariants = defaultItemVariants,
  containerVariants = defaultContainerVariants,
  renderItem,
  className,
  layout = 'grid',
  animation = {},
}: AnimatedGridProps<T>) {
  const {
    initial = 'hidden',
    animate = 'visible',
    duration = 0.5,
    ease = 'easeOut',
  } = animation;

  // Generate layout-specific classes
  const layoutClasses = {
    grid: cn(
      'grid',
      generateGridClasses(columns),
      `gap-${gap}`
    ),
    masonry: cn(
      'columns-1',
      `sm:columns-${columns.sm || 1}`,
      `md:columns-${columns.md || columns.default}`,
      `lg:columns-${columns.lg || columns.default}`,
      `xl:columns-${columns.xl || columns.default}`,
      `gap-${gap}`
    ),
    flex: cn(
      'flex flex-wrap',
      `gap-${gap}`
    ),
  };

  // Custom container variants with stagger delay
  const finalContainerVariants: Variants = {
    ...containerVariants,
    visible: {
      ...containerVariants.visible,
      transition: {
        staggerChildren: staggerDelay,
        delayChildren: 0.1,
        ...(containerVariants.visible as any)?.transition,
      },
    },
  };

  // Custom item variants with animation config
  const finalItemVariants: Variants = {
    ...itemVariants,
    visible: (index: number) => {
      const baseVisible = typeof itemVariants.visible === 'function' 
        ? itemVariants.visible(index)
        : itemVariants.visible;
      
      return {
        ...baseVisible,
        transition: {
          duration,
          ease,
          delay: index * staggerDelay,
          ...baseVisible?.transition,
        },
      };
    },
  };

  return (
    <motion.div
      className={cn(layoutClasses[layout], className)}
      variants={finalContainerVariants}
      initial={initial}
      animate={animate}
      role="grid"
      aria-label="Animated grid content"
    >
      {items.map((item, index) => (
        <motion.div
          key={index}
          custom={index}
          variants={finalItemVariants}
          className={cn(
            'w-full',
            layout === 'masonry' && 'break-inside-avoid mb-6',
            layout === 'flex' && 'flex-shrink-0'
          )}
          role="gridcell"
        >
          {renderItem(item, index)}
        </motion.div>
      ))}
    </motion.div>
  );
}

/**
 * Predefined animation presets for common use cases
 */
export const gridAnimationPresets = {
  /** Fade in with slight scale */
  fadeScale: {
    itemVariants: {
      hidden: { opacity: 0, scale: 0.9 },
      visible: { opacity: 1, scale: 1 },
    },
    staggerDelay: 0.08,
  },
  
  /** Slide up from bottom */
  slideUp: {
    itemVariants: {
      hidden: { opacity: 0, y: 30 },
      visible: { opacity: 1, y: 0 },
    },
    staggerDelay: 0.06,
  },
  
  /** Slide in from left */
  slideLeft: {
    itemVariants: {
      hidden: { opacity: 0, x: -30 },
      visible: { opacity: 1, x: 0 },
    },
    staggerDelay: 0.04,
  },
  
  /** Rotate and fade */
  rotateFade: {
    itemVariants: {
      hidden: { opacity: 0, rotate: -5, scale: 0.95 },
      visible: { opacity: 1, rotate: 0, scale: 1 },
    },
    staggerDelay: 0.1,
  },
  
  /** Spring entrance */
  spring: {
    itemVariants: {
      hidden: { opacity: 0, scale: 0.8 },
      visible: { 
        opacity: 1, 
        scale: 1,
        transition: {
          type: 'spring',
          damping: 15,
          stiffness: 100,
        },
      },
    },
    staggerDelay: 0.05,
  },
} as const;

/**
 * Hook for managing grid animation state
 */
export function useGridAnimation(preset?: keyof typeof gridAnimationPresets) {
  const [isVisible, setIsVisible] = React.useState(false);
  
  React.useEffect(() => {
    setIsVisible(true);
  }, []);
  
  const animationConfig = preset ? gridAnimationPresets[preset] : {};
  
  return {
    isVisible,
    setIsVisible,
    ...animationConfig,
  };
}