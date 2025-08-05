import React from 'react';
import { PageWrapper, Container } from '@/components/common';
import { PageHeader } from './PageHeader';

interface PortfolioPageTemplateProps {
  title: string;
  description: string;
  containerSize?: 'sm' | 'md' | 'lg' | 'xl';
  actions?: React.ReactNode;
  children: React.ReactNode;
}

export const PortfolioPageTemplate: React.FC<PortfolioPageTemplateProps> = ({
  title,
  description,
  containerSize = 'xl',
  actions,
  children,
}) => {
  return (
    <PageWrapper>
      <Container size={containerSize}>
        <div className="py-12">
          <PageHeader
            title={title}
            description={description}
            actions={actions}
          />
          
          {children}
        </div>
      </Container>
    </PageWrapper>
  );
};