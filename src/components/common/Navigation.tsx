import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { motion, AnimatePresence } from 'framer-motion';
import { Container } from './Container';
import { ContactModal } from './ContactModal';

interface NavItem {
  label: string;
  href: string;
  icon?: React.ReactNode;
}

const navItems: NavItem[] = [
  { label: 'Home', href: '/' },
  { label: 'Design', href: '/design' },
  { label: 'Editing', href: '/video' },
  { label: 'Dev', href: '/dev' },
  { label: 'Thoughts', href: '/thoughts' },
  { label: 'About', href: '/about' },
];

export const Navigation: React.FC = () => {
  const location = useLocation();
  const [isVisible, setIsVisible] = useState(true);
  const [isPaused, setIsPaused] = useState(false);
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const lastScrollY = useRef(0);
  const pauseTimer = useRef<NodeJS.Timeout | null>(null);
  const scrollThreshold = 50;

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const isScrollingDown = currentScrollY > lastScrollY.current;
      const isAtTop = currentScrollY < scrollThreshold;

      // Clear existing pause timer
      if (pauseTimer.current) {
        clearTimeout(pauseTimer.current);
      }

      // Show navigation when at top or scrolling up
      if (isAtTop) {
        setIsVisible(true);
        setIsPaused(false);
      } else if (isScrollingDown && currentScrollY > scrollThreshold) {
        setIsVisible(false);
        setIsPaused(false);
      } else if (!isScrollingDown) {
        setIsVisible(true);
        setIsPaused(false);
      }

      // Set pause timer to show nav after 2-3 seconds of no scrolling
      pauseTimer.current = setTimeout(() => {
        setIsVisible(true);
        setIsPaused(true);
      }, 2500);

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (pauseTimer.current) {
        clearTimeout(pauseTimer.current);
      }
    };
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.nav
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -100, opacity: 0 }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
          className="fixed top-0 left-0 right-0 z-50 py-4"
        >
          <Container>
            <div className="flex justify-center">
              <motion.div
                className={cn(
                  'backdrop-blur-md bg-background-secondary/80',
                  'border border-border rounded-full',
                  'px-2 py-2 shadow-lg'
                )}
                initial={{ scale: 0.9 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.2 }}
              >
                <ul className="flex items-center gap-1">
                  {navItems.map((item) => {
                    const isActive = location.pathname === item.href || 
                      (item.href !== '/' && location.pathname.startsWith(item.href));
                    
                    return (
                      <li key={item.href}>
                        <Link
                          to={item.href}
                          className={cn(
                            'px-4 py-2 rounded-full text-sm font-medium',
                            'transition-all duration-200',
                            'hover:bg-accent hover:text-accent-foreground',
                            isActive
                              ? 'bg-primary text-primary-foreground'
                              : 'text-foreground-secondary'
                          )}
                        >
                          {item.label}
                        </Link>
                      </li>
                    );
                  })}
                  <li className="ml-2">
                    <button
                      onClick={() => setIsContactModalOpen(true)}
                      className={cn(
                        'px-4 py-2 rounded-full text-sm font-medium',
                        'transition-all duration-200',
                        'hover:bg-accent hover:text-accent-foreground',
                        'text-foreground-secondary'
                      )}
                    >
                      Contact
                    </button>
                  </li>
                </ul>
              </motion.div>
            </div>
          </Container>
        </motion.nav>
      )}
      <ContactModal 
        isOpen={isContactModalOpen} 
        onClose={() => setIsContactModalOpen(false)} 
      />
    </AnimatePresence>
  );
};