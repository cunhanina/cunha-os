import { translations, type Language, type TranslationKey } from '../i18n';

const root = document.documentElement;
const languageSelect = document.querySelector<HTMLSelectElement>('[data-language-select]');
const supportedLanguages: Language[] = ['en', 'pt', 'de'];

function isLanguage(value: string | undefined): value is Language {
  return supportedLanguages.includes(value as Language);
}

function isTranslationKey(key: string): key is TranslationKey {
  return Object.prototype.hasOwnProperty.call(translations.en, key);
}

function translate(key: string, language: Language): string | undefined {
  if (!isTranslationKey(key)) return undefined;
  return translations[language][key] ?? translations.en[key];
}

function applyLanguage(language: Language): void {
  root.dataset.language = language;
  root.lang = language === 'pt' ? 'pt-BR' : language;

  document.querySelectorAll<HTMLElement>('[data-i18n]').forEach((element) => {
    const value = translate(element.dataset.i18n ?? '', language);
    if (value !== undefined) element.textContent = value;
  });

  document.querySelectorAll<HTMLElement>('[data-i18n-aria-label]').forEach((element) => {
    const value = translate(element.dataset.i18nAriaLabel ?? '', language);
    if (value !== undefined) element.setAttribute('aria-label', value);
  });

  document.querySelectorAll<HTMLElement>('[data-i18n-alt]').forEach((element) => {
    const value = translate(element.dataset.i18nAlt ?? '', language);
    if (value !== undefined) element.setAttribute('alt', value);
  });

  document.querySelectorAll<HTMLElement>('[data-i18n-content]').forEach((element) => {
    const value = translate(element.dataset.i18nContent ?? '', language);
    if (value !== undefined) element.setAttribute('content', value);
  });

  if (languageSelect) languageSelect.value = language;
}

export function initializeLocalization(): void {
  let currentLanguage: Language = isLanguage(root.dataset.language) ? root.dataset.language : 'en';

  languageSelect?.addEventListener('change', () => {
    const selectedLanguage = languageSelect.value;
    if (!isLanguage(selectedLanguage)) return;

    currentLanguage = selectedLanguage;
    applyLanguage(currentLanguage);
    try {
      window.localStorage.setItem('nina-language', currentLanguage);
    } catch {
      // The language still changes for the current page if storage is unavailable.
    }

    window.dispatchEvent(new Event('portfolio:languagechange'));
  });

  window.addEventListener('portfolio:localize', () => applyLanguage(currentLanguage));
  applyLanguage(currentLanguage);
  window.dispatchEvent(new Event('portfolio:languagechange'));
}
