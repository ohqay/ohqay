import React from 'react';
import { PageWrapper, Container } from '@/components/common';
import { MixedGrid } from '@/components/portfolio';

// Sample data - replace with actual data fetching
const videoItems = [
  {
    id: '1',
    title: 'Brand Commercial',
    thumbnail: '/images/placeholder.svg',
    youtubeId: 'jNQXAC9IVRw', // Replace with actual YouTube IDs
    aspectRatio: '16:9' as const,
    isCaseStudy: true,
    caseStudyUrl: '/video/brand-commercial',
  },
  {
    id: '2',
    title: 'TikTok Campaign',
    thumbnail: '/images/placeholder.svg',
    youtubeId: 'jNQXAC9IVRw',
    aspectRatio: '9:16' as const,
  },
  {
    id: '3',
    title: 'Instagram Reel',
    thumbnail: '/images/placeholder.svg',
    youtubeId: 'jNQXAC9IVRw',
    aspectRatio: '1:1' as const,
  },
  {
    id: '4',
    title: 'Product Demo',
    thumbnail: '/images/placeholder.svg',
    youtubeId: 'jNQXAC9IVRw',
    aspectRatio: '16:9' as const,
  },
];

const heroReelId = 'jNQXAC9IVRw'; // Replace with actual hero reel YouTube ID

export const Video: React.FC = () => {
  return (
    <PageWrapper>
      <Container size="xl">
        <div className="py-12">
          <div className="mb-12">
            <h1 className="text-5xl font-bold mb-4">Video Editing</h1>
            <p className="text-lg text-foreground-secondary max-w-3xl">
              Video editing portfolio featuring commercial work, creative projects, and social media content.
              From cinematic storytelling to viral social content.
            </p>
          </div>
          
          <MixedGrid items={videoItems} heroVideoId={heroReelId} />
        </div>
      </Container>
    </PageWrapper>
  );
};