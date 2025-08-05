import React from 'react';
import { PortfolioPageTemplate } from '../components/ui/PortfolioPageTemplate';
import { MasonryGrid } from '@/components/portfolio';

// Sample data - replace with actual data fetching
const designItems = [
  {
    id: '1',
    src: '/images/placeholder.svg',
    alt: 'Logo Design Project',
    title: 'Brand Identity System',
    width: 800,
    height: 600,
    isCaseStudy: true,
    caseStudyUrl: '/design/blueprinter',
  },
  {
    id: '2',
    src: '/images/placeholder.svg',
    alt: 'Web Design',
    title: 'E-commerce Website',
    width: 1200,
    height: 800,
  },
  {
    id: '3',
    src: '/images/placeholder.svg',
    alt: 'Mobile App Design',
    title: 'Mobile App UI',
    width: 600,
    height: 1200,
  },
  {
    id: '4',
    src: '/images/placeholder.svg',
    alt: 'Typography Project',
    title: 'Type Exploration',
    width: 1000,
    height: 1000,
  },
  {
    id: '5',
    src: '/images/placeholder.svg',
    alt: 'Brand Guidelines',
    title: 'Corporate Identity',
    width: 1400,
    height: 900,
  },
];

export const Design: React.FC = () => {
  return (
    <PortfolioPageTemplate
      title="Design Portfolio"
      description="Graphic design works showcasing logo design, brand identity, and creative projects. Each piece is crafted with attention to detail and strategic thinking."
      containerSize="xl"
    >
      <MasonryGrid items={designItems} />
    </PortfolioPageTemplate>
  );
};