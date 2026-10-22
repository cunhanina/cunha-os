export function initializeLanguageControl(): void {
  const languageSelect = document.querySelector<HTMLSelectElement>('[data-language-select]');
  const languageCode = document.querySelector<HTMLElement>('[data-language-code]');

  const updateLanguageCode = (): void => {
    if (languageSelect && languageCode) languageCode.textContent = languageSelect.value.toUpperCase();
  };

  languageSelect?.addEventListener('change', updateLanguageCode);
  window.addEventListener('portfolio:languagechange', updateLanguageCode);
  updateLanguageCode();
}
