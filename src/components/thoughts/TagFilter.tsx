import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { Badge } from '@/components/ui/Badge';
import { ANIMATION } from '@/config/constants';

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
      transition={{ duration: ANIMATION.durations.fast }}
      className="flex flex-wrap items-center gap-2"
    >
      <span className="text-sm text-foreground-secondary mr-2">Filter by:</span>
      
      {tags.map((tag) => {
        const isSelected = selectedTags.includes(tag);
        
        return (
          <Badge
            key={tag}
            variant={isSelected ? 'primary' : 'default'}
            size="md"
            onClick={() => onTagToggle(tag)}
            selected={isSelected}
            animate
            className="hover:border-foreground/50"
          >
            #{tag}
          </Badge>
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