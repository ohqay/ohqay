import React from 'react';
import { motion } from 'framer-motion';
import { Container } from '@/components/common';
import { cn } from '@/lib/utils';

interface CaseStudyHeaderProps {
  title: string;
  summary: string;
  coverImage: string;
  date: string;
  service: string;
  duration?: string;
  team?: string;
}

export const CaseStudyHeader: React.FC<CaseStudyHeaderProps> = ({
  title,
  summary,
  coverImage,
  date,
  service,
  duration,
  team,
}) => {
  return (
    <div className="relative">
      {/* Hero Image */}
      <div className="relative h-[60vh] md:h-[70vh] overflow-hidden">
        <motion.img
          src={coverImage}
          alt={title}
          className="w-full h-full object-cover"
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
      </div>

      {/* Content */}
      <Container>
        <motion.div
          className="relative -mt-32 z-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="mb-6">
            <span className="text-sm text-foreground-secondary uppercase tracking-wider">
              {service}
            </span>
          </div>
          
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            {title}
          </h1>
          
          <p className="text-xl md:text-2xl text-foreground-secondary max-w-3xl mb-8">
            {summary}
          </p>

          {/* Meta Info */}
          <div className="flex flex-wrap gap-6 text-sm text-foreground-secondary">
            <div>
              <span className="text-foreground-tertiary">Date</span>
              <p>{new Date(date).toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}</p>
            </div>
            {duration && (
              <div>
                <span className="text-foreground-tertiary">Duration</span>
                <p>{duration}</p>
              </div>
            )}
            {team && (
              <div>
                <span className="text-foreground-tertiary">Team</span>
                <p>{team}</p>
              </div>
            )}
          </div>
        </motion.div>
      </Container>
    </div>
  );
};