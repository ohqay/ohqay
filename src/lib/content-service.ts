import path from 'path';
import {
  processMarkdown,
  readMarkdownFile,
  createSearchableText,
  searchItems,
  sortByDate,
  getMarkdownFiles,
  extractSlug,
  extractUniqueTags,
} from './content-utils';

// Base interfaces for all content types
export interface BaseContent {
  slug: string;
  content: string;
  htmlContent?: string;
}

export interface BaseFrontmatter {
  title: string;
  date: string;
}

// Case Study Types
export interface CaseStudyFrontmatter extends BaseFrontmatter {
  service: 'design' | 'video' | 'dev';
  featured?: boolean;
  coverImage: string;
  summary: string;
  technologies?: string[];
  duration?: string;
  team?: string;
  results?: string[];
}

export interface CaseStudy extends BaseContent {
  frontmatter: CaseStudyFrontmatter;
}

// Thought Types
export interface ThoughtFrontmatter extends BaseFrontmatter {
  subtitle?: string;
  tags: string[];
  excerpt: string;
  cover_image?: string;
  reading_time: string;
}

export interface Thought extends BaseContent {
  frontmatter: ThoughtFrontmatter;
  fistBumps: number;
}

// Content Service Interface
export interface ContentService<T extends BaseContent> {
  getBySlug(slug: string, ...args: any[]): Promise<T | null>;
  getAll(...args: any[]): Promise<T[]>;
  search(query: string): Promise<T[]>;
}

// Abstract base class for content services
export abstract class BaseContentService<T extends BaseContent, F extends BaseFrontmatter> {
  protected contentDirectory: string;
  protected useMockData: boolean;

  constructor(contentPath: string, useMockData: boolean = false) {
    this.contentDirectory = path.join(process.cwd(), contentPath);
    this.useMockData = useMockData;
  }

  protected abstract getMockData(): T[];
  protected abstract createContentFromFile(slug: string, frontmatter: F, content: string, htmlContent?: string): T;
  protected abstract getSearchableText(item: T): string;

  protected async loadFromFile(filePath: string, slug: string): Promise<T | null> {
    const fileData = readMarkdownFile(filePath);
    if (!fileData) return null;

    const { data, content } = fileData;
    const htmlContent = await processMarkdown(content);
    
    return this.createContentFromFile(slug, data as F, content, htmlContent);
  }

  protected async loadAllFromDirectory(dirPath: string): Promise<T[]> {
    const files = getMarkdownFiles(dirPath);
    const items: T[] = [];

    for (const file of files) {
      const slug = extractSlug(file);
      const fullPath = path.join(dirPath, file);
      const item = await this.loadFromFile(fullPath, slug);
      if (item) items.push(item);
    }

    return sortByDate(items, (item) => item.frontmatter.date);
  }

  async search(query: string): Promise<T[]> {
    const allItems = await this.getAll();
    return searchItems(allItems, query, (item) => this.getSearchableText(item));
  }

  abstract getAll(...args: any[]): Promise<T[]>;
  abstract getBySlug(slug: string, ...args: any[]): Promise<T | null>;
}

// Case Study Service Implementation
export class CaseStudyService extends BaseContentService<CaseStudy, CaseStudyFrontmatter> implements ContentService<CaseStudy> {
  // Mock data for case studies
  private mockCaseStudies: CaseStudy[] = [
    {
      slug: 'blueprinter',
      frontmatter: {
        service: 'design',
        title: 'Blueprinter App Icon Design',
        summary: 'Designing a distinctive icon for an AI-powered architecture app that bridges traditional drafting with modern technology.',
        coverImage: '/images/placeholder.svg',
        date: '2024-01-15',
        featured: true,
        duration: '2 weeks',
        team: 'Solo',
      },
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

  constructor(useMockData: boolean = false) {
    super('src/content/case-studies', useMockData);
  }

  protected getMockData(): CaseStudy[] {
    return this.mockCaseStudies;
  }

  protected createContentFromFile(slug: string, frontmatter: CaseStudyFrontmatter, content: string, htmlContent?: string): CaseStudy {
    return {
      slug,
      frontmatter,
      content,
      htmlContent,
    };
  }

  protected getSearchableText(item: CaseStudy): string {
    return createSearchableText(
      item.frontmatter.title,
      '',
      item.frontmatter.summary,
      item.frontmatter.technologies || [],
      item.content
    );
  }

  async getBySlug(service: string, slug: string): Promise<CaseStudy | null> {
    if (this.useMockData) {
      return this.mockCaseStudies.find(cs => cs.frontmatter.service === service && cs.slug === slug) || null;
    }

    const filePath = path.join(this.contentDirectory, service, `${slug}.md`);
    return this.loadFromFile(filePath, slug);
  }

  async getAll(service?: string): Promise<CaseStudy[]> {
    if (this.useMockData) {
      const data = this.getMockData();
      return service ? data.filter(cs => cs.frontmatter.service === service) : data;
    }

    const services = service ? [service] : ['design', 'video', 'dev'];
    const allCaseStudies: CaseStudy[] = [];

    for (const srv of services) {
      const servicePath = path.join(this.contentDirectory, srv);
      const serviceItems = await this.loadAllFromDirectory(servicePath);
      allCaseStudies.push(...serviceItems);
    }

    return sortByDate(allCaseStudies, (item) => item.frontmatter.date);
  }

  async getFeatured(): Promise<CaseStudy[]> {
    const allCaseStudies = await this.getAll();
    return allCaseStudies.filter(cs => cs.frontmatter.featured);
  }
}

// Thought Service Implementation
export class ThoughtService extends BaseContentService<Thought, ThoughtFrontmatter> implements ContentService<Thought> {
  private fistBumpCounts: Record<string, number> = {};

  // Mock data for thoughts
  private mockThoughts: Thought[] = [
    {
      slug: 'designing-for-ai',
      frontmatter: {
        title: 'Designing for the Age of AI',
        subtitle: 'How machine learning is reshaping creative workflows and what it means for designers',
        excerpt: 'Exploring how AI is reshaping the design process, from ideation to execution, and what it means for creative professionals.',
        date: '2025-01-20',
        tags: ['AI', 'Design', 'Future'],
        cover_image: '/images/placeholder.svg',
        reading_time: '5 min',
      },
      fistBumps: 42,
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
      frontmatter: {
        title: '10 Productivity Hacks for Creative Professionals',
        subtitle: 'Time-tested strategies to boost your creative output',
        excerpt: 'Discover practical productivity techniques specifically tailored for designers, developers, and creative professionals.',
        date: '2025-01-15',
        tags: ['Productivity', 'Creativity', 'Tips'],
        reading_time: '7 min',
      },
      fistBumps: 28,
      content: 'Content goes here...',
    },
  ];

  constructor(useMockData: boolean = false) {
    super('src/content/thoughts', useMockData);
  }

  protected getMockData(): Thought[] {
    return this.mockThoughts;
  }

  protected createContentFromFile(slug: string, frontmatter: ThoughtFrontmatter, content: string, htmlContent?: string): Thought {
    return {
      slug,
      frontmatter,
      content,
      htmlContent,
      fistBumps: this.fistBumpCounts[slug] || Math.floor(Math.random() * 50),
    };
  }

  protected getSearchableText(item: Thought): string {
    return createSearchableText(
      item.frontmatter.title,
      item.frontmatter.subtitle || '',
      item.frontmatter.excerpt,
      item.frontmatter.tags,
      item.content
    );
  }

  async getBySlug(slug: string): Promise<Thought | null> {
    if (this.useMockData) {
      return this.mockThoughts.find(t => t.slug === slug) || null;
    }

    const filePath = path.join(this.contentDirectory, `${slug}.md`);
    return this.loadFromFile(filePath, slug);
  }

  async getAll(): Promise<Thought[]> {
    if (this.useMockData) {
      return this.getMockData();
    }

    return this.loadAllFromDirectory(this.contentDirectory);
  }

  async getAllTags(): Promise<string[]> {
    const allThoughts = await this.getAll();
    return extractUniqueTags(allThoughts, (thought) => thought.frontmatter.tags);
  }

  async getByTag(tag: string): Promise<Thought[]> {
    const allThoughts = await this.getAll();
    return allThoughts.filter(thought => 
      thought.frontmatter.tags.includes(tag)
    );
  }

  updateFistBumpCount(slug: string, increment: number = 1): number {
    if (!this.fistBumpCounts[slug]) {
      this.fistBumpCounts[slug] = 0;
    }
    this.fistBumpCounts[slug] += increment;
    return this.fistBumpCounts[slug];
  }
}

// Content Manager - Main entry point for content operations
export class ContentManager {
  private caseStudyService: CaseStudyService;
  private thoughtService: ThoughtService;

  constructor(useMockData: boolean = false) {
    this.caseStudyService = new CaseStudyService(useMockData);
    this.thoughtService = new ThoughtService(useMockData);
  }

  // Case Study methods
  async getCaseStudyBySlug(service: string, slug: string): Promise<CaseStudy | null> {
    return this.caseStudyService.getBySlug(service, slug);
  }

  async getAllCaseStudies(service?: string): Promise<CaseStudy[]> {
    return this.caseStudyService.getAll(service);
  }

  async getFeaturedCaseStudies(): Promise<CaseStudy[]> {
    return this.caseStudyService.getFeatured();
  }

  async searchCaseStudies(query: string): Promise<CaseStudy[]> {
    return this.caseStudyService.search(query);
  }

  // Thought methods
  async getThoughtBySlug(slug: string): Promise<Thought | null> {
    return this.thoughtService.getBySlug(slug);
  }

  async getAllThoughts(): Promise<Thought[]> {
    return this.thoughtService.getAll();
  }

  async getAllTags(): Promise<string[]> {
    return this.thoughtService.getAllTags();
  }

  async getThoughtsByTag(tag: string): Promise<Thought[]> {
    return this.thoughtService.getByTag(tag);
  }

  async searchThoughts(query: string): Promise<Thought[]> {
    return this.thoughtService.search(query);
  }

  updateFistBumpCount(slug: string, increment: number = 1): number {
    return this.thoughtService.updateFistBumpCount(slug, increment);
  }
}

// Default export - singleton instance
const contentManager = new ContentManager(process.env.NODE_ENV === 'development');
export default contentManager;