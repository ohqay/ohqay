import React from 'react';
import { cn } from '@/lib/utils';

export interface PageHeaderProps {
  title: string;
  description?: string;
  actions?: React.ReactNode;
  className?: string;
  titleClassName?: string;
  descriptionClassName?: string;
  size?: 'sm' | 'md' | 'lg';
}

const headerSizes = {
  sm: {
    title: 'text-3xl',
    spacing: 'mb-8',
  },
  md: {
    title: 'text-4xl',
    spacing: 'mb-10',
  },
  lg: {
    title: 'text-5xl',
    spacing: 'mb-12',
  },
};

export const PageHeader: React.FC<PageHeaderProps> = ({
  title,
  description,
  actions,
  className,
  titleClassName,
  descriptionClassName,
  size = 'lg',
}) => {
  const sizeConfig = headerSizes[size];

  return (
    <div className={cn(sizeConfig.spacing, className)}>
      <div className="flex items-start justify-between gap-8">
        <div className="flex-1">
          <h1
            className={cn(
              sizeConfig.title,
              'font-bold mb-4',
              titleClassName
            )}
          >
            {title}
          </h1>
          {description && (
            <p
              className={cn(
                'text-lg text-foreground-secondary max-w-3xl',
                descriptionClassName
              )}
            >
              {description}
            </p>
          )}
        </div>
        {actions && (
          <div className="flex-shrink-0">
            {actions}
          </div>
        )}
      </div>
    </div>
  );
};