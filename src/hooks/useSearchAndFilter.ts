import { useState, useMemo, useEffect, useCallback } from 'react';

export interface SearchableItem {
  title: string;
  subtitle?: string;
  excerpt?: string;
  tags: string[];
  [key: string]: any;
}

export interface CustomFilterFunction<T> {
  (item: T, query: string): boolean;
}

export interface UseSearchAndFilterOptions<T = SearchableItem> {
  /** Fields to search within (default: ['title', 'subtitle', 'excerpt', 'tags']) */
  searchFields?: (keyof T)[];
  /** Field that contains tags (default: 'tags') */
  tagField?: keyof T;
  /** Debounce delay for search input in milliseconds (default: 300) */
  debounceDelay?: number;
  /** Custom filter functions for advanced filtering */
  customFilters?: Record<string, CustomFilterFunction<T>>;
  /** Case sensitive search (default: false) */
  caseSensitive?: boolean;
  /** Tag matching mode: 'all' requires all selected tags, 'any' requires at least one */
  tagMatchMode?: 'all' | 'any';
}

export function useSearchAndFilter<T extends SearchableItem>(
  items: T[],
  options: UseSearchAndFilterOptions<T> = {}
) {
  const [searchQuery, setSearchQuery] = useState('');
  const [debouncedQuery, setDebouncedQuery] = useState('');
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [activeCustomFilters, setActiveCustomFilters] = useState<Record<string, any>>({});
  
  const {
    searchFields = ['title', 'subtitle', 'excerpt', 'tags'] as (keyof T)[],
    tagField = 'tags' as keyof T,
    debounceDelay = 300,
    customFilters = {},
    caseSensitive = false,
    tagMatchMode = 'all'
  } = options;

  // Debounce search query
  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedQuery(searchQuery);
    }, debounceDelay);

    return () => {
      clearTimeout(handler);
    };
  }, [searchQuery, debounceDelay]);

  // Extract all unique tags from items
  const allTags = useMemo(() => {
    const tagSet = new Set<string>();
    items.forEach(item => {
      const itemTags = item[tagField] as string[];
      if (Array.isArray(itemTags)) {
        itemTags.forEach(tag => tagSet.add(tag));
      }
    });
    return Array.from(tagSet).sort();
  }, [items, tagField]);

  // Filter items based on search query and selected tags
  const filteredItems = useMemo(() => {
    let filtered = items;

    // Filter by tags
    if (selectedTags.length > 0) {
      filtered = filtered.filter((item) => {
        const itemTags = item[tagField] as string[];
        if (!Array.isArray(itemTags)) return false;
        
        return tagMatchMode === 'all'
          ? selectedTags.every((tag) => itemTags.includes(tag))
          : selectedTags.some((tag) => itemTags.includes(tag));
      });
    }

    // Filter by search query (using debounced query)
    if (debouncedQuery.trim()) {
      const query = caseSensitive ? debouncedQuery : debouncedQuery.toLowerCase();
      filtered = filtered.filter((item) => {
        const searchableText = searchFields
          .map(field => {
            const value = item[field];
            if (Array.isArray(value)) {
              return value.join(' ');
            }
            return value || '';
          })
          .join(' ');
        
        const processedText = caseSensitive ? searchableText : searchableText.toLowerCase();
        return processedText.includes(query);
      });
    }

    // Apply custom filters
    Object.entries(activeCustomFilters).forEach(([filterKey, filterValue]) => {
      const customFilter = customFilters[filterKey];
      if (customFilter && filterValue !== undefined && filterValue !== null) {
        filtered = filtered.filter((item) => customFilter(item, filterValue));
      }
    });

    return filtered;
  }, [
    items, 
    selectedTags, 
    debouncedQuery, 
    searchFields, 
    tagField, 
    activeCustomFilters, 
    customFilters, 
    caseSensitive, 
    tagMatchMode
  ]);

  const handleTagToggle = useCallback((tag: string) => {
    setSelectedTags((prev) =>
      prev.includes(tag)
        ? prev.filter((t) => t !== tag)
        : [...prev, tag]
    );
  }, []);

  const clearFilters = useCallback(() => {
    setSearchQuery('');
    setSelectedTags([]);
    setActiveCustomFilters({});
  }, []);

  const setCustomFilter = useCallback((key: string, value: any) => {
    setActiveCustomFilters(prev => ({
      ...prev,
      [key]: value
    }));
  }, []);

  const removeCustomFilter = useCallback((key: string) => {
    setActiveCustomFilters(prev => {
      const { [key]: removed, ...rest } = prev;
      return rest;
    });
  }, []);

  const hasActiveFilters = searchQuery.trim() !== '' || 
                          selectedTags.length > 0 || 
                          Object.keys(activeCustomFilters).length > 0;

  return {
    // Search state
    searchQuery,
    setSearchQuery,
    debouncedQuery,
    
    // Tag state
    selectedTags,
    setSelectedTags,
    allTags,
    
    // Custom filters
    activeCustomFilters,
    setCustomFilter,
    removeCustomFilter,
    
    // Results
    filteredItems,
    
    // Actions
    handleTagToggle,
    clearFilters,
    
    // Status
    hasActiveFilters,
    isSearching: debouncedQuery !== searchQuery,
    resultCount: filteredItems.length,
    totalCount: items.length,
  };
}