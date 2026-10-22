// Typed experience timeline content.
import type { ExperienceEntry } from '../types/content';

export const experience: ExperienceEntry[] = [
  {
    id: 'experience-entry-0',
    title: 'experience.role.current',
    company: 'Bosch',
    chip: { label: 'experience.current', variant: 'current' },
    date: { start: '2026-09', end: null },
    subtitle: 'experience.employment.internship',
    location: 'experience.role.current.location',
    bullets: [
      'experience.role.current.bullet.0',
      'experience.role.current.bullet.1',
      'experience.role.current.bullet.2',
      'experience.role.current.bullet.3'
    ]
  },
  {
    id: 'experience-entry-1',
    title: 'experience.role.previous',
    company: 'Bosch',
    date: { start: '2025-07', end: '2026-08' },
    subtitle: 'experience.employment.fulltime',
    location: 'experience.role.previous.location',
    bullets: ['experience.role.previous.bullet.0', 'experience.role.previous.bullet.1']
  },
  {
    id: 'experience-entry-2',
    title: 'experience.role.apprentice',
    company: 'Bosch',
    subtitle: 'experience.employment.apprentice',
    date: { start: '2023-07', end: '2025-07' },
    location: 'experience.role.apprentice.location',
    bullets: [
      'experience.role.apprentice.bullet.0',
      'experience.role.apprentice.bullet.1',
      'experience.role.apprentice.bullet.2'
    ],
    highlights: [
      {
        label: 'experience.leadership',
        note: 'experience.leadership.date',
        bullets: ['experience.leadership.bullet.0']
      }
    ]
  }
];
