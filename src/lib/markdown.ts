import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';
import fs from 'fs';
import path from 'path';

export interface CaseStudyFrontmatter {
  title: string;
  service: 'design' | 'video' | 'dev';
  date: string;
  featured?: boolean;
  coverImage: string;
  summary: string;
  technologies?: string[];
  duration?: string;
  team?: string;
  results?: string[];
}

export interface CaseStudy {
  slug: string;
  frontmatter: CaseStudyFrontmatter;
  content: string;
  htmlContent?: string;
}

const contentDirectory = path.join(process.cwd(), 'src/content/case-studies');

export async function getCaseStudyBySlug(service: string, slug: string): Promise<CaseStudy | null> {
  try {
    const fullPath = path.join(contentDirectory, service, `${slug}.md`);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const { data, content } = matter(fileContents);
    
    // Process markdown to HTML
    const processedContent = await remark()
      .use(html)
      .process(content);
    const htmlContent = processedContent.toString();
    
    return {
      slug,
      frontmatter: data as CaseStudyFrontmatter,
      content,
      htmlContent,
    };
  } catch (error) {
    console.error(`Error loading case study ${service}/${slug}:`, error);
    return null;
  }
}

export function getAllCaseStudies(service?: string): CaseStudy[] {
  const services = service ? [service] : ['design', 'video', 'dev'];
  const caseStudies: CaseStudy[] = [];
  
  services.forEach((srv) => {
    const servicePath = path.join(contentDirectory, srv);
    
    try {
      const files = fs.readdirSync(servicePath);
      
      files.forEach((file) => {
        if (file.endsWith('.md')) {
          const slug = file.replace(/\.md$/, '');
          const fullPath = path.join(servicePath, file);
          const fileContents = fs.readFileSync(fullPath, 'utf8');
          const { data, content } = matter(fileContents);
          
          caseStudies.push({
            slug,
            frontmatter: data as CaseStudyFrontmatter,
            content,
          });
        }
      });
    } catch (error) {
      console.error(`Error reading case studies for ${srv}:`, error);
    }
  });
  
  // Sort by date, newest first
  return caseStudies.sort((a, b) => {
    return new Date(b.frontmatter.date).getTime() - new Date(a.frontmatter.date).getTime();
  });
}

export function getFeaturedCaseStudies(): CaseStudy[] {
  return getAllCaseStudies().filter((cs) => cs.frontmatter.featured);
}