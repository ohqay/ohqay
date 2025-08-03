import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface TagFilterProps {
  tags: string[];
  selectedTags: string[];
  onTagToggle: (tag: string) => void;
  onClear: () => void;
}

export const TagFilter: React.FC<TagFilterProps> = ({
  tags,
  selectedTags,
  onTagToggle,
  onClear,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="flex flex-wrap items-center gap-2"
    >
      <span className="text-sm text-foreground-secondary mr-2">Filter by:</span>
      
      {tags.map((tag) => {
        const isSelected = selectedTags.includes(tag);
        
        return (
          <motion.button
            key={tag}
            onClick={() => onTagToggle(tag)}
            className={cn(
              'px-3 py-1 rounded-full text-sm font-medium',
              'transition-all duration-200',
              'border',
              isSelected
                ? 'bg-primary text-primary-foreground border-primary'
                : 'bg-background-secondary text-foreground-secondary border-border hover:border-foreground/50'
            )}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            #{tag}
          </motion.button>
        );
      })}
      
      {selectedTags.length > 0 && (
        <motion.button
          onClick={onClear}
          className="ml-2 text-sm text-foreground-tertiary hover:text-foreground transition-colors"
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
        >
          Clear all
        </motion.button>
      )}
    </motion.div>
  );
};