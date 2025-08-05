/**
 * Example usage of AnimatedGrid component with search and filter hooks
 * This file demonstrates the consolidated patterns from MixedGrid, ResponsiveGrid, 
 * MasonryGrid, and Thoughts components
 */

import React from 'react';
import { AnimatedGrid, gridAnimationPresets } from './AnimatedGrid';
import { useSearchAndFilter } from '@/hooks/useSearchAndFilter';
import { useResponsiveColumns } from '@/hooks/useResponsiveColumns';
import { BaseCard } from '@/components/cards';
import { SearchBar, TagFilter } from '@/components/thoughts';
import { cn } from '@/lib/utils';

// Example data interfaces
interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  type: 'web' | 'mobile' | 'desktop';
  image: string;
  featured?: boolean;
}

interface ExampleAnimatedGridProps {
  projects: Project[];
}

export const ExampleAnimatedGrid: React.FC<ExampleAnimatedGridProps> = ({ projects }) => {
  // Use the enhanced search and filter hook
  const {
    filteredItems,
    searchQuery,
    setSearchQuery,
    selectedTags,
    handleTagToggle,
    allTags,
    clearFilters,
    hasActiveFilters,
    setCustomFilter,
    resultCount,
    totalCount,
  } = useSearchAndFilter(projects, {
    searchFields: ['title', 'description', 'tags'],
    tagField: 'tags',
    debounceDelay: 300,
    customFilters: {
      featured: (item: Project) => item.featured === true,
      type: (item: Project, filterValue: string) => item.type === filterValue,
    },
  });

  // Use responsive columns hook for dynamic layout
  const { columns, breakpoint, isBreakpoint } = useResponsiveColumns({
    default: 4,
    xl: 3,
    lg: 2,
    md: 2,
    sm: 1,
  });

  // Custom render function for project cards
  const renderProject = (project: Project, index: number) => (
    <BaseCard
      key={project.id}
      hoverable
      className={cn(
        'overflow-hidden h-full flex flex-col',
        project.featured && 'ring-2 ring-primary/20'
      )}
    >
      <div className="aspect-video bg-background-secondary">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover"
          loading="lazy"
        />
      </div>
      
      <div className="p-6 flex-1 flex flex-col">
        <div className="flex items-start justify-between mb-2">
          <h3 className="text-xl font-semibold">{project.title}</h3>
          {project.featured && (
            <div className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full">
              Featured
            </div>
          )}
        </div>
        
        <p className="text-foreground-secondary mb-4 flex-1">
          {project.description}
        </p>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="text-xs bg-background-secondary px-2 py-1 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
        
        <div className="text-xs text-foreground-tertiary">
          {project.type}
        </div>
      </div>
    </BaseCard>
  );

  return (
    <div className="space-y-8">
      {/* Search and Filter Controls */}
      <div className="space-y-4">
        <div className="flex flex-col md:flex-row gap-4 items-start md:items-center justify-between">
          <div className="flex-1 max-w-md">
            <SearchBar onSearch={setSearchQuery} />
          </div>
          
          <div className="flex items-center gap-4">
            <button
              onClick={() => setCustomFilter('featured', true)}
              className="text-sm px-3 py-1 rounded-full border border-border hover:bg-background-secondary transition-colors"
            >
              Featured Only
            </button>
            
            <select
              onChange={(e) => setCustomFilter('type', e.target.value || null)}
              className="text-sm px-3 py-1 rounded border border-border bg-background"
            >
              <option value="">All Types</option>
              <option value="web">Web</option>
              <option value="mobile">Mobile</option>
              <option value="desktop">Desktop</option>
            </select>
          </div>
        </div>

        {allTags.length > 0 && (
          <TagFilter
            tags={allTags}
            selectedTags={selectedTags}
            onTagToggle={handleTagToggle}
            onClear={clearFilters}
          />
        )}

        {/* Results Summary */}
        <div className="flex items-center justify-between text-sm text-foreground-secondary">
          <span>
            Showing {resultCount} of {totalCount} projects
          </span>
          
          {hasActiveFilters && (
            <button
              onClick={clearFilters}
              className="text-primary hover:text-primary/80 transition-colors"
            >
              Clear all filters
            </button>
          )}
        </div>
      </div>

      {/* Animated Grid */}
      {filteredItems.length > 0 ? (
        <AnimatedGrid
          items={filteredItems}
          columns={{ default: columns, md: Math.max(1, columns - 1), lg: columns }}
          gap={6}
          staggerDelay={0.08}
          renderItem={renderProject}
          className="min-h-[200px]"
          {...gridAnimationPresets.fadeScale}
        />
      ) : (
        <div className="text-center py-16">
          <p className="text-foreground-secondary text-lg">
            {hasActiveFilters
              ? 'No projects found matching your criteria.'
              : 'No projects available.'}
          </p>
          {hasActiveFilters && (
            <button
              onClick={clearFilters}
              className="mt-4 text-primary hover:text-primary/80 transition-colors"
            >
              Clear filters to see all projects
            </button>
          )}
        </div>
      )}

      {/* Responsive Debug Info (remove in production) */}
      {process.env.NODE_ENV === 'development' && (
        <div className="fixed bottom-4 right-4 bg-background border border-border rounded-lg p-3 text-xs space-y-1 shadow-lg">
          <div>Breakpoint: {breakpoint}</div>
          <div>Columns: {columns}</div>
          <div>Is Mobile: {isBreakpoint('md', 'down') ? 'Yes' : 'No'}</div>
        </div>
      )}
    </div>
  );
};

// Alternative usage examples

/**
 * Example 1: Simple grid with minimal configuration
 */
export const SimpleGrid: React.FC<{ items: any[] }> = ({ items }) => (
  <AnimatedGrid
    items={items}
    columns={{ default: 3, md: 2, lg: 4 }}
    renderItem={(item) => (
      <div className="p-4 bg-background-secondary rounded-lg">
        {item.title}
      </div>
    )}
  />
);

/**
 * Example 2: Masonry layout with custom animation
 */
export const MasonryExample: React.FC<{ items: any[] }> = ({ items }) => (
  <AnimatedGrid
    items={items}
    columns={{ default: 4, md: 3, lg: 5 }}
    layout="masonry"
    itemVariants={{
      hidden: { opacity: 0, y: 50, scale: 0.9 },
      visible: { opacity: 1, y: 0, scale: 1 },
    }}
    staggerDelay={0.1}
    renderItem={(item) => (
      <div className="bg-background-secondary rounded-lg overflow-hidden">
        <div 
          className="h-full p-4"
          style={{ height: Math.random() * 200 + 150 }} // Random height for masonry
        >
          {item.title}
        </div>
      </div>
    )}
  />
);

/**
 * Example 3: Advanced filtering with custom filters
 */
export const AdvancedFilterExample: React.FC<{ projects: Project[] }> = ({ projects }) => {
  const filterLogic = useSearchAndFilter(projects, {
    customFilters: {
      // Filter by project complexity
      complexity: (project: Project, level: 'simple' | 'complex') => {
        const tagCount = project.tags.length;
        return level === 'complex' ? tagCount > 3 : tagCount <= 3;
      },
      // Filter by recency (assuming we have a date field)
      recent: (project: Project) => {
        // Custom logic for recent projects
        return project.featured || project.tags.includes('new');
      },
    },
  });

  return (
    <div>
      {/* Custom filter controls */}
      <div className="mb-4 space-x-2">
        <button onClick={() => filterLogic.setCustomFilter('complexity', 'simple')}>
          Simple Projects
        </button>
        <button onClick={() => filterLogic.setCustomFilter('complexity', 'complex')}>
          Complex Projects
        </button>
        <button onClick={() => filterLogic.setCustomFilter('recent', true)}>
          Recent Only
        </button>
      </div>

      <AnimatedGrid
        items={filterLogic.filteredItems}
        columns={{ default: 3 }}
        renderItem={(project) => (
          <BaseCard>
            <div className="p-4">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
            </div>
          </BaseCard>
        )}
        {...gridAnimationPresets.spring}
      />
    </div>
  );
};