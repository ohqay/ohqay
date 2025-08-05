import React from 'react';
import { SERVICE_CARD, ANIMATION } from '@/config/constants';

export interface ServiceCardInteractionProps {
  index: number;
  totalCards: number;
  stackOrder: number;
  hoveredIndex: number | null;
}

export interface ServiceCardInteractionResult {
  // State
  isHovered: boolean;
  isAnyHovered: boolean;
  zIndex: number;
  
  // Calculated positions
  targetX: number;
  targetY: number;
  targetRotate: number;
  targetScale: number;
  
  // Base positions (for initial animation)
  baseX: number;
  baseY: number;
  baseRotate: number;
}

/**
 * Custom hook for managing ServiceCard hover interactions and positioning logic
 * Separates complex interaction logic from the component rendering
 */
export const useServiceCardInteractions = ({
  index,
  totalCards,
  stackOrder,
  hoveredIndex,
}: ServiceCardInteractionProps): ServiceCardInteractionResult => {
  const isHovered = hoveredIndex === index;
  const isAnyHovered = hoveredIndex !== null;

  // Calculate base positions once
  const basePositions = React.useMemo(() => {
    const centerIndex = (totalCards - 1) / 2;
    const offset = index - centerIndex;
    const baseX = offset * SERVICE_CARD.positioning.cardSpacing;
    const baseY = Math.abs(offset) * SERVICE_CARD.positioning.fanningAngle;
    
    // Apply non-linear rotation for more natural fanning
    const baseRotate = Math.sign(offset) * Math.sqrt(Math.abs(offset)) * SERVICE_CARD.positioning.fanningAngle;

    return { baseX, baseY, baseRotate, offset, centerIndex };
  }, [index, totalCards]);

  // Calculate z-index using stackOrder for proper layering
  const zIndex = React.useMemo(() => {
    if (isHovered) return SERVICE_CARD.zIndex.hovered; // Hovered card is always on top
    if (isAnyHovered) return SERVICE_CARD.zIndex.nonHovered; // Non-hovered cards go to lower layer when any card is hovered
    return stackOrder; // Use configured stacking order when no cards are hovered
  }, [isHovered, isAnyHovered, stackOrder]);

  // Calculate target positions based on hover state
  const targetX = React.useMemo(() => {
    const { baseX, offset, centerIndex } = basePositions;
    
    if (!isAnyHovered) return baseX;
    if (isHovered) return baseX;

    // Parting effect - create space around the hovered card
    if (hoveredIndex !== null) {
      const hoveredOffset = hoveredIndex - centerIndex;

      if (offset < hoveredOffset) return baseX - SERVICE_CARD.positioning.partingDistance;
      if (offset > hoveredOffset) return baseX + SERVICE_CARD.positioning.partingDistance;
    }
    return baseX;
  }, [basePositions, isAnyHovered, isHovered, hoveredIndex]);

  const targetY = isHovered ? basePositions.baseY + SERVICE_CARD.positioning.hoverLift : basePositions.baseY;
  const targetRotate = isHovered ? basePositions.baseRotate * 0.3 : basePositions.baseRotate;
  const targetScale = isHovered ? ANIMATION.scales.expanded : ANIMATION.scales.normal;

  return {
    // State
    isHovered,
    isAnyHovered,
    zIndex,
    
    // Calculated positions
    targetX,
    targetY,
    targetRotate,
    targetScale,
    
    // Base positions
    baseX: basePositions.baseX,
    baseY: basePositions.baseY,
    baseRotate: basePositions.baseRotate,
  };
};