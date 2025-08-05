import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { SERVICE_CARD, ANIMATION } from '@/config/constants';
import { useNavigate } from 'react-router-dom';

interface ServiceCardLayoutProps {
  children: React.ReactNode;
  href: string;
  index: number;
  isHovered: boolean;
  zIndex: number;
  baseX: number;
  baseY: number;
  baseRotate: number;
  targetX: number;
  targetY: number;
  targetRotate: number;
  targetScale: number;
  onHoverStart: () => void;
  onHoverEnd: () => void;
}

/**
 * ServiceCardLayout component handles the positioning, layout, and interaction logic
 * Manages the card's position within the deck and handles navigation
 */
export const ServiceCardLayout: React.FC<ServiceCardLayoutProps> = ({
  children,
  href,
  index,
  isHovered,
  zIndex,
  baseX,
  baseY,
  baseRotate,
  targetX,
  targetY,
  targetRotate,
  targetScale,
  onHoverStart,
  onHoverEnd,
}) => {
  const navigate = useNavigate();

  return (
    <motion.div
      className="absolute cursor-pointer"
      style={{
        width: SERVICE_CARD.layout.width,
        height: SERVICE_CARD.layout.height,
        left: '50%',
        top: '50%',
        marginLeft: SERVICE_CARD.layout.marginLeft,
        marginTop: SERVICE_CARD.layout.marginTop,
        zIndex,
      }}
      initial={{
        x: baseX,
        y: baseY,
        rotate: baseRotate,
        scale: ANIMATION.scales.contracted,
        opacity: 0,
      }}
      animate={{
        x: targetX,
        y: targetY,
        rotate: targetRotate,
        scale: targetScale,
        opacity: 1,
      }}
      transition={{
        x: { 
          type: 'spring', 
          stiffness: SERVICE_CARD.animation.position.stiffness, 
          damping: SERVICE_CARD.animation.position.damping, 
          mass: SERVICE_CARD.animation.position.mass 
        },
        y: { 
          type: 'spring', 
          stiffness: SERVICE_CARD.animation.movement.stiffness, 
          damping: SERVICE_CARD.animation.movement.damping, 
          mass: SERVICE_CARD.animation.movement.mass 
        },
        rotate: { 
          type: 'spring', 
          stiffness: SERVICE_CARD.animation.movement.stiffness, 
          damping: SERVICE_CARD.animation.movement.damping, 
          mass: SERVICE_CARD.animation.movement.mass 
        },
        scale: { 
          type: 'spring', 
          stiffness: SERVICE_CARD.animation.scale.stiffness, 
          damping: SERVICE_CARD.animation.scale.damping, 
          mass: SERVICE_CARD.animation.scale.mass 
        },
        opacity: { duration: ANIMATION.durations.normal, delay: index * ANIMATION.delays.medium },
        zIndex: { duration: 0 }, // Immediate z-index changes for better layering
      }}
      onClick={() => navigate(href)}
      onHoverStart={onHoverStart}
      onHoverEnd={onHoverEnd}
      whileTap={{ scale: ANIMATION.scales.reduced }}
    >
      <div
        className={cn(
          'relative w-full h-full overflow-hidden',
          'bg-gradient-to-br from-background-secondary to-background-tertiary',
          'border border-border',
          'shadow-2xl',
          'flex flex-col justify-between',
          'will-change-transform',
          SERVICE_CARD.styles.borderRadius,
          SERVICE_CARD.styles.padding
        )}
      >
        {children}

        {/* Hover gradient overlay */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-t from-primary/10 to-transparent pointer-events-none"
          initial={{ opacity: 0 }}
          animate={{ opacity: isHovered ? 1 : 0 }}
          transition={{ duration: ANIMATION.durations.fast }}
        />
      </div>
    </motion.div>
  );
};