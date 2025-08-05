/**
 * Date formatting utilities with consistent formatting across the application
 */

export type DateFormatType = 'long' | 'short' | 'full';

/**
 * Format a date string or Date object according to the specified format type
 * 
 * @param date - Date string or Date object to format
 * @param format - Format type: 'long', 'short', or 'full'
 * @returns Formatted date string
 * 
 * @example
 * formatDate('2024-01-15', 'long') // "January 15, 2024"
 * formatDate('2024-01-15', 'short') // "Jan 15, 2024"
 * formatDate('2024-01-15', 'full') // "Monday, January 15, 2024"
 */
export const formatDate = (date: string | Date, format: DateFormatType = 'long'): string => {
  const dateObj = typeof date === 'string' ? new Date(date) : date;
  
  if (isNaN(dateObj.getTime())) {
    console.warn('Invalid date provided to formatDate:', date);
    return 'Invalid Date';
  }

  const options: Intl.DateTimeFormatOptions = {
    timeZone: 'UTC', // Consistent timezone handling
  };

  switch (format) {
    case 'short':
      options.month = 'short';
      options.day = 'numeric';
      options.year = 'numeric';
      break;
    
    case 'full':
      options.weekday = 'long';
      options.month = 'long';
      options.day = 'numeric';
      options.year = 'numeric';
      break;
    
    case 'long':
    default:
      options.month = 'long';
      options.day = 'numeric';
      options.year = 'numeric';
      break;
  }

  return dateObj.toLocaleDateString('en-US', options);
};

/**
 * Format a date for month and year only (commonly used in case study headers)
 * 
 * @param date - Date string or Date object to format
 * @returns Formatted date string (e.g., "January 2024")
 */
export const formatMonthYear = (date: string | Date): string => {
  const dateObj = typeof date === 'string' ? new Date(date) : date;
  
  if (isNaN(dateObj.getTime())) {
    console.warn('Invalid date provided to formatMonthYear:', date);
    return 'Invalid Date';
  }

  return dateObj.toLocaleDateString('en-US', {
    month: 'long',
    year: 'numeric',
    timeZone: 'UTC',
  });
};

/**
 * Check if a date is valid
 * 
 * @param date - Date string or Date object to validate
 * @returns True if the date is valid, false otherwise
 */
export const isValidDate = (date: string | Date): boolean => {
  const dateObj = typeof date === 'string' ? new Date(date) : date;
  return !isNaN(dateObj.getTime());
};

/**
 * Get relative time string (e.g., "2 days ago", "1 month ago")
 * 
 * @param date - Date string or Date object
 * @returns Relative time string
 */
export const getRelativeTime = (date: string | Date): string => {
  const dateObj = typeof date === 'string' ? new Date(date) : date;
  
  if (isNaN(dateObj.getTime())) {
    return 'Invalid Date';
  }

  const now = new Date();
  const diffInMs = now.getTime() - dateObj.getTime();
  const diffInDays = Math.floor(diffInMs / (1000 * 60 * 60 * 24));
  
  if (diffInDays === 0) {
    return 'Today';
  } else if (diffInDays === 1) {
    return 'Yesterday';
  } else if (diffInDays < 7) {
    return `${diffInDays} days ago`;
  } else if (diffInDays < 30) {
    const weeks = Math.floor(diffInDays / 7);
    return `${weeks} week${weeks > 1 ? 's' : ''} ago`;
  } else if (diffInDays < 365) {
    const months = Math.floor(diffInDays / 30);
    return `${months} month${months > 1 ? 's' : ''} ago`;
  } else {
    const years = Math.floor(diffInDays / 365);
    return `${years} year${years > 1 ? 's' : ''} ago`;
  }
};