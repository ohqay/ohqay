import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { BaseCard } from '@/components/cards';
import { DeviceFrame } from '@/components/ui/DeviceFrame';
import { staggerContainerVariants, fadeInVariants } from '@/config/animations';

interface DevProject {
  id: string;
  title: string;
  description: string;
  type: 'web' | 'ios' | 'macos' | 'cli';
  screenshot: string;
  technologies: string[];
  links: {
    live?: string;
    github?: string;
    appStore?: string;
  };
  isCaseStudy?: boolean;
  caseStudyUrl?: string;
}

interface ResponsiveGridProps {
  projects: DevProject[];
}

// Technology icons (simplified)
const TechIcon: React.FC<{ name: string }> = ({ name }) => {
  const iconMap: Record<string, React.ReactNode> = {
    React: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="12" cy="12" r="2" />
        <ellipse cx="12" cy="12" rx="10" ry="4" />
        <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(60 12 12)" />
        <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(120 12 12)" />
      </svg>
    ),
    TypeScript: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <rect width="24" height="24" fill="none" />
        <path d="M3 3h18v18H3V3zm9.5 8.5v9h-2v-9h-3v-2h8v2h-3z" />
      </svg>
    ),
    Swift: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c4.5 0 8.5-2.5 9.5-6.5-1.5 1.5-3.5 2.5-5.5 2.5-3 0-5.5-2.5-5.5-5.5 0-2 1-3.5 2.5-4.5-1.5 2-1 4.5 1 6 2-1.5 4-4 4-6.5 0-1-.5-2-1.5-2.5" />
      </svg>
    ),
    // Add more icons as needed
  };

  return iconMap[name] || <span className="text-xs">{name}</span>;
};


export const ResponsiveGrid: React.FC<ResponsiveGridProps> = ({ projects }) => {

  return (
    <motion.div
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
      variants={staggerContainerVariants}
      initial="hidden"
      animate="visible"
    >
      {projects.map((project) => (
        <motion.div key={project.id} variants={fadeInVariants}>
          <BaseCard
            hoverable
            className={cn(
              'overflow-hidden h-full flex flex-col',
              project.isCaseStudy && 'ring-2 ring-border/50'
            )}
          >
            {/* Screenshot with device frame */}
            <div className="p-6 bg-background-secondary/50">
              <DeviceFrame type={project.type}>
                <img
                  src={project.screenshot}
                  alt={`${project.title} screenshot`}
                  className="w-full h-auto"
                  loading="lazy"
                />
              </DeviceFrame>
            </div>

            {/* Project info */}
            <div className="p-6 flex-1 flex flex-col">
              <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
              <p className="text-foreground-secondary mb-4 flex-1">
                {project.description}
              </p>

              {/* Technologies */}
              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech) => (
                  <div
                    key={tech}
                    className="flex items-center gap-1 px-2 py-1 bg-background-secondary rounded-full text-xs"
                  >
                    <TechIcon name={tech} />
                    <span>{tech}</span>
                  </div>
                ))}
              </div>

              {/* Links */}
              <div className="flex items-center gap-4 text-sm">
                {project.links.live && (
                  <a
                    href={project.links.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-foreground-secondary hover:text-foreground transition-colors"
                  >
                    Live Demo →
                  </a>
                )}
                {project.links.github && (
                  <a
                    href={project.links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-foreground-secondary hover:text-foreground transition-colors"
                  >
                    GitHub →
                  </a>
                )}
                {project.links.appStore && (
                  <a
                    href={project.links.appStore}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-foreground-secondary hover:text-foreground transition-colors"
                  >
                    App Store →
                  </a>
                )}
                {project.isCaseStudy && (
                  <span className="text-foreground-secondary ml-auto">
                    View Case Study →
                  </span>
                )}
              </div>
            </div>

            {/* Case study indicator */}
            {project.isCaseStudy && (
              <div className="absolute top-4 right-4">
                <div className={cn(
                  'w-8 h-8 rounded-full',
                  'bg-background/80 backdrop-blur-sm',
                  'flex items-center justify-center',
                  'text-foreground-secondary'
                )}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M12 5v14M5 12h14" />
                  </svg>
                </div>
              </div>
            )}
          </BaseCard>
        </motion.div>
      ))}
    </motion.div>
  );
};