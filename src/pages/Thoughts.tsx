import React, { useEffect, useState } from 'react';
import { PageWrapper, Container } from '@/components/common';
import { ThoughtCard, TagFilter, SearchBar } from '@/components/thoughts';
import { PageHeader, AnimatedGrid } from '@/components/ui';
import { getAllThoughts, ThoughtData } from '@/lib/content-loader';
import { useSearchAndFilter } from '@/hooks/useSearchAndFilter';
import { staggerContainerVariants } from '@/config/animations';

export const Thoughts: React.FC = () => {
  const [thoughts, setThoughts] = useState<ThoughtData[]>([]);

  useEffect(() => {
    // Load thoughts
    const loadedThoughts = getAllThoughts();
    setThoughts(loadedThoughts);
  }, []);

  const {
    searchQuery,
    setSearchQuery,
    selectedTags,
    allTags,
    filteredItems: filteredThoughts,
    handleTagToggle,
    clearFilters,
    hasActiveFilters,
  } = useSearchAndFilter(thoughts);

  return (
    <PageWrapper>
      <Container size="xl">
        <div className="py-12">
          <PageHeader
            title="Thoughts"
            description="Articles and insights on design, development, creativity, and technology. Exploring the intersection of art and code."
          />

          {/* Search and Filters */}
          <div className="space-y-6 mb-12">
            <SearchBar onSearch={setSearchQuery} />
            
            {allTags.length > 0 && (
              <TagFilter
                tags={allTags}
                selectedTags={selectedTags}
                onTagToggle={handleTagToggle}
                onClear={clearFilters}
              />
            )}
          </div>

          {/* Results */}
          {filteredThoughts.length > 0 ? (
            <AnimatedGrid
              items={filteredThoughts}
              columns={{ default: 1, md: 2, lg: 3 }}
              gap={6}
              staggerDelay={0.1}
              containerVariants={staggerContainerVariants}
              itemVariants={{
                hidden: { opacity: 0, y: 20 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.5, ease: 'easeOut' },
                },
              }}
              renderItem={(thought) => (
                <ThoughtCard
                  key={thought.slug}
                  slug={thought.slug}
                  title={thought.title}
                  subtitle={thought.subtitle}
                  excerpt={thought.excerpt}
                  date={thought.date}
                  readingTime={thought.readingTime}
                  tags={thought.tags}
                  coverImage={thought.coverImage}
                  claps={thought.claps}
                />
              )}
            />
          ) : (
            <div className="text-center py-16">
              <p className="text-foreground-secondary text-lg">
                {hasActiveFilters
                  ? 'No thoughts found matching your criteria.'
                  : 'No thoughts published yet.'}
              </p>
            </div>
          )}
        </div>
      </Container>
    </PageWrapper>
  );
};