export function initializeSkillsEvidence(): void {
  const triggers = [...document.querySelectorAll<HTMLButtonElement>('.skill-evidence-trigger')];
  let activeTrigger: HTMLButtonElement | null = null;

  const getPanel = (trigger: HTMLButtonElement): HTMLUListElement | null => {
    const panelId = trigger.getAttribute('aria-controls');
    const panel = panelId ? document.getElementById(panelId) : null;
    return panel instanceof HTMLUListElement ? panel : null;
  };

  const closePopup = (trigger: HTMLButtonElement): void => {
    const panel = getPanel(trigger);
    trigger.setAttribute('aria-expanded', 'false');
    if (panel) {
      panel.hidden = true;
      panel.removeAttribute('data-placement');
      panel.style.removeProperty('left');
      panel.style.removeProperty('max-height');
    }
    if (activeTrigger === trigger) activeTrigger = null;
  };

  const closeActivePopup = (): void => {
    if (activeTrigger) closePopup(activeTrigger);
  };

  const positionPopup = (trigger: HTMLButtonElement): void => {
    const panel = getPanel(trigger);
    const chip = trigger.closest<HTMLElement>('.skill-chip');
    if (!panel || !chip || panel.hidden) return;

    panel.removeAttribute('data-placement');
    panel.style.removeProperty('left');
    panel.style.removeProperty('max-height');

    const chipBounds = chip.getBoundingClientRect();
    let panelBounds = panel.getBoundingClientRect();
    const pageMargin =
      Number.parseFloat(getComputedStyle(document.documentElement).getPropertyValue('--page-pad')) || 16;
    const minLeft = pageMargin;
    const maxRight = window.innerWidth - pageMargin;

    if (panelBounds.left < minLeft || panelBounds.right > maxRight) {
      const rightAlignedLeft = chipBounds.right - panelBounds.width;
      const viewportSafeLeft = Math.max(minLeft, Math.min(rightAlignedLeft, maxRight - panelBounds.width));
      panel.style.left = `${viewportSafeLeft - chipBounds.left}px`;
      panelBounds = panel.getBoundingClientRect();
    }

    const gap = 6;
    const availableBelow = Math.max(0, window.innerHeight - pageMargin - chipBounds.bottom - gap);
    const availableAbove = Math.max(0, chipBounds.top - pageMargin - gap);
    const opensAbove = panelBounds.height > availableBelow && availableAbove > availableBelow;
    const availableSpace = opensAbove ? availableAbove : availableBelow;

    if (opensAbove) panel.dataset.placement = 'above';
    if (panelBounds.height > availableSpace) panel.style.maxHeight = `${availableSpace}px`;
  };

  const openPopup = (trigger: HTMLButtonElement): void => {
    closeActivePopup();
    const panel = getPanel(trigger);
    if (!panel) return;

    activeTrigger = trigger;
    trigger.setAttribute('aria-expanded', 'true');
    panel.hidden = false;
    positionPopup(trigger);
  };

  const togglePopup = (trigger: HTMLButtonElement): void => {
    if (activeTrigger === trigger) {
      closePopup(trigger);
      return;
    }
    openPopup(trigger);
  };

  const closeWhenFocusLeaves = (trigger: HTMLButtonElement, event: FocusEvent): void => {
    const chip = trigger.closest<HTMLElement>('.skill-chip');
    if (chip && event.relatedTarget instanceof Node && chip.contains(event.relatedTarget)) return;
    closePopup(trigger);
  };

  triggers.forEach((trigger) => {
    const chip = trigger.closest<HTMLElement>('.skill-chip');
    const panel = getPanel(trigger);
    trigger.addEventListener('click', () => togglePopup(trigger));
    chip?.addEventListener('focusout', (event) => closeWhenFocusLeaves(trigger, event));
    panel?.addEventListener('click', (event) => {
      const target = event.target;
      if (!(target instanceof Element) || !target.closest('a[href^="#"]')) return;
      window.setTimeout(() => closePopup(trigger), 0);
    });
  });

  document.addEventListener('click', (event) => {
    const target = event.target;
    const activeChip = activeTrigger?.closest<HTMLElement>('.skill-chip');
    if (target instanceof Node && activeChip?.contains(target)) return;
    closeActivePopup();
  });

  document.addEventListener('keydown', (event) => {
    if (event.key !== 'Escape' || !activeTrigger) return;
    const trigger = activeTrigger;
    closePopup(trigger);
    trigger.focus();
  });

  window.addEventListener('resize', () => {
    if (activeTrigger) positionPopup(activeTrigger);
  });

  window.addEventListener('portfolio:languagechange', () => {
    if (activeTrigger) positionPopup(activeTrigger);
    closeActivePopup();
  });
}
