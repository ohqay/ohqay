import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check } from 'lucide-react';

interface ToastProps {
  message: string;
  isVisible: boolean;
}

export const Toast: React.FC<ToastProps> = ({ message, isVisible }) => {
  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.3 }}
          className="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-50"
        >
          <div className="flex items-center gap-2 px-4 py-3 bg-background-secondary border border-border rounded-full shadow-lg">
            <Check size={16} className="text-green-500" />
            <span className="text-sm text-foreground">{message}</span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};