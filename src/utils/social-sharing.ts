/**
 * Utility functions for generating social media sharing URLs
 */

export interface ShareOptions {
  url: string;
  title?: string;
  description?: string;
  hashtags?: string[];
}

/**
 * Generate a Twitter share URL
 */
export const getTwitterShareUrl = (options: ShareOptions): string => {
  const { url, title, hashtags = [] } = options;
  const params = new URLSearchParams();
  
  if (title) {
    params.set('text', title);
  }
  
  params.set('url', url);
  
  if (hashtags.length > 0) {
    params.set('hashtags', hashtags.join(','));
  }
  
  return `https://twitter.com/intent/tweet?${params.toString()}`;
};

/**
 * Generate a LinkedIn share URL
 */
export const getLinkedInShareUrl = (options: ShareOptions): string => {
  const { url } = options;
  const params = new URLSearchParams();
  
  params.set('url', url);
  
  return `https://www.linkedin.com/sharing/share-offsite/?${params.toString()}`;
};

/**
 * Generate a Facebook share URL
 */
export const getFacebookShareUrl = (options: ShareOptions): string => {
  const { url } = options;
  const params = new URLSearchParams();
  
  params.set('u', url);
  
  return `https://www.facebook.com/sharer/sharer.php?${params.toString()}`;
};

/**
 * Generate an email share URL
 */
export const getEmailShareUrl = (options: ShareOptions): string => {
  const { url, title, description } = options;
  const params = new URLSearchParams();
  
  if (title) {
    params.set('subject', title);
  }
  
  const body = [description, url].filter(Boolean).join('\n\n');
  if (body) {
    params.set('body', body);
  }
  
  return `mailto:?${params.toString()}`;
};

/**
 * Get the current page URL (client-side only)
 */
export const getCurrentUrl = (): string => {
  if (typeof window !== 'undefined') {
    return window.location.href;
  }
  return '';
};

/**
 * Open a share URL in a new window with optimal dimensions
 */
export const openShareWindow = (url: string, platform: string): void => {
  const width = 600;
  const height = 500;
  const left = (window.screen.width - width) / 2;
  const top = (window.screen.height - height) / 2;
  
  const features = `
    width=${width},
    height=${height},
    left=${left},
    top=${top},
    resizable=yes,
    scrollbars=yes,
    toolbar=no,
    menubar=no,
    location=no,
    directories=no,
    status=yes
  `.replace(/\s/g, '');
  
  window.open(url, `share_${platform}`, features);
};

/**
 * Check if the Web Share API is supported
 */
export const isWebShareSupported = (): boolean => {
  return typeof navigator !== 'undefined' && 'share' in navigator;
};

/**
 * Use native Web Share API if available, fallback to custom sharing
 */
export const shareContent = async (options: ShareOptions): Promise<void> => {
  if (isWebShareSupported()) {
    try {
      await navigator.share({
        title: options.title,
        text: options.description,
        url: options.url,
      });
    } catch (error) {
      // User cancelled or error occurred, fallback to Twitter
      const twitterUrl = getTwitterShareUrl(options);
      openShareWindow(twitterUrl, 'twitter');
    }
  } else {
    // Fallback to Twitter sharing
    const twitterUrl = getTwitterShareUrl(options);
    openShareWindow(twitterUrl, 'twitter');
  }
};