/**
 * Format a date string for consistent display across the application
 */
export const formatDate = (
  dateInput: string | Date,
  options: Intl.DateTimeFormatOptions = {
    month: 'short',
    day: 'numeric',
    year: 'numeric'
  }
): string => {
  const date = typeof dateInput === 'string' ? new Date(dateInput) : dateInput;
  
  if (isNaN(date.getTime())) {
    console.warn('Invalid date provided to formatDate:', dateInput);
    return 'Invalid Date';
  }
  
  return date.toLocaleDateString('en-US', options);
};

/**
 * Get a relative time string (e.g., "2 days ago", "1 month ago")
 */
export const getRelativeTime = (dateInput: string | Date): string => {
  const date = typeof dateInput === 'string' ? new Date(dateInput) : dateInput;
  const now = new Date();
  const diffInMs = now.getTime() - date.getTime();
  const diffInDays = Math.floor(diffInMs / (1000 * 60 * 60 * 24));
  
  if (diffInDays === 0) return 'Today';
  if (diffInDays === 1) return 'Yesterday';
  if (diffInDays < 7) return `${diffInDays} days ago`;
  if (diffInDays < 30) return `${Math.floor(diffInDays / 7)} weeks ago`;
  if (diffInDays < 365) return `${Math.floor(diffInDays / 30)} months ago`;
  
  return `${Math.floor(diffInDays / 365)} years ago`;
};

/**
 * Check if a date is within the last N days
 */
export const isWithinDays = (dateInput: string | Date, days: number): boolean => {
  const date = typeof dateInput === 'string' ? new Date(dateInput) : dateInput;
  const now = new Date();
  const diffInMs = now.getTime() - date.getTime();
  const diffInDays = diffInMs / (1000 * 60 * 60 * 24);
  
  return diffInDays >= 0 && diffInDays <= days;
};

/**
 * Format date for blog posts and articles
 */
export const formatArticleDate = (dateInput: string | Date): string => {
  return formatDate(dateInput, {
    month: 'long',
    day: 'numeric',
    year: 'numeric'
  });
};

/**
 * Format date for short display (e.g., in cards)
 */
export const formatShortDate = (dateInput: string | Date): string => {
  return formatDate(dateInput, {
    month: 'short',
    day: 'numeric'
  });
};