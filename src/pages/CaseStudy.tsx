import React, { useEffect, useState } from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { PageWrapper, Container } from '@/components/common';
import { 
  CaseStudyHeader, 
  CaseStudyContent, 
  CaseStudyNavigation 
} from '@/components/case-study';
import { getCaseStudyBySlug, getAllCaseStudies, CaseStudyData } from '@/lib/content-loader';
import { remark } from 'remark';
import html from 'remark-html';

export const CaseStudy: React.FC = () => {
  const { service, slug } = useParams<{ service: string; slug: string }>();
  const [caseStudy, setCaseStudy] = useState<CaseStudyData | null>(null);
  const [htmlContent, setHtmlContent] = useState<string>('');
  const [relatedProjects, setRelatedProjects] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadCaseStudy = async () => {
      if (!service || !slug) return;
      
      setLoading(true);
      const study = getCaseStudyBySlug(service, slug);
      
      if (study) {
        setCaseStudy(study);
        
        // Process markdown to HTML
        const processedContent = await remark()
          .use(html)
          .process(study.content);
        setHtmlContent(processedContent.toString());
        
        // Get related projects
        const allStudies = getAllCaseStudies(service);
        const related = allStudies
          .filter(s => s.slug !== slug)
          .map(s => ({
            slug: s.slug,
            title: s.title,
            service: s.service,
            coverImage: s.coverImage,
          }));
        setRelatedProjects(related);
      }
      
      setLoading(false);
    };
    
    loadCaseStudy();
  }, [service, slug]);

  if (loading) {
    return (
      <PageWrapper>
        <Container>
          <div className="min-h-screen flex items-center justify-center">
            <div className="text-foreground-secondary">Loading...</div>
          </div>
        </Container>
      </PageWrapper>
    );
  }

  if (!caseStudy || !service) {
    return <Navigate to="/404" replace />;
  }

  return (
    <PageWrapper>
      <CaseStudyHeader
        title={caseStudy.title}
        summary={caseStudy.summary}
        coverImage={caseStudy.coverImage}
        date={caseStudy.date}
        service={service}
        duration={caseStudy.duration}
        team={caseStudy.team}
      />

      <Container size="md">
        <div className="py-12">
          {htmlContent && (
            <CaseStudyContent htmlContent={htmlContent} />
          )}
        </div>
      </Container>

      <CaseStudyNavigation
        currentService={service}
        relatedProjects={relatedProjects}
      />
    </PageWrapper>
  );
};