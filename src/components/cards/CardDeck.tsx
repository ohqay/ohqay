import React from 'react';
import { ServiceCard } from './ServiceCard';
import { motion } from 'framer-motion';
import { Palette, Film, Code2, PenTool } from 'lucide-react';

// Pattern components for each card
const DesignPattern = () => (
  <svg width="100%" height="100%" viewBox="0 0 400 400">
    <defs>
      <pattern id="design-pattern" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
        <circle cx="20" cy="20" r="2" fill="currentColor" />
      </pattern>
    </defs>
    <rect width="100%" height="100%" fill="url(#design-pattern)" />
  </svg>
);

const EditingPattern = () => (
  <svg width="100%" height="100%" viewBox="0 0 400 400">
    <defs>
      <pattern id="editing-pattern" x="0" y="0" width="60" height="60" patternUnits="userSpaceOnUse">
        <rect x="10" y="10" width="40" height="40" fill="none" stroke="currentColor" strokeWidth="0.5" />
      </pattern>
    </defs>
    <rect width="100%" height="100%" fill="url(#editing-pattern)" />
  </svg>
);

const DevPattern = () => (
  <svg width="100%" height="100%" viewBox="0 0 400 400">
    <defs>
      <pattern id="dev-pattern" x="0" y="0" width="80" height="40" patternUnits="userSpaceOnUse">
        <path d="M0 20h80" stroke="currentColor" strokeWidth="0.5" />
      </pattern>
    </defs>
    <rect width="100%" height="100%" fill="url(#dev-pattern)" />
  </svg>
);

const ThoughtsPattern = () => (
  <svg width="100%" height="100%" viewBox="0 0 400 400">
    <defs>
      <pattern id="thoughts-pattern" x="0" y="0" width="50" height="50" patternUnits="userSpaceOnUse">
        <path d="M25 10 L25 40 M10 25 L40 25" stroke="currentColor" strokeWidth="0.5" opacity="0.3" />
      </pattern>
    </defs>
    <rect width="100%" height="100%" fill="url(#thoughts-pattern)" />
  </svg>
);

const services = [
  {
    title: 'Thoughts',
    description: 'Articles and insights on design, development, creativity, and technology.',
    href: '/thoughts',
    icon: <PenTool size={32} />,
    pattern: <ThoughtsPattern />,
    ctaText: 'Read Articles →',
    stackOrder: 1, // Bottom layer (lowest z-index when not hovered)
  },
  {
    title: 'Editing',
    description: 'Professional video editing for commercials, social media, and creative projects.',
    href: '/video',
    icon: <Film size={32} />,
    pattern: <EditingPattern />,
    ctaText: 'View Portfolio →',
    stackOrder: 2, // Second layer
  },
  {
    title: 'Dev',
    description: 'Web applications, iOS/macOS apps, and CLI tools built with modern technologies.',
    href: '/dev',
    icon: <Code2 size={32} />,
    pattern: <DevPattern />,
    ctaText: 'View Portfolio →',
    stackOrder: 3, // Third layer
  },
  {
    title: 'Design',
    description: 'Logo design, brand identity, and creative visual solutions that tell your story.',
    href: '/design',
    icon: <Palette size={32} />,
    pattern: <DesignPattern />,
    ctaText: 'View Portfolio →',
    stackOrder: 4, // Top layer (highest z-index when not hovered)
  },
];

export const CardDeck: React.FC = () => {
  const [hoveredIndex, setHoveredIndex] = React.useState<number | null>(null);
  const hoverTimeoutRef = React.useRef<NodeJS.Timeout | null>(null);

  const handleHoverStart = React.useCallback((index: number) => {
    // Clear any pending hover end timeout
    if (hoverTimeoutRef.current) {
      clearTimeout(hoverTimeoutRef.current);
      hoverTimeoutRef.current = null;
    }
    setHoveredIndex(index);
  }, []);

  const handleHoverEnd = React.useCallback(() => {
    // Delay clearing the hover state to allow for smooth transitions
    hoverTimeoutRef.current = setTimeout(() => {
      setHoveredIndex(null);
      hoverTimeoutRef.current = null;
    }, 50);
  }, []);

  // Cleanup timeout on unmount
  React.useEffect(() => {
    return () => {
      if (hoverTimeoutRef.current) {
        clearTimeout(hoverTimeoutRef.current);
      }
    };
  }, []);

  return (
    <motion.div
      className="relative flex items-center justify-center mx-auto"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.3 }}
    >
      <div className="relative h-[400px] w-full max-w-[600px] flex items-center justify-center">
        {services.map((service, index) => (
          <ServiceCard
            key={service.href}
            {...service}
            index={index}
            totalCards={services.length}
            hoveredIndex={hoveredIndex}
            onHoverStart={() => handleHoverStart(index)}
            onHoverEnd={handleHoverEnd}
          />
        ))}
      </div>
    </motion.div>
  );
};