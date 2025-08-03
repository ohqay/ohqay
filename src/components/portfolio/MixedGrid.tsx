import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { BaseCard } from '@/components/cards';

interface VideoItem {
  id: string;
  title: string;
  thumbnail: string;
  youtubeId: string;
  aspectRatio: '16:9' | '9:16' | '1:1';
  isCaseStudy?: boolean;
  caseStudyUrl?: string;
}

interface MixedGridProps {
  items: VideoItem[];
  heroVideoId?: string; // YouTube ID for hero reel
}

export const MixedGrid: React.FC<MixedGridProps> = ({ items, heroVideoId }) => {
  const [playingId, setPlayingId] = useState<string | null>(null);

  // Group videos by aspect ratio for better layout
  const groupedVideos = items.reduce((acc, video) => {
    if (!acc[video.aspectRatio]) {
      acc[video.aspectRatio] = [];
    }
    acc[video.aspectRatio].push(video);
    return acc;
  }, {} as Record<string, VideoItem[]>);

  const handlePlayVideo = (videoId: string) => {
    setPlayingId(videoId);
  };

  const VideoCard: React.FC<{ video: VideoItem }> = ({ video }) => {
    const isPlaying = playingId === video.id;
    
    const aspectClasses = {
      '16:9': 'aspect-video',
      '9:16': 'aspect-[9/16]',
      '1:1': 'aspect-square',
    };

    return (
      <BaseCard
        hoverable
        className={cn(
          'overflow-hidden group relative',
          video.isCaseStudy && 'ring-2 ring-border/50'
        )}
      >
        <div className={cn('relative', aspectClasses[video.aspectRatio])}>
          {!isPlaying ? (
            <>
              <img
                src={video.thumbnail}
                alt={video.title}
                className="w-full h-full object-cover"
                loading="lazy"
              />
              
              {/* Play button overlay */}
              <div className={cn(
                'absolute inset-0 bg-background/60',
                'opacity-0 group-hover:opacity-100',
                'transition-opacity duration-300',
                'flex items-center justify-center'
              )}>
                <button
                  onClick={() => handlePlayVideo(video.id)}
                  className={cn(
                    'w-16 h-16 rounded-full',
                    'bg-primary text-primary-foreground',
                    'flex items-center justify-center',
                    'transform scale-90 group-hover:scale-100',
                    'transition-transform duration-300'
                  )}
                  aria-label={`Play ${video.title}`}
                >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </button>
              </div>

              {/* Title overlay */}
              <div className={cn(
                'absolute bottom-0 left-0 right-0',
                'bg-gradient-to-t from-background/90 to-transparent',
                'p-4 translate-y-full group-hover:translate-y-0',
                'transition-transform duration-300'
              )}>
                <h3 className="text-lg font-semibold">{video.title}</h3>
                {video.isCaseStudy && (
                  <span className="text-sm text-foreground-secondary">
                    View Case Study →
                  </span>
                )}
              </div>

              {/* Case study indicator */}
              {video.isCaseStudy && (
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
            </>
          ) : (
            <iframe
              src={`https://www.youtube.com/embed/${video.youtubeId}?autoplay=1`}
              className="w-full h-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          )}
        </div>
      </BaseCard>
    );
  };

  return (
    <div>
      {/* Hero Reel Section */}
      {heroVideoId && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold mb-6">Featured Reel</h2>
          <BaseCard className="overflow-hidden">
            <div className="aspect-video">
              <iframe
                src={`https://www.youtube.com/embed/${heroVideoId}`}
                className="w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </BaseCard>
        </motion.div>
      )}

      {/* Mixed Grid Section */}
      <div className="space-y-12">
        {/* Horizontal videos (16:9) */}
        {groupedVideos['16:9'] && groupedVideos['16:9'].length > 0 && (
          <div>
            <h3 className="text-2xl font-semibold mb-6">Cinematic Work</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {groupedVideos['16:9'].map((video) => (
                <motion.div
                  key={video.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <VideoCard video={video} />
                </motion.div>
              ))}
            </div>
          </div>
        )}

        {/* Vertical videos (9:16) */}
        {groupedVideos['9:16'] && groupedVideos['9:16'].length > 0 && (
          <div>
            <h3 className="text-2xl font-semibold mb-6">Social Media Content</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {groupedVideos['9:16'].map((video) => (
                <motion.div
                  key={video.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <VideoCard video={video} />
                </motion.div>
              ))}
            </div>
          </div>
        )}

        {/* Square videos (1:1) */}
        {groupedVideos['1:1'] && groupedVideos['1:1'].length > 0 && (
          <div>
            <h3 className="text-2xl font-semibold mb-6">Square Format</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
              {groupedVideos['1:1'].map((video) => (
                <motion.div
                  key={video.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <VideoCard video={video} />
                </motion.div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};