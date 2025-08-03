import React from 'react';
import { PageWrapper, Container } from '@/components/common';
import { ResponsiveGrid } from '@/components/portfolio';

// Sample data - replace with actual data fetching
const devProjects = [
  {
    id: '1',
    title: 'E-commerce Platform',
    description: 'A modern e-commerce platform built with React and Next.js, featuring real-time inventory management.',
    type: 'web' as const,
    screenshot: '/images/placeholder.svg',
    technologies: ['React', 'TypeScript', 'Next.js', 'Tailwind CSS'],
    links: {
      live: 'https://example.com',
      github: 'https://github.com',
    },
    isCaseStudy: true,
    caseStudyUrl: '/dev/ecommerce-platform',
  },
  {
    id: '2',
    title: 'Task Manager iOS',
    description: 'Native iOS app for task management with seamless iCloud sync and widget support.',
    type: 'ios' as const,
    screenshot: '/images/placeholder.svg',
    technologies: ['Swift', 'SwiftUI', 'Core Data'],
    links: {
      appStore: 'https://apps.apple.com',
    },
  },
  {
    id: '3',
    title: 'Dev Tools CLI',
    description: 'Command-line tool for automating development workflows and project scaffolding.',
    type: 'cli' as const,
    screenshot: '/images/placeholder.svg',
    technologies: ['TypeScript', 'Node.js'],
    links: {
      github: 'https://github.com',
    },
  },
  {
    id: '4',
    title: 'Portfolio Website',
    description: 'This very website! Built with React, TypeScript, and Tailwind CSS.',
    type: 'web' as const,
    screenshot: '/images/placeholder.svg',
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
    links: {
      github: 'https://github.com',
    },
  },
];

export const Dev: React.FC = () => {
  return (
    <PageWrapper>
      <Container size="xl">
        <div className="py-12">
          <div className="mb-12">
            <h1 className="text-5xl font-bold mb-4">Development</h1>
            <p className="text-lg text-foreground-secondary max-w-3xl">
              Software development portfolio showcasing web applications, iOS/macOS apps, and CLI tools.
              Built with modern technologies and best practices.
            </p>
          </div>
          
          <ResponsiveGrid projects={devProjects} />
        </div>
      </Container>
    </PageWrapper>
  );
};