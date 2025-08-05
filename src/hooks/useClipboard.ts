import { useState, useCallback } from 'react';

export interface UseClipboardOptions {
  successDuration?: number;
  onSuccess?: () => void;
  onError?: (error: Error) => void;
}

export function useClipboard(options: UseClipboardOptions = {}) {
  const { successDuration = 2000, onSuccess, onError } = options;
  
  const [copied, setCopied] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  const copyToClipboard = useCallback(async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setError(null);
      onSuccess?.();
      
      // Reset copied state after duration
      setTimeout(() => {
        setCopied(false);
      }, successDuration);
    } catch (err) {
      const errorObj = err instanceof Error ? err : new Error('Failed to copy to clipboard');
      setError(errorObj);
      setCopied(false);
      onError?.(errorObj);
    }
  }, [successDuration, onSuccess, onError]);

  const reset = useCallback(() => {
    setCopied(false);
    setError(null);
  }, []);

  return {
    copied,
    error,
    copyToClipboard,
    reset,
    isSupported: typeof navigator !== 'undefined' && 'clipboard' in navigator,
  };
}