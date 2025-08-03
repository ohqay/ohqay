import React, { useState, useEffect, useMemo } from 'react';
import { PageWrapper, Container } from '@/components/common';
import { ThoughtCard, TagFilter, SearchBar } from '@/components/thoughts';
import { getAllThoughts, getAllTags, ThoughtData } from '@/lib/content-loader';

export const Thoughts: React.FC = () => {
  const [thoughts, setThoughts] = useState<ThoughtData[]>([]);
  const [allTags, setAllTags] = useState<string[]>([]);
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    // Load thoughts and tags
    const loadedThoughts = getAllThoughts();
    const loadedTags = getAllTags();
    
    setThoughts(loadedThoughts);
    setAllTags(loadedTags);
  }, []);

  // Filter thoughts based on tags and search
  const filteredThoughts = useMemo(() => {
    let filtered = thoughts;

    // Filter by tags
    if (selectedTags.length > 0) {
      filtered = filtered.filter((thought) =>
        selectedTags.every((tag) => thought.tags.includes(tag))
      );
    }

    // Filter by search query
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter((thought) => {
        const searchableText = `
          ${thought.title} 
          ${thought.subtitle || ''} 
          ${thought.excerpt} 
          ${thought.tags.join(' ')}
        `.toLowerCase();
        
        return searchableText.includes(query);
      });
    }

    return filtered;
  }, [thoughts, selectedTags, searchQuery]);

  const handleTagToggle = (tag: string) => {
    setSelectedTags((prev) =>
      prev.includes(tag)
        ? prev.filter((t) => t !== tag)
        : [...prev, tag]
    );
  };

  return (
    <PageWrapper>
      <Container size="xl">
        <div className="py-12">
          {/* Header */}
          <div className="mb-12">
            <h1 className="text-5xl font-bold mb-4">Thoughts</h1>
            <p className="text-lg text-foreground-secondary max-w-3xl">
              Articles and insights on design, development, creativity, and technology.
              Exploring the intersection of art and code.
            </p>
          </div>

          {/* Search and Filters */}
          <div className="space-y-6 mb-12">
            <SearchBar onSearch={setSearchQuery} />
            
            {allTags.length > 0 && (
              <TagFilter
                tags={allTags}
                selectedTags={selectedTags}
                onTagToggle={handleTagToggle}
                onClear={() => setSelectedTags([])}
              />
            )}
          </div>

          {/* Results */}
          {filteredThoughts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredThoughts.map((thought) => (
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
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <p className="text-foreground-secondary text-lg">
                {searchQuery || selectedTags.length > 0
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