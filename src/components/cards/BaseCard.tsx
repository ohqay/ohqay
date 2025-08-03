import React from 'react';
import { cn } from '@/lib/utils';
import { motion, MotionProps } from 'framer-motion';

interface BaseCardProps extends MotionProps {
  children: React.ReactNode;
  className?: string;
  hoverable?: boolean;
  onClick?: () => void;
}

export const BaseCard: React.FC<BaseCardProps> = ({
  children,
  className = '',
  hoverable = false,
  onClick,
  ...motionProps
}) => {
  return (
    <motion.div
      className={cn(
        'rounded-lg bg-card border border-border overflow-hidden',
        hoverable && 'cursor-pointer transition-all duration-300',
        className
      )}
      whileHover={
        hoverable
          ? {
              y: -4,
              boxShadow: '0 10px 30px -10px rgba(250, 248, 245, 0.1)',
            }
          : undefined
      }
      onClick={onClick}
      {...motionProps}
    >
      {children}
    </motion.div>
  );
};