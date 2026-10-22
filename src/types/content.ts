import type { TranslationKey } from './i18n';

export type ProjectType = 'DEVOPS' | 'INTEGRATION' | 'VISION' | 'PREDICTIVE' | 'AUTOMATION' | 'AI';
export type ProjectContext = 'WORK' | 'ACADEMIC' | 'PERSONAL';
export type ProjectIconName =
  | 'backupsys'
  | 'factory-integrator'
  | 'visual-inspector'
  | 'predictive-maintenance'
  | 'color-sorting-conveyor'
  | 'fire';

export interface Project {
  order: number;
  title: string;
  type: ProjectType;
  context: ProjectContext;
  repo?: string;
  outcome: string;
  description: string;
  icon: ProjectIconName;
  tech: string[];
}

export interface SideQuest {
  name: string;
  summary: string;
  repo: string;
  demo?: string;
}

export interface SkillEvidence {
  label: string;
  translationKey: TranslationKey;
  href: string;
  external?: boolean;
  showLink?: boolean;
}

export interface Skill {
  label: string;
  evidence?: SkillEvidence[];
}

export interface SkillGroup {
  category: string;
  skills: Skill[];
}

export interface ContactLink {
  label: string;
  translationKey: TranslationKey;
  href: string;
  external: boolean;
}

export type TimelineDate = { start: string; end: string | null } | { text: TranslationKey };

export interface TimelineChipData {
  label: TranslationKey;
  variant: 'current' | 'progress';
}

export interface TimelineHighlightData {
  label: TranslationKey;
  note: TranslationKey;
  bullets: TranslationKey[];
}

interface TimelineEntryBase {
  id: string;
  titleId?: string;
  title: TranslationKey;
  chip?: TimelineChipData;
  date: TimelineDate;
  subtitle?: TranslationKey;
  meta?: TranslationKey;
  location?: TranslationKey;
  bullets?: TranslationKey[];
}

export interface ExperienceEntry extends TimelineEntryBase {
  company?: string;
  highlights?: TimelineHighlightData[];
}

export type EducationEntry = TimelineEntryBase;
