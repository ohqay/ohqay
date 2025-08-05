import React from 'react';
import { Container } from './Container';
import { IconButton } from './IconButton';
import { Twitter, Linkedin, Github, Mail } from 'lucide-react';
import { SITE_CONFIG } from '@/config/site';

interface SocialLink {
  name: string;
  href: string;
  icon: React.ReactNode;
}

const socialLinks: SocialLink[] = [
  { name: 'Twitter', href: SITE_CONFIG.social.twitter, icon: <Twitter /> },
  { name: 'LinkedIn', href: SITE_CONFIG.social.linkedin, icon: <Linkedin /> },
  { name: 'GitHub', href: SITE_CONFIG.social.github, icon: <Github /> },
  { name: 'Email', href: `mailto:${SITE_CONFIG.contact.email}`, icon: <Mail /> },
];

export const Footer: React.FC = () => {
  return (
    <footer className="mt-auto">
      <Container>
        <div className="border-t border-border py-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-foreground-tertiary">
              {SITE_CONFIG.meta.copyright}
            </p>
            <div className="flex items-center gap-2">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <IconButton
                    icon={link.icon}
                    ariaLabel={link.name}
                    variant="ghost"
                    size="sm"
                    asChild
                  />
                </a>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
};