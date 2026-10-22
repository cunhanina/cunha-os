// Typed contact links.
import { profile } from './profile';
import type { ContactLink } from '../types/content';

export const contactLinks: ContactLink[] = [
  { label: 'GITHUB', translationKey: 'contact.label.github', href: profile.github, external: true },
  {
    label: 'LINKEDIN',
    translationKey: 'contact.label.linkedin',
    href: 'https://linkedin.com/in/nscunha',
    external: true
  },
  { label: 'EMAIL', translationKey: 'contact.label.email', href: 'mailto:stayerim@gmail.com', external: false }
];
