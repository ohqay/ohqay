import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, useMotionValue, useTransform } from 'framer-motion';
import { cn } from '@/lib/utils';

interface ServiceCardProps {
  title: string;
  description: string;
  href: string;
  icon?: React.ReactNode;
  pattern?: React.ReactNode;
  index: number;
  totalCards: number;
  ctaText: string;
  stackOrder: number;
  hoveredIndex: number | null;
  onHoverStart: () => void;
  onHoverEnd: () => void;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({
  title,
  description,
  href,
  icon,
  pattern,
  index,
  totalCards,
  ctaText,
  stackOrder,
  hoveredIndex,
  onHoverStart,
  onHoverEnd,
}) => {
  const navigate = useNavigate();
  const isHovered = hoveredIndex === index;
  const isAnyHovered = hoveredIndex !== null;
  
  // Calculate base positions once
  const centerIndex = (totalCards - 1) / 2;
  const offset = index - centerIndex;
  const baseX = offset * 140;
  const baseY = Math.abs(offset) * 15;
  // Apply non-linear rotation for more natural fanning
  const baseRotate = Math.sign(offset) * Math.sqrt(Math.abs(offset)) * 15;
  
  // Calculate z-index using stackOrder for proper layering
  const zIndex = React.useMemo(() => {
    if (isHovered) return 20; // Hovered card is always on top
    if (isAnyHovered) return 5; // Non-hovered cards go to lower layer when any card is hovered
    return stackOrder; // Use configured stacking order when no cards are hovered
  }, [isHovered, isAnyHovered, stackOrder]);

  // Calculate target positions based on hover state
  const targetX = React.useMemo(() => {
    if (!isAnyHovered) return baseX;
    if (isHovered) return baseX;
    
    // Parting effect - create space around the hovered card
    if (hoveredIndex !== null) {
      const hoveredOffset = hoveredIndex - centerIndex;
      const partingDistance = 40; // Slightly increased for better visual effect
      
      if (offset < hoveredOffset) return baseX - partingDistance;
      if (offset > hoveredOffset) return baseX + partingDistance;
    }
    return baseX;
  }, [baseX, isAnyHovered, isHovered, hoveredIndex, offset, centerIndex]);

  const targetY = isHovered ? baseY - 80 : baseY;
  const targetRotate = isHovered ? baseRotate * 0.3 : baseRotate;
  const targetScale = isHovered ? 1.05 : 1;

  return (
    <motion.div
      className="absolute w-72 h-80 cursor-pointer"
      style={{
        left: '50%',
        top: '50%',
        marginLeft: '-144px',
        marginTop: '-160px',
        zIndex,
      }}
      initial={{
        x: baseX,
        y: baseY,
        rotate: baseRotate,
        scale: 0.9,
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
        x: { type: "spring", stiffness: 260, damping: 26, mass: 0.8 },
        y: { type: "spring", stiffness: 300, damping: 30, mass: 0.8 },
        rotate: { type: "spring", stiffness: 300, damping: 30, mass: 0.8 },
        scale: { type: "spring", stiffness: 400, damping: 25, mass: 0.8 },
        opacity: { duration: 0.5, delay: index * 0.1 },
        zIndex: { duration: 0 }, // Immediate z-index changes for better layering
      }}
      onClick={() => navigate(href)}
      onHoverStart={onHoverStart}
      onHoverEnd={onHoverEnd}
      whileTap={{ scale: 0.98 }}
    >
      <div
        className={cn(
          'relative w-full h-full rounded-2xl overflow-hidden',
          'bg-gradient-to-br from-background-secondary to-background-tertiary',
          'border border-border',
          'shadow-2xl',
          'p-8 flex flex-col justify-between',
          'will-change-transform'
        )}
      >
        {/* Pattern overlay */}
        <div className="absolute inset-0 opacity-5 pointer-events-none">
          {pattern}
        </div>

        {/* Content */}
        <div className="relative z-10">
          {icon && (
            <motion.div 
              className="mb-4 text-foreground-secondary"
              animate={{ 
                scale: isHovered ? 1.15 : 1,
                x: isHovered ? 14 : 0,
                y: isHovered ? -5 : 0 
              }}
              transition={{ type: "spring", stiffness: 400, damping: 25 }}
            >
              {icon}
            </motion.div>
          )}
          <h3 className="text-2xl font-bold mb-2 text-foreground">
            {title}
          </h3>
          <p className="text-foreground-secondary text-base leading-relaxed">
            {description}
          </p>
        </div>

        {/* CTA */}
        <div className="relative z-10">
          <motion.span 
            className="text-sm font-medium text-foreground-tertiary"
            animate={{ 
              opacity: isHovered ? 1 : 0.7,
            }}
            transition={{ duration: 0.2 }}
          >
            {ctaText}
          </motion.span>
        </div>

        {/* Hover gradient */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-t from-primary/10 to-transparent pointer-events-none"
          initial={{ opacity: 0 }}
          animate={{ opacity: isHovered ? 1 : 0 }}
          transition={{ duration: 0.3 }}
        />
      </div>
    </motion.div>
  );
};