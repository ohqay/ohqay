import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface SearchBarProps {
  onSearch: (query: string) => void;
  placeholder?: string;
}

export const SearchBar: React.FC<SearchBarProps> = ({
  onSearch,
  placeholder = 'Search thoughts...',
}) => {
  const [query, setQuery] = useState('');
  const [isFocused, setIsFocused] = useState(false);

  // Debounce search
  useEffect(() => {
    const timer = setTimeout(() => {
      onSearch(query);
    }, 300);

    return () => clearTimeout(timer);
  }, [query, onSearch]);

  // Keyboard shortcut
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        const input = document.getElementById('search-input');
        input?.focus();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="relative w-full max-w-2xl"
    >
      <div className="relative">
        <input
          id="search-input"
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          placeholder={placeholder}
          className={cn(
            'w-full px-4 py-3 pl-12 pr-20',
            'bg-background-secondary border border-border rounded-lg',
            'text-foreground placeholder-foreground-tertiary',
            'transition-all duration-200',
            'focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent',
            isFocused && 'border-foreground/50'
          )}
        />
        
        {/* Search icon */}
        <div className="absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none">
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-foreground-tertiary"
          >
            <circle cx="11" cy="11" r="8" />
            <path d="m21 21-4.35-4.35" />
          </svg>
        </div>

        {/* Keyboard shortcut */}
        <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none">
          <kbd className={cn(
            'px-2 py-1 text-xs',
            'bg-background border border-border rounded',
            'text-foreground-tertiary'
          )}>
            {navigator.platform.includes('Mac') ? '⌘' : 'Ctrl'}+K
          </kbd>
        </div>
      </div>

      {/* Results count */}
      {query && (
        <motion.div
          initial={{ opacity: 0, y: -5 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute top-full left-0 mt-2 text-sm text-foreground-tertiary"
        >
          Searching for "{query}"
        </motion.div>
      )}
    </motion.div>
  );
};