import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { BaseCard } from '@/components/cards';
import { Badge } from '@/components/ui/Badge';
import { cn } from '@/lib/utils';
import { formatDate } from '@/utils/date-utils';
import { fadeInVariants } from '@/config/animations';

interface ThoughtCardProps {
  slug: string;
  title: string;
  subtitle?: string;
  excerpt: string;
  date: string;
  readingTime: string;
  tags: string[];
  coverImage?: string;
  claps: number;
}

export const ThoughtCard: React.FC<ThoughtCardProps> = ({
  slug,
  title,
  subtitle,
  excerpt,
  date,
  readingTime,
  tags,
  coverImage,
  claps,
}) => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={fadeInVariants}
    >
      <Link to={`/thoughts/${slug}`}>
        <BaseCard hoverable className="overflow-hidden h-full flex flex-col">
          {coverImage && (
            <div className="aspect-video relative overflow-hidden">
              <img
                src={coverImage}
                alt={title}
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
            </div>
          )}
          
          <div className="p-6 flex-1 flex flex-col">
            <div className="flex-1">
              <h3 className="text-2xl font-bold mb-2">{title}</h3>
              {subtitle && (
                <p className="text-lg text-foreground-secondary mb-3">
                  {subtitle}
                </p>
              )}
              <p className="text-foreground-secondary mb-4 line-clamp-3">
                {excerpt}
              </p>
            </div>

            <div className="space-y-4">
              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {tags.map((tag) => (
                  <Badge key={tag} variant="default" size="sm">
                    #{tag}
                  </Badge>
                ))}
              </div>

              {/* Meta */}
              <div className="flex items-center justify-between text-sm text-foreground-tertiary">
                <div className="flex items-center gap-4">
                  <span>{formatDate(date)}</span>
                  <span>{readingTime}</span>
                </div>
                
                {/* Clap counter */}
                <div className="flex items-center gap-1">
                  <span>👏</span>
                  <span>{claps}</span>
                </div>
              </div>
            </div>
          </div>
        </BaseCard>
      </Link>
    </motion.div>
  );
};