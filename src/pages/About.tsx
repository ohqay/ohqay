import React from 'react';
import { PageWrapper, Container } from '@/components/common';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

// Skill categories
const skills = {
  design: {
    title: 'Design',
    skills: ['Logo Design', 'Brand Identity', 'UI/UX', 'Typography', 'Color Theory'],
  },
  development: {
    title: 'Development',
    skills: ['React', 'TypeScript', 'Swift', 'Node.js', 'Next.js'],
  },
  video: {
    title: 'Video',
    skills: ['Editing', 'Motion Graphics', 'Color Grading', 'Sound Design', 'Storytelling'],
  },
  tools: {
    title: 'Tools',
    skills: ['Figma', 'Adobe CC', 'Final Cut Pro', 'DaVinci Resolve', 'VS Code', 'Xcode'],
  },
};

// Process steps
const processSteps = [
  {
    number: '01',
    title: 'Discover',
    description: 'Understanding your vision, goals, and requirements through detailed discussion.',
  },
  {
    number: '02',
    title: 'Design',
    description: 'Creating concepts and iterations based on strategic thinking and creative exploration.',
  },
  {
    number: '03',
    title: 'Develop',
    description: 'Bringing designs to life with clean code and attention to detail.',
  },
  {
    number: '04',
    title: 'Deliver',
    description: 'Launching your project with thorough testing and ongoing support.',
  },
];

export const About: React.FC = () => {
  return (
    <PageWrapper>
      <Container size="lg">
        <div className="py-12">
          {/* Hero Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-16"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Multi-disciplinary creative turning ideas into reality
            </h1>
            <div className="max-w-3xl">
              <p className="text-xl text-foreground-secondary mb-6">
                I'm a designer, developer, and video editor passionate about creating 
                exceptional digital experiences. With expertise spanning multiple disciplines, 
                I bring a unique perspective to every project.
              </p>
              <p className="text-lg text-foreground-secondary">
                Whether it's crafting a brand identity, building a web application, or 
                editing a compelling video, I approach each challenge with creativity, 
                technical skill, and meticulous attention to detail.
              </p>
            </div>
          </motion.div>

          {/* Skills Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mb-16"
          >
            <h2 className="text-3xl font-bold mb-8">Skills & Expertise</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {Object.entries(skills).map(([key, category], index) => (
                <motion.div
                  key={key}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  className="space-y-4"
                >
                  <h3 className="text-xl font-semibold">{category.title}</h3>
                  <ul className="space-y-2">
                    {category.skills.map((skill) => (
                      <li
                        key={skill}
                        className="text-foreground-secondary flex items-center gap-2"
                      >
                        <span className="w-1 h-1 bg-foreground-tertiary rounded-full" />
                        {skill}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Process Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mb-16"
          >
            <h2 className="text-3xl font-bold mb-8">My Process</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {processSteps.map((step, index) => (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                  className={cn(
                    'p-6 rounded-lg',
                    'bg-background-secondary border border-border',
                    'hover:border-foreground/50 transition-colors duration-200'
                  )}
                >
                  <div className="text-4xl font-bold text-foreground-tertiary mb-4">
                    {step.number}
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                  <p className="text-foreground-secondary text-sm">
                    {step.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="text-center py-16 border-t border-border"
          >
            <h2 className="text-3xl font-bold mb-4">
              Ready to create something together?
            </h2>
            <p className="text-lg text-foreground-secondary mb-8">
              Let's discuss your project and bring your vision to life.
            </p>
            <a
              href="mailto:hello@ohqay.com?subject=Project%20Inquiry&body=Hi%20Tarek%2C%0A%0AI%20came%20across%20your%20portfolio%20and%20I'm%20interested%20in%20discussing%20a%20potential%20project.%0A%0AProject%20Details%3A%0A-%20Type%3A%20%0A-%20Timeline%3A%20%0A-%20Budget%20Range%3A%20%0A%0ALooking%20forward%20to%20hearing%20from%20you!%0A%0ABest%2C"
              className={cn(
                'inline-flex items-center gap-2 px-6 py-3',
                'bg-primary text-primary-foreground rounded-full',
                'hover:scale-105 transition-transform duration-200'
              )}
            >
              Let's Work Together →
            </a>
          </motion.div>
        </div>
      </Container>
    </PageWrapper>
  );
};