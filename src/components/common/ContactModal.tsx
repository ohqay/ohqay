import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Mail, Copy } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const CONTACT_EMAIL = 'hello@ohqay.com';

export const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose }) => {
  const [copied, setCopied] = React.useState(false);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(CONTACT_EMAIL);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      // Fallback for older browsers
      const textArea = document.createElement('textarea');
      textArea.value = CONTACT_EMAIL;
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand('copy');
      document.body.removeChild(textArea);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const handleSendEmail = () => {
    // Create mailto link with intentional action
    window.location.href = `mailto:${CONTACT_EMAIL}`;
    onClose();
  };

  // Close on escape key
  React.useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      // Prevent body scroll when modal is open
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-50 flex items-center justify-center"
        >
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
            onClick={onClose}
          />
          
          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.2, ease: 'easeOut' }}
            className={cn(
              'relative bg-background-secondary border border-border',
              'rounded-2xl shadow-xl p-6 mx-4 max-w-md w-full',
              'backdrop-blur-md'
            )}
          >
            {/* Close button */}
            <button
              onClick={onClose}
              className={cn(
                'absolute top-4 right-4 p-2 rounded-full',
                'hover:bg-accent transition-colors',
                'text-foreground-secondary hover:text-foreground'
              )}
              aria-label="Close contact modal"
            >
              <X size={16} />
            </button>

            {/* Content */}
            <div className="space-y-6">
              <div className="text-center">
                <Mail size={32} className="mx-auto mb-3 text-primary" />
                <h2 className="text-xl font-semibold text-foreground mb-2">
                  Get in touch
                </h2>
                <p className="text-foreground-secondary text-sm">
                  Ready to start a conversation? I'd love to hear from you.
                </p>
              </div>

              {/* Email display */}
              <div className="space-y-3">
                <div className={cn(
                  'flex items-center justify-between p-3 rounded-lg',
                  'bg-background border border-border'
                )}>
                  <span className="text-foreground font-mono text-sm">
                    {CONTACT_EMAIL}
                  </span>
                  <button
                    onClick={handleCopyEmail}
                    className={cn(
                      'p-2 rounded-md transition-colors',
                      'hover:bg-accent hover:text-accent-foreground',
                      copied ? 'text-green-500' : 'text-foreground-secondary'
                    )}
                    aria-label="Copy email address"
                  >
                    <Copy size={14} />
                  </button>
                </div>
                
                {copied && (
                  <motion.p
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="text-xs text-green-500 text-center"
                  >
                    Email copied to clipboard!
                  </motion.p>
                )}
              </div>

              {/* Actions */}
              <div className="flex gap-3">
                <Button
                  variant="outline"
                  onClick={onClose}
                  className="flex-1"
                >
                  Cancel
                </Button>
                <Button
                  onClick={handleSendEmail}
                  className="flex-1"
                >
                  <Mail size={16} />
                  Send Email
                </Button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};