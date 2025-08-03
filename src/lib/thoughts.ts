import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';
import fs from 'fs';
import path from 'path';

export interface ThoughtFrontmatter {
  title: string;
  subtitle?: string;
  date: string;
  tags: string[];
  excerpt: string;
  cover_image?: string;
  reading_time: string;
}

export interface Thought {
  slug: string;
  frontmatter: ThoughtFrontmatter;
  content: string;
  htmlContent?: string;
  fistBumps: number;
}

const contentDirectory = path.join(process.cwd(), 'src/content/thoughts');

// Simulated fist bump counts - in production, this would be from a database
const fistBumpCounts: Record<string, number> = {};

export async function getThoughtBySlug(slug: string): Promise<Thought | null> {
  try {
    const fullPath = path.join(contentDirectory, `${slug}.md`);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const { data, content } = matter(fileContents);
    
    // Process markdown to HTML
    const processedContent = await remark()
      .use(html)
      .process(content);
    const htmlContent = processedContent.toString();
    
    return {
      slug,
      frontmatter: data as ThoughtFrontmatter,
      content,
      htmlContent,
      fistBumps: fistBumpCounts[slug] || Math.floor(Math.random() * 50), // Random for demo
    };
  } catch (error) {
    console.error(`Error loading thought ${slug}:`, error);
    return null;
  }
}

export function getAllThoughts(): Thought[] {
  try {
    const files = fs.readdirSync(contentDirectory);
    
    const thoughts = files
      .filter((file) => file.endsWith('.md'))
      .map((file) => {
        const slug = file.replace(/\.md$/, '');
        const fullPath = path.join(contentDirectory, file);
        const fileContents = fs.readFileSync(fullPath, 'utf8');
        const { data, content } = matter(fileContents);
        
        return {
          slug,
          frontmatter: data as ThoughtFrontmatter,
          content,
          fistBumps: fistBumpCounts[slug] || Math.floor(Math.random() * 50), // Random for demo
        };
      });
    
    // Sort by date, newest first
    return thoughts.sort((a, b) => {
      return new Date(b.frontmatter.date).getTime() - new Date(a.frontmatter.date).getTime();
    });
  } catch (error) {
    console.error('Error reading thoughts:', error);
    return [];
  }
}

export function getAllTags(): string[] {
  const thoughts = getAllThoughts();
  const tagSet = new Set<string>();
  
  thoughts.forEach((thought) => {
    thought.frontmatter.tags.forEach((tag) => {
      tagSet.add(tag);
    });
  });
  
  return Array.from(tagSet).sort();
}

export function getThoughtsByTag(tag: string): Thought[] {
  return getAllThoughts().filter((thought) =>
    thought.frontmatter.tags.includes(tag)
  );
}

export function searchThoughts(query: string): Thought[] {
  const lowerQuery = query.toLowerCase();
  
  return getAllThoughts().filter((thought) => {
    const searchableText = `
      ${thought.frontmatter.title} 
      ${thought.frontmatter.subtitle || ''} 
      ${thought.frontmatter.excerpt} 
      ${thought.frontmatter.tags.join(' ')}
      ${thought.content}
    `.toLowerCase();
    
    return searchableText.includes(lowerQuery);
  });
}

// Update fist bump count (in production, this would update a database)
export function updateFistBumpCount(slug: string, increment: number = 1): number {
  if (!fistBumpCounts[slug]) {
    fistBumpCounts[slug] = 0;
  }
  fistBumpCounts[slug] += increment;
  return fistBumpCounts[slug];
}