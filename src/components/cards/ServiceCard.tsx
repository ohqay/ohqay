import React from 'react';
import { useServiceCardInteractions } from '@/hooks/useServiceCardInteractions';
import { ServiceCardLayout } from './ServiceCardLayout';
import { ServiceCardContent } from './ServiceCardContent';
import { ServiceCardPattern } from './ServiceCardPattern';

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
    const interactions = useServiceCardInteractions({
        index,
        totalCards,
        stackOrder,
        hoveredIndex,
    });

    return (
        <ServiceCardLayout
            href={href}
            index={index}
            isHovered={interactions.isHovered}
            zIndex={interactions.zIndex}
            baseX={interactions.baseX}
            baseY={interactions.baseY}
            baseRotate={interactions.baseRotate}
            targetX={interactions.targetX}
            targetY={interactions.targetY}
            targetRotate={interactions.targetRotate}
            targetScale={interactions.targetScale}
            onHoverStart={onHoverStart}
            onHoverEnd={onHoverEnd}
        >
            <ServiceCardPattern pattern={pattern} />
            
            <ServiceCardContent
                title={title}
                description={description}
                icon={icon}
                ctaText={ctaText}
                isHovered={interactions.isHovered}
            />
        </ServiceCardLayout>
    );
};
