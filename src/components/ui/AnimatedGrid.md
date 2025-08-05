# AnimatedGrid Component System

This document outlines the advanced reusable grid and animation components that consolidate patterns from across the codebase.

## Overview

The AnimatedGrid system provides a flexible, reusable solution for creating animated grids with search and filter capabilities. It consolidates the following existing patterns:

### Consolidated from:
- **MixedGrid.tsx**: Video grid with grouped layouts and staggered animations
- **ResponsiveGrid.tsx**: Project grid with device frames and responsive columns
- **MasonryGrid.tsx**: Dynamic column distribution with responsive breakpoints
- **Thoughts.tsx**: Search and filter functionality
- **thoughts.ts**: Search logic and filtering utilities

## Components

### 1. AnimatedGrid

A flexible grid component with configurable animations and responsive layout.

#### Key Features:
- **Responsive Columns**: Configure different column counts for different screen sizes
- **Animation Presets**: Built-in animation patterns (fadeScale, slideUp, spring, etc.)
- **Layout Types**: Support for grid, masonry, and flex layouts
- **Render Props**: Flexible item rendering with TypeScript generics
- **Staggered Animations**: Configurable delay between item animations

#### Usage:
```tsx
import { AnimatedGrid, gridAnimationPresets } from '@/components/ui';

<AnimatedGrid
  items={projects}
  columns={{ base: 3, md: 2, lg: 4 }}
  gap={6}
  staggerDelay={0.1}
  renderItem={(project, index) => (
    <ProjectCard key={project.id} project={project} />
  )}
  {...gridAnimationPresets.fadeScale}
/>
```

### 2. Enhanced useSearchAndFilter Hook

Advanced search and filtering with debouncing and custom filter functions.

#### Key Features:
- **Debounced Search**: Configurable delay to prevent excessive filtering
- **Multiple Search Fields**: Search across multiple object properties
- **Custom Filters**: Add complex filtering logic beyond text search
- **Tag Matching Modes**: 'all' or 'any' tag matching
- **Case Sensitivity**: Optional case-sensitive search

#### Usage:
```tsx
import { useSearchAndFilter } from '@/hooks/useSearchAndFilter';

const {
  filteredItems,
  searchQuery,
  setSearchQuery,
  selectedTags,
  handleTagToggle,
  setCustomFilter,
  clearFilters,
  hasActiveFilters,
} = useSearchAndFilter(items, {
  searchFields: ['title', 'description', 'tags'],
  debounceDelay: 300,
  customFilters: {
    featured: (item) => item.featured === true,
    type: (item, filterValue) => item.type === filterValue,
  },
});
```

### 3. Enhanced useResponsiveColumns Hook

Dynamic column calculation with breakpoint utilities.

#### Key Features:
- **Extended Breakpoints**: xs, sm, md, lg, xl, default
- **Breakpoint Utilities**: Check current breakpoint and direction
- **Performance Optimized**: Throttled resize listener
- **SSR Safe**: Handles server-side rendering

#### Usage:
```tsx
import { useResponsiveColumns } from '@/hooks/useResponsiveColumns';

const { 
  columns, 
  breakpoint, 
  isBreakpoint,
  windowWidth 
} = useResponsiveColumns({
  default: 4,
  xl: 3,
  lg: 2,
  md: 2,
  sm: 1,
});

// Conditional logic based on breakpoint
const showSidebar = isBreakpoint('lg', 'up');
```

## Pattern Consolidation

### Before: Multiple Grid Implementations

#### MixedGrid Pattern:
```tsx
// Grouped by aspect ratio, individual animation setup
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
  {groupedVideos['16:9'].map((video) => (
    <motion.div
      key={video.id}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <VideoCard video={video} />
    </motion.div>
  ))}
</div>
```

#### ResponsiveGrid Pattern:
```tsx
// Container and item variants, manual staggering
<motion.div
  className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
  variants={containerVariants}
  initial="hidden"
  animate="visible"
>
  {projects.map((project) => (
    <motion.div key={project.id} variants={itemVariants}>
      <ProjectCard project={project} />
    </motion.div>
  ))}
</motion.div>
```

#### MasonryGrid Pattern:
```tsx
// Manual column distribution, manual responsive logic
useEffect(() => {
  const updateColumns = () => {
    const width = window.innerWidth;
    if (width < 640) setColumnCount(columns.sm);
    // ... more conditions
  };
  updateColumns();
  window.addEventListener('resize', updateColumns);
}, [columns]);
```

### After: Unified AnimatedGrid

```tsx
// Single component handles all patterns
<AnimatedGrid
  items={items}
  columns={{ base: 3, md: 2, lg: 4 }}
  layout="grid" // or "masonry" or "flex"
  renderItem={(item, index) => <ItemCard key={item.id} item={item} />}
  {...gridAnimationPresets.fadeScale}
/>
```

### Search and Filter Consolidation

#### Before: Duplicate Logic in Thoughts.tsx
```tsx
// Manual filtering logic repeated
const filteredThoughts = useMemo(() => {
  let filtered = thoughts;
  
  if (selectedTags.length > 0) {
    filtered = filtered.filter((thought) =>
      selectedTags.every((tag) => thought.tags.includes(tag))
    );
  }
  
  if (searchQuery) {
    const query = searchQuery.toLowerCase();
    filtered = filtered.filter((thought) => {
      const searchableText = `${thought.title} ${thought.excerpt}`.toLowerCase();
      return searchableText.includes(query);
    });
  }
  
  return filtered;
}, [thoughts, selectedTags, searchQuery]);
```

#### After: Reusable Hook
```tsx
// Single hook with advanced features
const { filteredItems } = useSearchAndFilter(thoughts, {
  searchFields: ['title', 'subtitle', 'excerpt', 'tags'],
  debounceDelay: 300,
  tagMatchMode: 'all',
});
```

## Animation Presets

Pre-configured animation patterns for common use cases:

- **fadeScale**: Gentle fade with slight scale effect
- **slideUp**: Items slide up from bottom
- **slideLeft**: Items slide in from left
- **rotateFade**: Subtle rotation with fade
- **spring**: Bouncy spring animation

## Migration Guide

### From MixedGrid:
```tsx
// Old
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
  {videos.map((video) => (
    <motion.div key={video.id} /* animation props */>
      <VideoCard video={video} />
    </motion.div>
  ))}
</div>

// New
<AnimatedGrid
  items={videos}
  columns={{ base: 2, md: 1 }}
  renderItem={(video) => <VideoCard video={video} />}
  {...gridAnimationPresets.slideUp}
/>
```

### From ResponsiveGrid:
```tsx
// Old
<motion.div
  className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
  variants={containerVariants}
>
  {/* items */}
</motion.div>

// New
<AnimatedGrid
  items={projects}
  columns={{ base: 3, md: 2, lg: 3 }}
  gap={8}
  renderItem={(project) => <ProjectCard project={project} />}
/>
```

### From MasonryGrid:
```tsx
// Old: Complex column distribution logic
const distributeItems = () => {
  const columnHeights = new Array(columnCount).fill(0);
  // ... complex distribution logic
};

// New: Built-in masonry support
<AnimatedGrid
  items={items}
  columns={{ base: 4, md: 3, lg: 5 }}
  layout="masonry"
  renderItem={(item) => <ItemCard item={item} />}
/>
```

## Performance Benefits

1. **Reduced Bundle Size**: Single implementation instead of multiple similar components
2. **Better Performance**: Optimized animations and responsive handling
3. **Consistent UX**: Unified animation timing and behavior
4. **Developer Experience**: TypeScript generics and comprehensive documentation
5. **Maintainability**: Single source of truth for grid patterns

## TypeScript Support

Full TypeScript generics support for type-safe item rendering:

```tsx
interface Project {
  id: string;
  title: string;
  tags: string[];
}

<AnimatedGrid<Project>
  items={projects}
  renderItem={(project: Project, index: number) => (
    <div>{project.title}</div>
  )}
/>
```