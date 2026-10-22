// Typed education timeline content.
import type { EducationEntry } from '../types/content';

export const education: EducationEntry[] = [
  {
    id: 'education-0',
    title: 'education.0.program',
    chip: { label: 'experience.education.inProgress', variant: 'progress' },
    date: { start: '2024-03', end: '2028-12' },
    subtitle: 'education.0.institution',
    meta: 'education.0.qualification'
  },
  {
    id: 'education-1',
    title: 'education.1.program',
    chip: { label: 'experience.education.inProgress', variant: 'progress' },
    date: { start: '2026-03', end: '2027-03' },
    subtitle: 'education.1.institution',
    meta: 'education.1.qualification'
  },
  {
    id: 'education-2',
    title: 'education.2.program',
    date: { start: '2023-03', end: '2025-12' },
    subtitle: 'education.2.institution',
    meta: 'education.2.qualification'
  },
  {
    id: 'education-3',
    title: 'education.3.program',
    date: { start: '2020-02', end: '2022-12' },
    subtitle: 'education.3.institution',
    meta: 'education.3.qualification'
  }
];
