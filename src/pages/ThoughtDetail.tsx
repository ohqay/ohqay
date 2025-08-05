import React, { useCallback } from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { PageWrapper, Container, Toast, IconButton } from '@/components/common';
import { ClapButton } from '@/components/thoughts';
import { CaseStudyContent } from '@/components/case-study';
import { getThoughtBySlug, ThoughtData } from '@/lib/content-loader';
import { useAsyncData } from '@/hooks/useAsyncData';
import { useClipboard } from '@/hooks/useClipboard';
import { formatArticleDate } from '@/utils/date-utils';
import { getTwitterShareUrl, getLinkedInShareUrl, getCurrentUrl } from '@/utils/social-sharing';
import { motion } from 'framer-motion';
import { remark } from 'remark';
import html from 'remark-html';
import { Twitter, Linkedin, Link, Check } from 'lucide-react';

export const ThoughtDetail: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  
  const loadThoughtData = useCallback(async () => {
    if (!slug) throw new Error('No slug provided');
    
    const loadedThought = getThoughtBySlug(slug);
    if (!loadedThought) throw new Error('Thought not found');
    
    // Process markdown to HTML
    const processedContent = await remark()
      .use(html)
      .process(loadedThought.content);
    
    return {
      thought: loadedThought,
      htmlContent: processedContent.toString(),
    };
  }, [slug]);
  
  const { data, loading, error } = useAsyncData(loadThoughtData, {
    dependencies: [slug],
  });
  
  const { copied, copyToClipboard } = useClipboard({
    successDuration: 2000,
  });
  
  const thought = data?.thought;
  const htmlContent = data?.htmlContent;

  const handleClap = (newCount: number) => {
    // In a real app, this would update the database
    console.log('Clapped!', newCount);
  };
  
  const handleCopyLink = () => {
    copyToClipboard(getCurrentUrl());
  };
  
  const getShareUrls = () => {
    const currentUrl = getCurrentUrl();
    const title = thought?.title || '';
    
    return {
      twitter: getTwitterShareUrl({ url: currentUrl, title }),
      linkedin: getLinkedInShareUrl({ url: currentUrl, title }),
    };
  };

  if (loading) {
    return (
      <PageWrapper>
        <Container>
          <div className="min-h-screen flex items-center justify-center">
            <div className="text-foreground-secondary">Loading...</div>
          </div>
        </Container>
      </PageWrapper>
    );
  }

  if (error || !thought) {
    return <Navigate to="/thoughts" replace />;
  }

  return (
    <PageWrapper>
      {/* Hero Section */}
      {thought.coverImage && (
        <div className="relative h-[40vh] md:h-[50vh] overflow-hidden">
          <motion.img
            src={thought.coverImage}
            alt={thought.title}
            className="w-full h-full object-cover"
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
        </div>
      )}

      <Container size="md">
        <motion.div
          className={thought.coverImage ? 'relative -mt-32 z-10' : 'pt-12'}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {/* Header */}
          <div className="mb-12">
            <h1 className="text-5xl md:text-6xl font-bold mb-4 leading-tight">
              {thought.title}
            </h1>
            
            {thought.subtitle && (
              <p className="text-xl md:text-2xl text-foreground-secondary mb-6">
                {thought.subtitle}
              </p>
            )}

            {/* Meta Info */}
            <div className="flex flex-wrap items-center gap-6 text-sm text-foreground-tertiary mb-8">
              <span>{formatArticleDate(thought.date)}</span>
              <span>{thought.readingTime}</span>
              <div className="flex flex-wrap gap-2">
                {thought.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs px-2 py-1 rounded-full bg-background-secondary text-foreground-secondary"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Content */}
          {htmlContent && (
            <CaseStudyContent htmlContent={htmlContent} />
          )}

          {/* Engagement Section */}
          <motion.div
            className="my-16 py-8 border-t border-b border-border"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <div className="flex flex-col md:flex-row items-center justify-between gap-8">
              {/* Clap Section */}
              <div className="flex items-center gap-4">
                <p className="text-foreground-secondary">
                  Did you find this helpful?
                </p>
                <ClapButton
                  thoughtId={slug || ''}
                  initialCount={thought.claps}
                  size="md"
                  onBump={handleClap}
                />
              </div>

              {/* Share Section */}
              <div className="flex items-center gap-2">
                <span className="text-sm text-foreground-tertiary mr-2">Share:</span>
                <a
                  href={getShareUrls().twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <IconButton
                    icon={<Twitter />}
                    ariaLabel="Share on Twitter"
                    asChild
                  />
                </a>
                <a
                  href={getShareUrls().linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <IconButton
                    icon={<Linkedin />}
                    ariaLabel="Share on LinkedIn"
                    asChild
                  />
                </a>
                <IconButton
                  icon={copied ? <Check className="text-green-500" /> : <Link />}
                  onClick={handleCopyLink}
                  ariaLabel="Copy link"
                />
              </div>
            </div>
          </motion.div>
        </motion.div>
      </Container>
      
      <Toast message="Link copied to clipboard!" isVisible={copied} />
    </PageWrapper>
  );
};