import React from 'react';
import { motion } from 'framer-motion';
import { SERVICE_CARD } from '@/config/constants';

interface ServiceCardContentProps {
  title: string;
  description: string;
  icon?: React.ReactNode;
  ctaText: string;
  isHovered: boolean;
}

/**
 * ServiceCardContent component handles the main content display within a ServiceCard
 * Includes the icon, title, description, and CTA with hover animations
 */
export const ServiceCardContent: React.FC<ServiceCardContentProps> = ({
  title,
  description,
  icon,
  ctaText,
  isHovered,
}) => {
  return (
    <>
      {/* Main Content */}
      <div className="relative z-10">
        {icon && (
          <motion.div
            className="mb-4 text-foreground-secondary"
            animate={{
              scale: isHovered ? SERVICE_CARD.animation.iconAnimation.scale : 1,
              x: isHovered ? SERVICE_CARD.animation.iconAnimation.x : 0,
              y: isHovered ? SERVICE_CARD.animation.iconAnimation.y : 0,
            }}
            transition={{ 
              type: 'spring', 
              stiffness: SERVICE_CARD.animation.scale.stiffness, 
              damping: SERVICE_CARD.animation.scale.damping 
            }}
          >
            {icon}
          </motion.div>
        )}
        <h3 className="text-2xl font-bold mb-2 text-foreground">{title}</h3>
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
    </>
  );
};