import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils';
interface ClapButtonProps {
  thoughtId: string;
  initialCount?: number;
  size?: 'sm' | 'md' | 'lg';
  onBump?: (newCount: number) => void;
}

export const ClapButton: React.FC<ClapButtonProps> = ({
  thoughtId,
  initialCount = 0,
  size = 'md',
  onBump,
}) => {
  const [count, setCount] = useState(initialCount);
  const [hasClapped, setHasClapped] = useState(false);
  const [showAnimation, setShowAnimation] = useState(false);

  // Check if user has already clapped
  useEffect(() => {
    const clapped = localStorage.getItem(`clap-${thoughtId}`);
    if (clapped === 'true') {
      setHasClapped(true);
    }
  }, [thoughtId]);

  const handleClap = async () => {
    if (hasClapped) return;

    // Optimistic update
    const newCount = count + 1;
    setCount(newCount);
    setHasClapped(true);
    setShowAnimation(true);
    
    // Store in localStorage
    localStorage.setItem(`clap-${thoughtId}`, 'true');
    
    // Trigger animation
    setTimeout(() => setShowAnimation(false), 1000);
    
    // Call callback
    onBump?.(newCount);
    
    // Here you would typically make an API call to update the server
    // try {
    //   await fetch(`/api/thoughts/${thoughtId}/clap`, { method: 'POST' });
    // } catch (error) {
    //   console.error('Failed to update clap count');
    // }
  };

  const sizeClasses = {
    sm: 'text-sm px-3 py-1.5',
    md: 'text-base px-4 py-2',
    lg: 'text-lg px-5 py-2.5',
  };

  const iconSizes = {
    sm: '16',
    md: '20',
    lg: '24',
  };

  return (
    <motion.button
      onClick={handleClap}
      disabled={hasClapped}
      className={cn(
        'relative inline-flex items-center gap-2 rounded-full',
        'bg-background-secondary border border-border',
        'transition-all duration-200',
        hasClapped
          ? 'text-foreground cursor-default border-primary/50'
          : 'text-foreground-secondary hover:text-foreground hover:border-foreground/30 hover:bg-background-tertiary',
        sizeClasses[size]
      )}
      whileHover={!hasClapped ? { scale: 1.05 } : undefined}
      whileTap={!hasClapped ? { scale: 0.95 } : undefined}
      aria-label={`Clap for this article${hasClapped ? ' (already clapped)' : ''}`}
    >
      <motion.div
        animate={showAnimation ? {
          rotate: [0, -20, 20, -20, 20, 0],
          scale: [1, 1.2, 1],
        } : {}}
        transition={{ duration: 0.5 }}
      >
        <span style={{ fontSize: iconSizes[size] + 'px' }}>👏</span>
      </motion.div>
      
      <span className="font-medium">{count}</span>

      <AnimatePresence>
        {showAnimation && (
          <motion.div
            className="absolute inset-0 pointer-events-none"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.span
              className="absolute top-1/2 left-1/2 text-2xl"
              initial={{ scale: 0, x: '-50%', y: '-50%' }}
              animate={{ 
                scale: [0, 1.5, 0],
                y: ['-50%', '-100%', '-150%'],
                opacity: [0, 1, 0]
              }}
              transition={{ duration: 0.8 }}
            >
              +1
            </motion.span>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.button>
  );
};