// This file provides mock data for development
// In production, you'd use a build-time content generation system

export interface CaseStudyData {
  slug: string;
  service: string;
  title: string;
  summary: string;
  coverImage: string;
  date: string;
  featured?: boolean;
  duration?: string;
  team?: string;
  content: string;
}

export interface ThoughtData {
  slug: string;
  title: string;
  subtitle?: string;
  excerpt: string;
  date: string;
  tags: string[];
  coverImage?: string;
  readingTime: string;
  content: string;
  claps: number;
}

// Mock case studies
export const caseStudies: CaseStudyData[] = [
  {
    slug: 'blueprinter',
    service: 'design',
    title: 'Blueprinter App Icon Design',
    summary: 'Designing a distinctive icon for an AI-powered architecture app that bridges traditional drafting with modern technology.',
    coverImage: '/images/placeholder.svg',
    date: '2024-01-15',
    featured: true,
    duration: '2 weeks',
    team: 'Solo',
    content: `
# The Challenge

Blueprinter needed an app icon that would stand out in the crowded App Store while clearly communicating its purpose: AI-powered architectural design. The icon needed to appeal to both professional architects and DIY home designers.

## Design Process

### Initial Concepts

The design journey began with extensive research into architectural symbols, AI representations, and existing apps in the space. Key themes emerged:

- Blueprint aesthetics
- Grid systems
- AI/technology elements
- Architectural tools

### Iteration and Refinement

Through multiple iterations, the design evolved from literal representations of blueprints to a more abstract, modern approach that better suited the innovative nature of the app.

## Final Design

The final icon combines:

1. **Grid Foundation**: Representing precision and architectural planning
2. **Dynamic Elements**: Suggesting AI-powered generation
3. **Monochromatic Palette**: Professional and timeless
4. **Geometric Shapes**: Clean, modern aesthetic

## Results

- Featured in App Store's "New Apps We Love"
- 50K+ downloads in first month
- 4.8 star rating with users praising the professional design
    `,
  },
];

// Mock thoughts
export const thoughts: ThoughtData[] = [
  {
    slug: 'designing-for-ai',
    title: 'Designing for the Age of AI',
    subtitle: 'How machine learning is reshaping creative workflows and what it means for designers',
    excerpt: 'Exploring how AI is reshaping the design process, from ideation to execution, and what it means for creative professionals.',
    date: '2025-01-20',
    tags: ['AI', 'Design', 'Future'],
    coverImage: '/images/placeholder.svg',
    readingTime: '5 min',
    claps: 42,
    content: `
The intersection of artificial intelligence and design is creating unprecedented opportunities for creative professionals. As AI tools become more sophisticated, they're not replacing designers—they're augmenting our capabilities in fascinating ways.

## The Current Landscape

Today's AI design tools fall into several categories:

1. **Generative Design**: Tools that create variations based on parameters
2. **Style Transfer**: Applying artistic styles to existing designs
3. **Layout Optimization**: AI-driven composition and spacing
4. **Color Intelligence**: Smart palette generation and harmony

## Practical Applications

### Rapid Prototyping

What used to take hours now takes minutes. AI can generate dozens of design variations based on a simple prompt, allowing designers to explore more creative directions in less time.

### Personalization at Scale

Creating personalized designs for thousands of users is now feasible. AI can adapt layouts, colors, and content based on user preferences and behavior patterns.

### Accessibility Enhancement

AI tools can automatically check and improve accessibility, ensuring designs work for users with various disabilities.

## The Human Touch Remains Essential

While AI excels at pattern recognition and variation generation, it lacks:

- **Emotional Intelligence**: Understanding the subtle emotional impact of design choices
- **Cultural Context**: Navigating complex cultural nuances and sensitivities
- **Strategic Thinking**: Aligning design with broader business and brand strategies
- **Ethical Judgment**: Making decisions about what should be created, not just what can be

## Looking Forward

The future of design isn't human vs. AI—it's human with AI. The most successful designers will be those who:

1. Embrace AI as a creative partner
2. Focus on skills AI can't replicate
3. Continuously adapt their workflows
4. Maintain a critical eye on AI outputs

As we move forward, the question isn't whether AI will change design—it already has. The question is how we'll shape that change to create a more creative, efficient, and inclusive design future.
    `,
  },
  {
    slug: 'productivity-hacks',
    title: '10 Productivity Hacks for Creative Professionals',
    subtitle: 'Time-tested strategies to boost your creative output',
    excerpt: 'Discover practical productivity techniques specifically tailored for designers, developers, and creative professionals.',
    date: '2025-01-15',
    tags: ['Productivity', 'Creativity', 'Tips'],
    readingTime: '7 min',
    claps: 28,
    content: 'Content goes here...',
  },
];

// Helper functions
export function getCaseStudyBySlug(service: string, slug: string): CaseStudyData | null {
  return caseStudies.find(cs => cs.service === service && cs.slug === slug) || null;
}

export function getAllCaseStudies(service?: string): CaseStudyData[] {
  if (service) {
    return caseStudies.filter(cs => cs.service === service);
  }
  return caseStudies;
}

export function getThoughtBySlug(slug: string): ThoughtData | null {
  return thoughts.find(t => t.slug === slug) || null;
}

export function getAllThoughts(): ThoughtData[] {
  return thoughts;
}

export function getAllTags(): string[] {
  const tagSet = new Set<string>();
  thoughts.forEach(thought => {
    thought.tags.forEach(tag => tagSet.add(tag));
  });
  return Array.from(tagSet).sort();
}