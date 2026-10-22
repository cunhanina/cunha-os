export function initializeTypewriter(): void {
  const textNode = document.querySelector<HTMLElement>('[data-typewriter-text]');
  const heading = textNode?.closest<HTMLElement>('[data-typewriter]');
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  let typewriterTimer = 0;

  const animateDialogue = (): void => {
    if (!textNode || !heading) return;
    window.clearTimeout(typewriterTimer);
    const fullText = textNode.textContent ?? '';
    heading.setAttribute('aria-label', fullText);

    if (prefersReducedMotion || !fullText) return;
    textNode.textContent = '';
    let index = 0;

    const typeNextCharacter = (): void => {
      index += 1;
      textNode.textContent = fullText.slice(0, index);

      if (index < fullText.length) {
        typewriterTimer = window.setTimeout(typeNextCharacter, 42);
      }
    };

    typeNextCharacter();
  };

  animateDialogue();
  window.addEventListener('portfolio:languagechange', animateDialogue);
}
