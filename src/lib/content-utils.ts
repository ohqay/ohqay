import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';
import fs from 'fs';
import path from 'path';

/**
 * Processes markdown content to HTML
 */
export async function processMarkdown(content: string): Promise<string> {
  const processedContent = await remark()
    .use(html)
    .process(content);
  return processedContent.toString();
}

/**
 * Reads and parses a markdown file with frontmatter
 */
export function readMarkdownFile(filePath: string): { data: any; content: string } | null {
  try {
    const fileContents = fs.readFileSync(filePath, 'utf8');
    const { data, content } = matter(fileContents);
    return { data, content };
  } catch (error) {
    console.error(`Error reading markdown file ${filePath}:`, error);
    return null;
  }
}

/**
 * Creates searchable text from content and metadata
 */
export function createSearchableText(
  title: string,
  subtitle: string = '',
  excerpt: string = '',
  tags: string[] = [],
  content: string = ''
): string {
  return `
    ${title} 
    ${subtitle} 
    ${excerpt} 
    ${tags.join(' ')}
    ${content}
  `.toLowerCase();
}

/**
 * Generic search function for content items
 */
export function searchItems<T>(
  items: T[],
  query: string,
  getSearchableText: (item: T) => string
): T[] {
  const lowerQuery = query.toLowerCase();
  
  return items.filter((item) => {
    const searchableText = getSearchableText(item);
    return searchableText.includes(lowerQuery);
  });
}

/**
 * Sorts items by date, newest first
 */
export function sortByDate<T>(items: T[], getDate: (item: T) => string): T[] {
  return items.sort((a, b) => {
    return new Date(getDate(b)).getTime() - new Date(getDate(a)).getTime();
  });
}

/**
 * Checks if a directory exists and is readable
 */
export function directoryExists(dirPath: string): boolean {
  try {
    const stats = fs.statSync(dirPath);
    return stats.isDirectory();
  } catch {
    return false;
  }
}

/**
 * Gets all markdown files in a directory
 */
export function getMarkdownFiles(dirPath: string): string[] {
  try {
    if (!directoryExists(dirPath)) {
      return [];
    }
    
    const files = fs.readdirSync(dirPath);
    return files.filter((file) => file.endsWith('.md'));
  } catch (error) {
    console.error(`Error reading directory ${dirPath}:`, error);
    return [];
  }
}

/**
 * Extracts slug from filename
 */
export function extractSlug(filename: string): string {
  return filename.replace(/\.md$/, '');
}

/**
 * Gets unique tags from a collection of items
 */
export function extractUniqueTags<T>(
  items: T[],
  getTags: (item: T) => string[]
): string[] {
  const tagSet = new Set<string>();
  
  items.forEach((item) => {
    getTags(item).forEach((tag) => {
      tagSet.add(tag);
    });
  });
  
  return Array.from(tagSet).sort();
}