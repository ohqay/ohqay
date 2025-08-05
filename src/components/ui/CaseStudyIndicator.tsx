import React from 'react';
import { cn } from '@/lib/utils';

export interface CaseStudyIndicatorProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

const indicatorSizes = {
  sm: {
    container: 'w-6 h-6',
    icon: 'w-3 h-3',
  },
  md: {
    container: 'w-8 h-8',
    icon: 'w-4 h-4',
  },
  lg: {
    container: 'w-10 h-10',
    icon: 'w-5 h-5',
  },
};

export const CaseStudyIndicator: React.FC<CaseStudyIndicatorProps> = ({
  className,
  size = 'md',
}) => {
  const sizeConfig = indicatorSizes[size];

  return (
    <div
      className={cn(
        'rounded-full',
        'bg-background/80 backdrop-blur-sm',
        'flex items-center justify-center',
        'text-foreground-secondary',
        'border border-border/50',
        sizeConfig.container,
        className
      )}
      aria-label="Case study available"
    >
      <svg
        className={sizeConfig.icon}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M12 5v14M5 12h14" />
      </svg>
    </div>
  );
};