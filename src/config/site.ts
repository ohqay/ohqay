/**
 * Site configuration constants
 * Centralized configuration for site-wide settings, contact information, and metadata
 */

export const SITE_CONFIG = {
  // Contact information
  contact: {
    email: 'hello@ohqay.com',
    subject: {
      default: 'Project Inquiry',
      general: 'General Inquiry',
      collaboration: 'Collaboration Opportunity',
    },
  },
  
  // Site metadata
  meta: {
    name: 'Ohqay',
    tagline: 'Crafted with precision',
    description: 'Multi-disciplinary creative turning ideas into reality',
    copyright: `© ${new Date().getFullYear()} Ohqay. Crafted with precision.`,
  },
  
  // Social links
  social: {
    twitter: 'https://twitter.com',
    linkedin: 'https://linkedin.com',
    github: 'https://github.com',
  },
  
  // Email templates
  emailTemplates: {
    projectInquiry: {
      subject: 'Project%20Inquiry',
      body: 'Hi%20Tarek%2C%0A%0AI%20came%20across%20your%20portfolio%20and%20I%27m%20interested%20in%20discussing%20a%20potential%20project.%0A%0AProject%20Details%3A%0A-%20Type%3A%20%0A-%20Timeline%3A%20%0A-%20Budget%20Range%3A%20%0A%0ALooking%20forward%20to%20hearing%20from%20you!%0A%0ABest%2C',
    },
  },
} as const;

// Helper functions for email generation
export const createEmailUrl = (
  subject: string = SITE_CONFIG.contact.subject.default,
  body: string = ''
): string => {
  const params = new URLSearchParams({
    subject,
    body,
  });
  return `mailto:${SITE_CONFIG.contact.email}?${params.toString()}`;
};

export const createProjectInquiryEmailUrl = (): string => {
  const { subject, body } = SITE_CONFIG.emailTemplates.projectInquiry;
  return `mailto:${SITE_CONFIG.contact.email}?subject=${subject}&body=${body}`;
};