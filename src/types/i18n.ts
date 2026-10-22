import type { TranslationKey as EnglishTranslationKey } from '../i18n/en';

export type Language = 'en' | 'pt' | 'de';

export type TranslationKey = EnglishTranslationKey;

export type LocaleMessages = Record<TranslationKey, string>;

export type Translations = Record<Language, LocaleMessages>;
