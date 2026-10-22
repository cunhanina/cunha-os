import { translations, type Language } from '../i18n';

export function initializeTimelineDates(): void {
  const formatTimelineDates = (): void => {
    const root = document.documentElement;
    const language = root.dataset.language;
    const activeLanguage: Language = language === 'pt' || language === 'de' ? language : 'en';
    const formatter = new Intl.DateTimeFormat(root.lang || activeLanguage, {
      month: 'short',
      year: 'numeric',
      timeZone: 'UTC'
    });
    const formatMonth = (value: string): string => {
      const [year, month] = value.split('-').map(Number);
      return formatter.format(new Date(Date.UTC(year, month - 1, 1, 12)));
    };

    document.querySelectorAll<HTMLElement>('[data-timeline-start]').forEach((element) => {
      const start = element.dataset.timelineStart;
      if (!start) return;
      const end = element.dataset.timelineEnd;
      const endText = end ? formatMonth(end) : translations[activeLanguage]['timeline.present'];
      element.textContent = `${formatMonth(start)} – ${endText}`;
    });
  };

  formatTimelineDates();
  window.addEventListener('portfolio:languagechange', formatTimelineDates);
}
