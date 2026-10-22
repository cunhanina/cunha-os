import de from './de';
import en from './en';
import pt from './pt';
import type { Translations } from '../types/i18n';

export type { Language, TranslationKey } from '../types/i18n';

export const translations = { en, pt, de } satisfies Translations;
