import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface IconButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  icon: React.ReactNode;
  variant?: 'default' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  isActive?: boolean;
  ariaLabel: string;
  asChild?: boolean;
}

const sizeClasses = {
  sm: 'p-1.5',
  md: 'p-2',
  lg: 'p-3',
};

const iconSizes = {
  sm: 16,
  md: 18,
  lg: 24,
};

export const IconButton: React.FC<IconButtonProps> = ({
  icon,
  variant = 'default',
  size = 'md',
  isActive = false,
  ariaLabel,
  asChild = false,
  className,
  disabled,
  ...props
}) => {
  const baseClasses = cn(
    'relative inline-flex items-center justify-center rounded-full',
    'transition-all duration-200',
    sizeClasses[size]
  );

  const variantClasses = {
    default: cn(
      'bg-background-secondary border border-border',
      !disabled && 'hover:bg-background-tertiary hover:border-foreground/30',
      isActive && 'border-primary/50 text-foreground',
      !isActive && !disabled && 'text-foreground-secondary hover:text-foreground',
      disabled && 'cursor-default opacity-50'
    ),
    ghost: cn(
      'hover:bg-background-secondary',
      isActive && 'bg-background-secondary text-foreground',
      !isActive && 'text-foreground-secondary hover:text-foreground'
    ),
  };

  const Component = asChild ? 'div' : motion.button;
  const motionProps = !asChild && !disabled ? {
    whileHover: { scale: 1.05 },
    whileTap: { scale: 0.95 },
  } : {};

  const content = (
    <>
      {React.isValidElement(icon) && React.cloneElement(icon as React.ReactElement<any>, {
        size: iconSizes[size],
      })}
    </>
  );

  if (asChild) {
    return (
      <div
        className={cn(baseClasses, variantClasses[variant], className)}
        aria-label={ariaLabel}
      >
        {content}
      </div>
    );
  }

  return (
    <Component
      className={cn(baseClasses, variantClasses[variant], className)}
      disabled={disabled}
      aria-label={ariaLabel}
      {...motionProps}
      {...props}
    >
      {content}
    </Component>
  );
};