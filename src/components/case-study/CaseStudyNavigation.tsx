import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { Container } from '@/components/common';
import { BaseCard } from '@/components/cards';

interface RelatedProject {
  slug: string;
  title: string;
  service: string;
  coverImage: string;
}

interface CaseStudyNavigationProps {
  currentService: string;
  relatedProjects: RelatedProject[];
}

export const CaseStudyNavigation: React.FC<CaseStudyNavigationProps> = ({
  currentService,
  relatedProjects,
}) => {
  return (
    <div className="py-16 border-t border-border">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="mb-8">
            <h2 className="text-3xl font-bold mb-2">Related Projects</h2>
            <p className="text-foreground-secondary">
              Explore more {currentService} work
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {relatedProjects.slice(0, 3).map((project, index) => (
              <motion.div
                key={project.slug}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Link to={`/${project.service}/${project.slug}`}>
                  <BaseCard hoverable className="overflow-hidden h-full">
                    <div className="aspect-video relative">
                      <img
                        src={project.coverImage}
                        alt={project.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-semibold mb-2">
                        {project.title}
                      </h3>
                      <span className="text-sm text-foreground-secondary">
                        View Project →
                      </span>
                    </div>
                  </BaseCard>
                </Link>
              </motion.div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              to={`/${currentService}`}
              className={cn(
                'inline-flex items-center gap-2',
                'text-foreground-secondary hover:text-foreground',
                'transition-colors duration-200'
              )}
            >
              ← Back to {currentService} portfolio
            </Link>
          </div>
        </motion.div>
      </Container>
    </div>
  );
};