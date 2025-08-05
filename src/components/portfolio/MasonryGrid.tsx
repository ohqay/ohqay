import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { BaseCard } from '@/components/cards';
import { CaseStudyIndicator } from '@/components/ui/CaseStudyIndicator';
import { fadeInVariants } from '@/config/animations';
import { GRID_GAPS, GRID_COLUMNS, BREAKPOINTS } from '@/config/constants';

interface MasonryItem {
  id: string;
  src: string;
  alt: string;
  title: string;
  width: number;
  height: number;
  isCaseStudy?: boolean;
  caseStudyUrl?: string;
}

interface MasonryGridProps {
  items: MasonryItem[];
  columns?: {
    default: number;
    lg: number;
    md: number;
    sm: number;
  };
  gap?: number;
}

export const MasonryGrid: React.FC<MasonryGridProps> = ({
  items,
  columns = GRID_COLUMNS,
  gap = GRID_GAPS.md,
}) => {
  const [columnCount, setColumnCount] = useState(columns.default);
  const containerRef = useRef<HTMLDivElement>(null);

  // Update column count based on viewport
  useEffect(() => {
    const updateColumns = () => {
      const width = window.innerWidth;
      if (width < BREAKPOINTS.sm) {
        setColumnCount(columns.sm);
      } else if (width < BREAKPOINTS.md) {
        setColumnCount(columns.md);
      } else if (width < BREAKPOINTS.lg) {
        setColumnCount(columns.lg);
      } else {
        setColumnCount(columns.default);
      }
    };

    updateColumns();
    window.addEventListener('resize', updateColumns);
    return () => window.removeEventListener('resize', updateColumns);
  }, [columns]);

  // Distribute items into columns
  const distributeItems = () => {
    const columnHeights = new Array(columnCount).fill(0);
    const columnItems: MasonryItem[][] = Array.from({ length: columnCount }, () => []);

    items.forEach((item) => {
      // Find the shortest column
      const shortestColumnIndex = columnHeights.indexOf(Math.min(...columnHeights));
      
      // Add item to shortest column
      columnItems[shortestColumnIndex].push(item);
      
      // Update column height (using aspect ratio)
      const aspectRatio = item.height / item.width;
      columnHeights[shortestColumnIndex] += aspectRatio;
    });

    return columnItems;
  };

  const columnItems = distributeItems();


  return (
    <div
      ref={containerRef}
      className="flex gap-6"
      style={{ gap: `${gap}px` }}
    >
      {columnItems.map((column, columnIndex) => (
        <div
          key={columnIndex}
          className="flex-1 flex flex-col gap-6"
          style={{ gap: `${gap}px` }}
        >
          {column.map((item, itemIndex) => (
            <motion.div
              key={item.id}
              initial="hidden"
              animate="visible"
              variants={fadeInVariants}
              transition={{ delay: (columnIndex + itemIndex) * 0.05 }}
            >
              <BaseCard
                hoverable
                className={cn(
                  'overflow-hidden group relative',
                  item.isCaseStudy && 'ring-2 ring-border/50'
                )}
              >
                <div className="relative">
                  <img
                    src={item.src}
                    alt={item.alt}
                    className="w-full h-auto object-cover"
                    loading="lazy"
                  />
                  
                  {/* Hover overlay */}
                  <div className={cn(
                    'absolute inset-0 bg-background/90',
                    'opacity-0 group-hover:opacity-100',
                    'transition-opacity duration-300',
                    'flex items-center justify-center p-6'
                  )}>
                    <div className="text-center">
                      <h3 className="text-xl font-semibold mb-2">
                        {item.title}
                      </h3>
                      {item.isCaseStudy && (
                        <span className="text-sm text-foreground-secondary">
                          View Case Study →
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Case study indicator */}
                  {item.isCaseStudy && (
                    <div className="absolute top-4 right-4">
                      <CaseStudyIndicator />
                    </div>
                  )}
                </div>
              </BaseCard>
            </motion.div>
          ))}
        </div>
      ))}
    </div>
  );
};