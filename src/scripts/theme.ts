export function initializeThemeToggle(): void {
  const toggle = document.querySelector<HTMLButtonElement>('[data-theme-toggle]');
  const value = toggle?.querySelector<HTMLElement>('[data-theme-value]');

  if (!toggle || !value) return;

  const updateThemeControl = (): void => {
    const isInkTheme = document.documentElement.dataset.theme === 'ink';
    value.dataset.i18n = isInkTheme ? 'theme.ink' : 'theme.gameboy';
    toggle.setAttribute('aria-pressed', String(isInkTheme));
    toggle.dataset.i18nAriaLabel = isInkTheme ? 'theme.useGameboy' : 'theme.useInk';
    window.dispatchEvent(new Event('portfolio:localize'));
  };

  toggle.addEventListener('click', () => {
    const nextTheme = document.documentElement.dataset.theme === 'ink' ? 'gameboy' : 'ink';
    document.documentElement.dataset.theme = nextTheme;

    try {
      window.localStorage.setItem('nina-theme', nextTheme);
    } catch {
      // Theme still changes for the current page when storage is unavailable.
    }

    updateThemeControl();
  });

  updateThemeControl();
}
