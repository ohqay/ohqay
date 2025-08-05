import React from 'react';
import { SERVICE_CARD } from '@/config/constants';

interface ServiceCardPatternProps {
  pattern?: React.ReactNode;
}

/**
 * ServiceCardPattern component handles the background pattern overlay
 * Provides consistent styling and opacity for pattern elements
 */
export const ServiceCardPattern: React.FC<ServiceCardPatternProps> = ({ pattern }) => {
  if (!pattern) return null;

  return (
    <div className={`absolute inset-0 ${SERVICE_CARD.styles.patternOpacity} pointer-events-none`}>
      {pattern}
    </div>
  );
};