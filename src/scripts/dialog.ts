export function initializeProjectDialogs(): void {
  document.querySelectorAll<HTMLLIElement>('[data-project-card]').forEach((card) => {
    const trigger = card.querySelector<HTMLButtonElement>('[data-dialog-target]');

    card.addEventListener('click', (event) => {
      const target = event.target;
      if (target instanceof Element && target.closest('a, button')) return;
      trigger?.click();
    });
  });

  document.querySelectorAll<HTMLAnchorElement>('[data-project-repo]').forEach((repoLink) => {
    repoLink.addEventListener('click', (event) => event.stopPropagation());
  });

  document.querySelectorAll<HTMLButtonElement>('[data-dialog-target]').forEach((trigger) => {
    const dialogId = trigger.dataset.dialogTarget;
    const dialog = dialogId ? document.getElementById(dialogId) : null;

    if (!(dialog instanceof HTMLDialogElement)) return;

    const closeButton = dialog.querySelector<HTMLButtonElement>('[data-close-dialog]');
    let activeTrigger: HTMLButtonElement | null = null;

    trigger.addEventListener('click', () => {
      activeTrigger = trigger;
      dialog.showModal();
      closeButton?.focus({ preventScroll: true });
    });

    closeButton?.addEventListener('click', () => dialog.close());

    dialog.addEventListener('click', (event) => {
      if (event.target === dialog) dialog.close();
    });

    dialog.addEventListener('keydown', (event) => {
      if (event.key === 'Escape') {
        event.preventDefault();
        dialog.close();
      }
    });

    dialog.addEventListener('close', () => {
      activeTrigger?.focus({ preventScroll: true });
      activeTrigger = null;
    });
  });
}
