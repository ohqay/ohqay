import { useState, useEffect, useCallback, useMemo } from 'react';

/**
 * Configuration for responsive column breakpoints
 */
export interface ResponsiveColumnsConfig {
  /** Default number of columns for desktop and up */
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

/**
 * Default responsive column configuration
 */
const DEFAULT_CONFIG: Required<ResponsiveColumnsConfig> = {
  default: 4,
  xl: 5,
  lg: 3,
  md: 2,
  sm: 1,
  xs: 1,
};

/**
 * Breakpoint values in pixels
 */
const BREAKPOINTS = {
  xs: 0,
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
} as const;

/**
 * Breakpoint names ordered by size
 */
const BREAKPOINT_ORDER = ['xs', 'sm', 'md', 'lg', 'xl', 'default'] as const;

/**
 * Get the current breakpoint name based on window width
 */
const getCurrentBreakpoint = (width: number): keyof typeof BREAKPOINTS | 'default' => {
  if (width >= BREAKPOINTS.xl) return 'default';
  if (width >= BREAKPOINTS.lg) return 'xl';
  if (width >= BREAKPOINTS.md) return 'lg';
  if (width >= BREAKPOINTS.sm) return 'md';
  if (width >= BREAKPOINTS.xs) return 'sm';
  return 'xs';
};

/**
 * Hook for managing responsive column counts based on viewport width
 * 
 * @param config - Column configuration for different breakpoints
 * @returns Object with current column count, breakpoint info, and utilities
 * 
 * @example
 * ```tsx
 * const { columns, breakpoint, isBreakpoint } = useResponsiveColumns({
 *   default: 5,
 *   xl: 4,
 *   lg: 3,
 *   md: 2,
 *   sm: 1
 * });
 * 
 * // Use conditional logic based on breakpoint
 * const showSidebar = isBreakpoint('lg', 'up');
 * ```
 */
export const useResponsiveColumns = (
  config: Partial<ResponsiveColumnsConfig> = {}
) => {
  const finalConfig: Required<ResponsiveColumnsConfig> = useMemo(
    () => ({ ...DEFAULT_CONFIG, ...config }),
    [config]
  );
  
  const [windowWidth, setWindowWidth] = useState(() => 
    typeof window !== 'undefined' ? window.innerWidth : 1024
  );

  const updateWidth = useCallback(() => {
    setWindowWidth(window.innerWidth);
  }, []);

  useEffect(() => {
    // Set initial value
    updateWidth();

    // Add resize listener with throttling
    let timeoutId: NodeJS.Timeout;
    const throttledResize = () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(updateWidth, 16); // ~60fps
    };

    window.addEventListener('resize', throttledResize);
    return () => {
      window.removeEventListener('resize', throttledResize);
      clearTimeout(timeoutId);
    };
  }, [updateWidth]);

  const currentBreakpoint = useMemo(() => getCurrentBreakpoint(windowWidth), [windowWidth]);

  const columnCount = useMemo(() => {
    switch (currentBreakpoint) {
      case 'xs': return finalConfig.xs;
      case 'sm': return finalConfig.sm;
      case 'md': return finalConfig.md;
      case 'lg': return finalConfig.lg;
      case 'xl': return finalConfig.xl;
      default: return finalConfig.default;
    }
  }, [currentBreakpoint, finalConfig]);

  const isBreakpoint = useCallback((
    breakpoint: keyof typeof BREAKPOINTS | 'default',
    direction: 'up' | 'down' | 'only' = 'only'
  ): boolean => {
    const breakpointIndex = BREAKPOINT_ORDER.indexOf(breakpoint as any);
    const currentIndex = BREAKPOINT_ORDER.indexOf(currentBreakpoint as any);

    switch (direction) {
      case 'up':
        return currentIndex >= breakpointIndex;
      case 'down':
        return currentIndex <= breakpointIndex;
      case 'only':
      default:
        return currentBreakpoint === breakpoint;
    }
  }, [currentBreakpoint]);

  const getColumnCountForBreakpoint = useCallback((
    breakpoint: keyof typeof BREAKPOINTS | 'default'
  ): number => {
    switch (breakpoint) {
      case 'xs': return finalConfig.xs;
      case 'sm': return finalConfig.sm;
      case 'md': return finalConfig.md;
      case 'lg': return finalConfig.lg;
      case 'xl': return finalConfig.xl;
      default: return finalConfig.default;
    }
  }, [finalConfig]);

  return {
    /** Current number of columns */
    columns: columnCount,
    /** Current breakpoint name */
    breakpoint: currentBreakpoint,
    /** Current window width */
    windowWidth,
    /** Check if current breakpoint matches condition */
    isBreakpoint,
    /** Get column count for specific breakpoint */
    getColumnCountForBreakpoint,
    /** All breakpoint configurations */
    config: finalConfig,
    /** Available breakpoints */
    breakpoints: BREAKPOINTS,
  };
};

/**
 * Hook for simple column count (backwards compatibility)
 */
export const useColumnCount = (config: Partial<ResponsiveColumnsConfig> = {}): number => {
  const { columns } = useResponsiveColumns(config);
  return columns;
};