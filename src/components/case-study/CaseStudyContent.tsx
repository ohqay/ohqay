import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface CaseStudyContentProps {
  htmlContent: string;
  className?: string;
}

export const CaseStudyContent: React.FC<CaseStudyContentProps> = ({ 
  htmlContent, 
  className = '' 
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.3 }}
      className={cn(
        'prose prose-invert prose-lg max-w-none',
        'prose-headings:font-semibold prose-headings:tracking-tight',
        'prose-h1:text-4xl prose-h1:mb-8',
        'prose-h2:text-3xl prose-h2:mb-6 prose-h2:mt-12',
        'prose-h3:text-2xl prose-h3:mb-4 prose-h3:mt-8',
        'prose-p:text-foreground-secondary prose-p:leading-relaxed prose-p:mb-6',
        'prose-a:text-foreground prose-a:underline prose-a:decoration-foreground/30',
        'prose-a:hover:decoration-foreground prose-a:transition-colors',
        'prose-strong:text-foreground prose-strong:font-semibold',
        'prose-ul:list-disc prose-ul:pl-6 prose-ul:mb-6',
        'prose-ol:list-decimal prose-ol:pl-6 prose-ol:mb-6',
        'prose-li:text-foreground-secondary prose-li:mb-2',
        'prose-blockquote:border-l-4 prose-blockquote:border-border',
        'prose-blockquote:pl-6 prose-blockquote:italic',
        'prose-blockquote:text-foreground-secondary',
        'prose-img:rounded-lg prose-img:my-8',
        'prose-code:text-foreground prose-code:bg-background-secondary',
        'prose-code:px-2 prose-code:py-1 prose-code:rounded prose-code:text-sm',
        'prose-pre:bg-background-secondary prose-pre:border prose-pre:border-border',
        'prose-pre:rounded-lg prose-pre:p-4 prose-pre:overflow-x-auto',
        className
      )}
      dangerouslySetInnerHTML={{ __html: htmlContent }}
    />
  );
};