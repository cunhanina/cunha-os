export type { TranslationKey } from './i18n';
export type { EducationEntry, ExperienceEntry, TimelineChipData, TimelineDate, TimelineHighlightData } from './content';

import type { EducationEntry, ExperienceEntry } from './content';

export type TimelineEntryData = ExperienceEntry | EducationEntry;
