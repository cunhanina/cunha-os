export function initializeSkillsEvidence(): void {
  const evidenceDetails = [...document.querySelectorAll<HTMLDetailsElement>('.skill-evidence')];

  const positionEvidence = (details: HTMLDetailsElement): void => {
    const list = details.querySelector<HTMLElement>('.skill-evidence-list');
    const summary = details.querySelector('summary');

    if (!list || !summary) return;
    if (!details.open) {
      list.style.removeProperty('position');
      list.style.removeProperty('left');
      list.style.removeProperty('right');
      list.style.removeProperty('top');
      return;
    }

    const shell = details.closest('.container');
    if (!shell) return;
    list.style.position = 'fixed';
    list.style.right = 'auto';
    const bounds = shell.getBoundingClientRect();

    const shellStyle = getComputedStyle(shell);
    const contentLeft = bounds.left + Number.parseFloat(shellStyle.paddingLeft);
    const contentRight = bounds.right - Number.parseFloat(shellStyle.paddingRight);
    const gutter = Number.parseFloat(getComputedStyle(document.documentElement).getPropertyValue('--page-pad')) || 16;
    const stackGap = Number.parseFloat(getComputedStyle(document.documentElement).getPropertyValue('--stack-gap')) || 8;
    const trigger = summary.getBoundingClientRect();
    const maxLeft = contentRight - list.offsetWidth;
    const left = Math.max(contentLeft, Math.min(trigger.right - list.offsetWidth, maxLeft));
    const maxTop = window.innerHeight - gutter - list.offsetHeight;
    const belowTop = trigger.bottom + stackGap / 2;
    const preferredTop =
      belowTop + list.offsetHeight <= maxTop ? belowTop : trigger.top - list.offsetHeight - stackGap / 2;
    const top = Math.max(gutter, Math.min(preferredTop, maxTop));

    list.style.left = `${left}px`;
    list.style.top = `${top}px`;
  };

  evidenceDetails.forEach((details) => {
    details.addEventListener('toggle', () => positionEvidence(details));
  });

  window.addEventListener(
    'scroll',
    () => {
      evidenceDetails.forEach((details) => {
        if (details.open) positionEvidence(details);
      });
    },
    { passive: true }
  );

  window.addEventListener('resize', () => evidenceDetails.forEach(positionEvidence));
}
