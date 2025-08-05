import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

export interface BadgeProps {
  children: React.ReactNode;
  variant?: 'default' | 'primary' | 'secondary';
  size?: 'sm' | 'md';
  icon?: React.ReactNode;
  onClick?: () => void;
  selected?: boolean;
  className?: string;
  animate?: boolean;
}

const badgeVariants = {
  default: 'bg-background-secondary text-foreground-secondary border-border',
  primary: 'bg-primary text-primary-foreground border-primary',
  secondary: 'bg-background text-foreground border-border',
};

const badgeSizes = {
  sm: 'text-xs px-2 py-1',
  md: 'text-sm px-3 py-1',
};

export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = 'default',
  size = 'sm',
  icon,
  onClick,
  selected = false,
  className,
  animate = false,
  ...props
}) => {
  const isInteractive = !!onClick;
  
  const badgeClasses = cn(
    'inline-flex items-center gap-1 rounded-full font-medium',
    'border transition-all duration-200',
    badgeSizes[size],
    selected && variant === 'default' 
      ? badgeVariants.primary 
      : badgeVariants[variant],
    isInteractive && [
      'cursor-pointer',
      'hover:scale-105',
      variant === 'default' && !selected && 'hover:border-foreground/50',
    ],
    className
  );

  const content = (
    <>
      {icon && <span className="flex-shrink-0">{icon}</span>}
      <span>{children}</span>
    </>
  );

  if (animate && isInteractive) {
    return (
      <motion.button
        onClick={onClick}
        className={badgeClasses}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        {...props}
      >
        {content}
      </motion.button>
    );
  }

  if (isInteractive) {
    return (
      <button onClick={onClick} className={badgeClasses} {...props}>
        {content}
      </button>
    );
  }

  return (
    <span className={badgeClasses} {...props}>
      {content}
    </span>
  );
};