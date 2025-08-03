import React from 'react';
import { Navigation } from './Navigation';
import { Footer } from './Footer';
import { cn } from '@/lib/utils';

interface LayoutProps {
  children: React.ReactNode;
  className?: string;
}

export const Layout: React.FC<LayoutProps> = ({ children, className = '' }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className={cn('flex-grow pt-20', className)}>
        {children}
      </main>
      <Footer />
    </div>
  );
};